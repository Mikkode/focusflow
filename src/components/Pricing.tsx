"use client"

import PricingCard from "./PricingCard"
import AnimatedSection from "./AnimatedSection"

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Nos offres de coaching
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-[800px]">
              Choisissez la formule qui correspond le mieux à vos besoins et à vos objectifs
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="slideUp" delay={0.1}>
            <PricingCard
              title="Essentiel"
              price="497€ / mois"
              description="Idéal pour les freelances qui débutent et veulent structurer leur activité."
              features={[
                "1 session de coaching par mois",
                "Accès à la communauté privée",
                "Templates et ressources",
                "Support par email"
              ]}
            />
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.2}>
            <PricingCard
              title="Premium"
              price="997€ / mois"
              description="Pour les indépendants qui veulent accélérer leur croissance."
              features={[
                "2 sessions de coaching par mois",
                "Accès à la communauté privée",
                "Templates et ressources premium",
                "Support prioritaire",
                "Audit complet de votre activité"
              ]}
            />
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.3}>
            <PricingCard
              title="VIP"
              price="1997€ / mois"
              description="Accompagnement intensif pour une transformation rapide."
              features={[
                "4 sessions de coaching par mois",
                "Accès à la communauté privée",
                "Tous les templates et ressources",
                "Support disponible 7j/7",
                "Audit complet de votre activité",
                "Stratégie personnalisée",
                "Accès direct par téléphone"
              ]}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
} 