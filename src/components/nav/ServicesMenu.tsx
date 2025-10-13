"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"
import { MapPinned, Shield, Sprout, SunMedium, Building, PartyPopper } from "lucide-react"

export default function ServicesMenu({ scrolled = false }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const openNow = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true) }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(false), 180)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
    >
      {/* Trigger */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className={cn(
          "relative rounded-lg px-3 py-2 text-[15px] font-medium transition-colors focus:outline-none focus-visible:ring-2",
          scrolled
            ? "text-slate-800 hover:text-slate-950 focus-visible:ring-sky-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            : "text-slate-200 hover:text-white focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]"
        )}
      >
        <span className="inline-flex items-center gap-1">
          Services
          <svg width="16" height="16" viewBox="0 0 24 24"
               className={`transition-transform ${open ? "rotate-180" : ""}`}>
            <path fill="currentColor" d="M7 10l5 5 5-5z"/>
          </svg>
        </span>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-2 w-[520px] -translate-x-1/2
                       rounded-xl border border-white/10 bg-[#0b1220]/95 p-2
                       shadow-xl backdrop-blur"
          >
            {(() => {
              const services = site.nav.find(n => n.label === 'Services')
              const items = services && Array.isArray(services.children) ? services.children : []
              const IconFor = (href: string) => {
                if (href.includes('mapping')) return MapPinned
                if (href.includes('inspection') || href.includes('inspections')) return Shield
                if (href.includes('agribot')) return Sprout
                if (href.includes('solar')) return SunMedium
                if (href.includes('real-estate')) return Building
                if (href.includes('events')) return PartyPopper
                return null
              }
              return (
                <ul className="grid grid-cols-2 gap-1">
                  {items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5 hover:text-white"
                      >
                        {(() => {
                          const I = IconFor(it.href)
                          return I ? <I className="w-5 h-5 text-slate-100" /> : null
                        })()}
                        <span>{it.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
