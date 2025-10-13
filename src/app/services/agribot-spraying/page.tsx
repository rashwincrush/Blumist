import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { agribotContent } from '@/lib/content/agribot'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agribot — Precision Spraying',
  description: 'GPS-guided autonomous drone spraying for pesticides and fertilizers. Up to 30 acres/day coverage with precision targeting.',
}

export default function AgribotSprayingPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {agribotContent.title}
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            {agribotContent.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Payload: {agribotContent.performance.payload}
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Coverage: {agribotContent.performance.dailyCapacity}
            </Badge>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">{agribotContent.cta}</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-4">What It Is</h2>
          <p className="text-lg text-slate-700 mb-8">{agribotContent.whatItIs}</p>
          
          <h3 className="text-2xl font-semibold text-navy mb-4">How It Works</h3>
          <ul className="space-y-3">
            {agribotContent.howItWorks.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Benefits</h2>
          <ul className="space-y-3">
            {agribotContent.benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy to-brand-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See It in Action
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Schedule a field demonstration and experience precision agriculture firsthand
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{agribotContent.cta}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
