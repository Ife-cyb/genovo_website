"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(26,26,26,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Genovo Logo & Brand */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="relative w-12 h-12">
              <Image src="/genovo-logo.png" alt="Genovo Technologies" fill className="object-contain" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#1A1A1A]">Genovo</h1>
              <p className="text-sm text-gray-600 font-medium">Technologies</p>
            </div>
          </div>

          {/* Main Tagline */}
          <div className="mb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
              <span className="block text-[#1A1A1A]">Building the</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Elite software solutions spanning secure infrastructure, AI platforms, and next-generation digital
              experiences that scale globally with uncompromising privacy.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-[#1A1A1A] hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Explore Products
              </Button>
            </Link>

            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                See Our Vision
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { value: "7+", label: "Products" },
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5] to-transparent" />
    </section>
  )
}
