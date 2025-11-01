"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { GridBackground } from "@/components/ui/grid-background"
import { AnimatePresence, motion as m } from "framer-motion"
import { LocationFocusCards } from "@/components/location-focus-cards"
import { useModal } from "@/components/ui/modal-provider"
import { useState } from "react"

export default function ContactPage() {
  const { openContactModal } = useModal()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("Course Inquiry")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [emailSent, setEmailSent] = useState<boolean | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone,
          message,
          sourceTitle: 'Contact Page - Send Message',
          sourceSubtitle: subject,
        })
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setEmailSent(Boolean(data?.sent))

      try {
        const candidates = ['/brochure.pdf', '/brochur.pdf']
        let found: string | null = null
        for (const path of candidates) {
          const head = await fetch(path, { method: 'HEAD' })
          if (head.ok) { found = path; break }
        }
        if (found) {
          const a = document.createElement('a')
          a.href = found
          a.download = 'Excelsior-Brochure.pdf'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
        }
      } catch {}

      setSubmitted(true)
      setShowThanks(true)
      setTimeout(() => { setShowThanks(false); setEmailSent(null) }, 2200)
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setSubject("Course Inquiry")
      setMessage("")
    } catch (err) {
      alert('There was an issue submitting your message. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <GridBackground className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto text-center">
            <motion.h1
              className="text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch with our team across multiple locations. We're here to help you start your trading journey.
            </motion.p>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <p className="text-gray-400 text-sm">tradexcelsior@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Phone Numbers</h3>
                        <p className="text-gray-400 text-sm">Chennai - 9481817849</p>
                        <p className="text-gray-400 text-sm">Bengaluru - 63643 27653</p>
                        <p className="text-gray-400 text-sm">Hubli - 9731930609</p>
                        <p className="text-gray-400 text-sm">Belagavi - 9481704939</p>
                        <p className="text-gray-400 text-sm">Pune - 9481868529</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Locations</h3>
                        <p className="text-gray-400 text-sm">
                          Chennai, Tamil Nadu<br />
                          Bengaluru, Karnataka<br />
                          Hubli, Karnataka<br />
                          Belagavi, Karnataka<br />
                          Pune, Maharashtra
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-400 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-400 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-white/10 rounded-lg p-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-white font-semibold mb-4">Quick Support</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    For immediate assistance, check out our FAQ section or join our community forum.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-green-400 hover:text-green-300 text-sm transition-colors">
                      → View FAQ
                    </a>
                    <a href="#" className="block text-green-400 hover:text-green-300 text-sm transition-colors">
                      → Join Community
                    </a>
                    <a href="#" className="block text-green-400 hover:text-green-300 text-sm transition-colors">
                      → Schedule a Call
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                  Send us a Message
                </h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">First Name *</label>
                      <input
                        type="text"
                        className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Last Name *</label>
                      <input
                        type="text"
                        className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Email *</label>
                      <input
                        type="email"
                        className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Phone</label>
                      <input
                        type="tel"
                        className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">Subject *</label>
                    <input
                      type="text"
                      className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="Course Inquiry"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  

                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">Message *</label>
                    <textarea
                      rows={6}
                      className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none"
                      placeholder="Tell us about your trading goals and how we can help..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-gray-200"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : submitted ? 'Sent!' : 'Send Message'}
                  </Button>

                  <p className="text-gray-400 text-sm text-center">
                    We typically respond within 24 hours during business days
                  </p>
                </form>

                {/* Success Popup */}
                <AnimatePresence>
                  {showThanks && (
                    <m.div
                      className="fixed inset-0 z-50 flex items-center justify-center p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <m.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                      <m.div
                        className="relative z-10 bg-background border border-border/30 rounded-xl px-8 py-6 text-center max-w-md w-full"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 10, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.4 }}
                      >
                        <div className="text-2xl font-semibold text-white mb-2">Thank you!</div>
                        <div className="text-gray-300">We received your details and will get back to you shortly.</div>
                        {emailSent === false && (
                          <div className="text-gray-400 text-xs mt-2">(Email delivery pending — SMTP not configured)</div>
                        )}
                      </m.div>
                    </m.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Our Locations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visit us at any of our conveniently located offices across India. Our expert mentors are ready to help you start your trading journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <LocationFocusCards cards={[
                {
                  title: "Chennai",
                  state: "Tamil Nadu",
                  phone: "9481817849",
                  email: "tradexcelsior@gmail.com",
                  office: "Chennai Office",
                  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265a4b2b2b2b2%3A0x2b2b2b2b2b2b2b2b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                },
                {
                  title: "Bengaluru",
                  state: "Karnataka",
                  phone: "63643 27653",
                  email: "tradexcelsior@gmail.com",
                  office: "Bengaluru Office",
                  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4e0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                },
                {
                  title: "Hubli",
                  state: "Karnataka",
                  phone: "9731930609",
                  email: "tradexcelsior@gmail.com",
                  office: "Hubli Office",
                  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d75.1234!3d15.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d0c0c0c0c0c0%3A0x2b2b2b2b2b2b2b2b!2sHubli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                },
                {
                  title: "Belagavi",
                  state: "Karnataka",
                  phone: "9481704939",
                  email: "tradexcelsior@gmail.com",
                  office: "Belagavi Office",
                  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d74.5078!3d15.8494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66c0c0c0c0c0%3A0x2b2b2b2b2b2b2b2b!2sBelagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                },
                {
                  title: "Pune",
                  state: "Maharashtra",
                  phone: "9481868529",
                  email: "tradexcelsior@gmail.com",
                  office: "Pune Office",
                  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                }
              ]} />
            </motion.div>
          </div>
        </section>

        {/* Schedule Visit Section */}
        <section className="px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-white/10 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Schedule a Visit
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Want to meet in person? Schedule a visit to any of our offices and meet our team of expert mentors.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => openContactModal("Schedule a Visit", "Schedule a visit to our office and meet our expert mentors")}
              >
                Schedule a Visit
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GridBackground>
  )
}

