/**
 * CTABanner — Full-width dark section with gold accent and conversion-focused headline.
 */
export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <span className="section-label reveal">Let&apos;s Talk</span>
        <h2 className="cta-banner-headline reveal">
          Ready to grow your business online?
        </h2>
        <p className="cta-banner-sub reveal">
          Reach out today — we reply within 24 hours.
        </p>
        <div className="reveal reveal-delay-2">
          <a href="#contact" className="btn-gold">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
