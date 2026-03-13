"use client";

import Hero from "@/components/sections/Hero";
import Focus from "@/components/sections/Focus";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";

export default function PortfolioContent() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Focus />
      <CaseStudies />
      <Contact />
    </div>
  );
}
