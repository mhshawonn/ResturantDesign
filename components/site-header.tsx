import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="text-4xl text-pink-500 mx-10">
          QR

        </div>
        
        <nav className="ml-auto flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="/example-menus" className="text-sm font-medium transition-colors hover:text-primary">
            Example Menus
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us
          </Link>
        </nav>
        <Button className="ml-6 bg-orange-500 hover:bg-orange-600">LOG IN</Button>
      </div>
    </header>
  )
}

