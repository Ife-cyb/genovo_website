"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Shield, Zap } from "lucide-react"

export default function ProductsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">Our Product Ecosystem</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive suite of cutting-edge solutions spanning secure infrastructure, revenue-generating
            platforms, and innovative research initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Security First</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Cpu className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border">
              <Zap className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">High Performance</span>
            </div>
          </div>
          <Button size="lg" className="bg-[#1A1A1A] hover:bg-gray-800 text-white">
            Explore All Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
