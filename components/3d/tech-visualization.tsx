"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Sphere } from "@react-three/drei"
import * as THREE from "three"

export default function TechVisualization() {
  const groupRef = useRef<THREE.Group>(null)
  const nodesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (nodesRef.current) {
      nodesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  // Create network nodes
  const nodes = [
    { pos: [0, 0, 0], color: "#10b981", size: 0.3 },
    { pos: [2, 1, 0], color: "#3b82f6", size: 0.2 },
    { pos: [-2, 1, 0], color: "#f59e0b", size: 0.2 },
    { pos: [0, -2, 1], color: "#ef4444", size: 0.2 },
    { pos: [1.5, 0, -1.5], color: "#8b5cf6", size: 0.2 },
    { pos: [-1.5, 0, -1.5], color: "#06b6d4", size: 0.2 },
  ]

  return (
    <group ref={groupRef}>
      <group ref={nodesRef}>
        {/* Network Nodes */}
        {nodes.map((node, index) => (
          <Sphere key={index} args={[node.size]} position={node.pos}>
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.2} />
          </Sphere>
        ))}

        {/* Connections */}
        {nodes.slice(1).map((node, index) => {
          const start = new THREE.Vector3(0, 0, 0)
          const end = new THREE.Vector3(node.pos[0], node.pos[1], node.pos[2])
          const direction = end.clone().sub(start)
          const length = direction.length()
          const midpoint = direction.clone().multiplyScalar(0.5)

          return (
            <mesh key={index} position={midpoint}>
              <cylinderGeometry args={[0.01, 0.01, length]} />
              <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
            </mesh>
          )
        })}

        {/* Data Flow Particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2
          const radius = 3 + Math.sin(i) * 0.5
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle * 2) * 1
          const z = Math.sin(angle) * radius

          return (
            <Box key={i} args={[0.05, 0.05, 0.05]} position={[x, y, z]}>
              <meshStandardMaterial color="#10b981" />
            </Box>
          )
        })}
      </group>

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#10b981" />
    </group>
  )
}
