"use client";

import React from "react";

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
  className?: string;
}

/**
 * Lightweight noise overlay using an SVG feTurbulence filter.
 * This replaces the previous canvas-based approach that generated
 * pixel-by-pixel ImageData (width * height * 4 bytes) every 2 seconds,
 * which caused freezing on lower-end devices.
 *
 * The SVG filter is GPU-accelerated and renders in a single pass.
 */
const Noise: React.FC<NoiseProps> = ({
  patternAlpha = 30,
  className = "",
}) => {
  const opacity = patternAlpha / 100;

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ mixBlendMode: "multiply" }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noise-filter)"
          opacity={opacity}
        />
      </svg>
    </div>
  );
};

export default Noise;
