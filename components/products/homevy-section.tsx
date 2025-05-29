"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Home, Brain, FileCheck, ArrowRight, CheckCircle } from "lucide-react"

export default function HomevySection() {
  const features = [
    "Smart tenant credit and document verification",
    "AI-powered landlord-renter matching",
    "Verified property listings with virtual tours",
    "Digital lease creation and management",
    "Automated rent collection and escrow",
    "Predictive market analytics",
  ]

  const stats = [
    { label: "AI Accuracy", value: "94%" },
    { label: "Processing Time", value: "< 2 min" },
    { label: "Success Rate", value: "89%" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-orange-100 text-orange-800 mb-4">AI Proptech</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Homevy: AI-Powered Rental Platform</h2>
            <p className="text-lg text-gray-600 mb-8">
              Homevy transforms the rental market through AI-powered pre-approval and smart matching. Our platform
              streamlines the entire rental process from tenant screening to digital lease management, creating a
              seamless experience for both renters and landlords.
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
                Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">AI-Powered Matching</h3>
                    <p className="text-sm text-gray-600">Advanced algorithms for perfect matches</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-[#1A1A1A]">{stat.value}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border border-gray-200">
                <CardContent className="p-4 text-center">
                  <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium text-[#1A1A1A] mb-1">For Landlords</h4>
                  <p className="text-xs text-gray-600">Verified tenants, automated screening</p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-4 text-center">
                  <FileCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium text-[#1A1A1A] mb-1">For Renters</h4>
                  <p className="text-xs text-gray-600">Pre-approval, instant applications</p>
                </CardContent>
              </Card>
            </div>

            <Badge className="w-full justify-center py-2" variant="outline">
              Design Phase - Q2 2025 Launch
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
