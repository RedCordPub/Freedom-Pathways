"use client"

import Image from "next/image"
import { Download } from "lucide-react"

const BooksClientPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Book 1: Jesus the Deliverer */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="aspect-[3/4] relative bg-gray-100">
            <Image
              src="/images/jesus-the-deliverer-cover.jpg"
              alt="Jesus the Deliverer Book Cover"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-3">Jesus the Deliverer</h2>
            <p className="text-gray-700 mb-6">
              A powerful book about finding freedom and healing through Jesus Christ.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://zcnlqhdimljmsuilobyw.supabase.co/storage/v1/object/public/ministry-files//Jesus%20The%20Deliverer_June%201st%20Release.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Free Download <Download className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://a.co/d/ixV5z0f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#FF9900] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 8.206 3.166 13.044 3.166 2.688 0 5.25-.394 7.677-1.184.532-.173.996-.124 1.392.145 2.264 1.543 4.508 2.339 6.732 2.388.177.012.266-.057.266-.208v-2.33c0-.177-.089-.355-.266-.533-1.065-1.065-1.598-2.198-1.598-3.398 0-.533.12-1.042.36-1.527-2.442-3.136-6.194-4.704-11.256-4.704-5.062 0-8.814 1.568-11.256 4.704.24.485.36.994.36 1.527 0 1.2-.533 2.333-1.598 3.398-.177.178-.266.356-.266.533v2.33c0 .151.089.22.266.208 2.224-.049 4.468-.845 6.732-2.388z" />
                </svg>
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>

        {/* Book 2: Freedom Pathways */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="aspect-[3/4] relative bg-gray-100">
            <Image
              src="/images/freedom-pathways-cover.png"
              alt="Freedom Pathways Book Cover"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-3">Freedom Pathways</h2>
            <p className="text-gray-700 mb-6">Discover practical pathways to lasting freedom in your life.</p>
            <a
              href="https://zcnlqhdimljmsuilobyw.supabase.co/storage/v1/object/public/ministry-files//Freedom_Pathways_IHD_Curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Free Download <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="aspect-[3/4] relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600">Coming Soon</h3>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-3">More Books Coming Soon!</h2>
            <p className="text-gray-700 mb-6">Stay tuned for more books to help you on your journey.</p>
            <div className="text-center">
              <span className="inline-block px-4 py-3 bg-gray-100 text-gray-600 font-medium rounded-md">
                Stay Updated
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="mt-16 bg-gray-50 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated on New Releases</h2>
          <p className="text-gray-600 mb-6">
            Be the first to know when we release new books, including "Sons of God" and "God's Sworn Enemy."
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3543] focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">We respect your privacy and will never share your information.</p>
        </div>
      </section>

      {/* Featured Books Info */}
      <section className="mt-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#0F3543]">Jesus the Deliverer</h3>
            <p className="text-gray-700 mb-4">
              Discover the lost ministry of the apostles and the early church. This powerful book reveals how the early
              believers walked in deliverance power and how we can reclaim this vital ministry today.
            </p>
            <p className="text-gray-700">
              Learn the biblical foundations for casting out demons and ministering freedom to those in spiritual
              bondage.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#0F3543]">Freedom Pathways</h3>
            <p className="text-gray-700 mb-4">
              A comprehensive guide to inner healing and deliverance ministry. Learn the biblical foundations and
              practical steps for finding freedom in Christ and helping others on their journey.
            </p>
            <p className="text-gray-700">Perfect for both personal growth and training others in effective ministry.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BooksClientPage
