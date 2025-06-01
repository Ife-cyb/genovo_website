'use client'

import { useEffect, useState } from 'react'
import { LoadingScreen } from '@/components/ui/loading'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    if (typeof window !== 'undefined') {
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
    <>
      {isLoading && <LoadingScreen />}
      <main className={isLoading ? 'hidden' : ''}>
        {children}
      </main>
    </>
  )
} 