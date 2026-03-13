"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the banner this session
    const wasDismissed = sessionStorage.getItem("promo-banner-dismissed");
    if (!wasDismissed) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("promo-banner-dismissed", "true");
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-screen-md mx-auto pointer-events-auto">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl shadow-black/40">
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
              
              {/* Ambient glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-amber-500/[0.06] rounded-full blur-[80px]" />

              <div className="relative z-10 px-6 py-5 md:px-8 md:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Icon */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Sparkles size={18} className="text-amber-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <p className="text-sm md:text-base font-display text-white/90 leading-snug">
                    <span className="text-amber-300 font-medium">Limited availability</span> — We&apos;re booking Q2 projects now.
                  </p>
                  <p className="text-xs text-white/40 mt-1 font-light">
                    Free 30-minute consultation · No obligation
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    data-cal-namespace="30min"
                    data-cal-link="adevstudio/30min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 text-[#1a1a1a] text-xs font-mono font-semibold uppercase tracking-wider hover:bg-amber-300 transition-all duration-300"
                  >
                    Book a Call
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="w-8 h-8 rounded-full border border-white/10 hover:border-white/25 flex items-center justify-center text-white/30 hover:text-white/60 transition-all duration-300"
                    aria-label="Dismiss banner"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
