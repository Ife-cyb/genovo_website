"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Lightbulb, Rocket, Globe } from "lucide-react"

export default function GenovoStory() {
  const milestones = [
    {
      year: "2024",
      title: "Foundation",
      description:
        "Genovo Technologies was founded with a vision to revolutionize digital sovereignty and privacy-first technology solutions.",
      icon: Lightbulb,
    },
    {
      year: "2024",
      title: "SCOS Development",
      description:
        "Began development of the Synthetic Cognition Operating System, targeting critical infrastructure verticals.",
      icon: Rocket,
    },
    {
      year: "2025",
      title: "Product Ecosystem",
      description: "Expanding our portfolio with Taskr, Homevy, and advanced R&D projects across multiple domains.",
      icon: Globe,
    },
    {
      year: "Future",
      title: "Global Impact",
      description:
        "Scaling our solutions globally while maintaining our commitment to digital sovereignty and user privacy.",
      icon: Calendar,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Story of Genovo's Founding</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From inception to innovation - the story of building the digital future through elite technology solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <milestone.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#1A1A1A]">{milestone.title}</h3>
                          <p className="text-sm text-gray-500">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block w-4 h-4 bg-[#1A1A1A] rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
