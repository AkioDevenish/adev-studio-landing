import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Shield, Users, Zap } from 'lucide-react';

export default function MultiHazardCaseStudy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    window.location.hash = '';
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md py-4 border-b border-foreground/10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Portfolio</span>
          </button>
          <a href="#" className="text-2xl font-display font-bold text-foreground">
            ADEV STUDIO
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-muted mb-6">
              <span>Full Stack Development</span>
              <span className="w-8 h-[1px] bg-muted" />
              <span>2025</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-foreground mb-8">
              Multi-Hazard<br />Early Warning System
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A national early warning system for Trinidad & Tobago delivering real-time alerts for natural disasters 
              and emergency events to protect lives and livelihoods.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2564&auto=format&fit=crop"
              alt="Multi-Hazard Early Warning System"
              className="w-full h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
                Project Overview
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                The Multi-Hazard Early Warning System (MHEWS) is a national initiative developed in collaboration 
                with the Office of Disaster Preparedness and Management (ODPM), UWI Seismic Research Centre, 
                and the Inter-American Development Bank.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                The platform provides integrated, people-centred early warnings for multiple hazards including 
                floods, earthquakes, tsunamis, severe weather, landslides, and other emergency events. 
                It delivers faster alerts, improves coordination between agencies, and strengthens 
                community resilience across Trinidad & Tobago.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">Timeline</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">Ongoing</p>
                  <p className="text-sm text-foreground/60">Active Development</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">Hazards</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">10+</p>
                  <p className="text-sm text-foreground/60">Alert Types</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">Coverage</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">National</p>
                  <p className="text-sm text-foreground/60">Trinidad & Tobago</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">Alerts</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">Real-time</p>
                  <p className="text-sm text-foreground/60">Instant Delivery</p>
                </div>
              </div>

              {/* Live Site Button */}
              <a
                href="https://multihazard-test.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
              >
                <ExternalLink size={20} />
                View Live Site
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-[#1a1a1a] text-[#F2F0E9]">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-mono uppercase tracking-widest">
          <p>© 2026 ADEV STUDIO. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="https://www.youtube.com/@AkioandTen" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">YouTube</a>
            <a href="https://x.com/Helloadevstudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Twitter</a>
            <a href="https://www.linkedin.com/in/akio-devenish-832476282/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
