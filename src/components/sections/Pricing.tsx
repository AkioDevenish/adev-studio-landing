"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Foundation",
    price: "$1,500",
    suffix: "starting at",
    tagline: "One focused deliverable, done right.",
    ideal: "Ideal for startups & small businesses",
    includes: [
      "Single-service project scope",
      "Landing page, dashboard, or data report",
      "Mobile responsive & optimized",
      "1 revision round included",
      "2-week turnaround",
    ],
  },
  {
    name: "Growth",
    price: "$3,500",
    suffix: "starting at",
    tagline: "A complete digital solution across services.",
    ideal: "Ideal for scaling brands & organizations",
    popular: true,
    includes: [
      "Multi-service project scope",
      "Web + Design + Data or 3D elements",
      "Custom animations & interactions",
      "CMS, analytics & SEO setup",
      "3 revision rounds included",
      "4-week turnaround",
      "30 days post-launch support",
    ],
  },
  {
    name: "Partnership",
    price: "Custom",
    suffix: "monthly retainer",
    tagline: "Ongoing work across all disciplines.",
    ideal: "Ideal for companies needing a dedicated team",
    includes: [
      "Dedicated hours each month",
      "Web, data, design & 3D on demand",
      "Priority turnaround on requests",
      "Ongoing maintenance & optimization",
      "Strategy & consulting sessions",
      "Quarterly performance reviews",
      "Cancel or adjust anytime",
    ],
  },
];

export default function Pricing() {
  // Cal.com is initialized globally in Header.tsx


  return (
    <section
      id="pricing"
      className="py-32 md:py-40 px-6 md:px-12 bg-[#1a1a1a] text-[#F2F0E9] relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full border border-white/20" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full border border-white/20" />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-white/10 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-6">
              ( Pricing )
            </h2>
            <p className="text-4xl md:text-6xl font-display leading-tight max-w-xl">
              Investment that{" "}
              <span className="italic text-white/50">pays for itself</span>.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm max-w-xs mt-8 md:mt-0 text-right leading-relaxed"
          >
            Flexible pricing across all services web, data, design & 3D.
            Every project is scoped to your exact needs.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 rounded-sm overflow-hidden">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`group relative flex flex-col p-8 md:p-10 ${
                index < tiers.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-white/10"
                  : ""
              } ${
                tier.popular
                  ? "bg-white/[0.04]"
                  : "hover:bg-white/[0.02]"
              } transition-colors duration-500`}
            >
              {/* Popular indicator */}
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              )}

              {/* Tier name */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-white/30">
                  {tier.name}
                </span>
                {tier.popular && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl md:text-6xl font-display leading-none">
                  {tier.price}
                </span>
              </div>
              <span className="text-xs font-mono text-white/30 uppercase tracking-wider mb-6">
                {tier.suffix}
              </span>

              {/* Tagline */}
              <p className="text-lg font-display text-white/70 mb-2 leading-snug">
                {tier.tagline}
              </p>
              <p className="text-xs font-mono text-white/25 uppercase tracking-wider mb-8">
                {tier.ideal}
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10 mb-8" />

              {/* Includes */}
              <ul className="space-y-3 mb-10 flex-grow">
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                data-cal-namespace="30min"
                data-cal-link="adevstudio/30min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className={`group/btn w-full flex items-center justify-center gap-2 py-4 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#F2F0E9] text-[#1a1a1a] hover:bg-white"
                    : "border border-white/20 text-white/60 hover:border-white/60 hover:text-white"
                }`}
              >
                Book a Call
                <ArrowRight
                  size={12}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[10px] font-mono text-white/20 mt-10 uppercase tracking-widest"
        >
          All prices USD · Scope-dependent · Free 30-minute consultation
          included
        </motion.p>
      </div>
    </section>
  );
}
