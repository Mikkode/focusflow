import AnimatedSection from "@/components/AnimatedSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  BarChart3, 
  Briefcase, 
  Users, 
  Target, 
  TrendingUp, 
  Lightbulb,
  CheckCircle
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Analyse de performance",
      description: "Évaluation complète de votre activité pour identifier les points forts et les axes d'amélioration."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Positionnement stratégique",
      description: "Définition de votre offre et de votre positionnement pour vous démarquer de la concurrence."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Acquisition clients",
      description: "Stratégies pour attirer et convertir des prospects qualifiés en clients fidèles."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Objectifs et KPIs",
      description: "Définition d'objectifs clairs et mesurables pour suivre votre progression."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Scaling business",
      description: "Stratégies pour faire évoluer votre activité et augmenter votre chiffre d'affaires."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation et créativité",
      description: "Techniques pour développer de nouvelles offres et services innovants."
    }
  ]

  const programs = [
    {
      title: "Programme Essentiel",
      duration: "3 mois",
      price: "497€ / mois",
      description: "Idéal pour les freelances qui débutent et veulent structurer leur activité.",
      features: [
        "1 session de coaching par mois",
        "Accès à la communauté privée",
        "Templates et ressources",
        "Support par email"
      ]
    },
    {
      title: "Programme Premium",
      duration: "6 mois",
      price: "997€ / mois",
      description: "Pour les indépendants qui veulent accélérer leur croissance.",
      features: [
        "2 sessions de coaching par mois",
        "Accès à la communauté privée",
        "Templates et ressources premium",
        "Support prioritaire",
        "Audit complet de votre activité"
      ]
    },
    {
      title: "Programme VIP",
      duration: "12 mois",
      price: "1997€ / mois",
      description: "Accompagnement intensif pour une transformation rapide.",
      features: [
        "4 sessions de coaching par mois",
        "Accès à la communauté privée",
        "Tous les templates et ressources",
        "Support disponible 7j/7",
        "Audit complet de votre activité",
        "Stratégie personnalisée",
        "Accès direct par téléphone"
      ]
    }
  ]

  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Nos services de coaching
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Des solutions personnalisées pour vous aider à atteindre vos objectifs business
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Ce que nous proposons
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Des services adaptés aux besoins des indépendants et freelances
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection 
                key={index} 
                animation="fadeIn"
                delay={index * 0.1}
                className="cursor-pointer"
              >
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border shadow-sm h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform transition-transform duration-500 hover:rotate-12">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground min-h-[80px]">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Notre processus
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Une approche structurée en 4 étapes pour maximiser vos résultats
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16">
            <div className="space-y-24 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              
              <AnimatedSection animation="slideRight">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex justify-end">
                    <div className="bg-background rounded-xl border shadow-md p-6 md:max-w-md relative">
                      <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold hidden md:flex">1</div>
                      <h3 className="text-xl font-bold mb-2">Diagnostic initial</h3>
                      <p className="text-muted-foreground">Analyse complète de votre activité pour identifier les points forts et les axes d&apos;amélioration.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideLeft" delay={0.2}>
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="md:w-1/2 flex justify-start">
                    <div className="bg-background rounded-xl border shadow-md p-6 md:max-w-md relative">
                      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold hidden md:flex">2</div>
                      <h3 className="text-xl font-bold mb-2">Élaboration de la stratégie</h3>
                      <p className="text-muted-foreground">Définition d&apos;un plan d&apos;action personnalisé pour atteindre vos objectifs business.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideRight" delay={0.4}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 flex justify-end">
                    <div className="bg-background rounded-xl border shadow-md p-6 md:max-w-md relative">
                      <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold hidden md:flex">3</div>
                      <h3 className="text-xl font-bold mb-2">Mise en œuvre</h3>
                      <p className="text-muted-foreground">Accompagnement pas à pas dans l&apos;implémentation des actions définies.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideLeft" delay={0.6}>
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="md:w-1/2 flex justify-start">
                    <div className="bg-background rounded-xl border shadow-md p-6 md:max-w-md relative">
                      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold hidden md:flex">4</div>
                      <h3 className="text-xl font-bold mb-2">Suivi et optimisation</h3>
                      <p className="text-muted-foreground">Évaluation régulière des résultats et ajustements de la stratégie pour maximiser votre efficacité.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">4</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Programs section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Nos programmes
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Choisissez le programme qui correspond le mieux à vos besoins et à vos objectifs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 0.2}>
                <div className="pricing-card h-full flex flex-col cursor-pointer">
                  <div className="pricing-card-header">
                    <h3 className="text-xl font-bold">{program.title}</h3>
                    <div className="text-sm text-muted-foreground mt-1">{program.duration}</div>
                    <div className="mt-3">
                      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">{program.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{program.description}</p>
                  </div>
                  <div className="pricing-card-content flex-grow">
                    <ul className="space-y-1">
                      {program.features.map((feature, i) => (
                        <li key={i} className="pricing-feature">
                          <CheckCircle className="pricing-check h-5 w-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-card-footer mt-auto">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                      <Link href="/contact">Réserver un appel</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Prêt à transformer votre activité ?
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mb-8">
                Réservez dès maintenant un appel découverte gratuit pour discuter de vos objectifs
              </p>
              <AnimatedSection animation="fadeIn">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                  <Link href="/contact">Réserver mon appel gratuit</Link>
                </Button>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
} 