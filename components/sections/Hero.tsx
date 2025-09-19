'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Twitter, Send, BookOpen } from 'lucide-react'
import Button from '@/components/ui/Button'
import FloatingShape from '@/components/animations/FloatingShape'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <FloatingShape className="top-20 left-10" delay={0} />
      <FloatingShape className="bottom-20 right-10" delay={2} />
      <FloatingShape className="top-40 right-1/3" delay={4} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-eolas-cyan" />
            <span className="text-sm font-medium">The Future is Here</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
          >
            Welcome to{' '}
            <span className="text-gradient">Eolas</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Revolutionizing Edge Intelligence with cutting-edge AI solutions
            that transform how we interact with technology
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gradient" size="lg" className="group">
              Join Waitlist
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>

          {/* Social Media & Documentation CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white glass hover:bg-white/10 transition-all duration-300 rounded-full group"
              onClick={() => window.open('https://x.com/eolasai', '_blank')}
            >
              <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              Follow on X
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white glass hover:bg-white/10 transition-all duration-300 rounded-full group"
              onClick={() => window.open('https://t.me/eolasai', '_blank')}
            >
              <Send className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              Join Telegram
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white glass hover:bg-white/10 transition-all duration-300 rounded-full group"
              onClick={() => window.open('https://docs.eolas.ai', '_blank')}
            >
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              View Docs
            </button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { value: '10x', label: 'Faster Processing' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50+', label: 'Enterprise Clients' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  )
}