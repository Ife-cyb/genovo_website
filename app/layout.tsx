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
    // Simulate loading time and preload key resources
    Promise.all([
      // Add any critical resources to preload here
      new Promise(resolve => setTimeout(resolve, 2000)) // Minimum loading time
    ]).then(() => {
      setIsLoading(false)
    })

    // Add performance optimizations
    if (typeof window !== 'undefined') {
      // Preload key images
      const imagesToPreload = [
        '/logo.png',
        // Add other critical images here
      ]
      imagesToPreload.forEach(src => {
        const img = new Image()
        img.src = src
      })
    }
  }, [])

  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Genovo Technologies</title>
        <meta name="description" content="Building the future of decentralized digital empires" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Add preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {isLoading && <LoadingScreen />}
        <main className={`${isLoading ? 'hidden' : ''}`}>
          {children}
        </main>
      </body>
    </html>
  )
}
