import React, { useEffect, useRef } from 'react'

interface NoiseProps {
  opacity?: number
  className?: string
}

const Noise: React.FC<NoiseProps> = ({ opacity = 0.1, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255
        data[i] = noise     // Red
        data[i + 1] = noise // Green
        data[i + 2] = noise // Blue
        data[i + 3] = opacity * 255 // Alpha
      }

      ctx.putImageData(imageData, 0, 0)
    }

    resizeCanvas()
    generateNoise()

    window.addEventListener('resize', () => {
      resizeCanvas()
      generateNoise()
    })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [opacity])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-50 ${className}`}
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}

export default Noise