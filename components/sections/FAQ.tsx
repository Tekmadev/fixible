'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs, business } from '@/data/business'
import { useReveal } from '@/lib/use-reveal'

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div
      className={`reveal reveal-delay-${Math.min(index + 1, 8)} border-b border-border-light last:border-0`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-primary-text font-medium text-base group-hover:text-accent/90 transition-colors pr-2">
          {question}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`flex-shrink-0 text-secondary-text transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Answer — CSS max-height transition via class toggle */}
      <div
        className={`faq-answer ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <p className="text-secondary-text text-base leading-relaxed pb-5 pr-8">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useReveal<HTMLDivElement>(0.08)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="faq"
      className="relative py-section px-6"
      aria-labelledby="faq-heading"
    >
      <div ref={sectionRef} className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="pill mx-auto mb-5 reveal">FAQ</p>
          <h2
            id="faq-heading"
            className="text-display-md font-bold font-doto text-primary-text mb-5 reveal reveal-delay-1 speakable"
          >
            Everything You Need{' '}
            <span className="text-secondary-text font-normal">to Know.</span>
          </h2>
          <p className="text-secondary-text text-lg reveal reveal-delay-2">
            Questions about our service, coverage, and pricing.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="glass rounded-3xl px-6 md:px-8"
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, i) => (
            <div key={faq.question} role="listitem">
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center reveal">
          <p className="text-secondary-text text-sm mb-3">
            Still have questions? We&apos;re happy to help.
          </p>
          <a
            href={`mailto:${business.email}`}
            className="text-accent hover:text-accent-hover text-sm font-medium underline underline-offset-4 transition-colors"
          >
            {business.email}
          </a>
        </div>
      </div>
    </section>
  )
}
