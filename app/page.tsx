import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const courses = [
    {
      title: "Spiritual Warfare Basics",
      image: "/placeholder.svg?height=400&width=600",
      slug: "spiritual-warfare-basics",
    },
    {
      title: "Understanding Dreams",
      image: "/placeholder.svg?height=400&width=600",
      slug: "understanding-dreams",
    },
    {
      title: "Defeating Demons",
      image: "/placeholder.svg?height=400&width=600",
      slug: "defeating-demons",
    },
  ]

  const events = [
    {
      title: "Inner Healing and Deliverance Workshop",
      date: "14 June",
      location: "Life Church",
      address: "Middleboro, KY",
      slug: "inner-healing-deliverance-workshop",
    },
    {
      title: "A Love Letter from a Pastor - 1 John Series",
      date: "29 June",
      location: "River Church Family",
      address: "Guest Speaker",
      slug: "river-church-june-29",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-8 mt-12">
                <span className="text-red-600">Together</span> in Battle Ministries
              </h1>
              <p className="text-lg mb-8 text-gray-800 font-medium leading-relaxed">
                Deliverance ministry needs to be restored back to the local church.
                <span className="font-bold">The local church should be a place of healing and freedom.</span>
              </p>
              <div id="mission" className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-3 text-gray-900">Our Mission</h2>
                <p className="text-base text-gray-700">
                  Equipping the local church for healing and freedom—restoring Spirit and Truth to Christian
                  communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/freedom-pathways"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Explore Freedom Pathways
                </Link>
                <Link
                  href="/schedule-freedom-session"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Schedule a Session
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/images/spirit-truth-compact-logo.png"
                alt="Spirit and Truth - Sword, Flames, and Open Bible"
                width={350}
                height={350}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Leader Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/cody-persell-photo.png"
                alt="Cody Persell - Ministry Leader"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#0F3543]">Meet Cody Persell</h2>
              <p className="text-lg mb-6 text-gray-700">
                Welcome to Together in Battle Ministries! I'm Cody Persell, and I'm passionate about helping believers
                walk in the freedom that Christ died to give us. My journey into deliverance ministry began through my
                own encounter with spiritual warfare and has led to years of studying Scripture and ministering to those
                bound by spiritual oppression.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                As the author of "Jesus the Deliverer," I believe that deliverance ministry isn't just for
                specialists—it's part of the normal Christian life and should be accessible to every believer. Through
                Together in Battle Ministries, I'm committed to equipping the church with biblical foundations and
                practical tools for effective spiritual warfare.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Whether you're struggling with spiritual bondage yourself, called to minister to others, or simply want
                to understand this vital aspect of Christianity, I'm here to help you discover the freedom and authority
                that belongs to every child of God.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Learn More About My Story
                </Link>
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#0F3543] text-[#0F3543] font-medium rounded-md hover:bg-[#0F3543] hover:text-white transition-colors"
                >
                  Read My Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Ministry */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Watch & Subscribe</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join thousands of viewers learning about spiritual warfare, deliverance ministry, and walking in freedom
              through our YouTube content.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Channel */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/cody-persell-youtube-banner.jpg"
                  alt="Cody Persell YouTube Channel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Cody Persell</h3>
                    <p className="text-gray-600">@persellcody • 192 subscribers • 326 videos</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Deliverance Minister | Author | Speaker. Teaching on spiritual warfare, identity in Christ, and
                  walking in freedom. New videos weekly including "Fuel Up Friday" series.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://www.youtube.com/@persellcody"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Subscribe
                  </Link>
                  <Link
                    href="https://www.youtube.com/@persellcody"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Watch Videos
                  </Link>
                </div>
              </div>
            </div>

            {/* Podcast Channel */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-[#0F3543] to-[#1a4a5a] flex items-center justify-center">
                <Image
                  src="/images/together-in-battle-logo.png"
                  alt="Together in Battle Podcast"
                  width={120}
                  height={120}
                  className="opacity-90"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Together in Battle</h3>
                    <p className="text-gray-600">Deliverance Podcast</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Deep-dive podcast episodes on deliverance ministry, spiritual warfare tactics, and biblical
                  foundations for freedom. We interview front line ministers and deliverance ministers to share their
                  experiences and insights into the ministry of inner healing and deliverance. Perfect for those wanting
                  to go deeper in their understanding.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://www.youtube.com/@TogetherinBattle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Subscribe
                  </Link>
                  <Link
                    href="https://www.youtube.com/@TogetherinBattle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Listen Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Featured Video</h3>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/7Dq2iYNbT_s"
                  title="How to Cast Out Demons: Step-by-Step Deliverance Guide (Biblical Exorcism)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold">How to Cast Out Demons: Step-by-Step Deliverance Guide</h4>
                <p className="text-gray-600 mt-2">
                  Learn the biblical foundations and practical steps for casting out demons and ministering deliverance
                  effectively. This comprehensive guide walks through the authority given to believers by Jesus Christ.
                </p>
                <div className="mt-4">
                  <Link
                    href="https://youtu.be/7Dq2iYNbT_s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#0F3543] font-medium hover:underline"
                  >
                    Watch full video on YouTube <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Content */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Popular Content</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold mb-2">Fuel Up Friday Series</h4>
                <p className="text-sm text-gray-600">Weekly encouragement and spiritual warfare insights</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold mb-2">Deliverance Teaching</h4>
                <p className="text-sm text-gray-600">Biblical foundations for freedom ministry</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold mb-2">Identity in Christ</h4>
                <p className="text-sm text-gray-600">Discovering who you are in God's eyes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book Section */}
      <section className="py-16 bg-gradient-to-r from-[#0F3543] to-[#1a4a5a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                New Release
              </div>
              <h2 className="text-4xl font-bold mb-6">Jesus the Deliverer</h2>
              <p className="text-xl mb-6 text-gray-200">
                Discover the lost ministry of the apostles and the early church. This powerful new book reveals how the
                early believers walked in deliverance power and how we can reclaim this vital ministry today.
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Jesus commissioned His disciples to cast out demons as a normal part of ministry. Learn how this
                forgotten aspect of Christianity can be restored in your life and church through biblical insights and
                practical application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://jesusthedelivererbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0F3543] font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Get Your Copy Now
                </Link>
                <Link
                  href="https://jesusthedelivererbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-[#0F3543] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/images/jesus-deliverer-3d-mockup.png"
                alt="Jesus the Deliverer Book Cover"
                width={500}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Freedom Pathways Feature */}
      <section className="py-16 bg-[#FDF6E9]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/freedom-pathways-logo.png"
                alt="Freedom Pathways - Inner Healing and Deliverance"
                width={400}
                height={400}
                className="max-w-md mx-auto lg:mx-0"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-[#0F3543]">Freedom Pathways</h2>
              <p className="text-lg mb-6 text-gray-700">
                Our signature program for inner healing and deliverance. Freedom Pathways provides a clear path to
                spiritual freedom through Christ-centered teaching, prayer ministry, and supportive community.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Whether you're struggling with past trauma, spiritual oppression, or simply seeking deeper freedom in
                Christ, our pathways provide the guidance and support you need for your journey.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                For those called to minister to others, Freedom Pathways also includes a specialized track to learn how
                to administer inner healing and deliverance, equipping you with the biblical foundation and practical
                skills needed to help others find freedom in Christ.
              </p>
              <Link
                href="/freedom-pathways"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Upcoming Events</h2>
            <Link href="/events" className="inline-flex items-center text-base font-medium">
              VIEW ALL <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-xl mb-4">{event.date}</p>
                <div className="flex items-start mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-2 mt-0.5 text-gray-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <div className="font-medium">{event.location}</div>
                    <div className="text-sm text-gray-500">{event.address}</div>
                  </div>
                </div>
                <Link
                  href={`/events/${event.slug}`}
                  className="inline-block px-6 py-2 border border-gray-300 rounded-md text-base font-medium hover:bg-gray-50 transition-colors"
                >
                  View Detail
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of believers who have found freedom and victory through our ministry. Take the first step
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/freedom-pathways"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Join Freedom Pathways
            </Link>
            <Link
              href="/schedule-freedom-session"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Schedule a Session
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-gray-900 transition-colors"
            >
              Attend an Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
