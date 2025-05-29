'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { LoadingScreen } from '@/components/ui/loading'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Genovo Technologies Limited',
  description: 'Powering intelligence, infrastructure, and autonomy through software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Genovo Technologies</title>
        <meta name="description" content="Building the future of decentralized digital empires" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-brand-charcoal text-brand-offwhite">
        {isLoading && <LoadingScreen />}
        <main className={isLoading ? 'hidden' : ''}>
          {children}
        </main>
      </body>
    </html>
  )
}
