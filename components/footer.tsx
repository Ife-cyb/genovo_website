"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from 'framer-motion'

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "SCOS", href: "/products/scos" },
        { name: "Taskr", href: "/products/taskr" },
        { name: "Homevy", href: "/products/homevy" },
        { name: "All Products", href: "/products" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Notice", href: "/cookies" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/genovo-technologies", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/genovo-technologies", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/GenovoTech", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@genovo.tech", label: "Email" },
  ]

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-charcoal/50 backdrop-blur-lg border-t border-brand-offwhite/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="text-xl font-heading font-bold text-brand-offwhite">
              Genovo
            </Link>
            <p className="mt-4 text-brand-offwhite/60">
              Building the future of decentralized digital empires.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-heading font-bold text-brand-offwhite mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-brand-offwhite/60 hover:text-brand-offwhite transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-brand-offwhite/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-offwhite/60 mb-4 md:mb-0"
          >
            © 2025 Genovo Technologies Limited. All rights reserved.
          </motion.div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-offwhite/60 hover:text-brand-offwhite transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
