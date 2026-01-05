import React from 'react'
import { motion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

const SplitText: React.FC<SplitTextProps> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ')

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + (wordIndex * 0.1) + (charIndex * 0.02),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  )
}

export default SplitText