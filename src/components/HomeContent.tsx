"use client";

import AgencyHero from "@/components/sections/AgencyHero";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function AgencyHome() {
  return (
    <div className="min-h-screen bg-background">
      <AgencyHero />
      <Services />
      <FeaturedWork />
      <Process />
      <Pricing />
      <About />
      <Contact />
    </div>
  );
}

