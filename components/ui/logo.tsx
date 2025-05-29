'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function TaskrLogo({ width = 40, height = 40, className = '' }: LogoProps) {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* T shape */}
      <motion.path
        d="M20 20H80V35H55V80H45V35H20V20Z"
        fill="#1A2B4B"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      {/* Checkmark */}
      <motion.path
        d="M30 50L45 65L70 40"
        stroke="#FF6B2C"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.svg>
  )
}

export function GenovoLogo({ width = 40, height = 40, className = '' }: LogoProps) {
  return (
    <motion.div
      className={`font-heading font-bold text-2xl ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Genovo
    </motion.div>
  )
} 