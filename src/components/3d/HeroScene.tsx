import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const GalaxyParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null)
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    const colors = new Float32Array(1000 * 3)
    
    for (let i = 0; i < 1000; i++) {
      // Create spiral galaxy pattern
      const radius = Math.random() * 4
      const spinAngle = radius * 0.2
      const branchAngle = (i % 3) * ((Math.PI * 2) / 3)
      
      const randomX = (Math.random() - 0.5) * 0.5
      const randomY = (Math.random() - 0.5) * 0.5
      const randomZ = (Math.random() - 0.5) * 0.5
      
      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i * 3 + 1] = randomY
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
      
      // Brown/golden colors
      const brownVariation = Math.random()
      if (brownVariation < 0.3) {
        // Golden brown
        colors[i * 3] = 0.9 + Math.random() * 0.1     // R
        colors[i * 3 + 1] = 0.7 + Math.random() * 0.2 // G
        colors[i * 3 + 2] = 0.4 + Math.random() * 0.2 // B
      } else if (brownVariation < 0.6) {
        // Warm brown
        colors[i * 3] = 0.7 + Math.random() * 0.2     // R
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.2 // G
        colors[i * 3 + 2] = 0.3 + Math.random() * 0.1 // B
      } else {
        // Dark brown
        colors[i * 3] = 0.5 + Math.random() * 0.2     // R
        colors[i * 3 + 1] = 0.3 + Math.random() * 0.2 // G
        colors[i * 3 + 2] = 0.2 + Math.random() * 0.1 // B
      }
    }
    
    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <GalaxyParticles />
      </Canvas>
    </div>
  )
}

export default HeroScene