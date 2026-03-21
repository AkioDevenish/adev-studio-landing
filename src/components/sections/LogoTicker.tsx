"use client";

import { motion } from "framer-motion";

const companies = [
  "Met Office Trinidad & Tobago",
  "Multi-Hazard EWS",
  "Lumë Refillery",
];

export default function LogoTicker() {
  return (
    <section className="py-12 bg-background border-y border-foreground/[0.05] overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full relative">
        {/* Soft edge masks for blending into the background */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-fit overflow-hidden">
          <motion.div
            className="flex flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* 
              We duplicate the array to create a seamless infinite loop.
              We animate from 0 to -50% of the entire flex container, 
              which perfectly aligns the second set of items to where the first started.
            */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-foreground/40 hover:text-foreground/80 transition-colors duration-300 mx-8 md:mx-12 whitespace-nowrap"
              >
                <div className="w-2 h-2 rounded-full bg-foreground/20" />
                <span className="text-sm md:text-base font-mono uppercase tracking-[0.2em]">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
