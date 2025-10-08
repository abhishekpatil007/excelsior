"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do I need prior trading experience to take this course?",
    answer:
      "No prior experience is required! Our Foundation course starts with the basics and gradually builds your knowledge. We cover everything from understanding what stocks are to advanced trading strategies. Even if you've never invested before, our step-by-step curriculum will guide you through the entire learning journey.",
  },
  {
    question: "How long do I have access to the course materials?",
    answer:
      "All our courses provide lifetime access. Once you enroll, you can access all videos, resources, and materials forever. You'll also receive free updates whenever we add new content or modules to keep the course current with market trends.",
  },
  {
    question: "What's the difference between the pricing tiers?",
    answer:
      "The Foundation tier covers essential concepts for beginners. Professional Trader adds advanced analysis techniques, live trading sessions, and community access. Elite Masterclass includes everything plus 1-on-1 coaching, algorithmic trading, options strategies, and dedicated support for serious investors who want personalized mentorship.",
  },
  {
    question: "Will I learn both day trading and long-term investing?",
    answer:
      "Yes! Our comprehensive curriculum covers multiple trading styles including day trading, swing trading, and long-term value investing. You'll learn technical analysis for short-term trades and fundamental analysis for long-term investments, allowing you to choose the approach that fits your goals and schedule.",
  },
  {
    question: "Do you provide real trading examples and case studies?",
    answer:
      "Absolutely! Every concept is reinforced with real market examples and case studies. Our Professional and Elite tiers include live trading sessions where you can watch real trades being analyzed and executed. We also provide access to real portfolio examples so you can see how successful traders apply these strategies.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for all courses. If you're not satisfied with the content within the first 30 days of enrollment, simply contact our support team for a full refund—no questions asked.",
  },
  {
    question: "How much capital do I need to start trading?",
    answer:
      "You can start learning immediately without any capital. When you're ready to trade, you can begin with as little as $500-$1000. We teach proper position sizing and risk management so you can grow your account safely regardless of your starting capital. The course focuses on building skills, not requiring large investments.",
  },
  {
    question: "Will I get support if I have questions during the course?",
    answer:
      "Yes! All plans include support. Foundation students get email support, Professional Trader students receive priority support and community access, while Elite Masterclass students get 24/7 dedicated support plus monthly 1-on-1 coaching sessions to answer your specific questions and review your trades.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Common questions about our stock market courses. Still have questions? Reach out to our team.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          
          
        </motion.div>
      </div>
    </section>
  )
}
