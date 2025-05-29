'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'

export default function SCOSPage() {
  useEffect(() => {
    // Smooth scroll handling
    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5'
        const yPos = -(scrolled * Number(speed))
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-brand-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-charcoal/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            SCOS
          </h1>
          <p className="text-xl md:text-2xl text-brand-offwhite/80 max-w-3xl mx-auto mb-8">
            The next generation of intelligent operating systems.
            Powering the future of industrial automation and smart infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-offwhite mb-6">
                Hardware Agnostic Architecture
              </h2>
              <p className="text-lg text-brand-offwhite/60">
                SCOS adapts to any hardware configuration, from edge devices to cloud infrastructure.
                Our revolutionary architecture ensures seamless integration across platforms.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />
              {/* Add 3D visualization here */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-4 bg-brand-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-offwhite text-center mb-16">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Response Time',
                value: '<1ns',
                description: 'Industry-leading nanosecond response time'
              },
              {
                title: 'AI Integration',
                value: 'Native',
                description: 'Built-in TVM and SageMaker support'
              },
              {
                title: 'Security',
                value: 'Military-grade',
                description: 'AWS-integrated security protocols'
              }
            ].map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-brand-charcoal/30 backdrop-blur-sm rounded-lg p-8 border border-brand-offwhite/10"
              >
                <h3 className="text-xl font-heading font-bold text-brand-offwhite mb-2">
                  {spec.title}
                </h3>
                <div className="text-3xl font-mono text-blue-400 mb-4">
                  {spec.value}
                </div>
                <p className="text-brand-offwhite/60">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-offwhite text-center mb-16">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Manufacturing',
                description: 'Smart factories with predictive maintenance and real-time optimization'
              },
              {
                title: 'Energy Grid',
                description: 'Intelligent power distribution and consumption forecasting'
              },
              {
                title: 'Smart Cities',
                description: 'Connected infrastructure management and urban planning'
              },
              {
                title: 'Healthcare',
                description: 'Medical device integration and patient data management'
              },
              {
                title: 'Supply Chain',
                description: 'End-to-end visibility and automated logistics optimization'
              },
              {
                title: 'Edge Computing',
                description: 'Distributed processing and local intelligence'
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-lg p-8 border border-brand-offwhite/10"
              >
                <h3 className="text-xl font-heading font-bold text-brand-offwhite mb-4">
                  {useCase.title}
                </h3>
                <p className="text-brand-offwhite/60">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg p-12 border border-brand-offwhite/10"
          >
            <h2 className="text-4xl font-heading font-bold text-brand-offwhite mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-brand-offwhite/60 mb-8">
              Join the next generation of intelligent systems with SCOS.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg px-8 py-4 hover:opacity-90 transition-opacity duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 