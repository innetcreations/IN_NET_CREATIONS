import PageWrapper from '../../components/PageWrapper';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: 'About Us — IN NET CREATIONS | Manohar & S. Harish Raj, Madurai',
  description:
    'IN NET CREATIONS is a digital studio founded in Madurai by Manohar (Lead Developer) and S. Harish Raj (Creative Lead). We build websites, apps, and brands that grow businesses.',
};

const values = [
  { icon: '⚡', title: 'Speed Without Sacrifice', desc: 'We move fast — websites in weeks, not months. But we never cut corners on quality, accessibility, or performance.' },
  { icon: '🤝', title: 'Direct Partnership', desc: 'No account managers in the middle. You work directly with the people building your product, every step of the way.' },
  { icon: '🎯', title: 'Results-First Thinking', desc: 'We measure success by business outcomes — leads, conversions, growth — not just how good it looks on our portfolio.' },
  { icon: '🔒', title: 'Radical Transparency', desc: 'Fixed prices quoted upfront. Weekly progress updates in plain language. No hidden costs, ever. What we promise, we deliver.' },
];

const stats = [
  { num: '8+', label: 'Live Projects' },
  { num: '3+', label: 'Years in Business' },
  { num: '100%', label: 'Client Satisfaction' },
  { num: '2', label: 'Dedicated Founders' },
];

const founders = [
  {
    name: 'Manohar',
    role: 'Co-Founder & Lead Developer',
    initials: 'M',
    quote: '"Great digital work starts with genuinely understanding the people behind the business."',
    skills: ['Next.js & React', 'Python & Flask', 'Machine Learning (TensorFlow, scikit-learn)', 'Full-Stack Architecture', '3D Web (Three.js)', 'Database Design'],
    link: 'https://manohar-portfolio-gray.vercel.app/',
    projects: ['RAHONAM MDDS', 'KartZone', 'QR Cracker', 'Manohar Portfolio'],
  },
  {
    name: 'S. Harish Raj',
    role: 'Co-Founder & Creative Lead',
    initials: 'HR',
    quote: '"Every pixel should earn its place — design is strategy made visible."',
    skills: ['UI/UX Design (Figma)', 'Brand Identity', 'Graphic Design (Photoshop, Illustrator)', 'Video Editing (Premiere Pro)', 'Social Media Strategy', 'Motion Graphics'],
    link: null,
    projects: ['Sri Suriya Pipes', 'TrustMeNot', 'Crack Code', 'Brand Campaigns'],
  },
];

export default function AboutPage() {
  return (
    <PageWrapper
      heroLabel="About Us"
      heroTitle="A small team that thinks big"
      heroSub="We're not a factory. We're a studio where the people building your project are the same people you talk to."
    >
      {/* Story section */}
      <section style={{ padding: 'var(--space-section) 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-3xl)', maxWidth: 900, margin: '0 auto' }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-heading">Built in Madurai. Built to last.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 'var(--text-base)' }}>
                <p>
                  IN NET CREATIONS was founded in Madurai, Tamil Nadu by two developers who were frustrated by one thing: businesses getting charged premium prices for mediocre digital work that didn&apos;t actually grow their business.
                </p>
                <p>
                  We started with a simple belief — <strong style={{color:'var(--text-primary)'}}>every business deserves a digital presence that actually works</strong>. Not just something that looks nice in a screenshot, but something that converts visitors into customers, ranks on Google, and represents the business proudly.
                </p>
                <p>
                  Since starting, we&apos;ve shipped over 8 live projects — from a 20-year-old pipe manufacturer&apos;s first ever website, to AI-powered health diagnostics tools, to multi-vendor marketplaces. We&apos;re proud of every single one.
                </p>
                <p>
                  Our studio is based in Madurai but we work with clients across India and beyond. If you have a project, we&apos;re happy to jump on a call — wherever you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--bg-dark)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-xl)', textAlign: 'center' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', color: 'var(--accent-gold)', marginBottom: 6 }}>{s.num}</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section style={{ padding: 'var(--space-section) 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <span className="section-label">Meet the Founders</span>
          <h2 className="section-heading">The people behind your project</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-xl)', marginTop: 'var(--space-2xl)' }}>
            {founders.map((f) => (
              <div key={f.name} style={{
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--border-radius)',
                background: 'var(--bg-white)',
                overflow: 'hidden',
              }}>
                {/* Avatar header */}
                <div style={{ background: 'var(--bg-dark)', padding: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: '50%',
                    background: 'rgba(160,125,63,0.15)',
                    border: '2px solid var(--accent-gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: 'var(--accent-gold)',
                    fontWeight: 500,
                  }}>
                    {f.initials}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: '#fff' }}>{f.name}</div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-gold)', fontWeight: 600, marginTop: 4 }}>{f.role}</div>
                  </div>
                </div>

                <div style={{ padding: 'var(--space-xl)' }}>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6, marginBottom: 'var(--space-lg)', borderLeft: '2px solid var(--accent-gold)', paddingLeft: 'var(--space-md)' }}>
                    {f.quote}
                  </p>

                  <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 'var(--space-sm)' }}>Skills & Expertise</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-lg)' }}>
                    {f.skills.map((skill) => (
                      <span key={skill} style={{ padding: '3px 10px', background: 'var(--bg-primary)', border: '1px solid var(--border-light)', borderRadius: 20, fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{skill}</span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 'var(--space-sm)' }}>Notable Projects</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-lg)' }}>
                    {f.projects.map((p) => (
                      <span key={p} style={{ padding: '3px 10px', background: 'rgba(160,125,63,0.08)', border: '1px solid rgba(160,125,63,0.2)', borderRadius: 20, fontSize: 'var(--text-xs)', color: 'var(--accent-gold)' }}>{p}</span>
                    ))}
                  </div>

                  {f.link && (
                    <a href={f.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-sm)', color: 'var(--accent-gold)', fontWeight: 600 }}>
                      View Portfolio →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'var(--space-section) 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <span className="section-label">What We Stand For</span>
          <h2 className="section-heading">Our values, in plain English</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 'var(--space-xl)', marginTop: 'var(--space-2xl)' }}>
            {values.map((v) => (
              <div key={v.title} style={{ padding: 'var(--space-xl)', border: '1px solid var(--border-light)', borderRadius: 'var(--border-radius)', background: 'var(--bg-white)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>{v.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ padding: 'var(--space-section) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
            <div>
              <span className="section-label">Find Us</span>
              <h2 className="section-heading">Based in Madurai, Tamil Nadu</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-xl)' }}>
                MIG 2/2, TNHB Thoppur, Madurai – 625008, Tamil Nadu, India<br/>
                <a href="tel:+919585266673" style={{ color: 'var(--accent-gold)' }}>+91 95852 66673</a>
                {' / '}
                <a href="tel:+916369036210" style={{ color: 'var(--accent-gold)' }}>+91 63690 36210</a><br/>
                <a href="mailto:hello@innetcreations.in" style={{ color: 'var(--accent-gold)' }}>hello@innetcreations.in</a>
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/book-a-call" className="btn-primary">Book a Free Call →</a>
                <a href="https://wa.me/919585266673" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  );
}
