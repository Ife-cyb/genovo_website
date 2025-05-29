"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Code, CheckCircle } from "lucide-react"

export default function ApplicationProcess() {
  const steps = [
    {
      icon: FileText,
      title: "Application Review",
      description:
        "Submit your application with resume, cover letter, and portfolio. Our team reviews all applications within 48 hours.",
      duration: "1-2 days",
      color: "blue",
    },
    {
      icon: Users,
      title: "Initial Interview",
      description:
        "30-minute video call with our hiring team to discuss your background, interests, and alignment with our mission.",
      duration: "30 minutes",
      color: "green",
    },
    {
      icon: Code,
      title: "Technical Assessment",
      description:
        "Role-specific technical evaluation. Could be a coding challenge, design task, or technical discussion based on the position.",
      duration: "2-3 hours",
      color: "purple",
    },
    {
      icon: CheckCircle,
      title: "Final Interview",
      description:
        "Meet with team members and leadership. We'll discuss the role in detail and answer any questions you have.",
      duration: "45 minutes",
      color: "orange",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Application Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our hiring process is designed to be transparent, efficient, and respectful of your time. Here's what you
            can expect when you apply.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div
                    className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-4`}
                  >
                    <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>

                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-xs font-medium text-gray-700">Duration: {step.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#1A1A1A] to-gray-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">What We Look For</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Technical Excellence</h4>
                <p className="text-sm opacity-90">Strong technical skills and passion for learning new technologies</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mission Alignment</h4>
                <p className="text-sm opacity-90">Commitment to privacy, security, and digital sovereignty</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Collaborative Spirit</h4>
                <p className="text-sm opacity-90">Ability to work effectively in a remote, global team environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
