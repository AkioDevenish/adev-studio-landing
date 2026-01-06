// @ts-ignore
import Noise from '../reactbits/Noise';

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 px-6 md:px-12 bg-[#1a1a1a] text-[#F2F0E9] overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
        <Noise 
          patternSize={300}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={30}
        />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-7xl md:text-9xl font-display font-bold mb-12 leading-[0.8] tracking-tighter">
                Let's<br />Create.
              </h2>
              <p className="text-xl md:text-2xl font-light opacity-70 max-w-md">
                We are currently accepting new projects for Q3 2026.
              </p>
            </div>

            <div className="space-y-8 mt-20 lg:mt-0">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest opacity-40 font-mono">Email</span>
                <a href="mailto:hello@adevstudio.com" className="text-2xl hover:opacity-70 transition-opacity">
                  hello@adevstudio.com
                </a>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest opacity-40 font-mono">Phone</span>
                <p className="text-2xl">+1 (555) 000-0000</p>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest opacity-40 font-mono">Studio</span>
                <p className="text-2xl">
                  123 Design Avenue<br/>New York, NY 10012
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-12 pt-12 lg:pt-0">
            <div className="group">
              <label className="block text-xs uppercase tracking-widest opacity-40 font-mono mb-4 group-focus-within:opacity-100 transition-opacity">
                Name
              </label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-3xl font-display placeholder:text-white/30"
                placeholder="Your name"
              />
            </div>

            <div className="group">
              <label className="block text-xs uppercase tracking-widest opacity-40 font-mono mb-4 group-focus-within:opacity-100 transition-opacity">
                Email
              </label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-3xl font-display placeholder:text-white/30"
                placeholder="Your email"
              />
            </div>

            <div className="group">
              <label className="block text-xs uppercase tracking-widest opacity-40 font-mono mb-4 group-focus-within:opacity-100 transition-opacity">
                Message
              </label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-3xl font-display resize-none placeholder:text-white/30"
                placeholder="Tell us about your project"
              />
            </div>

            <button className="mt-8 px-10 py-5 bg-[#F2F0E9] text-[#1a1a1a] font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-full">
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-40 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-mono uppercase tracking-widest">
          <p>© 2026 ADEV STUDIO. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}