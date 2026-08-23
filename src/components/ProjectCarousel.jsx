'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

/**
 * ProjectCarousel — Swipeable image carousel for portfolio cards.
 * - Auto-advances every 3.5 s (pauses on hover / focus / touch)
 * - Touch/swipe support
 * - Dot indicators
 * - onClick on the image triggers lightbox via onImageClick(index)
 * - Falls back to dark-gray skeleton while images load, broken-img safe
 */
export default function ProjectCarousel({ images, altPrefix, onImageClick, aspectRatio = '16/10' }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [errored, setErrored] = useState({});
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  const count = images?.length ?? 0;

  const go = useCallback(
    (next) => setCurrent((prev) => (next + count) % count),
    [count]
  );

  // Auto-advance
  useEffect(() => {
    if (count <= 1 || paused) return;
    timerRef.current = setInterval(() => go(current + 1), 3500);
    return () => clearInterval(timerRef.current);
  }, [count, paused, current, go]);

  // Touch handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? current + 1 : current - 1);
    touchStartX.current = null;
  };

  if (!images || count === 0) return null;

  return (
    <div
      className="proj-carousel"
      style={{ aspectRatio, position: 'relative', overflow: 'hidden', background: '#0f0f0f' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {images.map((src, idx) => {
        const isActive = idx === current;
        const hasError = errored[idx];
        const isLoaded = loaded[idx];

        return (
          <div
            key={src}
            className={`proj-carousel-slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            {/* Skeleton shown until loaded */}
            {!isLoaded && !hasError && (
              <div className="proj-carousel-skeleton" aria-hidden="true" />
            )}

            {!hasError ? (
              <Image
                src={src}
                alt={`${altPrefix} ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover', cursor: onImageClick ? 'zoom-in' : 'default' }}
                loading="lazy"
                onLoad={() => setLoaded((p) => ({ ...p, [idx]: true }))}
                onError={() => setErrored((p) => ({ ...p, [idx]: true }))}
                onClick={() => onImageClick && onImageClick(idx)}
              />
            ) : (
              /* Fallback: dark placeholder matching theme */
              <div
                className="proj-carousel-error"
                role="img"
                aria-label={`${altPrefix} ${idx + 1} — image unavailable`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={32} height={32} opacity={0.4}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            )}
          </div>
        );
      })}

      {/* Prev / Next arrows — only when multiple images */}
      {count > 1 && (
        <>
          <button
            className="proj-carousel-arrow proj-carousel-arrow-prev"
            onClick={(e) => { e.stopPropagation(); go(current - 1); }}
            aria-label="Previous screenshot"
          >
            ‹
          </button>
          <button
            className="proj-carousel-arrow proj-carousel-arrow-next"
            onClick={(e) => { e.stopPropagation(); go(current + 1); }}
            aria-label="Next screenshot"
          >
            ›
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div className="proj-carousel-dots" role="tablist" aria-label="Screenshot navigation">
          {images.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === current}
              aria-label={`Screenshot ${idx + 1}`}
              className={`proj-carousel-dot ${idx === current ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
            />
          ))}
        </div>
      )}

      {/* Lightbox hint overlay on hover */}
      {onImageClick && (
        <div
          className="proj-carousel-zoom-hint"
          onClick={() => onImageClick(current)}
          aria-label="Click to open full-size view"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={18} height={18}>
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      )}
    </div>
  );
}
