import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  link?: string;
  comingSoon?: boolean;
}

const dataScienceProjects: Project[] = [
  {
    title: "Coming Soon",
    category: "Data Science / ML",
    year: "2025",
    description: "Advanced data science and machine learning projects currently in development as part of my Masters thesis research. Focus areas include neural computation, multisensory data fusion, and brain-computer interface applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    comingSoon: true
  }
];

const developerProjects: Project[] = [
  {
    title: "Met Office Trinidad & Tobago",
    category: "Full Stack / Weather Portal",
    year: "2024",
    description: "Comprehensive weather information portal serving Trinidad & Tobago with real-time meteorological data, interactive forecasts, satellite imagery, and marine conditions.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "https://www.metoffice.gov.tt/metdemo/site/demo/",
  },
  {
    title: "Multi-Hazard Early Warning System",
    category: "Full Stack / Emergency Management",
    year: "2025",
    description: "National early warning system for Trinidad & Tobago delivering real-time alerts for floods, earthquakes, tsunamis, and severe weather.",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2564&auto=format&fit=crop",
    link: "https://multihazard-test.com/home",
  },
  {
    title: "Lum Refillery",
    category: "E-Commerce / Sustainability",
    year: "2024",
    description: "E-commerce platform for an eco-friendly refill store offering sustainable, zero-waste products with a clean modern interface.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2564&auto=format&fit=crop",
    link: "https://lum-refillery.vercel.app/",
  }
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<'developer' | 'datascience'>('developer');

  const openCaseStudy = (project: any) => {
    const slug = project.title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    window.location.hash = `case-study/${slug}`;
  };

  const projects = activeTab === 'developer' ? developerProjects : dataScienceProjects;

  return (
    <section id="work" className="py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-foreground/10 pb-8">
          <h2 className="text-6xl md:text-8xl font-display tracking-tighter mb-8 md:mb-0">
            Projects
          </h2>
          
          {/* Tab Switcher */}
          <div className="flex gap-2 bg-background p-1 rounded-full">
            <button
              onClick={() => setActiveTab('developer')}
              className={`px-6 py-2 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeTab === 'developer'
                  ? 'bg-foreground text-background'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Developer
            </button>
            <button
              onClick={() => setActiveTab('datascience')}
              className={`px-6 py-2 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeTab === 'datascience'
                  ? 'bg-foreground text-background'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Data Science
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-40"
        >
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
                  className="w-full aspect-[4/3] relative"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover object-top transition-all duration-700 ${
                      project.comingSoon ? 'grayscale-[40%]' : 'grayscale-[20%] group-hover:grayscale-0'
                    }`}
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 ${project.comingSoon ? 'bg-black/30' : 'bg-black/10 group-hover:bg-transparent'} transition-colors duration-500`} />
                  {project.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center">
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
                
                <h3 className="text-4xl md:text-5xl font-display leading-none group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/60 max-w-xs">
                  {project.description}
                </p>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => !project.comingSoon && openCaseStudy(project)}
                    disabled={project.comingSoon}
                    className={`text-sm border-b pb-1 pt-4 transition-colors ${
                      project.comingSoon
                        ? 'border-foreground/10 text-foreground/40 cursor-not-allowed'
                        : 'border-foreground/20 hover:border-foreground'
                    }`}
                  >
                    {project.comingSoon ? 'Coming Soon' : 'View Details'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
