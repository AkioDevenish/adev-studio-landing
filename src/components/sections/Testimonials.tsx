import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "YOUWARE transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.",
    author: "Sarah Johnson",
    company: "Tech Innovations Inc.",
    role: "CEO"
  },
  {
    quote: "The team's expertise in digital strategy helped us increase our online engagement by 300%. Truly exceptional work.",
    author: "Michael Chen",
    company: "Green Energy Solutions",
    role: "Marketing Director"
  },
  {
    quote: "Working with YOUWARE was a game-changer. They understood our vision and brought it to life beautifully.",
    author: "Emily Rodriguez",
    company: "Artisan Collective",
    role: "Founder"
  }
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
        </motion.div>

        <div className="relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <blockquote className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-center">
                <cite className="not-italic">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-muted text-sm">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </cite>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-foreground' : 'bg-muted/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials