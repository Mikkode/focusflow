import { Button } from "./ui/button"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  description: string
  duration?: string
  features: string[]
}

export default function PricingCard({ title, price, description, duration, features }: PricingCardProps) {
  return (
    <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="space-y-2 min-h-[140px]">
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        {duration && <p className="text-sm text-center text-muted-foreground">{duration}</p>}
        <div className="text-3xl font-bold text-primary text-center">{price}</div>
        <p className="text-sm text-muted-foreground text-center">{description}</p>
      </div>
      
      <ul className="mt-6 space-y-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 text-primary flex-shrink-0 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button asChild className="mt-8 w-full transition-colors duration-300 hover:bg-primary/90">
        <Link href="/contact">Réserver un appel</Link>
      </Button>
    </div>
  )
} 