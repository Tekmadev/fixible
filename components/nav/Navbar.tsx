'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { business } from '@/data/business'
import CalPopupButton from '@/components/ui/CalPopupButton'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Guarantee', href: '#guarantee' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            aria-label="Fixible — Home"
          >
            <Image
              src="/icon.png"
              alt="Fixible logo"
              width={32}
              height={32}
              className="rounded-lg"
              priority
            />
            <span className="text-primary-text font-bold font-doto text-2xl">
              Fixible
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-secondary-text hover:text-primary-text text-sm transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-1.5 text-secondary-text hover:text-primary-text text-sm transition-colors"
              aria-label={`Call Fixible: ${business.phoneDisplay}`}
            >
              <Phone size={14} />
              {business.phoneDisplay}
            </a>
            <CalPopupButton className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200">
              Book Now
            </CalPopupButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary-text p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-[60px] left-0 right-0 bg-surface border-b border-border-light transition-all duration-500 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-primary-text text-lg font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-8 flex flex-col gap-3">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center justify-center gap-2 border border-border-light text-primary-text text-sm font-medium py-3 rounded-full"
            >
              <Phone size={15} />
              {business.phoneDisplay}
            </a>
            <CalPopupButton
              className="bg-accent hover:bg-accent-hover text-white text-sm font-medium py-3 rounded-full text-center transition-colors w-full"
              onClick={() => setMenuOpen(false)}
            >
              Book a Repair
            </CalPopupButton>
          </div>
        </div>
      </div>
    </>
  )
}
