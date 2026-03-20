"use client";

import { Suspense, lazy } from "react";
import AgencyHero from "@/components/sections/AgencyHero";
import HiddenUploader from "@/components/HiddenUploader";

// Lazy load all sections below the fold — they are not needed until
// the user scrolls, so deferring them lets the hero render faster
// and avoids loading all framer-motion instances at once.
const Services = lazy(() => import("@/components/sections/Services"));
const FeaturedWork = lazy(() => import("@/components/sections/FeaturedWork"));
const Testimonial = lazy(() => import("@/components/sections/Testimonial"));
const Process = lazy(() => import("@/components/sections/Process"));
const Pricing = lazy(() => import("@/components/sections/Pricing"));
const About = lazy(() => import("@/components/sections/About"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const LogoTicker = lazy(() => import("@/components/sections/LogoTicker"));


function SectionFallback() {
  return <div className="min-h-[50vh]" />;
}

export default function AgencyHome() {
  return (
    <div className="min-h-screen bg-background">
      <HiddenUploader />
      <AgencyHero />
      <Suspense fallback={<SectionFallback />}>
        <LogoTicker />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FeaturedWork />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </div>
  );
}
