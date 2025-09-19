'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export default function Card({ 
  children, 
  className,
  hover = true,
  gradient = false 
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative rounded-2xl p-8',
        'backdrop-blur-md bg-white/5',
        'border border-white/10',
        'transition-all duration-300',
        gradient && 'overflow-hidden',
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-eolas-blue/20 to-eolas-purple/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}