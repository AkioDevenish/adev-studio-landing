import { motion } from 'framer-motion';
// @ts-ignore
import SplitText from '../reactbits/SplitText';

// Force rebuild - updated portfolio tagline
export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      
      <div className="z-10 text-center px-4">
        <div className="mb-8">
          <SplitText
            text="ADEV STUDIO"
            className="text-7xl md:text-9xl lg:text-[11rem] font-display font-bold tracking-tighter text-foreground leading-[0.8]"
            delay={100}
            duration={1.2}
            ease="circ.out"
            splitType="chars"
            from={{ opacity: 0, y: 100 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xl md:text-2xl text-foreground/70 max-w-lg mx-auto font-sans font-light tracking-wide">
          Data Science → Neural Interface Journey     </p>
          <span className="text-xs font-mono uppercase tracking-widest text-muted mt-4">
            Est. 2025
          </span>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-foreground/40">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-foreground/10 overflow-hidden">
            <div className="w-full h-full bg-foreground/40 animate-bounce origin-top" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}