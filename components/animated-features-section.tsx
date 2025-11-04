"use client"

import type React from "react"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"
import { motion } from "framer-motion"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
}

const BentoCard: React.FC<BentoCardProps> = ({ title, value, subtitle, colors, delay }) => {
  return (
    <motion.div
      className="relative overflow-hidden h-full min-h-[300px] md:min-h-0 bg-black rounded-lg border border-border/20 group"
      style={{
        filter: "url(#noise)",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px 256px",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "48px 48px, 64px 64px",
            backgroundPosition: "0 0, 24px 24px",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-80 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-[shine_4s_ease-in-out_infinite] w-[200%]" />
      </div>

      <motion.div 
        className="relative z-10 p-3 sm:p-5 md:p-8 text-foreground backdrop-blur-sm h-full flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
      >
        <motion.h3 
          className="text-sm sm:text-base md:text-lg text-foreground mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4 text-foreground"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.4, type: "spring", stiffness: 200 }}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p 
            className="text-sm text-foreground/80 leading-relaxed break-words"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.5, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

export function AnimatedFeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      y: [-5, 5, -5],
      opacity: 1,
      transition: {
        y: {
          duration: 3,
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
    <section id="features" className="py-20 px-4 bg-black">
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence baseFrequency="0.4" numOctaves="2" result="noise" seed="2" type="fractalNoise" />
            <feColorMatrix in="noise" type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0.02 0.04 0.06" />
            </feComponentTransfer>
            <feComposite operator="over" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6" 
            style={{ fontFamily: "var(--font-playfair)" }}
            variants={itemVariants}
          >
            Comprehensive Trading Education
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            variants={itemVariants}
          >
            Our proven curriculum has helped over 10,000 students achieve financial independence through systematic trading education
          </motion.p>

          {/* Course Highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
            variants={containerVariants}
          >
            {[
              { number: "50+", label: "Video Lessons" },
              { number: "100+", label: "Trading Strategies" },
              { number: "24/7", label: "Community Support" },
              { number: "Lifetime", label: "Access" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                variants={floatingVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 3,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[700px]">
          <div className="md:col-span-2">
            <BentoCard
              title="Technical Analysis Mastery"
              value="Chart Patterns & Indicators"
              subtitle="Master 50+ candlestick patterns, support & resistance levels, trend analysis, RSI, MACD, Bollinger Bands, and advanced charting techniques for precise market timing and entry/exit strategies"
              colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]}
              delay={0.2}
            />
          </div>
          <BentoCard
            title="Risk Management"
            value="Capital Protection"
            subtitle="Learn position sizing, stop-loss strategies, portfolio diversification, and risk-reward ratios to protect and grow your capital systematically"
            colors={["#151515", "#252525", "#1d1d1d"]}
            delay={0.4}
          />
          <BentoCard
            title="Success Rate"
            value="95%+"
            subtitle="Our students achieve consistent profits using our proven systematic approach to trading and investing"
            colors={["#1c1c1c", "#2c2c2c", "#181818"]}
            delay={0.6}
          />
          <div className="md:col-span-2">
            <BentoCard
              title="Fundamental Analysis & Market Research"
              value="Company Valuation"
              subtitle="Master financial statement analysis, P/E ratios, debt-to-equity, cash flow analysis, sector analysis, and economic indicators for long-term wealth building"
              colors={["#171717", "#272727", "#1b1b1b"]}
              delay={0.8}
            />
          </div>
          <div className="md:col-span-3">
            <BentoCard
              title="Live Trading Sessions & Portfolio Management"
              value="Real-time Market Analysis"
              subtitle="Join daily live trading sessions, learn portfolio construction, asset allocation, rebalancing strategies, and get real-time market insights from expert traders"
              colors={["#131313", "#232323", "#191919"]}
              delay={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
