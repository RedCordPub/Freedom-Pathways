"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { useState } from "react"

export function BookBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-[#0F3543] to-[#1a4a5a] text-white py-3 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-center">
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                New Release
              </span>
            </div>
            <div>
              <span className="font-semibold">📖 "Jesus the Deliverer" is now available!</span>
              <span className="hidden sm:inline ml-2 text-gray-200">
                Discover the lost ministry of the apostles and the early church.
              </span>
            </div>
            <Link
              href="https://jesusthedelivererbook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0F3543] px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Get Your Copy
            </Link>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
