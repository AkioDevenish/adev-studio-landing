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

export default function About() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-foreground/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-foreground/20 rounded-full" />
      </div>

      <div className="max-w-screen-xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
              ( About Us )
            </h2>
            <p className="text-3xl md:text-5xl font-display leading-tight mb-8">
              A{" "}
              <span className="italic text-foreground/60">
                one-person studio
              </span>{" "}
              with big-agency{" "}
              <span className="italic text-foreground/60">
                capabilities
              </span>
              .
            </p>

            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                ADEV Studio was founded by Akio Devenish — a developer,
                data scientist, and designer based in Trinidad & Tobago.
                What started as freelance web work has grown into a full-service
                digital studio.
              </p>
              <p>
                We combine deep technical expertise with design sensibility
                to create solutions that don&apos;t just look beautiful —
                they perform. From government weather platforms to e-commerce,
                every project gets the same level of craft and attention.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 mt-10 text-sm font-mono uppercase tracking-widest text-foreground hover:text-foreground/70 transition-colors"
            >
              See Our Work
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 border-t border-foreground/10 pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-display mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
              ( Tech Stack )
            </h3>

            <div className="flex flex-wrap gap-3 mb-16">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-5 py-3 border border-foreground/10 rounded-full text-sm font-mono text-foreground/70 hover:border-foreground/30 hover:text-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Approach */}
            <div className="space-y-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted">
                ( Our Approach )
              </h3>

              {[
                {
                  title: "Performance-First",
                  desc: "Every project is optimized for speed. We target 90+ Lighthouse scores across all metrics.",
                },
                {
                  title: "Design-Led",
                  desc: "We believe great design isn't decoration — it's how the product works. Form follows function, always.",
                },
                {
                  title: "Future-Proof",
                  desc: "We build with scalable architecture and modern tooling so your project grows with you.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group border-l-2 border-foreground/10 hover:border-foreground/40 pl-6 transition-colors duration-300"
                >
                  <h4 className="text-xl font-display mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
