'use client'

import Navbar from '@/components/ui/Navbar'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import LeadForm from '@/components/sections/LeadForm'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <LeadForm />
        <Footer />
      </main>
    </>
  )
}