"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Waves, TrendingUp, Calculator, Lock, User, Cloud, BarChart3, ArrowRight } from "lucide-react"

export default function RDProjects() {
  const projects = [
    {
      name: "NavierFlow",
      description: "Fluid Dynamics Engine",
      detail: "Advanced simulation engine using Navier-Stokes solvers for educational and research applications.",
      status: "Development",
      category: "Research",
      icon: Waves,
      color: "blue",
    },
    {
      name: "ProfitQuest",
      description: "Task-to-Earn Platform",
      detail: "Monetization platform with task completion rewards and referral systems.",
      status: "Ready",
      category: "Revenue",
      icon: TrendingUp,
      color: "green",
    },
    {
      name: "Budget Analyzer",
      description: "Personal Finance App",
      detail: "Comprehensive expense tracking with spending pattern analysis and budget visualization.",
      status: "Planned",
      category: "Utility",
      icon: Calculator,
      color: "purple",
    },
    {
      name: "Genovo Vault",
      description: "Zero-Knowledge Password Manager",
      detail: "Advanced password and secrets manager with zero-knowledge architecture for enterprise users.",
      status: "Research",
      category: "Security",
      icon: Lock,
      color: "red",
    },
    {
      name: "PersonaForge",
      description: "Anonymous Digital Identity",
      detail: "Anonymous digital persona generation and management for privacy protection.",
      status: "Concept",
      category: "Privacy",
      icon: User,
      color: "indigo",
    },
    {
      name: "NimbusStack",
      description: "Decentralized Hosting",
      detail: "Lightweight decentralized application hosting infrastructure with enhanced security.",
      status: "Planning",
      category: "Infrastructure",
      icon: Cloud,
      color: "cyan",
    },
    {
      name: "GenovoBot HFT",
      description: "Algorithmic Trading System",
      detail: "Advanced high-frequency trading system built in C++ for microsecond execution times.",
      status: "Research",
      category: "FinTech",
      icon: BarChart3,
      color: "orange",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "development":
        return "bg-blue-100 text-blue-800"
      case "ready":
        return "bg-green-100 text-green-800"
      case "planned":
        return "bg-gray-100 text-gray-800"
      case "research":
        return "bg-purple-100 text-purple-800"
      case "concept":
        return "bg-yellow-100 text-yellow-800"
      case "planning":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Research & Development Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploring the frontiers of technology with innovative projects spanning multiple domains, from fluid
            dynamics to financial technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-${project.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <project.icon className={`w-6 h-6 text-${project.color}-600`} />
                  </div>
                  <Badge variant="outline" className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 font-medium mb-3">{project.description}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.detail}</p>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[#1A1A1A]">
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            View Full Roadmap
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
