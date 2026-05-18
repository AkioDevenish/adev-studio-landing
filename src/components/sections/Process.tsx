"use client";

import { motion } from "framer-motion";

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
      "We craft a clear roadmap and design system tailored to your brand. Wireframes, prototypes, and visual direction — all before a single line of code.",
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
      "We handle deployment, optimization, and provide ongoing support. Your project doesn't end at launch — it evolves.",
    details: ["Deployment", "Monitoring", "Ongoing iteration"],
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark contrasting band */}
      <div className="bg-[#0a0a0a] text-white py-32 md:py-44 px-6 md:px-12 relative">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3QgZmlsdGVyPSJ1cmwoI2EpIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIi8+PC9zdmc+')]" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-white/[0.02] to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-white/40 to-transparent" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40">
                    Process
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display leading-[0.9] tracking-tight max-w-2xl">
                  How we bring
                  <br />
                  <span className="italic text-white/30">ideas to life.</span>
                </h2>
              </div>
              <p className="max-w-sm text-white/30 text-sm leading-relaxed font-light md:pb-2">
                Four phases. One seamless experience. We move fast without cutting corners.
              </p>
            </motion.div>
          </div>

          {/* Steps — stacked rows */}
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                {/* Divider line */}
                <div className="h-[1px] bg-white/[0.06] group-hover:bg-white/[0.12] transition-colors duration-700" />

                <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start cursor-default">
                  {/* Number */}
                  <div className="md:col-span-2 flex items-baseline gap-4">
                    <span className="text-[4rem] md:text-[5.5rem] font-display leading-none text-white/[0.04] group-hover:text-white/[0.1] transition-all duration-700 select-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Title block */}
                  <div className="md:col-span-4 flex flex-col gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 group-hover:text-white/40 transition-colors duration-500">
                      {step.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display leading-[1.05] tracking-tight group-hover:text-white transition-colors duration-500">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-white/30 text-sm leading-[1.8] font-light group-hover:text-white/50 transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Detail tags */}
                  <div className="md:col-span-2 flex flex-row md:flex-col flex-wrap gap-2 md:items-end">
                    {step.details.map((detail, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.4 + i * 0.08,
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/15 group-hover:text-white/30 px-3 py-1.5 rounded-full border border-white/[0.04] group-hover:border-white/[0.1] transition-all duration-500 whitespace-nowrap"
                      >
                        {detail}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                </div>
              </motion.div>
            ))}

            {/* Final divider */}
            <div className="h-[1px] bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </section>
  );
}
