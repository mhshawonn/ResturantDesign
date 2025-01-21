import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CafeMenu } from "@/components/cafe-menu"

export default function CafeMenuPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="container">
            <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">Sample Cafe Menu</h1>
            <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
              This is an example of how a cafe menu could look using our QR Menu Hub platform.
            </p>
            <CafeMenu />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

