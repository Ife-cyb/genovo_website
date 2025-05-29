"use client"

import { useEffect, useState } from "react"

interface DataStreamProps {
  direction?: "horizontal" | "vertical"
  speed?: "slow" | "medium" | "fast"
  color?: string
}

export function DataStream({ direction = "horizontal", speed = "medium", color = "#3b82f6" }: DataStreamProps) {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number }>>([])

  useEffect(() => {
    const particleCount = 5
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      delay: i * 0.5,
    }))
    setParticles(newParticles)
  }, [])

  const speedClasses = {
    slow: "duration-[4s]",
    medium: "duration-[3s]",
    fast: "duration-[2s]",
  }

  const directionClasses = {
    horizontal: "w-2 h-px",
    vertical: "w-px h-2",
  }

  return (
    <div className={`relative overflow-hidden ${direction === "horizontal" ? "w-full h-px" : "w-px h-full"}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute data-flow ${directionClasses[direction]} ${speedClasses[speed]}`}
          style={{
            backgroundColor: color,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      ))}
    </div>
  )
}
