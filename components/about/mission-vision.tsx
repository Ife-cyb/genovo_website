"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Our Purpose</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving the future of digital sovereignty through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Deliver uncompromising digital sovereignty through elite privacy technology and decentralized
                infrastructure that empowers individuals and organizations.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneer the future of secure, decentralized digital ecosystems that scale globally while maintaining
                absolute user control and privacy.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Elite innovation, uncompromising security, digital sovereignty, transparency, and building high-trust
                technology for the future.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
