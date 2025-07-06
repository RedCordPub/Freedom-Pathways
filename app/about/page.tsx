import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Adjusted to reduce excessive space */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-red-600">Heart</span> & Mission
            </h1>
            <p className="text-2xl mb-6 text-gray-800 font-medium leading-relaxed">
              Together in Battle Ministries exists to equip the local church to become a place of healing and
              freedom—restoring the power of the Holy Spirit and the truth of God's Word to the heart of Christian
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Adjusted spacing */}
      <section id="mission" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are called to equip believers with the spiritual tools, biblical foundation, and supportive community
                needed to overcome life's battles and walk victoriously in Christ.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through teaching, mentorship, and practical resources, we help individuals break free from strongholds
                and step into their God-given purpose and identity. Our focus extends beyond personal freedom to
                training the next generation of deliverance ministers and spiritual warriors.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/faith-growth-freedom-quartet.png"
                alt="Faith, Growth, and Freedom - Teaching, Mentorship, Breaking Free from Strongholds, and God-given Purpose and Identity"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Heart for People</h3>
                <p className="text-gray-600">We genuinely care for each person's spiritual journey and growth.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-[#0F3543] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Biblical Foundation</h3>
                <p className="text-gray-600">All our teaching and guidance is rooted in God's Word.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-[#0F3543] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Together in Battle</h3>
                <p className="text-gray-600">
                  We believe in fighting spiritual battles together through active involvement in your local church
                  community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-[#0F3543] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Purpose Driven</h3>
                <p className="text-gray-600">Helping others discover and fulfill their God-given calling.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0F3543]">Ministry Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the heart behind Together in Battle Ministry and learn about our calling to serve.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <Image
                      src="/images/cody-persell-photo.png"
                      alt="Cody Persell"
                      width={400}
                      height={400}
                      className="rounded-lg mx-auto lg:mx-0 mb-6 shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Cody Persell</h3>
                    <p className="text-gray-600 mb-4">
                      With a heart for seeing believers walk in freedom, Cody Persell has dedicated his ministry to
                      helping others overcome spiritual battles and discover their identity in Christ.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Through years of pastoral ministry, counseling, and teaching, Cody has developed the Freedom
                      Pathways program and authored several books on spiritual warfare and deliverance, including his
                      latest work "Jesus the Deliverer."
                    </p>
                    <p className="text-gray-600 mb-6">
                      His passion is to restore the lost ministry of deliverance to the modern church and equip
                      believers with both the knowledge and practical skills needed for effective spiritual warfare.
                    </p>
                    <Button asChild>
                      <Link href="/speaking">Invite to Speak</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section id="statement-of-faith" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">What We Believe</h2>
            <p className="text-lg text-gray-600">
              Our ministry is built on solid biblical foundations and core Christian beliefs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Authority of Scripture</h3>
                <p className="text-gray-600">
                  We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and
                  practice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Power of Jesus Christ</h3>
                <p className="text-gray-600">
                  Jesus Christ is Lord and Savior, and through His death and resurrection, He has given us authority
                  over all evil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ministry of Deliverance</h3>
                <p className="text-gray-600">
                  Deliverance ministry is a vital part of the Gospel commission and should be restored to the modern
                  church.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Community & Discipleship</h3>
                <p className="text-gray-600">
                  Spiritual growth happens best in community, through discipleship, accountability, and mutual support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to begin your journey toward freedom and victory? Connect with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/freedom-pathways">Join Freedom Pathways</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-900">
              <Link href="/events">Attend an Event</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
