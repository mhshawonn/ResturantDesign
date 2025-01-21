import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PricingSection } from "@/components/pricing-section"
import { ComparisonTable } from "@/components/comparison-table"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-24">
          <div className="container">
            <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
              Choose the Perfect Plan for Your Business
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
              Whether you're a small café or a large restaurant chain, we have a plan that fits your needs. Compare our
              options and find the best one for you.
            </p>
            <PricingSection />
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Feature Comparison</h2>
            <ComparisonTable />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

