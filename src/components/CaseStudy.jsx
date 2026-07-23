import PlaceholderImage from './PlaceholderImage';

/**
 * CaseStudy — Large, single-project spotlight block.
 * A distinctive layout element that builds credibility — image left, details right.
 */
export default function CaseStudy() {
  return (
    <section className="case-study" id="case-study">
      <div className="container">
        <span className="section-label reveal">Featured Project</span>
        <h2 className="section-heading reveal">Work that speaks for itself</h2>

        <div className="case-study-inner">
          <div className="case-study-image reveal">
            {/* TODO: Replace with real project screenshot — see /assets/portfolio/ */}
            <PlaceholderImage label="Project screenshot" dimensions="1600×1000" />
          </div>

          <div className="case-study-details reveal reveal-delay-2">
            <span className="case-study-tag">Website Redesign</span>
            {/* TODO: Replace with real project name and details */}
            <h3 className="case-study-title">Revamping an established brand&apos;s digital presence</h3>
            <p className="case-study-desc">
              We redesigned their entire booking experience from the ground up — faster load times,
              clearer navigation, mobile-first design. The result: a 45% increase in online bookings
              within 60 days of launch.
            </p>
            <a
              href="#"
              className="case-study-link"
              data-portfolio-link
            >
              {/* TODO: Insert live project URL */}
              View case study <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
