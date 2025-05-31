'use client'

import { useEffect, useState } from 'react'
import { LoadingScreen } from '@/components/ui/loading'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

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