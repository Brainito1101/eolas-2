'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, Globe, Zap } from 'lucide-react'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { staggerContainer } from '@/lib/animations'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Advanced machine learning algorithms that adapt and evolve'
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Process data at the edge for ultra-low latency'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy across multiple regions with seamless integration'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time processing with millisecond response times'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="text-gradient">Eolas</span>?
            </h2>
            <p className="text-lg text-gray-300">
              Eolas represents the next generation of edge intelligence platforms,
              combining cutting-edge AI with distributed computing to deliver
              unprecedented performance and scalability.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full text-center group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-3 rounded-full bg-gradient-to-br from-eolas-blue/20 to-eolas-purple/20 mb-4"
                >
                  <feature.icon className="w-8 h-8 text-eolas-cyan" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}