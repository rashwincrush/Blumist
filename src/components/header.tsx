'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { site } from '@/lib/site'
import BrandLockup from '@/components/BrandLockup'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import ServicesMenu from '@/components/nav/ServicesMenu'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 relative z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-[#0b1220]/90 backdrop-blur-sm shadow-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <BrandLockup showTagline />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 relative z-50">
            {site.nav.map((item) => (
              item.children ? (
                <ServicesMenu key={item.label} scrolled={isScrolled} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-[15px] font-medium before:absolute before:inset-0 before:rounded-lg before:blur-sm before:transition before:duration-300 focus:outline-none focus-visible:ring-2 transition-colors',
                    isScrolled
                      ? 'text-slate-800 hover:text-slate-950 focus-visible:ring-sky-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white before:bg-sky-500/0 hover:before:bg-sky-500/10'
                      : 'text-white hover:text-white focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220] before:bg-sky-400/0 hover:before:bg-sky-400/15'
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl
                         bg-gradient-to-r from-sky-400 to-blue-600
                         px-4 py-2 text-sm font-semibold text-white
                         shadow-lg shadow-sky-500/20
                         hover:from-sky-300 hover:to-blue-500 hover:shadow-blue-500/30
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24"
                   className="transition-transform group-hover:translate-x-0.5">
                <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-2">
              {site.nav.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        className="w-full text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-mist rounded-md"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        <span className="flex items-center justify-between">
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform',
                              openDropdown === item.label && 'rotate-180'
                            )}
                          />
                        </span>
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-slate-600 hover:bg-mist rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-mist rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button asChild className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
