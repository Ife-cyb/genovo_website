"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

export default function OptimizedGlobe() {
  const globeRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Optimized particle generation
  const particlePositions = useMemo(() => {
    const count = 300 // Reduced from 800 for better performance
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 0.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group>
      {/* Main globe */}
      <Sphere ref={globeRef} args={[2.2, 32, 32]}>
        <meshStandardMaterial color="#1e40af" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Inner core */}
      <Sphere args={[1.6, 16, 16]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.15} />
      </Sphere>

      {/* Optimized particle field */}
      <Points ref={particlesRef} positions={particlePositions} stride={3} frustumCulled>
        <PointMaterial transparent color="#3b82f6" size={0.015} sizeAttenuation depthWrite={false} />
      </Points>

      {/* Simplified lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
    </group>
  )
}
