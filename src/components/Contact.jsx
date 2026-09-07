'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ── Validation helpers ─────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/;

function isValidContact(value) {
  const v = value.trim();
  return EMAIL_RE.test(v) || PHONE_RE.test(v);
}

/**
 * Contact — Two-column layout with working contact form (left) and
 * direct contact details (right).
 *
 * EmailJS Integration:
 *   Template fields mapped:  {{name}} {{email}} {{message}}
 *   {{message}} is composed from: message + service + budget
 *   Honeypot anti-spam: hidden field '_honeypot'; rejected silently if filled.
 */
export default function Contact() {
  const [submitted, setSubmitted]   = useState(false);
  const [isSending, setIsSending]   = useState(false);
  const [sendError, setSendError]   = useState('');
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
    _honeypot: '', // anti-spam: invisible to real users
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // ── Client-side validation ───────────────────────────────────────────────
  function validate() {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email or phone number.';
    } else if (!isValidContact(formData.email)) {
      errors.email = 'Please enter a valid email address or phone number.';
    }
    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendError('');

    // ── Honeypot check (bots fill hidden fields, humans don't) ──────────
    if (formData._honeypot) {
      // Silently reject — don't reveal the anti-spam mechanism
      setSubmitted(true);
      return;
    }

    // ── Client-side validation ───────────────────────────────────────────
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSending(true);

    // ── Compose {{message}} combining all extra fields ───────────────────
    const messageParts = [];
    if (formData.service) messageParts.push(`Service: ${formData.service}`);
    if (formData.budget)  messageParts.push(`Budget: ${formData.budget}`);
    if (formData.message.trim()) messageParts.push(`\nMessage:\n${formData.message.trim()}`);
    const composedMessage = messageParts.join('\n') || '(No additional message)';

    const templateParams = {
      name:    formData.name.trim(),
      email:   formData.email.trim(),
      message: composedMessage,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
      // Reset form on success
      setFormData({
        name: '', email: '', service: '', budget: '', message: '', _honeypot: '',
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError(
        'Something went wrong — your message was not sent. Please try WhatsApp instead.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="section-label reveal">Contact</span>
        <h2 className="section-heading reveal">Get in touch</h2>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="reveal">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>

                {/* ── Honeypot field — hidden from real users, bots fill it ── */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="contact-honeypot">Leave this empty</label>
                  <input
                    id="contact-honeypot"
                    name="_honeypot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._honeypot}
                    onChange={handleChange}
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? 'contact-name-error' : undefined}
                  />
                  {formErrors.name && (
                    <span id="contact-name-error" className="contact-field-error" role="alert">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Email / Phone */}
                <div>
                  <label htmlFor="contact-email">Email or Phone *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="text"
                    required
                    placeholder="you@example.com or phone number"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? 'contact-email-error' : undefined}
                  />
                  {formErrors.email && (
                    <span id="contact-email-error" className="contact-field-error" role="alert">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="contact-service">Service Interested In</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Application Development">Application Development</option>
                    <option value="SEO & Optimization">SEO & Optimization</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Photo Editing">Photo Editing</option>
                    <option value="Poster & Graphic Design">Poster & Graphic Design</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Brand Strategy">Brand Strategy</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="contact-budget">Budget Range (optional)</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select a range</option>
                    <option value="Under ₹15,000">Under ₹15,000</option>
                    <option value="₹15,000 – ₹35,000">₹15,000 – ₹35,000</option>
                    <option value="₹35,000 – ₹75,000">₹35,000 – ₹75,000</option>
                    <option value="₹75,000+">₹75,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Send error message with WhatsApp fallback */}
                {sendError && (
                  <div className="contact-send-error" role="alert">
                    <span>{sendError}</span>
                    {' '}
                    <a
                      href="https://wa.me/916369036210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-error-wa-link"
                    >
                      Open WhatsApp →
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="contact-form-submit"
                  disabled={isSending}
                  aria-busy={isSending}
                >
                  {isSending ? (
                    <>
                      <span className="contact-form-spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            ) : (
              <div className="contact-success" role="status" aria-live="polite">
                <div className="contact-success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>
                  Thanks — we&apos;ll be in touch within 24 hours.
                  In the meantime, feel free to WhatsApp us directly.
                </p>
                <a
                  href="https://wa.me/916369036210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', marginTop: '1rem' }}
                >
                  Open WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info reveal reveal-delay-2">
            <div className="contact-info-item">
              <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div className="contact-info-label">Address</div>
                <div className="contact-info-value">
                  MIG 2/2, TNHB Thoppur,<br />
                  Madurai – 625008, Tamil Nadu
                </div>
              </div>
            </div>

            <div className="contact-info-item">
              <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <div className="contact-info-label">Phone</div>
                <div className="contact-info-value">
                  <a href="tel:+919585266671">95852 66671</a>
                  {' / '}
                  <a href="tel:+916369036210">63690 36210</a>
                </div>
              </div>
            </div>

            <div className="contact-info-item">
              <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">
                  <a href="mailto:hello@innetcreations.in">hello@innetcreations.in</a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <div className="contact-info-label">Follow Us</div>
              <div className="contact-socials">
                <a href="https://www.instagram.com/in_net_creations_?stkn=cWxlc3lkbWlpcm9j" className="contact-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://wa.me/916369036210" className="contact-social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/manohar-sudhakar-916a69353/" className="contact-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="contact-trust-note">
              Prefer a quick chat? Message us on WhatsApp — we usually reply within the hour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
