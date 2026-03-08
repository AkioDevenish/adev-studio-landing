"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Ambient dust particles ───────────────────────────────────────
const DustParticles: React.FC<{ count?: number }> = ({ count = 300 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;

      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = Math.random() * 0.0015 + 0.0005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }

    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.getAttribute("position");
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];

      if (arr[i * 3 + 1] > 10) {
        arr[i * 3 + 1] = -10;
        arr[i * 3] = (Math.random() - 0.5) * 20;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#888888"
        size={0.015}
        transparent
        opacity={0.3}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

// ─── Orbital Path & Planet ────────────────────────────────────────
const PlanetOrbit: React.FC<{
  radius: number;
  speed: number;
  planetSize: number;
  tiltX: number;
  tiltY: number;
  tiltZ: number;
  startAngle: number;
}> = ({ radius, speed, planetSize, tiltX, tiltY, tiltZ, startAngle }) => {
  const planetRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (planetRef.current) {
      // Orbit around the center
      const t = state.clock.elapsedTime * speed + startAngle;
      planetRef.current.position.x = Math.cos(t) * radius;
      planetRef.current.position.z = Math.sin(t) * radius;
    }
  });

  return (
    <group rotation={[tiltX, tiltY, tiltZ]}>
      {/* The visible thin orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 16, 100]} />
        <meshBasicMaterial color="#999999" transparent opacity={0.15} />
      </mesh>

      {/* The rotating planet */}
      <group ref={planetRef}>
        <mesh>
          <sphereGeometry args={[planetSize, 32, 32]} />
          <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.2} />
        </mesh>
        {/* Subtle glow around the planet */}
        <mesh>
          <sphereGeometry args={[planetSize * 1.8, 16, 16]} />
          <meshBasicMaterial color="#555555" transparent opacity={0.1} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
};

// ─── Central Star (Sun) removed intentionally ───────────────────────

// ─── Interactive Solar System ─────────────────────────────────────
const SolarSystem: React.FC = () => {
  const systemRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (systemRef.current) {
      // Gentle auto-rotation
      const t = state.clock.elapsedTime;
      
      // Interactive mouse follow with smooth interpolation (lerping)
      // This maps the mouse position (-1 to 1) to tilt angles
      const targetRotationX = (state.pointer.y * viewport.height) / 15 + Math.sin(t * 0.1) * 0.1;
      const targetRotationY = (state.pointer.x * viewport.width) / 15 + t * 0.05 + Math.sin(t * 0.05) * 0.1;

      // Smoothly interpolate current rotation to target rotation
      systemRef.current.rotation.x = THREE.MathUtils.lerp(systemRef.current.rotation.x, targetRotationX, 0.05);
      systemRef.current.rotation.y = THREE.MathUtils.lerp(systemRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  // Define our planets with varying orbits
  const planets = useMemo(
    () => [
      { radius: 1.5, speed: 0.4, size: 0.04, tilts: [0.1, 0, 0], angle: 0 },
      { radius: 2.2, speed: 0.25, size: 0.06, tilts: [-0.2, 0.1, 0], angle: 2 },
      { radius: 3.1, speed: 0.15, size: 0.08, tilts: [0.15, -0.1, 0.1], angle: 4 },
      { radius: 4.2, speed: 0.1, size: 0.05, tilts: [-0.05, 0.2, -0.1], angle: 1 },
      { radius: 5.5, speed: 0.08, size: 0.07, tilts: [0.2, -0.2, 0.05], angle: 5 },
      { radius: 7.0, speed: 0.05, size: 0.04, tilts: [-0.15, 0.05, -0.15], angle: 3 },
    ],
    []
  );

  return (
    <group ref={systemRef} position={[0, 0, -2]}>
      {planets.map((p, i) => (
        <PlanetOrbit
          key={i}
          radius={p.radius}
          speed={p.speed}
          planetSize={p.size}
          tiltX={p.tilts[0]}
          tiltY={p.tilts[1]}
          tiltZ={p.tilts[2]}
          startAngle={p.angle}
        />
      ))}
    </group>
  );
};

// ─── Main Scene ───────────────────────────────────────────────────
const HeroScene: React.FC<{ scrollProgress?: number }> = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 2, 12], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <directionalLight position={[-10, -5, -10]} intensity={1} color="#ffffff" />
        
        <DustParticles count={250} />
        <SolarSystem />
      </Canvas>
    </div>
  );
};

export default HeroScene;
