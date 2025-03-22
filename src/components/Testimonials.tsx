import TestimonialCard from "./TestimonialCard"
import AnimatedSection from "./AnimatedSection"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Consultante SEO",
      content: "Le coaching m'a permis de structurer mon offre et d'augmenter mes tarifs de 40%. Je recommande vivement !"
    },
    {
      name: "Thomas Dubois",
      role: "Développeur Freelance",
      content: "Grâce à FocusFlow, j'ai pu me positionner sur des projets plus ambitieux et doubler mon chiffre d'affaires en 6 mois."
    },
    {
      name: "Julie Lefèvre",
      role: "Designer UX/UI",
      content: "Un accompagnement sur mesure qui m'a aidée à sortir de ma zone de confort et à développer une clientèle plus qualifiée."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ils ont transformé leur activité
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-[800px]">
              Découvrez les témoignages de freelances qui ont boosté leur business grâce à notre coaching
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
} 