import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white flex justify-center border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-indigo-900/10 blur-3xl pointer-events-none" />
      <div className="max-w-screen-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Quote className="mx-auto text-white/20 w-16 h-16 mb-8" />
          <h3 className="text-3xl md:text-5xl font-display leading-[1.2] mb-12 tracking-tight text-white/90">
            "The ADEV team didn't just build software they fundamentally transformed our operations. The platform handled intense traffic flawlessly during critical weather events. The level of engineering and design quality is unmatched."
          </h3>
          <div className="flex flex-col items-center">
            <div className="w-12 h-[1px] bg-white/30 mb-6" />
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/80 mb-2">
              Director of Meteorology
            </p>
            <p className="text-white/40 text-sm font-light">
              Met Office Trinidad & Tobago
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
