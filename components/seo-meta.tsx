"use client"

import Head from "next/head"

interface SEOMetaProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function SEOMeta({
  title = "Genovo Technologies - Building Digital Empires",
  description = "Elite technology innovation spanning secure infrastructure, AI-powered platforms, and next-generation digital solutions that scale globally.",
  canonical = "https://genovo.tech",
  ogImage = "/og-image.jpg",
  noindex = false,
}: SEOMetaProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Genovo Technologies, SCOS, Taskr, Homevy, cybersecurity, AI platforms, digital sovereignty"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Genovo Technologies" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@GenovoTech" />

      {/* Additional SEO Meta */}
      <meta name="author" content="Genovo Technologies Limited" />
      <meta name="publisher" content="Genovo Technologies Limited" />
      <meta name="copyright" content="© 2025 Genovo Technologies Limited" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
    </Head>
  )
}
