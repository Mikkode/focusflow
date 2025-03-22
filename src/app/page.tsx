import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import CtaSection from "@/components/CtaSection"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <div className="w-full bg-muted/50">
        <Features />
      </div>
      <Testimonials />
      <div className="w-full bg-muted/50">
        <Pricing />
      </div>
      <CtaSection />
    </div>
  )
}
