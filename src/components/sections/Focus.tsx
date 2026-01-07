import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

type PhaseItem = {
  title: string;
  description: string;
  timeline: string;
};

type Phase = {
  title: string;
  items: PhaseItem[];
};

const phases: Record<number, Phase> = {
  1: {
    title: "Phase 1: Foundations, Data Science & XR ",
    items: [
      {
        title: "Foundations",
        description: "Python, SQL and Statistics.",
        timeline: "1-2 months"
      },
      {
        title: "Data Science & Machine Learning",
        description: "Pandas, Scikit-learn, supervised/unsupervised learning and neural networks",
        timeline: "2-4 months"
      },
      {
        title: "Computer Vision",
        description: "OpenCV, CNNs, YOLO, segmentation and depth estimation",
        timeline: "4-6 months"
      },
      {
        title: "Advanced ML",
        description: "PyTorch/TensorFlow, transformers and diffusion/Gaussian splatting",
        timeline: "6-8 months"
      },
      {
        title: "XR Development",
        description: "Unity/Unreal, ARKit/ARCore, ML integration and multisensory APIs",
        timeline: "8-10 months"
      }
    ]
  },
  2: {
    title: "Phase 2: Research & Thesis Development",
    items: [
      {
        title: "Multisensory Specialization Thesis",
        description: "Masters thesis on advanced sensor fusion, haptics/olfactory integration, user studies and DS applications in neuro relevant ML",
        timeline: "1–6 months"
      },
      {
        title: "Neuroengineering Transition & Advanced Training",
        description: "PhD programs in computational neuroscience or neural engineering certificates + lab internships at companies like Neuralink",
        timeline: "6 months–4 years"
      }
    ]
  },
  3: {
    title: "Phase 3: Neural Interface Development",
    items: [
      {
        title: "Neuroscience Basics",
        description: "Brain anatomy, electrophysiology and MNE-Python",
        timeline: "6–12 months"
      },
      {
        title: "BCI Fundamentals",
        description: "OpenBCI/BrainFlow (EEG), ML decoding and non-invasive hybrids",
        timeline: "12–18 months"
      },
      {
        title: "Advanced BCI/Neuroengineering",
        description: "Implant simulation/analysis, bidirectional encoding and regulatory knowledge",
        timeline: "12–24 months"
      }
    ]
  },
};

export default function Focus() {
  const [activePhase, setActivePhase] = useState(1);
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

        {/* Phase Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-foreground/5 rounded-full p-1">
            {[1, 2, 3].map((phase) => (
              <button
                key={phase}
                onClick={() => setActivePhase(phase)}
                className={`px-6 py-3 rounded-full text-sm font-mono transition-all duration-300 ${
                  activePhase === phase
                    ? 'bg-foreground text-background'
                    : 'text-foreground/60 hover:text-foreground/80'
                }`}
              >
                Phase {phase}
              </button>
            ))}
          </div>
        </div>

        {/* Phase Title */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-display text-foreground/80">
            {phases[activePhase].title}
          </h3>
        </motion.div>

        <div className="relative">
          {/* Vertical line down the middle */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 transform -translate-x-1/2 hidden md:block"></div>
          
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32"
          >
            {phases[activePhase].items.map((area: PhaseItem, index: number) => (
              <motion.div 
                key={index}
                style={{ y: index % 2 === 0 ? y1 : y2 }}
                className={`group border-t border-foreground/10 pt-8 ${index % 2 !== 0 ? 'md:mt-20' : ''}`}
              >
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-xs font-mono text-muted bg-foreground/5 px-2 py-1 rounded flex items-center gap-2">
                    {activePhase === 1 && area.title === "Foundations" && (
                      <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping" />
                      </div>
                    )}
                    {activePhase === 2 && area.title === "Multisensory Specialization Thesis" && (
                      <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping" />
                      </div>
                    )}
                    {area.timeline}
                  </span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}