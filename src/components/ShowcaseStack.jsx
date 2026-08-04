'use client';

import { useState, useEffect } from 'react';
import PlaceholderImage from './PlaceholderImage';

export default function ShowcaseStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      tag: 'WEBSITE',
    },
    {
      title: 'Fitness Tracking Mobile App',
      tag: 'APPLICATION',
    },
    {
      title: 'Artisan Bakery Brand Identity',
      tag: 'BRANDING',
    },
    {
      title: 'Restaurant Social Media Campaign',
      tag: 'SOCIAL MEDIA',
    },
    {
      title: 'Real Estate Listing Portal',
      tag: 'WEBSITE',
    },
    {
      title: 'Health & Wellness App',
      tag: 'APPLICATION',
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, projects.length]);

  return (
    <section className="showcase-stack-section" id="showcase">
      <div className="container">
        <div className="showcase-header">
          <span className="section-label reveal">Featured Work</span>
          <h2 className="section-heading reveal">Selected Projects</h2>
        </div>
        
        <div 
          className="showcase-stack-container reveal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="showcase-cards">
            {projects.map((project, index) => {
              const relativeIndex = (index - activeIndex + projects.length) % projects.length;
              const isPrev = relativeIndex === projects.length - 1;

              let positionClass = 'hidden';
              if (relativeIndex === 0) positionClass = 'active';
              else if (relativeIndex === 1) positionClass = 'next-1';
              else if (relativeIndex === 2) positionClass = 'next-2';
              else if (isPrev) positionClass = 'prev';

              return (
                <div 
                  key={index}
                  className={`showcase-card ${positionClass}`}
                >
                  <div className="showcase-card-image">
                    <PlaceholderImage label="Project screenshot" className="showcase-placeholder" />
                  </div>
                  <div className="showcase-card-body">
                    <span className="showcase-card-tag">{project.tag}</span>
                    <h3 className="showcase-card-title">{project.title}</h3>
                    <a href="#" className="showcase-card-link">
                      View project <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showcase-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`showcase-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to project ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
