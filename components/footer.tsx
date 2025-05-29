"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "SCOS", href: "/products#scos" },
        { name: "Taskr", href: "/products#taskr" },
        { name: "Homevy", href: "/products#homevy" },
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
    <footer className="bg-[#1A1A1A] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <img src="/genovo-logo.png" alt="Genovo Technologies" className="h-8 w-auto filter invert" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Genovo</h3>
                <p className="text-xs text-gray-400">Technologies</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md font-light leading-relaxed">
              Building the digital future through elite technology innovation and uncompromising security.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors touch-manipulation"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors touch-manipulation"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © 2025 Genovo Technologies Limited. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-right">
              Building the digital future since 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
