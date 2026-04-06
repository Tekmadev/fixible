import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { business } from '@/data/business'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${business.name} (${business.legalName}). Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${business.url}/privacy` },
}

const lastUpdated = 'April 5, 2025'

export default function PrivacyPage() {
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
      <article className="max-w-3xl mx-auto px-6 py-16 prose-legal">
        <h1 className="text-4xl font-bold text-primary-text mb-2">Privacy Policy</h1>
        <p className="text-secondary-text mb-12">
          This Privacy Policy describes how <strong className="text-primary-text">{business.legalName}</strong>{' '}
          operating as <strong className="text-primary-text">{business.name}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
          collects, uses, and protects your personal information when you use our website{' '}
          <a href={business.url} className="text-accent hover:underline">{business.url}</a>{' '}
          or our repair services in Hamilton, Ontario, Canada.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect the following types of personal information:</p>
          <ul>
            <li><strong>Contact information:</strong> Name, email address, and phone number — collected when you book a repair through our online booking system (Cal.com).</li>
            <li><strong>Device and repair information:</strong> Details about the device you bring in for repair (make, model, serial number if applicable) and a description of the issue or fault reported.</li>
            <li><strong>Location information:</strong> Your address or preferred meeting location in Hamilton, Ontario, provided when booking an on-site repair.</li>
            <li><strong>Payment information:</strong> We do not store payment card details. Payments are processed at time of service using trusted payment methods. Transaction records may be retained for accounting purposes.</li>
            <li><strong>Usage data:</strong> When you visit our website, we may automatically collect information such as your IP address, browser type, pages visited, and time spent on the site, through Google Tag Manager and associated analytics tools (e.g., Google Analytics).</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use your personal information to:</p>
          <ul>
            <li>Schedule, confirm, and manage your repair booking.</li>
            <li>Contact you regarding your appointment, repair status, or follow-up warranty matters.</li>
            <li>Maintain a record of repairs performed for warranty and quality assurance purposes.</li>
            <li>Send service-related communications (no marketing emails without your consent).</li>
            <li>Improve our website and understand how visitors interact with it (analytics).</li>
            <li>Comply with legal and accounting obligations.</li>
          </ul>
        </Section>

        <Section title="3. Sharing of Your Information">
          <p>We do not sell or rent your personal information to third parties. We may share your information only with:</p>
          <ul>
            <li><strong>Cal.com:</strong> Our online booking platform, which processes your name, email, and phone number to manage appointments. Cal.com&apos;s privacy policy applies to data processed through their platform.</li>
            <li><strong>Google LLC:</strong> We use Google Tag Manager and Google Analytics to understand website traffic. Data is anonymized where possible and governed by Google&apos;s privacy policy.</li>
            <li><strong>Legal authorities:</strong> If required by law, court order, or to protect the rights and safety of our business or customers.</li>
          </ul>
        </Section>

        <Section title="4. Cookies and Tracking">
          <p>
            Our website uses cookies and similar tracking technologies through Google Tag Manager. These may include analytics cookies that help us understand how visitors use our site. You can control cookies through your browser settings. Disabling cookies may affect some features of the site.
          </p>
          <p>
            We do not use cookies to serve targeted advertising directly. Third-party services (Google Analytics) may set their own cookies subject to their respective policies.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain your personal information for as long as necessary to provide our services and meet legal obligations:
          </p>
          <ul>
            <li>Booking and repair records are retained for a minimum of <strong>2 years</strong> for warranty and accounting purposes.</li>
            <li>Website analytics data is retained according to our Google Analytics configuration (default: 26 months).</li>
            <li>You may request deletion of your data at any time (see Section 7).</li>
          </ul>
        </Section>

        <Section title="6. Data Security">
          <p>
            We take reasonable technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. Our website uses HTTPS encryption. Repair records are stored securely and accessible only to authorized personnel.
          </p>
          <p>
            No method of transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="7. Your Rights (PIPEDA & Ontario Privacy Law)">
          <p>
            As a Canadian resident, you have rights under the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and applicable Ontario legislation, including:
          </p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
            <li><strong>Withdrawal of consent:</strong> Withdraw consent for the use of your information (subject to legal limitations).</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information where we have no legal obligation to retain it.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${business.email}`} className="text-accent hover:underline">{business.email}</a>.
            We will respond within 30 days.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our website may contain links to third-party websites (e.g., Instagram, Facebook, Cal.com). We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects when the most recent changes were made. Continued use of our website or services after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
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
