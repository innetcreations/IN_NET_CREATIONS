import PageWrapper from '../../components/PageWrapper';
import ProjectImage from '../../components/ProjectImage';
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
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--border-radius)',
                    background: 'var(--bg-white)',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                    textDecoration: 'none',
                  }}
                  className="work-project-card"
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: 220, background: '#0f0f0f', overflow: 'hidden' }}>
                    <ProjectImage src={project.image} alt={project.name} />
                    {/* Category badge */}
                    <div style={{
                      position: 'absolute', top: 12, left: 12,
                      padding: '4px 10px', borderRadius: 20,
                      background: cat.bg, color: cat.text,
                      fontSize: 'var(--text-xs)', fontWeight: 600,
                      border: `1px solid ${cat.text}44`,
                    }}>
                      {cat.label}
                    </div>
                    {/* Live badge */}
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      padding: '4px 10px', borderRadius: 20,
                      background: 'rgba(0,0,0,0.7)', color: '#4caf50',
                      fontSize: 'var(--text-xs)', fontWeight: 600,
                      display: 'flex', alignItems: 'center', gap: 5,
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf50', display: 'inline-block' }} /> Live
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: 'var(--space-lg)' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                      {project.name}
                    </h2>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>{project.title}</p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{project.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-lg)' }}>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        View Live →
                      </span>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                        {project.link.replace('https://', '').replace('http://', '').split('/')[0]}
                      </span>
                    </div>
                  </div>
                </a>
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
