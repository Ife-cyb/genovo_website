"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Users, Code, CheckCircle, AlertCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { ScrollAnimation } from "@/components/scroll-animations"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage(data.message)
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactOptions = [
    {
      icon: Users,
      title: "Partnerships",
      description: "Strategic alliances and joint ventures",
      color: "blue",
    },
    {
      icon: Code,
      title: "Developers",
      description: "Join our world-class engineering team",
      color: "purple",
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "Enterprise security and infrastructure",
      color: "indigo",
    },
    {
      icon: Mail,
      title: "Media & Press",
      description: "Interview requests and media inquiries",
      color: "pink",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-off-white dark:bg-charcoal-black">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4 sm:mb-6 text-charcoal-black dark:text-off-white">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal-black dark:text-off-white max-w-3xl mx-auto font-light px-4">
              Partner with Genovo Technologies to build the future of secure, decentralized digital infrastructure.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollAnimation animation="fadeInLeft">
            <Card className="bg-off-white dark:bg-charcoal-black border border-charcoal-black dark:border-off-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-charcoal-black dark:text-off-white">
                  Send us a message
                </h3>

                {submitStatus === "success" && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 dark:text-green-200 text-sm">{submitMessage}</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start space-x-3">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 dark:text-red-200 text-sm">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-off-white dark:bg-charcoal-black border-charcoal-black dark:border-off-white h-10 sm:h-12 text-sm sm:text-base"
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-off-white dark:bg-charcoal-black border-charcoal-black dark:border-off-white h-10 sm:h-12 text-sm sm:text-base"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Input
                    name="company"
                    placeholder="Company/Organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-off-white dark:bg-charcoal-black border-charcoal-black dark:border-off-white h-10 sm:h-12 text-sm sm:text-base"
                    disabled={isSubmitting}
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project or partnership opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-off-white dark:bg-charcoal-black border-charcoal-black dark:border-off-white min-h-24 sm:min-h-32 text-sm sm:text-base resize-none"
                    required
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-charcoal-black hover:bg-off-white dark:bg-off-white dark:hover:bg-charcoal-black dark:text-charcoal-black text-off-white py-3 sm:py-4 rounded-full text-sm sm:text-base touch-manipulation"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Contact Options */}
          <ScrollAnimation animation="fadeInRight">
            <div className="space-y-4 sm:space-y-6">
              {contactOptions.map((option, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                  <Card className="bg-off-white dark:bg-charcoal-black border border-charcoal-black dark:border-off-white hover:border-off-white dark:hover:border-charcoal-black transition-colors cursor-pointer touch-manipulation">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-off-white dark:bg-charcoal-black rounded-xl flex items-center justify-center flex-shrink-0">
                          <option.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal-black dark:text-off-white" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-charcoal-black dark:text-off-white">
                            {option.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-charcoal-black dark:text-off-white opacity-80">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}

              <ScrollAnimation animation="fadeInUp" delay={400}>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 rounded-xl text-off-white">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure Communication</h3>
                  <p className="text-sm opacity-90 mb-3 sm:mb-4">
                    All communications are encrypted and handled with military-grade security protocols.
                  </p>
                  <p className="text-xs opacity-80">Response time: 24-48 hours for partnership inquiries</p>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
