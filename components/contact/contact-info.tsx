"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Clock, Users, Code, MessageSquare, Shield } from "lucide-react"

export default function ContactInfo() {
  const contactOptions = [
    {
      icon: Users,
      title: "Partnerships",
      description: "Strategic alliances and joint ventures",
      email: "partnerships@genovo.tech",
      color: "blue",
    },
    {
      icon: Code,
      title: "Developers",
      description: "Join our world-class engineering team",
      email: "careers@genovo.tech",
      color: "purple",
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "Enterprise security and infrastructure",
      email: "consulting@genovo.tech",
      color: "indigo",
    },
    {
      icon: Mail,
      title: "Media & Press",
      description: "Interview requests and media inquiries",
      email: "press@genovo.tech",
      color: "pink",
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="border border-gray-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-[#1A1A1A]">General Inquiries</p>
                <p className="text-gray-600">hello@genovo.tech</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="font-medium text-[#1A1A1A]">Headquarters</p>
                <p className="text-gray-600">Lagos, Nigeria (Remote-First)</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <p className="font-medium text-[#1A1A1A]">Response Time</p>
                <p className="text-gray-600">24-48 hours for partnerships</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {contactOptions.map((option, index) => (
          <Card
            key={index}
            className="border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 bg-${option.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <option.icon className={`w-6 h-6 text-${option.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1A1A1A]">{option.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                  <p className="text-sm text-blue-600">{option.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Secure Communication</h3>
              <p className="text-sm opacity-90">
                All communications are encrypted and handled with military-grade security protocols. Your privacy and
                data security are our top priorities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
