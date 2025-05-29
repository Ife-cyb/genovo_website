"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import OptimizedGlobe from "@/components/3d/optimized-globe"

function HeroFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 border-2 border-blue-500 border-t-transparent rounded-full animate-spin opacity-50" />
    </div>
  )
}

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false)

  const handleExploreClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
    }, 800)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Optimized 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} performance={{ min: 0.8 }} frameloop="demand">
          <Suspense fallback={<HeroFallback />}>
            <OptimizedGlobe />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Brand mark */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-1 h-8 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">Genovo Technologies</span>
              <div className="w-1 h-8 bg-blue-500 rounded-full" />
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-6 leading-none">
              <span className="block text-white">Building the</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
                Digital Future
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Elite software solutions spanning secure infrastructure, AI platforms, and next-generation digital
              experiences.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={handleExploreClick}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Loading...
                </>
              ) : (
                <>
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { value: "8+", label: "Products" },
              { value: "3", label: "Platforms" },
              { value: "5+", label: "Markets" },
              { value: "2025", label: "Founded" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  )
}
