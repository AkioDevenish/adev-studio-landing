"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const tiers = [
  {
    name: "Starter",
    price: "$1,500",
    period: "per project",
    description:
      "Perfect for small businesses and startups who need a clean, professional web presence.",
    features: [
      "Custom designed landing page",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Up to 5 pages",
      "1 round of revisions",
      "2-week delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$3,500",
    period: "per project",
    description:
      "For growing brands that need a high-performance website with advanced functionality.",
    features: [
      "Everything in Starter",
      "Custom animations & interactions",
      "CMS integration (blog, portfolio)",
      "Advanced SEO & analytics setup",
      "Up to 15 pages",
      "3D / interactive elements",
      "3 rounds of revisions",
      "4-week delivery",
      "30 days post-launch support",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "let's talk",
    description:
      "Full-scale digital solutions for established companies and complex projects.",
    features: [
      "Everything in Professional",
      "Full-stack web application",
      "Data science & ML integration",
      "API development & integrations",
      "Dashboard & admin panels",
      "Unlimited pages & revisions",
      "Priority support & maintenance",
      "Dedicated project timeline",
      "Ongoing retainer available",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#1a1a1a" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section
      id="pricing"
      className="py-32 md:py-40 px-6 md:px-12 bg-background"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-widest text-muted mb-8"
          >
            ( Pricing )
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display max-w-2xl leading-tight"
          >
            Transparent pricing,{" "}
            <span className="italic text-foreground/60">
              exceptional value
            </span>
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 mt-6 max-w-lg"
          >
            Every project is unique. These packages are starting points —
            we&apos;ll tailor the perfect scope for your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative flex flex-col rounded-sm border transition-all duration-500 ${
                tier.highlighted
                  ? "border-foreground bg-foreground text-background scale-[1.02] shadow-2xl shadow-foreground/10"
                  : "border-foreground/10 bg-surface hover:border-foreground/30"
              }`}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-background text-foreground text-[10px] font-mono uppercase tracking-widest rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 md:p-10 flex flex-col flex-grow">
                {/* Header */}
                <div className="mb-8">
                  <h3
                    className={`text-sm font-mono uppercase tracking-widest mb-6 ${
                      tier.highlighted
                        ? "text-background/60"
                        : "text-muted"
                    }`}
                  >
                    {tier.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl md:text-6xl font-display">
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm font-mono ${
                        tier.highlighted
                          ? "text-background/50"
                          : "text-muted"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      tier.highlighted
                        ? "text-background/70"
                        : "text-foreground/60"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-[1px] mb-8 ${
                    tier.highlighted
                      ? "bg-background/20"
                      : "bg-foreground/10"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          tier.highlighted
                            ? "text-background/60"
                            : "text-muted"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.highlighted
                            ? "text-background/80"
                            : "text-foreground/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  data-cal-namespace="30min"
                  data-cal-link="adevstudio/30min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className={`w-full py-4 rounded-full text-sm font-mono uppercase tracking-widest transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs font-mono text-muted mt-12 uppercase tracking-widest"
        >
          All prices in USD · Flexible payment plans available · Book a
          free consultation to discuss your project
        </motion.p>
      </div>
    </section>
  );
}
