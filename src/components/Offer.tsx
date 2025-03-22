import PricingCard from "@/components/PricingCard"

export default function Offer() {
  const offers = [
    {
      title: "Accompagnement 1 mois",
      price: "490€",
      description: "Idéal pour résoudre un problème spécifique ou lancer un nouveau projet",
      features: [
        "2 sessions de coaching de 60 minutes",
        "Analyse de votre situation actuelle",
        "Plan d'action personnalisé",
        "Support par email entre les sessions",
        "Accès à des ressources exclusives"
      ]
    },
    {
      title: "Accompagnement 3 mois",
      price: "1290€",
      description: "Pour une transformation durable de votre business",
      features: [
        "6 sessions de coaching de 60 minutes",
        "Diagnostic approfondi de votre activité",
        "Plan d'action détaillé avec suivi",
        "Support prioritaire par email et téléphone",
        "Accès à la communauté privée",
        "Bonus : 1 session d'urgence de 30 minutes"
      ]
    },
    {
      title: "Accompagnement 6 mois",
      price: "2490€",
      description: "Pour une refonte complète de votre stratégie business",
      features: [
        "12 sessions de coaching de 60 minutes",
        "Audit complet de votre business",
        "Stratégie personnalisée à long terme",
        "Support illimité par email et téléphone",
        "Accès VIP à la communauté privée",
        "Bonus : 3 sessions d'urgence de 30 minutes",
        "Bonus : Analyse de votre positionnement"
      ]
    }
  ]

  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nos offres de coaching
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Choisissez la formule qui correspond le mieux à vos besoins
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <PricingCard 
              key={i}
              title={offer.title}
              price={offer.price}
              description={offer.description}
              features={offer.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 