'use client'

import { useEffect, useRef, RefObject } from 'react'

/**
 * Observes a container and adds the `visible` class to every .reveal
 * element inside it when it enters the viewport.
 * Disconnects after the first trigger (runs once).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1,
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
            el.classList.add('visible')
          })
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
