'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  textColor?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl'
}

export function Logo({ className = '', textColor = 'text-brand-offwhite', size = 'md' }: LogoProps) {
  return (
    <motion.div
      className={`flex items-center space-x-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`font-heading font-bold ${sizeClasses[size]} ${textColor}`}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        Genovo
      </motion.div>
    </motion.div>
  )
}

// Loading indicator that matches brand style
export function LoadingIndicator({ size = 40, className = '' }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 border-2 border-brand-offwhite/20 rounded-full"
        style={{ width: size, height: size }}
      />
      
      {/* Spinning ring */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent border-t-brand-offwhite rounded-full"
        style={{ width: size, height: size }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  )
} 