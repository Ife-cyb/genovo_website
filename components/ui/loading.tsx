'use client'

import { motion } from 'framer-motion'
import { Logo, LoadingIndicator } from './logo'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex flex-col items-center">
        <Logo size="lg" className="mb-8" />
        <LoadingIndicator size={48} />
      </div>
    </motion.div>
  )
}

// Smaller loading spinner for inline use
export function LoadingSpinner({ size = 24, className = '' }) {
  return <LoadingIndicator size={size} className={className} />
} 