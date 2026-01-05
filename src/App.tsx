import React from 'react'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import CaseStudies from './components/sections/CaseStudies'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App