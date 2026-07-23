/**
 * Pricing — 3-tier pricing cards: Starter, Growth (most popular), Premium.
 * Realistic placeholder pricing clearly marked with TODO comments.
 */
export default function Pricing() {
  // TODO: Update pricing with real amounts and feature lists
  const plans = [
    {
      tier: 'Starter',
      desc: 'Perfect for small businesses getting started online.',
      price: '₹15,000',
      priceNote: 'Starting price · one-time',
      features: [
        'Single-page responsive website',
        'Basic SEO setup',
        'Mobile-friendly design',
        'Contact form integration',
        '1 round of revisions',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      tier: 'Growth',
      desc: 'For businesses ready to scale their digital presence.',
      price: '₹35,000',
      priceNote: 'Starting price · one-time',
      features: [
        'Multi-page website or web app',
        'Advanced SEO & analytics',
        'Social media setup & templates',
        'Content strategy consultation',
        '3 rounds of revisions',
      ],
      cta: 'Start Growing',
      popular: true,
    },
    {
      tier: 'Premium',
      desc: 'Full-service digital partnership — everything you need.',
      price: 'Custom',
      priceNote: 'Tailored to your goals',
      features: [
        'Complete brand strategy & identity',
        'Custom web or app development',
        'Ongoing SEO & social management',
        'Video & photo content creation',
        'Dedicated account management',
      ],
      cta: "Let's Talk",
      popular: false,
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <span className="section-label reveal">Pricing</span>
        <h2 className="section-heading reveal">Transparent pricing, real value</h2>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              className={`pricing-card reveal reveal-delay-${i + 1} ${plan.popular ? 'popular' : ''}`}
              key={plan.tier}
            >
              {plan.popular && <span className="pricing-badge">Most Popular</span>}
              <h3 className="pricing-tier">{plan.tier}</h3>
              <p className="pricing-desc">{plan.desc}</p>
              <div className="pricing-price">{plan.price}</div>
              <p className="pricing-price-note">{plan.priceNote}</p>
              <ul className="pricing-features">
                {plan.features.map((feature, j) => (
                  <li className="pricing-feature" key={j}>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="pricing-cta">
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
