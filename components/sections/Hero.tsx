'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import {
  ArrowRight,
  MapPin,
  Shield,
  Clock,
  Star,
  Smartphone,
  Tablet,
  Laptop,
  Gamepad2,
  Monitor,
} from 'lucide-react'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { business } from '@/data/business'

const trustBadges = [
  { icon: Shield, label: '90-Day Warranty' },
  { icon: Clock, label: 'Same-Day Service' },
  { icon: Star,  label: 'Mobile & In-Shop' },
]

const devices = [
  { label: 'Phone',   Icon: Smartphone },
  { label: 'Tablet',  Icon: Tablet },
  { label: 'Laptop',  Icon: Laptop },
  { label: 'Console', Icon: Gamepad2 },
  { label: 'PC',      Icon: Monitor },
]

const DURATION = 3000 // must match LayoutTextFlip duration prop

export default function Hero() {
  const [idx, setIdx] = useState(0)

  // Keep icon strip in sync with the LayoutTextFlip cycle
  useEffect(() => {
    const id = setInterval(() => {
      setIdx(i => (i + 1) % devices.length)
    }, DURATION)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient glow orbs */}
      <div
        aria-hidden="true"
        className="glow-orb w-[700px] h-[700px] bg-accent/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div
        aria-hidden="true"
        className="glow-orb w-[350px] h-[350px] bg-accent/5 -top-20 right-1/4"
      />
      <div
        aria-hidden="true"
        className="glow-orb w-[250px] h-[250px] bg-purple-500/5 bottom-1/4 left-1/6"
      />

      {/* Dot grid overlay */}
      <div aria-hidden="true" className="absolute inset-0 dot-grid opacity-100" />

      {/* Bottom fade to next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-16">

        {/* Location pill */}
        <motion.div
          className="pill mb-8 mx-auto w-fit speakable"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <MapPin size={10} aria-hidden="true" />
          Phone Repair in Hamilton &amp; Area
        </motion.div>

        {/* Headline line 1 */}
        <motion.p
          className="text-display-doto font-bold font-doto text-primary-text mb-3 speakable"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your Place or Ours.
        </motion.p>

        {/* Headline line 2 — LayoutTextFlip */}
        <motion.div
          className="flex items-center justify-center flex-wrap gap-x-3 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          <span className="text-display-doto font-bold font-doto accent-gradient-text speakable">
            We Fix Your
          </span>
          {/* The flipping word pill — sized to match the heading */}
          <span className="text-display-doto font-doto font-bold leading-none max-w-[90vw] overflow-hidden inline-block">
            <LayoutTextFlip
              text=""
              words={devices.map(d => d.label)}
              duration={DURATION}
              wordClassName="text-display-doto font-doto font-bold py-2 px-5 rounded-full"
            />
          </span>
        </motion.div>

        {/* Device icon strip */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-10"
          aria-hidden="true"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
        >
          {devices.map(({ Icon, label }, i) => {
            const active = i === idx
            return (
              <div
                key={label}
                title={label}
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  alignItems:    'center',
                  gap:           '4px',
                  transition:    'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity:       active ? 1 : 0.22,
                  transform:     active ? 'scale(1.3)' : 'scale(1)',
                  color:         active ? '#0071e3' : '#86868b',
                  filter:        active ? 'drop-shadow(0 0 8px #0071e380)' : 'none',
                }}
              >
                <Icon size={20} strokeWidth={1.75} />
                <span
                  style={{
                    fontSize:      '0.6rem',
                    fontWeight:    600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    opacity:       active ? 1 : 0,
                    transition:    'opacity 0.4s ease',
                    color:         '#0071e3',
                  }}
                >
                  {label}
                </span>
              </div>
            )
          })}
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          className="text-secondary-text text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed speakable"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          Hamilton&apos;s most trusted device repair service, at your door or at our shop.
          Cracked screens, dead batteries, charging ports, consoles and more. Fast, affordable, guaranteed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:shadow-xl"
          >
            Book a Repair
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 text-primary-text/80 hover:text-primary-text text-base font-medium px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/5"
          >
            View Services
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-secondary-text text-sm"
            >
              <Icon size={15} className="text-accent" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Phone CTA strip for mobile */}
        <motion.div
          className="mt-12 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a
            href={`tel:${business.phone}`}
            className="text-secondary-text text-sm underline underline-offset-4"
          >
            Or call us: {business.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
