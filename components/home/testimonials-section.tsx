"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechCorp Industries",
      company: "Fortune 500 Manufacturing",
      content:
        "Genovo's approach to infrastructure intelligence is revolutionary. Their SCOS platform has the potential to transform how we think about industrial automation and security.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Security",
      company: "Global Financial Services",
      content:
        "The level of security and privacy engineering at Genovo is exceptional. Their zero-knowledge architecture sets a new standard for enterprise applications.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Research Director",
      company: "African Tech Institute",
      content:
        "Genovo represents the future of African tech innovation. Their work on decentralized platforms and digital sovereignty is groundbreaking.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">What Leaders Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industry experts and thought leaders recognize our commitment to building the future of secure,
            privacy-first technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-gray-300 mb-4" />

                <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
