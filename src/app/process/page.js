import PageWrapper from '../../components/PageWrapper';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: 'Our Process — IN NET CREATIONS | Discover → Strategy → Design → Build → Grow',
  description:
    'Our 5-step studio workflow: Discover, Strategy, Design, Build, and Grow. See exactly how we take your idea from a blank page to a live product that drives business results.',
};

const steps = [
  {
    num: '01',
    title: 'Discover',
    duration: '1–2 days',
    icon: '🔍',
    color: '#1a3a4a',
    accent: '#4fc3f7',
    tagline: 'We listen before we create.',
    description:
      'Every great project starts with deep understanding. We kick off with a discovery call where we ask a lot of questions — about your business, your goals, your audience, and your competitors. We do our own research too: analysing your market, reviewing competitors, and identifying opportunities others miss.',
    youProvide: ['Your goals and must-haves', 'Existing assets (logo, brand, content)', 'Examples of sites/apps you like', 'Budget and timeline expectations'],
    weDeliver: ['Discovery call summary', 'Competitor landscape brief', 'Initial opportunity notes', 'Project scope outline'],
  },
  {
    num: '02',
    title: 'Strategy',
    duration: '2–3 days',
    icon: '🗺️',
    color: '#2a1a3a',
    accent: '#b39ddb',
    tagline: 'A plan, not a guess.',
    description:
      'With discovery complete, we create a clear project roadmap. This covers: what we\'re building and why, who it\'s for, how it will look and function, what success looks like, and what the timeline and budget are. No hidden surprises. You approve the strategy before any design or development begins.',
    youProvide: ['Approval on scope and direction', 'Any feedback on initial ideas', 'Final confirmation on budget'],
    weDeliver: ['Full project brief', 'Sitemap / app architecture', 'Content requirements checklist', 'Fixed-price quote and timeline'],
  },
  {
    num: '03',
    title: 'Design',
    duration: '3–7 days',
    icon: '✏️',
    color: '#1a2a1a',
    accent: '#81c784',
    tagline: 'Pixel-perfect before a line of code.',
    description:
      'Our designer builds complete visual mockups — not wireframes, not sketches, but polished, high-fidelity designs that show exactly how the final product will look. We design mobile-first, every time. You see every screen and interaction before we write a single line of code. We iterate until you\'re completely happy.',
    youProvide: ['Feedback on design drafts (rounds 1–3)', 'Brand assets if available', 'Sign-off to proceed to build'],
    weDeliver: ['Mobile & desktop mockups', 'Interactive prototype (Figma)', 'Design system (colours, type, spacing)', 'Icon and illustration set'],
  },
  {
    num: '04',
    title: 'Build',
    duration: '1–3 weeks',
    icon: '⚡',
    color: '#2a1a1a',
    accent: '#ef9a9a',
    tagline: 'Clean code. Real speed. Zero shortcuts.',
    description:
      'With approved designs in hand, we get to work. We build with modern frameworks (Next.js, React, Tailwind) that are fast, maintainable, and scalable. You receive weekly progress updates and can review a staging version of the project as it comes together. We run tests across browsers and devices before anything goes live.',
    youProvide: ['Content: text, images, videos', 'Domain and hosting credentials', 'Feedback on staging reviews'],
    weDeliver: ['Fully coded, responsive product', 'Staging environment for review', 'Performance-optimised codebase', 'Cross-browser & device testing'],
  },
  {
    num: '05',
    title: 'Grow',
    duration: 'Ongoing',
    icon: '🚀',
    color: '#1a2a3a',
    accent: '#ffcc02',
    tagline: 'We stay after launch.',
    description:
      'Going live is a milestone, not the finish line. After launch, we monitor performance, fix any issues, and start optimising for growth. Depending on your package, this includes SEO improvements, A/B testing, social media, and iterative feature additions. We treat your success as our success — because your growth is our best case study.',
    youProvide: ['Feedback on live performance', 'New goals as the business evolves'],
    weDeliver: ['30-day post-launch support', 'Performance report', 'SEO health check', 'Growth roadmap and recommendations'],
  },
];

export default function ProcessPage() {
  return (
    <PageWrapper
      heroLabel="How We Work"
      heroTitle="Five steps from idea to impact"
      heroSub="A clear, repeatable framework that keeps every project on time, on budget, and exactly on brief."
    >
      {/* Timeline intro */}
      <section style={{ padding: 'var(--space-section) 0' }}>
        <div className="container">

          {/* Overview strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
            gap: 0,
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--border-radius)',
            overflow: 'hidden',
            marginBottom: 'var(--space-4xl)',
          }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{
                padding: 'var(--space-lg)',
                textAlign: 'center',
                borderRight: i < steps.length - 1 ? '1px solid var(--border-light)' : 'none',
                background: 'var(--bg-white)',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{step.icon}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 4 }}>{step.title}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{step.duration}</div>
              </div>
            ))}
          </div>

          {/* Detailed steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
            {steps.map((step) => (
              <div key={step.num} style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--space-xl)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden',
                background: 'var(--bg-white)',
              }}>
                {/* Step header */}
                <div style={{ background: step.color, padding: 'var(--space-xl)', display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '2rem' }}>{step.icon}</span>
                  <div>
                    <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'baseline', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', color: step.accent, opacity: 0.5 }}>{step.num}</span>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 500, color: '#fff' }}>{step.title}</h2>
                      <span style={{ padding: '3px 10px', borderRadius: 20, background: 'rgba(255,255,255,0.1)', color: step.accent, fontSize: 'var(--text-xs)', fontWeight: 600 }}>{step.duration}</span>
                    </div>
                    <p style={{ color: step.accent, fontSize: 'var(--text-sm)', fontWeight: 600, marginTop: 4 }}>{step.tagline}</p>
                  </div>
                </div>

                {/* Step body */}
                <div style={{ padding: '0 var(--space-xl) var(--space-xl)', display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }}>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: 'var(--text-base)' }}>{step.description}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }}>
                    <div>
                      <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)' }}>You Provide</h3>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                        {step.youProvide.map((item) => (
                          <li key={item} style={{ display: 'flex', gap: 'var(--space-sm)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', alignItems: 'flex-start' }}>
                            <span style={{ color: '#888', flexShrink: 0 }}>◦</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)' }}>We Deliver</h3>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                        {step.weDeliver.map((item) => (
                          <li key={item} style={{ display: 'flex', gap: 'var(--space-sm)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ strip */}
          <div style={{ marginTop: 'var(--space-4xl)', padding: 'var(--space-2xl)', background: 'var(--bg-dark)', borderRadius: 'var(--border-radius)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: '#fff', marginBottom: 'var(--space-md)' }}>
              How long does a typical project take?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto var(--space-xl)' }}>
              Most websites launch within 2–4 weeks. Apps take 4–8 weeks depending on complexity. We always give you a firm timeline before we start — no vague estimates.
            </p>
            <a href="/book-a-call" className="navbar-cta" style={{ display: 'inline-flex', padding: '12px 32px' }}>
              Book a Free Discovery Call →
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  );
}
