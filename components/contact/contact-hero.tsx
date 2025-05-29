"use client"

import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partner with Genovo Technologies to build the future of secure, decentralized digital infrastructure. We'd
            love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">24-48h Response Time</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <MessageSquare className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Secure Communication</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Phone className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Global Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
