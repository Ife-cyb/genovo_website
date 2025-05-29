"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Users,
  Home,
  Waves,
  TrendingUp,
  Calculator,
  Lock,
  UserCheck,
  Cloud,
  Zap,
  ExternalLink,
  Code,
  Brain,
  DollarSign,
} from "lucide-react"
import ProjectVisualization from "@/components/3d/project-visualization"

export default function ProjectPortfolio() {
  const coreProjects = [
    {
      name: "SCOS",
      fullName: "Stealth Cyber Operating System",
      type: "Core Infrastructure",
      status: "In Development",
      description:
        "Next-gen stealth-grade secure operating system with kernel-level anonymization, modular architecture, and zero-trace execution environments.",
      features: [
        "Kernel-level anonymization",
        "Modular stealth deployments",
        "Encrypted environments",
        "Dark-cloud compatibility",
      ],
      targetUsers: "Developers, hacktivists, digital sovereigns, high-security ops",
      icon: Shield,
      color: "emerald",
      priority: "flagship",
    },
  ]

  const revenueProjects = [
    {
      name: "Taskr",
      fullName: "Service Marketplace Platform",
      type: "Revenue Product",
      status: "MVP in Progress",
      description:
        "Mobile-first, hyper-local service marketplace connecting users with verified specialists. Uber for tasks across Nigeria, US, and UK.",
      techStack: ["Flutter", "Node.js", "Firebase", "Stripe", "Paystack"],
      features: ["Clean, bold UI", "Dual payment support", "Real-time messaging", "Reputation-based system"],
      targetUsers: "General consumers, service providers, gig workers",
      icon: Users,
      color: "blue",
      priority: "high",
    },
    {
      name: "Homevy",
      fullName: "AI Proptech Platform",
      type: "Revenue Product",
      status: "MVP Design Underway",
      description:
        "AI-powered pre-approval and smart matching platform for renters and landlords with credit verification and escrowed digital leases.",
      techStack: ["Vue/React", "Bolt AI", "Stripe"],
      features: ["Smart tenant profiles", "Verified property listings", "AI matching", "Digital lease + escrow"],
      targetUsers: "UK, US urban metros, Gen Z renters, real estate startups",
      icon: Home,
      color: "emerald",
      priority: "high",
    },
    {
      name: "ProfitQuest",
      fullName: "Task-to-Earn Platform",
      type: "Revenue Product",
      status: "Ready for Completion",
      description:
        "Monetization platform where users complete tasks, referrals, and earn rewards. Growth hacking focused with referral loops.",
      features: ["Task completion rewards", "Referral systems", "Influencer scaling", "Growth hacking tools"],
      targetUsers: "Students, emerging markets, side hustlers",
      icon: TrendingUp,
      color: "purple",
      priority: "medium",
    },
  ]

  const developmentProjects = [
    {
      name: "NavierFlow",
      fullName: "Fluid Dynamics Simulation Engine",
      type: "Technical Showcase",
      status: "In Development",
      description:
        "Advanced fluid dynamics simulation using Navier-Stokes solvers with Eulerian and Lattice Boltzmann Methods.",
      techStack: ["Python", "NumPy", "Simulation Libraries"],
      features: ["Eulerian methods", "Lattice Boltzmann", "Educational focus", "Open-source adjacent"],
      targetUsers: "Education, demo reels, engineering previews, R&D labs",
      icon: Waves,
      color: "cyan",
      priority: "medium",
    },
    {
      name: "Budget Analyzer",
      fullName: "Personal Finance Web App",
      type: "Utility Application",
      status: "Planned",
      description:
        "Comprehensive expense tracking and budget analysis with spending pattern visualization and monthly trend analysis.",
      techStack: ["Vue.js", "Chart.js", "Firebase"],
      features: ["Expense tracking", "Spending analysis", "Budget visualization", "Monthly trends"],
      targetUsers: "Entry-level users, students, freelancers",
      icon: Calculator,
      color: "orange",
      priority: "low",
    },
  ]

  const rdProjects = [
    {
      name: "Genovo Vault",
      description: "Zero-knowledge password & secrets manager",
      icon: Lock,
      status: "R&D Phase",
    },
    {
      name: "PersonaForge",
      description: "Anonymous digital persona generation and management",
      icon: UserCheck,
      status: "R&D Phase",
    },
    {
      name: "NimbusStack",
      description: "Lightweight decentralized app hosting stack",
      icon: Cloud,
      status: "Planned",
    },
    {
      name: "GenovoBot HFT",
      description: "High-frequency trading system in C++",
      icon: Zap,
      status: "R&D Phase",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in development":
        return "bg-blue-500"
      case "mvp in progress":
        return "bg-emerald-500"
      case "mvp design underway":
        return "bg-yellow-500"
      case "ready for completion":
        return "bg-purple-500"
      case "planned":
        return "bg-gray-500"
      case "r&d phase":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "border-emerald-500 hover:border-emerald-600",
      blue: "border-blue-500 hover:border-blue-600",
      purple: "border-purple-500 hover:border-purple-600",
      cyan: "border-cyan-500 hover:border-cyan-600",
      orange: "border-orange-500 hover:border-orange-600",
    }
    return colors[color as keyof typeof colors] || "border-gray-500"
  }

  return (
    <section id="projects" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-6">
            PROJECT
            <span className="block text-emerald-600">ECOSYSTEM</span>
          </h2>
          <p className="text-xl opacity-80 max-w-4xl mx-auto">
            A comprehensive portfolio spanning secure infrastructure, revenue-generating platforms, and cutting-edge
            research initiatives that define the future of digital sovereignty.
          </p>
        </div>

        {/* 3D Visualization */}
        <div className="h-64 mb-16">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <Suspense fallback={null}>
              <ProjectVisualization />
            </Suspense>
          </Canvas>
        </div>

        {/* Core Infrastructure */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold tracking-wider mb-8 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-emerald-600" />
            CORE INFRASTRUCTURE
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {coreProjects.map((project, index) => (
              <Card
                key={index}
                className={`bg-white border-2 ${getColorClasses(project.color)} transition-all duration-300 group`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-${project.color}-600 to-${project.color}-400 rounded-lg flex items-center justify-center`}
                      >
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold tracking-wider">{project.name}</CardTitle>
                        <p className="text-sm opacity-70 tracking-wider">{project.fullName}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline">{project.type}</Badge>
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                          <span className="text-xs opacity-70">{project.status}</span>
                        </div>
                      </div>
                    </div>
                    {project.priority === "flagship" && <Badge className="bg-emerald-600 text-white">FLAGSHIP</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6 opacity-80">{project.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold tracking-wider mb-3">KEY FEATURES</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold tracking-wider mb-3">TARGET USERS</h4>
                      <p className="text-sm opacity-70">{project.targetUsers}</p>
                    </div>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    LEARN MORE
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Revenue Products */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold tracking-wider mb-8 flex items-center">
            <DollarSign className="w-8 h-8 mr-3 text-blue-600" />
            REVENUE ENGINES
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {revenueProjects.map((project, index) => (
              <Card
                key={index}
                className={`bg-white border-2 ${getColorClasses(project.color)} transition-all duration-300 group`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${project.color}-600 to-${project.color}-400 rounded-lg flex items-center justify-center`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                      <span className="text-xs opacity-70">{project.status}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold tracking-wider">{project.name}</CardTitle>
                  <p className="text-sm opacity-70 tracking-wider">{project.fullName}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-4 opacity-80">{project.description}</p>

                  {project.techStack && (
                    <div className="mb-4">
                      <h4 className="font-bold tracking-wider mb-2 text-sm">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-bold tracking-wider mb-2 text-sm">FEATURES</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
                          <span className="text-xs opacity-70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    size="sm"
                    className={`bg-${project.color}-600 hover:bg-${project.color}-700 text-white w-full`}
                  >
                    VIEW PROJECT
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold tracking-wider mb-8 flex items-center">
            <Code className="w-8 h-8 mr-3 text-purple-600" />
            DEVELOPMENT PIPELINE
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developmentProjects.map((project, index) => (
              <Card
                key={index}
                className={`bg-white border-2 ${getColorClasses(project.color)} transition-all duration-300`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${project.color}-600 to-${project.color}-400 rounded-lg flex items-center justify-center`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                      <span className="text-xs opacity-70">{project.status}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold tracking-wider">{project.name}</CardTitle>
                  <p className="text-sm opacity-70 tracking-wider">{project.fullName}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-4 opacity-80">{project.description}</p>

                  {project.techStack && (
                    <div className="mb-4">
                      <h4 className="font-bold tracking-wider mb-2 text-sm">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button size="sm" variant="outline" className="w-full">
                    TRACK PROGRESS
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* R&D Tools */}
        <div>
          <h3 className="text-3xl font-bold tracking-wider mb-8 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-orange-600" />
            R&D LABORATORY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rdProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-[#1A1A1A]/10 hover:border-orange-500 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold tracking-wider mb-2">{project.name}</h4>
                  <p className="text-sm opacity-70 mb-3">{project.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                    <span className="text-xs opacity-70">{project.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
