'use client'

import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const canvasEl: HTMLCanvasElement = c

    const ctx = canvasEl.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvasEl.width = window.innerWidth
      canvasEl.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvasEl.width
        this.y = Math.random() * canvasEl.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = canvasEl.width
        if (this.x > canvasEl.width) this.x = 0
        if (this.y < 0) this.y = canvasEl.height
        if (this.y > canvasEl.height) this.y = 0
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y)
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 150)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  )
}