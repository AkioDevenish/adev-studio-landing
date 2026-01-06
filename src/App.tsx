import React from 'react'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import Background from './components/sections/Background'
import Focus from './components/sections/Focus'
import CaseStudies from './components/sections/CaseStudies'
import Contact from './components/sections/Contact'

function App() {
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