'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Connect Your Infrastructure',
    description: 'Seamlessly integrate Eolas with your existing systems using our simple APIs and SDKs.'
  },
  {
    number: '02',
    title: 'Deploy AI Models',
    description: 'Upload and deploy your AI models to our edge network with just a few clicks.'
  },
  {
    number: '03',
    title: 'Monitor & Optimize',
    description: 'Real-time monitoring and automatic optimization ensure peak performance.'
  },
  {
    number: '04',
    title: 'Scale Globally',
    description: 'Expand your reach across regions with our distributed infrastructure.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-gray-300">
              Get started with Eolas in minutes, not months
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-eolas-blue via-eolas-purple to-eolas-pink" />

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-2xl ml-16 md:ml-0"
                  >
                    <div className="text-5xl font-bold text-gradient opacity-30 mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-eolas-dark border-4 border-eolas-blue flex items-center justify-center"
                >
                  <CheckCircle className="w-8 h-8 text-eolas-cyan" />
                </motion.div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}