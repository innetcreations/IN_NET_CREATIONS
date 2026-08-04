import PlaceholderImage from './PlaceholderImage';

/**
 * Hero — Large serif headline, benefit-driven sub-headline, and dual CTAs.
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
        </div>
      </div>
    </section>
  );
}
