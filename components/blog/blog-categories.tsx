"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rss, Mail } from "lucide-react"

export default function BlogCategories() {
  const categories = [
    { name: "Product Updates", count: 12, color: "blue" },
    { name: "Thought Leadership", count: 8, color: "purple" },
    { name: "Technical", count: 15, color: "red" },
    { name: "Development", count: 10, color: "green" },
    { name: "Company News", count: 6, color: "indigo" },
    { name: "Analysis", count: 9, color: "orange" },
  ]

  const recentTags = [
    "SCOS",
    "Digital Sovereignty",
    "AI/ML",
    "Security",
    "Privacy",
    "Blockchain",
    "Infrastructure",
    "Taskr",
    "Homevy",
    "Zero-Knowledge",
  ]

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card className="border border-gray-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Categories</h3>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <span className="text-gray-700">{category.name}</span>
                <Badge variant="outline" className={`bg-${category.color}-100 text-${category.color}-800`}>
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6 text-center">
          <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Stay Updated</h3>
          <p className="text-gray-600 text-sm mb-4">Get the latest insights and updates delivered to your inbox.</p>
          <Button className="w-full bg-[#1A1A1A] hover:bg-gray-800 text-white">Subscribe to Newsletter</Button>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="border border-gray-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {recentTags.map((tag, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* RSS Feed */}
      <Card className="border border-gray-200">
        <CardContent className="p-6 text-center">
          <Rss className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="font-semibold text-[#1A1A1A] mb-2">RSS Feed</h3>
          <p className="text-gray-600 text-sm mb-4">Subscribe to our RSS feed for real-time updates.</p>
          <Button variant="outline" size="sm">
            Subscribe to RSS
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
