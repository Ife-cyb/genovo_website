"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface LegalContentProps {
  title: string
  lastUpdated: string
  content: string
}

export default function LegalContent({ title, lastUpdated, content }: LegalContentProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">{title}</h1>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        <Card className="border border-gray-200">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("# ")) {
                        return `<h1 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`
                      }
                      if (line.startsWith("## ")) {
                        return `<h2 class="text-xl font-semibold text-gray-900 mt-6 mb-3">${line.substring(3)}</h2>`
                      }
                      if (line.startsWith("### ")) {
                        return `<h3 class="text-lg font-medium text-gray-900 mt-4 mb-2">${line.substring(4)}</h3>`
                      }
                      if (line.startsWith("- ")) {
                        return `<li class="ml-4 mb-1">${line.substring(2)}</li>`
                      }
                      if (line.trim() === "") {
                        return "<br>"
                      }
                      return `<p class="mb-4">${line}</p>`
                    })
                    .join(""),
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
