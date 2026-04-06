import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { business } from '@/data/business'

const serviceLinks = [
  { label: 'Screen Replacement', href: '#services' },
  { label: 'Battery Replacement', href: '#services' },
  { label: 'Charging Port Repair', href: '#services' },
  { label: 'Tablet Repair', href: '#services' },
  { label: 'Console Repair', href: '#services' },
  { label: 'Desktop Build', href: '#services' },
]

const companyLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Guarantee', href: '#guarantee' },
  { label: 'Book a Repair', href: '#booking' },
  { label: 'FAQ', href: '#faq' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      className="relative border-t border-border-light bg-surface"
      aria-label="Site footer"
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4 hover:opacity-80 transition-opacity"
              aria-label="Fixible — Home"
            >
              <Image
                src="/icon.png"
                alt="Fixible logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-primary-text font-bold font-doto text-3xl">
                Fixible
              </span>
            </Link>
            <p className="text-secondary-text text-sm leading-relaxed mt-3 mb-6 max-w-xs">
              Hamilton&apos;s premier on-site mobile repair service. We come
              to you, anywhere in Hamilton and surrounding areas.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fixible on Instagram"
                className="w-9 h-9 rounded-full border border-border-light flex items-center justify-center text-secondary-text hover:text-primary-text hover:border-white/20 transition-colors"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fixible on Facebook"
                className="w-9 h-9 rounded-full border border-border-light flex items-center justify-center text-secondary-text hover:text-primary-text hover:border-white/20 transition-colors"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-primary-text font-semibold text-sm mb-5 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-secondary-text hover:text-primary-text text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-primary-text font-semibold text-sm mb-5 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-secondary-text hover:text-primary-text text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-primary-text font-semibold text-sm mb-5 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-start gap-3 text-secondary-text hover:text-primary-text text-sm transition-colors group"
                >
                  <Phone
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-start gap-3 text-secondary-text hover:text-primary-text text-sm transition-colors"
                >
                  <Mail
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {business.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-secondary-text text-sm">
                  <MapPin
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>
                    {business.address.city}, {business.address.province}
                    <br />
                    <span className="text-secondary-text/60 text-xs mt-0.5 block">
                      Mobile service throughout Hamilton &amp; area
                    </span>
                  </span>
                </div>
              </li>
            </ul>

            {/* Hours summary */}
            <div className="mt-6 pt-6 border-t border-border-light">
              <p className="text-secondary-text/60 text-xs uppercase tracking-wider mb-2">
                Hours
              </p>
              <p className="text-secondary-text text-sm">
                Mon – Fri: 9 AM – 7 PM
              </p>
              <p className="text-secondary-text text-sm">Sat: 10 AM – 5 PM</p>
              <p className="text-secondary-text/60 text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-secondary-text/60 text-xs text-center sm:text-left">
            © {currentYear} {business.legalName}. All rights reserved.
            Hamilton, Ontario, Canada.
          </p>
          <p className="text-secondary-text/40 text-xs">
            Built with precision. Like every repair.
          </p>
        </div>
      </div>
    </footer>
  )
}
