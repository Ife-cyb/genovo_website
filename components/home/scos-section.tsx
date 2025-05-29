"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Brain, Factory, Zap, Building2, Heart, Truck, Shield, Cpu, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Intelligent process optimization and predictive maintenance",
  },
  {
    icon: Zap,
    title: "Energy Grid",
    description: "Smart grid management and energy distribution",
  },
  {
    icon: Building2,
    title: "Smart Cities",
    description: "Urban infrastructure and resource management",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Medical systems and patient care optimization",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description: "Logistics optimization and tracking systems",
  },
]

const techFeatures = [
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Built-in AWS integration and encryption",
  },
  {
    icon: Cpu,
    title: "Hardware Agnostic",
    description: "Runs on any compatible hardware",
  },
  {
    icon: Clock,
    title: "Nanosecond Response",
    description: "Ultra-low latency performance",
  },
]

export default function SCOSSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background to-background/95 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-foreground">SCOS</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Synthetic Cognition Operating System
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A unified, predictive, self-optimizing intelligent network powering the future of infrastructure.
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 