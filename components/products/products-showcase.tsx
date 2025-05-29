"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Users, Home, Waves, TrendingUp, Calculator, Lock, ExternalLink } from "lucide-react"

export default function ProductsShowcase() {
  const products = [
    {
      id: "taskr",
      name: "Taskr",
      title: "On-demand service marketplace",
      logo: "/placeholder.svg?height=80&width=80",
      oneLineSummary: "Uber for services connecting professionals with clients across multiple markets",
      keyFeatures: [
        "AI-powered skill matching algorithms",
        "Dual payment support (Stripe + Paystack)",
        "Real-time messaging and notifications",
        "Reputation-based tasker system",
      ],
      status: "MVP in Progress",
      icon: Users,
      color: "green",
      learnMoreLink: "#",
    },
    {
      id: "homevy",
      name: "Homevy",
      title: "AI-powered rental pre-approval",
      logo: "/placeholder.svg?height=80&width=80",
      oneLineSummary: "Smart rental platform revolutionizing property matching and lease management",
      keyFeatures: [
        "Smart tenant credit verification",
        "AI-powered landlord-renter matching",
        "Digital lease creation and management",
        "Automated rent collection and escrow",
      ],
      status: "Design Phase",
      icon: Home,
      color: "purple",
      learnMoreLink: "#",
    },
    {
      id: "scos",
      name: "SCOS",
      title: "Intelligent operating system for infrastructure",
      logo: "/placeholder.svg?height=80&width=80",
      oneLineSummary: "Revolutionary intelligent network for critical infrastructure with nanosecond response times",
      keyFeatures: [
        "Hardware-agnostic design",
        "100% hardware utilization",
        "Nanosecond response aspirations",
        "AI/ML inference engine",
      ],
      status: "In Development",
      icon: Shield,
      color: "blue",
      learnMoreLink: "#",
    },
    {
      id: "budget-analyzer",
      name: "Budget Analyzer",
      title: "Personal finance management",
      logo: "/placeholder.svg?height=80&width=80",
      oneLineSummary: "Comprehensive expense tracking with intelligent spending analysis",
      keyFeatures: [
        "Automated expense categorization",
        "Spending pattern analysis",
        "Budget optimization suggestions",
        "Financial goal tracking",
      ],
      status: "Planned",
      icon: Calculator,
      color: "green",
      learnMoreLink: "#",
    },
    {
      id: "navierflow",
      name: "NavierFlow",
      title: "Fluid dynamics simulation engine",
      logo: "/placeholder.svg?height=80&width=80",
      oneLineSummary: "Advanced simulation engine for educational and research applications",
      keyFeatures: [
        "Eulerian and Lagrangian methods",
        "Lattice Boltzmann implementation",
        "Real-time visualization",
        "Educational tutorial system",
      ],
      status: "Development",
      icon: Waves,
      color: "cyan",
      learnMoreLink: "#",
    },
    {
      id: "profitquest",
      name: "ProfitQuest",
      title: "Task-to-earn platform",
      logo: "/placeholder.svg?height=80&width=80",
      oneLineSummary: "Gamified earning through task completion and referral systems",
      keyFeatures: [
        "Gamified task completion",
        "Multi-tier referral programs",
        "Achievement and badge systems",
        "Social sharing integration",
      ],
      status: "Ready for Launch",
      icon: TrendingUp,
      color: "orange",
      learnMoreLink: "#",
    },
    {
      id: "genovo-vault",
      name: "Genovo Vault",
      title: "Zero-knowledge password manager",
      logo: "/placeholder.svg?height=80&width=80",
      oneLineSummary: "Enterprise-grade password manager with zero-knowledge architecture",
      keyFeatures: [
        "Zero-knowledge architecture",
        "End-to-end encryption",
        "Biometric authentication",
        "Enterprise policy management",
      ],
      status: "R&D Phase",
      icon: Lock,
      color: "red",
      learnMoreLink: "#",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "mvp in progress":
        return "bg-green-100 text-green-800"
      case "design phase":
        return "bg-orange-100 text-orange-800"
      case "in development":
        return "bg-blue-100 text-blue-800"
      case "planned":
        return "bg-gray-100 text-gray-800"
      case "development":
        return "bg-blue-100 text-blue-800"
      case "ready for launch":
        return "bg-green-100 text-green-800"
      case "r&d phase":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              id={product.id}
              className="border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img src={product.logo || "/placeholder.svg"} alt={`${product.name} Logo`} className="w-12 h-12" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A]">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.title}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={getStatusColor(product.status)}>
                    {product.status}
                  </Badge>
                </div>

                {/* One-liner summary */}
                <p className="text-gray-600 mb-4 font-medium">{product.oneLineSummary}</p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3 uppercase tracking-wider">Key Features</h4>
                  <div className="space-y-2">
                    {product.keyFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                {product.learnMoreLink && (
                  <Button variant="ghost" className="text-gray-600 hover:text-[#1A1A1A] p-0">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Learn More
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
