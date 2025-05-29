"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Users, Home, Zap } from "lucide-react"

export default function RevenueProjects() {
  return (
    <section id="projects" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-6">REVENUE ENGINES</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Scalable, income-generating products that fuel our innovation and growth, delivering real value to markets
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Taskr */}
          <Card className="bg-white border-2 border-[#1A1A1A]/10 hover:border-blue-500 transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} />
                </Button>
              </div>
              <CardTitle className="text-2xl font-bold tracking-wider">TASKR</CardTitle>
              <p className="text-sm opacity-70 tracking-wider">SERVICE MARKETPLACE PLATFORM</p>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6 opacity-80">
                Revolutionary service marketplace connecting skilled professionals with clients through intelligent
                matching algorithms and secure payment systems.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">AI-powered skill matching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">Secure escrow payments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Global talent network</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white flex-1">EXPLORE TASKR</Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  DEMO
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Homevy */}
          <Card className="bg-white border-2 border-[#1A1A1A]/10 hover:border-emerald-500 transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-lg flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} />
                </Button>
              </div>
              <CardTitle className="text-2xl font-bold tracking-wider">HOMEVY</CardTitle>
              <p className="text-sm opacity-70 tracking-wider">AI RENTAL PLATFORM</p>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6 opacity-80">
                Next-generation rental platform leveraging AI to optimize property management, tenant matching, and
                investment opportunities in real estate markets.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm">Smart property analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm">Automated tenant screening</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm">Investment optimization</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1">EXPLORE HOMEVY</Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                >
                  DEMO
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
