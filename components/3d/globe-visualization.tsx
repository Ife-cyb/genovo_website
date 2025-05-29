"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

export default function GlobeVisualization() {
  const globeRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Generate particles around the globe with validation
  const particlePositions = useMemo(() => {
    const particleCount = 800
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3
      if (index + 2 < positions.length) {
        const radius = 3 + Math.random() * 1.5
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI

        positions[index] = radius * Math.sin(phi) * Math.cos(theta)
        positions[index + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[index + 2] = radius * Math.cos(phi)
      }
    }

    return positions
  }, [])

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
    }
  })

  // Validate particle positions
  if (!particlePositions || particlePositions.length === 0) {
    return (
      <group>
        <Sphere ref={globeRef} args={[2.5, 32, 32]}>
          <meshStandardMaterial color="#1a1a1a" wireframe transparent opacity={0.3} />
        </Sphere>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      </group>
    )
  }

  return (
    <group>
      {/* Main globe */}
      <Sphere ref={globeRef} args={[2.5, 64, 64]}>
        <meshStandardMaterial color="#1a1a1a" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Inner core */}
      <Sphere args={[1.8, 32, 32]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.2} emissive="#3b82f6" emissiveIntensity={0.1} />
      </Sphere>

      {/* Particle field */}
      <Points ref={particlesRef} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#3b82f6" size={0.02} sizeAttenuation={true} depthWrite={false} />
      </Points>

      {/* Data streams */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2
        const radius = 4
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <mesh key={i} position={[x, 0, z]}>
            <cylinderGeometry args={[0.008, 0.008, 6]} />
            <meshStandardMaterial
              color="#3b82f6"
              transparent
              opacity={0.4}
              emissive="#3b82f6"
              emissiveIntensity={0.2}
            />
          </mesh>
        )
      })}

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
    </group>
  )
}
