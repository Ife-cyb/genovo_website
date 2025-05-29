"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Sphere } from "@react-three/drei"
import * as THREE from "three"

export default function ProjectVisualization() {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.3
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  // Project nodes representing different categories
  const projectNodes = [
    { pos: [0, 0, 0], color: "#10b981", size: 0.4, label: "SCOS Core" },
    { pos: [3, 1, 0], color: "#3b82f6", size: 0.3, label: "Taskr" },
    { pos: [-3, 1, 0], color: "#10b981", size: 0.3, label: "Homevy" },
    { pos: [0, -3, 1], color: "#8b5cf6", size: 0.25, label: "ProfitQuest" },
    { pos: [2, 0, -2], color: "#06b6d4", size: 0.25, label: "NavierFlow" },
    { pos: [-2, 0, -2], color: "#f59e0b", size: 0.25, label: "Budget Analyzer" },
    { pos: [1, 2, 1], color: "#ef4444", size: 0.2, label: "R&D Tools" },
    { pos: [-1, 2, 1], color: "#ec4899", size: 0.2, label: "Internal Tools" },
  ]

  return (
    <group ref={groupRef}>
      {/* Central SCOS Core */}
      <Box ref={coreRef} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color="#10b981" wireframe />
      </Box>

      {/* Project Ecosystem Nodes */}
      {projectNodes.map((node, index) => (
        <Sphere key={index} args={[node.size]} position={node.pos}>
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}

      {/* Connections between projects */}
      {projectNodes.slice(1).map((node, index) => {
        const start = new THREE.Vector3(0, 0, 0)
        const end = new THREE.Vector3(node.pos[0], node.pos[1], node.pos[2])
        const direction = end.clone().sub(start)
        const length = direction.length()
        const midpoint = direction.clone().multiplyScalar(0.5)

        return (
          <mesh key={index} position={midpoint}>
            <cylinderGeometry args={[0.02, 0.02, length]} />
            <meshStandardMaterial
              color="#10b981"
              transparent
              opacity={0.4}
              emissive="#10b981"
              emissiveIntensity={0.1}
            />
          </mesh>
        )
      })}

      {/* Orbital Data Streams */}
      {Array.from({ length: 30 }).map((_, i) => {
        const angle = (i / 30) * Math.PI * 2
        const radius = 4 + Math.sin(i * 0.5) * 0.5
        const height = Math.sin(angle * 3) * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <Box key={i} args={[0.03, 0.03, 0.03]} position={[x, height, z]}>
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
          </Box>
        )
      })}

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
      <pointLight position={[0, 10, 0]} intensity={0.3} color="#3b82f6" />
    </group>
  )
}
