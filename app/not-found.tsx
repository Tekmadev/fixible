import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found — Fixible',
  description: "The page you're looking for doesn't exist. Head back to Fixible's homepage for mobile phone repair in Hamilton.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-accent font-mono text-sm mb-4 tracking-widest">404</p>
        <h1 className="text-display-md font-bold font-doto text-primary-text mb-4">
          Page Not Found
        </h1>
        <p className="text-secondary-text mb-8">
          Looks like this page went missing, kind of like a cracked screen.
          We can&apos;t fix that, but we can get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-full transition-colors"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back to Fixible
        </Link>
      </div>
    </main>
  )
}
