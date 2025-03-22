import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
}

export default function PricingCard({ title, price, description, features }: PricingCardProps) {
  return (
    <div className="pricing-card h-full flex flex-col">
      <div className="pricing-card-header">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-3">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{description}</p>
      </div>
      <div className="pricing-card-content flex-grow">
        <ul className="space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="pricing-feature">
              <Check className="pricing-check h-5 w-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pricing-card-footer mt-auto">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/contact">Réserver un appel</Link>
        </Button>
      </div>
    </div>
  )
} 