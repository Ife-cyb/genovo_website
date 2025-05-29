"use client"

import Header from "@/components/header"
import HeroBanner from "@/components/home/hero-banner"
import WhatGenovoDoes from "@/components/home/what-genovo-does"
import KeyProductsHighlight from "@/components/home/key-products-highlight"
import TestimonialsSection from "@/components/home/testimonials-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main>
        <HeroBanner />
        <WhatGenovoDoes />
        <KeyProductsHighlight />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
