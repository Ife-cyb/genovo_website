"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Github, Calendar, Users, Code, Zap } from "lucide-react"

interface ProductModalProps {
  product: any
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null

  const getDetailedInfo = (productName: string) => {
    const details = {
      SCOS: {
        overview:
          "SCOS (Synthetic Cognition Operating System) is a revolutionary unified, predictive, self-optimizing intelligent network designed for five critical infrastructure verticals. Built with hardware-agnostic architecture, SCOS achieves 100% hardware utilization and targets nanosecond response times for mission-critical operations.",
        features: [
          "Hardware-agnostic design with dynamic optimization",
          "100% hardware utilization for maximum efficiency",
          "Nanosecond response time aspirations",
          "Event-driven architecture (EDA)",
          "AI/ML inference engine with TVM compilation",
          "AWS cloud integration for scalability and security",
        ],
        techStack: ["C++", "Python", "TVM", "AWS ECS", "SageMaker", "CUDA", "SIMD"],
        timeline: "Q1 2025 - HAL & Core Engine, Q2 2025 - Vertical Implementations, Q3 2025 - Production Ready",
        targetMarkets: [
          "Manufacturing facilities",
          "Energy grid operators",
          "Smart city infrastructure",
          "Healthcare systems",
          "Supply chain enterprises",
        ],
        metrics: {
          development: "33 weeks",
          verticals: "5 industries",
          performance: "Nanosecond latency",
        },
      },
      Taskr: {
        overview:
          "Taskr revolutionizes the service marketplace by connecting skilled professionals with clients through intelligent matching algorithms. Our platform focuses on hyper-local services with a clean, intuitive interface that makes finding and booking services effortless.",
        features: [
          "AI-powered skill matching algorithms",
          "Dual payment support (Stripe + Paystack)",
          "Real-time messaging and notifications",
          "Reputation-based tasker system",
          "Geolocation-based service discovery",
          "Integrated escrow payment system",
        ],
        techStack: ["Flutter", "Node.js", "Firebase", "Stripe", "Paystack", "Google Maps API"],
        timeline: "Q1 2025 - MVP Launch, Q2 2025 - Market Expansion, Q3 2025 - International Rollout",
        targetMarkets: ["Nigeria", "United States", "United Kingdom", "Urban professionals"],
        metrics: {
          development: "12 months",
          team: "6 engineers",
          markets: "3 countries",
        },
      },
      Homevy: {
        overview:
          "Homevy transforms the rental market through AI-powered pre-approval and smart matching. Our platform streamlines the entire rental process from tenant screening to digital lease management, creating a seamless experience for both renters and landlords.",
        features: [
          "Smart tenant credit and document verification",
          "AI-powered landlord-renter matching",
          "Verified property listings with virtual tours",
          "Digital lease creation and management",
          "Automated rent collection and escrow",
          "Predictive market analytics",
        ],
        techStack: ["Vue.js", "React", "Bolt AI", "Stripe", "Machine Learning", "Computer Vision"],
        timeline: "Q1 2025 - Design Completion, Q2 2025 - MVP Development, Q3 2025 - Beta Launch",
        targetMarkets: ["UK urban metros", "US major cities", "Gen Z renters", "Property investors"],
        metrics: {
          development: "15 months",
          team: "7 engineers",
          ai_accuracy: "94%",
        },
      },
      NavierFlow: {
        overview:
          "NavierFlow is an advanced fluid dynamics simulation engine that implements sophisticated Navier-Stokes solvers. Designed for educational institutions and research laboratories, it provides accurate fluid behavior modeling for various engineering applications.",
        features: [
          "Eulerian and Lagrangian methods",
          "Lattice Boltzmann Method implementation",
          "Real-time visualization capabilities",
          "Educational tutorial system",
          "Research-grade accuracy",
          "Open-source community support",
        ],
        techStack: ["Python", "NumPy", "SciPy", "OpenGL", "CUDA", "MPI"],
        timeline: "Q2 2025 - Alpha Release, Q3 2025 - Open Source Launch, Q4 2025 - Educational Partnerships",
        targetMarkets: ["Universities", "Research institutions", "Engineering firms", "Educational platforms"],
        metrics: {
          development: "10 months",
          team: "4 engineers",
          accuracy: "Research-grade",
        },
      },
      ProfitQuest: {
        overview:
          "ProfitQuest gamifies earning through task completion and referral systems. Built with growth hacking principles, the platform creates engaging earning opportunities while building a strong community of active users.",
        features: [
          "Gamified task completion system",
          "Multi-tier referral programs",
          "Influencer partnership tools",
          "Achievement and badge systems",
          "Social sharing integration",
          "Analytics dashboard for users",
        ],
        techStack: ["React", "Node.js", "MongoDB", "Redis", "Payment APIs", "Social APIs"],
        timeline: "Q1 2025 - Platform Completion, Q2 2025 - User Acquisition, Q3 2025 - Scaling Phase",
        targetMarkets: ["Students", "Emerging markets", "Side hustlers", "Social media users"],
        metrics: {
          development: "8 months",
          team: "5 engineers",
          retention: "High engagement",
        },
      },
      "Budget Analyzer": {
        overview:
          "Budget Analyzer provides comprehensive personal finance management with intelligent spending analysis and budget optimization. The platform helps users understand their financial patterns and make informed decisions about their money.",
        features: [
          "Automated expense categorization",
          "Spending pattern analysis",
          "Budget optimization suggestions",
          "Financial goal tracking",
          "Monthly trend visualization",
          "Bill reminder system",
        ],
        techStack: ["Vue.js", "Chart.js", "Firebase", "Machine Learning", "Banking APIs"],
        timeline: "Q2 2025 - Development Start, Q3 2025 - Beta Testing, Q4 2025 - Public Launch",
        targetMarkets: ["Young professionals", "Students", "Freelancers", "Budget-conscious users"],
        metrics: {
          development: "6 months",
          team: "3 engineers",
          features: "15+ tools",
        },
      },
      "Genovo Vault": {
        overview:
          "Genovo Vault is an advanced zero-knowledge password and secrets manager designed for enterprise and privacy-focused users. Built with cutting-edge cryptographic protocols, it ensures that even Genovo cannot access your stored data.",
        features: [
          "Zero-knowledge architecture",
          "End-to-end encryption",
          "Biometric authentication",
          "Cross-platform synchronization",
          "Enterprise policy management",
          "Audit trail and compliance reporting",
        ],
        techStack: ["Cryptography", "Zero-Knowledge Proofs", "Blockchain", "WebAssembly"],
        timeline: "Q2 2025 - Research Phase, Q3 2025 - Prototype, Q4 2025 - Beta Testing",
        targetMarkets: ["Enterprise security", "Privacy advocates", "Financial institutions", "Government agencies"],
        metrics: {
          development: "12 months",
          security: "Military-grade",
          compliance: "SOC 2 Type II",
        },
      },
      PersonaForge: {
        overview:
          "PersonaForge enables anonymous digital persona generation and management for privacy protection. Create and manage multiple digital identities while maintaining complete anonymity and security.",
        features: [
          "Anonymous persona generation",
          "Digital identity management",
          "Privacy-preserving authentication",
          "Cross-platform compatibility",
          "Secure communication channels",
          "Identity verification without exposure",
        ],
        techStack: ["AI/ML", "Cryptography", "Privacy Technology", "Blockchain"],
        timeline: "Q2 2025 - Research, Q4 2025 - Prototype Development",
        targetMarkets: ["Privacy advocates", "Digital nomads", "Journalists", "Activists"],
        metrics: {
          development: "18 months",
          privacy: "Complete anonymity",
          platforms: "Cross-platform",
        },
      },
      NimbusStack: {
        overview:
          "NimbusStack provides lightweight decentralized application hosting infrastructure, enabling developers to deploy applications across a distributed network with enhanced security and performance.",
        features: [
          "Decentralized hosting network",
          "Automatic load balancing",
          "Edge computing optimization",
          "Blockchain-based governance",
          "Developer-friendly APIs",
          "Cost-effective scaling",
        ],
        techStack: ["Blockchain", "IPFS", "Docker", "Kubernetes", "WebAssembly"],
        timeline: "Q3 2025 - Planning, Q1 2026 - Development Start",
        targetMarkets: ["Web3 developers", "DApp projects", "Decentralized organizations", "Edge computing"],
        metrics: {
          development: "24 months",
          network: "Global distribution",
          performance: "Edge-optimized",
        },
      },
      "GenovoBot HFT": {
        overview:
          "GenovoBot HFT is an advanced algorithmic trading system built in C++ for maximum performance. Designed for high-frequency trading with microsecond execution times and sophisticated market analysis.",
        features: [
          "Microsecond execution times",
          "Advanced market analysis",
          "Risk management systems",
          "Multi-exchange connectivity",
          "Real-time portfolio optimization",
          "Machine learning predictions",
        ],
        techStack: ["C++", "Machine Learning", "Financial APIs", "Low-latency networking"],
        timeline: "Q1 2025 - Research, Q3 2025 - Development, Q1 2026 - Testing",
        targetMarkets: ["Trading firms", "Financial institutions", "Hedge funds", "Proprietary trading"],
        metrics: {
          development: "18 months",
          latency: "Microsecond",
          accuracy: "High-precision",
        },
      },
    }
    return details[productName as keyof typeof details] || details.SCOS
  }

  const productDetails = getDetailedInfo(product.name)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <product.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </DialogTitle>
                <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Status and Category */}
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {product.status}
            </Badge>
            <Badge variant="outline">{product.category}</Badge>
            {product.priority === "flagship" && (
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Flagship
              </Badge>
            )}
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Overview</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{productDetails.overview}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {productDetails.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {productDetails.techStack.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50 dark:bg-gray-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Development Timeline
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{productDetails.timeline}</p>
          </div>

          {/* Target Markets */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Target Markets
            </h3>
            <div className="flex flex-wrap gap-2">
              {productDetails.targetMarkets.map((market, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {market}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Project Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(productDetails.metrics).map(([key, value]) => (
                <div key={key} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key.replace("_", " ")}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
            <Button variant="outline">
              <Code className="w-4 h-4 mr-2" />
              Documentation
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
