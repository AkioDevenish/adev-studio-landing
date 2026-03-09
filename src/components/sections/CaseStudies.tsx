"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  type: string;
  year: string;
  description: string;
  image: string;
  link?: string;
  slug?: string;
  comingSoon?: boolean;
  tags: string[];
  accent: string;
}

const dataScienceProjects: Project[] = [
  {
    title: "Coming Soon",
    category: "Data Science",
    type: "ML Research",
    year: "2025",
    description:
      "Advanced data science and machine learning projects currently in development as part of my Masters thesis research. Focus areas include neural computation, multisensory data fusion, and brain-computer interface applications.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    comingSoon: true,
    tags: ["PyTorch", "EEG", "Sensor Fusion", "BCI"],
    accent: "from-violet-500/30 via-purple-500/10",
  },
];

const developerProjects: Project[] = [
  {
    title: "Met Office Trinidad & Tobago",
    category: "Full Stack",
    type: "Weather Portal",
    year: "2024",
    description:
      "Comprehensive weather information portal serving Trinidad & Tobago with real-time meteorological data, interactive forecasts, satellite imagery, and marine conditions.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "https://www.metoffice.gov.tt/metdemo/site/demo/",
    slug: "met-office-trinidad-and-tobago",
    tags: ["Next.js", "Python", "Real-time Data", "GIS"],
    accent: "from-amber-500/30 via-orange-500/10",
  },
  {
    title: "Multi-Hazard Early Warning System",
    category: "Full Stack",
    type: "Emergency Management",
    year: "2025",
    description:
      "National early warning system for Trinidad & Tobago delivering real-time alerts for floods, earthquakes, tsunamis, and severe weather.",
    image:
      "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2564&auto=format&fit=crop",
    link: "https://multihazard-test.com/home",
    slug: "multi-hazard-early-warning-system",
    tags: ["React", "Node.js", "WebSocket", "Alert System"],
    accent: "from-blue-500/30 via-indigo-500/10",
  },
  {
    title: "Lumë Refillery",
    category: "E-Commerce",
    type: "Sustainability",
    year: "2024",
    description:
      "E-commerce platform for an eco-friendly refill store offering sustainable, zero-waste products with a clean modern interface.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2564&auto=format&fit=crop",
    link: "https://lum-refillery.vercel.app/",
    slug: "lum-refillery",
    tags: ["Next.js", "Shopify", "Stripe", "CMS"],
    accent: "from-emerald-500/30 via-teal-500/10",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-8 lg:gap-0 items-stretch`}
      >
        {/* Image Side */}
        <div className="w-full lg:w-[58%] relative">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl aspect-[4/3] bg-foreground/5">
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 z-10 bg-gradient-to-t ${project.accent} to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay`}
            />

            {/* Image with parallax */}
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-[-10%] w-[120%] h-[120%]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover object-top transition-all duration-1000 ${
                  project.comingSoon
                    ? "grayscale-[50%]"
                    : "grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105"
                }`}
                loading="lazy"
              />
            </motion.div>

            {/* Dark overlay */}
            <div
              className={`absolute inset-0 z-10 ${
                project.comingSoon
                  ? "bg-gradient-to-t from-black/60 via-black/30 to-black/10"
                  : "bg-gradient-to-t from-black/40 via-black/10 to-transparent"
              }`}
            />

            {/* Floating year badge */}
            <div className="absolute top-6 right-6 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <span className="text-[11px] font-mono text-white/80 tracking-widest">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Coming Soon overlay */}
            {project.comingSoon && (
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full">
                  <span className="text-sm font-mono text-white/90 tracking-widest uppercase">
                    In Development
                  </span>
                </div>
              </div>
            )}

            {/* Bottom tags on image */}
            {!project.comingSoon && (
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider text-white/70 bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Side */}
        <motion.div
          style={{ y: contentY }}
          className={`w-full lg:w-[42%] flex flex-col justify-center ${
            isReversed ? "lg:pr-16 xl:pr-24" : "lg:pl-16 xl:pl-24"
          }`}
        >
          {/* Category */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-foreground/30" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
              {project.category}
            </span>
            <span className="text-foreground/15">·</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
              {project.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-display leading-[0.95] mb-6 tracking-tight group-hover:text-foreground/80 transition-colors duration-500">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-foreground/50 leading-relaxed mb-10 text-base font-light max-w-md">
            {project.description}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            {project.comingSoon ? (
              <span className="inline-flex items-center gap-2 text-sm text-foreground/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Coming Soon
              </span>
            ) : (
              <>
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
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<"developer" | "datascience">(
    "developer"
  );

  const projects =
    activeTab === "developer" ? developerProjects : dataScienceProjects;

  return (
    <section id="work" className="py-32 md:py-44 px-6 md:px-12 bg-surface relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-foreground/[0.02] to-transparent rounded-full blur-[100px] pointer-events-none" />

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
                <div className="w-8 h-[1px] bg-gradient-to-r from-foreground/40 to-transparent" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
                  Portfolio
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tighter leading-[0.9]">
                Projects
              </h2>
            </div>

            {/* Tab Switcher */}
            <div className="flex gap-1 bg-foreground/[0.04] rounded-full p-1 border border-foreground/[0.06]">
              <button
                onClick={() => setActiveTab("developer")}
                className={`relative px-6 py-2.5 text-[11px] font-mono uppercase tracking-[0.15em] rounded-full transition-all duration-500 ${
                  activeTab === "developer"
                    ? "bg-foreground text-background shadow-lg"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                Developer
              </button>
              <button
                onClick={() => setActiveTab("datascience")}
                className={`relative px-6 py-2.5 text-[11px] font-mono uppercase tracking-[0.15em] rounded-full transition-all duration-500 ${
                  activeTab === "datascience"
                    ? "bg-foreground text-background shadow-lg"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                Data Science
              </button>
            </div>
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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-24 md:space-y-36"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
