'use client';

import { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCarousel from './ProjectCarousel';
import ProjectLightbox from './ProjectLightbox';

/**
 * Portfolio — Filterable project grid with real screenshots.
 * Each card shows a swipeable carousel when a project has multiple images.
 * Clicking a card image opens a full-resolution lightbox.
 */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null); // { project, startIndex }

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'app', label: 'App' },
    { key: 'branding', label: 'Branding' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <span className="section-label reveal">Our Work</span>
        <h2 className="section-heading reveal">Work our clients are proud of</h2>

        <div className="portfolio-filters reveal">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`portfolio-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              aria-pressed={activeFilter === filter.key}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, i) => (
            <div
              className={`portfolio-card reveal reveal-delay-${(i % 3) + 1}`}
              key={project.id || `${project.category}-${i}`}
            >
              {/* Image area — carousel or single image */}
              <div className="portfolio-card-image">
                <ProjectCarousel
                  images={project.images || [project.image]}
                  altPrefix={project.altPrefix || project.name + ' screenshot'}
                  onImageClick={(idx) => setLightbox({ project, startIndex: idx })}
                />
              </div>

              <div className="portfolio-card-body">
                <span className="portfolio-card-tag">{project.tag}</span>
                <h3 className="portfolio-card-title">
                  {project.name} — {project.title}
                </h3>
                <p className="portfolio-card-desc">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card-link"
                  data-portfolio-link
                >
                  View project <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <ProjectLightbox
          isOpen={true}
          images={lightbox.project.images || [lightbox.project.image]}
          altPrefix={lightbox.project.altPrefix || lightbox.project.name + ' screenshot'}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
