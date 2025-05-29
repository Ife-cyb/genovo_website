'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomevyPage() {
  return (
    <main className="min-h-screen bg-brand-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-homevy-green/20 to-emerald-400/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-charcoal/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-homevy-green to-emerald-400 mb-6">
            Homevy
          </h1>
          <p className="text-xl md:text-2xl text-brand-offwhite/80 max-w-3xl mx-auto mb-8">
            Revolutionizing the rental market with AI-powered solutions.
            Making housing accessible, transparent, and efficient.
          </p>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-offwhite text-center mb-16">
            Intelligent Rental Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Smart Profiles',
                description: 'AI-driven tenant profiles that match with perfect properties.'
              },
              {
                title: 'Digital Leases',
                description: 'Secure, blockchain-verified digital lease agreements.'
              },
              {
                title: 'Escrow Payments',
                description: 'Protected payments through Stripe escrow services.'
              },
              {
                title: 'Smart Matching',
                description: 'Intelligent landlord-tenant matchmaking system.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-brand-charcoal/30 backdrop-blur-sm rounded-lg p-8 border border-brand-offwhite/10"
              >
                <h3 className="text-xl font-heading font-bold text-brand-offwhite mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-offwhite/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="py-24 px-4 bg-brand-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading font-bold text-brand-offwhite mb-6">
                AI-Powered Matching
              </h2>
              <p className="text-lg text-brand-offwhite/60 mb-8">
                Our advanced AI algorithms analyze hundreds of data points to create
                perfect matches between tenants and properties, considering factors like:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-homevy-green rounded-full mr-3" />
                  Lifestyle preferences and habits
                </li>
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-homevy-green rounded-full mr-3" />
                  Financial stability and history
                </li>
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-homevy-green rounded-full mr-3" />
                  Location and commute preferences
                </li>
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-homevy-green rounded-full mr-3" />
                  Property maintenance records
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-r from-brand-homevy-green/10 to-emerald-400/10"
            >
              {/* Add visualization here */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Coverage */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-offwhite text-center mb-16">
            Market Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-brand-homevy-green/5 to-emerald-400/5 rounded-lg p-8 border border-brand-offwhite/10"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-offwhite mb-6">
                United States
              </h3>
              <ul className="space-y-4">
                <li className="text-brand-offwhite/60">Major metropolitan areas</li>
                <li className="text-brand-offwhite/60">State-specific legal compliance</li>
                <li className="text-brand-offwhite/60">Credit score integration</li>
                <li className="text-brand-offwhite/60">Background check services</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-brand-homevy-green/5 to-emerald-400/5 rounded-lg p-8 border border-brand-offwhite/10"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-offwhite mb-6">
                United Kingdom
              </h3>
              <ul className="space-y-4">
                <li className="text-brand-offwhite/60">London and major cities</li>
                <li className="text-brand-offwhite/60">GDPR compliance</li>
                <li className="text-brand-offwhite/60">Right to Rent checks</li>
                <li className="text-brand-offwhite/60">Council tax integration</li>
              </ul>
            </motion.div>
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
            className="bg-gradient-to-r from-brand-homevy-green/10 to-emerald-400/10 rounded-lg p-12 border border-brand-offwhite/10"
          >
            <h2 className="text-4xl font-heading font-bold text-brand-offwhite mb-6">
              Transform Your Rental Experience
            </h2>
            <p className="text-lg text-brand-offwhite/60 mb-8">
              Join the future of property rentals with Homevy's intelligent platform.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-brand-homevy-green to-emerald-400 text-white font-medium rounded-lg px-8 py-4 hover:opacity-90 transition-opacity duration-200"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 