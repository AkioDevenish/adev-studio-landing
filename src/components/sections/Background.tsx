"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Background() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="background"
      ref={containerRef}
      className="py-40 px-6 md:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-foreground/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-foreground/20 rounded-full" />
      </div>

      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
              ( Background )
            </h2>
            <p className="text-3xl md:text-5xl font-display max-w-2xl leading-tight">
              From{" "}
              <span className="italic text-foreground/60">developer</span> to a
              future in{" "}
              <span className="italic text-foreground/60">immersive tech</span>.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="max-w-xl mx-auto">
            {/* Centered Column - Education */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="border-t border-foreground/10 pt-8 mb-12">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-foreground/30 group-hover:bg-foreground/60 transition-colors duration-300" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-foreground/20 animate-ping" />
                  </div>
                  <h3 className="text-2xl font-display group-hover:text-foreground/80 transition-colors duration-300">
                    Education
                  </h3>
                </div>
              </div>

              <div className="space-y-16 group-hover:translate-x-2 transition-transform duration-300">
                <div>
                  <p className="text-xs font-mono text-muted mb-3 uppercase tracking-wider">
                    2025 - 2026
                  </p>
                  <h4 className="text-xl font-display mb-2">
                    MSc Data Science
                  </h4>
                  <p className="text-foreground/60">
                    University of East London
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted mb-3 uppercase tracking-wider">
                    2018 - 2023
                  </p>
                  <h4 className="text-xl font-display mb-2">BSc Computing</h4>
                  <p className="text-foreground/60">
                    University of Southern Caribbean
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
