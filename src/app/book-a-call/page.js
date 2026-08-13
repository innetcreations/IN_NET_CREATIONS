'use client';

import { useState } from 'react';
import PageWrapper from '../../components/PageWrapper';

export default function BookACallPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offerings = [
    {
      icon: (
        <svg className="book-a-call-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.99 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Free 20-Minute Discovery Call',
      desc: 'No pitch, no pressure. We listen, ask the right questions, and figure out if we\'re a good fit — together.',
    },
    {
      icon: (
        <svg className="book-a-call-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: 'Clear Proposal Within 48 hrs',
      desc: 'After the call, we\'ll send a detailed scope, timeline, and fixed price — no ambiguous hourly billing.',
    },
    {
      icon: (
        <svg className="book-a-call-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: 'Dedicated Project Team',
      desc: 'You\'ll work directly with Manohar and Harish Raj — not a project manager or account exec. Real people, real accountability.',
    },
    {
      icon: (
        <svg className="book-a-call-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'No Jargon, Full Transparency',
      desc: 'Weekly progress updates in plain English. No surprises. No hidden costs. Just honest, professional work.',
    },
  ];

  return (
    <PageWrapper
      heroLabel="Book a Call"
      heroTitle="Start your project — free 20-min call"
      heroSub="Pick a time that suits you and tell us about your project. We'll take it from there."
    >
      <section className="book-a-call-section">
        <div className="container">
          <div className="book-a-call-grid">

            {/* Left — Form */}
            <div>
              <span className="section-label">Request a Session</span>
              <h2 className="section-heading" style={{ marginBottom: 'var(--space-2xl)' }}>
                Tell us about your project
              </h2>

              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="bac-name">Full Name *</label>
                    <input id="bac-name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="bac-email">Email Address *</label>
                    <input id="bac-email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="bac-phone">Phone / WhatsApp</label>
                    <input id="bac-phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="bac-service">Service Interested In *</label>
                    <select id="bac-service" name="service" required value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="app">Application Development</option>
                      <option value="seo">SEO &amp; Optimization</option>
                      <option value="video">Video Editing</option>
                      <option value="photo">Photo Editing</option>
                      <option value="design">Poster &amp; Graphic Design</option>
                      <option value="social">Social Media Management</option>
                      <option value="brand">Brand Strategy</option>
                      <option value="other">Other / Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bac-budget">Budget Range</label>
                    <select id="bac-budget" name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select a range</option>
                      <option value="under-15k">Under ₹15,000</option>
                      <option value="15k-35k">₹15,000 – ₹35,000</option>
                      <option value="35k-75k">₹35,000 – ₹75,000</option>
                      <option value="75k-plus">₹75,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bac-message">Tell Us About Your Project</label>
                    <textarea
                      id="bac-message"
                      name="message"
                      rows={5}
                      placeholder="What are you looking to build? What's your timeline? Any other context that helps..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="contact-form-submit">
                    Request a Call →
                  </button>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-xs)' }}>
                    We'll reply within 24 hours to confirm a time. No spam, ever.
                  </p>
                </form>
              ) : (
                <div className="contact-success" style={{ padding: 'var(--space-3xl)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-lg)' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-md)' }}>
                    Request received!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)' }}>
                    Thanks {form.name ? form.name.split(' ')[0] : ''}! We'll be in touch within 24 hours to confirm your call time.
                    In the meantime, feel free to WhatsApp us directly.
                  </p>
                  <a
                    href="https://wa.me/919585266673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ display: 'inline-flex', marginTop: 'var(--space-xl)' }}
                  >
                    Open WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Right — Info cards */}
            <div>
              <span className="section-label">What to Expect</span>
              <h2 className="section-heading" style={{ marginBottom: 'var(--space-2xl)' }}>
                Simple, transparent process
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {offerings.map((item) => (
                  <div className="book-a-call-info-card" key={item.title}>
                    {item.icon}
                    <div>
                      <div className="book-a-call-card-title">{item.title}</div>
                      <p className="book-a-call-card-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct contact links */}
              <div style={{
                marginTop: 'var(--space-2xl)',
                padding: 'var(--space-xl)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--border-radius)',
                background: 'var(--bg-white)',
              }}>
                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-md)' }}>
                  Or reach us directly:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <a href="https://wa.me/919585266673" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                    💬 WhatsApp: +91 95852 66673
                  </a>
                  <a href="tel:+919585266673" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    📞 95852 66673 / 63690 36210
                  </a>
                  <a href="mailto:hello@innetcreations.in" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    ✉️ hello@innetcreations.in
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
