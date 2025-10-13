import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { eventsContent } from '@/lib/content/events'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Event Aerial Coverage',
  description: 'Stunning aerial shots for weddings, corporate events, and public gatherings. Capture the scale and energy of your special moments.',
}

export default function EventsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {eventsContent.title}
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            {eventsContent.subtitle}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">{eventsContent.cta}</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Events We Cover</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventsContent.events.map((item) => (
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
          <h2 className="text-3xl font-bold text-navy mb-6">Shot Types</h2>
          <ul className="space-y-3">
            {eventsContent.shots.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Safety First</h2>
          <ul className="space-y-3">
            {eventsContent.safety.map((item) => (
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
            Capture Your Event from Above
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Book your date and add a unique perspective to your special occasion
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">{eventsContent.cta}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
