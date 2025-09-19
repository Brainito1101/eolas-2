'use client'

export default function GradientMesh() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-eolas-blue/10 via-eolas-purple/10 to-eolas-pink/10 animate-gradient-xy" />
      <div className="absolute inset-0 bg-gradient-to-tr from-eolas-cyan/10 via-transparent to-eolas-blue/10 animate-gradient-xy" style={{ animationDelay: '-5s' }} />
    </div>
  )
}