"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Device capability detection ──────────────────────────────────
function useDeviceTier(): "high" | "medium" | "low" | "none" {
  // Always return 'high' to prevent Google Chrome from aggressively falling back
  // to the CSS-only version if hardware detection returns weird values.
  return "high";
}

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
  segments: number;
}> = ({ radius, speed, planetSize, tiltX, tiltY, tiltZ, startAngle, segments }) => {
  const planetRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);
    timeRef.current += safeDelta;

    if (planetRef.current) {
      // Orbit around the center
      const t = timeRef.current * speed + startAngle;
      planetRef.current.position.x = Math.cos(t) * radius;
      planetRef.current.position.z = Math.sin(t) * radius;
    }
  });

  return (
    <group rotation={[tiltX, tiltY, tiltZ]}>
      {/* The visible thin orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 8, segments]} />
        <meshBasicMaterial color="#999999" transparent opacity={0.15} />
      </mesh>

      {/* The rotating planet */}
      <group ref={planetRef}>
        <mesh>
          <sphereGeometry args={[planetSize, segments, segments]} />
          <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.2} />
        </mesh>
        {/* Subtle glow around the planet */}
        <mesh>
          <sphereGeometry args={[planetSize * 1.8, Math.max(8, segments / 2), Math.max(8, segments / 2)]} />
          <meshBasicMaterial color="#555555" transparent opacity={0.1} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
};

// ─── Interactive Solar System ─────────────────────────────────────
const SolarSystem: React.FC<{ segments: number }> = ({ segments }) => {
  const systemRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);
    timeRef.current += safeDelta;

    if (systemRef.current) {
      const t = timeRef.current;
      
      // Base orientation to match the specific diagonal startup angle requested
      const baseRotationX = 0.45;  // Pitch: flatter ellipses
      const baseRotationY = -0.2; // Yaw: slight angle
      const baseRotationZ = 0.45;  // Roll: right side higher than left side

      // Interactive mouse follow with smooth interpolation (lerping)
      const targetRotationX = baseRotationX + (state.pointer.y * viewport.height) / 20 + Math.sin(t * 0.1) * 0.05;
      const targetRotationY = baseRotationY + (state.pointer.x * viewport.width) / 20 + t * 0.02;
      const targetRotationZ = baseRotationZ + Math.sin(t * 0.05) * 0.05;

      // Smoothly interpolate current rotation to target rotation
      systemRef.current.rotation.x = THREE.MathUtils.lerp(systemRef.current.rotation.x, targetRotationX, 0.05);
      systemRef.current.rotation.y = THREE.MathUtils.lerp(systemRef.current.rotation.y, targetRotationY, 0.05);
      systemRef.current.rotation.z = THREE.MathUtils.lerp(systemRef.current.rotation.z, targetRotationZ, 0.05);
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
          segments={segments}
        />
      ))}
    </group>
  );
};

// ─── CSS-only fallback for devices that can't handle WebGL ────────
const StaticFallback: React.FC = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Subtle orbital ring decorations using CSS */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {[200, 300, 420, 560, 720].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-foreground/[0.06]"
          style={{
            width: size,
            height: size,
            top: `${-size / 2}px`,
            left: `${-size / 2}px`,
            transform: `rotate(${i * 15 + 20}deg) rotateX(${55 + i * 3}deg)`,
          }}
        />
      ))}
    </div>
    {/* Subtle floating dots */}
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-foreground/10 animate-pulse"
        style={{
          top: `${15 + Math.random() * 70}%`,
          left: `${10 + Math.random() * 80}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

// ─── Main Scene ───────────────────────────────────────────────────
const HeroScene: React.FC<{ scrollProgress?: number }> = () => {
  const tier = useDeviceTier();

  // Tier-based quality settings
  const config = useMemo(() => {
    switch (tier) {
      case "none":
        return null; // Will render CSS fallback
      case "low":
        return { particles: 60, segments: 12, dpr: 0.75 };
      case "medium":
        return { particles: 120, segments: 20, dpr: 1 };
      case "high":
      default:
        return { particles: 250, segments: 32, dpr: [1, 1.5] as [number, number] };
    }
  }, [tier]);

  // Show CSS fallback if WebGL isn't supported or device is too weak
  if (!config) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 2, 12], fov: 45 }}
        style={{ background: "transparent" }}
        dpr={config.dpr}
        gl={{
          antialias: tier === "high",
          alpha: true,
          powerPreference: tier === "high" ? "high-performance" : "low-power",
        }}
        // Performance: limit frame rate on lower-tier devices
        frameloop="always"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        {tier === "high" && (
          <directionalLight position={[-10, -5, -10]} intensity={1} color="#ffffff" />
        )}
        
        <DustParticles count={config.particles} />
        <SolarSystem segments={config.segments} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
