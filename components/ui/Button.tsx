'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-eolas-blue text-white hover:bg-eolas-cyan',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    gradient: 'bg-gradient-to-r from-eolas-blue via-eolas-purple to-eolas-pink text-white',
    outline: 'border-2 border-eolas-blue text-eolas-blue hover:bg-eolas-blue hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'rounded-full font-semibold transition-all duration-300',
        'shadow-lg hover:shadow-xl',
        variants[variant],
        sizes[size],
        variant === 'gradient' && 'animate-gradient-x bg-[length:200%]',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}