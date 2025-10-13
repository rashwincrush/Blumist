import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { solarContent } from '@/lib/content/solar'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Drone‑Based Solar Panel Cleaning',
  description: 'Automated solar panel cleaning to maximize yield. Water-efficient, safe, and effective cleaning solutions.',
}

export default function SolarCleaningPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {solarContent.title}
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            {solarContent.subtitle}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">{solarContent.cta}</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Cleaning Mechanisms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solarContent.mechanisms.map((mech) => (
              <Card key={mech.type}>
                <CardHeader>
                  <CardTitle className="text-lg">{mech.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{mech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Benefits</h2>
          <ul className="space-y-3">
            {solarContent.benefits.map((item) => (
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
            Boost Your Solar Output
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Recover 10-15% energy output with regular drone-based cleaning
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{solarContent.cta}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
