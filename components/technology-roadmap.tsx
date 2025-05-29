"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"

export default function TechnologyRoadmap() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      status: "current",
      items: [
        { name: "SCOS Alpha Release", status: "in-progress", priority: "high" },
        { name: "Taskr MVP Launch", status: "in-progress", priority: "high" },
        { name: "Homevy Design Completion", status: "planned", priority: "medium" },
      ],
    },
    {
      quarter: "Q2 2025",
      status: "upcoming",
      items: [
        { name: "SCOS Beta Testing", status: "planned", priority: "high" },
        { name: "Taskr Market Expansion", status: "planned", priority: "high" },
        { name: "Homevy MVP Development", status: "planned", priority: "medium" },
        { name: "ProfitQuest Completion", status: "planned", priority: "medium" },
      ],
    },
    {
      quarter: "Q3 2025",
      status: "future",
      items: [
        { name: "SCOS Public Release", status: "planned", priority: "high" },
        { name: "NavierFlow Open Source", status: "planned", priority: "low" },
        { name: "Budget Analyzer Launch", status: "planned", priority: "low" },
        { name: "R&D Tools Integration", status: "planned", priority: "medium" },
      ],
    },
    {
      quarter: "Q4 2025",
      status: "future",
      items: [
        { name: "Enterprise SCOS Rollout", status: "planned", priority: "high" },
        { name: "Global Platform Scaling", status: "planned", priority: "high" },
        { name: "Next-Gen R&D Initiatives", status: "planned", priority: "medium" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-emerald-600" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-600" />
      case "planned":
        return <AlertCircle className="w-4 h-4 text-orange-600" />
      default:
        return <Calendar className="w-4 h-4 text-gray-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getQuarterStatus = (status: string) => {
    switch (status) {
      case "current":
        return "border-emerald-500 bg-emerald-50"
      case "upcoming":
        return "border-blue-500 bg-blue-50"
      case "future":
        return "border-gray-300 bg-gray-50"
      default:
        return "border-gray-300"
    }
  }

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-6">
            DEVELOPMENT
            <span className="block text-emerald-600">ROADMAP</span>
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Strategic timeline for delivering cutting-edge technology solutions and scaling our digital empire across
            global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {roadmapItems.map((quarter, index) => (
            <Card key={index} className={`border-2 transition-all duration-300 ${getQuarterStatus(quarter.status)}`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold tracking-wider flex items-center justify-between">
                  {quarter.quarter}
                  {quarter.status === "current" && <Badge className="bg-emerald-600 text-white">CURRENT</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quarter.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                    >
                      <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1">{item.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(item.priority)}`}></div>
                          <span className="text-xs opacity-70 capitalize">{item.priority} Priority</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-white p-6 rounded-lg border-2 border-[#1A1A1A]/10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium">High Priority</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium">Medium Priority</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Low Priority</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
