"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Users, Home, Waves, TrendingUp, Calculator, Lock, ArrowRight, ExternalLink } from "lucide-react"

export default function ProductShowcase() {
  const products = [
    {
      id: "scos",
      name: "SCOS",
      title: "Synthetic Cognition Operating System",
      oneLineSummary: "Intelligent operating system for critical infrastructure with nanosecond response times",
      description:
        "Revolutionary unified, predictive, self-optimizing intelligent network designed for five critical infrastructure verticals. Built with hardware-agnostic architecture, SCOS achieves 100% hardware utilization and targets nanosecond response times for mission-critical operations.",
      icon: Shield,
      logo: "/placeholder.svg?height=80&width=80",
      status: "In Development",
      category: "Infrastructure",
      color: "blue",
      keyFeatures: [
        "Hardware-agnostic design with dynamic optimization",
        "100% hardware utilization for maximum efficiency",
        "Nanosecond response time aspirations",
        "Event-driven architecture (EDA)",
        "AI/ML inference engine with TVM compilation",
        "AWS cloud integration for scalability and security",
      ],
      targetMarkets: ["Manufacturing", "Energy Grid", "Smart Cities", "Healthcare", "Supply Chain"],
      timeline: "Q2 2025 Alpha Release",
      techStack: ["C++", "Python", "TVM", "AWS ECS", "SageMaker", "CUDA"],
    },
    {
      id: "taskr",
      name: "Taskr",
      title: "On-Demand Service Marketplace",
      oneLineSummary: "Uber for services connecting professionals with clients across multiple markets",
      description:
        "Mobile-first marketplace connecting customers to verified professionals across Nigeria, US, and UK. Features intelligent matching algorithms, dual payment systems, and real-time communication for seamless service delivery.",
      icon: Users,
      logo: "/placeholder.svg?height=80&width=80",
      status: "MVP in Progress",
      category: "Revenue Platform",
      color: "green",
      keyFeatures: [
        "AI-powered skill matching algorithms",
        "Dual payment support (Stripe + Paystack)",
        "Real-time messaging and notifications",
        "Reputation-based tasker system",
        "Geolocation-based service discovery",
        "Integrated escrow payment system",
      ],
      targetMarkets: ["Nigeria", "United States", "United Kingdom"],
      timeline: "Q1 2025 MVP Launch",
      techStack: ["Flutter", "Node.js", "Firebase", "Stripe", "Paystack"],
    },
    {
      id: "homevy",
      name: "Homevy",
      title: "AI-Powered Rental Pre-Approval",
      oneLineSummary: "Smart rental platform revolutionizing property matching and lease management",
      description:
        "AI-powered platform transforming the rental market through smart tenant profiles, automated credit verification, and intelligent landlord-tenant matching with digital lease management and escrow integration.",
      icon: Home,
      logo: "/placeholder.svg?height=80&width=80",
      status: "Design Phase",
      category: "Revenue Platform",
      color: "purple",
      keyFeatures: [
        "Smart tenant credit and document verification",
        "AI-powered landlord-renter matching",
        "Verified property listings with virtual tours",
        "Digital lease creation and management",
        "Automated rent collection and escrow",
        "Predictive market analytics",
      ],
      targetMarkets: ["UK Urban Markets", "US Major Cities"],
      timeline: "Q3 2025 Beta Launch",
      techStack: ["Vue.js", "React", "Bolt AI", "Stripe", "ML APIs"],
    },
    {
      id: "navierflow",
      name: "NavierFlow",
      title: "Fluid Dynamics Simulation Engine",
      oneLineSummary: "Advanced simulation engine for educational and research applications",
      description:
        "Educational and research-focused fluid dynamics engine implementing sophisticated Navier-Stokes solvers with Eulerian and Lattice Boltzmann methods for accurate fluid behavior modeling.",
      icon: Waves,
      logo: "/placeholder.svg?height=80&width=80",
      status: "Development",
      category: "Technical Showcase",
      color: "cyan",
      keyFeatures: [
        "Eulerian and Lagrangian methods",
        "Lattice Boltzmann Method implementation",
        "Real-time visualization capabilities",
        "Educational tutorial system",
        "Research-grade accuracy",
        "Open-source community support",
      ],
      targetMarkets: ["Universities", "Research Labs", "Engineering Firms"],
      timeline: "Q2 2025 Alpha Release",
      techStack: ["Python", "NumPy", "SciPy", "OpenGL", "CUDA"],
    },
    {
      id: "profitquest",
      name: "ProfitQuest",
      title: "Task-to-Earn Platform",
      oneLineSummary: "Gamified earning through task completion and referral systems",
      description:
        "Monetization platform where users complete tasks, referrals, and earn rewards. Built with growth hacking principles to create engaging earning opportunities while building a strong community.",
      icon: TrendingUp,
      logo: "/placeholder.svg?height=80&width=80",
      status: "Ready for Launch",
      category: "Revenue Platform",
      color: "orange",
      keyFeatures: [
        "Gamified task completion system",
        "Multi-tier referral programs",
        "Influencer partnership tools",
        "Achievement and badge systems",
        "Social sharing integration",
        "Analytics dashboard for users",
      ],
      targetMarkets: ["Students", "Emerging Markets", "Side Hustlers"],
      timeline: "Q1 2025 Public Launch",
      techStack: ["React", "Node.js", "MongoDB", "Payment APIs"],
    },
    {
      id: "budget-analyzer",
      name: "Budget Analyzer",
      title: "Personal Finance Management",
      oneLineSummary: "Comprehensive expense tracking with intelligent spending analysis",
      description:
        "Personal finance web application providing comprehensive expense tracking, spending pattern analysis, and budget optimization with visual insights and monthly trend analysis.",
      icon: Calculator,
      logo: "/placeholder.svg?height=80&width=80",
      status: "Planned",
      category: "Utility Application",
      color: "green",
      keyFeatures: [
        "Automated expense categorization",
        "Spending pattern analysis",
        "Budget optimization suggestions",
        "Financial goal tracking",
        "Monthly trend visualization",
        "Bill reminder system",
      ],
      targetMarkets: ["Young Professionals", "Students", "Freelancers"],
      timeline: "Q4 2025 Development",
      techStack: ["Vue.js", "Chart.js", "Firebase", "Banking APIs"],
    },
    {
      id: "genovo-vault",
      name: "Genovo Vault",
      title: "Zero-Knowledge Password Manager",
      oneLineSummary: "Enterprise-grade password manager with zero-knowledge architecture",
      description:
        "Advanced zero-knowledge password and secrets manager designed for enterprise and privacy-focused users. Built with cutting-edge cryptographic protocols ensuring complete data privacy.",
      icon: Lock,
      logo: "/placeholder.svg?height=80&width=80",
      status: "R&D Phase",
      category: "Security Tool",
      color: "red",
      keyFeatures: [
        "Zero-knowledge architecture",
        "End-to-end encryption",
        "Biometric authentication",
        "Cross-platform synchronization",
        "Enterprise policy management",
        "Audit trail and compliance reporting",
      ],
      targetMarkets: ["Enterprise Security", "Privacy Advocates", "Financial Institutions"],
      timeline: "Q4 2025 Research Phase",
      techStack: ["Cryptography", "Zero-Knowledge Proofs", "Blockchain"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in development":
        return "bg-blue-100 text-blue-800"
      case "mvp in progress":
        return "bg-green-100 text-green-800"
      case "design phase":
        return "bg-orange-100 text-orange-800"
      case "development":
        return "bg-blue-100 text-blue-800"
      case "ready for launch":
        return "bg-green-100 text-green-800"
      case "planned":
        return "bg-gray-100 text-gray-800"
      case "r&d phase":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Products */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className="scroll-mt-24">
              <Card className="border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-16 h-16 bg-${product.color}-100 rounded-xl flex items-center justify-center`}
                          >
                            <product.icon className={`w-8 h-8 text-${product.color}-600`} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-[#1A1A1A]">{product.name}</h2>
                            <p className="text-gray-600">{product.title}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className={getStatusColor(product.status)}>
                          {product.status}
                        </Badge>
                      </div>

                      <p className="text-lg text-gray-600 mb-6 font-medium">{product.oneLineSummary}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.keyFeatures.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3 uppercase tracking-wider">
                          Technology
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.techStack.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Timeline & Markets */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                            Timeline
                          </h4>
                          <p className="text-sm text-[#1A1A1A]">{product.timeline}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Markets</h4>
                          <p className="text-sm text-[#1A1A1A]">{product.targetMarkets.join(", ")}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-4">
                        <Button className="bg-[#1A1A1A] hover:bg-gray-800 text-white">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="mr-2 w-4 h-4" />
                          Demo
                        </Button>
                      </div>
                    </div>

                    {/* Visual */}
                    <div
                      className={`bg-gradient-to-br from-${product.color}-50 to-${product.color}-100 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="text-center">
                        <img
                          src={product.logo || "/placeholder.svg"}
                          alt={`${product.name} Logo`}
                          className="w-24 h-24 mx-auto mb-4 opacity-80"
                        />
                        <Badge variant="secondary" className="mb-4">
                          {product.category}
                        </Badge>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#1A1A1A] mb-2">{product.targetMarkets.length}+</p>
                          <p className="text-sm text-gray-600">Target Markets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
