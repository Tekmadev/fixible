'use client'

import {
  Smartphone,
  Battery,
  Zap,
  Camera,
  Tablet,
  Monitor,
  Gamepad2,
  Bot,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/data/business'
import { useReveal } from '@/lib/use-reveal'

// Map icon string names → Lucide components
const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Battery,
  Zap,
  Camera,
  Tablet,
  Monitor,
  Gamepad2,
  Bot,
}

export default function Services() {
  const sectionRef = useReveal<HTMLDivElement>(0.08)

  return (
    <section
      id="services"
      className="relative py-section px-6"
      aria-labelledby="services-heading"
    >
      {/* Background fade from hero */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none"
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="pill mx-auto mb-5 reveal">Our Services</p>

          <h2
            id="services-heading"
            className="text-display-md font-bold font-doto text-primary-text mb-5 reveal reveal-delay-1 speakable"
          >
            All Repairs. All Devices.
          </h2>

          <p className="text-secondary-text text-lg max-w-xl mx-auto reveal reveal-delay-2">
            From cracked screens to custom PC builds, one team, every fix,
            at your door.
          </p>
        </div>

        {/* Services grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Smartphone
            const delayClass = `reveal-delay-${Math.min(i + 1, 8)}` as const

            return (
              <li key={service.id}>
                <article
                  className={`reveal ${delayClass} glass rounded-3xl p-6 h-full group hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-default`}
                  aria-label={service.name}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon
                      size={20}
                      className="text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-primary-text font-semibold text-base mb-2">
                    {service.name}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </li>
            )
          })}
        </ul>

        {/* Bottom CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-secondary-text text-sm mb-4">
            Not sure if we can fix yours?
          </p>
          <a
            href="#booking"
            className="text-accent hover:text-accent-hover text-sm font-medium underline underline-offset-4 transition-colors"
          >
            Book a free diagnostic →
          </a>
        </div>
      </div>
    </section>
  )
}
