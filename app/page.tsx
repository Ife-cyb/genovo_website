"use client"

import Header from "@/components/header"
import HeroBanner from "@/components/home/hero-banner"
import SCOSSection from "@/components/home/scos-section"
import EcosystemSection from "@/components/home/ecosystem-section"
import Footer from "@/components/footer"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Values from '@/components/sections/Values'
import Contact from '@/components/sections/Contact'

const Scene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-brand-charcoal" />
  ),
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative min-h-screen w-full overflow-hidden">
        <div className="fixed inset-0 z-0">
          <Suspense fallback={<div className="fixed inset-0 bg-brand-charcoal" />}>
            <Scene />
          </Suspense>
        </div>
        
        <div className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Values />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
