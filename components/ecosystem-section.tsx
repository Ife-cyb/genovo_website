"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Badge } from "@/components/ui/badge"
import { Users, Home, TrendingUp, ExternalLink, Smartphone, Globe, Brain } from "lucide-react"
import { HologramCard } from "@/components/futuristic-ui/hologram-card"
import { CyberButton } from "@/components/futuristic-ui/cyber-button"
import { DataStream } from "@/components/futuristic-ui/data-stream"
import { LoadingCard } from "@/components/loading-skeleton"
import NeuralNetwork from "@/components/3d/neural-network"

// Error boundary component for 3D scenes
function Scene3DFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-blue-400 text-xs sm:text-sm">Loading 3D Scene...</div>
    </div>
  )
}

export default function EcosystemSection() {
  const [loadingStates, setLoadingStates] = useState({
    taskr: false,
    homevy: false,
    profitquest: false,
  })

  const handleProjectClick = (project: string) => {
    setLoadingStates((prev) => ({ ...prev, [project]: true }))

    // Simulate loading
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [project]: false }))
      // Here you would navigate to the project or open a modal
    }, 2000)
  }

  const projects = [
    {
      id: "taskr",
      name: "Taskr",
      tagline: "Uber for Services",
      description:
        "Mobile-first marketplace connecting customers to on-demand professionals across Nigeria, US, and UK.",
      status: "MVP in Progress",
      tech: ["Flutter", "Firebase", "Node.js", "Stripe", "Paystack"],
      features: [
        "Real-time service matching",
        "Dual payment integration",
        "Multi-region support",
        "Professional verification",
      ],
      markets: ["Nigeria", "United States", "United Kingdom"],
      icon: Users,
      gradient: "taskr-gradient",
      glowColor: "#191970",
      brandColors: {
        primary: "#191970", // Midnight Blue
        secondary: "#FF5F1F", // Vibrant Orange
      },
    },
    {
      id: "homevy",
      name: "Homevy",
      tagline: "AI-Powered Rental Platform",
      description:
        "Smart tenant profiles, digital leases, and AI-powered landlord-tenant matchmaking for the modern rental market.",
      status: "Design Phase",
      tech: ["Vue.js", "React", "Bolt AI", "Stripe", "ML APIs"],
      features: ["AI tenant screening", "Smart property matching", "Digital lease management", "Escrow integration"],
      markets: ["United Kingdom", "United States"],
      icon: Home,
      gradient: "homevy-gradient",
      glowColor: "#008060",
      brandColors: {
        primary: "#008060", // Emerald Green
        secondary: "#00a076",
      },
    },
    {
      id: "profitquest",
      name: "ProfitQuest",
      tagline: "Task-to-Earn Platform",
      description:
        "Gamified earning through task completion and referral systems, built with growth hacking principles.",
      status: "Ready for Launch",
      tech: ["React", "Node.js", "MongoDB", "Payment APIs"],
      features: ["Gamified task system", "Multi-tier referrals", "Achievement badges", "Social integration"],
      markets: ["Global", "Emerging Markets"],
      icon: TrendingUp,
      gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
      glowColor: "#8b5cf6",
      brandColors: {
        primary: "#8b5cf6",
        secondary: "#ec4899",
      },
    },
  ]

  return (
    <section
      id="ecosystem"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Background 3D Scene with mobile optimization */}
      <div className="absolute inset-0 opacity-10 sm:opacity-15 md:opacity-20">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          dpr={[1, 2]} // Limit pixel ratio for performance
          performance={{ min: 0.5 }} // Performance scaling
        >
          <Suspense fallback={<Scene3DFallback />}>
            <NeuralNetwork />
          </Suspense>
        </Canvas>
      </div>

      {/* Cyber grid background - hidden on mobile for performance */}
      <div className="absolute inset-0 cyber-grid opacity-10 hidden sm:block" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
            <div className="hidden sm:block">
              <DataStream direction="horizontal" color="#3b82f6" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider glow-text">
              ECOSYSTEM
            </h2>
            <div className="hidden sm:block">
              <DataStream direction="horizontal" color="#3b82f6" />
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
            A unified platform ecosystem where each product operates independently while contributing to our digital
            empire's growth and technological advancement.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <HologramCard
              key={project.id}
              className="group cursor-pointer touch-manipulation"
              glowColor={project.glowColor}
            >
              {loadingStates[project.id as keyof typeof loadingStates] ? (
                <LoadingCard />
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-blue-400 text-blue-400 bg-blue-400/10 text-xs sm:text-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-wider mb-1 sm:mb-2 glow-text">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2 sm:mb-3 uppercase tracking-wider">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs border-gray-600 text-gray-300 bg-gray-800/50 px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2 sm:mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300">
                          <div className="w-1 h-1 bg-blue-400 rounded-full neural-pulse flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Markets */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2 sm:mb-3 uppercase tracking-wider">
                      Target Markets
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-300">{project.markets.join(", ")}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <CyberButton
                    variant={project.id as "taskr" | "homevy" | "primary"}
                    size="md"
                    className="w-full touch-manipulation"
                    onClick={() => handleProjectClick(project.id)}
                    disabled={loadingStates[project.id as keyof typeof loadingStates]}
                  >
                    {loadingStates[project.id as keyof typeof loadingStates] ? (
                      <>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Loading...
                      </>
                    ) : (
                      <>
                        Explore {project.name}
                        <ExternalLink className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                      </>
                    )}
                  </CyberButton>
                </div>
              )}
            </HologramCard>
          ))}
        </div>

        {/* Ecosystem Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: "Active Products", value: "3", icon: Smartphone },
            { label: "Target Markets", value: "5+", icon: Globe },
            { label: "Tech Integrations", value: "15+", icon: Brain },
            { label: "Revenue Streams", value: "Multiple", icon: TrendingUp },
          ].map((stat, index) => (
            <HologramCard key={index} className="text-center touch-manipulation">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mx-auto flex items-center justify-center">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold glow-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            </HologramCard>
          ))}
        </div>
      </div>
    </section>
  )
}
