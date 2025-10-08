"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"
import { Check, TrendingUp, Users, Award, Target, Zap, Shield, BarChart3, BookOpen, Globe, Clock, Star, X, Monitor, Play, Download, CheckCircle2, Smartphone, Lock, FileText, Video } from "lucide-react"
import { GridBackground } from "@/components/ui/grid-background"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function WhyUsPage() {
  return (
    <GridBackground className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-32">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Why Choose Excelsior?
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're not just another stock market course. We're your partner in building lasting wealth through proven strategies and personalized mentorship.
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Button size="lg" className="bg-white hover:bg-gray-200 text-black">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                  View Curriculum
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section - Enhanced */}
        <section className="px-4 mb-32">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
            >
              {[
                { icon: Users, number: "10,000+", label: "Students Trained", color: "#1a1a1a" },
                { icon: TrendingUp, number: "85%", label: "Success Rate", color: "#151515" },
                { icon: Star, number: "4.9/5", label: "Average Rating", color: "#1c1c1c" },
                { icon: Clock, number: "24/7", label: "Support Available", color: "#171717" }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-6 md:p-8 text-center group hover:border-white/20 transition-all"
                  >
                    <AnimatedGradient colors={[stat.color, "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                    <div className="relative z-10">
                      <Icon className="h-8 w-8 text-white/60 mx-auto mb-4" />
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Our Methodology */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Our Proven Methodology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach that transforms beginners into confident traders
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  step: "01",
                  title: "Learn Fundamentals",
                  description: "Master the core concepts of stock market trading with comprehensive video lessons and interactive quizzes.",
                  color: ["#1a1a1a", "#2a2a2a", "#1f1f1f"]
                },
                {
                  icon: BarChart3,
                  step: "02",
                  title: "Practice & Analyze",
                  description: "Apply your knowledge in simulated trading environments and learn to analyze real market scenarios.",
                  color: ["#151515", "#252525", "#1d1d1d"]
                },
                {
                  icon: Target,
                  step: "03",
                  title: "Execute with Confidence",
                  description: "Start trading with real money using proven strategies and continuous mentor support.",
                  color: ["#1c1c1c", "#2c2c2c", "#181818"]
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-8 group hover:border-white/20 transition-all"
                  >
                    <AnimatedGradient colors={item.color} speed={0.05} blur="medium" />
                    <div className="relative z-10">
                      <div className="text-5xl font-bold text-white/10 mb-4">{item.step}</div>
                      <Icon className="h-12 w-12 text-white mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Key Differentiators - Enhanced Grid Layout */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the difference that professional mentorship and proven strategies make
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Live Market Analysis",
                  description: "Join daily live sessions where we analyze real market movements, not just theory from textbooks. Watch expert traders make decisions in real-time.",
                  color: ["#1a1a1a", "#2a2a2a", "#1f1f1f"]
                },
                {
                  icon: Award,
                  title: "Proven Track Record",
                  description: "Our mentors have collectively managed over ₹500 Crores in portfolios with consistent returns. Learn from those who've walked the path.",
                  color: ["#151515", "#252525", "#1d1d1d"]
                },
                {
                  icon: Users,
                  title: "Thriving Community",
                  description: "Access to a private community of 5000+ active traders sharing insights and strategies daily. Network with like-minded investors.",
                  color: ["#1c1c1c", "#2c2c2c", "#181818"]
                },
                {
                  icon: Globe,
                  title: "Lifetime Updates",
                  description: "Markets evolve, and so does our curriculum. Get free access to all new content, strategies, and market analysis tools forever.",
                  color: ["#171717", "#272727", "#1b1b1b"]
                },
                {
                  icon: Shield,
                  title: "Risk-First Approach",
                  description: "We prioritize capital preservation above all. Learn sophisticated risk management techniques used by institutional traders.",
                  color: ["#131313", "#232323", "#191919"]
                },
                {
                  icon: BarChart3,
                  title: "Advanced Tools Access",
                  description: "Get exclusive access to proprietary screeners, scanners, and analysis tools worth ₹50,000+ absolutely free with your enrollment.",
                  color: ["#181818", "#282828", "#1e1e1e"]
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-8 group hover:border-white/20 transition-all"
                  >
                    <AnimatedGradient colors={item.color} speed={0.05} blur="medium" />
                    <div className="relative z-10">
                      <Icon className="h-10 w-10 text-white mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Comparison Section - Us vs Others */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Excelsior vs Others
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See why thousands choose us for their trading education
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center md:text-left">
                <div className="text-lg font-semibold text-gray-400 mb-6">Feature</div>
                <div className="space-y-4">
                  {[
                    "Live Trading Sessions",
                    "Personal Mentorship",
                    "Community Support",
                    "Lifetime Access",
                    "Money-Back Guarantee",
                    "Advanced Tools Included",
                    "1-on-1 Portfolio Review",
                    "Tax Strategy Guidance"
                  ].map((feature, index) => (
                    <div key={index} className="text-gray-300 py-4 border-b border-border/20">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-black rounded-xl border-2 border-white/30 p-6"
              >
                <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-white mb-2">Excelsior</div>
                    <div className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      BEST VALUE
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[true, true, true, true, true, true, true, true].map((value, index) => (
                      <div key={index} className="flex justify-center py-4 border-b border-border/20">
                        <Check className="h-6 w-6 text-green-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="relative overflow-hidden bg-card/30 rounded-xl border border-border/20 p-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-gray-400 mb-2">Others</div>
                  <div className="h-6"></div>
                </div>
                <div className="space-y-4">
                  {[false, false, false, false, false, false, false, false].map((value, index) => (
                    <div key={index} className="flex justify-center py-4 border-b border-border/20">
                      <X className="h-6 w-6 text-red-400/60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Excelsior Advantage */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                The Excelsior Advantage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive benefits that ensure your trading success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Practical, real-world trading strategies used by professional traders",
                "Risk management techniques to protect your capital in volatile markets",
                "Technical and fundamental analysis taught by industry veterans",
                "Personal mentorship and 1-on-1 portfolio reviews for premium students",
                "Access to proprietary trading tools and screeners worth ₹50,000+",
                "Case studies of actual trades with detailed profit/loss breakdowns",
                "Psychology of trading - master your emotions for consistent profits",
                "Tax optimization strategies for traders and investors in India",
                "Weekly market outlook and sector analysis reports",
                "Exclusive webinars with successful traders and industry experts",
                "Priority support via dedicated Telegram and WhatsApp groups",
                "Certificate of completion recognized by trading institutions"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-card/30 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:bg-card/50 transition-all group"
                >
                  <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Highlight */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Real Results from Real Students
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands who've transformed their financial future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Went from complete beginner to making ₹2L/month consistently within 6 months.",
                  author: "Rajesh K.",
                  role: "Software Engineer",
                  returns: "+145% Returns"
                },
                {
                  quote: "The risk management techniques saved me during the market crash. Best investment I made.",
                  author: "Priya S.",
                  role: "Business Owner",
                  returns: "Portfolio Protected"
                },
                {
                  quote: "1-on-1 mentorship was game-changing. My mentor helped me build a ₹10L portfolio.",
                  author: "Amit P.",
                  role: "Marketing Manager",
                  returns: "₹10L Portfolio"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-8"
                >
                  <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                  <div className="relative z-10">
                    <div className="text-white/20 text-6xl font-serif mb-4">"</div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                    <div className="border-t border-border/20 pt-4">
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-green-400 font-semibold mt-2">{testimonial.returns}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LMS Portal Access Section */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full px-6 py-2 mb-6">
                <Monitor className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm font-medium">Advanced Learning Platform</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Premium LMS Portal Access
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your complete learning ecosystem with lifetime access to our state-of-the-art Learning Management System
              </p>
            </motion.div>

            {/* Main LMS Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-black rounded-2xl border-2 border-white/20 p-8 md:p-12 mb-8"
            >
              <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                      Learn Anytime, Anywhere
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      Access your entire course library, track your progress, and continue learning at your own pace. 
                      Our LMS portal is designed to provide you with a seamless and engaging learning experience, 
                      available 24/7 on all your devices.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Lifetime access to all course materials",
                        "Automatic updates with new content",
                        "Mobile, tablet, and desktop compatible",
                        "Secure login with personal dashboard"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300 text-lg">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6">
                      <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center border border-border/20">
                        <Monitor className="h-24 w-24 text-white/20" />
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-400 text-sm">Portal Active • Available Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LMS Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Video,
                  title: "HD Video Lessons",
                  description: "Access 100+ hours of professionally recorded video content covering all aspects of trading, from basics to advanced strategies.",
                  color: ["#1a1a1a", "#2a2a2a", "#1f1f1f"]
                },
                {
                  icon: Play,
                  title: "Live Session Recordings",
                  description: "Never miss a beat! All live sessions are recorded and available on the portal within hours for review anytime.",
                  color: ["#151515", "#252525", "#1d1d1d"]
                },
                {
                  icon: Download,
                  title: "Downloadable Resources",
                  description: "PDF guides, trading templates, cheat sheets, and worksheets - download and keep forever for offline reference.",
                  color: ["#1c1c1c", "#2c2c2c", "#181818"]
                },
                {
                  icon: BarChart3,
                  title: "Progress Tracking",
                  description: "Visual dashboards show your learning progress, completed modules, quiz scores, and skill development over time.",
                  color: ["#171717", "#272727", "#1b1b1b"]
                },
                {
                  icon: FileText,
                  title: "Interactive Quizzes",
                  description: "Test your knowledge with chapter-wise quizzes, mock tests, and practical assignments with instant feedback.",
                  color: ["#131313", "#232323", "#191919"]
                },
                {
                  icon: Smartphone,
                  title: "Mobile App Access",
                  description: "Learn on-the-go with our iOS and Android apps. Sync progress seamlessly across all your devices.",
                  color: ["#181818", "#282828", "#1e1e1e"]
                },
                {
                  icon: Lock,
                  title: "Secure & Private",
                  description: "Your data is protected with enterprise-grade encryption. Each student gets a personalized, secure login.",
                  color: ["#1a1a1a", "#2a2a2a", "#1f1f1f"]
                },
                {
                  icon: BookOpen,
                  title: "Organized Curriculum",
                  description: "Content structured in easy-to-follow modules with recommended learning paths tailored to your skill level.",
                  color: ["#151515", "#252525", "#1d1d1d"]
                },
                {
                  icon: Globe,
                  title: "Community Forum",
                  description: "Built-in discussion forums to ask questions, share insights, and connect with fellow traders within the portal.",
                  color: ["#1c1c1c", "#2c2c2c", "#181818"]
                }
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-6 group hover:border-white/20 transition-all"
                  >
                    <AnimatedGradient colors={feature.color} speed={0.05} blur="medium" />
                    <div className="relative z-10">
                      <Icon className="h-10 w-10 text-green-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* LMS Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { number: "150+", label: "Video Lessons" },
                { number: "50+", label: "PDF Resources" },
                { number: "24/7", label: "Portal Access" },
                { number: "Lifetime", label: "Free Updates" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-card/30 backdrop-blur-sm border border-border/20 rounded-lg p-6 hover:border-white/20 transition-all"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Portal CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-8">
                <p className="text-gray-300 text-lg mb-6">
                  Get instant access to our premium LMS portal when you enroll. Start learning within minutes of signup!
                </p>
                <Button size="lg" className="bg-white hover:bg-gray-200 text-black text-lg px-8">
                  Get Portal Access Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guarantee Section - Enhanced */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-black border-2 border-white/20 rounded-2xl p-12 md:p-16 text-center"
            >
              <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
              <div className="relative z-10">
                <Shield className="h-16 w-16 text-white mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                  Our Iron-Clad Promise to You
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                  We're so confident in our training that we offer a 30-day money-back guarantee. If you're not satisfied with the course quality, get a full refund—no questions asked.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                  <p className="text-gray-300 text-lg mb-4">
                    "Your success is our success. We're committed to your trading journey and will support you every step of the way."
                  </p>
                  <div className="text-white font-semibold">- The Excelsior Team</div>
                </div>
                <Button size="lg" className="bg-white hover:bg-gray-200 text-black text-lg px-8">
                  Enroll Risk-Free Today
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </GridBackground>
  )
}

