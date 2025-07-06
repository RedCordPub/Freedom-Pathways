import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 text-gray-700">
              Have questions about our ministry or need more information? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#0F3543] rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">For general inquiries and information</p>
                  <Link href="mailto:info@battletogether.com" className="text-[#0F3543] font-medium hover:underline">
                    info@battletogether.com
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#0F3543] rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600 mb-4">Available Monday-Friday, 9am-5pm CST</p>
                  <Link href="tel:+1234567890" className="text-[#0F3543] font-medium hover:underline">
                    (123) 456-7890
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#0F3543] rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 mb-4">Based in the United States</p>
                  <span className="text-[#0F3543] font-medium">Available for travel nationwide</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input id="name" name="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="How can we help you?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" name="message" rows={5} placeholder="Type your message here..."></Textarea>
                  </div>

                  <div className="text-center">
                    <Button type="submit" className="bg-[#0F3543] hover:bg-opacity-90">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">Looking for ministry support?</h3>
                  <p className="mt-2 text-blue-700">
                    If you're seeking inner healing or deliverance ministry, please use our dedicated session request
                    form instead.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/schedule-freedom-session"
                      className="inline-flex items-center text-blue-600 font-medium hover:underline"
                    >
                      Schedule a Freedom Session <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
