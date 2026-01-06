// @ts-ignore
import Noise from '../reactbits/Noise';
import { useEffect, useState } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#1a1a1a" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

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
                hello@adevstudio.com                </a>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest opacity-40 font-mono">Phone</span>
                <p className="text-2xl">1-868-469-5973</p>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest opacity-40 font-mono">Location</span>
                <p className="text-2xl">
                  LP52 Sunset Drive<br/>Trinidad & Tobago
                </p>
              </div>

              <div className="pt-8">
                <button 
                  data-cal-namespace="30min"
                  data-cal-link="adevstudio/30min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className="inline-block px-8 py-4 bg-[#F2F0E9] text-[#1a1a1a] font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-full cursor-pointer"
                >
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12 pt-12 lg:pt-0">
            <input type="hidden" name="access_key" value="bcef8f96-f94f-4835-91ad-68663bc8a66e" />
            <input type="hidden" name="subject" value="New Contact from ADEV Studio Website" />
            <input type="hidden" name="from_name" value="ADEV Studio Website" />
            
            <div className="group">
              <label className="block text-xs uppercase tracking-widest opacity-40 font-mono mb-4 group-focus-within:opacity-100 transition-opacity">
                Name
              </label>
              <input 
                type="text"
                name="name"
                required
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
                name="email"
                required
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-3xl font-display placeholder:text-white/30"
                placeholder="Your email"
              />
            </div>

            <div className="group">
              <label className="block text-xs uppercase tracking-widest opacity-40 font-mono mb-4 group-focus-within:opacity-100 transition-opacity">
                Message
              </label>
              <textarea 
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-3xl font-display resize-none placeholder:text-white/30"
                placeholder="Tell us about your project"
              />
            </div>

            <button 
              type="submit"
              disabled={formStatus === 'sending'}
              className="mt-8 px-10 py-5 bg-[#F2F0E9] text-[#1a1a1a] font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-full disabled:opacity-50"
            >
              {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
            
            {formStatus === 'success' && (
              <p className="text-green-400 text-sm font-mono">Thank you! Your message has been sent.</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-400 text-sm font-mono">Something went wrong. Please try again.</p>
            )}
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