"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Mail, Phone, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  subtitle?: string
}

export function ContactModal({ isOpen, onClose, title = "Get Started", subtitle = "Fill in your details and we'll get back to you within 24 hours" }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [emailSent, setEmailSent] = useState<boolean | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          sourceTitle: title,
          sourceSubtitle: subtitle,
        }),
      })

      if (!res.ok) throw new Error('Failed to submit lead')
      const data = await res.json()
      setEmailSent(Boolean(data?.sent))

      setIsSubmitting(false)
      setIsSuccess(true)

      // attempt brochure download
      try {
        const candidates = ['/brochure.pdf', '/brochur.pdf']
        let found: string | null = null
        for (const path of candidates) {
          const head = await fetch(path, { method: 'HEAD' })
          if (head.ok) { found = path; break }
        }
        if (found) {
          const link = document.createElement('a')
          link.href = found
          link.download = 'Excelsior-Brochure.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      } catch {}

      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
        onClose()
        setEmailSent(null)
      }, 2000)
    } catch (err) {
      setIsSubmitting(false)
      alert('There was an issue submitting your details. Please try again later.')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal - Wide Layout */}
          <motion.div
            className={cn(
              "relative w-full max-w-6xl bg-background border border-border rounded-lg shadow-2xl overflow-hidden"
            )}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ 
              type: "spring", 
              duration: 0.5,
              bounce: 0.3
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-5 w-5" />
            </motion.button>

            {/* Success State */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-background/90 to-green-800/90 rounded-lg flex items-center justify-center z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                    >
                      <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-foreground mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Thank You!
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      We'll contact you soon
                      {emailSent === false && (
                        <span className="block text-xs opacity-80 mt-1">(Email delivery pending — SMTP not configured)</span>
                      )}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Grid Layout - Left Form, Right Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side: Contact Form */}
              <motion.div 
                className="p-4 sm:p-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="mb-6">
                  <span className="text-sm text-muted-foreground">
                    <User className="inline-block h-4 w-4 mr-2" />
                    Excelsior Trading Education
                    <a href="#" className="ml-2 text-sm font-medium text-primary hover:underline">
                      Learn more
                    </a>
                  </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                  {title}
                </motion.h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-foreground text-sm font-medium">
                      Full Name *
                    </label>
                    <div className="flex items-center bg-muted/40 rounded-lg px-4 py-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full ml-3 bg-transparent text-foreground focus:outline-none placeholder:text-muted-foreground"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-foreground text-sm font-medium">
                      Email Address *
                    </label>
                    <div className="flex items-center bg-muted/40 rounded-lg px-4 py-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full ml-3 bg-transparent text-foreground focus:outline-none placeholder:text-muted-foreground"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-foreground text-sm font-medium">
                      Phone Number *
                    </label>
                    <div className="flex items-center bg-muted/40 rounded-lg px-4 py-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full ml-3 bg-transparent text-foreground focus:outline-none placeholder:text-muted-foreground"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-foreground text-sm font-medium">
                      Message (Optional)
                    </label>
                    <div className="bg-muted/40 rounded-lg px-4 py-3">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-transparent text-foreground focus:outline-none placeholder:text-muted-foreground resize-none"
                        placeholder="Tell us about your trading goals..."
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants} className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Send className="h-5 w-5" />
                          <span>Submit</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Right Side: Stock Market Image */}
              <motion.div 
                className="hidden lg:block w-full h-full p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional trader analyzing stock market charts and financial data on multiple screens"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
