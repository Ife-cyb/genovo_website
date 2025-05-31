'use client'

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
