"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CyberButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "taskr" | "homevy"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
}

export function CyberButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
}: CyberButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
    secondary: "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700",
    taskr: "taskr-gradient hover:shadow-lg",
    homevy: "homevy-gradient hover:shadow-lg",
  }

  const sizeClasses = {
    sm: "px-3 py-2 text-xs sm:text-sm min-h-[36px]",
    md: "px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base min-h-[40px] sm:min-h-[44px]",
    lg: "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg min-h-[44px] sm:min-h-[52px]",
  }

  return (
    <Button
      className={cn(
        "relative overflow-hidden border-0 text-white font-semibold tracking-wider uppercase transition-all duration-300",
        "transform hover:scale-105 active:scale-95 touch-manipulation",
        "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        isHovered && "pulse-glow",
        isPressed && "scale-95",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-500 transform -skew-x-12" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-l border-t border-white opacity-60" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-r border-t border-white opacity-60" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-l border-b border-white opacity-60" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-r border-b border-white opacity-60" />

      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </Button>
  )
}
