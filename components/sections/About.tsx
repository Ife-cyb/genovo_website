'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-charcoal/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-offwhite mb-4">
            About Us
          </h2>
          <p className="text-lg text-brand-offwhite/60 max-w-3xl mx-auto">
            Two founders, zero fluff. Building deeptech products with scale and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-brand-charcoal/30 rounded-lg p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-heading font-bold text-brand-offwhite mb-2">
              Afolabi Oluwatosin Abioye
            </h3>
            <p className="text-brand-offwhite/60 mb-4">Founder (80%)</p>
            <p className="text-brand-offwhite/80">
              Leading the technical vision and architecture of our flagship products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-brand-charcoal/30 rounded-lg p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-heading font-bold text-brand-offwhite mb-2">
              Adegbite Ifeoluwapo
            </h3>
            <p className="text-brand-offwhite/60 mb-4">Co-founder (20%)</p>
            <p className="text-brand-offwhite/80">
              Driving product strategy and market expansion initiatives.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-brand-offwhite/80 max-w-3xl mx-auto">
            Founded in 2025, Genovo Technologies is engineered to be a digital powerhouse
            driving innovation in Nigeria, the US, and UK markets. We're building
            monetizable, scalable, and decentralized digital infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 