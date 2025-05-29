"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Mail } from "lucide-react"

export default function OpenRoles() {
  const openRoles = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote (Nigeria/Global)",
      type: "Full-time",
      description:
        "Lead development of our core platforms including SCOS, Taskr, and Homevy. Work with cutting-edge technologies in AI, blockchain, and distributed systems.",
      requirements: [
        "5+ years full-stack development experience",
        "Expertise in React, Node.js, Python",
        "Experience with cloud platforms (AWS/Azure)",
        "Strong understanding of security principles",
      ],
    },
    {
      title: "AI/ML Engineer",
      department: "Research & Development",
      location: "Remote (Nigeria/Global)",
      type: "Full-time",
      description:
        "Build intelligent systems for our SCOS platform and AI-powered matching algorithms for Taskr and Homevy.",
      requirements: [
        "3+ years ML/AI experience",
        "Proficiency in Python, TensorFlow/PyTorch",
        "Experience with distributed computing",
        "Knowledge of computer vision and NLP",
      ],
    },
    {
      title: "Security Engineer",
      department: "Security",
      location: "Remote (Nigeria/Global)",
      type: "Full-time",
      description:
        "Design and implement zero-knowledge architectures and privacy-first security protocols across our product ecosystem.",
      requirements: [
        "4+ years cybersecurity experience",
        "Expertise in cryptography and zero-knowledge proofs",
        "Experience with penetration testing",
        "Knowledge of blockchain security",
      ],
    },
  ]

  const internships = [
    {
      title: "Software Engineering Intern",
      duration: "3-6 months",
      description: "Work on real projects contributing to our product ecosystem while learning from senior engineers.",
    },
    {
      title: "Product Design Intern",
      duration: "3-6 months",
      description: "Help design user experiences for our consumer-facing platforms like Taskr and Homevy.",
    },
    {
      title: "Research Intern",
      duration: "3-6 months",
      description: "Contribute to cutting-edge research in AI, privacy technologies, and distributed systems.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Open Roles */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8 text-center">Open Roles</h2>
          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{role.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{role.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{role.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{role.type}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Open Application
                    </Badge>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{role.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3 uppercase tracking-wider">Requirements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {role.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-[#1A1A1A] hover:bg-gray-800 text-white">
                    <Mail className="mr-2 w-4 h-4" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Internships & Collaborations */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8 text-center">
            Internships & Collaborations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{internship.title}</h3>
                  <Badge variant="outline" className="mb-4">
                    {internship.duration}
                  </Badge>
                  <p className="text-gray-600 leading-relaxed mb-4">{internship.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Application */}
        <div className="text-center">
          <Card className="border border-gray-200 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Don't See Your Role?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We're always looking for exceptional talent. Send us your resume and tell us how you'd like to
                contribute to building the digital future.
              </p>
              <Button size="lg" className="bg-[#1A1A1A] hover:bg-gray-800 text-white">
                <Mail className="mr-2 w-5 h-5" />
                Send Open Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
