"use client"

import { useEffect } from "react"

export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Genovo Technologies Limited",
      alternateName: "Genovo Technologies",
      url: "https://genovo.tech",
      logo: "https://genovo.tech/genovo-logo.png",
      description:
        "Elite technology innovation spanning secure infrastructure, AI-powered platforms, and next-generation digital solutions that scale globally.",
      foundingDate: "2025",
      founders: [
        {
          "@type": "Person",
          name: "Afolabi Oluwatosin Abioye",
          jobTitle: "Founder & CEO",
          worksFor: {
            "@type": "Organization",
            name: "Genovo Technologies Limited",
          },
        },
        {
          "@type": "Person",
          name: "Adegbite Ifeoluwapo",
          jobTitle: "Co-Founder & CTO",
          worksFor: {
            "@type": "Organization",
            name: "Genovo Technologies Limited",
          },
        },
      ],
      industry: "Technology",
      numberOfEmployees: "10-50",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: "https://genovo.tech#contact",
      },
      sameAs: [
        "https://twitter.com/GenovoTech",
        "https://linkedin.com/company/genovo-technologies",
        "https://github.com/genovo-technologies",
      ],
    }

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Genovo Technologies",
      url: "https://genovo.tech",
      description: "Building the future of decentralized digital empires through elite technology innovation",
      publisher: {
        "@type": "Organization",
        name: "Genovo Technologies Limited",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://genovo.tech/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }

    // Software Products Schema
    const softwareProductsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Genovo Technologies Products",
      description: "Comprehensive ecosystem of cutting-edge technology solutions",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "SCOS",
          description:
            "Stealth Cyber Operating System - Next-generation secure operating system with kernel-level anonymization",
          applicationCategory: "Operating System",
          operatingSystem: "Cross-platform",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          creator: {
            "@type": "Organization",
            name: "Genovo Technologies Limited",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "Taskr",
          description:
            "Service Marketplace Platform - Mobile-first marketplace connecting users with verified specialists",
          applicationCategory: "Marketplace",
          operatingSystem: "iOS, Android, Web",
          creator: {
            "@type": "Organization",
            name: "Genovo Technologies Limited",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "Homevy",
          description:
            "AI Proptech Platform - AI-powered rental platform with smart matching and digital lease management",
          applicationCategory: "Real Estate",
          operatingSystem: "Web, Mobile",
          creator: {
            "@type": "Organization",
            name: "Genovo Technologies Limited",
          },
        },
      ],
    }

    // Technology Company Schema
    const techCompanySchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: "Genovo Technologies: Pioneering Digital Sovereignty",
      description:
        "Learn about Genovo Technologies' innovative approach to secure infrastructure, AI-powered platforms, and decentralized digital solutions.",
      author: {
        "@type": "Organization",
        name: "Genovo Technologies Limited",
      },
      publisher: {
        "@type": "Organization",
        name: "Genovo Technologies Limited",
        logo: {
          "@type": "ImageObject",
          url: "https://genovo.tech/genovo-logo.png",
        },
      },
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString(),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://genovo.tech",
      },
    }

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is SCOS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SCOS (Stealth Cyber Operating System) is a next-generation secure operating system with kernel-level anonymization, modular architecture, and zero-trace execution environments designed for digital sovereignty.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Genovo Technologies offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Genovo Technologies offers secure infrastructure solutions, AI-powered platforms including Taskr and Homevy, cybersecurity consulting, and cutting-edge R&D in decentralized systems and privacy technology.",
          },
        },
        {
          "@type": "Question",
          name: "Who founded Genovo Technologies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Genovo Technologies was founded by Afolabi Oluwatosin Abioye (Founder & CEO, 60% ownership) and Adegbite Ifeoluwapo (Co-Founder & CTO, 40% ownership).",
          },
        },
      ],
    }

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://genovo.tech",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://genovo.tech#products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Technology",
          item: "https://genovo.tech#technology",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "About",
          item: "https://genovo.tech#about",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: "https://genovo.tech#contact",
        },
      ],
    }

    // Insert all schemas
    const schemas = [
      organizationSchema,
      websiteSchema,
      softwareProductsSchema,
      techCompanySchema,
      faqSchema,
      breadcrumbSchema,
    ]

    schemas.forEach((schema, index) => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.id = `structured-data-${index}`
      script.innerHTML = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`)
        if (script) {
          document.head.removeChild(script)
        }
      })
    }
  }, [])

  return null
}
