"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#F2F0E9] border-t border-white/10 px-6 md:px-12 py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-mono uppercase tracking-widest">
        <p>© 2026 ADEV STUDIO. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a
            href="https://www.youtube.com/@AkioandTen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            YouTube
          </a>
          <a
            href="https://x.com/Helloadevstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/akio-devenish-832476282/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
