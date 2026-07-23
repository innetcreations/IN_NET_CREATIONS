import PlaceholderImage from './PlaceholderImage';

/**
 * Hero — Large serif headline, benefit-driven sub-headline, dual CTAs,
 * and a client logo trust strip.
 */
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content reveal">
          <span className="section-label">Digital Craft &amp; Growth Studio</span>

          <h1 className="hero-headline">
            Premium digital experiences,<br />
            built to grow your business
          </h1>

          <p className="hero-sub">
            Strategy, design, and development — from a studio that treats your brand like our own.
            Websites live in weeks, not months.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">Start Your Project</a>
            <a href="#portfolio" className="btn-secondary">View Our Work</a>
          </div>

          <div className="hero-trust">
            <p className="hero-trust-label">Trusted by growing brands</p>
            <div className="hero-logos">
              {/* TODO: Replace with real client logos — see /assets/clients/ */}
              <PlaceholderImage label="Client logo" dimensions="200×80" />
              <PlaceholderImage label="Client logo" dimensions="200×80" />
              <PlaceholderImage label="Client logo" dimensions="200×80" />
              <PlaceholderImage label="Client logo" dimensions="200×80" />
              <PlaceholderImage label="Client logo" dimensions="200×80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
