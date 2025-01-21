import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for small cafes and food trucks",
    features: ["1 QR Menu", "Basic customization", "24/7 customer support"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for restaurants and bars",
    features: ["5 QR Menus", "Advanced customization", "Analytics dashboard", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large chains and franchises",
    features: ["Unlimited QR Menus", "Full customization", "Dedicated account manager", "API access"],
  },
]

export function PricingSection() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {plans.map((plan) => (
        <Card key={plan.name} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mb-4 text-4xl font-bold">
              {plan.price}
              <span className="text-sm font-normal">/month</span>
            </div>
            <p className="mb-4 text-muted-foreground">{plan.description}</p>
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

