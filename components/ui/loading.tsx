'use client'

import { motion } from 'framer-motion'
import { TaskrLogo } from './logo'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-brand-charcoal z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TaskrLogo width={80} height={80} />
        
        {/* Circular loading animation */}
        <motion.div
          className="absolute -inset-4 border-2 border-transparent border-t-brand-taskr-orange rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Loading text */}
        <motion.p
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-brand-offwhite/80 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export function LoadingSpinner({ size = 24, className = '' }) {
  return (
    <motion.div
      className={`inline-block border-2 border-transparent border-t-current rounded-full ${className}`}
      style={{ width: size, height: size }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  )
} 