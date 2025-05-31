'use client'

import { Montserrat, Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { ClientLayout } from '@/components/client-layout'
import { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Genovo Technologies Limited',
  description: 'Powering intelligence, infrastructure, and autonomy through software.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { LoadingScreen } from '@/components/ui/loading'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after initial load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    // Preload critical resources
    if (typeof window !== 'undefined') {
      // Add font preloading
      const fontUrls = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ]
      fontUrls.forEach(url => {
        const link = document.createElement('link')
        link.href = url
        link.rel = 'preload'
        link.as = 'style'
        document.head.appendChild(link)
      })
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-brand-charcoal text-brand-offwhite">
        {isLoading && <LoadingScreen />}
        <main className={isLoading ? 'hidden' : ''}>
          {children}
        </main>
      </body>
    </html>
  )
}
