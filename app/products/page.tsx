"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductsShowcase from "@/components/products/products-showcase"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">Products & Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcase of what we're building - from infrastructure intelligence to revenue-generating platforms
            </p>
          </div>
        </div>
        <ProductsShowcase />
      </main>
      <Footer />
    </div>
  )
}
