"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SplitText from "@/components/reactbits/SplitText";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
});

export default function AgencyHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      <HeroScene scrollProgress={scrollProgress.get()} />

      <div className="z-10 text-center px-4 w-full">
        <div className="mb-6 w-full flex justify-center">
          <SplitText
            text="ADEVSTUDIO"
            className="text-[14vw] md:text-[12vw] lg:text-[11rem] font-display font-bold tracking-tighter text-foreground leading-[0.8] whitespace-nowrap"
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
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-sans font-light tracking-wide leading-relaxed">
            We design & build premium digital experiences
            <br className="hidden md:block" />
            that drive results for ambitious brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              href="/#services"
              className="group px-8 py-4 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 flex items-center gap-2"
            >
              Our Services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border border-foreground/20 text-foreground text-sm font-medium rounded-full hover:border-foreground/60 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-muted mt-4">
            Est. 2025
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-foreground/40">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-foreground/10 overflow-hidden">
            <div className="w-full h-full bg-foreground/40 animate-bounce origin-top" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
