import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function DonationThankYouPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold mb-6">Thank You for Your Donation!</h1>

          <p className="text-xl mb-8 text-gray-700">
            Your generous support makes our ministry possible. A receipt has been sent to your email.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Impact</h2>
            <p className="text-gray-700 mb-4">
              Your donation helps us equip believers with the tools they need for freedom and victory in Christ. From
              developing resources to supporting ministry events, your generosity makes a difference.
            </p>
            <p className="text-gray-700">We're grateful for your partnership in this important work!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/books"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Explore Our Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
