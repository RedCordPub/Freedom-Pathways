"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Clock, Mail } from "lucide-react"
import { submitInterestForm } from "@/app/freedom-pathways/actions"

export function ComingSoonSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setError("")

    try {
      const result = await submitInterestForm(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to submit. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#FDF6E9] to-[#f8f0e3]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Coming Soon
            </div>
            <h2 className="text-4xl font-bold mb-4 text-[#0F3543]">Freedom Pathways Community</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our online community and training platform is under development. Sign up to be notified when we launch and
              get early access to courses, group training, and mentoring opportunities.
            </p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="bg-[#0F3543] p-6 text-white">
              <h3 className="text-xl font-bold">Be the First to Know</h3>
              <p className="text-gray-200 mt-1">Join our waiting list for early access and exclusive offers</p>
            </div>

            {isSubmitted ? (
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Thank You!</h3>
                <p className="text-gray-700 mb-6">
                  Your interest has been registered. We'll notify you when Freedom Pathways Community launches.
                </p>
                <div className="flex items-center justify-center text-gray-600 mb-6">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Check your inbox for a confirmation email</span>
                </div>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Register Another Email
                </Button>
              </CardContent>
            ) : (
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
                        Your Name
                      </label>
                      <Input id="name" name="name" placeholder="John Doe" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in: (select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="courses"
                          name="interests"
                          value="Online Courses"
                          className="h-5 w-5 mt-0.5 mr-2"
                          disabled={isSubmitting}
                        />
                        <label htmlFor="courses" className="text-gray-700">
                          <span className="font-medium">Online Courses</span>
                          <p className="text-sm text-gray-500">Self-paced learning materials</p>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="group-training"
                          name="interests"
                          value="Group Training"
                          className="h-5 w-5 mt-0.5 mr-2"
                          disabled={isSubmitting}
                        />
                        <label htmlFor="group-training" className="text-gray-700">
                          <span className="font-medium">Group Training</span>
                          <p className="text-sm text-gray-500">Interactive group sessions</p>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="mentoring"
                          name="interests"
                          value="1-on-1 Mentoring"
                          className="h-5 w-5 mt-0.5 mr-2"
                          disabled={isSubmitting}
                        />
                        <label htmlFor="mentoring" className="text-gray-700">
                          <span className="font-medium">1-on-1 Mentoring</span>
                          <p className="text-sm text-gray-500">Personal guidance and coaching</p>
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="community"
                          name="interests"
                          value="Community Access"
                          className="h-5 w-5 mt-0.5 mr-2"
                          disabled={isSubmitting}
                        />
                        <label htmlFor="community" className="text-gray-700">
                          <span className="font-medium">Community Access</span>
                          <p className="text-sm text-gray-500">Connect with like-minded believers</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      What are you hoping to gain from Freedom Pathways? (optional)
                    </label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={3}
                      placeholder="Share your goals, challenges, or specific areas you'd like to see addressed..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="text-center">
                    <Button type="submit" className="bg-[#0F3543] hover:bg-[#0a2832]" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Notify Me When It Launches"}
                    </Button>
                    <p className="text-xs text-gray-500 mt-3">
                      We respect your privacy and will never share your information with third parties.
                    </p>
                  </div>
                </form>
              </CardContent>
            )}
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Courses</h3>
              <p className="text-gray-600 text-sm">
                Structured learning paths covering identity, spiritual warfare, and healing
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Supportive Community</h3>
              <p className="text-gray-600 text-sm">
                Connect with like-minded believers on the same journey toward freedom
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Personal Mentoring</h3>
              <p className="text-gray-600 text-sm">One-on-one guidance to address your specific needs and challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
