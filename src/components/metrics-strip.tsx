'use client'

interface Metric {
  label: string
  description: string
}

interface MetricsStripProps {
  metrics: Metric[]
}

export function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-brand-600 to-brand-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-brand-100">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
