"use client"

import Link from "next/link"
import { ArrowRight, Users, BookOpen, MessageCircle, Calendar, ExternalLink } from "lucide-react"

export default function FreedomPathwaysPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Freedom Pathways</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Inner Healing & Deliverance Community</p>
            <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto">
              Join a supportive community of believers walking together on the journey of inner healing, deliverance,
              and spiritual freedom through Christ.
            </p>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://nas.io/together-in-battle/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Users className="h-6 w-6 mr-3" />
                Join the Community
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Join Our Thriving Community</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with fellow believers, access exclusive resources, and grow together in your journey of freedom.
              </p>
            </div>

            {/* Embedded Community Preview */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Together in Battle Community</h3>
                  <p className="text-gray-600 mb-6">Experience our community platform powered by Nas.io</p>
                  <Link
                    href="https://nas.io/together-in-battle/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Community
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Powered by <strong>Nas.io</strong> - A secure, private community platform
                </p>
              </div>
            </div>

            {/* Community Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Discussion Forums</h3>
                <p className="text-gray-600">
                  Engage in meaningful conversations about inner healing, deliverance, and spiritual growth.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Exclusive Resources</h3>
                <p className="text-gray-600">
                  Access teaching materials, prayer guides, and resources available only to community members.
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Live Events</h3>
                <p className="text-gray-600">
                  Join live Q&A sessions, prayer meetings, and exclusive community events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Freedom Pathways?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Freedom Pathways is more than just a community—it's a safe space where believers can:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Share testimonies and breakthrough stories
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Ask questions and receive biblical guidance
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Access exclusive teaching content and resources
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Connect with others on similar journeys
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    Participate in live prayer and ministry sessions
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">Ready to Begin?</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Join hundreds of believers already walking in greater freedom through Christ.
                </p>
                <Link
                  href="https://nas.io/together-in-battle/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors"
                >
                  Join Freedom Pathways Community
                </Link>
                <p className="text-sm text-gray-500 text-center mt-3">
                  Free to join • Secure & Private • Biblical Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Community Impact</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "This community has been a lifeline for me. The support and biblical guidance I've received has helped
                  me walk in freedom I never thought possible."
                </p>
                <p className="font-semibold text-blue-800">- Community Member</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "The resources and live sessions have equipped me not just for my own healing, but to help others in
                  their journey toward freedom in Christ."
                </p>
                <p className="font-semibold text-green-800">- Community Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Freedom Journey Starts Here</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don't walk this path alone. Join a community that understands your journey and will support you every step
            of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://nas.io/together-in-battle/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Users className="h-6 w-6 mr-3" />
              Join Now - It's Free
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Have Questions?
            </Link>
          </div>

          <p className="text-sm text-blue-200 mt-6">Secure community platform powered by Nas.io</p>
        </div>
      </section>
    </div>
  )
}
