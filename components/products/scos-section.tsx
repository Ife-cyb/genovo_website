"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Cpu, Zap, ArrowRight, CheckCircle } from "lucide-react"

export default function SCOSSection() {
  const features = [
    "Hardware-agnostic design with dynamic optimization",
    "100% hardware utilization for maximum efficiency",
    "Nanosecond response time aspirations",
    "Event-driven architecture (EDA)",
    "AI/ML inference engine with TVM compilation",
    "AWS cloud integration for scalability and security",
  ]

  const verticals = [
    { name: "Manufacturing", description: "Smart factory automation and predictive maintenance" },
    { name: "Energy Grid", description: "Intelligent power distribution and optimization" },
    { name: "Smart Cities", description: "Urban infrastructure management and IoT integration" },
    { name: "Healthcare", description: "Medical device coordination and patient monitoring" },
    { name: "Supply Chain", description: "Logistics optimization and real-time tracking" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-blue-100 text-blue-800 mb-4">Flagship Product</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              SCOS: Synthetic Cognition Operating System
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A revolutionary unified, predictive, self-optimizing intelligent network designed for five critical
              infrastructure verticals. Built with hardware-agnostic architecture, SCOS achieves 100% hardware
              utilization and targets nanosecond response times.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button className="bg-[#1A1A1A] hover:bg-gray-800 text-white">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline">Technical Docs</Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Target Verticals</h3>
                <div className="space-y-4">
                  {verticals.map((vertical, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-[#1A1A1A]">{vertical.name}</h4>
                        <p className="text-sm text-gray-600">{vertical.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="border border-gray-200 text-center">
                <CardContent className="p-4">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Military-Grade Security</p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 text-center">
                <CardContent className="p-4">
                  <Cpu className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">AI-Driven Intelligence</p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 text-center">
                <CardContent className="p-4">
                  <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Nanosecond Response</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
