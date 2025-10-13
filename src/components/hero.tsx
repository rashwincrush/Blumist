'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle, ArrowRight, Zap, Shield, Target } from 'lucide-react'
import { site } from '@/lib/site'
import { useRef } from 'react'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  cta?: {
    primary: string
    secondary?: string
    whatsapp?: string
  }
}

export function Hero({ title, subtitle, cta }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating particles (deterministic for SSR hydration) */}
      {[...Array(20)].map((_, i) => {
        // Deterministic pseudo-random based on index
        const left = ((i * 37.3) % 100).toFixed(3)
        const top = ((i * 53.7) % 100).toFixed(3)
        const duration = 2.8 + ((i % 5) * 0.4)
        const delay = (i % 7) * 0.15
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
          />
        )
      })}

      <motion.div 
        className="container mx-auto px-4 py-20 relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">DGCA Certified • Survey Grade Accuracy</span>
            </motion.div>

            {/* Title with gradient */}
            <div className="relative inline-block">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  {title}
                </span>
              </motion.h1>

              {/* Floating logo beside headline (md+) */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-4 hidden md:block"
                animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full scale-150" />
                  <Image
                    src="/Logo.png"
                    alt="BluMist Logo"
                    width={120}
                    height={120}
                    className="relative drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button asChild size="lg" className="text-base bg-blue-600 hover:bg-blue-700 text-white group">
                  <Link href="/contact">
                    {cta.primary}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {cta.secondary && (
                  <Button asChild size="lg" variant="outline" className="text-base border-blue-400/30 text-blue-100 hover:bg-blue-500/10">
                    <Link href="/contact">{cta.secondary}</Link>
                  </Button>
                )}
                {cta.whatsapp && (
                  <>
                    <Button asChild size="lg" variant="secondary" className="text-base bg-green-600 hover:bg-green-700 text-white">
                      <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {cta.whatsapp}
                      </a>
                    </Button>
                    {/* Animated logo next to Chat with Pilot */}
                    <motion.div
                      aria-hidden
                      className="relative"
                      animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Image
                        src="/Logo.png"
                        alt="BluMist Logo"
                        width={56}
                        height={56}
                        className="drop-shadow-2xl"
                        priority
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            )}
          </div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Target, title: '5-10mm Accuracy', desc: 'Survey-grade precision mapping' },
              { icon: Zap, title: '48-Hour Delivery', desc: 'Fast turnaround guaranteed' },
              { icon: Shield, title: 'DGCA Compliant', desc: '100% certified operations' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <feature.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-blue-200/70">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-blue-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
