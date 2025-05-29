"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogInsights from "@/components/blog/blog-insights"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">Blog & Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share updates, insights, progress, and thought leadership from the Genovo team
            </p>
          </div>
        </div>
        <BlogInsights />
      </main>
      <Footer />
    </div>
  )
}
