"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Rss } from "lucide-react"

export default function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">Insights & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest developments in digital sovereignty, security technology, and our journey
            building the future of decentralized infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search articles..." className="pl-10 border-gray-300" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Rss className="w-4 h-4" />
              <span>Subscribe</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
