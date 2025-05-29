"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image src="/genovo-logo.png" alt="Genovo Technologies" fill className="object-contain filter invert" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Genovo</h3>
                <p className="text-xs text-gray-400">Technologies</p>
              </div>
            </div>
            <p className="text-sm sm:text-lg text-gray-300 mb-4 sm:mb-6 max-w-md font-light leading-relaxed">
              Building the future of decentralized digital empires through elite technology innovation and
              uncompromising security.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Email" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer touch-manipulation"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["SCOS", "Taskr", "Homevy", "All Products"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#ecosystem"
                    className="text-sm text-gray-400 hover:text-white transition-colors touch-manipulation"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
                { name: "Careers", href: "#" },
                { name: "Privacy", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors touch-manipulation"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © 2025 Genovo Technologies Limited. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-right">
              Building secure digital empires since 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
