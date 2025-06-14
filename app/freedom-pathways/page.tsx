import Link from "next/link"
import Image from "next/image"
import { Download, Users, BookOpen, Heart, Shield } from "lucide-react"
import { ComingSoonSignup } from "@/components/coming-soon-signup"

export default function FreedomPathwaysPage() {
  return (
    <div className="min-h-screen">
      {/* Coming Soon Community Signup - Now First */}
      <ComingSoonSignup />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Freedom Pathways</h1>
              <p className="text-xl mb-8 text-gray-700">
                Your journey to complete freedom and healing in Christ starts here. Discover biblical foundations for
                inner healing, deliverance ministry, and walking in victory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://zcnlqhdimljmsuilobyw.supabase.co/storage/v1/object/public/ministry-files//Freedom_Pathways_IHD_Curriculum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Free Guide
                </Link>
                <Link
                  href="/schedule-freedom-session"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  Schedule a Session
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/freedom-pathways-logo.png"
                alt="Freedom Pathways - Inner Healing and Deliverance"
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Freedom Pathways */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What is Freedom Pathways?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Freedom Pathways is a comprehensive approach to inner healing and deliverance ministry that addresses the
              whole person—spirit, soul, and body. Our biblical foundation combined with practical application helps
              believers break free from strongholds and walk in the fullness of their identity in Christ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Inner Healing</h3>
              <p className="text-gray-600">
                Address emotional wounds, trauma, and painful memories through Christ-centered healing prayer and
                biblical counseling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Shield className="h-12 w-12 text-[#0F3543] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Deliverance Ministry</h3>
              <p className="text-gray-600">
                Learn to identify and break spiritual strongholds, cast out demons, and walk in the authority Christ has
                given every believer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Users className="h-12 w-12 text-[#0F3543] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Connect with like-minded believers on the same journey toward freedom and learn to minister to others
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
              <p className="text-lg text-gray-700">
                Begin with our comprehensive guide and discover the biblical foundations for lasting freedom.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#FDF6E9] to-[#f8f0e3] p-8 rounded-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-[#0F3543] mr-3" />
                    <h3 className="text-2xl font-bold">Freedom Pathways Guide</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Our comprehensive 200+ page guide covers everything you need to know about inner healing and
                    deliverance ministry. From biblical foundations to practical application, this resource will equip
                    you for your freedom journey.
                  </p>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>• Biblical foundations for inner healing and deliverance</li>
                    <li>• How to identify emotional wounds and spiritual strongholds</li>
                    <li>• Practical steps for facilitating freedom sessions</li>
                    <li>• Understanding your authority as a believer</li>
                    <li>• Maintaining freedom and helping others find breakthrough</li>
                  </ul>
                  <Link
                    href="https://zcnlqhdimljmsuilobyw.supabase.co/storage/v1/object/public/ministry-files//Freedom_Pathways_IHD_Curriculum.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Free Guide
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src="/images/freedom-pathways-cover.png"
                    alt="Freedom Pathways Guide Cover"
                    width={300}
                    height={400}
                    className="mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Freedom Pathways Works</h2>
              <p className="text-lg text-gray-700">
                Our approach is designed to address the root causes of spiritual bondage and emotional wounds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0F3543] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Identify areas of bondage, emotional wounds, and spiritual strongholds in your life.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#0F3543] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Inner Healing</h3>
                <p className="text-gray-600 text-sm">
                  Address emotional wounds through prayer, forgiveness, and replacing lies with God's truth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#0F3543] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Deliverance</h3>
                <p className="text-gray-600 text-sm">
                  Break spiritual strongholds and cast out demons using biblical authority and prayer.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#0F3543] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Walking Free</h3>
                <p className="text-gray-600 text-sm">
                  Maintain your freedom through ongoing discipleship, community, and spiritual practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0F3543] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Freedom Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let another day pass in bondage. Your freedom is available now through the power of Jesus Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-freedom-session"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0F3543] font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Schedule a Freedom Session
            </Link>
            <Link
              href="https://zcnlqhdimljmsuilobyw.supabase.co/storage/v1/object/public/ministry-files//Freedom_Pathways_IHD_Curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-[#0F3543] transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Free Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
