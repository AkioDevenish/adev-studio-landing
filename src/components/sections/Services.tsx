"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code, BarChart3, Palette, Globe, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Code,
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites & web applications built with Next.js, React, and modern frameworks. From landing pages to full-stack platforms.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "group-hover:text-blue-300",
    borderAccent: "group-hover:border-blue-500/30",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Data Science & Analytics",
    description:
      "Transform your raw data into actionable insights. Machine learning models, dashboards, and data-driven strategies to grow your business.",
    tags: ["Python", "ML/AI", "Visualization", "Analytics"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "group-hover:text-emerald-300",
    borderAccent: "group-hover:border-emerald-500/30",
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    description:
      "Clean, modern interfaces designed to convert. We craft user experiences that feel intuitive, look premium, and keep visitors engaged.",
    tags: ["Figma", "Prototyping", "Design Systems", "Motion"],
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "group-hover:text-rose-300",
    borderAccent: "group-hover:border-rose-500/30",
  },
  {
    icon: Globe,
    number: "04",
    title: "3D & Interactive",
    description:
      "Immersive browser-based experiences using WebGL and Three.js. Bring your brand to life with interactive 3D visuals and animations.",
    tags: ["Three.js", "WebGL", "Shaders", "R3F"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "group-hover:text-amber-300",
    borderAccent: "group-hover:border-amber-500/30",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-white/[0.12] hover:bg-white/[0.04]">
        {/* Gradient orb on hover */}
        <div
          className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
        />

        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 transition-all duration-700" />

        <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col h-full min-h-[420px]">
          {/* Header row: Icon + Number */}
          <div className="flex items-start justify-between mb-auto">
            <div
              className={`w-14 h-14 rounded-xl border border-white/[0.08] ${service.borderAccent} flex items-center justify-center bg-white/[0.03] group-hover:bg-white/[0.06] transition-all duration-500 group-hover:scale-110`}
            >
              <Icon
                size={24}
                strokeWidth={1.5}
                className={`text-white/40 ${service.accentColor} transition-colors duration-500`}
              />
            </div>
            <span className="text-[11px] font-mono text-white/15 tracking-[0.2em] group-hover:text-white/30 transition-colors duration-500">
              {service.number}
            </span>
          </div>

          {/* Content */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-display mb-5 text-white/90 group-hover:text-white transition-colors duration-500 leading-tight">
              {service.title}
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="inline-block ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-50 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500"
              />
            </h3>

            <p className="text-white/35 leading-relaxed mb-8 text-[15px] font-light group-hover:text-white/50 transition-colors duration-500">
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
                  className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/25 border border-white/[0.06] px-3 py-1.5 rounded-full group-hover:border-white/[0.12] group-hover:text-white/40 transition-all duration-500"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-44 px-6 md:px-12 bg-[#111111] text-[#F2F0E9] overflow-hidden"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large soft orb top-left */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-blue-900/[0.08] to-transparent rounded-full blur-[140px]" />
        {/* Small orb bottom-right */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-900/[0.06] to-transparent rounded-full blur-[120px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-gradient-to-r from-white/40 to-transparent" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/30">
                  What We Do
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[0.95] tracking-tight">
                Services built for
                <br />
                <span className="italic text-white/40">
                  ambitious brands
                </span>
                .
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/30 text-sm max-w-xs md:text-right leading-relaxed font-light"
            >
              Full-spectrum digital services from strategy to launch. We
              partner with you to create work that moves the needle.
            </motion.p>
          </motion.div>

          {/* Divider with animated gradient */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
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
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/15">
            End-to-end delivery
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
