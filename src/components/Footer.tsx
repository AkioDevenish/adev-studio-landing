"use client";

import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
  { name: "Privacy", href: "/privacy" },
];

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AkioandTen",
  },
  {
    name: "Twitter",
    href: "https://x.com/Helloadevstudio",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akio-devenish-832476282/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#F2F0E9] px-6 md:px-12 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-screen-xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-2xl font-display font-bold tracking-tight block mb-4"
            >
              ADEV STUDIO
            </Link>
            <p className="text-sm text-white/45 leading-relaxed font-light">
              Premium web development, data science, and design solutions for
              ambitious brands. Based in Trinidad & Tobago.
            </p>
          </div>

          {/* Nav + Social */}
          <div className="flex gap-20 md:gap-28">
            {/* Navigation */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 block mb-6">
                Navigation
              </span>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 block mb-6">
                Social
              </span>
              <nav className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-white/[0.04] via-white/[0.06] to-white/[0.04] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/35">
            © 2026 ADEV STUDIO. All rights reserved.
          </p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/35">
            Designed & built by hand
          </p>
        </div>
      </div>
    </footer>
  );
}
