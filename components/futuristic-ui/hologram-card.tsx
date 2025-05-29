"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface HologramCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function HologramCard({ children, className, glowColor = "#3b82f6" }: HologramCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative p-4 sm:p-6 glass-morphism rounded-lg border transition-all duration-500 will-change-transform",
        "hover:scale-105 hover:shadow-2xl touch-manipulation",
        "focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-opacity-50",
        isHovered && "hologram-effect",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? `0 0 30px ${glowColor}40` : undefined,
        borderColor: isHovered ? glowColor : undefined,
      }}
    >
      {/* Corner decorations */}
      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-blue-400 opacity-60" />
      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-blue-400 opacity-60" />
      <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-blue-400 opacity-60" />
      <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-blue-400 opacity-60" />

      {/* Data flow lines - hidden on mobile for cleaner look */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30 hidden sm:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30 hidden sm:block" />

      {children}
    </div>
  )
}
