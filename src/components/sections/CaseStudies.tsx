import { motion } from 'framer-motion';

const dataScienceProjects = [
  {
    title: "Weather Analytics Platform",
    category: "Data Science / ML",
    year: "2024",
    description: "Built predictive models for weather pattern analysis using Python, scikit-learn, and time series forecasting.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Sensor Network Intelligence",
    category: "Computer Vision / IoT",
    year: "2023",
    description: "Developed automated quality control systems for meteorological sensors using OpenCV and neural networks.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2700&auto=format&fit=crop"
  }
];

const webDevProjects = [
  {
    title: "Met Office Trinidad & Tobago",
    category: "Full Stack / Weather Portal",
    year: "2024",
    description: "Complete weather information portal for Trinidad & Tobago with real-time data, forecasts, marine conditions, and responsive design for public access.",
    image: "/metoffice-screenshot.png",
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
  const allProjects = [...dataScienceProjects, ...webDevProjects];

  return (
    <section id="work" className="py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-end mb-32 border-b border-foreground/10 pb-8">
          <h2 className="text-6xl md:text-8xl font-display tracking-tighter">
            Development<br/>Projects
          </h2>
          <button className="hidden md:block text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background px-6 py-3 border border-foreground/20 transition-all duration-300 rounded-full">
            View Archive
          </button>
        </div>

        {/* Data Science Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-display mb-12 text-foreground/60">AI & Data Science</h3>
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
                    {project.description}
                  </p>
                  
                  <button className="text-sm border-b border-foreground/20 pb-1 pt-4 hover:border-foreground transition-colors">
                    View Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Web Development Section */}
        <div className="mt-40">
          <h3 className="text-2xl font-display mb-12 text-foreground/60">Web Development</h3>
          <div className="space-y-40">
            {webDevProjects.map((project, index) => (
              <motion.div 
                key={index + dataScienceProjects.length}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${(index + dataScienceProjects.length) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}
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