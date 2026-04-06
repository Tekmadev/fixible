import { CalendarCheck, CarFront, ShieldCheck } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: CalendarCheck,
    title: 'Book Online',
    description:
      'Pick a time that works for you using our online booking. Takes less than two minutes.',
    detail: 'Available same-day, 7 days a week.',
  },
  {
    step: '02',
    icon: CarFront,
    title: 'We Arrive',
    description:
      'A certified Fixible technician comes to your home, office, or any location in Hamilton.',
    detail: 'We bring all tools and parts with us.',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Fixed & Tested',
    description:
      'Your device is repaired and thoroughly tested before we leave. 90-day warranty included.',
    detail: "You only pay if you're 100% satisfied.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-section px-6 overflow-hidden"
      aria-labelledby="hiw-heading"
    >
      {/* Subtle top divider glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-border-light to-transparent"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="pill mx-auto mb-5">How It Works</p>

          <h2
            id="hiw-heading"
            className="text-display-md font-bold text-primary-text mb-5 speakable"
          >
            Broken to Fixed.{' '}
            <span className="text-secondary-text font-normal">
              In Three Steps.
            </span>
          </h2>

          <p className="text-secondary-text text-lg max-w-lg mx-auto">
            No drop-off queues. No waiting days. Your device repaired at
            your door.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-14 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          {steps.map(({ step, icon: Icon, title, description, detail }) => (
            <div
              key={step}
              className="relative flex flex-col items-center text-center px-4"
            >
              {/* Step number + icon circle */}
              <div className="relative mb-8">
                {/* Outer ring */}
                <div className="w-[72px] h-[72px] rounded-full border border-border-light flex items-center justify-center bg-surface">
                  <Icon size={28} className="text-accent" aria-hidden="true" />
                </div>
                {/* Step label */}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                  {step}
                </span>
              </div>

              <h3 className="text-primary-text font-semibold text-xl mb-3">
                {title}
              </h3>
              <p className="text-secondary-text text-base leading-relaxed mb-3">
                {description}
              </p>
              <span className="text-secondary-text/60 text-sm italic">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
