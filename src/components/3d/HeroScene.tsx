"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Twinkling background stars (grey on cream) ───────────────────
const StarField: React.FC<{ count?: number }> = ({ count = 800 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, sizes, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const ph = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 6 + Math.random() * 20;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      sz[i] = Math.random() * 2.0 + 0.4;
      ph[i] = Math.random() * Math.PI * 2;
    }

    return { positions: pos, sizes: sz, phases: ph };
  }, [count]);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#999999") },
      },
      vertexShader: `
        attribute float aSize;
        attribute float aPhase;
        uniform float uTime;
        varying float vAlpha;
        varying float vRotation;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float twinkle = sin(uTime * 0.8 + aPhase) * 0.5 + 0.5;
          float slowTwinkle = sin(uTime * 0.3 + aPhase * 2.0) * 0.3 + 0.7;
          vAlpha = twinkle * slowTwinkle * 0.5 + 0.05;
          vRotation = aPhase + uTime * 0.05;
          gl_PointSize = aSize * 2.0 * (150.0 / -mvPosition.z) * (twinkle * 0.5 + 0.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;
        varying float vRotation;
        void main() {
          vec2 p = (gl_PointCoord - 0.5) * 2.0;
          float c = cos(vRotation);
          float s = sin(vRotation);
          vec2 rp = vec2(p.x * c - p.y * s, p.x * s + p.y * c);

          // Star/flare shape
          float thickness = 0.05;
          float star = (thickness / (abs(rp.x) + thickness)) * (thickness / (abs(rp.y) + thickness));
          
          float d = length(p);
          star *= smoothstep(1.0, 0.2, d); // fade out at edges

          float core = smoothstep(1.0, 0.0, d);
          core = pow(core, 2.0);

          float alpha = (star * 1.5 + core * 0.8) * vAlpha;
          if (alpha < 0.01) discard;

          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime;
      pointsRef.current.rotation.y += 0.00008;
      pointsRef.current.rotation.x += 0.00003;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    return geo;
  }, [positions, sizes, phases]);

  return <points ref={pointsRef} geometry={geometry} material={shaderMaterial} />;
};

// ─── Constellation node (grey glowing dot) ────────────────────────
const ConstellationNode: React.FC<{
  position: [number, number, number];
  size?: number;
  pulseSpeed?: number;
  delay?: number;
}> = ({ position, size = 0.06, pulseSpeed = 1.2, delay = 0 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pulse = Math.sin(t * pulseSpeed + delay) * 0.3 + 0.8;

    if (meshRef.current) {
      meshRef.current.scale.setScalar(pulse);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(pulse * 2.5);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.08 + Math.sin(t * pulseSpeed * 0.5 + delay) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Core point */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 12, 12]} />
        <meshBasicMaterial color="#888888" transparent opacity={0.6} />
      </mesh>
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 2.5, 12, 12]} />
        <meshBasicMaterial
          color="#aaaaaa"
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

// ─── Constellation lines (grey) ───────────────────────────────────
const ConstellationLines: React.FC<{
  nodes: [number, number, number][];
  connections: [number, number][];
}> = ({ nodes, connections }) => {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    return connections.map(([a, b]) => {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array([
        nodes[a][0], nodes[a][1], nodes[a][2],
        nodes[b][0], nodes[b][1], nodes[b][2],
      ]);
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.LineBasicMaterial({
        color: "#999999",
        transparent: true,
        opacity: 0.0,
        depthWrite: false,
      });

      return new THREE.Line(geo, mat);
    });
  }, [nodes, connections]);

  useEffect(() => {
    if (!groupRef.current) return;
    lines.forEach((line) => groupRef.current!.add(line));
    return () => {
      lines.forEach((line) => {
        groupRef.current?.remove(line);
        line.geometry.dispose();
        (line.material as THREE.LineBasicMaterial).dispose();
      });
    };
  }, [lines]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    lines.forEach((line, i) => {
      const mat = line.material as THREE.LineBasicMaterial;
      const fadeIn = Math.min(1, Math.max(0, (t - 1.5 - i * 0.15) * 0.8));
      const pulse = Math.sin(t * 0.6 + i * 0.5) * 0.04 + 0.18;
      mat.opacity = fadeIn * pulse;
    });
  });

  return <group ref={groupRef} />;
};

// ─── Shooting star (subtle grey streak) ───────────────────────────
const ShootingStar: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const trailRef = useRef<THREE.Mesh>(null);

  const config = useMemo(() => ({
    interval: 7 + Math.random() * 10,
    offset: Math.random() * 12,
    speed: 10 + Math.random() * 5,
    angle: -0.3 - Math.random() * 0.4,
    startX: -5 + Math.random() * 10,
    startY: 3 + Math.random() * 3,
    startZ: -3 - Math.random() * 4,
  }), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime + config.offset;
    const cycle = t % config.interval;
    const progress = cycle / 0.7;

    if (meshRef.current && trailRef.current) {
      if (progress >= 0 && progress <= 1) {
        const x = config.startX + progress * config.speed * Math.cos(config.angle);
        const y = config.startY + progress * config.speed * Math.sin(config.angle);

        meshRef.current.position.set(x, y, config.startZ);
        meshRef.current.visible = true;
        trailRef.current.position.set(x - 0.3, y + 0.12, config.startZ);
        trailRef.current.visible = true;

        const fade = progress < 0.3 ? progress / 0.3 : 1 - (progress - 0.3) / 0.7;
        (meshRef.current.material as THREE.MeshBasicMaterial).opacity = fade * 0.5;
        (trailRef.current.material as THREE.MeshBasicMaterial).opacity = fade * 0.15;
        trailRef.current.scale.x = 1 + progress * 3;
      } else {
        meshRef.current.visible = false;
        trailRef.current.visible = false;
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef} visible={false}>
        <sphereGeometry args={[0.02, 6, 6]} />
        <meshBasicMaterial color="#888888" transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh ref={trailRef} visible={false} rotation={[0, 0, config.angle]}>
        <planeGeometry args={[0.6, 0.012]} />
        <meshBasicMaterial
          color="#aaaaaa"
          transparent
          opacity={0}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// ─── Ambient dust particles ───────────────────────────────────────
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
        opacity={0.2}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

// ─── Main constellation group ─────────────────────────────────────
const ConstellationSystem: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Constellation node positions
  const nodes: [number, number, number][] = useMemo(
    () => [
      // Central cluster
      [0, 0.5, 0],
      [-0.8, 1.2, -0.3],
      [0.9, 1.4, 0.2],
      [1.5, 0.3, -0.1],
      [0.6, -0.7, 0.3],
      [-0.5, -0.5, -0.2],
      [-1.4, 0.2, 0.1],

      // Outer ring
      [-2.2, 1.8, -0.5],
      [0.2, 2.5, -0.4],
      [2.3, 1.8, 0.3],
      [2.8, -0.2, -0.3],
      [1.8, -1.8, 0.2],
      [-0.3, -2.0, -0.1],
      [-2.0, -1.2, 0.4],
      [-2.8, 0.8, -0.2],

      // Far points
      [-3.5, 2.5, -0.8],
      [3.2, 2.8, -0.6],
      [3.8, -1.2, 0.4],
      [-3.2, -2.2, 0.3],
      [0.5, 3.5, -0.7],
      [-1.5, -3.0, 0.5],
    ],
    []
  );

  const connections: [number, number][] = useMemo(
    () => [
      // Inner web
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
      [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],

      // Inner to outer
      [1, 7], [1, 8], [2, 8], [2, 9],
      [3, 9], [3, 10], [4, 10], [4, 11],
      [5, 12], [5, 13], [6, 13], [6, 14],

      // Outer connections
      [7, 8], [8, 9], [9, 10], [10, 11],
      [11, 12], [12, 13], [13, 14], [14, 7],

      // Far extensions
      [7, 15], [8, 19], [9, 16], [10, 17],
      [12, 20], [13, 18],
    ],
    []
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.03) * 0.02;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <ConstellationLines nodes={nodes} connections={connections} />
      {nodes.map((pos, i) => (
        <ConstellationNode
          key={i}
          position={pos}
          size={i < 7 ? 0.06 : i < 15 ? 0.04 : 0.03}
          pulseSpeed={0.8 + Math.random() * 0.8}
          delay={i * 0.4}
        />
      ))}
    </group>
  );
};

// ─── Camera drift ─────────────────────────────────────────────────
const CameraDrift: React.FC = () => {
  const { camera } = useThree();
  const initialPos = useRef(camera.position.clone());

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x = initialPos.current.x + Math.sin(t * 0.1) * 0.15;
    camera.position.y = initialPos.current.y + Math.sin(t * 0.08) * 0.1;
  });

  return null;
};

// ─── Main scene ───────────────────────────────────────────────────
const HeroScene: React.FC<{ scrollProgress?: number }> = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <CameraDrift />
        <StarField count={1000} />
        <ConstellationSystem />
        <DustParticles count={150} />
        <ShootingStar />
        <ShootingStar />
      </Canvas>
    </div>
  );
};

export default HeroScene;
