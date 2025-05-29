"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

export default function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.Group>(null)

  // Generate neural network nodes with proper validation
  const { positions, connections } = useMemo(() => {
    const nodeCount = Math.max(50, 100) // Ensure minimum node count
    const positionsArray = new Float32Array(nodeCount * 3)
    const connections: Array<[number, number]> = []

    // Create nodes in 3D space with bounds checking
    for (let i = 0; i < nodeCount; i++) {
      const index = i * 3
      if (index + 2 < positionsArray.length) {
        positionsArray[index] = (Math.random() - 0.5) * 12
        positionsArray[index + 1] = (Math.random() - 0.5) * 12
        positionsArray[index + 2] = (Math.random() - 0.5) * 12
      }
    }

    // Create connections between nearby nodes with validation
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (i * 3 + 2 < positionsArray.length && j * 3 + 2 < positionsArray.length) {
          const dx = positionsArray[i * 3] - positionsArray[j * 3]
          const dy = positionsArray[i * 3 + 1] - positionsArray[j * 3 + 1]
          const dz = positionsArray[i * 3 + 2] - positionsArray[j * 3 + 2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 3 && Math.random() > 0.8 && connections.length < 100) {
            connections.push([i, j])
          }
        }
      }
    }

    return { positions: positionsArray, connections }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.1
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.1
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  // Validate positions array before rendering
  if (!positions || positions.length === 0) {
    return null
  }

  return (
    <group>
      {/* Neural nodes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#3b82f6" size={0.08} sizeAttenuation={true} depthWrite={false} />
      </Points>

      {/* Neural connections */}
      <group ref={linesRef}>
        {connections.slice(0, 50).map(([start, end], index) => {
          // Validate indices
          if (start * 3 + 2 >= positions.length || end * 3 + 2 >= positions.length) {
            return null
          }

          const startPos = new THREE.Vector3(
            positions[start * 3] || 0,
            positions[start * 3 + 1] || 0,
            positions[start * 3 + 2] || 0,
          )
          const endPos = new THREE.Vector3(
            positions[end * 3] || 0,
            positions[end * 3 + 1] || 0,
            positions[end * 3 + 2] || 0,
          )

          return (
            <mesh key={index} position={startPos.clone().lerp(endPos, 0.5)}>
              <cylinderGeometry args={[0.005, 0.005, startPos.distanceTo(endPos)]} />
              <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
            </mesh>
          )
        })}
      </group>

      {/* Ambient lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
    </group>
  )
}
