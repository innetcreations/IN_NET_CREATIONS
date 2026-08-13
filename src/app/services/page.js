import PageWrapper from '../../components/PageWrapper';
import CTABanner from '../../components/CTABanner';

export const metadata = {
  title: 'Services — IN NET CREATIONS | Web, App, SEO & Creative Studio',
  description:
    'Full-service digital studio offering Website Development, App Development, SEO, Video Editing, Photo Editing, Graphic Design, Social Media Management, and Brand Strategy — from Madurai.',
};

const services = [
  {
    num: '01',
    title: 'Website Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:40,height:40,color:'var(--accent-gold)'}}>
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    tagline: 'Fast. Beautiful. Conversion-first.',
    description: 'We build websites that look exceptional, load instantly, and convert visitors into customers. Every site we create is custom-designed — no templates, no shortcuts. Built for performance, accessibility, and long-term growth.',
    features: [
      'Fully responsive — pixel-perfect on mobile, tablet, and desktop',
      'Performance-optimised: 90+ Google PageSpeed scores as standard',
      'SEO-ready structure, semantic HTML, and clean metadata out of the box',
      'Integrated contact forms, WhatsApp buttons, and payment gateways',
      'CMS integration for easy self-editing (optional)',
      'Live in 2–4 weeks, not months',
    ],
    deliverables: ['Custom design mockups', 'Fully coded website', 'Domain & hosting setup', '30 days post-launch support'],
  },
  {
    num: '02',
    title: 'Application Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:40,height:40,color:'var(--accent-gold)'}}>
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    tagline: 'Native power. Cross-platform reach.',
    description: "From social platforms to AI-powered tools, we design and build web apps and mobile apps that handle real user load. We've shipped everything from quiz platforms (TrustMeNot) to multi-disease diagnostic systems (RAHONAM MDDS).",
    features: [
      'React, Next.js, and modern JavaScript frameworks',
      'Mobile apps for Android & iOS (React Native / PWA)',
      'RESTful APIs, database architecture, and backend logic',
      'AI/ML feature integration (chatbots, recommendations, detection)',
      'Real-time features: live chat, notifications, leaderboards',
      'Secure authentication and user management',
    ],
    deliverables: ['Full-stack web/mobile app', 'API documentation', 'Admin dashboard', 'Deployment & DevOps setup'],
  },
  {
    num: '03',
    title: 'SEO & Optimization',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:40,height:40,color:'var(--accent-gold)'}}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    tagline: 'Rank higher. Stay there.',
    description: "SEO isn't a one-time task — it's an ongoing system. We audit your current presence, fix technical issues, build content strategy, and optimise for the keywords that actually drive revenue for your business.",
    features: [
      'Full technical SEO audit: speed, crawlability, Core Web Vitals',
      'Keyword research tailored to your industry and location',
      'On-page optimisation: titles, meta, schema markup, internal linking',
      'Local SEO: Google Business Profile, citations, maps ranking',
      'Competitor gap analysis and content calendar',
      'Monthly performance reports with real metrics',
    ],
    deliverables: ['SEO audit report', 'Keyword strategy doc', 'On-page optimisation', 'Monthly tracking dashboard'],
  },
  {
    num: '04',
    title: 'Video Editing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:40,height:40,color:'var(--accent-gold)'}}>
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    tagline: 'Scroll-stopping. Brand-consistent.',
    description: "From short-form reels to full brand films, we edit video content that communicates your message with impact. Whether it's a product promo, YouTube video, or Instagram reel — we make it look professional and feel on-brand.",
    features: [
      'Short-form: Reels, YouTube Shorts, TikTok content',
      'Long-form: brand films, product videos, explainers',
      'Motion graphics, text animations, and lower thirds',
      'Color grading and professional audio mixing',
      'Subtitles and multi-format export (1:1, 9:16, 16:9)',
      'Turnaround: 48–72 hours per edit',
    ],
    deliverables: ['Edited video files (all formats)', 'Project files (on request)', 'Social-optimised thumbnail'],
  },
  {
    num: '05',
    title: 'Photo Editing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:40,height:40,color:'var(--accent-gold)'}}>
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    tagline: 'Every pixel, purposeful.',
    description: "Professional photo editing that transforms raw shots into publication-ready images. Whether it's product photography for your store, headshots for your team, or images for your marketing — we make every photo work harder.",
    features: [
      'Product photography retouching and background removal',
      'Portrait editing: skin retouching, color correction',
      'Brand-consistent color grading across image sets',
      'Batch editing for e-commerce catalogs (50+ images)',
      'Composite and manipulation work',
      'High-resolution export for print and web',
    ],
    deliverables: ['High-res edited images (JPG/PNG/WebP)', 'Lightroom presets (on request)', 'Original RAW files kept private'],
  },
  {
    num: '06',
    title: 'Poster & Graphic Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:40,height:40,color:'var(--accent-gold)'}}>
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    tagline: 'Visuals that stop the scroll.',
    description: 'Eye-catching design that communicates your brand at a glance. We create everything from event posters and social media creatives to business cards and packaging — all consistent with your brand identity.',
    features: [
      'Social media templates (Instagram, Facebook, LinkedIn)',
      'Event and promotional posters (print & digital)',
      'Business stationery: cards, letterheads, envelopes',
      'Brand collateral: brochures, flyers, pitch decks',
      'Packaging design and label artwork',
      "Unlimited revisions until you're happy",
    ],
    deliverables: ['Print-ready files (PDF/AI)', 'Web-ready files (JPG/PNG)', 'Editable source files'],
  },
  {
    num: '07',
    title: 'Social Media Management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:40,height:40,color:'var(--accent-gold)'}}>
        <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    tagline: 'Grow your audience. Own your feed.',
    description: 'Stop posting randomly and hoping for the best. We build a data-driven social media presence — consistent posting, strategic content that educates and converts, and community management that builds real relationships.',
    features: [
      'Platform strategy: Instagram, Facebook, LinkedIn, YouTube',
      'Content calendar (30 days planned in advance)',
      '12–20 posts/month with design, copy, and scheduling',
      'Stories, Reels, and short-video content',
      'Community management: reply to comments & DMs',
      'Monthly analytics report with growth metrics',
    ],
    deliverables: ['Monthly content calendar', 'Custom-designed posts', 'Performance report', 'Hashtag & audience strategy'],
  },
  {
    num: '08',
    title: 'Brand Strategy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width:40,height:40,color:'var(--accent-gold)'}}>
        <circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/>
      </svg>
    ),
    tagline: 'Identity that earns trust instantly.',
    description: "Your brand is more than a logo — it's the feeling someone gets when they encounter your business. We build complete brand identities: naming, visual identity, tone of voice, and positioning that makes you impossible to ignore.",
    features: [
      'Brand discovery workshop and competitor audit',
      'Logo design (primary, secondary, icon variants)',
      'Full colour palette, typography, and icon system',
      'Brand guidelines document (how to use everything)',
      'Tone of voice and messaging framework',
      'Application across key touchpoints (social, print, web)',
    ],
    deliverables: ['Logo files (all formats)', 'Brand guidelines PDF', 'Asset library', 'Messaging framework doc'],
  },
];

export default function ServicesPage() {
  return (
    <PageWrapper
      heroLabel="What We Do"
      heroTitle="A complete studio, under one roof"
      heroSub="Strategy, design, and development — every discipline your business needs, handled by one team that cares."
    >
      {/* Services list */}
      <section style={{ padding: 'var(--space-section) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
            {services.map((s, i) => (
              <div
                key={s.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 'var(--space-2xl)',
                  padding: 'var(--space-2xl)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--border-radius)',
                  background: 'var(--bg-white)',
                  transition: 'border-color 0.2s',
                }}
                className="service-detail-card"
              >
                {/* Header */}
                <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ flexShrink: 0 }}>{s.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', marginBottom: 'var(--space-xs)', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', color: 'var(--accent-gold)', opacity: 0.4, lineHeight: 1 }}>{s.num}</span>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 500, color: 'var(--text-primary)' }}>{s.title}</h2>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.08em', marginBottom: 'var(--space-sm)' }}>{s.tagline}</p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '680px' }}>{s.description}</p>
                  </div>
                </div>

                {/* Features + Deliverables */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }}>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)' }}>What&apos;s Included</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', listStyle: 'none' }}>
                      {s.features.map((f) => (
                        <li key={f} style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'flex-start', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: 2 }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)' }}>Deliverables</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                      {s.deliverables.map((d) => (
                        <span key={d} style={{ padding: '4px 12px', background: 'var(--bg-primary)', border: '1px solid var(--border-light)', borderRadius: 20, fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <a href="/book-a-call" className="btn-primary" style={{ display: 'inline-flex' }}>
                    Get a Quote for {s.title} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  );
}
