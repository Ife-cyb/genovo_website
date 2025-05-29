'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    name: 'SCOS',
    title: 'Synthetic Cognition Operating System',
    description: 'A unified, predictive, self-optimizing intelligent network for manufacturing, energy grid, smart cities, healthcare, and supply chain.',
    features: [
      'Hardware-agnostic OS',
      'AI/ML integrated via TVM and SageMaker',
      'Nanosecond response time goals',
      'Edge-ready, future custom silicon support',
      'Secure-by-design with AWS integration'
    ],
    gradient: 'from-blue-500 to-purple-600',
    href: '/products/scos'
  },
  {
    name: 'Taskr',
    title: 'On-Demand Service Marketplace',
    description: 'A marketplace platform connecting customers to on-demand professionals.',
    features: [
      'Built in Flutter with Firebase + Node.js backend',
      'Payments via Stripe and Paystack',
      'Nigeria, US, UK market targeting'
    ],
    gradient: 'from-brand-taskr-blue to-brand-taskr-orange',
    href: '/products/taskr'
  },
  {
    name: 'Homevy',
    title: 'AI-Powered Rental Platform',
    description: 'Smart tenant profiles and digital leases for the modern rental market.',
    features: [
      'Smart tenant profiles',
      'Digital leases',
      'Stripe escrow',
      'Landlord-tenant matchmaking'
    ],
    gradient: 'from-brand-homevy-green to-emerald-400',
    href: '/products/homevy'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-offwhite mb-4">
            Our Ecosystem
          </h2>
          <p className="text-lg text-brand-offwhite/60 max-w-3xl mx-auto">
            Building foundational technology systems that power global-scale platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-brand-charcoal/30 rounded-lg p-8 backdrop-blur-sm border border-brand-offwhite/10 hover:border-brand-offwhite/20 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-heading font-bold text-2xl mb-2`}>
                {project.name}
              </div>
              <h3 className="text-xl text-brand-offwhite mb-4">
                {project.title}
              </h3>
              <p className="text-brand-offwhite/60 mb-6">
                {project.description}
              </p>
              <ul className="space-y-2 mb-8">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-brand-offwhite/80 flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={project.href}
                className={`inline-block w-full text-center bg-gradient-to-r ${project.gradient} text-white font-medium rounded-lg px-6 py-3 hover:opacity-90 transition-opacity duration-200`}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 