"use client";

import { motion } from "framer-motion";
import Noise from "@/components/reactbits/Noise";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // Cal.com is initialized globally in Header.tsx

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@adevstudio.com",
      href: "mailto:hello@adevstudio.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "1-868-469-5973",
      href: "tel:+18684695973",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Trinidad & Tobago",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 px-6 md:px-12 bg-[#0f0f0f] text-[#F2F0E9] overflow-hidden min-h-screen flex items-center"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <Noise
          patternSize={300}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={30}
        />
      </div>

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-900/[0.06] to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-900/[0.06] to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-gradient-to-r from-white/40 to-transparent" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/30">
                Get in Touch
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] tracking-tighter">
              Let&apos;s
              <br />
              <span className="italic font-normal text-white/30">Create</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 h-[1px] bg-gradient-to-r from-white/10 via-white/10 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-xl md:text-2xl font-light text-white/50 max-w-md leading-relaxed mb-14">
                Open for web development work and new projects.
              </p>

              <div className="space-y-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group flex items-start gap-5"
                    >
                      <div className="w-11 h-11 rounded-xl border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-500">
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className="text-white/30 group-hover:text-white/60 transition-colors duration-500"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 block mb-1.5">
                          {item.label}
                        </span>
                        <span className="text-xl md:text-2xl font-display group-hover:text-white/70 transition-colors duration-300">
                          {item.value}
                        </span>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Cal.com button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-14"
            >
              <button
                data-cal-namespace="30min"
                data-cal-link="adevstudio/30min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.04] text-[11px] font-mono uppercase tracking-[0.2em] text-white/50 hover:text-white/80 transition-all duration-500"
              >
                <span>Book a Free Call</span>
                <div className="w-6 h-6 rounded-full border border-white/15 group-hover:border-white/30 flex items-center justify-center transition-all duration-300">
                  <ArrowRight
                    size={10}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "de373533-0217-44a2-ae9f-eaf81e5dd8ce"}
              />
              <input
                type="hidden"
                name="subject"
                value="New Contact from ADEV Studio Website"
              />
              <input
                type="hidden"
                name="from_name"
                value="ADEV Studio Website"
              />

              {[
                { label: "Name", type: "text", name: "name", placeholder: "Your name" },
                { label: "Email", type: "email", name: "email", placeholder: "Your email" },
              ].map((field) => (
                <div key={field.name} className="group">
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-white/35 font-mono mb-4 group-focus-within:text-white/50 transition-colors duration-300">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="w-full bg-transparent border-b border-white/[0.08] py-4 focus:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] outline-none transition-all duration-500 text-2xl md:text-3xl font-display placeholder:text-white/30 rounded-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.25em] text-white/35 font-mono mb-4 group-focus-within:text-white/50 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/[0.08] py-4 focus:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] outline-none transition-all duration-500 text-2xl md:text-3xl font-display resize-none placeholder:text-white/30 rounded-sm"
                  placeholder="Tell me about your project"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="group mt-4 px-10 py-5 bg-[#F2F0E9] text-[#0f0f0f] font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 rounded-full disabled:opacity-50 flex items-center gap-3"
              >
                {formStatus === "sending"
                  ? "Sending..."
                  : formStatus === "success"
                  ? "Message Sent ✓"
                  : "Send Message"}
                {formStatus === "idle" && (
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>

              {formStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400/80 text-sm font-mono"
                >
                  Thank you! Your message has been sent.
                </motion.p>
              )}
              {formStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400/80 text-sm font-mono"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
