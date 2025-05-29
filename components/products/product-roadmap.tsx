"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"

export default function ProductRoadmap() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      status: "current",
      items: [
        { name: "Taskr MVP Launch", status: "in-progress", priority: "high", product: "Taskr" },
        { name: "ProfitQuest Public Release", status: "in-progress", priority: "high", product: "ProfitQuest" },
        { name: "SCOS Alpha Testing", status: "planned", priority: "high", product: "SCOS" },
      ],
    },
    {
      quarter: "Q2 2025",
      status: "upcoming",
      items: [
        { name: "SCOS Alpha Release", status: "planned", priority: "high", product: "SCOS" },
        { name: "NavierFlow Alpha", status: "planned", priority: "medium", product: "NavierFlow" },
        { name: "Taskr Market Expansion", status: "planned", priority: "high", product: "Taskr" },
        { name: "Homevy MVP Development", status: "planned", priority: "medium", product: "Homevy" },
      ],
    },
    {
      quarter: "Q3 2025",
      status: "future",
      items: [
        { name: "SCOS Beta Release", status: "planned", priority: "high", product: "SCOS" },
        { name: "Homevy Beta Launch", status: "planned", priority: "high", product: "Homevy" },
        { name: "NavierFlow Open Source", status: "planned", priority: "low", product: "NavierFlow" },
      ],
    },
    {
      quarter: "Q4 2025",
      status: "future",
      items: [
        { name: "SCOS Production Ready", status: "planned", priority: "high", product: "SCOS" },
        { name: "Budget Analyzer Development", status: "planned", priority: "low", product: "Budget Analyzer" },
        { name: "Genovo Vault Research", status: "planned", priority: "medium", product: "Genovo Vault" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />
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
        return "border-green-500 bg-green-50"
      case "upcoming":
        return "border-blue-500 bg-blue-50"
      case "future":
        return "border-gray-300 bg-gray-50"
      default:
        return "border-gray-300"
    }
  }

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Development Roadmap</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic timeline for delivering cutting-edge technology solutions and scaling our digital empire across
            global markets. Track our progress as we build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {roadmapItems.map((quarter, index) => (
            <Card key={index} className={`border-2 transition-all duration-300 ${getQuarterStatus(quarter.status)}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{quarter.quarter}</h3>
                  {quarter.status === "current" && <Badge className="bg-green-600 text-white text-xs">CURRENT</Badge>}
                </div>

                <div className="space-y-4">
                  {quarter.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                    >
                      <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1">{item.name}</h4>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${getPriorityColor(item.priority)}`}></div>
                            <span className="text-xs text-gray-600 capitalize">{item.priority}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {item.product}
                          </Badge>
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
          <div className="inline-flex items-center space-x-6 bg-white p-6 rounded-lg border border-gray-200">
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
