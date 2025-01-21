import { QrCode, Smartphone, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: QrCode,
      title: "No physical menu",
      subtitle: "Physical menu not required",
      description: "Physical menu not required anymore, just scan and start ordering.",
    },
    {
      icon: Smartphone,
      title: "No app download",
      subtitle: "No need to download",
      description:
        "No need to download and install the app, customer can just scan the QR and woo your menus are there.",
    },
    {
      icon: Clock,
      title: "Zero waiting time",
      subtitle: "No need to wait",
      description:
        "Customer don't need to wait for a menu, they can get your menu card faster in theire phone and start orderin.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <feature.icon className="mb-4 h-12 w-12 text-orange-500" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="mb-2 text-sm text-muted-foreground">{feature.subtitle}</p>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

