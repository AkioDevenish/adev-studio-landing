"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Three.js",
  "Python",
  "PyTorch",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "Figma",
  "Framer Motion",
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const approach = [
  {
    title: "Performance-First",
    desc: "Every project is optimized for speed. We target 90+ Lighthouse scores across all metrics.",
    icon: "⚡",
  },
  {
    title: "Design-Led",
    desc: "We believe great design isn't decoration it's how the product works. Form follows function, always.",
    icon: "◆",
  },
  {
    title: "Future-Proof",
    desc: "We build with scalable architecture and modern tooling so your project grows with you.",
    icon: "→",
  },
];

export default function About() {
  return (
    <section className="py-32 md:py-44 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.015] to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-foreground/[0.015] to-transparent rounded-full blur-[120px]" />
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
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[0.95] tracking-tight">
              A{" "}
              <span className="italic text-foreground/40">
                one-person studio
              </span>
              <br />
              with big-agency{" "}
              <span className="italic text-foreground/40">capabilities</span>.
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="space-y-6 text-foreground/60 leading-relaxed text-base font-light">
              <p>
                ADEV Studio was founded by Akio Devenish a developer, data
                scientist, and designer based in Trinidad & Tobago. What started
                as freelance web work has grown into a full-service digital
                studio.
              </p>
              <p>
                We combine deep technical expertise with design sensibility to
                create solutions that don&apos;t just look beautiful they
                perform. From government weather platforms to e-commerce, every
                project gets the same level of craft and attention.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 mt-10 text-[11px] font-mono uppercase tracking-[0.2em] text-foreground hover:text-foreground/60 transition-colors"
            >
              <span>See Our Work</span>
              <div className="w-8 h-8 rounded-full border border-foreground/15 group-hover:border-foreground/40 flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-foreground/[0.06]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <p className="text-4xl md:text-5xl font-display mb-2 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column Tech + Approach */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Tech Stack */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-[1px] bg-foreground/20" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
                  Tech Stack
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="group/tag px-5 py-2.5 rounded-full border border-foreground/[0.06] text-sm font-mono text-foreground/50 hover:border-foreground/20 hover:text-foreground/80 hover:bg-foreground/[0.03] transition-all duration-500 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-[1px] bg-foreground/20" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
                  Our Approach
                </span>
              </div>

              <div className="space-y-0">
                {approach.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative py-8 border-b border-foreground/[0.06] last:border-b-0 hover:pl-4 transition-all duration-500"
                  >
                    {/* Hover accent line */}
                    <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 rounded-full" />

                    <div className="flex items-start gap-4">
                      <span className="text-foreground/15 group-hover:text-foreground/30 text-lg transition-colors duration-500 mt-0.5 shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="text-xl font-display mb-2 group-hover:text-foreground/80 transition-colors duration-500">
                          {item.title}
                        </h4>
                        <p className="text-foreground/40 text-sm leading-relaxed font-light group-hover:text-foreground/60 transition-colors duration-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
