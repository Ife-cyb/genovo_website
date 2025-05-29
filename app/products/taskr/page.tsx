'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TaskrPage() {
  return (
    <main className="min-h-screen bg-brand-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-taskr-blue/20 to-brand-taskr-orange/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-charcoal/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-taskr-blue to-brand-taskr-orange mb-6">
            Taskr
          </h1>
          <p className="text-xl md:text-2xl text-brand-offwhite/80 max-w-3xl mx-auto mb-8">
            The future of on-demand services.
            Connecting skilled professionals with customers seamlessly.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Matching',
                description: 'AI-powered algorithm connects customers with the perfect service provider based on skills, location, and ratings.'
              },
              {
                title: 'Secure Payments',
                description: 'Integrated payment processing with Stripe and Paystack, ensuring safe and reliable transactions.'
              },
              {
                title: 'Global Reach',
                description: 'Operating across Nigeria, US, and UK markets with localized support and currency handling.'
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

      {/* Technology Stack */}
      <section className="py-24 px-4 bg-brand-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-offwhite text-center mb-16">
            Built with Modern Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-offwhite">
                Frontend Excellence
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-taskr-orange rounded-full mr-3" />
                  Flutter for cross-platform mobile apps
                </li>
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-taskr-orange rounded-full mr-3" />
                  Real-time updates and notifications
                </li>
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-taskr-orange rounded-full mr-3" />
                  Offline-first architecture
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-offwhite">
                Backend Power
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-taskr-blue rounded-full mr-3" />
                  Node.js for scalable server infrastructure
                </li>
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-taskr-blue rounded-full mr-3" />
                  Firebase for real-time database and authentication
                </li>
                <li className="flex items-center text-brand-offwhite/60">
                  <span className="w-2 h-2 bg-brand-taskr-blue rounded-full mr-3" />
                  Microservices architecture for reliability
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Focus */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-offwhite text-center mb-16">
            Global Market Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                country: 'Nigeria',
                features: ['Local payment integration', 'Cultural adaptation', 'Regional pricing']
              },
              {
                country: 'United States',
                features: ['State-specific licensing', 'Insurance coverage', 'Background checks']
              },
              {
                country: 'United Kingdom',
                features: ['GDPR compliance', 'Local regulations', 'EU market ready']
              }
            ].map((market, index) => (
              <motion.div
                key={market.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-r from-brand-taskr-blue/5 to-brand-taskr-orange/5 rounded-lg p-8 border border-brand-offwhite/10"
              >
                <h3 className="text-xl font-heading font-bold text-brand-offwhite mb-4">
                  {market.country}
                </h3>
                <ul className="space-y-2">
                  {market.features.map((feature, i) => (
                    <li key={i} className="text-brand-offwhite/60 flex items-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
            className="bg-gradient-to-r from-brand-taskr-blue/10 to-brand-taskr-orange/10 rounded-lg p-12 border border-brand-offwhite/10"
          >
            <h2 className="text-4xl font-heading font-bold text-brand-offwhite mb-6">
              Join the Service Revolution
            </h2>
            <p className="text-lg text-brand-offwhite/60 mb-8">
              Transform your service business with Taskr's cutting-edge platform.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-brand-taskr-blue to-brand-taskr-orange text-white font-medium rounded-lg px-8 py-4 hover:opacity-90 transition-opacity duration-200"
            >
              Get Early Access
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 