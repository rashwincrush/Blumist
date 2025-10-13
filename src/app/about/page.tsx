import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { aboutContent } from '@/lib/content/about'
import { CheckCircle2, Users, Plane, Wrench, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'BluMist Aerial Solutions delivers decision‑grade aerial data and services for Tamil Nadu. DGCA‑compliant, Chennai-based drone operations.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {aboutContent.title}
          </h1>
          <p className="text-xl text-slate-600">
            {aboutContent.mission}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-slate-700">
            {aboutContent.story.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-mist">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-brand-600" />
            <h2 className="text-3xl font-bold text-navy">Our Team</h2>
          </div>
          <p className="text-lg text-slate-700 mb-6">{aboutContent.team.description}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutContent.team.roles.map((role) => (
              <li key={role} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Plane className="w-8 h-8 text-brand-600" />
            <h2 className="text-3xl font-bold text-navy">Our Fleet</h2>
          </div>
          <p className="text-lg text-slate-700 mb-6">{aboutContent.fleet.description}</p>
          <ul className="space-y-3">
            {aboutContent.fleet.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tooling */}
      <section className="py-16 bg-mist">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-brand-600" />
            <h2 className="text-3xl font-bold text-navy">Our Tooling</h2>
          </div>
          <ul className="space-y-3">
            {aboutContent.tooling.map((tool) => (
              <li key={tool} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700">{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-brand-600" />
            <h2 className="text-3xl font-bold text-navy">Compliance & Certification</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {aboutContent.compliance.map((item) => (
              <Badge key={item} variant="secondary" className="text-sm px-4 py-2">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Region */}
      <section className="py-16 bg-gradient-to-br from-navy to-brand-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our Region</h2>
          <p className="text-xl text-brand-100 mb-2">
            <strong>Headquarters:</strong> {aboutContent.region.hq}
          </p>
          <p className="text-xl text-brand-100">
            <strong>Coverage:</strong> {aboutContent.region.coverage}
          </p>
        </div>
      </section>
    </div>
  )
}
