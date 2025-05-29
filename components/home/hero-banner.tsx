"use client"

import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Brain } from "lucide-react"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import AnimatedGlobe from "@/components/3d/animated-globe"

function GlobeFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 border-2 border-primary/50 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background overflow-hidden transition-colors duration-500">
      {/* 3D Globe Background */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
          <Suspense fallback={<GlobeFallback />}>
            <AnimatedGlobe />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(26,26,26,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Tagline */}
          <div className="mb-12 transform transition-all duration-700 ease-out">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Code2 className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Genovo Technologies</h1>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
              <span className="block text-foreground transition-colors duration-500">Code the</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Future
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed transition-colors duration-500">
              Powering intelligence, infrastructure, and autonomy through software. Building decentralized systems that scale globally.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transform transition-all duration-700 ease-out delay-100">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 min-w-[200px] group"
              >
                <Brain className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                Our Products
              </Button>
            </Link>

            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto transform transition-all duration-700 ease-out delay-200">
            {[
              { value: "2", label: "Founders" },
              { value: "3", label: "Products" },
              { value: "5+", label: "Markets" },
              { value: "2025", label: "Founded" },
            ].map((stat, index) => (
              <div key={index} className="text-center transform transition-all duration-500 hover:scale-105">
                <div className="text-3xl md:text-4xl font-light text-foreground mb-2 transition-colors duration-500">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider transition-colors duration-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent transition-colors duration-500" />
    </section>
  )
}
