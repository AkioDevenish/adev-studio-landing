import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const focusAreas = [
  {
    title: "Foundations",
    description: "Python, SQL and Statistics.",
    timeline: "1-2 months"
  },
  {
    title: "Data Science & Machine Learning",
    description: "Pandas, Scikit-learn, supervised/unsupervised learning, neural networks",
    timeline: "2-4 months"
  },
  {
    title: "Computer Vision ",
    description: "OpenCV, CNNs, YOLO, segmentation and depth estimation",
    timeline: "4-6 months"
  },
    {
    title: "Advanced ML",
    description: "PyTorch/TensorFlow, transformers, diffusion/Gaussian splatting",
    timeline: "6-8 months"
  },
  
  {
    title: "XR Development",
    description: "Unity/Unreal, ARKit/ARCore, ML integration, multisensory APIs",
    timeline: "8-10 months"
  },
];

export default function Focus() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section id="focus" ref={containerRef} className="py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-widest text-muted"
          >
            ( Focus )
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display max-w-2xl text-right leading-tight mt-8 md:mt-0"
          >
            My <span className="italic text-foreground/60">learning journey</span> toward the future of <span className="italic text-foreground/60">neural-XR interfaces</span>.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line down the middle */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
            {focusAreas.map((area, index) => (
              <motion.div 
                key={index}
                style={{ y: index % 2 === 0 ? y1 : y2 }}
                className={`group border-t border-foreground/10 pt-8 ${index % 2 !== 0 ? 'md:mt-20' : ''}`}
              >
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-xs font-mono text-muted bg-foreground/5 px-2 py-1 rounded">{area.timeline}</span>
                  <div className="w-2 h-2 rounded-full bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                </div>
                
                <h3 className="text-4xl md:text-6xl font-display mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {area.title}
                </h3>
                
                <p className="text-lg text-foreground/60 max-w-md leading-relaxed font-light">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}