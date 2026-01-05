import React, { useEffect, useRef } from 'react'

interface NoiseProps {
  patternSize?: number
  patternScaleX?: number
  patternScaleY?: number
  patternRefreshInterval?: number
  patternAlpha?: number
  className?: string
}

const Noise: React.FC<NoiseProps> = ({ 
  patternSize = 300,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 30,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const lastUpdateRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * patternScaleX
      canvas.height = window.innerHeight * patternScaleY
    }

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      // Create noise pattern based on patternSize
      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % canvas.width
        const y = Math.floor((i / 4) / canvas.width)
        
        // Create pattern based on position and patternSize
        const patternX = Math.floor(x / patternSize)
        const patternY = Math.floor(y / patternSize)
        const seed = patternX * 1000 + patternY
        
        // Pseudo-random noise based on seed
        const noise = ((seed * 9301 + 49297) % 233280) / 233280 * 255
        
        data[i] = noise     // Red
        data[i + 1] = noise // Green
        data[i + 2] = noise // Blue
        data[i + 3] = (patternAlpha / 100) * 255 // Alpha
      }

      ctx.putImageData(imageData, 0, 0)
    }

    const animate = (currentTime: number) => {
      if (currentTime - lastUpdateRef.current >= patternRefreshInterval * 1000) {
        generateNoise()
        lastUpdateRef.current = currentTime
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    generateNoise()
    
    if (patternRefreshInterval > 0) {
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      generateNoise()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ 
        mixBlendMode: 'multiply',
        transform: `scale(${patternScaleX}, ${patternScaleY})`
      }}
    />
  )
}

export default Noise