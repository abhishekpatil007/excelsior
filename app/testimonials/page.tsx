"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Marquee } from '@/components/ui/3d-testimonails'
import { motion } from "framer-motion"
import { GridBackground } from "@/components/ui/grid-background"
import { useModal } from "@/components/ui/modal-provider"

// Testimonials data for stock market course
const testimonials = [
  {
    name: 'Rahul Mehta',
    username: '@rahul_trader',
    body: 'Excelsior transformed my trading completely. From losing money to consistent ₹2L+ monthly profits. The systematic approach and risk management strategies are game-changers!',
    img: 'https://i.pravatar.cc/150?img=12',
    country: '🇮🇳 Bangalore',
    profit: '₹2L+ monthly',
    course: 'Professional Trader'
  },
  {
    name: 'Anjali Desai',
    username: '@anjali_inv',
    body: 'Made ₹15 Lakhs profit in first year alone! The mentorship and live trading sessions gave me the confidence to trade options successfully. Best investment in my life!',
    img: 'https://i.pravatar.cc/150?img=45',
    country: '🇮🇳 Mumbai',
    profit: '₹15L in 1 year',
    course: 'Elite Masterclass'
  },
  {
    name: 'Vikram Singh',
    username: '@vikram_stocks',
    body: 'Quit my corporate job to trade full-time after completing the course. The systematic approach and community support gave me the confidence to pursue trading as a career!',
    img: 'https://i.pravatar.cc/150?img=33',
    country: '🇮🇳 Delhi',
    profit: 'Full-time trader',
    course: 'Professional Trader'
  },
  {
    name: 'Sneha Krishnan',
    username: '@sneha_finance',
    body: 'As a complete beginner, I was scared of the stock market. Excelsior made everything so clear and simple. 30% returns in just 4 months with proper risk management!',
    img: 'https://i.pravatar.cc/150?img=47',
    country: '🇮🇳 Chennai',
    profit: '30% returns',
    course: 'Foundation'
  },
  {
    name: 'Arjun Patel',
    username: '@arjun_options',
    body: 'The options strategies taught here are pure gold! Built a ₹50 Lakh portfolio using the advanced strategies. The 1-on-1 coaching sessions were invaluable for my growth.',
    img: 'https://i.pravatar.cc/150?img=51',
    country: '🇮🇳 Ahmedabad',
    profit: '₹50L portfolio',
    course: 'Elite Masterclass'
  },
  {
    name: 'Meera Sharma',
    username: '@meera_ca',
    body: 'Risk management lessons helped me double my investment in 8 months while keeping losses minimal. The technical analysis module is incredibly detailed and practical.',
    img: 'https://i.pravatar.cc/150?img=44',
    country: '🇮🇳 Pune',
    profit: '100% returns',
    course: 'Professional Trader'
  },
  {
    name: 'Karthik Reddy',
    username: '@karthik_trade',
    body: 'Technical analysis strategies are spot on! The chart patterns and indicators taught here work consistently in real markets. Now making consistent profits every month.',
    img: 'https://i.pravatar.cc/150?img=15',
    country: '🇮🇳 Hyderabad',
    profit: '₹1.5L monthly',
    course: 'Professional Trader'
  },
  {
    name: 'Priya Nair',
    username: '@priya_stocks',
    body: 'From zero knowledge to managing my own portfolio confidently! The step-by-step approach and lifetime support made all the difference. Highly recommend to beginners.',
    img: 'https://i.pravatar.cc/150?img=48',
    country: '🇮🇳 Kochi',
    profit: '₹8L in 6 months',
    course: 'Foundation'
  },
  {
    name: 'Rohan Gupta',
    username: '@rohan_investor',
    body: 'Live trading sessions are invaluable! Watching real trades being executed and explained helped me understand market psychology. The community support is amazing.',
    img: 'https://i.pravatar.cc/150?img=13',
    country: '🇮🇳 Jaipur',
    profit: '₹3L in 3 months',
    course: 'Professional Trader'
  },
  {
    name: 'Deepika Agarwal',
    username: '@deepika_trader',
    body: 'The fundamental analysis module helped me identify great long-term investments. Built a solid portfolio that grew 40% in the first year. The course is worth every rupee!',
    img: 'https://i.pravatar.cc/150?img=52',
    country: '🇮🇳 Kolkata',
    profit: '40% annual returns',
    course: 'Professional Trader'
  },
  {
    name: 'Suresh Kumar',
    username: '@suresh_investor',
    body: 'Algorithmic trading strategies changed everything for me! Now my trades execute automatically based on the strategies learned. Passive income through systematic trading.',
    img: 'https://i.pravatar.cc/150?img=53',
    country: '🇮🇳 Coimbatore',
    profit: '₹4L monthly',
    course: 'Elite Masterclass'
  },
  {
    name: 'Kavya Joshi',
    username: '@kavya_finance',
    body: 'The portfolio management techniques helped me diversify properly and reduce risk significantly. From ₹2L to ₹25L in 18 months with proper asset allocation.',
    img: 'https://i.pravatar.cc/150?img=54',
    country: '🇮🇳 Indore',
    profit: '₹25L portfolio',
    course: 'Elite Masterclass'
  },
]

function TestimonialCard({ img, name, username, body, country, profit, course }: (typeof testimonials)[number]) {
  return (
    <Card className="w-80 bg-card/50 backdrop-blur-sm border-border/20 hover:border-white/30 transition-all">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2.5 mb-3">
          <Avatar className="size-12">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-700 text-white">
              {name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-white flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="text-sm text-gray-300 italic mb-4 leading-relaxed">{body}</blockquote>
        
        {/* Success Metrics */}
        <div className="flex items-center justify-between pt-3 border-t border-border/20">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Profit</span>
            <span className="text-sm font-semibold text-green-400">{profit}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Course</span>
            <span className="text-sm font-semibold text-white">{course}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TestimonialsPage() {
  const { openContactModal } = useModal()
  return (
    <GridBackground className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-12">
          <div className="container mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Success Stories
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real results from real students who transformed their financial future with Excelsior. 
              From beginners to expert traders, discover how our comprehensive education changed their lives.
            </motion.p>
            
            {/* Quick Success Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-white mb-2">₹500Cr+</div>
                <div className="text-gray-300 text-sm">Total Student Profits</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-white mb-2">15K+</div>
                <div className="text-gray-300 text-sm">Happy Students</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3D Testimonials Marquee */}
        <section className="flex-1 flex items-center justify-center px-4 min-h-[600px]">
          <div className="border border-border/20 rounded-2xl relative flex h-[500px] w-full max-w-[1000px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px] bg-card/30 backdrop-blur-sm">
            <div
              className="flex flex-row items-center gap-4"
              style={{
                transform:
                  'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
              }}
            >
              {/* Vertical Marquee (downwards) */}
              <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              {/* Vertical Marquee (upwards) */}
              <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              {/* Vertical Marquee (downwards) */}
              <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              {/* Vertical Marquee (upwards) */}
              <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 mt-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { number: "10,000+", label: "Happy Students" },
                { number: "4.9/5", label: "Average Rating" },
                { number: "85%", label: "Success Rate" },
                { number: "₹500Cr+", label: "Student Profits" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 text-center hover:border-white/20 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 mt-16">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful traders and start your journey to financial freedom today
              </p>
              <button 
                className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                onClick={() => openContactModal("Enroll Now", "Fill your details to enroll and our team will assist you")}
              >
                Enroll Now
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </GridBackground>
  )
}
