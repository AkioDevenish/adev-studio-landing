"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Camera drift ─────────────────────────────────────────────────
const CameraDrift: React.FC = () => {
  const { camera } = useThree();
  const initialPos = useRef(camera.position.clone());

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x = initialPos.current.x + Math.sin(t * 0.1) * 0.2;
    camera.position.y = initialPos.current.y + Math.sin(t * 0.08) * 0.15;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// ─── Ambient dust particles (grey) ────────────────────────────────
const DustParticles: React.FC<{ count?: number }> = ({ count = 150 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

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

      if (arr[i * 3 + 1] > 6) {
        arr[i * 3 + 1] = -6;
        arr[i * 3] = (Math.random() - 0.5) * 14;
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
        color="#999999"
        size={0.012}
        transparent
        opacity={0.3}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

// ─── Nucleus (cluster of spheres) ─────────────────────────────────
const Nucleus: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const spheres = useMemo(() => {
    const items = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      // Golden spiral distribution for a nice spherical cluster
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      const r = 0.25 + Math.random() * 0.1;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      const color = i % 2 === 0 ? "#1a1a1a" : "#444444";
      items.push({ pos: [x, y, z] as [number, number, number], color });
    }
    return items;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
      groupRef.current.rotation.z = t * 0.1;
    }
    if (glowRef.current) {
      const pulse = Math.sin(t * 1.5) * 0.05 + 0.15;
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = pulse;
      glowRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
    }
  });

  return (
    <group>
      <group ref={groupRef}>
        {spheres.map((s, i) => (
          <mesh key={i} position={s.pos}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color={s.color} roughness={0.7} metalness={0.2} />
          </mesh>
        ))}
      </group>
      {/* Central glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#888888" transparent opacity={0.15} depthWrite={false} />
      </mesh>
    </group>
  );
};

// ─── Electron orbit ring & particle ───────────────────────────────
const ElectronRing: React.FC<{
  rotation: [number, number, number];
  speed: number;
  radius: number;
  electronSize: number;
  electronColor: string;
}> = ({ rotation, speed, radius, electronSize, electronColor }) => {
  const electronGrpRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (electronGrpRef.current) {
      electronGrpRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group rotation={rotation}>
      {/* Orbit path */}
      <mesh>
        <torusGeometry args={[radius, 0.005, 16, 100]} />
        <meshBasicMaterial color="#aaaaaa" transparent opacity={0.3} />
      </mesh>
      
      {/* Orbiting electron */}
      <group ref={electronGrpRef}>
        <group position={[radius, 0, 0]}>
          <mesh>
            <sphereGeometry args={[electronSize, 16, 16]} />
            <meshStandardMaterial color={electronColor} roughness={0.4} metalness={0.3} />
          </mesh>
          <mesh>
            <sphereGeometry args={[electronSize * 2.2, 16, 16]} />
            <meshBasicMaterial color={electronColor} transparent opacity={0.15} depthWrite={false} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

// ─── Main Atom System ─────────────────────────────────────────────
const AtomSystem: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.8}>
      <Nucleus />
      
      {/* Multiple electron rings with varying angles, speeds, and radii */}
      <ElectronRing 
        rotation={[Math.PI / 2.5, Math.PI / 6, 0]} 
        speed={0.8} 
        radius={1.4} 
        electronSize={0.08}
        electronColor="#1a1a1a"
      />
      <ElectronRing 
        rotation={[-Math.PI / 3, -Math.PI / 4, 0]} 
        speed={-0.6} 
        radius={1.8} 
        electronSize={0.1}
        electronColor="#444444"
      />
      <ElectronRing 
        rotation={[Math.PI / 6, Math.PI / 2, Math.PI / 4]} 
        speed={1.0} 
        radius={2.2} 
        electronSize={0.06}
        electronColor="#1a1a1a"
      />
      <ElectronRing 
        rotation={[-Math.PI / 8, Math.PI / 3, -Math.PI / 6]} 
        speed={-0.45} 
        radius={2.6} 
        electronSize={0.09}
        electronColor="#333333"
      />
    </group>
  );
};

// ─── Main scene ───────────────────────────────────────────────────
const HeroScene: React.FC<{ scrollProgress?: number }> = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <directionalLight position={[-10, -5, -10]} intensity={1} color="#ffffff" />
        
        <CameraDrift />
        <DustParticles count={250} />
        <AtomSystem />
      </Canvas>
    </div>
  );
};

export default HeroScene;
