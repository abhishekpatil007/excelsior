import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnimatedFeaturesSection } from "@/components/animated-features-section"
import { FAQSection } from "@/components/faq-section"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Footer } from "@/components/footer"
import { GridBackground } from "@/components/ui/grid-background"

export default function HomePage() {
  return (
    <GridBackground className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <AnimatedFeaturesSection />
        <FAQSection />
        <AnimatedCTASection />
      </main>
      <Footer />
    </GridBackground>
  )
}
