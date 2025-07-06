"use client"

import Link from "next/link"
import { ArrowRight, Users, BookOpen, MessageCircle, Calendar, ExternalLink } from 'lucide-react'

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
                <ArrowRight className="h-
