"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import MissionVision from "@/components/about/mission-vision"
import FoundersTeam from "@/components/about/founders-team"
import GenovoStory from "@/components/about/genovo-story"
import CompanyValues from "@/components/about/company-values"
import PressAchievements from "@/components/about/press-achievements"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">About Genovo</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the digital future through elite technology innovation and uncompromising security
            </p>
          </div>
        </div>
        <MissionVision />
        <FoundersTeam />
        <GenovoStory />
        <CompanyValues />
        <PressAchievements />
      </main>
      <Footer />
    </div>
  )
}
