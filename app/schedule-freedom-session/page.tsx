"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Shield, Users, CheckCircle, Mail, Check, Calendar, Clock } from "lucide-react"
import { useState, useTransition } from "react"
import { submitFreedomSessionRequest } from "./actions"

export default function ScheduleFreedomSessionPage() {
  const [isPending, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitFreedomSessionRequest(formData)
      if (result.success) {
        setSubmitted(true)
        setError("")
      } else {
        setError(result.message)
      }
    })
  }

  const sessionTypes = [
    {
      icon: Heart,
      title: "Individual Sessions",
      description: "One-on-one inner healing and deliverance ministry",
    },
    {
      icon: Users,
      title: "Couple Sessions",
      description: "Ministry for married couples seeking breakthrough together",
    },
    {
      icon: Shield,
      title: "Family Sessions",
      description: "Generational healing and freedom for families",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Schedule a Freedom Session</h1>
              <p className="text-xl mb-8 text-gray-700">
                Take the next step in your journey toward healing and freedom. Our inner healing and deliverance
                sessions provide a safe, confidential space to address spiritual strongholds and emotional wounds.
              </p>
              <div className="bg-[#FDF6E9] p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-3 text-[#0F3543]">What to Expect</h2>
                <p className="text-base text-gray-700">
                  Each session is tailored to your specific needs, combining biblical counseling, prayer ministry, and
                  deliverance as led by the Holy Spirit. Sessions are conducted in a safe, non-judgmental environment
                  with complete confidentiality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    const formElement = document.getElementById("request-form")
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Schedule Your Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Freedom Sessions</h2>
            <p className="text-lg text-gray-600">
              We offer different session formats to meet your specific needs and circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sessionTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <type.icon className="h-12 w-12 text-[#0F3543] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Address */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Areas We Address</h2>
              <p className="text-lg text-gray-600">
                Freedom sessions can help with a wide range of spiritual, emotional, and relational challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#0F3543]">Spiritual Strongholds</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Demonic oppression and harassment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Generational curses and patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Occult involvement and spiritual bondage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Addictions and compulsive behaviors</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#0F3543]">Emotional Healing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trauma and past wounds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Anxiety, depression, and fear</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identity and self-worth issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Relationship and forgiveness challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Information */}
      <section className="py-16 bg-[#FDF6E9]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#0F3543]">Session Information</h2>
              <p className="text-lg text-gray-600">
                Important details about scheduling and preparing for your freedom session.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-[#0F3543] mr-3" />
                    <h3 className="text-xl font-semibold">Session Length</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sessions are 1 hour in length, focused on addressing your specific needs efficiently and
                    effectively.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Full ministry session: 1 hour</li>
                    <li>• Available online or in-person</li>
                    <li>• No initial consultation required</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-[#0F3543] mr-3" />
                    <h3 className="text-xl font-semibold">Scheduling</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sessions are available by appointment only. We'll work with your schedule to find the best time.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Weekday and weekend options</li>
                    <li>• In-person and online sessions</li>
                    <li>• 48-hour response to requests</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-[#0F3543]/20">
              <h3 className="text-lg font-semibold mb-3 text-[#0F3543]">Preparation Guidelines</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Spend time in prayer asking God to prepare your heart</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Consider fasting before your session if you feel led</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Bring any specific areas you'd like to address</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Come with an open heart and willingness to receive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Request Your Freedom Session</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll contact you within 48 hours to schedule your session.
              </p>
            </div>

            {submitted ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Request Submitted Successfully!</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <div className="flex items-center justify-center">
                      <Mail className="h-5 w-5 mr-2" />
                      <span>Confirmation email sent to your inbox</span>
                    </div>
                    <p>We'll contact you within 48 hours to schedule your freedom session.</p>
                    <p>Please check your email for important preparation information.</p>
                  </div>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8">
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-600">{error}</p>
                    </div>
                  )}

                  <form action={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <Input id="name" name="name" required disabled={isPending} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input id="email" name="email" type="email" required disabled={isPending} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input id="phone" name="phone" type="tel" required disabled={isPending} />
                      </div>
                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                          Age
                        </label>
                        <Input id="age" name="age" type="number" min="18" disabled={isPending} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="session-type" className="block text-sm font-medium text-gray-700 mb-2">
                          Session Type *
                        </label>
                        <select
                          id="session-type"
                          name="session-type"
                          required
                          disabled={isPending}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3543] focus:border-[#0F3543] disabled:opacity-50"
                        >
                          <option value="">Select session type</option>
                          <option value="individual">Individual Session</option>
                          <option value="couple">Couple Session</option>
                          <option value="family">Family Session</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="session-format" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Format *
                        </label>
                        <select
                          id="session-format"
                          name="session-format"
                          required
                          disabled={isPending}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3543] focus:border-[#0F3543] disabled:opacity-50"
                        >
                          <option value="">Select format</option>
                          <option value="in-person">In-Person</option>
                          <option value="online">Online (Video Call)</option>
                          <option value="either">Either Option</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Days/Times
                      </label>
                      <Input
                        id="availability"
                        name="availability"
                        placeholder="e.g., Weekday evenings, Saturday mornings"
                        disabled={isPending}
                      />
                    </div>

                    <div>
                      <label htmlFor="areas-of-concern" className="block text-sm font-medium text-gray-700 mb-2">
                        Areas You'd Like to Address *
                      </label>
                      <Textarea
                        id="areas-of-concern"
                        name="areas-of-concern"
                        rows={4}
                        placeholder="Please share what you're hoping to receive ministry for (trauma, spiritual oppression, generational issues, etc.)"
                        required
                        disabled={isPending}
                      />
                    </div>

                    <div>
                      <label htmlFor="previous-ministry" className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Ministry Experience
                      </label>
                      <Textarea
                        id="previous-ministry"
                        name="previous-ministry"
                        rows={3}
                        placeholder="Have you received inner healing or deliverance ministry before? If so, please briefly describe your experience."
                        disabled={isPending}
                      />
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        disabled={isPending}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3543] focus:border-[#0F3543] disabled:opacity-50"
                      >
                        <option value="routine">Routine - Within 2-4 weeks</option>
                        <option value="moderate">Moderate - Within 1-2 weeks</option>
                        <option value="urgent">Urgent - Within a few days</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <Textarea
                        id="additional-info"
                        name="additional-info"
                        rows={3}
                        placeholder="Any other information you'd like us to know before your session..."
                        disabled={isPending}
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Confidentiality Notice:</strong> All information shared in this form and during your
                        session is kept strictly confidential. We are committed to providing a safe, non-judgmental
                        environment for your healing journey.
                      </p>
                    </div>

                    <div className="text-center">
                      <Button size="lg" className="w-full sm:w-auto" disabled={isPending}>
                        {isPending ? "Submitting..." : "Request Freedom Session"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
