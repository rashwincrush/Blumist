import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { site } from '@/lib/site'
import { homeContent } from '@/lib/content/home'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{site.name}</h3>
            <p className="text-slate-300 text-sm mb-4">
              DGCA‑compliant drone services in Tamil Nadu
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{site.address.city}, {site.address.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${site.phone}`} className="hover:text-brand-400 transition-colors">
                  {site.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-400 transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {homeContent.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-brand-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-brand-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-semibold mb-4">Compliance</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {homeContent.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-brand-900/30 text-brand-300 text-xs rounded-full border border-brand-700"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {homeContent.footerNote}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© {currentYear} {site.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-brand-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-brand-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
