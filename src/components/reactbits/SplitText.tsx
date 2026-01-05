import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  splitType?: 'chars' | 'words' | 'lines'
  from?: { opacity?: number; y?: number; x?: number; scale?: number }
  to?: { opacity?: number; y?: number; x?: number; scale?: number }
  threshold?: number
  rootMargin?: string
  textAlign?: 'left' | 'center' | 'right'
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  ease = 'easeOut',
  splitType = 'chars',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '0px',
  textAlign = 'left'
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    amount: threshold, 
    margin: rootMargin as any,
    once: true 
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const getEaseFunction = (easeString: string) => {
    switch (easeString) {
      case 'circ.out':
        return [0.25, 0.46, 0.45, 0.94]
      case 'back.out':
        return [0.34, 1.56, 0.64, 1]
      case 'expo.out':
        return [0.16, 1, 0.3, 1]
      default:
        return 'easeOut'
    }
  }

  const splitText = () => {
    if (splitType === 'words') {
      return text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          <motion.span
            className="inline-block"
            initial={from}
            animate={controls}
            variants={{
              visible: {
                ...to,
                transition: {
                  duration: duration,
                  delay: (delay / 1000) + (wordIndex * 0.1),
                  ease: getEaseFunction(ease)
                }
              }
            }}
          >
            {word}
          </motion.span>
        </span>
      ))
    }

    // Default to chars
    const words = text.split(' ')
    let charIndex = 0

    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block mr-2">
        {word.split('').map((char, charIndexInWord) => {
          const currentCharIndex = charIndex++
          return (
            <motion.span
              key={charIndexInWord}
              className="inline-block"
              initial={from}
              animate={controls}
              variants={{
                visible: {
                  ...to,
                  transition: {
                    duration: duration,
                    delay: (delay / 1000) + (currentCharIndex * 0.02),
                    ease: getEaseFunction(ease)
                  }
                }
              }}
            >
              {char}
            </motion.span>
          )
        })}
      </span>
    ))
  }

  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[textAlign]

  return (
    <div ref={ref} className={`${className} ${textAlignClass}`}>
      {splitText()}
    </div>
  )
}

export default SplitText