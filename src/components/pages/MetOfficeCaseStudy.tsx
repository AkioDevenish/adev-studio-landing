import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, MapPin, Users, Zap } from 'lucide-react';

export default function MetOfficeCaseStudy() {
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
              <span>2024</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-foreground mb-8">
              Met Office<br />Trinidad & Tobago
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A comprehensive weather information portal serving Trinidad & Tobago with real-time meteorological data, 
              interactive forecasts, and marine conditions.
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
              src="/images/case-studies/met-office/Homepage.png"
              alt="Met Office Trinidad & Tobago Dashboard"
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
                The Met Office Trinidad & Tobago project modernizes weather information delivery for the Caribbean nation. 
                Built as a comprehensive web portal, it provides real-time meteorological data, forecasts, and marine conditions 
                to thousands of users daily.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                The platform processes large datasets from weather stations across both islands, presenting complex meteorological 
                information in an accessible, mobile-responsive interface that serves both the general public and professional users.
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
                  <p className="text-2xl font-bold text-foreground">8 Months</p>
                  <p className="text-sm text-foreground/60">Development Period</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">Users</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-foreground/60">Daily Active Users</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">Coverage</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">2 Islands</p>
                  <p className="text-sm text-foreground/60">Trinidad & Tobago</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">Performance</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">&lt; 2s</p>
                  <p className="text-sm text-foreground/60">Load Time</p>
                </div>
              </div>

              {/* Live Site Button */}
              <a
                href="https://www.metoffice.gov.tt/metdemo/site/demo/"
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
