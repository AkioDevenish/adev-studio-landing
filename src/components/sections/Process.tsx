"use client";

import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Listen & Learn",
    description:
      "We dive deep into understanding your business, your audience, and your goals. Every great project starts with the right questions.",
    details: ["Stakeholder interviews", "Competitive analysis", "Goal mapping"],
  },
  {
    number: "02",
    title: "Strategy & Design",
    subtitle: "Think & Shape",
    description:
      "We craft a clear roadmap and design system tailored to your brand. Wireframes, prototypes, and visual direction - all before a single line of code.",
    details: ["Wireframing", "Visual design", "Prototyping"],
  },
  {
    number: "03",
    title: "Development",
    subtitle: "Build & Refine",
    description:
      "Clean, performant code built with modern frameworks. We build for speed, accessibility, and scalability from day one.",
    details: ["Frontend & Backend", "API integrations", "Performance tuning"],
  },
  {
    number: "04",
    title: "Launch & Support",
    subtitle: "Ship & Grow",
    description:
      "We handle deployment, optimization, and provide ongoing support. Your project doesn't end at launch - it evolves.",
    details: ["Deployment", "Monitoring", "Ongoing iteration"],
  },
];

function StepRow({ step, index }: { step: (typeof processSteps)[0]; index: number }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const numberY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const smoothNumberY = useSpring(numberY, { stiffness: 100, damping: 30 });

  const titleWords = step.title.split(" ");

  return (
    <div ref={rowRef} className="group relative">
      {/* Animated divider line — draws itself in */}
      <motion.div
        className="h-[1px] bg-foreground/[0.08] origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Hover progress fill on divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-foreground/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

      <div className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start cursor-default">
        {/* Number — parallax float */}
        <div className="md:col-span-2 flex items-baseline gap-4 overflow-hidden">
          <motion.span
            style={{ y: smoothNumberY }}
            className="text-[4.5rem] md:text-[6rem] font-display leading-none text-foreground/[0.03] group-hover:text-foreground/[0.1] transition-colors duration-700 select-none"
          >
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 1.2,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {step.number}
            </motion.span>
          </motion.span>
        </div>

        {/* Title block — word-by-word reveal */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/15 group-hover:text-foreground/40 transition-colors duration-500"
          >
            {step.subtitle}
          </motion.span>
          <h3 className="text-3xl md:text-4xl font-display leading-[1.05] tracking-tight">
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  className="inline-block group-hover:text-foreground transition-colors duration-500"
                  initial={{ y: "120%" }}
                  animate={isInView ? { y: "0%" } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.1 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h3>
        </div>

        {/* Description — fade up */}
        <div className="md:col-span-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-foreground/25 text-sm leading-[1.9] font-light group-hover:text-foreground/50 transition-colors duration-500"
          >
            {step.description}
          </motion.p>
        </div>

        {/* Detail tags — cascade in from right */}
        <div className="md:col-span-2 flex flex-row md:flex-col flex-wrap gap-2 md:items-end">
          {step.details.map((detail, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{
                delay: 0.6 + index * 0.1 + i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/10 group-hover:text-foreground/30 px-3 py-1.5 rounded-full border border-foreground/[0.03] group-hover:border-foreground/[0.1] transition-all duration-500 whitespace-nowrap"
            >
              {detail}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Hover glow — left edge */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
      </div>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="bg-surface py-32 md:py-44 px-6 md:px-12 relative"
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-foreground/[0.02] to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto relative z-10">
          {/* Header */}
          <div ref={headerRef} className="mb-24 md:mb-32">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={headerInView ? { opacity: 1, width: "auto" } : {}}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 mb-8 overflow-hidden"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={headerInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-8 h-[1px] bg-gradient-to-r from-foreground/40 to-transparent origin-left"
                  />
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={headerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted"
                  >
                    Process
                  </motion.span>
                </motion.div>

                <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display leading-[0.9] tracking-tight max-w-2xl">
                  {"How we bring".split(" ").map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                      <motion.span
                        className="inline-block"
                        initial={{ y: "120%", rotateX: -40 }}
                        animate={headerInView ? { y: "0%", rotateX: 0 } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.3 + i * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                  <br />
                  {"ideas to life.".split(" ").map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                      <motion.span
                        className="inline-block italic text-foreground/30"
                        initial={{ y: "120%", rotateX: -40 }}
                        animate={headerInView ? { y: "0%", rotateX: 0 } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.55 + i * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-sm text-foreground/30 text-sm leading-relaxed font-light md:pb-2"
              >
                Four phases. One seamless experience. We move fast without cutting corners.
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14 h-[1px] bg-gradient-to-r from-foreground/10 via-foreground/10 to-transparent origin-left"
            />
          </div>

          {/* Steps — stacked rows */}
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <StepRow key={index} step={step} index={index} />
            ))}

            {/* Final divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1px] bg-foreground/[0.08] origin-left"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
