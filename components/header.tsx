"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const leftNavigation = [
    { name: "Freedom Pathways", href: "/freedom-pathways" },
    { name: "Schedule Session", href: "/schedule-freedom-session" },
    { name: "About", href: "/about" },
  ]

  const rightNavigation = [
    { name: "Books", href: "/books" },
    { name: "Events", href: "/events" },
    { name: "Speaking", href: "/speaking" },
    { name: "Donate", href: "/donate" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 border-b border-gray-100 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-6 flex-1 justify-end pr-4">
            {leftNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-900 hover:text-[#0F3543] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Centered Logo */}
          <Link href="/" className="flex-shrink-0 mx-auto">
            <Image
              src="/images/spirit-truth-header-logo.png"
              alt="Together in Battle Ministry - Spirit and Truth"
              width={70}
              height={70}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Right Navigation */}
          <nav className="flex items-center space-x-6 flex-1 justify-start pl-4">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-900 hover:text-[#0F3543] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/spirit-truth-header-logo.png"
              alt="Together in Battle Ministry"
              width={50}
              height={50}
            />
            <span className="text-xl font-bold">Together in Battle</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 mt-6" : "max-h-0",
          )}
        >
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-100">
            {[...leftNavigation, ...rightNavigation].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
