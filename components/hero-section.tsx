import { Button } from "@/components/ui/button"
import food from "./food.jpg"

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${food})`, // Directly using the food image for the background
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">QR MENU HUB</h1>
        <p className="max-w-[600px] text-lg sm:text-xl md:text-2xl">
          Contactless QR code Digital menu for your restaurants, hotel, saloon etc.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
