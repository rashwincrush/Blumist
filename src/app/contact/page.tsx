import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent } from '@/components/ui/card'
import { site } from '@/lib/site'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with BluMist Aerial Solutions for a quote or consultation. Chennai-based, serving all of Tamil Nadu.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-mist via-white to-brand-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600">
            Ready to start your project? Fill out the form below or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-semibold text-navy mb-2">Phone</h3>
                <a href={`tel:${site.phone}`} className="text-sm text-slate-600 hover:text-brand-600">
                  {site.phone}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-semibold text-navy mb-2">Email</h3>
                <a href={`mailto:${site.email}`} className="text-sm text-slate-600 hover:text-brand-600 break-all">
                  {site.email}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-semibold text-navy mb-2">WhatsApp</h3>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-brand-600"
                >
                  Chat with a Pilot
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-semibold text-navy mb-2">Location</h3>
                <p className="text-sm text-slate-600">
                  {site.address.city}, {site.address.state}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-mist">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Alternate Contact */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Prefer Email?
          </h2>
          <p className="text-slate-600 mb-4">
            Send us an email directly at{' '}
            <a href={`mailto:${site.email}`} className="text-brand-600 hover:underline font-semibold">
              {site.email}
            </a>
          </p>
          <p className="text-sm text-slate-500">
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </section>
    </div>
  )
}
