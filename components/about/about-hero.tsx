"use client"

import { Building, Users, Globe } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">About Genovo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Building the digital future through elite technology innovation and uncompromising security standards. We're
            a real team with a clear vision for digital sovereignty.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Building className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Founded 2025</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Mission-Driven Team</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Global Impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
