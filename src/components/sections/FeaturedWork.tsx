"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredWork = [
  {
    title: "Met Office Trinidad & Tobago",
    category: "Full Stack — Weather Portal",
    year: "2024",
    description:
      "Comprehensive weather information portal serving an entire nation with real-time meteorological data, interactive forecasts, and satellite imagery.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    slug: "met-office-trinidad-and-tobago",
    link: "https://www.metoffice.gov.tt/metdemo/site/demo/",
  },
  {
    title: "Multi-Hazard EWS",
    category: "Full Stack — Emergency Management",
    year: "2025",
    description:
      "National early warning system delivering real-time alerts for floods, earthquakes, tsunamis, and severe weather events across the Caribbean.",
    image:
      "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2564&auto=format&fit=crop",
    slug: "multi-hazard-early-warning-system",
    link: "https://multihazard-test.com/home",
  },
  {
    title: "Lumë Refillery",
    category: "E-Commerce — Sustainability",
    year: "2024",
    description:
      "E-commerce platform for an eco-friendly refill store with clean, modern design and seamless shopping experience.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2564&auto=format&fit=crop",
    slug: "lum-refillery",
    link: "https://lum-refillery.vercel.app/",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="py-32 md:py-40 px-6 md:px-12 bg-background"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-foreground/10 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
              ( Selected Work )
            </h2>
            <p className="text-5xl md:text-8xl font-display tracking-tighter">
              Featured Projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors"
            >
              View All Work
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        <div className="space-y-32">
          {featuredWork.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-20 items-center group`}
            >
              <div className="w-full md:w-3/5 overflow-hidden rounded-sm">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full aspect-[4/3] relative"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-all duration-700 grayscale-[20%] group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              </div>

              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted">
                  <span>{project.category}</span>
                  <span className="w-8 h-[1px] bg-muted" />
                  <span>{project.year}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-display leading-none group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/60 max-w-xs leading-relaxed">
                  {project.description}
                </p>

                <Link
                  href={`/case-study/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm border-b pb-1 pt-4 transition-colors border-foreground/20 hover:border-foreground group/link"
                >
                  View Case Study
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 px-10 py-5 border border-foreground/20 rounded-full text-sm font-mono uppercase tracking-widest hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
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
