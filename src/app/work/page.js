import PageWrapper from '../../components/PageWrapper';
import WorkProjectCard from '../../components/WorkProjectCard';
import { projectsData } from '../../data/projects';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: 'Our Work — IN NET CREATIONS | Portfolio & Real Client Projects',
  description:
    'Real projects with live links: Sri Suriya Pipes, TrustMeNot, QR Cracker, KartZone, AI Chatbox, RAHONAM MDDS, Crack Code, and Manohar Portfolio. Every link is live.',
};

const categoryColors = {
  web: { bg: '#0d1b2a', text: '#4fc3f7', label: 'Web' },
  app: { bg: '#1a1a2e', text: '#b39ddb', label: 'App' },
  branding: { bg: '#1b2a1a', text: '#81c784', label: 'Branding' },
};

export default function WorkPage() {
  return (
    <PageWrapper
      heroLabel="Our Portfolio"
      heroTitle="Work our clients are proud of"
      heroSub="8 real projects. Every link is live. Click any card to see it in the wild."
    >
      {/* Stats bar */}
      <section style={{ background: 'var(--bg-dark)', padding: '2rem 0', borderBottom: '1px solid rgba(160,125,63,0.2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-lg)', textAlign: 'center' }}>
            {[
              { num: '8+', label: 'Live Projects' },
              { num: '100%', label: 'Client Satisfaction' },
              { num: '3', label: 'Categories' },
              { num: '2–4 wks', label: 'Average Delivery' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: 'var(--accent-gold)', marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ padding: 'var(--space-section) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-xl)' }}>
            {projectsData.map((project) => {
              const cat = categoryColors[project.category] || categoryColors.web;
              return (
                <WorkProjectCard key={project.id} project={project} cat={cat} />
              );
            })}
          </div>

          {/* Bottom note */}
          <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)', padding: 'var(--space-2xl)', border: '1px dashed var(--border-light)', borderRadius: 'var(--border-radius)' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
              Have a project in mind? Let&apos;s make it the next one on this list.
            </p>
            <a href="/book-a-call" className="btn-primary" style={{ display: 'inline-flex' }}>
              Start Your Project →
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  );
}
