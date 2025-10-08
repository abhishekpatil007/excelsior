import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-20">
        <ParticleTextEffect words={["Trade Smart", "Invest Wisely", "Build Wealth", "Trade Smart"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-balance">
            Master Stock Market Trading & Build Your Financial Future
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white hover:bg-gray-200 text-black group">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              Watch Free Preview
            </Button>
          </div>

          <div className="mt-16 mb-8">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0">
                  <p className="text-end text-sm text-gray-400">stock market running board</p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
