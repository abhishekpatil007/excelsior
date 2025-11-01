"use client"

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"
import { useModal } from "./ui/modal-provider"
import { motion } from "framer-motion"

export function HeroSection() {
  const { openContactModal } = useModal()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const floatingVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [-10, 10, -10],
      opacity: 1,
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
        },
      },
    },
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-8" 
            style={{ fontFamily: "var(--font-playfair)" }}
            variants={itemVariants}
          >
            Trade Smart
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 font-light"
            variants={itemVariants}
          >
            Invest Wisely • Build Wealth
          </motion.p>
        </motion.div>
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight"
            variants={itemVariants}
          >
            Master Stock Market Trading & Build Your Financial Future
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join thousands of successful traders who have transformed their financial lives with our comprehensive trading education. Learn from industry experts, master proven strategies, and build sustainable wealth through intelligent investing.
          </motion.p>

          {/* Key Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              { number: "10,000+", label: "Successful Students" },
              { number: "₹50L+", label: "Average Portfolio Growth" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                variants={floatingVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-200 text-black group text-lg px-8 py-4"
                onClick={() => openContactModal("Start Your Trading Journey", "Fill in your details and we'll help you begin your trading education")}
              >
                Start Your Trading Journey
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent text-lg px-8 py-4"
                onClick={() => openContactModal("Watch Free Masterclass", "Get access to our free masterclass and learn the basics of trading")}
              >
                Watch Free Masterclass
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 mb-8 opacity-60"
            variants={itemVariants}
          >
            <div className="text-gray-400 text-sm">Trusted by</div>
            {["NSE", "BSE", "SEBI", "NISM"].map((org, index) => (
              <motion.div 
                key={org}
                className="text-white font-semibold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
              >
                {org}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 mb-8"
            variants={itemVariants}
          >
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <motion.div 
                  className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-end text-sm text-gray-400">stock market running board</p>
                </motion.div>
                <motion.div 
                  className="relative py-6 md:w-[calc(100%-11rem)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                    <div className="flex items-center gap-2 px-4">
                      <span className="text-white font-semibold text-sm">RELIANCE</span>
                      <span className="text-white/80 text-sm">₹2,845.50</span>
                      <span className="text-green-400 text-xs">+1.8%</span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <span className="text-white font-semibold text-sm">TCS</span>
                      <span className="text-white/80 text-sm">₹3,678.25</span>
                      <span className="text-green-400 text-xs">+2.1%</span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <span className="text-white font-semibold text-sm">INFY</span>
                      <span className="text-white/80 text-sm">₹1,523.40</span>
                      <span className="text-green-400 text-xs">+1.5%</span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <span className="text-white font-semibold text-sm">HDFCBANK</span>
                      <span className="text-white/80 text-sm">₹1,645.80</span>
                      <span className="text-red-400 text-xs">-0.7%</span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <span className="text-white font-semibold text-sm">ICICIBANK</span>
                      <span className="text-white/80 text-sm">₹1,098.35</span>
                      <span className="text-green-400 text-xs">+2.3%</span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <span className="text-white font-semibold text-sm">WIPRO</span>
                      <span className="text-white/80 text-sm">₹456.70</span>
                      <span className="text-green-400 text-xs">+1.2%</span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <span className="text-white font-semibold text-sm">BHARTIARTL</span>
                      <span className="text-white/80 text-sm">₹1,234.90</span>
                      <span className="text-green-400 text-xs">+3.4%</span>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                      <span className="text-white font-semibold text-sm">ITC</span>
                      <span className="text-white/80 text-sm">₹412.60</span>
                      <span className="text-red-400 text-xs">-0.4%</span>
                    </div>
                  </InfiniteSlider>

                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
