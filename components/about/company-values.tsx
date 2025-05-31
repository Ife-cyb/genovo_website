"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Users, Lock, Globe, Code } from "lucide-react"

export default function CompanyValues() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every solution we build prioritizes security and privacy from the ground up, ensuring uncompromising protection for our users.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We push the boundaries of what's possible, creating cutting-edge solutions that define the future of technology.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Users,
      title: "User Sovereignty",
      description:
        "We believe users should have complete control over their digital lives, data, and digital identity.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Privacy isn't an afterthought - it's built into the core architecture of everything we create.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Our solutions are designed to scale globally while respecting local privacy laws and cultural values.",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "We maintain the highest standards of code quality, system architecture, and engineering practices.",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ]

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at Genovo Technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
