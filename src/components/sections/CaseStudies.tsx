import { motion } from 'framer-motion';
import { useState } from 'react';

const dataScienceProjects = [
  {
    title: "Coming Soon",
    category: "Data Science / ML",
    year: "2025",
    description: "Advanced data science and machine learning projects currently in development as part of my Masters thesis research. Focus areas include neural computation, multisensory data fusion, and brain-computer interface applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const webDevProjects = [
  {
    title: "Met Office Trinidad & Tobago",
    category: "Full Stack / Weather Portal",
    year: "2024",
    description: "Complete weather information portal for Trinidad & Tobago with real-time data, forecasts, marine conditions, and responsive design for public access.",
    image: "/metoffice-clean.jpg",
    link: "https://www.metoffice.gov.tt/metdemo/site/demo/"
  },
  {
    title: "USC Connect Mobile",
    category: "Mobile / React Native",
    year: "2022",
    description: "Cross-platform mobile app connecting students with university resources, built with React Native and Firebase.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2564&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <section id="work" className="py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-end mb-32 border-b border-foreground/10 pb-8">
          <h2 className="text-6xl md:text-8xl font-display tracking-tighter">
            Data Science<br/>Projects
          </h2>
          <button 
            onClick={() => setShowArchive(!showArchive)}
            className="hidden md:block text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background px-6 py-3 border border-foreground/20 transition-all duration-300 rounded-full"
          >
            {showArchive ? 'Hide Archive' : 'View Archive'}
          </button>
        </div>

        <div className="space-y-40">
          {dataScienceProjects.map((project, index) => (
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
                  className="w-full aspect-[4/3] relative"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 ${project.title === "Coming Soon" ? "bg-black/20" : "bg-black/10"} group-hover:bg-transparent transition-colors duration-500`} />
                  {project.title === "Coming Soon" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-sm font-mono text-foreground">In Development</span>
                      </div>
                    </div>
                  )}
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
                  {project.title === "Coming Soon" && (
                    <span className="block text-lg font-mono text-muted mt-4 tracking-wider">
                      Data Science Projects in Development
                    </span>
                  )}
                </h3>
                
                <p className="text-foreground/60 max-w-xs">
                  {project.description}
                </p>
                
                <button 
                  className={`text-sm border-b pb-1 pt-4 transition-colors ${
                    project.title === "Coming Soon" 
                      ? "border-foreground/10 text-foreground/40 cursor-not-allowed" 
                      : "border-foreground/20 hover:border-foreground"
                  }`}
                  disabled={project.title === "Coming Soon"}
                >
                  {project.title === "Coming Soon" ? "In Development" : "View Case Study"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archived Web Development Projects */}
        {showArchive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-40"
          >
            <div className="border-t border-foreground/10 pt-16 mb-20">
              <h3 className="text-4xl font-display mb-4 text-foreground/60">Web Development Archive</h3>
              <p className="text-foreground/40 text-sm font-mono">Previous Web Development Projects</p>
            </div>
            
            <div className="space-y-40">
              {webDevProjects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}
                >
                  <div className="w-full md:w-3/5 overflow-hidden rounded-sm">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="w-full aspect-[4/3] relative"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top grayscale-[40%] group-hover:grayscale-[20%] transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    </motion.div>
                  </div>

                  <div className="w-full md:w-2/5 space-y-6">
                    <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted">
                      <span>{project.category}</span>
                      <span className="w-8 h-[1px] bg-muted" />
                      <span>{project.year}</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-display leading-none group-hover:text-foreground/60 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/50 max-w-xs">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-4">
                      <button className="text-sm border-b border-foreground/20 pb-1 pt-4 hover:border-foreground transition-colors">
                        View Case Study
                      </button>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm border-b border-foreground/20 pb-1 pt-4 hover:border-foreground transition-colors"
                        >
                          Live Site
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="mt-32 text-center md:hidden">
          <button 
            onClick={() => setShowArchive(!showArchive)}
            className="text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background px-6 py-3 border border-foreground/20 transition-all duration-300 rounded-full"
          >
            {showArchive ? 'Hide Archive' : 'View Archive'}
          </button>
        </div>
      </div>
    </section>
  );
}