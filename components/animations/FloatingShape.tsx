'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingShapeProps {
  className?: string
  delay?: number
  duration?: number
  children?: React.ReactNode
}

export default function FloatingShape({ 
  className,
  delay = 0,
  duration = 6,
  children
}: FloatingShapeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 10, -10, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn('absolute', className)}
    >
      {children || (
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-eolas-blue/20 to-eolas-purple/20 blur-xl" />
      )}
    </motion.div>
  )
}