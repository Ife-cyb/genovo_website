"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MapPin, CreditCard, ArrowRight, CheckCircle } from "lucide-react"

export default function TaskrSection() {
  const features = [
    "AI-powered skill matching algorithms",
    "Dual payment support (Stripe + Paystack)",
    "Real-time messaging and notifications",
    "Reputation-based tasker system",
    "Geolocation-based service discovery",
    "Integrated escrow payment system",
  ]

  const markets = ["Nigeria", "United States", "United Kingdom"]

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <Users className="w-12 h-12 text-blue-600" />
                <Badge className="bg-green-100 text-green-800">MVP in Progress</Badge>
              </div>

              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Key Features</h3>
              <div className="space-y-3 mb-6">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs font-medium">Location-Based</p>
                </div>
                <div className="text-center">
                  <CreditCard className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-xs font-medium">Secure Payments</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs font-medium">Verified Taskers</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {markets.map((market, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {market}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Revenue Platform</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Taskr: Service Marketplace Platform</h2>
            <p className="text-lg text-gray-600 mb-8">
              Taskr revolutionizes the service marketplace by connecting skilled professionals with clients through
              intelligent matching algorithms. Our platform focuses on hyper-local services with a clean, intuitive
              interface.
            </p>

            <div className="space-y-3 mb-8">
              {features.slice(3).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button className="bg-[#1A1A1A] hover:bg-gray-800 text-white">
                View Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline">Join Waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
