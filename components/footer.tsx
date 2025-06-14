import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Mission */}
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="mb-4">
            <Image
              src="/images/together-in-battle-logo.png"
              alt="Together in Battle Ministry"
              width={70}
              height={70}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="text-gray-600 max-w-md text-center">
            Empowering believers to find freedom and victory through Christ.
          </p>
        </div>

        {/* Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#mission" className="text-gray-600 hover:text-black transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="text-gray-600 hover:text-black transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/about#statement-of-faith" className="text-gray-600 hover:text-black transition-colors">
                  Statement of Faith
                </Link>
              </li>
              <li>
                <Link href="/schedule-freedom-session" className="text-gray-600 hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/books" className="text-gray-600 hover:text-black transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/freedom-pathways" className="text-gray-600 hover:text-black transition-colors">
                  Freedom Pathways
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-black transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-gray-600 hover:text-black transition-colors">
                  Speaking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-black transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/schedule-freedom-session" className="text-gray-600 hover:text-black transition-colors">
                  Schedule a Session
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/books#newsletter" className="text-gray-600 hover:text-black transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@battletogether.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  info@battletogether.com
                </Link>
              </li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/persellcody/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-gray-600 hover:text-black transition-colors" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/codypersell/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-gray-600 hover:text-black transition-colors" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@persellcody"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5 text-gray-600 hover:text-black transition-colors" />
                  </Link>
                  <Link
                    href="https://x.com/codypersell"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-600 hover:text-black transition-colors"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Together in Battle Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
