'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-offwhite mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-brand-offwhite/60 max-w-3xl mx-auto">
            Want to collaborate or invest? Reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-offwhite mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-brand-charcoal/30 border border-brand-offwhite/10 rounded-md text-brand-offwhite placeholder-brand-offwhite/40 focus:outline-none focus:ring-2 focus:ring-brand-offwhite/20"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-offwhite mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-brand-charcoal/30 border border-brand-offwhite/10 rounded-md text-brand-offwhite placeholder-brand-offwhite/40 focus:outline-none focus:ring-2 focus:ring-brand-offwhite/20"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-offwhite mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-brand-charcoal/30 border border-brand-offwhite/10 rounded-md text-brand-offwhite placeholder-brand-offwhite/40 focus:outline-none focus:ring-2 focus:ring-brand-offwhite/20"
                placeholder="Your message"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-brand-taskr-blue to-brand-taskr-orange text-brand-offwhite font-medium rounded-md hover:opacity-90 transition-opacity duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 