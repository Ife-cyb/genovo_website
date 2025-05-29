import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://genovo.tech"),
  title: "Genovo Technologies - Building the Digital Future",
  description:
    "Elite software solutions spanning secure infrastructure, AI platforms, and next-generation digital experiences. Featuring SCOS, Taskr, Homevy, and cutting-edge R&D initiatives.",
  keywords: [
    "Genovo Technologies",
    "SCOS",
    "Stealth Cyber Operating System",
    "Taskr",
    "Homevy",
    "AI platforms",
    "secure infrastructure",
    "digital sovereignty",
    "cybersecurity",
  ],
  authors: [
    { name: "Afolabi Oluwatosin Abioye", url: "https://genovo.tech" },
    { name: "Adegbite Ifeoluwapo", url: "https://genovo.tech" },
  ],
  creator: "Genovo Technologies Limited",
  publisher: "Genovo Technologies Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genovo.tech",
    siteName: "Genovo Technologies",
    title: "Genovo Technologies - Building the Digital Future",
    description:
      "Elite software solutions spanning secure infrastructure, AI platforms, and next-generation digital experiences that scale globally.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Genovo Technologies - Building the Digital Future",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Genovo Technologies Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GenovoTech",
    creator: "@GenovoTech",
    title: "Genovo Technologies - Building the Digital Future",
    description:
      "Elite software solutions spanning secure infrastructure, AI platforms, and next-generation digital experiences.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://genovo.tech",
    languages: {
      "en-US": "https://genovo.tech",
      "en-GB": "https://genovo.tech/en-gb",
    },
  },
  category: "technology",
  classification: "Business",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Genovo Technologies",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional meta tags */}
        <meta name="application-name" content="Genovo Technologies" />
        <meta name="apple-mobile-web-app-title" content="Genovo Technologies" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
