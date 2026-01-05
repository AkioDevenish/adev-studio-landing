import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: "Brand Identity",
    description: "We distill your essence into a visual language that speaks without shouting. Logos, typography, and color systems that endure.",
    number: "01"
  },
  {
    title: "Digital Experience",
    description: "Websites and applications designed for clarity and impact. We prioritize usability and aesthetic harmony.",
    number: "02"
  },
  {
    title: "Motion & 3D",
    description: "Adding depth and life to static interfaces. Subtle interactions and immersive environments that engage.",
    number: "03"
  },
  {
    title: "Art Direction",
    description: "Guiding the visual narrative across all touchpoints. Photography, video, and styling that aligns with your vision.",
    number: "04"
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} className="py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-widest text-muted"
          >
            ( Services )
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display max-w-2xl text-right leading-tight mt-8 md:mt-0"
          >
            We build brands that value <span className="italic text-foreground/60">silence</span> and <span className="italic text-foreground/60">substance</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className={`group border-t border-foreground/10 pt-8 ${index % 2 !== 0 ? 'md:mt-20' : ''}`}
            >
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-xs font-mono text-muted">{service.number}</span>
                <div className="w-2 h-2 rounded-full bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
              
              <h3 className="text-4xl md:text-6xl font-display mb-6 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              
              <p className="text-lg text-foreground/60 max-w-md leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}