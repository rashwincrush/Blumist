'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Shield, TrendingUp, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface ValueProp {
  label: string
  description: string
}

interface ValuePropsProps {
  items: ValueProp[]
}

const icons = [Target, Zap, Shield, TrendingUp, Sparkles]

export function ValueProps({ items }: ValuePropsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <h3 className="font-semibold text-navy mb-2">{item.label}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
