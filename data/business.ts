// ═══════════════════════════════════════════════════════════
//  Fixible — Central Business Data
//  ▸ Replace every TODO before going live
// ═══════════════════════════════════════════════════════════

export const business = {
  name: 'Fixible',
  legalName: 'Tekmadev Innovation Inc.',
  tagline: 'We Come to You. We Fix Your Phone.',
  description:
    "Hamilton's premier mobile repair service. We come to your home, office, or anywhere. Fast, clean, and guaranteed.",
  url: 'https://fixible.ca',
  phone: '+13655440044',
  phoneDisplay: '+1 (365) 544-0044',
  email: 'fixible.ca@gmail.com', // Temporary — replace with hello@fixible.ca once domain email is set up

  address: {
    street: '17 Steven Street',
    city: 'Hamilton',
    province: 'ON',
    postalCode: 'L8L 5N2',
    country: 'CA',
    countryFull: 'Canada',
    // Full formatted string for display
    formatted: 'Hamilton, ON, Canada',
  },

  geo: {
    latitude: 43.2557,
    longitude: -79.8711,
  },

  social: {
    instagram: 'https://www.instagram.com/fixible.ca',
    instagramHandle: '@fixible.ca',
    facebook: 'https://www.facebook.com/fixible', // TODO — update with real Facebook URL
  },

  booking: {
    calUsername: 'fixible',
    calEventSlug: 'fix',
    calNamespace: 'fix',
    get calLink() {
      return `${this.calUsername}/${this.calEventSlug}`
    },
    get isConfigured() {
      return true
    },
  },

  hours: {
    monday: '9:00 AM – 7:00 PM',
    tuesday: '9:00 AM – 7:00 PM',
    wednesday: '9:00 AM – 7:00 PM',
    thursday: '9:00 AM – 7:00 PM',
    friday: '9:00 AM – 7:00 PM',
    saturday: '10:00 AM – 5:00 PM',
    sunday: 'Closed',
  },

  areaServed: [
    'Hamilton',
    'Ancaster',
    'Dundas',
    'Stoney Creek',
    'Waterdown',
    'Burlington',
    'Flamborough',
    'Glanbrook',
  ],

  priceRange: '$$',
  foundingYear: 2024,

  gtmId: 'GTM-596C8V27',
} as const

// ─────────────────────────────────────────────
//  Services
// ─────────────────────────────────────────────

export const services = [
  {
    id: 'screen-replacement',
    name: 'Screen Replacement',
    icon: 'Smartphone',
    shortDesc: 'Cracked display fixed fast.',
    description:
      'Shattered or unresponsive screen? We swap it in under an hour using OEM-quality parts, tested before we leave.',
    keywords: ['cracked screen', 'broken display', 'screen repair', 'iPhone screen', 'Samsung screen'],
  },
  {
    id: 'battery-replacement',
    name: 'Battery Replacement',
    icon: 'Battery',
    shortDesc: 'All-day power restored.',
    description:
      "Restore your phone's battery life. We use genuine-grade cells and include a warranty with every swap.",
    keywords: ['battery replacement', 'battery life', 'battery drain', 'swollen battery'],
  },
  {
    id: 'charging-port',
    name: 'Charging Port Repair',
    icon: 'Zap',
    shortDesc: 'Loose port? Fixed.',
    description:
      "Bent pins, debris, or a damaged port. We'll have you charging reliably again without data loss.",
    keywords: ['charging port', "won't charge", 'charging issue', 'USB port repair'],
  },
  {
    id: 'camera-speaker',
    name: 'Camera · Speaker · Mic',
    icon: 'Camera',
    shortDesc: 'Every component factory-spec.',
    description:
      'Blurry photos, muffled audio, or a dead mic? Every component repaired and tested to factory specification.',
    keywords: ['camera repair', 'speaker repair', 'microphone repair', 'audio fix'],
  },
  {
    id: 'tablet-repair',
    name: 'Tablet Repair',
    icon: 'Tablet',
    shortDesc: 'iPads, Galaxy Tabs & more.',
    description:
      'iPad, Samsung Galaxy Tab, Lenovo, same on-site precision as phones, for any tablet you rely on.',
    keywords: ['tablet repair', 'iPad repair', 'Samsung tablet', 'tablet screen'],
  },
  {
    id: 'desktop-build',
    name: 'Desktop Build',
    icon: 'Monitor',
    shortDesc: 'Custom PCs, your specs.',
    description:
      'Bespoke PC builds from the ground up, sourced, assembled, and optimized to your exact workflow and budget.',
    keywords: ['PC build', 'custom computer', 'desktop setup', 'gaming PC'],
  },
  {
    id: 'console-repair',
    name: 'Console Repair',
    icon: 'Gamepad2',
    shortDesc: 'PS5, Xbox, Switch. Revived.',
    description:
      'PS5, Xbox Series X/S, Nintendo Switch and more. We diagnose and repair your console with no guesswork.',
    keywords: ['PS5 repair', 'Xbox repair', 'Switch repair', 'console fix', 'gaming console'],
  },
  {
    id: 'openclaw-ai',
    name: 'OpenClaw AI Setup',
    icon: 'Bot',
    shortDesc: 'AI tools, perfectly configured.',
    description:
      'Professional installation and configuration of OpenClaw AI-powered tools so everything runs optimally from day one.',
    keywords: ['AI setup', 'OpenClaw', 'AI tools', 'AI device configuration'],
  },
] as const

// ─────────────────────────────────────────────
//  FAQ — Also used for FAQPage schema (AEO)
// ─────────────────────────────────────────────

export const faqs = [
  {
    question: 'What areas of Hamilton does Fixible serve?',
    answer:
      'We serve all of Hamilton and surrounding communities including Ancaster, Dundas, Stoney Creek, Waterdown, and Burlington. Our mobile technicians come directly to you, whether at home, office, coffee shop, or wherever is convenient.',
  },
  {
    question: 'How long does a phone screen repair take?',
    answer:
      'Most screen replacements take 30 to 60 minutes on-site. We arrive with all parts ready, so there are no delays, no drop-off queues, and no waiting days for a repair.',
  },
  {
    question: 'Do you repair all phone brands?',
    answer:
      "Yes. We repair iPhone (all models), Samsung Galaxy, Google Pixel, OnePlus, Motorola, and most other Android devices. Unsure about yours? Call or email us and we'll confirm within minutes.",
  },
  {
    question: 'Is there a warranty on repairs?',
    answer:
      "All repairs come with a 90-day warranty covering both parts and workmanship. If something isn't right after we leave, we come back and fix it at no charge.",
  },
  {
    question: 'Can Fixible come to my home or office in Hamilton?',
    answer:
      'Absolutely, that is our core service. Book a time that works for you, and a certified technician will arrive at your door. No need to leave your home or sit in a waiting room.',
  },
  {
    question: 'Do you repair tablets and gaming consoles?',
    answer:
      "Yes. We repair iPads, Android tablets, PS5, Xbox Series X/S, Xbox One, Nintendo Switch, and more. Book a diagnostic if you're unsure. We're happy to assess first.",
  },
  {
    question: 'How do I book a repair with Fixible?',
    answer:
      "Use the Book a Repair button on this page to pick a time that suits you through our online booking system. You can also call us at +1 (365) 544-0044 or email fixible.ca@gmail.com and we'll get you scheduled fast.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      "We accept all major credit cards, Visa Debit, and Interac e-Transfer. Payment is collected after the repair is complete and you're satisfied.",
  },
  {
    question: 'Do you offer same-day repair?',
    answer:
      'Yes, for most common repairs like screen, battery, and charging port, we offer same-day service. Book early in the day and a technician can often arrive within hours.',
  },
  {
    question: 'What is the OpenClaw AI Setup service?',
    answer:
      'OpenClaw AI Setup is a professional configuration service for AI-powered tools on your devices. Our technicians handle the full installation and optimization so everything works seamlessly from day one.',
  },
] as const

// ─────────────────────────────────────────────
//  Type helpers
// ─────────────────────────────────────────────

export type Service = (typeof services)[number]
export type FAQ = (typeof faqs)[number]
