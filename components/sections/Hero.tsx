'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-offwhite to-brand-taskr-orange">
            Genovo Technologies
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-brand-offwhite/80 mb-8">
            Code the Future.
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-3xl mx-auto text-brand-offwhite/60"
        >
          Powering intelligence, infrastructure, and autonomy through software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-charcoal bg-brand-offwhite hover:bg-brand-offwhite/90 transition-colors duration-200"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
} 