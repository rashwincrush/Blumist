import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { servicesContent } from '@/lib/content/services'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive drone solutions for Tamil Nadu: aerial mapping, inspections, agribot spraying, solar cleaning, real estate, and events.',
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {servicesContent.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {servicesContent.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesContent.services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full group">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
