import type { Metadata } from 'next'
import Navbar from '@/components/nav/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import CleanlinessGuarantee from '@/components/sections/CleanlinessGuarantee'
import Booking from '@/components/sections/Booking'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/ui/Footer'
import { business, faqs } from '@/data/business'

// Page-level metadata (augments layout.tsx defaults)
export const metadata: Metadata = {
  title: 'Fixible — Mobile Phone Repair in Hamilton, Ontario | We Come to You',
  description:
    "Fixible is Hamilton's premier on-site mobile repair service. We come to your door to fix cracked screens, batteries, charging ports, tablets, consoles, and more. Same-day service, 90-day warranty.",
  alternates: {
    canonical: business.url,
  },
}

// Page-level structured data — BreadcrumbList + Service offerings
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: business.url,
    },
  ],
}

// AEO: explicit entity for what the page is about (helps AI answer engines)
const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${business.url}/#service`,
  name: 'Mobile Phone Repair',
  provider: { '@id': `${business.url}/#business` },
  areaServed: {
    '@type': 'City',
    name: 'Hamilton',
    sameAs: 'https://en.wikipedia.org/wiki/Hamilton,_Ontario',
  },
  description:
    'On-site mobile phone, tablet, and console repair in Hamilton, Ontario. Technicians come to your home or office.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Device Repair Services',
    itemListElement: [
      'Screen Replacement',
      'Battery Replacement',
      'Charging Port Repair',
      'Camera & Speaker Repair',
      'Tablet Repair',
      'Desktop Build',
      'Console Repair',
      'OpenClaw AI Setup',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

// FAQPage schema — must live in a Server Component so it's in the initial HTML
// (client components inject after hydration, which crawlers may miss)
const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function HomePage() {
  return (
    <>
      {/* Page-level JSON-LD — all in server component = present in initial HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <Navbar />

      <main id="main-content">
        <Hero />

        {/* Visual section divider */}
        <div
          aria-hidden="true"
          className="max-w-7xl mx-auto px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Services />

        <div
          aria-hidden="true"
          className="max-w-7xl mx-auto px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <HowItWorks />

        <div
          aria-hidden="true"
          className="max-w-7xl mx-auto px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <CleanlinessGuarantee />

        <div
          aria-hidden="true"
          className="max-w-7xl mx-auto px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Booking />

        <div
          aria-hidden="true"
          className="max-w-7xl mx-auto px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <FAQ />
      </main>

      <Footer />
    </>
  )
}
