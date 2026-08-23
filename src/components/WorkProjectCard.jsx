'use client';

import { useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import ProjectLightbox from './ProjectLightbox';

/**
 * WorkProjectCard — Client component for /work page project cards.
 * Renders a carousel + lightbox for each project.
 */
export default function WorkProjectCard({ project, cat }) {
  const [lightbox, setLightbox] = useState(null);
  const images = project.images || [project.image];
  const altPrefix = project.altPrefix || project.name + ' screenshot';

  return (
    <>
      <div
        style={{
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--border-radius)',
          background: 'var(--bg-white)',
          overflow: 'hidden',
          transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="work-project-card"
      >
        {/* Image / Carousel */}
        <div style={{ position: 'relative', height: 220, background: '#0f0f0f', overflow: 'hidden', flexShrink: 0 }}>
          <ProjectCarousel
            images={images}
            altPrefix={altPrefix}
            aspectRatio="16/10"
            onImageClick={(idx) => setLightbox({ startIndex: idx })}
          />
          {/* Category badge */}
          <div
            style={{
              position: 'absolute', top: 12, left: 12, zIndex: 10,
              padding: '4px 10px', borderRadius: 20,
              background: cat.bg, color: cat.text,
              fontSize: 'var(--text-xs)', fontWeight: 600,
              border: `1px solid ${cat.text}44`,
              pointerEvents: 'none',
            }}
          >
            {cat.label}
          </div>
          {/* Live badge */}
          <div
            style={{
              position: 'absolute', top: 12, right: 12, zIndex: 10,
              padding: '4px 10px', borderRadius: 20,
              background: 'rgba(0,0,0,0.7)', color: '#4caf50',
              fontSize: 'var(--text-xs)', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 5,
              pointerEvents: 'none',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf50', display: 'inline-block' }} /> Live
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: 'var(--space-lg)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
            {project.name}
          </h2>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
            {project.title}
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.65, flexGrow: 1 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-lg)' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-gold)', fontWeight: 600, textDecoration: 'none' }}
            >
              View Live →
            </a>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
              {project.link.replace('https://', '').replace('http://', '').split('/')[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <ProjectLightbox
          isOpen={true}
          images={images}
          altPrefix={altPrefix}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
