'use client';

import { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectImage from './ProjectImage';

/**
 * Portfolio — Filterable project grid with 8 real project cards.
 * Filter tabs: All / Web / App / Branding
 */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'app', label: 'App' },
    { key: 'branding', label: 'Branding' },
  ];

  const filteredProjects = activeFilter === 'all'
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
              <div className="portfolio-card-image">
                <ProjectImage
                  src={project.image}
                  alt={project.name}
                  title={project.name}
                  dimensions="1600×1000"
                />
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-card-tag">{project.tag}</span>
                <h3 className="portfolio-card-title">{project.name} — {project.title}</h3>
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
    </section>
  );
}

