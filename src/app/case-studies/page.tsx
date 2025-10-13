import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { caseStudiesContent } from '@/lib/content/case-studies'
import { CheckCircle2, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real results from real projects. See how BluMist Aerial Solutions has helped clients across Tamil Nadu.',
}

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {caseStudiesContent.title}
          </h1>
          <p className="text-xl text-slate-600">
            {caseStudiesContent.subtitle}
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {caseStudiesContent.studies.map((study) => (
              <Card key={study.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-brand-400 to-brand-600 aspect-video lg:aspect-auto flex items-center justify-center text-white p-8">
                    <div className="text-center">
                      <p className="text-xl font-bold mb-2">Project Image</p>
                      <p className="text-sm opacity-80">{study.image}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <Badge variant="secondary">{study.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <MapPin className="w-4 h-4" />
                          <span>{study.location}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-base">
                        {study.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Challenge</h4>
                        <p className="text-sm text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Solution</h4>
                        <p className="text-sm text-slate-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy to-brand-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-navy hover:bg-white/90 h-11 px-8 text-lg"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  )
}
