import { motion } from 'framer-motion';

const projects = [
  {
    title: "Lumina",
    category: "Branding / Web",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Apex Arch",
    category: "Architecture / 3D",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
  },
  {
    title: "Mono",
    category: "Product Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2574&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-end mb-32 border-b border-foreground/10 pb-8">
          <h2 className="text-6xl md:text-8xl font-display tracking-tighter">
            Selected<br/>Works
          </h2>
          <button className="hidden md:block text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background px-6 py-3 border border-foreground/20 transition-all duration-300 rounded-full">
            View Archive
          </button>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}
            >
              <div className="w-full md:w-3/5 overflow-hidden rounded-sm">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-[70vh] relative"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              </div>

              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted">
                  <span>{project.category}</span>
                  <span className="w-8 h-[1px] bg-muted" />
                  <span>{project.year}</span>
                </div>
                
                <h3 className="text-6xl md:text-7xl font-display leading-none group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/60 max-w-xs">
                  A comprehensive design system focusing on clarity and reduction.
                </p>
                
                <button className="text-sm border-b border-foreground/20 pb-1 pt-4 hover:border-foreground transition-colors">
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center md:hidden">
          <button className="text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background px-6 py-3 border border-foreground/20 transition-all duration-300 rounded-full">
            View Archive
          </button>
        </div>
      </div>
    </section>
  );
}