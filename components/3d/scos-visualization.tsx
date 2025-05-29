"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Sphere } from "@react-three/drei"
import type * as THREE from "three"

export default function SCOSVisualization() {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.3
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Core kernel */}
      <Box ref={coreRef} args={[1.2, 1.2, 1.2]}>
        <meshStandardMaterial color="#10b981" wireframe />
      </Box>

      {/* Security layers */}
      {[1.8, 2.4, 3.0].map((radius, index) => (
        <Sphere key={index} args={[radius, 24, 12]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.08 - index * 0.02} wireframe />
        </Sphere>
      ))}

      {/* Floating modules */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const radius = 2.8
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle * 0.5) * 1.5
        const z = Math.sin(angle) * radius

        return (
          <Box key={i} args={[0.25, 0.25, 0.25]} position={[x, y, z]}>
            <meshStandardMaterial color="#10b981" />
          </Box>
        )
      })}

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 8]} intensity={1} color="#10b981" />
      <pointLight position={[-8, -8, -8]} intensity={0.4} color="#3b82f6" />
    </group>
  )
}
