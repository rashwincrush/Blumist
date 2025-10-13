import { Hero } from '@/components/hero'
import { ValueProps } from '@/components/value-props'
import { ServiceCards } from '@/components/service-cards'
import { ProcessSteps } from '@/components/process-steps'
import { MetricsStrip } from '@/components/metrics-strip'
import { CTASection } from '@/components/cta-section'
import { homeContent } from '@/lib/content/home'
import Reveal from '@/components/ui/Reveal'

export default function Home() {
  return (
    <>
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        cta={homeContent.hero.cta}
      />
      <Reveal>
        <ValueProps items={homeContent.valueProps} />
      </Reveal>

      <Reveal delay={0.05}>
        <ServiceCards services={homeContent.services} />
      </Reveal>

      <Reveal delay={0.1}>
        <MetricsStrip metrics={homeContent.metrics} />
      </Reveal>

      <Reveal delay={0.15}>
        <ProcessSteps steps={homeContent.process} />
      </Reveal>

      <Reveal delay={0.2}>
        <CTASection
          title="Ready to get started?"
          description="Get a quote for your project and see how we can help you achieve your goals."
          buttonText="Get a Free Quote"
          buttonHref="/contact"
        />
      </Reveal>
    </>
  )
}
