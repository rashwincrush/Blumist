import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mappingContent } from '@/lib/content/mapping'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aerial Mapping & Survey',
  description: 'Survey-grade aerial mapping with up to 5–10 mm accuracy. Orthomosaics, 3D terrain models, and volumetric analysis delivered in ≤ 48 hours.',
}

export default function MappingSurveyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {mappingContent.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {mappingContent.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Accuracy: {mappingContent.specs.accuracy}
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Turnaround: {mappingContent.specs.turnaround}
              </Badge>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">{mappingContent.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">Who It&apos;s For</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mappingContent.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-mist">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mappingContent.whatYouGet.map((item) => (
                <Card key={item}>
                  <CardContent className="p-4">
                    <p className="text-slate-700">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mappingContent.process.map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-600 text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{item.step}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-mist">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">Deliverables</h2>
            <ul className="space-y-3">
              {mappingContent.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy to-brand-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Map Your Site?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Get accurate, actionable data for your next project
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{mappingContent.cta}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
