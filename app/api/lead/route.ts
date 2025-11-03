import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"
import { google } from "googleapis"
import emailjs from "@emailjs/nodejs"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, sourceTitle, sourceSubtitle } = body || {}

    if (!name || !email || !phone) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    const toEmail = process.env.TO_EMAIL || "Tradexcelsior@gmail.com"
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || "no-reply@localhost"

    const hasResend = !!process.env.RESEND_API_KEY
    const hasEmailJS = !!(process.env.EMAILJS_PUBLIC_KEY && process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID)
    const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
    const hasGmailOAuth = !!(
      process.env.GMAIL_CLIENT_ID &&
      process.env.GMAIL_CLIENT_SECRET &&
      process.env.GMAIL_REFRESH_TOKEN &&
      process.env.GMAIL_USER
    )

    let sent = false

    // Debug: log which providers are available
    console.log('Email providers check:', { hasResend, hasEmailJS, hasSmtp, hasGmailOAuth })

    // Prioritize EmailJS (simplest setup)
    if (hasEmailJS) {
      try {
        await emailjs.send(
          process.env.EMAILJS_SERVICE_ID!,
          process.env.EMAILJS_TEMPLATE_ID!,
          {
            to_email: toEmail,
            from_name: name,
            from_email: email,
            phone: phone || "-",
            subject: `${sourceTitle || "New Lead"} - ${sourceSubtitle || ""}`,
            message: message || "-",
            source_title: sourceTitle || "-",
            source_subtitle: sourceSubtitle || "-",
          },
          {
            publicKey: process.env.EMAILJS_PUBLIC_KEY!,
          }
        )
        sent = true
        console.log('EmailJS sent successfully')
      } catch (e) {
        console.error("EmailJS send failed:", e)
      }
    } else if (hasResend) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const subject = `New Lead: ${name} (${email})`
        const text = [
          `Source Title: ${sourceTitle || "-"}`,
          `Source Subtitle: ${sourceSubtitle || "-"}`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Message: ${message || "-"}`,
          `Time: ${new Date().toISOString()}`,
        ].join("\n")

        await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject,
          text,
        })
        sent = true
      } catch (e) {
        console.warn("Resend send failed:", e)
      }
    } else if (hasGmailOAuth) {
      try {
        const subject = `New Lead: ${name} (${email})`
        const text = [
          `Source Title: ${sourceTitle || "-"}`,
          `Source Subtitle: ${sourceSubtitle || "-"}`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Message: ${message || "-"}`,
          `Time: ${new Date().toISOString()}`,
        ].join("\n")

        // Use googleapis for Gmail OAuth2
        const oauth2Client = new google.auth.OAuth2(
          process.env.GMAIL_CLIENT_ID,
          process.env.GMAIL_CLIENT_SECRET,
          'https://developers.google.com/oauthplayground'
        )

        oauth2Client.setCredentials({
          refresh_token: process.env.GMAIL_REFRESH_TOKEN,
        })

        const gmail = google.gmail({ version: 'v1', auth: oauth2Client })

        // Create email message
        const emailContent = [
          `To: ${toEmail}`,
          `From: ${process.env.GMAIL_USER}`,
          `Subject: ${subject}`,
          '',
          text,
        ].join('\n')

        const encodedMessage = Buffer.from(emailContent).toString('base64')

        await gmail.users.messages.send({
          userId: 'me',
          requestBody: {
            raw: encodedMessage,
          },
        })

        sent = true
      } catch (e: any) {
        console.error('Gmail OAuth send failed:', e)
        console.error('Error message:', e?.message)
        console.error('Error code:', e?.code)
        if (e?.response?.data) {
          console.error('Error details:', JSON.stringify(e.response.data, null, 2))
        }
      }
    } else if (hasSmtp) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Boolean(process.env.SMTP_SECURE === "true"),
        auth: {
          user: process.env.SMTP_USER as string,
          pass: process.env.SMTP_PASS as string,
        },
      })

      const subject = `New Lead: ${name} (${email})`
      const text = [
        `Source Title: ${sourceTitle || "-"}`,
        `Source Subtitle: ${sourceSubtitle || "-"}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Message: ${message || "-"}`,
        `Time: ${new Date().toISOString()}`,
      ].join("\n")

      try {
        await transporter.sendMail({
          to: toEmail,
          from: fromEmail,
          subject,
          text,
        })
        sent = true
      } catch (e) {
        console.warn("SMTP send failed:", e)
        sent = false
      }
    } else {
      console.warn("No email provider configured (RESEND_API_KEY or SMTP). Attempting FormSubmit fallback.")
      try {
        // FormSubmit fallback (one-time confirmation required on first email)
        const subject = `New Lead: ${name} (${email})`
        const text = [
          `Source Title: ${sourceTitle || "-"}`,
          `Source Subtitle: ${sourceSubtitle || "-"}`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Message: ${message || "-"}`,
          `Time: ${new Date().toISOString()}`,
        ].join("\n")

        const resp = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: subject,
            name,
            email,
            phone,
            message: text,
          }),
        })
        if (resp.ok) sent = true
      } catch (e) {
        console.warn("FormSubmit fallback failed:", e)
      }
    }

    return NextResponse.json({ ok: true, sent })
  } catch (error) {
    console.error("Lead API error", error)
    return NextResponse.json({ ok: false, error: "Internal Server Error" }, { status: 500 })
  }
}


