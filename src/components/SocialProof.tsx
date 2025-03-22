import TestimonialCard from "@/components/TestimonialCard"

export default function SocialProof() {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Freelance Designer",
      content: "Grâce au coaching FocusFlow, j'ai pu doubler mon chiffre d'affaires en seulement 3 mois. La méthodologie est claire et les conseils sont concrets et applicables immédiatement."
    },
    {
      name: "Thomas Dubois",
      role: "Consultant indépendant",
      content: "J'étais submergé par les tâches administratives et je n'arrivais pas à me concentrer sur mon cœur de métier. FocusFlow m'a aidé à structurer mon activité et à retrouver ma passion."
    },
    {
      name: "Julie Leroy",
      role: "Développeuse Web",
      content: "Le coaching m'a permis de sortir de ma zone de confort et d'oser approcher des clients plus importants. Résultat : des projets plus intéressants et une meilleure rémunération."
    }
  ]

  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ils ont transformé leur business
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Découvrez comment FocusFlow a aidé ces entrepreneurs à atteindre leurs objectifs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard 
              key={i}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
            />
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="text-xl font-bold">ACME Inc.</div>
          </div>
          <div className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="text-xl font-bold">TechCorp</div>
          </div>
          <div className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="text-xl font-bold">DesignStudio</div>
          </div>
          <div className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="text-xl font-bold">WebAgency</div>
          </div>
        </div>
      </div>
    </section>
  )
} 