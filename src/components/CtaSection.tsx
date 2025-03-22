import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedSection from "./AnimatedSection"

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Prêt à passer à l&apos;étape suivante ?
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-[800px] mb-8">
              Réservez un appel découverte gratuit pour discuter de vos objectifs et voir comment nous pouvons vous aider
            </p>
            <AnimatedSection animation="slideUp">
              <Button asChild size="lg">
                <Link href="/contact">Réserver mon appel gratuit</Link>
              </Button>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 