'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Autonomy',
    description: 'Building systems that empower independent decision-making and self-governance.'
  },
  {
    title: 'Anonymity',
    description: 'Protecting privacy and enabling secure, anonymous interactions in the digital space.'
  },
  {
    title: 'Ownership',
    description: 'Ensuring users maintain complete control over their data and digital assets.'
  }
]

export default function Values() {
  return (
    <section id="values" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-charcoal/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-offwhite mb-4">
            Values & Vision
          </h2>
          <p className="text-lg text-brand-offwhite/60 max-w-3xl mx-auto">
            We believe in building systems, not just apps. Execution-first. No hype. All code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-offwhite mb-4">
                {value.title}
              </h3>
              <p className="text-brand-offwhite/60">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-brand-taskr-blue via-brand-homevy-green to-brand-taskr-orange p-[1px] rounded-lg">
            <div className="bg-brand-charcoal rounded-lg px-8 py-6">
              <p className="text-xl text-brand-offwhite font-heading">
                "Building the future of decentralized digital empires."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 