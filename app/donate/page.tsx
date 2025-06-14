import { Heart, Target, Users, BookOpen, ExternalLink } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-8">Support Our Ministry</h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-700 mx-auto">
            Your generous support helps us reach more people with the life-changing message of freedom and victory in
            Christ. Together, we can transform lives and communities.
          </p>
          <a
            href="https://give.tithe.ly/?formId=0f4e6ec5-8b48-4996-8290-33893531c41a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00DB72] text-white font-bold text-xl rounded-md hover:bg-opacity-90 transition-colors"
          >
            Donate Now <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Donation Funds */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where Your Donation Goes</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Your gift can be directed to specific areas of our ministry. Each fund supports a vital aspect of our work
              to bring healing and freedom to believers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#0F3543] rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inner Healing and Deliverance Session Sponsorship</h3>
              <p className="text-gray-600 mb-6">
                We offer free inner healing and deliverance sessions that are donation-based only. Your generosity helps
                us provide more sessions to more people seeking freedom in Christ. By supporting this fund, you're
                directly enabling individuals to experience breakthrough and healing regardless of their financial
                situation.
              </p>
              <div className="text-sm font-medium text-gray-500">Help us reach more people in need of freedom</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#0F3543] rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ministry Travel Expenses</h3>
              <p className="text-gray-600 mb-6">
                Support our speaking engagements, conferences, and church visits across the country. Your contribution
                helps cover travel costs, accommodations, and resources needed to bring the message of freedom to
                communities near and far. This fund enables us to respond to more invitations and reach more people.
              </p>
              <div className="text-sm font-medium text-gray-500">Helps expand our geographic reach</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#0F3543] rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Freedom Pathways</h3>
              <p className="text-gray-600 mb-6">
                Fund the development of courses, training materials, and resources for our Freedom Pathways program.
                This initiative equips believers with the tools they need for personal freedom and trains them to
                minister effectively to others. Your gift helps create content, build our online platform, and make
                these resources accessible to more people.
              </p>
              <div className="text-sm font-medium text-gray-500">Creates lasting educational resources</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://give.tithe.ly/?formId=0f4e6ec5-8b48-4996-8290-33893531c41a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00DB72] text-white font-bold text-xl rounded-md hover:bg-opacity-90 transition-colors"
            >
              Support These Funds <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-3">
              You can specify which fund you'd like to support in the notes section of the donation form.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              See how your donation directly supports our ministry areas and creates lasting change in the lives of
              believers around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Freedom Pathways</h3>
              <p className="text-gray-600 mb-3">
                Support our online community and course development to help more people find freedom in Christ.
              </p>
              <div className="text-sm font-medium text-gray-500">Helps 50+ people monthly</div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resource Development</h3>
              <p className="text-gray-600 mb-3">
                Fund the creation of new books, study guides, and teaching materials for spiritual growth.
              </p>
              <div className="text-sm font-medium text-gray-500">Creates lasting resources</div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Speaking Ministry</h3>
              <p className="text-gray-600 mb-3">
                Enable us to reach more churches and events with life-changing messages of hope and victory.
              </p>
              <div className="text-sm font-medium text-gray-500">Reaches 1000+ annually</div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ministry Operations</h3>
              <p className="text-gray-600 mb-3">
                Support the day-to-day operations that keep our ministry running and growing.
              </p>
              <div className="text-sm font-medium text-gray-500">Sustains ongoing ministry</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Financial Transparency</h2>
            <p className="text-lg text-gray-700 mb-4">
              We believe in being good stewards of your gifts. 100% of your donations go directly to support the
              ministry and its operations.
            </p>
            <p className="text-lg text-gray-700">
              Every contribution helps us continue providing free inner healing and deliverance sessions, developing
              resources, and expanding our reach to those in need of freedom in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0F3543] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your generosity makes a difference in the lives of countless individuals seeking freedom and victory in
            Christ. Thank you for considering a gift to support this vital work.
          </p>
          <a
            href="https://give.tithe.ly/?formId=0f4e6ec5-8b48-4996-8290-33893531c41a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00DB72] text-white font-bold text-xl rounded-md hover:bg-opacity-90 transition-colors"
          >
            Give Now <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
