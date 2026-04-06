'use client'

import { useEffect, type ReactNode } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { business } from '@/data/business'

const { calLink, calNamespace } = business.booking

interface CalPopupButtonProps {
  /** The button label / children to render inside the trigger */
  children: ReactNode
  /** Extra Tailwind / CSS classes applied to the button */
  className?: string
  /** Optional click handler called after Cal popup opens */
  onClick?: () => void
}

/**
 * CalPopupButton
 *
 * A fully reusable trigger button that opens the Cal.com popup calendar.
 * Drop it anywhere in the codebase — it self-initialises the Cal SDK on mount.
 *
 * Usage:
 *   <CalPopupButton className="bg-accent text-white px-6 py-3 rounded-full">
 *     Book a Repair
 *   </CalPopupButton>
 */
export default function CalPopupButton({
  children,
  className = '',
  onClick,
}: CalPopupButtonProps) {
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
    <button
      type="button"
      data-cal-namespace={calNamespace}
      data-cal-link={calLink}
      data-cal-config={JSON.stringify({
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
      })}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
