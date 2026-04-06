import type { Metadata, Viewport } from 'next'
import { Inter, Doto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { business } from '@/data/business'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const doto = Doto({
  subsets: ['latin'],
  variable: '--font-doto',
  display: 'swap',
  weight: ['400', '700', '900'],
})

// ─────────────────────────────────────────
//  SEO Metadata
// ─────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(business.url),

  title: {
    default: `${business.name} — Mobile Phone Repair in Hamilton, Ontario | We Come to You`,
    template: `%s | ${business.name}`,
  },

  description:
    "Fixible is Hamilton's premier mobile repair service. We come to your home, office, or anywhere in Hamilton to fix cracked screens, dead batteries, charging ports, tablets, consoles and more. Fast, affordable, guaranteed.",

  keywords: [
    'phone repair Hamilton',
    'mobile repair Hamilton Ontario',
    'cracked screen repair Hamilton',
    'iPhone repair Hamilton',
    'Samsung repair Hamilton',
    'come to you phone repair Hamilton',
    'same day phone repair Hamilton',
    'battery replacement Hamilton',
    'charging port repair Hamilton',
    'tablet repair Hamilton',
    'console repair Hamilton',
    'PS5 repair Hamilton',
    'Xbox repair Hamilton',
    'desktop build Hamilton',
    'on-site phone repair Ontario',
    'Fixible',
    'fixible.ca',
  ],

  authors: [{ name: 'Fixible', url: business.url }],
  creator: 'Fixible',
  publisher: 'Fixible',

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: business.url,
    siteName: business.name,
    title: 'Fixible — We Come to You. We Fix Your Phone.',
    description:
      "Hamilton's premier on-site mobile repair service. Cracked screens, batteries, consoles, and more, repaired at your door.",
    images: [
      {
        url: '/og-image.jpg', // TODO — add a 1200×630 OG image to /public
        width: 1200,
        height: 630,
        alt: 'Fixible — Mobile Phone Repair in Hamilton',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Fixible — Mobile Phone Repair in Hamilton | We Come to You',
    description:
      "Hamilton's premier on-site mobile repair service. Cracked screens, batteries, consoles, and more, repaired at your door.",
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: business.url,
  },

  // Geo / local SEO meta tags
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Hamilton',
    'geo.position': `${business.geo.latitude};${business.geo.longitude}`,
    'ICBM': `${business.geo.latitude}, ${business.geo.longitude}`,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
}

// ─────────────────────────────────────────
//  JSON-LD Structured Data (AEO + SEO)
// ─────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ElectronicsRepair'],
  '@id': `${business.url}/#business`,
  name: business.name,
  alternateName: business.legalName,
  description: business.description,
  url: business.url,
  telephone: business.phone,
  email: business.email,
  priceRange: business.priceRange,
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Credit Card, Debit Card, Interac e-Transfer',
  foundingDate: String(business.foundingYear),
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.province,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  areaServed: business.areaServed.map((city) => ({
    '@type': 'City',
    name: city,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '10:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '15:00',
      closes: '21:00',
    },
  ],
  sameAs: [business.social.instagram, business.social.facebook],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Phone & Device Repair Services',
    itemListElement: [
      'Screen Replacement',
      'Battery Replacement',
      'Charging Port Repair',
      'Camera & Speaker Repair',
      'Tablet Repair',
      'Desktop Build',
      'Console Repair',
      'OpenClaw AI Setup',
    ].map((serviceName, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: serviceName,
        areaServed: 'Hamilton, Ontario, Canada',
      },
    })),
  },
  // Speakable — helps AI search engines find the most relevant content
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.speakable'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${business.url}/#website`,
  url: business.url,
  name: business.name,
  description: business.description,
  publisher: { '@id': `${business.url}/#business` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${business.url}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// ─────────────────────────────────────────
//  Root Layout
// ─────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${doto.variable}`}>
      <head>
        {/* Google Tag Manager — as high as possible in <head> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${business.gtmId}');`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-background text-primary-text antialiased">
        {/* Google Tag Manager (noscript) — immediately after <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${business.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
