import PageWrapper from '../../components/PageWrapper';
import Contact from '../../components/Contact';

export const metadata = {
  title: 'Contact — IN NET CREATIONS | Get in Touch, Madurai',
  description:
    'Contact IN NET CREATIONS. Address: MIG 2/2, TNHB Thoppur, Madurai – 625008. Phone: 95852 66673 / 63690 36210. Email: hello@innetcreations.in. WhatsApp available.',
};

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Most of our websites fall between ₹15,000 and ₹75,000 depending on complexity. We always give you a fixed quote before starting — no hidden costs, no hourly billing surprises.',
  },
  {
    q: 'How long does a project take?',
    a: 'A standard website takes 2–4 weeks from discovery call to launch. Apps take 4–8 weeks. We\'ll confirm a firm timeline during the strategy phase.',
  },
  {
    q: 'Do you work with clients outside Madurai?',
    a: 'Absolutely. We work with clients across India and internationally. Everything is managed through video calls, WhatsApp, and email — distance is never a blocker.',
  },
  {
    q: 'Will I own the code and design files?',
    a: 'Yes. Once the final payment is made, you own 100% of the code, design files, and all assets we create for you. No lock-in, no licensing fees.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Every project includes 30 days of free post-launch support. After that, we offer affordable maintenance plans or one-off change requests.',
  },
  {
    q: 'Do you do hosting and domain setup?',
    a: 'Yes. We can handle domain registration, hosting setup, SSL certificates, and deployment. We recommend and set up the most cost-effective options for your needs.',
  },
];

export default function ContactPage() {
  return (
    <PageWrapper
      heroLabel="Get in Touch"
      heroTitle="Let's build something great"
      heroSub="Fill in the form, call us, or message on WhatsApp — we usually reply within the hour."
    >
      {/* Quick contact bar */}
      <section style={{ background: 'var(--bg-dark)', padding: '2rem 0', borderBottom: '1px solid rgba(160,125,63,0.2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-lg)', textAlign: 'center' }}>
            <a href="https://wa.me/919585266673" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <span style={{ fontSize: '1.5rem' }}>💬</span>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)' }}>WhatsApp</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)' }}>+91 95852 66673</span>
            </a>
            <a href="tel:+919585266673" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <span style={{ fontSize: '1.5rem' }}>📞</span>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)' }}>Call Us</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)' }}>95852 66673 / 63690 36210</span>
            </a>
            <a href="mailto:hello@innetcreations.in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <span style={{ fontSize: '1.5rem' }}>✉️</span>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)' }}>Email</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)' }}>hello@innetcreations.in</span>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: '1.5rem' }}>📍</span>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)' }}>Visit Us</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)' }}>MIG 2/2, TNHB Thoppur, Madurai</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form (reused from homepage component) */}
      <Contact />

      {/* FAQ Section */}
      <section style={{ padding: 'var(--space-section) 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Common Questions</span>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>

          <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {faqs.map((faq) => (
              <details
                key={faq.q}
                style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--border-radius)',
                  background: 'var(--bg-white)',
                  overflow: 'hidden',
                }}
              >
                <summary
                  style={{
                    padding: 'var(--space-lg)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-primary)',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ color: 'var(--accent-gold)', flexShrink: 0, marginLeft: 'var(--space-md)' }}>+</span>
                </summary>
                <div style={{
                  padding: '0 var(--space-lg) var(--space-lg)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontSize: 'var(--text-sm)',
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map / location embed */}
      <section style={{ padding: 'var(--space-3xl) 0', background: 'var(--bg-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: '#fff', marginBottom: 'var(--space-md)' }}>
            Find Us in Madurai
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--space-xl)' }}>
            MIG 2/2, TNHB Thoppur, Madurai – 625008, Tamil Nadu, India
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d78.1!3d9.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFkdXJhaQ!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 'var(--border-radius)', filter: 'grayscale(0.3) contrast(1.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IN NET CREATIONS Location — Madurai"
          />
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 'var(--space-xl)', flexWrap: 'wrap' }}>
            <a href="/book-a-call" className="navbar-cta" style={{ display: 'inline-flex', padding: '12px 28px' }}>Book a Free Call</a>
            <a href="https://wa.me/919585266673" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>WhatsApp Us</a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
