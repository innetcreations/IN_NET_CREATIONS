/**
 * Services — 8-item grid showcasing all service offerings.
 * Each card has a gold-tinted SVG icon, title, description, and "Learn more" link.
 */
export default function Services() {
  const services = [
    {
      title: 'Website Development',
      desc: 'Fast, responsive, conversion-focused websites that look exceptional on every device.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Application Development',
      desc: 'Native and cross-platform apps built for performance, usability, and scale.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'SEO & Optimization',
      desc: 'Data-driven strategies that put your business in front of the right audience, consistently.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: 'Video Editing',
      desc: 'Polished, scroll-stopping video content — from reels and ads to full brand films.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      ),
    },
    {
      title: 'Photo Editing',
      desc: 'Professional retouching, color grading, and compositing that elevates every image.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
        </svg>
      ),
    },
    {
      title: 'Poster & Graphic Design',
      desc: 'Eye-catching visuals — posters, social creatives, packaging, and print collateral.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      title: 'Social Media Management',
      desc: 'More followers, more customers, less guesswork — across every platform that matters.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" /><line x1="16" y1="11.37" x2="16.01" y2="11.37" /><path d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
        </svg>
      ),
    },
    {
      title: 'Brand Strategy',
      desc: 'Positioning, messaging, and identity work that makes your brand impossible to ignore.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <span className="section-label reveal">What We Offer</span>
        <h2 className="section-heading reveal">A complete studio, under one roof</h2>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className={`services-card reveal reveal-delay-${(i % 4) + 1}`} key={i}>
              <div className="services-card-icon">{service.icon}</div>
              <h3 className="services-card-title">{service.title}</h3>
              <p className="services-card-desc">{service.desc}</p>
              <a href="#contact" className="services-card-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
