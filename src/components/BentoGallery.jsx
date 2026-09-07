'use client';

import { useRef, useEffect } from 'react';
import { projectsData } from '../data/projects';

/**
 * BentoGallery — "Selected Projects" section.
 * Pulls real project data directly from the shared projects.js source
 * (same data used in "Our Work" / Portfolio section) so both sections
 * always stay in sync — no hardcoded duplicates.
 *
 * Displays exactly 4 specified featured projects:
 *   1. Sri Suriya Pipes   (web)
 *   2. Manohar's Portfolio (branding)
 *   3. Interactive AI Chatbox (app)
 *   4. KartZone           (web)
 */

const FEATURED_IDS = ['suriya-pipes', 'manohar-portfolio', 'ai-chatbox', 'kartzone'];

const TAG_COLORS = {
  web:      { bg: 'rgba(79, 195, 247, 0.12)', text: '#4fc3f7', border: 'rgba(79, 195, 247, 0.25)' },
  app:      { bg: 'rgba(179, 157, 219, 0.12)', text: '#b39ddb', border: 'rgba(179, 157, 219, 0.25)' },
  branding: { bg: 'rgba(129, 199, 132, 0.12)', text: '#81c784', border: 'rgba(129, 199, 132, 0.25)' },
};

export default function BentoGallery() {
  // Pull the 4 requested projects from the shared data source, preserving order
  const projects = FEATURED_IDS
    .map((id) => projectsData.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="bento-section" id="showcase">
      <div className="container">
        <div className="showcase-header">
          <span className="section-label reveal">Featured Work</span>
          <h2 className="section-heading reveal">Selected Projects</h2>
        </div>

        <div className="bento-grid reveal">
          {projects.map((project, index) => (
            <BentoTile
              key={project.id}
              project={project}
              isFeatured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoTile({ project, isFeatured }) {
  const tileRef = useRef(null);
  const innerRef = useRef(null);
  const contentRef = useRef(null);
  const imageWrapperRef = useRef(null);

  const tagColor = TAG_COLORS[project.category] || TAG_COLORS.web;

  useEffect(() => {
    const tile = tileRef.current;
    if (!tile) return;

    // Disable 3D tilt on touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      const rect = tile.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = x - rect.width / 2;
      const centerY = y - rect.height / 2;

      const percentX = centerX / (rect.width / 2);
      const percentY = centerY / (rect.height / 2);

      const rotateX = -(percentY * 6).toFixed(2);
      const rotateY = (percentX * 6).toFixed(2);

      if (innerRef.current) {
        innerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateZ(30px) translateY(-5px)`;
      }
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.transform = `scale(1.08) translateZ(0)`;
      }
    };

    const handleMouseLeave = () => {
      if (innerRef.current) {
        innerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateZ(0px) translateY(0px)`;
      }
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.transform = `scale(1.02) translateZ(0)`;
      }
    };

    tile.addEventListener('mousemove', handleMouseMove);
    tile.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tile.removeEventListener('mousemove', handleMouseMove);
      tile.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`bento-tile ${isFeatured ? 'featured' : ''}`}
      ref={tileRef}
    >
      <div className="bento-tile-inner" ref={innerRef}>
        {/* Real project screenshot */}
        <div className="bento-tile-image-wrapper" ref={imageWrapperRef}>
          <img
            src={project.image}
            alt={`${project.name} — ${project.title}`}
            className="bento-tile-image"
            loading="lazy"
          />
        </div>

        <div className="bento-tile-overlay" />

        <div className="bento-tile-content" ref={contentRef}>
          {/* Category badge */}
          <span
            className="bento-tile-tag"
            style={{
              background: tagColor.bg,
              color: tagColor.text,
              border: `1px solid ${tagColor.border}`,
            }}
          >
            {project.tag}
          </span>

          <h3 className="bento-tile-title">{project.name}</h3>

          <p className="bento-tile-desc">{project.title}</p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-tile-link"
            aria-label={`View ${project.name} live`}
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}
