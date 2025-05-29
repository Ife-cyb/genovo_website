"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

export default function AnimatedGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.Material>(null)

  // Create points for the globe
  const points = useMemo(() => {
    const p = []
    for (let i = 0; i < 1000; i++) {
      const radius = 2
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      const x = radius * Math.sin(theta) * Math.cos(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(theta)

      p.push(new THREE.Vector3(x, y, z))
    }
    return p
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
  })

  return (
    <group>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.9}
          transparent
          opacity={0.8}
        />
      </Sphere>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.005]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
} 