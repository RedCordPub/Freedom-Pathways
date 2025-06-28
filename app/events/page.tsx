import Link from "next/link"
import { ArrowRight, Youtube, Calendar, Download } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Inner Healing and Deliverance Workshop",
      date: "14 June",
      location: "Life Church",
      address: "Middleboro, KY",
      website: "https://lifechurchmboro.com/",
      slug: "inner-healing-deliverance-workshop",
      description:
        "Join us for a powerful workshop on inner healing and deliverance ministry at Life Church Middleboro.",
    },
    {
      title: "A Love Letter from a Pastor - 1 John Series",
      date: "29 June",
      location: "River Church Family",
      address: "Guest Speaker",
      website: "https://www.rivercentral.org/",
      seriesUrl: "https://www.rivercentral.org/recent-teachings-all/a-love-letter-from-a-pastor-i-john",
      slug: "river-church-june-29",
      description:
        "Contributing to the powerful 1 John teaching series 'A Love Letter from a Pastor' at River Church Family.",
      churchTheme: "RESTORING. REVIVING. RELEASING.",
      hasTeachingNotes: true,
      teachingNotesUrl: "/teaching-notes/1-john-3-1-10-teaching-notes.pdf",
      teachingTitle: "1 John 3:1-10 - Children of God",
    },
    {
      title: "A Love Letter from a Pastor - 1 John Series",
      date: "20 July",
      location: "River Church Family",
      address: "Guest Speaker",
      website: "https://www.rivercentral.org/",
      seriesUrl: "https://www.rivercentral.org/recent-teachings-all/a-love-letter-from-a-pastor-i-john",
      slug: "river-church-july-20",
      description: "Continuing the 1 John teaching series 'A Love Letter from a Pastor' at River Church Family.",
      churchTheme: "RESTORING. REVIVING. RELEASING.",
    },
    {
      title: "Fuel Up Fridays",
      date: "Every Friday",
      location: "YouTube Channel",
      address: "Online - @persellcody",
      website: "https://www.youtube.com/@persellcody",
      slug: "fuel-up-fridays",
      description:
        "Weekly encouragement and spiritual warfare insights to fuel your faith and prepare you for victory.",
      isRecurring: true,
    },
  ]

  const pastEvents = [
    {
      title: "Foursquare Leader Conference 2024",
      subtitle: "FLC 2024 Workshop",
      date: "October 4th",
      time: "10AM-12PM",
      location: "Foursquare Conference",
      description: "Establishing Supernatural Ministries in the Local Church that do not quench or grieve Holy Spirit",
    },
    {
      title: "The InGathering 3",
      subtitle: "Preaching",
      date: "October 22nd",
      time: "7PM",
      location: "InGathering Conference",
      description: "Time for the Ecclesia to be the Ecclesia!",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-700">
            Join us for transformative gatherings, workshops, and weekly encouragement designed to strengthen your faith
            and build community.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Events</h2>
            <Link href="/events/calendar" className="inline-flex items-center text-base font-medium">
              VIEW CALENDAR <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-xl mb-4 text-[#0F3543] font-semibold">{event.date}</p>
                  </div>
                  {event.isRecurring && (
                    <div className="flex items-center text-red-600 ml-4">
                      <Youtube className="h-6 w-6" />
                    </div>
                  )}
                  {!event.isRecurring && (
                    <div className="flex items-center text-[#0F3543] ml-4">
                      <Calendar className="h-6 w-6" />
                    </div>
                  )}
                </div>

                <div className="flex items-start mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-2 mt-0.5 text-gray-500 flex-shrink-0"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <div className="font-medium">{event.location}</div>
                    <div className="text-sm text-gray-500">{event.address}</div>
                  </div>
                </div>

                {event.churchTheme && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm font-medium text-blue-800 italic">"{event.churchTheme}"</p>
                  </div>
                )}

                {event.description && <p className="text-gray-600 mb-4">{event.description}</p>}

                {/* Teaching Notes Section */}
                {event.hasTeachingNotes && (
                  <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center mb-2">
                      <Download className="h-4 w-4 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-800">Free Teaching Notes Available</h4>
                    </div>
                    <p className="text-sm text-green-700 mb-3">{event.teachingTitle}</p>
                    <Link
                      href="/teaching-notes/1-john-3-1-10"
                      className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      View Teaching Notes
                    </Link>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  {event.isRecurring ? (
                    <Link
                      href={event.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                    >
                      <Youtube className="h-4 w-4 mr-2" />
                      Watch on YouTube
                    </Link>
                  ) : (
                    <>
                      <Link
                        href={event.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                      >
                        Visit Church Website
                      </Link>
                      {event.seriesUrl && (
                        <Link
                          href={event.seriesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 border border-blue-400 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
                        >
                          View Teaching Series
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* River Church Family Spotlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Featured Partnership</h2>
              <p className="text-lg text-gray-600">
                Excited to be contributing to the powerful teaching series at River Church Family
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/river-church-family-website.jpg"
                  alt="River Church Family - Restoring, Reviving, Releasing"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-800/70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-4xl font-bold mb-2">RESTORING. REVIVING. RELEASING.</h3>
                    <p className="text-xl">River Church Family</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl font-bold mb-3">A Love Letter from a Pastor - 1 John Series</h4>
                <p className="text-gray-600 mb-4">
                  Join us for this powerful teaching series through the book of 1 John. Cody Persell will be
                  contributing to this series on June 29th and July 20th, bringing insights on spiritual warfare and
                  walking in freedom through Christ.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://www.rivercentral.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Visit River Church
                  </Link>
                  <Link
                    href="https://www.rivercentral.org/recent-teachings-all/a-love-letter-from-a-pastor-i-john"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
                  >
                    View Teaching Series
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="text-lg font-medium text-gray-800 mb-2">{event.subtitle}</div>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span>
                    {event.date} • {event.time}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Don't miss out on upcoming workshops, speaking engagements, and weekly Fuel Up Friday encouragement.
            Subscribe to stay connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.youtube.com/@persellcody"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe to YouTube
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Join Mailing List
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
