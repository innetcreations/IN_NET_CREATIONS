'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

/**
 * ProjectLightbox — Full-resolution image lightbox/modal.
 * - Keyboard navigation (← → Escape)
 * - Click outside overlay to close
 * - Dot indicators for multi-image projects
 * - Loading skeleton + error fallback per image
 */
export default function ProjectLightbox({ isOpen, images, altPrefix, startIndex = 0, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const [loaded, setLoaded] = useState({});
  const [errored, setErrored] = useState({});

  const count = images?.length ?? 0;

  // Sync start index when lightbox opens
  useEffect(() => {
    if (isOpen) {
      setCurrent(startIndex);
      setLoaded({});
    }
  }, [isOpen, startIndex]);

  const go = useCallback(
    (next) => setCurrent((prev) => (next + count) % count),
    [count]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(current + 1);
      if (e.key === 'ArrowLeft') go(current - 1);
    };
    window.addEventListener('keydown', handler);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen, current, go, onClose]);

  if (!isOpen || !images || count === 0) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${altPrefix} — full size view`}
      onClick={onClose}
    >
      <div
        className="lightbox-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="lightbox-header">
          <span className="lightbox-counter">
            {current + 1} / {count}
          </span>
          <button
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            ✕
          </button>
        </div>

        {/* Image area */}
        <div className="lightbox-image-area">
          {!loaded[current] && !errored[current] && (
            <div className="lightbox-skeleton" aria-hidden="true" />
          )}
          {!errored[current] ? (
            <Image
              key={images[current]}
              src={images[current]}
              alt={`${altPrefix} ${current + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              style={{ objectFit: 'contain' }}
              priority
              onLoad={() => setLoaded((p) => ({ ...p, [current]: true }))}
              onError={() => setErrored((p) => ({ ...p, [current]: true }))}
            />
          ) : (
            <div className="lightbox-error">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={48} height={48} opacity={0.4}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p>Image unavailable</p>
            </div>
          )}
        </div>

        {/* Prev / Next arrows */}
        {count > 1 && (
          <>
            <button
              className="lightbox-arrow lightbox-arrow-prev"
              onClick={() => go(current - 1)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="lightbox-arrow lightbox-arrow-next"
              onClick={() => go(current + 1)}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Dot indicators */}
        {count > 1 && (
          <div className="lightbox-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`lightbox-dot ${idx === current ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`View screenshot ${idx + 1}`}
                aria-current={idx === current ? 'true' : undefined}
              />
            ))}
          </div>
        )}

        {/* Alt caption */}
        <p className="lightbox-caption">
          {altPrefix} {count > 1 ? `— screenshot ${current + 1} of ${count}` : ''}
        </p>
      </div>
    </div>
  );
}
