"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, Clock, Shield } from "lucide-react"

export default function ContactSimple() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're interested in our products, want to collaborate, or have questions about our technology,
                we'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Email</h3>
                  <p className="text-gray-600 mb-2">Primary contact for all inquiries</p>
                  <a href="mailto:hello@genovo.tech" className="text-blue-600 hover:underline">
                    hello@genovo.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">GitHub</h3>
                  <p className="text-gray-600 mb-2">Follow our open-source projects</p>
                  <a
                    href="https://github.com/genovo-technologies"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @genovo-technologies
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">LinkedIn</h3>
                  <p className="text-gray-600 mb-2">Connect with our team</p>
                  <a
                    href="https://linkedin.com/company/genovo-technologies"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Genovo Technologies
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Location</h3>
                  <p className="text-gray-600 mb-2">Virtual HQ with global reach</p>
                  <p className="text-gray-600">Lagos, Nigeria & Remote</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <Card className="border border-gray-200 bg-blue-50/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-[#1A1A1A]">Response Time</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                  mention "URGENT" in your subject line.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="press">Press & Media</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-[#1A1A1A] hover:bg-gray-800 text-white">
                    Send Message
                  </Button>
                </form>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Secure Communication</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    All communications are encrypted and handled with the highest level of privacy and security.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
