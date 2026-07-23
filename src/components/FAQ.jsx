'use client';

import { useState } from 'react';

/**
 * FAQ — Accordion-style frequently asked questions.
 * Only one item open at a time. Uses aria-expanded for accessibility.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does a typical website take?',
      answer:
        'Most projects go from kickoff to launch in 3–6 weeks depending on complexity. A simple single-page site can be ready in under two weeks; a custom web app with multiple features typically takes 4–8 weeks. We provide a clear timeline before work begins so there are no surprises.',
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer:
        'Absolutely. We offer flexible support plans that include updates, performance monitoring, content changes, and technical maintenance. Many of our clients stay with us long-term — we think of ourselves as your digital partner, not a one-and-done vendor.',
    },
    {
      question: 'Can you manage our social media alongside the website?',
      answer:
        'Yes — that\'s one of our core strengths. We handle content creation, scheduling, community management, and performance reporting across Instagram, Facebook, LinkedIn, and more. Bundling services means a more consistent brand and better results.',
    },
    {
      question: 'What\'s included in the SEO package?',
      answer:
        'Our SEO work covers technical audits, on-page optimization (meta tags, content structure, page speed), keyword research, Google Business Profile setup, and monthly performance reporting. We focus on sustainable organic growth, not shortcuts.',
    },
    {
      question: 'Do you work with businesses outside Madurai?',
      answer:
        'We do. While we\'re proudly based in Madurai, we work with clients across Tamil Nadu and India. Most of our communication happens over video calls and WhatsApp, so location is never a barrier to great work.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Simple — fill out the contact form below or message us on WhatsApp. We\'ll set up a free 20-minute discovery call to understand your needs, then follow up with a clear proposal and timeline. No pressure, no jargon.',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <span className="section-label reveal">FAQ</span>
        <h2 className="section-heading reveal">Questions we hear most</h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? 'open' : ''} reveal reveal-delay-${Math.min(i + 1, 6)}`} key={i}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>{faq.question}</span>
                <span className="faq-question-icon" aria-hidden="true">+</span>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <div className="faq-answer-inner">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
