"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(26,26,26,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Brand Mark */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img src="/genovo-logo.png" alt="Genovo Technologies" className="h-12 w-auto" />
              <div className="w-1 h-8 bg-[#1A1A1A] rounded-full" />
              <span className="text-sm font-medium text-[#1A1A1A] tracking-wider uppercase">Genovo Technologies</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
              <span className="block text-[#1A1A1A]">Building the</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Elite software solutions spanning secure infrastructure, AI platforms, and next-generation digital
              experiences that scale globally.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-[#1A1A1A] hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { value: "9", label: "Products" },
              { value: "3", label: "Platforms" },
              { value: "5+", label: "Markets" },
              { value: "2025", label: "Founded" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5] to-transparent" />
    </section>
  )
}
