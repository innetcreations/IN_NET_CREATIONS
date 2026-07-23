'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Stats — 4 animated count-up statistics.
 * Numbers animate from 0 to target when scrolled into view.
 */
export default function Stats() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // TODO: Update these stats with real numbers
  const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 12, suffix: '+', label: 'Platforms Managed' },
    { value: 2, suffix: 'hr', label: 'Avg. Response Time' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats reveal" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-number">
                <CountUp target={stat.value} suffix={stat.suffix} animate={hasAnimated} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <span className="stat-divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * CountUp — Animates a number from 0 to target over ~1.5 seconds.
 */
function CountUp({ target, suffix = '', animate }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [animate, target]);

  return <>{value}{suffix}</>;
}
