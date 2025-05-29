"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
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
  ArrowRight,
  DollarSign,
  Code,
  Brain,
} from "lucide-react"
import { ProductModal } from "@/components/product-modal"

export default function ProductsEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { id: "all", name: "All Products", icon: Code },
    { id: "flagship", name: "Flagship", icon: Shield },
    { id: "revenue", name: "Revenue", icon: DollarSign },
    { id: "development", name: "Development", icon: Code },
    { id: "research", name: "R&D", icon: Brain },
  ]

  const products = [
    // Flagship
    {
      id: "scos",
      name: "SCOS",
      tagline: "Synthetic Cognition Operating System",
      description:
        "Unified, predictive, self-optimizing intelligent network for critical infrastructure verticals with hardware-agnostic design and nanosecond response times.",
      category: "flagship",
      status: "In Development",
      priority: "flagship",
      icon: Shield,
      color: "emerald",
      tech: ["C++", "Python", "TVM", "AWS", "CUDA"],
      markets: ["Manufacturing", "Energy", "Smart Cities", "Healthcare", "Supply Chain"],
    },
    // Revenue Products
    {
      id: "taskr",
      name: "Taskr",
      tagline: "Service Marketplace Platform",
      description: "Mobile-first marketplace connecting customers to verified professionals across multiple regions.",
      category: "revenue",
      status: "MVP in Progress",
      priority: "high",
      icon: Users,
      color: "blue",
      tech: ["Flutter", "Node.js", "Firebase", "Stripe", "Paystack"],
      markets: ["Nigeria", "United States", "United Kingdom"],
    },
    {
      id: "homevy",
      name: "Homevy",
      tagline: "AI Proptech Platform",
      description: "Smart rental platform with AI-powered matching and digital lease management.",
      category: "revenue",
      status: "Design Phase",
      priority: "high",
      icon: Home,
      color: "emerald",
      tech: ["Vue.js", "React", "AI/ML", "Stripe"],
      markets: ["United Kingdom", "United States"],
    },
    {
      id: "profitquest",
      name: "ProfitQuest",
      tagline: "Task-to-Earn Platform",
      description: "Gamified earning through task completion and referral systems with growth hacking focus.",
      category: "revenue",
      status: "Ready for Launch",
      priority: "medium",
      icon: TrendingUp,
      color: "purple",
      tech: ["React", "Node.js", "MongoDB", "Payment APIs"],
      markets: ["Global", "Emerging Markets"],
    },
    // Development Pipeline
    {
      id: "navierflow",
      name: "NavierFlow",
      tagline: "Fluid Dynamics Engine",
      description: "Advanced simulation engine using Navier-Stokes solvers for educational and research applications.",
      category: "development",
      status: "In Development",
      priority: "medium",
      icon: Waves,
      color: "cyan",
      tech: ["Python", "NumPy", "OpenGL", "CUDA"],
      markets: ["Education", "Research", "Engineering"],
    },
    {
      id: "budget-analyzer",
      name: "Budget Analyzer",
      tagline: "Personal Finance App",
      description: "Comprehensive expense tracking with spending analysis and budget optimization.",
      category: "development",
      status: "Planned",
      priority: "low",
      icon: Calculator,
      color: "orange",
      tech: ["Vue.js", "Chart.js", "Firebase"],
      markets: ["Consumers", "Students", "Freelancers"],
    },
    // R&D Projects
    {
      id: "genovo-vault",
      name: "Genovo Vault",
      tagline: "Zero-Knowledge Password Manager",
      description: "Advanced password and secrets manager with zero-knowledge architecture.",
      category: "research",
      status: "R&D Phase",
      priority: "medium",
      icon: Lock,
      color: "red",
      tech: ["Cryptography", "Zero-Knowledge", "Blockchain"],
      markets: ["Enterprise", "Privacy-focused users"],
    },
    {
      id: "personaforge",
      name: "PersonaForge",
      tagline: "Digital Persona Management",
      description: "Anonymous digital persona generation and management for privacy protection.",
      category: "research",
      status: "R&D Phase",
      priority: "medium",
      icon: UserCheck,
      color: "indigo",
      tech: ["AI/ML", "Cryptography", "Privacy Tech"],
      markets: ["Privacy advocates", "Digital nomads"],
    },
    {
      id: "nimbusstack",
      name: "NimbusStack",
      tagline: "Decentralized Hosting Stack",
      description: "Lightweight decentralized application hosting infrastructure.",
      category: "research",
      status: "Planned",
      priority: "low",
      icon: Cloud,
      color: "sky",
      tech: ["Blockchain", "IPFS", "Docker", "Kubernetes"],
      markets: ["Developers", "Web3 projects"],
    },
    {
      id: "genovobot-hft",
      name: "GenovoBot HFT",
      tagline: "High-Frequency Trading System",
      description: "Advanced algorithmic trading system built in C++ for maximum performance.",
      category: "research",
      status: "R&D Phase",
      priority: "high",
      icon: Zap,
      color: "yellow",
      tech: ["C++", "Machine Learning", "Financial APIs"],
      markets: ["Financial institutions", "Trading firms"],
    },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "mvp in progress":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "design phase":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
      case "ready for launch":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "planned":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300"
      case "r&d phase":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300"
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "hover:border-emerald-500",
      blue: "hover:border-blue-500",
      purple: "hover:border-purple-500",
      cyan: "hover:border-cyan-500",
      orange: "hover:border-orange-500",
      red: "hover:border-red-500",
      indigo: "hover:border-indigo-500",
      sky: "hover:border-sky-500",
      yellow: "hover:border-yellow-500",
    }
    return colors[color as keyof typeof colors] || "hover:border-gray-500"
  }

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-gray-900 dark:text-white">
            Product Ecosystem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            A comprehensive portfolio spanning secure infrastructure, revenue-generating platforms, and cutting-edge
            research initiatives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 ${getColorClasses(
                product.color,
              )} transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl cursor-pointer`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 bg-${product.color}-600 rounded-xl flex items-center justify-center`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {product.priority === "flagship" && (
                      <Badge className="bg-emerald-600 text-white text-xs">Flagship</Badge>
                    )}
                    <Badge variant="outline" className={getStatusColor(product.status)}>
                      {product.status}
                    </Badge>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">{product.tagline}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                    Technology
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {product.tech.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {product.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  onClick={() => handleProductClick(product)}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
          {[
            { value: "9", label: "Total Products" },
            { value: "3", label: "Revenue Streams" },
            { value: "4", label: "R&D Projects" },
            { value: "1", label: "Flagship OS" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
