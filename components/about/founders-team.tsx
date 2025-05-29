"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function FoundersTeam() {
  const founders = [
    {
      name: "Afolabi Oluwatosin Abioye",
      role: "Founder & CEO",
      ownership: "60%",
      bio: "Visionary architect of Genovo's digital empire, pioneering secure infrastructure and privacy-first ecosystems that redefine digital sovereignty. Strategic leader with deep expertise in product architecture and digital transformation.",
      initials: "AO",
      gradient: "from-blue-600 to-purple-600",
      expertise: ["Strategic Vision", "Product Architecture", "Digital Sovereignty", "Systems Design"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Adegbite Ifeoluwapo",
      role: "Co-Founder & CTO",
      ownership: "40%",
      bio: "Technical mastermind driving innovation in decentralized systems and stealth-grade security protocols for next-generation digital empires. Expert in AI/ML engineering and advanced cryptographic systems.",
      initials: "AI",
      gradient: "from-purple-600 to-pink-600",
      expertise: ["System Architecture", "Security Protocols", "AI/ML Engineering", "Cryptography"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Founders & Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the visionary founders building the future of digital sovereignty through cutting-edge technology and
            uncompromising security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${founder.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <span className="text-2xl font-bold text-white">{founder.initials}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{founder.role}</p>
                  <Badge variant="outline" className="mb-4">
                    {founder.ownership} Ownership
                  </Badge>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-center">{founder.bio}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3 text-center">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a href={founder.social.github} className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={founder.social.linkedin} className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={founder.social.twitter} className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Culture */}
        <div className="mt-16 bg-gradient-to-r from-[#1A1A1A] to-gray-800 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Our Team Culture</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            We're building more than just products - we're creating a culture of innovation, security, and collaboration
            that empowers everyone to build the digital future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-bold">Remote-First</p>
              <p className="text-sm opacity-80">Global collaboration</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Security-First</p>
              <p className="text-sm opacity-80">Privacy by design</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Innovation-Driven</p>
              <p className="text-sm opacity-80">Cutting-edge solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
