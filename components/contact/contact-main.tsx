"use client"

import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactMain() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
