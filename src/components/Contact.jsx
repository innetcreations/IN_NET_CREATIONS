'use client';

import { useState } from 'react';

/**
 * Contact — Two-column layout with working contact form (left) and
 * direct contact details (right).
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to a real form handler (Netlify Forms, Formspree, or custom API)
    setSubmitted(true);
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
              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email">Email or Phone</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="text"
                    required
                    placeholder="you@example.com or phone number"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contact-service">Service Interested In</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="app">Application Development</option>
                    <option value="seo">SEO & Optimization</option>
                    <option value="video">Video Editing</option>
                    <option value="photo">Photo Editing</option>
                    <option value="poster">Poster & Graphic Design</option>
                    <option value="social">Social Media Management</option>
                    <option value="brand">Brand Strategy</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-budget">Budget Range (optional)</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select a range</option>
                    <option value="under-15k">Under ₹15,000</option>
                    <option value="15k-35k">₹15,000 – ₹35,000</option>
                    <option value="35k-75k">₹35,000 – ₹75,000</option>
                    <option value="75k-plus">₹75,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
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
                <button type="submit" className="contact-form-submit">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="contact-success">
                ✓ Thanks — we&apos;ll be in touch within 24 hours.
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
                  <a href="tel:+919585266673">95852 66673</a>
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
                  {/* TODO: Update with real email once confirmed */}
                  <a href="mailto:hello@innetcreations.in">hello@innetcreations.in</a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <div className="contact-info-label">Follow Us</div>
              <div className="contact-socials">
                {/* TODO: Replace # with real social media URLs */}
                <a href="#" className="contact-social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://wa.me/919585266673" className="contact-social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
                <a href="#" className="contact-social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="contact-social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
