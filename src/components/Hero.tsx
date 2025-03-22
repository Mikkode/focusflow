import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedSection from "./AnimatedSection"

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <AnimatedSection animation="fadeIn">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Débloquez votre potentiel business
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={0.2}>
              <p className="text-muted-foreground md:text-xl max-w-[600px] mx-auto lg:mx-0">
                Coaching 1:1 pour indépendants et freelances qui veulent passer au niveau supérieur
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Réserver un appel</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="slideUp">
            <div className="relative w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-primary/10 via-primary/5 to-primary/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-white/10"></div>
              
              <AnimatedSection animation="slideUp" delay={0.4}>
                <div className="relative text-center p-8 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg max-w-md">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Coaching personnalisé</h3>
                  <p className="text-muted-foreground">
                    Une approche sur mesure pour répondre à vos besoins spécifiques et vous aider à atteindre vos objectifs.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
} 