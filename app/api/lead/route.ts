import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"

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
    const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
    const hasGmailOAuth = !!(
      process.env.GMAIL_CLIENT_ID &&
      process.env.GMAIL_CLIENT_SECRET &&
      process.env.GMAIL_REFRESH_TOKEN &&
      process.env.GMAIL_USER
    )

    let sent = false

    // Prefer Resend if available (simpler auth, no SMTP needed)
    if (hasResend) {
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

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USER,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
          } as any,
        })

        await transporter.sendMail({
          to: toEmail,
          from: process.env.GMAIL_USER,
          subject,
          text,
        })
        sent = true
      } catch (e) {
        console.warn('Gmail OAuth send failed:', e)
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


