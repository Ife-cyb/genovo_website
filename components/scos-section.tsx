"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Cpu, Network } from "lucide-react"
import OSVisualization from "@/components/3d/os-visualization"

export default function SCOSSection() {
  return (
    <section id="scos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-6">
              SCOS
              <span className="block text-2xl md:text-3xl opacity-70 mt-2">STEALTH CYBER OPERATING SYSTEM</span>
            </h2>

            <p className="text-lg mb-8 opacity-80 leading-relaxed">
              The flagship innovation revolutionizing secure computing. SCOS delivers kernel-level anonymization,
              modular stealth deployments, and zero-trace execution environments for digital sovereigns and
              high-security operations.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold tracking-wider">KERNEL ANONYMIZATION</h4>
                  <p className="text-sm opacity-70">Deep system-level privacy protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lock className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold tracking-wider">MODULAR ARCHITECTURE</h4>
                  <p className="text-sm opacity-70">Stealth deployment capabilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Cpu className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold tracking-wider">ENCRYPTED ENVIRONMENTS</h4>
                  <p className="text-sm opacity-70">Native support for secure computing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Network className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold tracking-wider">DARK-CLOUD READY</h4>
                  <p className="text-sm opacity-70">Compatibility with decentralized infrastructure</p>
                </div>
              </div>
            </div>

            <p className="text-sm mb-2">Target Users: Developers, hacktivists, digital sovereigns, high-security ops</p>
            <p className="text-sm mb-4">Status: IN DEVELOPMENT</p>

            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg tracking-wider"
            >
              REQUEST ACCESS
            </Button>
          </div>

          {/* 3D Visualization */}
          <div className="h-96 lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Suspense fallback={null}>
                <OSVisualization />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
