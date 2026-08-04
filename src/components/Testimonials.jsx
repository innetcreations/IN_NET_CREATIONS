'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Testimonials — 3 testimonial cards with auto-rotating carousel.
 * On mobile shows one at a time; on desktop shows all three.
 */
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // TODO: Replace with real testimonials
  const testimonials = [
    {
      quote:
        'IN NET CREATIONS completely transformed our online presence. Our website went from outdated to outstanding — and we saw real results within the first month.',
      name: 'Rajesh Kumar',
      initials: 'RK',
      business: 'Retail Business Owner',
    },
    {
      quote:
        'Working with Manohar and Harish felt like having an in-house team. They understood our vision instantly and delivered beyond expectations, on time.',
      name: 'Priya Lakshmi',
      initials: 'PL',
      business: 'Healthcare Startup Founder',
    },
    {
      quote:
        'Their social media management has been a game-changer. More followers, more engagement, more customers walking through our doors. Highly recommend.',
      name: 'Arun Selvam',
      initials: 'AS',
      business: 'Restaurant Owner',
    },
  ];

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <span className="section-label reveal">Testimonials</span>
        <h2 className="section-heading reveal">Trusted by growing brands</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <div
              className={`testimonial-card reveal reveal-delay-${i + 1}`}
              key={i}
            >
              <div className="testimonial-quote-icon" aria-hidden="true">&ldquo;</div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div>
                  <div className="testimonial-author-name">{testimonial.name}</div>
                  <div className="testimonial-author-role">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
