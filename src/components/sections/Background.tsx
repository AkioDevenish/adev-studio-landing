import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Background() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="background" ref={containerRef} className="py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-foreground/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-foreground/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-foreground/20 rounded-full" />
      </div>

      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
              ( Background )
            </h2>
            <p className="text-3xl md:text-5xl font-display max-w-2xl leading-tight">
              From <span className="italic text-foreground/60">meteorology</span> to the future of <span className="italic text-foreground/60">immersive tech</span>.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent transform -translate-x-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left Column - Education & Experience */}
            <div className="space-y-20">
              <motion.div 
                style={{ y: y1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="border-t border-foreground/10 pt-8 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <h3 className="text-2xl font-display">Education</h3>
                  </div>
                </div>
                
                <div className="space-y-8 pl-7">
                  <div className="relative">
                    <div className="absolute -left-7 top-2 w-2 h-2 rounded-full bg-foreground/30" />
                    <p className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">2025 - 2026</p>
                    <h4 className="text-xl font-display mb-1">MSc Data Science</h4>
                    <p className="text-foreground/60">University of East London</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-2 w-2 h-2 rounded-full bg-foreground/30" />
                    <p className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">2018 - 2023</p>
                    <h4 className="text-xl font-display mb-1">BSc Computing</h4>
                    <p className="text-foreground/60">University of Southern Caribbean</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                style={{ y: y2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group"
              >
                <div className="border-t border-foreground/10 pt-8 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <h3 className="text-2xl font-display">Experience</h3>
                  </div>
                </div>
                
                <div className="space-y-8 pl-7">
                  <div className="relative">
                    <div className="absolute -left-7 top-2 w-2 h-2 rounded-full bg-foreground/30" />
                    <p className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">2023 - 2025</p>
                    <h4 className="text-xl font-display mb-1">Web Developer</h4>
                    <p className="text-foreground/60 mb-2">Trinidad & Tobago Met Division</p>
                    <p className="text-sm text-foreground/50">Built data processing systems for weather monitoring</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-2 w-2 h-2 rounded-full bg-foreground/30" />
                    <p className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">2019 - 2020</p>
                    <h4 className="text-xl font-display mb-1">Computer Lab Assistant</h4>
                    <p className="text-foreground/60">University of Southern Caribbean</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Vision & Skills */}
            <div className="space-y-20 lg:mt-20">
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group"
              >
                <div className="border-t border-foreground/10 pt-8 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <h3 className="text-2xl font-display">Vision</h3>
                  </div>
                </div>
                
                <div className="pl-7">
                  <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                    Bridging data science, AI, and immersive technology to create the next generation of neural-XR interfaces.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Machine Learning', 'Computer Vision', 'XR Development', 'Neural Networks'].map((skill, index) => (
                      <span key={index} className="text-xs px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-foreground/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}