"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mic, Users, Calendar, CheckCircle, Mail, Check } from "lucide-react"
import Image from "next/image"
import { useState, useTransition } from "react"
import { submitSpeakingRequest } from "./actions"

export default function SpeakingPage() {
  const [isPending, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const scrollToForm = (e) => {
    e.preventDefault()
    const formElement = document.getElementById("request-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitSpeakingRequest(formData)
      if (result.success) {
        setSubmitted(true)
        setError("")
      } else {
        setError(result.message)
      }
    })
  }

  const eventTypes = [
    {
      icon: Users,
      title: "Church Services",
      description: "Sunday morning messages, evening services, and special events",
    },
    {
      icon: Calendar,
      title: "Conferences & Retreats",
      description: "Multi-day events, workshops, and intensive training sessions",
    },
    {
      icon: Mic,
      title: "Men's & Women's Events",
      description: "Gender-specific gatherings focused on relevant topics and issues",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Speaking Ministry</h1>
              <p className="text-xl mb-8">
                Invite Pastor Cody for training or to speak to your congregation or at a conference or special event.
                Experience biblical teaching that transforms lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Request Speaker
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/pastor-cody-speaking.png"
                alt="Pastor Cody Persell speaking"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Events</h2>
            <p className="text-lg text-gray-600">
              We're available for various types of speaking engagements and events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <type.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <div className="space-y-4">
              <div className="flex items-start text-left">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Teaching and Training</h3>
                  <p className="text-gray-600">Comprehensive teaching on inner healing and deliverance ministry</p>
                </div>
              </div>
              <div className="flex items-start text-left">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Mass Deliverance Sessions</h3>
                  <p className="text-gray-600">Powerful corporate deliverance ministry for breakthrough and freedom</p>
                </div>
              </div>
              <div className="flex items-start text-left">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Prayer Ministry</h3>
                  <p className="text-gray-600">Individual and group prayer ministry for healing and freedom</p>
                </div>
              </div>
              <div className="flex items-start text-left">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Healing and Freedom Retreats</h3>
                  <p className="text-gray-600">Intensive multi-day experiences for deep healing and spiritual growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Request Form */}
      <section id="request-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Request a Speaker</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 48 hours to discuss your event.
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
                    <p>We'll review your request and respond within 48 hours.</p>
                    <p>Pastor Cody will personally reach out to discuss your event details.</p>
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
                          Phone Number
                        </label>
                        <Input id="phone" name="phone" type="tel" disabled={isPending} />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                          Church/Organization *
                        </label>
                        <Input id="organization" name="organization" required disabled={isPending} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 mb-2">
                          Event Date *
                        </label>
                        <Input id="event-date" name="event-date" type="date" required disabled={isPending} />
                      </div>
                      <div>
                        <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-2">
                          Event Type *
                        </label>
                        <select
                          id="event-type"
                          name="event-type"
                          required
                          disabled={isPending}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 disabled:opacity-50"
                        >
                          <option value="">Select event type</option>
                          <option value="sunday-service">Sunday Service</option>
                          <option value="conference">Conference</option>
                          <option value="retreat">Retreat</option>
                          <option value="mens-event">Men's Event</option>
                          <option value="womens-event">Women's Event</option>
                          <option value="youth-event">Youth Event</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="expected-attendance" className="block text-sm font-medium text-gray-700 mb-2">
                          Expected Attendance
                        </label>
                        <Input id="expected-attendance" name="expected-attendance" type="number" disabled={isPending} />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                          Event Location *
                        </label>
                        <Input id="location" name="location" placeholder="City, State" required disabled={isPending} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Topic/Theme
                      </label>
                      <Input
                        id="topic"
                        name="topic"
                        placeholder="e.g., Spiritual Warfare, Identity in Christ"
                        disabled={isPending}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us more about your event, specific needs, or any questions you have..."
                        disabled={isPending}
                      />
                    </div>

                    <div className="text-center">
                      <Button size="lg" className="w-full sm:w-auto" disabled={isPending}>
                        {isPending ? "Submitting..." : "Submit Speaking Request"}
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
