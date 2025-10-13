import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { realEstateContent } from '@/lib/content/realestate'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Aerials',
  description: 'Professional aerial photography and videography for properties. High-resolution photos, cinematic videos, and 360° views.',
}

export default function RealEstatePage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {realEstateContent.title}
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            {realEstateContent.subtitle}
          </p>
          <Badge variant="secondary" className="text-sm px-4 py-2 mb-8">
            Turnaround: {realEstateContent.turnaround}
          </Badge>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/contact">{realEstateContent.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Properties We Cover</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {realEstateContent.properties.map((item) => (
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
          <h2 className="text-3xl font-bold text-navy mb-6">Deliverables</h2>
          <ul className="space-y-3">
            {realEstateContent.deliverables.map((item) => (
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
            Showcase Your Property
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Professional aerial shots that make your listings stand out
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{realEstateContent.cta}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
