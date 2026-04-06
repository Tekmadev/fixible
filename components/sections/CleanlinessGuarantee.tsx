import { Wind, Zap, Wrench, Package, Sparkles, BadgeCheck } from 'lucide-react'

const guarantees = [
  {
    icon: Wind,
    title: 'Dust-Free Workspace',
    description:
      'Every repair is performed on a clean, anti-static mat. No dust or debris left behind.',
  },
  {
    icon: Zap,
    title: 'Anti-Static Equipment',
    description:
      'ESD-safe wristbands and tools protect sensitive components throughout the repair.',
  },
  {
    icon: Wrench,
    title: 'Sanitized Tools',
    description:
      'All precision tools are cleaned and sterilized before every job. Your device stays spotless.',
  },
  {
    icon: Package,
    title: 'Factory-Sealed Parts',
    description:
      'We use only genuine-grade, factory-packaged components, opened on-site, in front of you.',
  },
  {
    icon: Sparkles,
    title: 'Zero Residue',
    description:
      'We leave your device and your space exactly as we found it. No adhesive marks, no mess.',
  },
  {
    icon: BadgeCheck,
    title: '90-Day Parts Warranty',
    description:
      'Every part we install is backed by a 90-day warranty. If it fails, we replace it free.',
  },
]

export default function CleanlinessGuarantee() {
  return (
    <section
      id="guarantee"
      className="relative py-section px-6 overflow-hidden"
      aria-labelledby="guarantee-heading"
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="glow-orb w-[500px] h-[500px] bg-accent/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-20">
          <div>
            <p className="pill mb-5">The Fixible Promise</p>

            <h2
              id="guarantee-heading"
              className="text-display-md font-bold font-doto text-primary-text mb-6 speakable"
            >
              We Leave{' '}
              <span className="accent-gradient-text">No Trace.</span>
            </h2>

            <p className="text-secondary-text text-lg leading-relaxed">
              Every repair is performed with surgical precision. We show up
              prepared, work clean, and leave your space and your device
              in better condition than we found it.
            </p>
          </div>

          {/* Right column — accent quote */}
          <div className="glass rounded-3xl p-8 border-l-2 border-accent/40">
            <p className="text-primary-text text-xl font-medium leading-relaxed mb-4">
              &ldquo;No dust left behind. No adhesive residue.
              No shortcuts. That&apos;s the Fixible standard.&rdquo;
            </p>
            <p className="text-secondary-text text-sm">
              Every Fixible Technician
            </p>
          </div>
        </div>

        {/* Guarantees grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
        >
          {guarantees.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <div className="glass rounded-3xl p-6 h-full hover:border-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center mt-0.5">
                    <Icon size={18} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-primary-text font-semibold text-sm mb-1.5">
                      {title}
                    </h3>
                    <p className="text-secondary-text text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
