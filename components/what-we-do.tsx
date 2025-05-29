"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cpu, Globe, Lock } from "lucide-react"

export default function WhatWeDo() {
  const services = [
    {
      icon: Shield,
      title: "Digital Sovereignty",
      description:
        "Building privacy-first infrastructure that gives users complete control over their digital lives and data.",
      color: "blue",
    },
    {
      icon: Cpu,
      title: "AI-Powered Solutions",
      description:
        "Leveraging artificial intelligence to create intelligent, self-optimizing systems for critical infrastructure.",
      color: "purple",
    },
    {
      icon: Globe,
      title: "Decentralized Platforms",
      description: "Creating scalable, secure platforms that operate without central points of failure or control.",
      color: "green",
    },
    {
      icon: Lock,
      title: "Security by Design",
      description:
        "Every solution built with military-grade security and zero-knowledge architecture from the ground up.",
      color: "red",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're building the digital future through innovative technology solutions that prioritize privacy, security,
            and user sovereignty across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
