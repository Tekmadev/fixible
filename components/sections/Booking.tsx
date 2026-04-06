'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { business } from '@/data/business'

const { calLink, calNamespace } = business.booking

// Defined at module level — not inside Booking — to avoid re-creating on every render
function CalInlineEmbed() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: calNamespace })
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#0071e3' },
          dark:  { 'cal-brand': '#0071e3' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <Cal
      namespace={calNamespace}
      calLink={calLink}
      style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
      config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
    />
  )
}

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative py-section px-6"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="pill mx-auto mb-5">Book a Repair</p>
          <h2
            id="booking-heading"
            className="text-display-md font-bold text-primary-text mb-5 speakable"
          >
            Ready When You Are.
          </h2>
          <p className="text-secondary-text text-lg max-w-lg mx-auto">
            Select a time and a Fixible technician will be at your door.
            Same-day slots available.
          </p>
        </div>

        {/* Cal.com inline embed */}
        <div className="glass rounded-3xl overflow-hidden">
          <CalInlineEmbed />
        </div>

        {/* Direct contact strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-secondary-text">
          <span>Prefer to call or text?</span>
          <a
            href={`tel:${business.phone}`}
            className="text-primary-text hover:text-accent transition-colors font-medium"
          >
            {business.phoneDisplay}
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a
            href={`mailto:${business.email}`}
            className="text-primary-text hover:text-accent transition-colors font-medium"
          >
            {business.email}
          </a>
        </div>
      </div>
    </section>
  )
}
