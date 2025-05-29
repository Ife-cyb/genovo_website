"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Code, Shield } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: Code,
      number: "8+",
      label: "ACTIVE PROJECTS",
      description: "Spanning infrastructure, revenue, and R&D",
    },
    {
      icon: Shield,
      number: "1",
      label: "FLAGSHIP OS",
      description: "SCOS - Revolutionary secure computing",
    },
    {
      icon: TrendingUp,
      number: "3",
      label: "REVENUE STREAMS",
      description: "Scalable income-generating platforms",
    },
    {
      icon: Users,
      number: "4",
      label: "R&D INITIATIVES",
      description: "Cutting-edge experimental technologies",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#F5F5F5] border-2 border-[#1A1A1A]/10 hover:border-emerald-500 transition-all duration-300 text-center"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold tracking-wider mb-2">{stat.number}</h3>
                <h4 className="text-sm font-bold tracking-wider mb-2 opacity-80">{stat.label}</h4>
                <p className="text-xs opacity-60">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
