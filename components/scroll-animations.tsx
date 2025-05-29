"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fadeInUp", delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClasses = {
    fadeInUp: "translate-y-8 opacity-0 transition-all duration-700 ease-out",
    fadeInLeft: "-translate-x-8 opacity-0 transition-all duration-700 ease-out",
    fadeInRight: "translate-x-8 opacity-0 transition-all duration-700 ease-out",
    fadeIn: "opacity-0 transition-all duration-700 ease-out",
    scaleIn: "scale-95 opacity-0 transition-all duration-700 ease-out",
  }

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${className}`}
      style={{
        transform: "translateY(32px)",
        opacity: 0,
      }}
    >
      {children}
      <style jsx>{`
        .animate-in {
          transform: translateY(0) translateX(0) scale(1) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  )
}
