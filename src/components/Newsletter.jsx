'use client';

import { useState } from 'react';

/**
 * Newsletter — Slim email capture strip above the footer.
 * Low-friction lead capture for visitors not yet ready to fully commit.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: Connect to email service (Mailchimp, ConvertKit, or custom API)
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-inner reveal">
          <h2 className="newsletter-heading">
            Get occasional tips on growing your business online
          </h2>
          {!submitted ? (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="newsletter-submit">
                Subscribe
              </button>
            </form>
          ) : (
            <p className="newsletter-success">
              ✓ You&apos;re in — we&apos;ll send only the good stuff.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
