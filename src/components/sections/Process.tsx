"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your business, your audience, and your goals. Every great project starts with the right questions.",
    accent: "from-blue-500/20 to-indigo-500/10",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "We craft a clear roadmap and design system tailored to your brand. Wireframes, prototypes, and visual direction all before a single line of code.",
    accent: "from-rose-500/20 to-pink-500/10",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, performant code built with modern frameworks. We build for speed, accessibility, and scalability from day one.",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, optimization, and provide ongoing support. Your project doesn't end at launch it evolves.",
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

export default function Process() {
  return (
    <section className="py-32 md:py-44 px-6 md:px-12 bg-surface relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-foreground/[0.02] to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-foreground/[0.02] to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-gradient-to-r from-foreground/40 to-transparent" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
                How We Work
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[0.95] tracking-tight max-w-3xl">
              A <span className="italic text-foreground/40">systematic</span>{" "}
              approach to{" "}
              <span className="italic text-foreground/40">exceptional</span>{" "}
              results.
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 h-[1px] bg-gradient-to-r from-foreground/10 via-foreground/10 to-transparent origin-left"
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-foreground/[0.06] bg-background/50 backdrop-blur-sm p-8 md:p-10 overflow-hidden hover:border-foreground/[0.12] transition-all duration-700">
                {/* Gradient orb */}
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${step.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/0 to-transparent group-hover:via-foreground/10 transition-all duration-700" />

                <div className="relative z-10">
                  {/* Number */}
                  <div className="flex items-center justify-between mb-12">
                    <span className="text-7xl md:text-8xl font-display text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors duration-700 leading-none select-none">
                      {step.number}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-foreground/[0.06] group-hover:bg-foreground/20 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-display mb-5 leading-tight group-hover:text-foreground/80 transition-colors duration-500">
                    {step.title}
                  </h3>

                  <p className="text-foreground/40 leading-relaxed text-sm font-light group-hover:text-foreground/60 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-6"
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-foreground/10" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/15">
            Proven methodology
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-foreground/10" />
        </motion.div>
      </div>
    </section>
  );
}
