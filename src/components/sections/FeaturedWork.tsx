"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useRef } from "react";

const featuredWork = [
  {
    title: "Met Office Trinidad & Tobago",
    category: "Full Stack",
    type: "Weather Portal",
    year: "2024",
    description:
      "Comprehensive weather information portal serving an entire nation with real-time meteorological data, interactive forecasts, and satellite imagery.",
    image: "/images/case-studies/met-office/Homepage.jpg",
    slug: "met-office-trinidad-and-tobago",
    link: "https://www.metoffice.gov.tt/metdemo/site/demo/",
    tags: ["Next.js", "Python", "Real-time Data", "GIS"],
    accent: "from-amber-500/30 via-orange-500/10",
  },
  {
    title: "Multi-Hazard EWS",
    category: "Full Stack",
    type: "Emergency Management",
    year: "2025",
    description:
      "National early warning system delivering real-time alerts for floods, earthquakes, tsunamis, and severe weather events across the Caribbean.",
    image:
      "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2564&auto=format&fit=crop",
    slug: "multi-hazard-early-warning-system",
    link: "https://multihazard-test.com/home",
    tags: ["React", "Node.js", "WebSocket", "Alert System"],
    accent: "from-blue-500/30 via-indigo-500/10",
  },
  {
    title: "Lumë Refillery",
    category: "E-Commerce",
    type: "Sustainability",
    year: "2024",
    description:
      "E-commerce platform for an eco-friendly refill store with clean, modern design and seamless shopping experience.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2564&auto=format&fit=crop",
    slug: "lum-refillery",
    link: "https://lum-refillery.vercel.app/",
    tags: ["Next.js", "Shopify", "Stripe", "CMS"],
    accent: "from-emerald-500/30 via-teal-500/10",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof featuredWork)[0];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-t border-foreground/10 pt-12">
        {/* Content Side */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          {/* Category */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
              {project.category}
            </span>
            <span className="text-foreground/15">·</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
              {project.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-4xl md:text-5xl xl:text-6xl font-display leading-[0.95] mb-6 tracking-tight group-hover:text-foreground/80 transition-colors duration-500">
            {project.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider text-muted bg-foreground/[0.04] border border-foreground/[0.06] px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <Link
              href={`/case-study/${project.slug}`}
              className="group/link relative inline-flex items-center gap-2 text-sm font-medium"
            >
              <span className="relative">
                View Case Study
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground group-hover/link:w-full transition-all duration-500" />
              </span>
              <ArrowUpRight
                size={14}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/ext inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground/70 transition-colors duration-300"
              >
                <ExternalLink size={13} />
                <span className="text-[11px] font-mono uppercase tracking-wider">
                  Live
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Right Info Side */}
        <div className="w-full md:w-[40%] flex flex-col md:items-end md:text-right mt-2 md:mt-0">
          <div className="text-[11px] font-mono text-muted tracking-widest mb-6 border border-foreground/10 px-4 py-1.5 rounded-full inline-block">
            {project.year}
          </div>
          <p className="text-foreground/50 leading-relaxed text-base font-light max-w-sm">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 md:py-44 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-foreground/[0.02] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-foreground/[0.02] to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-gradient-to-r from-foreground/40 to-transparent" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
                  Selected Work
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tighter leading-[0.9]">
                Featured
                <br />
                <span className="italic text-foreground/40">Projects</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/portfolio"
                className="group/all inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300"
              >
                <span>View All Work</span>
                <div className="w-8 h-8 rounded-full border border-foreground/15 group-hover/all:border-foreground/40 flex items-center justify-center transition-all duration-300 group-hover/all:bg-foreground group-hover/all:text-background">
                  <ArrowUpRight
                    size={12}
                    className="group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5 transition-transform"
                  />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 h-[1px] bg-gradient-to-r from-foreground/10 via-foreground/10 to-transparent origin-left"
          />
        </div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-36">
          {featuredWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-28 md:mt-36"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full border border-foreground/10 hover:border-foreground/30 hover:bg-foreground hover:text-background text-sm font-mono uppercase tracking-[0.15em] transition-all duration-500"
          >
            See Full Portfolio
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
