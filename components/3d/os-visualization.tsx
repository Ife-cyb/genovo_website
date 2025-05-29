"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Sphere } from "@react-three/drei"
import type * as THREE from "three"

export default function OSVisualization() {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.5
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Core OS Kernel */}
      <Box ref={coreRef} args={[1, 1, 1]}>
        <meshStandardMaterial color="#10b981" wireframe />
      </Box>

      {/* Security Layers */}
      {[1.5, 2, 2.5].map((radius, index) => (
        <Sphere key={index} args={[radius, 32, 16]}>
          <meshStandardMaterial color="#1A1A1A" transparent opacity={Math.max(0.05, 0.1 - index * 0.02)} wireframe />
        </Sphere>
      ))}

      {/* Floating Code Blocks */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 3
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle * 0.5) * 2
        const z = Math.sin(angle) * radius

        return (
          <Box key={i} args={[0.3, 0.3, 0.3]} position={[x, y, z]}>
            <meshStandardMaterial color="#10b981" />
          </Box>
        )
      })}

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
    </group>
  )
}
