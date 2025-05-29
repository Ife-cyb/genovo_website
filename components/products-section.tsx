"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Users, Home, Waves, TrendingUp, Calculator, ArrowRight } from "lucide-react"
import { ProductModal } from "@/components/product-modal"
import { ScrollAnimation } from "@/components/scroll-animations"

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const products = [
    {
      name: "SCOS",
      description: "Stealth Cyber Operating System",
      detail:
        "Next-generation secure operating system with kernel-level anonymization and zero-trace execution environments.",
      status: "In Development",
      category: "Infrastructure",
      icon: Shield,
      priority: "flagship",
    },
    {
      name: "Taskr",
      description: "Service Marketplace Platform",
      detail: "Mobile-first marketplace connecting users with verified specialists across Nigeria, US, and UK.",
      status: "MVP in Progress",
      category: "Revenue",
      icon: Users,
      priority: "high",
    },
    {
      name: "Homevy",
      description: "AI Proptech Platform",
      detail: "AI-powered rental platform with smart matching and digital lease management.",
      status: "Design Phase",
      category: "Revenue",
      icon: Home,
      priority: "high",
    },
    {
      name: "NavierFlow",
      description: "Fluid Dynamics Engine",
      detail: "Advanced simulation engine using Navier-Stokes solvers for educational and research applications.",
      status: "Development",
      category: "Technical",
      icon: Waves,
      priority: "medium",
    },
    {
      name: "ProfitQuest",
      description: "Task-to-Earn Platform",
      detail: "Monetization platform with task completion rewards and referral systems.",
      status: "Ready",
      category: "Revenue",
      icon: TrendingUp,
      priority: "medium",
    },
    {
      name: "Budget Analyzer",
      description: "Personal Finance App",
      detail: "Comprehensive expense tracking with spending pattern analysis and budget visualization.",
      status: "Planned",
      category: "Utility",
      icon: Calculator,
      priority: "low",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in development":
      case "development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "mvp in progress":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "design phase":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
      case "ready":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "planned":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300"
    }
  }

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-gray-900 dark:text-white">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
              A comprehensive ecosystem of cutting-edge solutions spanning secure infrastructure, revenue-generating
              platforms, and innovative research initiatives.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
              <Card
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                      <product.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </div>
                    {product.priority === "flagship" && (
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        Flagship
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">{product.description}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{product.detail}</p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={getStatusColor(product.status)}>
                      {product.status}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeInUp" delay={600}>
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-full"
            >
              View Development Roadmap
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Structured Data for Products Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Genovo Technologies Products",
            description: "Comprehensive ecosystem of cutting-edge technology solutions",
            url: "https://genovo.tech#products",
            numberOfItems: products.length,
            itemListElement: products.map((product, index) => ({
              "@type": "SoftwareApplication",
              position: index + 1,
              name: product.name,
              description: product.detail,
              applicationCategory: product.category,
              creator: {
                "@type": "Organization",
                name: "Genovo Technologies Limited",
              },
            })),
          }),
        }}
      />
    </section>
  )
}
