import AnimatedSection from "@/components/AnimatedSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    id: "1",
    title: "7 stratégies pour doubler votre chiffre d'affaires en tant que freelance",
    excerpt: "Découvrez les techniques éprouvées qui ont permis à nos clients de multiplier leur CA en moins de 6 mois.",
    date: "15 juin 2023",
    author: "Sophie Martin",
    category: "Stratégie",
    readTime: "8 min",
    image: "/images/blog/featured.jpg"
  }

  const posts = [
    {
      id: "2",
      title: "Comment fixer ses tarifs en tant que freelance",
      excerpt: "Un guide complet pour déterminer vos tarifs et valoriser correctement vos services.",
      date: "2 juin 2023",
      author: "Thomas Dubois",
      category: "Business",
      readTime: "6 min",
      image: "/images/blog/post1.jpg"
    },
    {
      id: "3",
      title: "5 outils indispensables pour gérer votre activité freelance",
      excerpt: "Les solutions qui vous feront gagner du temps et amélioreront votre productivité.",
      date: "28 mai 2023",
      author: "Julie Lefèvre",
      category: "Productivité",
      readTime: "5 min",
      image: "/images/blog/post2.jpg"
    },
    {
      id: "4",
      title: "Comment trouver des clients premium pour votre activité",
      excerpt: "Les stratégies pour attirer et convertir des clients à forte valeur ajoutée.",
      date: "15 mai 2023",
      author: "Sophie Martin",
      category: "Acquisition",
      readTime: "7 min",
      image: "/images/blog/post3.jpg"
    },
    {
      id: "5",
      title: "Développer une offre de services qui se démarque",
      excerpt: "Comment créer une proposition de valeur unique qui attire naturellement les clients.",
      date: "5 mai 2023",
      author: "Thomas Dubois",
      category: "Stratégie",
      readTime: "6 min",
      image: "/images/blog/post4.jpg"
    },
    {
      id: "6",
      title: "Les erreurs à éviter quand on démarre en freelance",
      excerpt: "Les pièges courants et comment les contourner pour réussir dès le début.",
      date: "28 avril 2023",
      author: "Julie Lefèvre",
      category: "Conseils",
      readTime: "5 min",
      image: "/images/blog/post5.jpg"
    },
    {
      id: "7",
      title: "Comment créer un personal branding efficace",
      excerpt: "Les étapes pour construire une marque personnelle forte qui attire les opportunités.",
      date: "15 avril 2023",
      author: "Sophie Martin",
      category: "Marketing",
      readTime: "8 min",
      image: "/images/blog/post6.jpg"
    }
  ]

  const categories = [
    "Tous les articles",
    "Stratégie",
    "Business",
    "Marketing",
    "Productivité",
    "Acquisition",
    "Conseils"
  ]

  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Blog FocusFlow
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                Conseils, stratégies et ressources pour les indépendants et freelances
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-6 border-b">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={index === 0 ? "default" : "outline"} 
                  className="rounded-full cursor-pointer"
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured post */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-2xl font-bold mb-8">Article à la une</h2>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                  <Link href={`/blog/${featuredPost.id}`}>
                    7 stratégies pour doubler votre chiffre d&apos;affaires en tant que freelance
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Découvrez les techniques éprouvées qui ont permis à nos clients de multiplier leur CA en moins de 6 mois.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{featuredPost.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {featuredPost.date} · {featuredPost.readTime} de lecture
                    </p>
                  </div>
                </div>
                <Button asChild className="cursor-pointer">
                  <Link href={`/blog/${featuredPost.id}`}>
                    Lire l&apos;article
                  </Link>
                </Button>
              </div>
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-10"></div>
                  <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">
                      {featuredPost.id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All posts */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-2xl font-bold mb-8">Tous les articles</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection 
                key={post.id} 
                animation="fadeIn" 
                delay={index * 0.1}
              >
                <div className="bg-card rounded-xl overflow-hidden border shadow-sm h-full flex flex-col hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-10"></div>
                    <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                        {post.id}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        Comment fixer ses tarifs en tant que freelance
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {post.date} · {post.readTime} de lecture
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fadeIn" delay={0.5}>
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="cursor-pointer">
                Charger plus d&apos;articles
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Abonnez-vous à notre newsletter
              </h2>
              <p className="text-muted-foreground md:text-lg mb-8">
                Recevez nos meilleurs conseils et stratégies directement dans votre boîte mail
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="flex-grow px-4 py-2 rounded-md border focus:ring-2 focus:ring-primary/50 outline-none cursor-text"
                />
                <Button className="cursor-pointer">S&apos;abonner</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
} 