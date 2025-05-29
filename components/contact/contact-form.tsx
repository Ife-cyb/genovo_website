"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
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
        setFormData({ name: "", email: "", company: "", subject: "", message: "" })
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

  return (
    <Card className="border border-gray-200">
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Send us a message</h2>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-green-800 text-sm">{submitMessage}</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <p className="text-red-800 text-sm">{submitMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300"
              required
              disabled={isSubmitting}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300"
              required
              disabled={isSubmitting}
            />
          </div>

          <Input
            name="company"
            placeholder="Company/Organization"
            value={formData.company}
            onChange={handleChange}
            className="border-gray-300"
            disabled={isSubmitting}
          />

          <Input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-gray-300"
            required
            disabled={isSubmitting}
          />

          <Textarea
            name="message"
            placeholder="Tell us about your project or partnership opportunity..."
            value={formData.message}
            onChange={handleChange}
            className="border-gray-300 min-h-32 resize-none"
            required
            disabled={isSubmitting}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#1A1A1A] hover:bg-gray-800 text-white"
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
  )
}
