"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: string;
  className?: string;
  delay?: number;
}

export default function CountUp({ value, className = "", delay = 0 }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const numericPart = value.replace(/[^0-9.]/g, "");
  const suffix = value.replace(/[0-9.]/g, "");
  const numValue = parseFloat(numericPart) || 0;

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    if (numValue % 1 !== 0) return latest.toFixed(1);
    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, numValue, {
        duration: 2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, motionValue, numValue, delay]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
