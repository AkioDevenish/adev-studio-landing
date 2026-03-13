"use client";

import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "The ADEV team didn\u2019t just build software \u2014 they fundamentally transformed our operations. The platform handled intense traffic flawlessly during critical weather events. The level of engineering and design quality is unmatched.",
    name: "Director of Meteorology",
    company: "Met Office Trinidad \u0026 Tobago",
  },
  {
    quote:
      "Working with ADEV Studio felt like having a world-class Silicon Valley team, right here in the Caribbean. They delivered a beautiful, high-performance product on time and went above and beyond on every detail.",
    name: "Project Lead",
    company: "Multi-Hazard Early Warning System",
  },
  {
    quote:
      "Our new e-commerce platform exceeded every expectation. The design is stunning, the UX is seamless, and our conversion rates improved significantly within the first month of launch.",
    name: "Founder",
    company: "Lum\u00eb Refillery",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white flex justify-center border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-indigo-900/10 blur-3xl pointer-events-none" />
      <div className="max-w-screen-md mx-auto text-center relative z-10">
        <Quote className="mx-auto text-white/20 w-16 h-16 mb-8" />

        <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-display leading-[1.2] mb-12 tracking-tight text-white/90">
                {`"${t.quote}"`}
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-12 h-[1px] bg-white/30 mb-6" />
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/80 mb-2">
                  {t.name}
                </p>
                <p className="text-white/40 text-sm font-light">
                  {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "bg-white/80 w-6"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
