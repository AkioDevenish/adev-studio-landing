"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your business, your audience, and your goals. Every great project starts with the right questions.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "We craft a clear roadmap and design system tailored to your brand. Wireframes, prototypes, and visual direction — all before a single line of code.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, performant code built with modern frameworks. We build for speed, accessibility, and scalability from day one.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, optimization, and provide ongoing support. Your project doesn't end at launch — it evolves.",
  },
];

export default function Process() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
              ( Our Process )
            </h2>
            <p className="text-3xl md:text-5xl font-display max-w-2xl leading-tight">
              A{" "}
              <span className="italic text-foreground/60">systematic</span>{" "}
              approach to{" "}
              <span className="italic text-foreground/60">
                exceptional
              </span>{" "}
              results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-foreground/10 z-0" />
              )}

              <div className="border-t border-foreground/10 pt-8 relative z-10">
                <span className="text-6xl md:text-7xl font-display text-foreground/5 group-hover:text-foreground/10 transition-colors duration-500 leading-none">
                  {step.number}
                </span>

                <h3 className="text-2xl font-display mt-4 mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {step.title}
                </h3>

                <p className="text-foreground/60 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
