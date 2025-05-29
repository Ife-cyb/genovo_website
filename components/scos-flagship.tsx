"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Cpu, Network, Download, ExternalLink } from "lucide-react"
import SCOSVisualization from "@/components/3d/scos-visualization"

function SCOSFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function SCOSFlagship() {
  const [requestAccess, setRequestAccess] = useState(false)

  const handleAccessRequest = () => {
    setRequestAccess(true)
    setTimeout(() => setRequestAccess(false), 3000)
  }

  return (
    <section id="scos" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <Badge className="bg-emerald-600 text-white mb-4">Flagship Product</Badge>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
                <span className="block text-emerald-400">SCOS</span>
                <span className="block text-2xl md:text-3xl text-gray-300 font-normal">
                  Synthetic Cognition Operating System
                </span>
              </h2>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Unified, predictive, self-optimizing intelligent network for critical infrastructure verticals with
              hardware-agnostic design, 100% hardware utilization, and nanosecond response time aspirations.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Shield,
                  title: "Hardware Agnostic Design",
                  description: "Dynamic detection and optimization for any hardware",
                },
                {
                  icon: Lock,
                  title: "100% Hardware Utilization",
                  description: "Maximum efficiency across all system resources",
                },
                {
                  icon: Cpu,
                  title: "Nanosecond Response Time",
                  description: "Ultra-low latency for critical infrastructure",
                },
                {
                  icon: Network,
                  title: "AWS Integration",
                  description: "Scalable cloud services with enterprise security",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Infrastructure Verticals */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
                Infrastructure Verticals
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {["Manufacturing", "Energy Grid", "Smart City", "Healthcare", "Supply Chain"].map((vertical, i) => (
                  <div key={i} className="text-sm text-gray-300 bg-gray-800 px-3 py-2 rounded-lg">
                    {vertical}
                  </div>
                ))}
              </div>
            </div>

            {/* Target Users */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wider">Target Markets</h4>
              <p className="text-gray-300">
                Industrial manufacturers, energy companies, smart city operators, healthcare systems, and supply chain
                management enterprises.
              </p>
            </div>

            {/* Status */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm text-blue-400 font-medium">Status: In Development</span>
              </div>
              <p className="text-sm text-gray-400">Alpha release scheduled for Q2 2025</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleAccessRequest}
                disabled={requestAccess}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                {requestAccess ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    Request Early Access
                    <Download className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Technical Docs
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* 3D Visualization */}
          <div className="order-1 lg:order-2 h-96 lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]} performance={{ min: 0.8 }}>
              <Suspense fallback={<SCOSFallback />}>
                <SCOSVisualization />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
