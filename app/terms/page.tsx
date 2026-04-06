import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { business } from '@/data/business'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${business.name} (${business.legalName}). Read the terms governing use of our mobile device repair services in Hamilton, Ontario.`,
  alternates: { canonical: `${business.url}/terms` },
}

const lastUpdated = 'April 5, 2025'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-primary-text">
      {/* Header */}
      <div className="border-b border-border-light">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-secondary-text hover:text-primary-text text-sm transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Fixible
          </Link>
          <span className="text-secondary-text text-xs">Last updated: {lastUpdated}</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-primary-text mb-2">Terms of Service</h1>
        <p className="text-secondary-text mb-12">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website{' '}
          <a href={business.url} className="text-accent hover:underline">{business.url}</a>{' '}
          and the repair services provided by{' '}
          <strong className="text-primary-text">{business.legalName}</strong>{' '}
          operating as <strong className="text-primary-text">{business.name}</strong>{' '}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), located in Hamilton, Ontario, Canada.
          By booking a repair or using our website, you agree to these Terms.
        </p>

        <Section title="1. Services">
          <p>
            {business.name} provides on-site and in-shop mobile device repair services in Hamilton, Ontario and surrounding areas, including but not limited to: screen replacement, battery replacement, charging port repair, camera and speaker repair, tablet repair, console repair, desktop builds, and related technical services.
          </p>
          <p>
            We reserve the right to decline any repair request at our discretion, including cases where the device is deemed beyond economic repair or poses a safety risk.
          </p>
        </Section>

        <Section title="2. Bookings and Appointments">
          <ul>
            <li>Bookings are made through our online scheduling system (Cal.com). By booking, you agree to provide accurate contact and device information.</li>
            <li>We will make reasonable efforts to attend at the booked time. We reserve the right to reschedule with notice in the event of an emergency or unforeseen circumstance.</li>
            <li>Please ensure the device is accessible and that someone is present at the scheduled location at the agreed time.</li>
            <li>Repeated no-shows or last-minute cancellations (less than 2 hours notice) may result in a cancellation fee or refusal of future bookings.</li>
          </ul>
        </Section>

        <Section title="3. Pricing and Payment">
          <ul>
            <li>Repair prices are quoted prior to or at the start of the repair. You will be informed of the cost before any work begins.</li>
            <li>Payment is due upon completion of the repair and your satisfaction with the work.</li>
            <li>We accept major credit cards, Visa Debit, and Interac e-Transfer. All prices are in Canadian dollars (CAD) and inclusive of applicable taxes.</li>
            <li>For complex repairs or parts that must be sourced in advance, a deposit may be requested. This will be communicated clearly before being collected.</li>
          </ul>
        </Section>

        <Section title="4. Warranty">
          <ul>
            <li>All parts installed by {business.name} are covered by a <strong>90-day warranty</strong> against defects in parts and workmanship.</li>
            <li>The warranty does not cover damage caused by accidents, liquid exposure, unauthorized modifications, or misuse after the repair.</li>
            <li>To make a warranty claim, contact us within the 90-day period at{' '}
              <a href={`mailto:${business.email}`} className="text-accent hover:underline">{business.email}</a>{' '}
              or <a href={`tel:${business.phone}`} className="text-accent hover:underline">{business.phoneDisplay}</a>.
            </li>
            <li>Warranty repairs will be completed at no additional charge for covered defects.</li>
          </ul>
        </Section>

        <Section title="5. Refund Policy">
          <p>
            Due to the nature of repair services, we do not offer refunds once a repair has been completed and accepted by the customer. Our 90-day warranty (Section 4) is the remedy for any defect in parts or workmanship.
          </p>
          <p>
            If a repair cannot be completed, any deposit paid will be refunded in full. If a repair is abandoned mid-process at the customer&apos;s request after parts have been sourced or installed, the cost of parts and labour to that point may be charged.
          </p>
        </Section>

        <Section title="6. Liability and Risk">
          <ul>
            <li>While we take every precaution to protect your device, device repair inherently carries a small risk of additional damage. We are not liable for pre-existing faults or issues discovered during repair that were not related to the original reported problem.</li>
            <li>We strongly recommend backing up your data before any repair. We are not responsible for any data loss that occurs during the repair process.</li>
            <li>Our liability for any repair is limited to the cost of that specific repair. We are not liable for consequential, indirect, or incidental damages.</li>
            <li>We are not responsible for devices left uncollected for more than 30 days after repair completion.</li>
          </ul>
        </Section>

        <Section title="7. Customer Responsibilities">
          <ul>
            <li>You confirm that the device submitted for repair is your own property, or that you have full authorization from the owner to have it repaired.</li>
            <li>You agree to provide accurate information about the device and the issue.</li>
            <li>You are responsible for backing up your data prior to the repair.</li>
            <li>You agree to pay the agreed price upon satisfactory completion of the repair.</li>
          </ul>
        </Section>

        <Section title="8. Website Use">
          <p>
            You agree to use our website for lawful purposes only. You must not attempt to gain unauthorized access to our systems, introduce malicious code, or interfere with the operation of the website. We reserve the right to restrict access to the website at our discretion.
          </p>
        </Section>

        <Section title="9. Intellectual Property">
          <p>
            All content on this website — including text, graphics, logos, and design — is the property of {business.legalName} and is protected by applicable Canadian copyright and intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.
          </p>
        </Section>

        <Section title="10. Privacy">
          <p>
            Your use of our services and website is also governed by our{' '}
            <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>,
            which is incorporated into these Terms by reference.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Ontario.
          </p>
        </Section>

        <Section title="12. Changes to These Terms">
          <p>
            We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects when changes were last made. Your continued use of our website or services after any changes constitutes your acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>For any questions about these Terms, please contact us:</p>
          <address className="not-italic mt-3 space-y-1 text-secondary-text">
            <p><strong className="text-primary-text">{business.legalName}</strong> (operating as {business.name})</p>
            <p>{business.address.street}</p>
            <p>{business.address.city}, {business.address.province} {business.address.postalCode}</p>
            <p>{business.address.countryFull}</p>
            <p className="pt-2">
              Email: <a href={`mailto:${business.email}`} className="text-accent hover:underline">{business.email}</a>
            </p>
            <p>Phone: <a href={`tel:${business.phone}`} className="text-accent hover:underline">{business.phoneDisplay}</a></p>
          </address>
        </Section>
      </article>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-primary-text mb-4 pb-2 border-b border-border-light">
        {title}
      </h2>
      <div className="text-secondary-text leading-relaxed space-y-3 [&_strong]:text-primary-text [&_a]:text-accent [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  )
}
