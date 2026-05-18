"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your business, your audience, and your goals. Every great project starts with the right questions.",
    icon: Search,
    accentColor: "bg-blue-500",
    accentGlow: "from-blue-500/30 via-indigo-500/15 to-transparent",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "We craft a clear roadmap and design system tailored to your brand. Wireframes, prototypes, and visual direction all before a single line of code.",
    icon: Palette,
    accentColor: "bg-rose-500",
    accentGlow: "from-rose-500/30 via-pink-500/15 to-transparent",
    iconBg: "bg-rose-500/10 group-hover:bg-rose-500/20",
    iconColor: "text-rose-500",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, performant code built with modern frameworks. We build for speed, accessibility, and scalability from day one.",
    icon: Code2,
    accentColor: "bg-emerald-500",
    accentGlow: "from-emerald-500/30 via-teal-500/15 to-transparent",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-500",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, optimization, and provide ongoing support. Your project doesn't end at launch — it evolves.",
    icon: Rocket,
    accentColor: "bg-amber-500",
    accentGlow: "from-amber-500/30 via-orange-500/15 to-transparent",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconColor: "text-amber-500",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Horizontal connector line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent origin-left z-0"
          />

          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative z-10"
              >
                <div className="relative h-full rounded-2xl border border-foreground/[0.06] bg-background/60 backdrop-blur-sm p-8 md:p-10 overflow-hidden hover:border-foreground/[0.15] transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-foreground/[0.03]">
                  {/* Colored top accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] ${step.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Gradient orb on hover */}
                  <div
                    className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${step.accentGlow} blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
                  />

                  <div className="relative z-10">
                    {/* Icon + Number row */}
                    <div className="flex items-start justify-between mb-10">
                      <div
                        className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center transition-all duration-500`}
                      >
                        <Icon
                          size={20}
                          className={`${step.iconColor} transition-colors duration-500`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-6xl font-display text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors duration-700 leading-none select-none -mt-2">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-display mb-4 leading-tight transition-colors duration-500">
                      {step.title}
                    </h3>

                    <p className="text-foreground/40 leading-relaxed text-sm font-light group-hover:text-foreground/60 transition-colors duration-500">
                      {step.description}
                    </p>

                    {/* Bottom arrow indicator */}
                    <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <div className={`w-6 h-[1px] ${step.accentColor}`} />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30">
                        Step {step.number}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
