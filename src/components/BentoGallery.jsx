'use client';

import { useRef, useEffect } from 'react';

export default function BentoGallery() {
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
              key={index} 
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

  useEffect(() => {
    const tile = tileRef.current;
    if (!tile) return;

    // Detect touch devices and disable JS hover
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
        <div className="bento-tile-image-wrapper" ref={imageWrapperRef}>
          <div className="bento-placeholder">
             <svg
                className="bento-placeholder-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
          </div>
        </div>
        <div className="bento-tile-overlay"></div>
        <div className="bento-tile-content" ref={contentRef}>
          <h3 className="bento-tile-title">{project.title}</h3>
        </div>
      </div>
    </div>
  );
}
