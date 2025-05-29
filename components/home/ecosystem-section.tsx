"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Users, Briefcase, Wallet, Shield, Cpu } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "taskr",
    name: "Taskr",
    tagline: "On-Demand Service Marketplace",
    description: "Connect with skilled professionals instantly. A marketplace platform revolutionizing service delivery across Nigeria, US, and UK markets.",
    tech: ["Flutter", "Firebase", "Node.js", "Stripe", "Paystack"],
    features: [
      { icon: Users, text: "Smart Professional Matching" },
      { icon: Briefcase, text: "Multi-service Categories" },
      { icon: Wallet, text: "Secure Payment Integration" },
    ],
    colors: {
      primary: "#191970",
      secondary: "#FF5F1F",
    },
  },
  {
    id: "homevy",
    name: "Homevy",
    tagline: "AI-Powered Rental Platform",
    description: "Revolutionizing property rentals with AI-driven tenant screening, digital leases, and smart matchmaking for the modern rental market.",
    tech: ["React", "Node.js", "AWS", "Stripe", "ML APIs"],
    features: [
      { icon: Shield, text: "AI Tenant Screening" },
      { icon: Home, text: "Smart Property Matching" },
      { icon: Cpu, text: "Automated Approvals" },
    ],
    colors: {
      primary: "#008060",
      secondary: "#00a076",
    },
  },
]

export default function EcosystemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 cyber-grid" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Product Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a suite of innovative platforms that generate value and scale globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                {/* Background gradient */}
                <div 
                  className="absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${project.colors.primary}, ${project.colors.secondary})`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: project.colors.primary }}>
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground font-medium">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature.text} className="flex items-center space-x-2">
                        <feature.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="group/btn"
                    style={{
                      backgroundColor: project.colors.primary,
                      color: "white",
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 