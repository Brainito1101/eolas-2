'use client'

import ParticleField from './ParticleField'
import GradientMesh from './GradientMesh'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <GradientMesh />
      <ParticleField />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eolas-blue/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-eolas-purple/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-eolas-cyan/20 rounded-full blur-3xl animate-float" />
    </div>
  )
}