import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CategoryStatement } from "@/components/category-statement"
import { FeatureGrid } from "@/components/feature-grid"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { GlitchMarquee } from "@/components/glitch-marquee"
import { Footer } from "@/components/footer"
import { GeometricBackground } from "@/components/geometric-background"

export default function Page() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <GeometricBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <CategoryStatement />
        <FeatureGrid />
        <AboutSection />
        <GlitchMarquee />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
