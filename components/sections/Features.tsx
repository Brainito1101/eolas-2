'use client'

import { motion } from 'framer-motion'
import { Shield, Network, BarChart3, Cloud, Lock, Layers } from 'lucide-react'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { slideInLeft, slideInRight } from '@/lib/animations'

const eolasEdgeFeatures = [
  { icon: Shield, text: 'Enterprise-grade security' },
  { icon: BarChart3, text: 'Real-time analytics' },
  { icon: Lock, text: 'End-to-end encryption' },
]

const eolasReachFeatures = [
  { icon: Network, text: 'Global network optimization' },
  { icon: Cloud, text: 'Multi-cloud deployment' },
  { icon: Layers, text: 'Seamless integration' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-lg text-gray-300">
              Discover our revolutionary suite of edge intelligence solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card gradient className="h-full">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  Eolas<span className="text-gradient">Edge</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Deploy AI models at the edge for ultra-low latency processing.
                  Perfect for real-time applications requiring instant decision-making.
                </p>
              </div>
              
              <div className="space-y-4">
                {eolasEdgeFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3"
                  >
                    <feature.icon className="w-5 h-5 text-eolas-cyan" />
                    <span className="text-gray-200">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 p-4 rounded-lg bg-gradient-to-r from-eolas-blue/10 to-eolas-purple/10"
              >
                <div className="text-sm text-gray-400">Performance</div>
                <div className="text-2xl font-bold text-gradient">10ms latency</div>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card gradient className="h-full">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  Eolas<span className="text-gradient">Reach</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Extend your AI capabilities globally with our distributed infrastructure.
                  Scale seamlessly across regions and cloud providers.
                </p>
              </div>
              
              <div className="space-y-4">
                {eolasReachFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3"
                  >
                    <feature.icon className="w-5 h-5 text-eolas-pink" />
                    <span className="text-gray-200">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 p-4 rounded-lg bg-gradient-to-r from-eolas-purple/10 to-eolas-pink/10"
              >
                <div className="text-sm text-gray-400">Coverage</div>
                <div className="text-2xl font-bold text-gradient">150+ regions</div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}