"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SplitText from "@/components/reactbits/SplitText";
import dynamic from "next/dynamic";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-background" />
  ),
});

export default function AgencyHero() {
  const [tooltip, setTooltip] = useState<{
    name: string;
    url: string;
    type: string;
    x: number;
    y: number;
    description?: string;
    tech?: string[];
    year?: string;
  } | null>(null);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Dynamically import and set the tooltip callback
    import("@/components/3d/HeroScene").then((module) => {
      module.setTooltipCallback((data) => {
        setTooltip(data);
        setIsHovering(!!data);
      });
    });

    return () => {
      import("@/components/3d/HeroScene").then((module) => {
        module.setTooltipCallback(null);
      });
    };
  }, []);
  return (
    <section
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* 3D Constellation Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      
      <div className="z-10 text-center px-4 w-full pointer-events-none">
        <div className="relative mb-6 w-full flex justify-center">
          <SplitText
            text="ADEVSTUDIO"
            className="relative z-10 text-[14vw] md:text-[12vw] lg:text-[11rem] font-display font-bold tracking-tighter text-foreground leading-[0.8] whitespace-nowrap"
            delay={100}
            duration={1.2}
            ease="circ.out"
            splitType="chars"
            from={{ opacity: 0, y: 100 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-display font-light tracking-wide leading-relaxed">
            Design and development agency
          </p>
        </motion.div>
      </div>

      {/* Interactive Hint - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isHovering ? 0 : 1, x: isHovering ? -20 : 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden lg:block fixed left-4 xl:left-8 top-[22%] z-20 max-w-[200px] xl:max-w-[240px]"
      >
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute -left-4 xl:-left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
          
          <div className="space-y-3 xl:space-y-4">
            {/* Label */}
            <div className="flex items-center gap-2 xl:gap-2.5">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500/40 animate-ping" />
              </div>
              <span className="text-[9px] xl:text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/50">
                Interactive
              </span>
            </div>
            
            {/* Message */}
            <p className="text-sm xl:text-base font-display text-foreground/70 leading-relaxed">
              Hover over the orbiting spheres to explore our projects
            </p>

            {/* Animated cursor hint */}
            <div className="flex items-center gap-2 xl:gap-2.5 text-foreground/50">
              <svg 
                className="w-4 xl:w-5 h-4 xl:h-5 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
              <span className="text-[10px] xl:text-xs font-mono">Try it</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Media Icons - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-6 md:bottom-8 right-4 md:right-8 z-20 flex gap-2 md:gap-3"
      >
        {/* Twitter */}
        <motion.a
          href="https://x.com/Helloadevstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden"
          aria-label="Twitter"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="absolute inset-0 bg-foreground/[0.08] group-hover:bg-foreground/[0.15] transition-colors duration-300"
            style={{
              borderRadius: '48% 52% 51% 49% / 43% 47% 53% 57%',
            }}
          />
          <Twitter size={16} className="md:w-[17px] md:h-[17px] relative z-10 text-foreground/70 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com/helloadevstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden"
          aria-label="Instagram"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="absolute inset-0 bg-foreground/[0.08] group-hover:bg-foreground/[0.15] transition-colors duration-300"
            style={{
              borderRadius: '52% 48% 47% 53% / 51% 43% 57% 49%',
            }}
          />
          <Instagram size={16} className="md:w-[17px] md:h-[17px] relative z-10 text-foreground/70 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
        </motion.a>

        {/* Facebook */}
        <motion.a
          href="https://facebook.com/adevstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden"
          aria-label="Facebook"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="absolute inset-0 bg-foreground/[0.08] group-hover:bg-foreground/[0.15] transition-colors duration-300"
            style={{
              borderRadius: '47% 53% 52% 48% / 53% 49% 51% 47%',
            }}
          />
          <Facebook size={16} className="md:w-[17px] md:h-[17px] relative z-10 text-foreground/70 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
        </motion.a>

        {/* YouTube */}
        <motion.a
          href="https://www.youtube.com/@AkioandTen"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden"
          aria-label="YouTube"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="absolute inset-0 bg-foreground/[0.08] group-hover:bg-foreground/[0.15] transition-colors duration-300"
            style={{
              borderRadius: '51% 49% 48% 52% / 47% 52% 48% 53%',
            }}
          />
          <Youtube size={16} className="md:w-[17px] md:h-[17px] relative z-10 text-foreground/70 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
        </motion.a>
      </motion.div>

      {/* Copyright & Legal Links - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-6 md:bottom-8 left-4 md:left-8 z-20 flex flex-wrap items-center gap-2 md:gap-3 text-[9px] md:text-[10px]"
      >
        <p className="font-mono uppercase tracking-[0.2em] text-foreground/40">
          © {new Date().getFullYear()} ADEVSTUDIO
        </p>
        <span className="text-foreground/20 hidden sm:inline">·</span>
        <Link
          href="/privacy"
          className="font-mono uppercase tracking-[0.15em] text-foreground/40 hover:text-foreground/70 transition-colors duration-300"
        >
          Privacy
        </Link>
        <span className="text-foreground/20 hidden sm:inline">·</span>
        <Link
          href="/terms"
          className="font-mono uppercase tracking-[0.15em] text-foreground/40 hover:text-foreground/70 transition-colors duration-300"
        >
          Terms
        </Link>
      </motion.div>

      {/* Project Tooltip */}
      {tooltip && typeof window !== 'undefined' && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed z-50 pointer-events-none"
          style={{
            left: Math.min(tooltip.x + 20, (typeof window !== 'undefined' ? window.innerWidth : 1920) - 400),
            top: tooltip.y - 20,
          }}
        >
          <div className="bg-background/98 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-2xl overflow-hidden min-w-[340px] max-w-[380px]">
            {/* Header with gradient accent */}
            <div className="relative px-5 pt-5 pb-4 border-b border-foreground/5">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-foreground/20 via-foreground/40 to-foreground/20" />
              
              <div className="flex items-start gap-3">
                {/* Project type badge */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center border border-foreground/10">
                    <span className="text-xs font-mono font-semibold text-foreground/70">
                      {tooltip.type === "Government Portal" ? "GOV" : 
                       tooltip.type === "E-commerce" ? "EC" :
                       tooltip.type === "Web App" ? "APP" :
                       tooltip.type === "Portfolio" ? "PF" : "NEW"}
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground leading-tight mb-1">
                    {tooltip.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-foreground/40">
                      {tooltip.type}
                    </span>
                    {tooltip.year && (
                      <>
                        <span className="text-foreground/20">•</span>
                        <span className="text-[10px] font-mono text-foreground/40">
                          {tooltip.year}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            {tooltip.description && (
              <div className="px-5 py-4 border-b border-foreground/5">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {tooltip.description}
                </p>
              </div>
            )}

            {/* Tech stack */}
            {tooltip.tech && tooltip.tech.length > 0 && (
              <div className="px-5 py-4 border-b border-foreground/5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-foreground/40 mb-2.5">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tooltip.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono bg-foreground/5 text-foreground/70 rounded-md border border-foreground/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="px-5 py-4">
              {tooltip.url ? (
                <div className="flex items-center gap-2 text-foreground/60 group">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span className="text-sm font-mono">Click to visit project</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-foreground/40">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-mono">Coming soon</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
