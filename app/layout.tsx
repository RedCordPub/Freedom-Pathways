import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookBanner } from "@/components/book-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Together in Battle Ministry",
  description: "Empowering believers to find freedom and victory through Christ",
  icons: {
    icon: [
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Using larger favicon with explicit sizes */}
        <link rel="icon" href="/favicon-64.png?v=3" sizes="64x64" type="image/png" />
        <link rel="icon" href="/favicon-32.png?v=3" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16.png?v=3" sizes="16x16" type="image/png" />

        {/* Force browsers to use the larger icon */}
        <link rel="shortcut icon" href="/favicon-64.png?v=3" type="image/png" />
      </head>
      <body className={inter.className}>
        <BookBanner />
        <Header />
        <main className="pt-24 flex flex-col items-center w-full">
          <div className="w-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
