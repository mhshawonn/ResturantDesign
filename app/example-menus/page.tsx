import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const exampleMenus = [
  {
    title: "Restaurant Menu",
    description: "A full-service restaurant menu with appetizers, main courses, and desserts.",
    link: "/example-menus/restaurant",
  },
  {
    title: "Cafe Menu",
    description: "A cozy cafe menu featuring coffee, tea, and pastries.",
    link: "/example-menus/cafe",
  },
  // We'll add more menu types here in the future
]

export default function ExampleMenusPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="container">
            <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">Example QR Code Menus</h1>
            <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
              Explore our sample menus to see how QR Menu Hub can work for different types of establishments.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {exampleMenus.map((menu) => (
                <Card key={menu.title}>
                  <CardHeader>
                    <CardTitle>{menu.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{menu.description}</p>
                    <Button asChild>
                      <Link href={menu.link}>View Menu</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

