"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Tooltip state management
let tooltipCallback: ((data: { 
  name: string; 
  url: string; 
  type: string; 
  x: number; 
  y: number;
  description?: string;
  tech?: string[];
  year?: string;
} | null) => void) | null = null;

export function setTooltipCallback(callback: typeof tooltipCallback) {
  tooltipCallback = callback;
}

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
  project?: {
    name: string;
    url: string;
    type: string;
    favicon?: string;
    description?: string;
    tech?: string[];
    year?: string;
  };
}> = ({ radius, speed, planetSize, tiltX, tiltY, tiltZ, startAngle, segments, project }) => {
  const planetRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  const [hovered, setHovered] = React.useState(false);
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);

  // Load favicon texture
  React.useEffect(() => {
    if (project?.favicon) {
      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin('anonymous');
      loader.load(
        project.favicon,
        (loadedTexture) => {
          loadedTexture.colorSpace = THREE.SRGBColorSpace;
          setTexture(loadedTexture);
        },
        undefined,
        (error) => {
          console.warn(`Failed to load texture for ${project.name}:`, error);
        }
      );
    }
  }, [project?.favicon, project?.name]);

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);
    timeRef.current += safeDelta;

    if (planetRef.current) {
      // Orbit around the center
      const t = timeRef.current * speed + startAngle;
      planetRef.current.position.x = Math.cos(t) * radius;
      planetRef.current.position.z = Math.sin(t) * radius;
      
      // Gentle rotation to face camera
      planetRef.current.rotation.y = -t + Math.PI / 2;
    }
  });

  return (
    <group rotation={[tiltX, tiltY, tiltZ]}>
      {/* The visible thin orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 8, 256]} />
        <meshBasicMaterial color="#999999" transparent opacity={0.15} />
      </mesh>

      {/* The rotating planet */}
      <group 
        ref={planetRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
          if (tooltipCallback && project) {
            const rect = e.nativeEvent;
            tooltipCallback({
              name: project.name,
              url: project.url,
              type: project.type,
              x: rect.clientX,
              y: rect.clientY,
              description: project.description,
              tech: project.tech,
              year: project.year
            });
          }
        }}
        onPointerMove={(e) => {
          e.stopPropagation();
          if (tooltipCallback && project && hovered) {
            const rect = e.nativeEvent;
            tooltipCallback({
              name: project.name,
              url: project.url,
              type: project.type,
              x: rect.clientX,
              y: rect.clientY,
              description: project.description,
              tech: project.tech,
              year: project.year
            });
          }
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'auto';
          if (tooltipCallback) {
            tooltipCallback(null);
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (project?.url) {
            window.open(project.url, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        {/* Invisible larger hitbox sphere for easier hovering */}
        <mesh visible={false}>
          <sphereGeometry args={[planetSize * 3, 8, 8]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Background sphere */}
        <mesh>
          <sphereGeometry args={[planetSize, segments, segments]} />
          <meshStandardMaterial 
            color={hovered ? "#f5f5f5" : "#e8e8e8"} 
            roughness={0.4} 
            metalness={0.1}
            emissive={hovered ? "#666666" : "#000000"}
            emissiveIntensity={hovered ? 0.2 : 0}
          />
        </mesh>

        {/* Favicon texture as a sprite/plane on top */}
        {texture && (
          <sprite scale={[planetSize * 1.6, planetSize * 1.6, 1]}>
            <spriteMaterial 
              map={texture} 
              transparent 
              opacity={1}
              depthTest={false}
            />
          </sprite>
        )}

        {/* Subtle glow around the planet */}
        <mesh>
          <sphereGeometry args={[planetSize * 1.8, Math.max(8, segments / 2), Math.max(8, segments / 2)]} />
          <meshBasicMaterial 
            color={hovered ? "#888888" : "#555555"} 
            transparent 
            opacity={hovered ? 0.2 : 0.1} 
            depthWrite={false} 
          />
        </mesh>
      </group>
    </group>
  );
};

// ─── Interactive Solar System ─────────────────────────────────────
const SolarSystem: React.FC<{ segments: number }> = ({ segments }) => {
  const systemRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);
    timeRef.current += safeDelta;

    if (systemRef.current) {
      const t = timeRef.current;
      
      // Base orientation - fixed, no mouse interaction
      const baseRotationX = 0.45;  // Pitch: flatter ellipses
      const baseRotationY = -0.2;  // Yaw: slight angle
      const baseRotationZ = 0.45;  // Roll: right side higher than left side

      // Gentle automatic rotation only
      const targetRotationX = baseRotationX + Math.sin(t * 0.1) * 0.05;
      const targetRotationY = baseRotationY + t * 0.02;
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
      { 
        radius: 1.5, 
        speed: 0.4, 
        size: 0.08,  // Increased from 0.04
        tilts: [0.1, 0, 0], 
        angle: 0,
        project: {
          name: "Met Office Trinidad & Tobago",
          url: "https://www.metoffice.gov.tt/",
          type: "Government Portal",
          favicon: "https://www.metoffice.gov.tt/favicon.ico",
          description: "National weather forecasting and climate services platform",
          tech: ["Next.js", "TypeScript", "Tailwind"],
          year: "2024"
        }
      },
      { 
        radius: 2.2, 
        speed: 0.25, 
        size: 0.09,  // Increased from 0.06
        tilts: [-0.2, 0.1, 0], 
        angle: 2,
        project: {
          name: "Lume Refillery",
          url: "https://lumerefillery.com/",
          type: "E-commerce",
          favicon: "https://lumerefillery.com/favicon.ico",
          description: "Sustainable refill station and eco-friendly product marketplace",
          tech: ["React", "Shopify", "Stripe"],
          year: "2024"
        }
      },
      { 
        radius: 3.1, 
        speed: 0.15, 
        size: 0.08, 
        tilts: [0.15, -0.1, 0.1], 
        angle: 4,
        project: {
          name: "SkySign",
          url: "https://skysign-gamma.vercel.app/",
          type: "Web App",
          favicon: "https://skysign-gamma.vercel.app/favicon.ico",
          description: "Digital signage management and content delivery platform",
          tech: ["Next.js", "React", "WebGL"],
          year: "2024"
        }
      },
      { 
        radius: 4.2, 
        speed: 0.1, 
        size: 0.07,  // Increased from 0.05
        tilts: [-0.05, 0.2, -0.1], 
        angle: 1,
        project: {
          name: "Coming Soon",
          url: "",
          type: "In Development",
          description: "Exciting new project in the works",
          tech: [],
          year: "2026"
        }
      },
      { 
        radius: 5.5, 
        speed: 0.08, 
        size: 0.07, 
        tilts: [0.2, -0.2, 0.05], 
        angle: 5,
        project: {
          name: "Coming Soon",
          url: "",
          type: "In Development",
          description: "Another great project coming your way",
          tech: [],
          year: "2026"
        }
      },
      { 
        radius: 7.0, 
        speed: 0.05, 
        size: 0.06,  // Increased from 0.04
        tilts: [-0.15, 0.05, -0.15], 
        angle: 3,
        project: {
          name: "Coming Soon",
          url: "",
          type: "In Development",
          description: "Stay tuned for more amazing work",
          tech: [],
          year: "2026"
        }
      },
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
          project={p.project}
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
