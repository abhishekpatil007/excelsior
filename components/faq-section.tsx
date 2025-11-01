"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Do I need prior trading experience to take this course?",
    answer:
      "No prior experience is required! Our Foundation course starts with the absolute basics and gradually builds your knowledge. We cover everything from understanding what stocks are, how markets work, to advanced trading strategies. Even if you've never invested before, our step-by-step curriculum will guide you through the entire learning journey. Our students range from complete beginners to experienced professionals looking to refine their skills.",
  },
  {
    question: "How long do I have access to the course materials?",
    answer:
      "All our courses provide lifetime access with no expiration date. Once you enroll, you can access all videos, resources, materials, and updates forever. You'll also receive free updates whenever we add new content, modules, or market analysis to keep the course current with evolving market trends and regulations. This includes access to our growing library of case studies and real-time market analysis.",
  },
  {
    question: "What's the difference between the pricing tiers?",
    answer:
      "Foundation (₹9,999): Essential concepts for beginners with 20+ video lessons, basic strategies, and email support. Professional Trader (₹24,999): Advanced analysis techniques, live trading sessions, community access, 50+ lessons, and priority support. Elite Masterclass (₹49,999): Everything plus 1-on-1 coaching, algorithmic trading, options strategies, 100+ lessons, 24/7 support, and personalized mentorship for serious investors.",
  },
  {
    question: "Will I learn both day trading and long-term investing?",
    answer:
      "Yes! Our comprehensive curriculum covers multiple trading styles including day trading, swing trading, position trading, and long-term value investing. You'll learn technical analysis for short-term trades, fundamental analysis for long-term investments, and how to combine both approaches. This allows you to choose the strategy that fits your goals, schedule, and risk tolerance.",
  },
  {
    question: "Do you provide real trading examples and case studies?",
    answer:
      "Absolutely! Every concept is reinforced with real market examples, live case studies, and actual trade analysis. Our Professional and Elite tiers include daily live trading sessions where you can watch real trades being analyzed and executed in real-time. We also provide access to real portfolio examples, trade journals, and success stories so you can see how successful traders apply these strategies in different market conditions.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a comprehensive 30-day money-back guarantee for all courses. If you're not completely satisfied with the content, quality, or value within the first 30 days of enrollment, simply contact our support team for a full refund—no questions asked. We're confident in our curriculum and want you to be completely satisfied with your investment in your financial education.",
  },
  {
    question: "How much capital do I need to start trading?",
    answer:
      "You can start learning immediately without any capital. When you're ready to trade, you can begin with as little as ₹10,000-₹25,000. We teach proper position sizing, risk management, and capital allocation so you can grow your account safely regardless of your starting capital. The course focuses on building skills and knowledge first, not requiring large investments. Many successful traders started with small amounts and grew their accounts systematically.",
  },
  {
    question: "Will I get support if I have questions during the course?",
    answer:
      "Yes! All plans include comprehensive support. Foundation students get email support with 24-48 hour response time. Professional Trader students receive priority support, community access, and weekly Q&A sessions. Elite Masterclass students get 24/7 dedicated support, monthly 1-on-1 coaching sessions, direct access to instructors, and personalized feedback on your trades and strategies.",
  },
  {
    question: "What trading platforms and tools do you recommend?",
    answer:
      "We provide detailed guidance on the best trading platforms for Indian markets including Zerodha, Upstox, Angel One, and others. We also teach you how to use essential tools like TradingView for charting, Screener.in for stock analysis, and various mobile apps for on-the-go trading. Our course includes platform-specific tutorials and setup guides to get you started quickly.",
  },
  {
    question: "How long does it take to become profitable?",
    answer:
      "The timeline varies based on your dedication and practice. Most students start seeing consistent results within 3-6 months of dedicated learning and practice. However, becoming a consistently profitable trader typically takes 6-12 months of regular practice and application. We emphasize that trading is a skill that requires continuous learning and practice, not a get-rich-quick scheme.",
  },
  {
    question: "Do you cover options trading and derivatives?",
    answer:
      "Yes! Our Elite Masterclass includes comprehensive coverage of options trading, futures, and other derivatives. We teach options strategies, Greeks, volatility trading, and risk management for derivatives. This advanced content is designed for students who want to expand beyond basic stock trading and explore more sophisticated trading instruments.",
  },
  {
    question: "Is the course updated with current market conditions?",
    answer:
      "Absolutely! We regularly update our content to reflect current market conditions, new regulations, and emerging trends. Our live sessions analyze current market events, and we provide monthly market outlook reports. The course content is continuously refined based on market changes and student feedback to ensure relevance and accuracy.",
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
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Get answers to the most common questions about our comprehensive stock market trading courses. Our expert team is here to help you succeed in your trading journey.
          </p>
          
          {/* Quick Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-2xl font-bold text-white mb-2">12</div>
              <div className="text-gray-300 text-sm">Comprehensive FAQs</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Expert Support</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 text-sm">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm"
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

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          
          
        </div>
      </div>
    </section>
  )
}
