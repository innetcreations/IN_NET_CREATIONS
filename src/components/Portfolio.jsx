'use client';

import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

/**
 * Portfolio — Filterable project grid with 6 project cards.
 * Filter tabs: All / Web / App / Branding / Social
 */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'app', label: 'App' },
    { key: 'branding', label: 'Branding' },
    { key: 'social', label: 'Social' },
  ];

  // TODO: Replace with real portfolio projects
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      category: 'web',
      tag: 'Website',
    },
    {
      title: 'Fitness Tracking Mobile App',
      category: 'app',
      tag: 'Application',
    },
    {
      title: 'Artisan Bakery Brand Identity',
      category: 'branding',
      tag: 'Branding',
    },
    {
      title: 'Restaurant Social Media Campaign',
      category: 'social',
      tag: 'Social Media',
    },
    {
      title: 'Real Estate Listing Portal',
      category: 'web',
      tag: 'Website',
    },
    {
      title: 'Health & Wellness App',
      category: 'app',
      tag: 'Application',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
              key={`${project.category}-${i}`}
            >
              <div className="portfolio-card-image">
                {/* TODO: Replace with real project screenshot — see /assets/portfolio/ */}
                <PlaceholderImage label="Project screenshot" dimensions="1600×1000" />
              </div>
              <div className="portfolio-card-body">
                <span className="portfolio-card-tag">{project.tag}</span>
                <h3 className="portfolio-card-title">{project.title}</h3>
                <a
                  href="#"
                  className="portfolio-card-link"
                  data-portfolio-link
                >
                  {/* TODO: Insert live project URL */}
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
