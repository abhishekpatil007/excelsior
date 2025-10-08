"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { GridBackground } from "@/components/ui/grid-background"

export default function ContactPage() {
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
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have questions? We're here to help you start your trading journey
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
                        <p className="text-gray-400 text-sm">support@excelsior.com</p>
                        <p className="text-gray-400 text-sm">admissions@excelsior.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Phone</h3>
                        <p className="text-gray-400 text-sm">+91 98765 43210</p>
                        <p className="text-gray-400 text-sm">+91 98765 43211</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Address</h3>
                        <p className="text-gray-400 text-sm">
                          Excelsior Trading Academy<br />
                          123 Financial District<br />
                          Mumbai, Maharashtra 400001
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
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">First Name *</label>
                      <input
                        type="text"
                        className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Last Name *</label>
                      <input
                        type="text"
                        className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="Doe"
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
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 text-sm font-medium">Phone</label>
                      <input
                        type="tel"
                        className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">Subject *</label>
                    <input
                      type="text"
                      className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="Course Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">Interested In</label>
                    <select className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors">
                      <option value="">Select a course</option>
                      <option value="foundation">Foundation Course</option>
                      <option value="professional">Professional Trader</option>
                      <option value="elite">Elite Masterclass</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">Message *</label>
                    <textarea
                      rows={6}
                      className="w-full bg-background/50 border border-border/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none"
                      placeholder="Tell us about your trading goals and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-gray-200"
                  >
                    Send Message
                  </Button>

                  <p className="text-gray-400 text-sm text-center">
                    We typically respond within 24 hours during business days
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map or Additional Info */}
        <section className="px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-white/10 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Want to meet in person? Schedule a visit to our Mumbai office and meet our team of expert mentors.
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
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

