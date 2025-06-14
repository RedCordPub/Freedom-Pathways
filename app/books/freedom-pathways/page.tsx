"use client"

import Image from "next/image"
import { Download } from "lucide-react"

export default function FreedomPathwaysPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/freedom-pathways-logo.png"
                  alt="Freedom Pathways Book Cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Freedom Pathways</h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-[#0F3543]">Inner Healing and Deliverance</h2>

              <p className="text-gray-700 mb-6">
                A comprehensive guide to inner healing and deliverance ministry. Learn the biblical foundations and
                practical steps for finding freedom in Christ and helping others on their journey toward complete
                healing.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Get Your Free Digital Copy</h3>
                <p className="text-gray-600 mb-4">
                  Download your free PDF copy of "Freedom Pathways" and begin your journey toward complete healing and
                  freedom in Christ.
                </p>

                <a
                  href="https://zcnlqhdimljmsuilobyw.supabase.co/storage/v1/object/public/ministry-files//Freedom_Pathways_IHD_Curriculum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Download Now <Download className="ml-2 h-4 w-4" />
                </a>

                <div className="text-sm text-gray-500 mt-4">
                  <p>
                    By downloading this book, you'll also receive updates about our upcoming releases, including "Sons
                    of God" and "God's Sworn Enemy". You can unsubscribe at any time.
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                <p>
                  By downloading this book, you'll also receive updates about our upcoming releases, including "Sons of
                  God" and "God's Sworn Enemy". You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
