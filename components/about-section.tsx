"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Leadership
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light px-4">
            Visionary founders building the future of digital sovereignty through cutting-edge technology and
            uncompromising security standards.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 max-w-4xl mx-auto">
          <Card className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-white">AO</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Afolabi Oluwatosin Abioye
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                Founder & CEO
              </p>
              <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                60% Ownership
              </Badge>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Visionary architect of Genovo's digital empire, pioneering secure infrastructure and privacy-first
                ecosystems that redefine digital sovereignty.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-white">AI</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Adegbite Ifeoluwapo
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                Co-Founder & CTO
              </p>
              <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                40% Ownership
              </Badge>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Technical mastermind driving innovation in decentralized systems and stealth-grade security protocols
                for next-generation digital empires.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Mission</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Deliver uncompromising digital sovereignty through elite privacy technology and decentralized
              infrastructure.
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Vision</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Pioneer the future of secure, decentralized digital ecosystems that scale globally while maintaining
              absolute control.
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Values</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Elite innovation, uncompromising security, digital sovereignty, and building high-trust technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
