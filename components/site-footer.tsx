import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XPw8I51NoF3HxpGxR1ZWNLC4IYkuil.png"
              alt="QR Menu Hub Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              We are here to help you generate and host QR menus for your restaurants, hotels, shops etc.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Follow us on</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">All Rights Reserved © 2025 - QR Menu Hub</p>
        </div>
      </div>
    </footer>
  )
}

