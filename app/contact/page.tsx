"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactSimple from "@/components/contact/contact-simple"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">Contact</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make it dead simple to reach us - we're here to help build the digital future together
            </p>
          </div>
        </div>
        <ContactSimple />
      </main>
      <Footer />
    </div>
  )
}
