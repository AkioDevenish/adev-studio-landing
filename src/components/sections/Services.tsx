"use client";

import { motion } from "framer-motion";
import { Code, BarChart3, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "High-performance websites & web applications built with Next.js, React, and modern frameworks. From landing pages to full-stack platforms.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    description:
      "Transform your raw data into actionable insights. Machine learning models, dashboards, and data-driven strategies to grow your business.",
    tags: ["Python", "ML/AI", "Visualization", "Analytics"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, modern interfaces designed to convert. We craft user experiences that feel intuitive, look premium, and keep visitors engaged.",
    tags: ["Figma", "Prototyping", "Design Systems", "Motion"],
  },
  {
    icon: Globe,
    title: "3D & Interactive",
    description:
      "Immersive browser-based experiences using WebGL and Three.js. Bring your brand to life with interactive 3D visuals and animations.",
    tags: ["Three.js", "WebGL", "Shaders", "R3F"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
              ( Services )
            </h2>
            <p className="text-3xl md:text-5xl font-display max-w-2xl leading-tight">
              Everything you need to{" "}
              <span className="italic text-foreground/60">
                launch, scale,
              </span>{" "}
              and{" "}
              <span className="italic text-foreground/60">stand out</span>{" "}
              online.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group border border-foreground/10 rounded-sm p-8 md:p-12 hover:border-foreground/30 transition-all duration-500 bg-background/50 hover:bg-background"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-foreground/60 group-hover:text-foreground transition-colors duration-300"
                    />
                  </div>
                  <span className="text-xs font-mono text-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>

                <p className="text-foreground/60 leading-relaxed mb-8 max-w-md">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-widest text-muted bg-foreground/5 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
