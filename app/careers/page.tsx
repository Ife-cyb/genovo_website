"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import MissionDrivenCulture from "@/components/careers/mission-driven-culture"
import OpenRoles from "@/components/careers/open-roles"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">Careers / Join Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission-driven team building the future of secure, privacy-first technology solutions
            </p>
          </div>
        </div>
        <MissionDrivenCulture />
        <OpenRoles />
      </main>
      <Footer />
    </div>
  )
}
