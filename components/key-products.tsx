"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Users, Home, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function KeyProducts() {
  const products = [
    {
      name: "SCOS",
      title: "Synthetic Cognition Operating System",
      description:
        "Revolutionary intelligent network for critical infrastructure with nanosecond response times and 100% hardware utilization.",
      status: "In Development",
      category: "Infrastructure",
      icon: Shield,
      color: "blue",
      features: ["Hardware-agnostic design", "AI/ML inference engine", "AWS cloud integration"],
    },
    {
      name: "Taskr",
      title: "Service Marketplace Platform",
      description:
        "AI-powered marketplace connecting skilled professionals with clients across Nigeria, US, and UK markets.",
      status: "MVP in Progress",
      category: "Revenue",
      icon: Users,
      color: "green",
      features: ["AI skill matching", "Dual payment support", "Real-time messaging"],
    },
    {
      name: "Homevy",
      title: "AI Proptech Platform",
      description: "Smart rental platform with AI-powered matching, digital lease management, and automated processes.",
      status: "Design Phase",
      category: "Revenue",
      icon: Home,
      color: "purple",
      features: ["AI tenant matching", "Digital lease creation", "Predictive analytics"],
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
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Key Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our flagship solutions spanning secure infrastructure, revenue-generating platforms, and cutting-edge
            research initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 bg-${product.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <product.icon className={`w-7 h-7 text-${product.color}-600`} />
                  </div>
                  <Badge variant="outline" className={getStatusColor(product.status)}>
                    {product.status}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 font-medium mb-4">{product.title}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
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
          <Link href="/products">
            <Button size="lg" className="bg-[#1A1A1A] hover:bg-gray-800 text-white">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
