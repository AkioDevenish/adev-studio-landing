import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import Background from './components/sections/Background'
import Focus from './components/sections/Focus'
import CaseStudies from './components/sections/CaseStudies'
import Contact from './components/sections/Contact'
import MetOfficeCaseStudy from './components/pages/MetOfficeCaseStudy'
import MultiHazardCaseStudy from './components/pages/MultiHazardCaseStudy'
import LumRefillery from './components/pages/LumRefillery'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || 'home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPath.startsWith('case-study/met-office-trinidad-and-tobago')) {
    return <MetOfficeCaseStudy />;
  }

  if (currentPath.startsWith('case-study/multi-hazard-early-warning-system')) {
    return <MultiHazardCaseStudy />;
  }

  if (currentPath.startsWith('case-study/lum-refillery')) {
    return <LumRefillery />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Background />
      <Focus />
      <CaseStudies />
      <Contact />
    </div>
  )
}

export default App