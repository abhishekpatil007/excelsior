"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Phone, Award, TrendingUp, Target, Calendar, Gift, Star } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"
import { GridBackground } from "@/components/ui/grid-background"

export default function PricingPage() {
  const questions = [
    "Want to learn stock and forex trading?",
    "Want to make consistent profits in Banknifty & Nifty Options?",
    "Want to become an expert in Intraday trading?",
    "Want to make Trading as a career option?"
  ]

  const takeaways = [
    "Stock market basics",
    "In-depth study of primary market (IPO)",
    "Detailed study of secondary market",
    "Detailed study of derivative market (Future & Options)",
    "Detailed study of commodity market (MCX)",
    "Discussion on types of investment",
    "In-depth study of fundamental analysis",
    "In-depth study of technical analysis",
    "Study of candlesticks, price action theory",
    "Study of indicators",
    "Trendlines and price patterns",
    "Intraday strategies",
    "Swing trading strategies",
    "Risk management and position sizing"
  ]

  const bonuses = [
    { 
      title: "Free Demat Account", 
      description: "For all participants & practical trading"
    },
    { 
      title: "Lifetime Online & Offline Support", 
      description: "Continuous assistance even after course completion"
    },
    { 
      title: "Screener.in Premium Access", 
      description: "Lifetime free access - Worth ₹5,000/year"
    },
    { 
      title: "RideWinners Premium Access", 
      description: "Lifetime free access - Worth ₹12,000/year"
    },
    { 
      title: "Earn During Training", 
      description: "Recover course fees in your Demat accounts"
    },
    { 
      title: "Algo Trading Access", 
      description: "Available on subscription basis"
    }
  ]

  const locations = [
    { city: "Bengaluru", phone: "6364327653" },
    { city: "Belagavi", phone: "9481704939" },
    { city: "Hubli", phone: "9731930609" },
    { city: "Chennai", phone: "9481817849" }
  ]

  return (
    <GridBackground className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full px-6 py-2 mb-6">
                <Award className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm font-medium">NISM Certified Reg No: 20210003663</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Stock Market Courses
              </h1>
              <p className="text-2xl text-gray-400 mb-12">Investment & Trading Excellence</p>
            </motion.div>

            {/* Questions */}
            <motion.div
              className="space-y-3 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {questions.map((question, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <Star className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-300">{question}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Box */}
            <motion.div
              className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  You are at the right platform now!
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  With <span className="text-green-400 font-semibold">8+ years of success</span>, Excelsior is your gateway to mastering the stock market.
                  From beginners to pros, get live training, real strategies, and expert mentorship.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Branches */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white mb-4 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
              Get in Touch
            </h2>
            <p className="text-center text-gray-400 mb-12">Connect with our branches across India</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:border-white/20 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="h-5 w-5 text-green-400" />
                      <h3 className="text-xl font-bold text-white">{location.city}</h3>
                    </div>
                    <a 
                      href={`tel:+91${location.phone}`} 
                      className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                    >
                      +91 {location.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Takeaways */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Course Takeaways
              </h2>
              <p className="text-xl text-gray-400">Complete curriculum covering all aspects of trading and investment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {takeaways.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-card/30 backdrop-blur-sm border border-border/20 rounded-lg p-4 hover:border-white/20 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.03 }}
                >
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="relative overflow-hidden bg-black rounded-2xl border border-border/20 p-12">
              <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full px-6 py-2 mb-4">
                    <Gift className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300 font-semibold">Exclusive Benefits</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    BONUS!
                  </h2>
                  <p className="text-gray-400">Premium benefits worth ₹17,000+ included with your enrollment</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bonuses.map((bonus, index) => (
                    <motion.div
                      key={index}
                      className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:border-white/20 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-white font-semibold mb-1">{bonus.title}</h3>
                          <p className="text-gray-400 text-sm">{bonus.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Duration Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full px-6 py-2 mb-4">
                <Calendar className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 font-semibold">Course Duration</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                45 Days to Master Trading
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:border-white/20 transition-all"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                
                <div className="relative z-10">
                  <Target className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-6xl font-bold text-white mb-3">15</div>
                  <p className="text-2xl text-white font-semibold mb-2">Days</p>
                  <p className="text-gray-400">Theory Training</p>
                  <div className="mt-4 pt-4 border-t border-border/20">
                    <p className="text-sm text-gray-500">Comprehensive classroom sessions</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:border-white/20 transition-all"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                
                <div className="relative z-10">
                  <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-6xl font-bold text-white mb-3">30</div>
                  <p className="text-2xl text-white font-semibold mb-2">Days</p>
                  <p className="text-gray-400">Mentorship</p>
                  <div className="mt-4 pt-4 border-t border-border/20">
                    <p className="text-sm text-gray-500">Live trading guidance & support</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  Ready to Start Your Trading Journey?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join hundreds of successful traders who transformed their financial future with Excelsior
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
                    Enroll Now
                  </button>
                  <button className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all">
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </GridBackground>
  )
}
