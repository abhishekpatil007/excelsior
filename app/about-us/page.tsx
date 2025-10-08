"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"
import { TrendingUp, Users, Award, Target, Heart, Lightbulb, Shield, Rocket, BarChart3, BookOpen, Star, CheckCircle2, Globe } from "lucide-react"
import { GridBackground } from "@/components/ui/grid-background"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
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
              <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full px-6 py-2 mb-6">
                <Star className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm font-medium">Since 2016 - Empowering Traders Nationwide</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                About Excelsior
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                We're on a mission to democratize stock market education and empower individuals 
                to take control of their financial future through expert-led training and proven strategies.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-white hover:bg-gray-200 text-black">
                  Join Our Community
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                  Our Impact
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
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
                { icon: Users, number: "15,000+", label: "Students Worldwide", color: "#1a1a1a" },
                { icon: Award, number: "8+", label: "Years of Excellence", color: "#151515" },
                { icon: Globe, number: "12+", label: "Cities Across India", color: "#1c1c1c" },
                { icon: Star, number: "4.9/5", label: "Average Rating", color: "#171717" }
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

        {/* Our Story */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Our Story
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From humble beginnings to India's leading stock market education platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-8 group hover:border-white/20 transition-all"
              >
                <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                <div className="relative z-10">
                  <BookOpen className="h-12 w-12 text-white mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    The Beginning
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Founded in 2016, Excelsior started with a simple vision: to bridge the knowledge gap in 
                    stock market education. Our founders, seasoned traders with decades of combined experience, 
                    recognized that quality trading education was inaccessible to most Indians.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-8 group hover:border-white/20 transition-all"
              >
                <AnimatedGradient colors={["#151515", "#252525", "#1d1d1d"]} speed={0.05} blur="medium" />
                <div className="relative z-10">
                  <Rocket className="h-12 w-12 text-white mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    The Growth
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    What began as weekend workshops for 20 students has evolved into a comprehensive 
                    platform serving thousands across India. Today, we operate in 12+ cities, offering 
                    both in-person and online training, with NISM-certified instructors.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Mission & Vision
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Guided by purpose, driven by passion
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-black rounded-2xl border border-border/20 p-10 group hover:border-white/20 transition-all"
              >
                <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                <div className="relative z-10">
                  <Target className="h-14 w-14 text-green-400 mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                    Our Mission
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    To provide world-class stock market education that is accessible, practical, and results-driven. 
                    We believe everyone deserves the opportunity to build wealth through smart investing and trading.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Make quality education accessible to all",
                      "Focus on practical, real-world application",
                      "Build a supportive trading community",
                      "Prioritize student success above all"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden bg-black rounded-2xl border border-border/20 p-10 group hover:border-white/20 transition-all"
              >
                <AnimatedGradient colors={["#151515", "#252525", "#1d1d1d"]} speed={0.05} blur="medium" />
                <div className="relative z-10">
                  <Lightbulb className="h-14 w-14 text-green-400 mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                    Our Vision
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    To become India's most trusted stock market education platform, empowering millions to achieve 
                    financial independence through expert guidance and innovative learning methodologies.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Transform 1 million lives by 2030",
                      "Expand to every major city in India",
                      "Lead innovation in trading education",
                      "Create a legacy of financially empowered individuals"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Student-First",
                  description: "Every decision we make prioritizes our students' success and learning experience. Your growth is our ultimate measure of success.",
                  color: ["#1a1a1a", "#2a2a2a", "#1f1f1f"]
                },
                {
                  icon: Shield,
                  title: "Integrity",
                  description: "We teach ethical trading practices and honest market analysis. No get-rich-quick schemes, just proven strategies and realistic expectations.",
                  color: ["#151515", "#252525", "#1d1d1d"]
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We continuously evolve our curriculum and teaching methods to stay ahead of market trends and incorporate the latest trading technologies.",
                  color: ["#1c1c1c", "#2c2c2c", "#181818"]
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Trading can be isolating. We foster a supportive community where traders share insights, celebrate wins, and learn from setbacks together.",
                  color: ["#171717", "#272727", "#1b1b1b"]
                },
                {
                  icon: TrendingUp,
                  title: "Excellence",
                  description: "We maintain the highest standards in education quality, instructor expertise, and student support. Good enough is never good enough.",
                  color: ["#131313", "#232323", "#191919"]
                },
                {
                  icon: BarChart3,
                  title: "Results-Driven",
                  description: "We measure our success by your profitability. Our strategies are tested, proven, and designed to deliver consistent results in real markets.",
                  color: ["#181818", "#282828", "#1e1e1e"]
                }
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-8 group hover:border-white/20 transition-all"
                  >
                    <AnimatedGradient colors={value.color} speed={0.05} blur="medium" />
                    <div className="relative z-10">
                      <Icon className="h-10 w-10 text-green-400 mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Milestones that shaped us
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  year: "2016",
                  title: "The Foundation",
                  description: "Excelsior was born in Bengaluru with our first batch of 20 enthusiastic students. Focus on comprehensive stock market fundamentals."
                },
                {
                  year: "2018",
                  title: "Expansion & Recognition",
                  description: "Expanded to 5 cities across Karnataka. Received NISM certification. Crossed 1,000 students milestone with 80% success rate."
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description: "Launched online courses during pandemic. Developed proprietary trading tools and analysis platform. Community grew to 5,000+ members."
                },
                {
                  year: "2022",
                  title: "Pan-India Presence",
                  description: "Established training centers in 12+ cities. Introduced advanced algo trading courses. Trained 10,000+ students cumulatively."
                },
                {
                  year: "2024",
                  title: "Innovation & Scale",
                  description: "AI-powered market analysis tools. Personalized learning paths. Premium mentorship programs. 15,000+ traders community."
                },
                {
                  year: "2025",
                  title: "Looking Ahead",
                  description: "Expanding to 25+ cities. Launching mobile app. International collaborations. Target: Transform 100,000 lives by 2027."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden bg-card/30 backdrop-blur-sm border border-border/20 rounded-lg p-8 hover:bg-card/50 hover:border-white/20 transition-all group"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="text-4xl font-bold text-white/20 group-hover:text-green-400/20 transition-colors">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Recognition */}
        <section className="px-4 mb-32">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Recognition & Achievements
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Awards and accolades that honor our commitment to excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "NISM Certified",
                  subtitle: "Reg No: 20210003663"
                },
                {
                  icon: Star,
                  title: "4.9/5 Rating",
                  subtitle: "2000+ Google Reviews"
                },
                {
                  icon: TrendingUp,
                  title: "85% Success Rate",
                  subtitle: "Students Making Profits"
                },
                {
                  icon: Users,
                  title: "15K+ Alumni",
                  subtitle: "Growing Community"
                }
              ].map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative overflow-hidden bg-black rounded-xl border border-border/20 p-8 text-center group hover:border-white/20 transition-all"
                  >
                    <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
                    <div className="relative z-10">
                      <Icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-400 text-sm">{achievement.subtitle}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-black border-2 border-white/20 rounded-2xl p-12 md:p-16 text-center"
            >
              <AnimatedGradient colors={["#1a1a1a", "#2a2a2a", "#1f1f1f"]} speed={0.05} blur="medium" />
              <div className="relative z-10">
                <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Join thousands of successful traders who transformed their financial future with Excelsior. 
                  Your journey to financial freedom starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white hover:bg-gray-200 text-black text-lg px-8">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent text-lg px-8">
                    Talk to Our Team
                  </Button>
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

