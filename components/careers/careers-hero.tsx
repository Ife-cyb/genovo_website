"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Zap } from "lucide-react"

export default function CareersHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">Join the Future</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build the digital future with us. We're looking for exceptional talent to help create the next generation of
            secure, privacy-first technology solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Remote-First Culture</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Global Impact</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Cutting-Edge Tech</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1A1A1A] hover:bg-gray-800 text-white">
              View Open Roles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Open Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
