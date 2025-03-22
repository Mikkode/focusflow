import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            À propos de Carrot Coach
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
            Découvrez notre histoire et notre approche unique du coaching business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/coach.png"
              alt="Coach business" 
              className="rounded-lg object-cover w-full h-[400px]"
              width={1000}
              height={1000}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Notre mission</h2>
            <p className="text-muted-foreground">
              Chez FocusFlow, nous croyons que chaque indépendant et freelance a le potentiel de créer une activité épanouissante et rentable. Notre mission est de vous aider à libérer ce potentiel en vous fournissant les outils, les stratégies et le soutien dont vous avez besoin pour réussir.
            </p>
            <p className="text-muted-foreground">
              Nous nous engageons à offrir un coaching personnalisé qui répond à vos besoins spécifiques, en vous aidant à surmonter les obstacles et à atteindre vos objectifs business.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Notre approche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Personnalisée</h3>
              <p className="text-muted-foreground">
                Nous adaptons notre coaching à votre situation unique, en tenant compte de vos forces, de vos défis et de vos objectifs spécifiques.
              </p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Pratique</h3>
              <p className="text-muted-foreground">
                Nous vous fournissons des stratégies et des outils concrets que vous pouvez mettre en œuvre immédiatement pour voir des résultats.
              </p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Collaborative</h3>
              <p className="text-muted-foreground">
                Nous travaillons en étroite collaboration avec vous, en vous guidant et en vous soutenant à chaque étape de votre parcours.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Votre coach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="/images/coach2.png"
                alt="Portrait du coach" 
                className="rounded-lg object-cover w-full h-[400px]"
                width={1000}
                height={1000}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Thomas Durand</h3>
              <p className="text-muted-foreground">
                Avec plus de 10 ans d&apos;expérience en tant qu&apos;entrepreneur et consultant business, Thomas a aidé des centaines d&apos;indépendants et de freelances à développer leur activité et à atteindre leurs objectifs.
              </p>
              <p className="text-muted-foreground">
                Passionné par l&apos;entrepreneuriat et le développement personnel, il combine expertise technique et approche humaine pour vous aider à surmonter vos défis et à exploiter pleinement votre potentiel.
              </p>
              <p className="text-muted-foreground">
                Certifié en coaching professionnel et en stratégie business, Thomas met son expérience et ses connaissances à votre service pour vous accompagner vers le succès.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 