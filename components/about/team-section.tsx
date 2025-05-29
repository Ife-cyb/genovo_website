"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Afolabi Oluwatosin Abioye",
      role: "Founder & CEO",
      ownership: "60%",
      bio: "Visionary architect of Genovo's digital empire, pioneering secure infrastructure and privacy-first ecosystems that redefine digital sovereignty.",
      initials: "AO",
      gradient: "from-blue-600 to-purple-600",
      expertise: ["Strategic Vision", "Product Architecture", "Digital Sovereignty"],
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
      bio: "Technical mastermind driving innovation in decentralized systems and stealth-grade security protocols for next-generation digital empires.",
      initials: "AI",
      gradient: "from-purple-600 to-pink-600",
      expertise: ["System Architecture", "Security Protocols", "AI/ML Engineering"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visionary founders building the future of digital sovereignty through cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center`}
                >
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <Badge variant="outline" className="mb-4">
                  {member.ownership} Ownership
                </Badge>

                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-[#1A1A1A] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
