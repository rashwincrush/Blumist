'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  description?: string
  buttonText: string
  buttonHref: string
}

export function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-brand-900 to-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.brand.600/.2),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl text-brand-100 mb-8">
              {description}
            </p>
          )}
          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
