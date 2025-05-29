"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Shield, Users, Rocket, Globe, Heart } from "lucide-react"

export default function MissionDrivenCulture() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We encourage bold ideas and give you the freedom to experiment with cutting-edge technologies.",
      color: "yellow",
    },
    {
      icon: Shield,
      title: "Security Mindset",
      description:
        "Every team member thinks security-first, building privacy and protection into everything we create.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description:
        "We believe the best solutions come from diverse perspectives working together towards common goals.",
      color: "green",
    },
    {
      icon: Rocket,
      title: "Growth Oriented",
      description:
        "We invest in your professional development and provide opportunities to learn and advance your career.",
      color: "purple",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Our solutions impact users worldwide, and we embrace diverse backgrounds and viewpoints.",
      color: "indigo",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We support flexible working arrangements and prioritize your well-being and personal growth.",
      color: "red",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Mission-Driven Culture</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're building more than just products - we're creating a culture of innovation, security, and collaboration
            that empowers everyone to build the digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1A1A1A] to-gray-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Remote-First, Global Team</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Work from anywhere while collaborating with talented individuals across the globe. We provide the tools and
            support you need to succeed, regardless of your location.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm opacity-80">Remote Flexibility</p>
            </div>
            <div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-80">Countries Represented</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm opacity-80">Global Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
