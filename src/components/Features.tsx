import { CheckCircle } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

export default function Features() {
  const features = [
    {
      title: "Diagnostic",
      description: "Analyse complète de votre activité pour identifier les points forts et les axes d'amélioration."
    },
    {
      title: "Stratégie",
      description: "Élaboration d'un plan d'action personnalisé pour atteindre vos objectifs business."
    },
    {
      title: "Mise en œuvre",
      description: "Accompagnement pas à pas dans l'implémentation des actions définies."
    },
    {
      title: "Suivi",
      description: "Évaluation régulière des résultats et ajustements de la stratégie si nécessaire."
    },
    {
      title: "Optimisation",
      description: "Amélioration continue des processus pour maximiser votre efficacité et votre rentabilité."
    },
    {
      title: "Autonomie",
      description: "Acquisition des compétences et outils nécessaires pour pérenniser votre succès."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Notre méthodologie
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-[800px]">
              Une approche structurée pour vous aider à atteindre vos objectifs
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index}
              animation="slideUp"
              delay={index * 0.1}
            >
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground min-h-[80px]">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
} 