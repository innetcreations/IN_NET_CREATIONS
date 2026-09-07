'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  {
    id: 'webcraft',
    title: 'WEBCRAFT',
    service: 'Website Development',
    labelLines: [
      'FAST, RESPONSIVE, CONVERSION-FOCUSED WEBSITES',
      'THAT LOOK EXCEPTIONAL',
      'ON EVERY DEVICE',
    ],
    video: '/assets/gallery/webcraft.mp4',
    image: '/assets/gallery/webcraft.png',
    link: '/services#website-development',
    objectPosition: 'center center',
  },
  {
    id: 'appmotion',
    title: 'APPMOTION',
    service: 'Application Development',
    labelLines: [
      'NATIVE & CROSS-PLATFORM APPS',
      'BUILT FOR PERFORMANCE, USABILITY',
      'AND UNMATCHED SCALE',
    ],
    video: '/assets/gallery/appmotion.mp4',
    image: '/assets/gallery/appmotion.png',
    link: '/services#application-development',
    objectPosition: 'center 40%',
  },
  {
    id: 'rankrise',
    title: 'RANKRISE',
    service: 'SEO & Optimization',
    labelLines: [
      'DATA-DRIVEN SEO STRATEGIES',
      'PUTTING YOUR BUSINESS IN FRONT OF',
      'THE RIGHT AUDIENCE, CONSISTENTLY',
    ],
    video: '/assets/gallery/rankrise.mp4',
    image: '/assets/gallery/rankrise.png',
    link: '/services#seo-optimization',
    objectPosition: 'center center',
  },
  {
    id: 'reelcut',
    title: 'REELCUT',
    service: 'Video Editing',
    labelLines: [
      'POLISHED, SCROLL-STOPPING VIDEO CONTENT',
      'FROM REELS AND HIGH-CONVERTING ADS',
      'TO FULL BRAND FILMS',
    ],
    video: '/assets/gallery/reelcut.mp4',
    image: '/assets/gallery/reelcut.png',
    link: '/services#video-editing',
    objectPosition: 'center center',
  },
  {
    id: 'retouch',
    title: 'RETOUCH',
    service: 'Photo Editing & Design',
    labelLines: [
      'PROFESSIONAL RETOUCHING & COLOR GRADING',
      'HIGH-END COMPOSITING',
      'THAT ELEVATES EVERY IMAGE',
    ],
    video: '/assets/gallery/retouch.mp4',
    image: '/assets/gallery/retouch.png',
    link: '/services#photo-editing',
    objectPosition: 'center 35%',
  },
];

export default function MotionGallery() {
  const wrapperRef = useRef(null);
  const pinnedRef = useRef(null);
  const panelsRef = useRef([]);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set up GSAP ScrollTrigger on desktop
  useEffect(() => {
    if (isMobile || !wrapperRef.current || !pinnedRef.current) return;

    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      if (!panels || panels.length === 0) return;

      // Set initial states: first panel visible, rest hidden
      panels.forEach((panel, i) => {
        if (!panel) return;
        if (i === 0) {
          gsap.set(panel, { opacity: 1, scale: 1, zIndex: 10 });
        } else {
          gsap.set(panel, { opacity: 0, scale: 1.06, zIndex: i });
        }
      });

      const totalPanels = galleryItems.length;
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'motion-gallery-st',
          trigger: wrapperRef.current,
          start: 'top top',
          end: `+=${(totalPanels - 1) * 100}%`,
          pin: pinnedRef.current,
          scrub: 0.6,
          onUpdate: (self) => {
            const rawIdx = self.progress * (totalPanels - 1);
            const currentIdx = Math.min(Math.round(rawIdx), totalPanels - 1);
            setActiveIndex(currentIdx);
          },
        },
      });

      // Animate crossfades between consecutive panels
      for (let i = 0; i < totalPanels - 1; i++) {
        const currentPanel = panels[i];
        const nextPanel = panels[i + 1];

        if (currentPanel && nextPanel) {
          tl.to(
            currentPanel,
            {
              opacity: 0,
              scale: 0.96,
              duration: 1,
              ease: 'power2.inOut',
            },
            i
          ).to(
            nextPanel,
            {
              opacity: 1,
              scale: 1,
              zIndex: 10 + i,
              duration: 1,
              ease: 'power2.inOut',
            },
            i
          );
        }
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Bug C fix: manage play/pause and visibility based on activeIndex
  // Bug B fix: video sources are eagerly rendered for ALL panels — we just play/pause them
  useEffect(() => {
    if (isMobile) return;

    videoRefs.current.forEach((videoEl, index) => {
      if (!videoEl) return;

      if (index === activeIndex) {
        videoEl.play().catch(() => {
          // Ignore autoplay restriction errors silently
        });
      } else {
        videoEl.pause();
      }
    });
  }, [activeIndex, isMobile]);

  return (
    <section
      className="motion-gallery-wrapper"
      id="motion-gallery"
      ref={wrapperRef}
    >
      {/* ── DESKTOP PINNED VIEW ── */}
      {!isMobile && (
        <div className="motion-gallery-pinned" ref={pinnedRef}>
          <div className="motion-gallery-container">
            {galleryItems.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  className={`motion-gallery-panel ${isActive ? 'is-active' : 'is-inactive'}`}
                  ref={(el) => (panelsRef.current[idx] = el)}
                  aria-hidden={!isActive}
                >
                  {/* BUG A FIX: Single media element per panel (removed right-column duplicate).
                      The panel covers the full viewport width; one video fills the entire background.
                      Center content overlays on top via absolute positioning. */}
                  <div className="motion-gallery-full-media">
                    {/* Bug B fix: <source> always rendered for ALL panels — preload="none" prevents
                        network waste. Only the active panel's video is playing (managed above). */}
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      className="motion-gallery-media motion-gallery-duotone"
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={item.image}
                      style={{ objectPosition: item.objectPosition }}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>

                  {/* Overlaid Center Content */}
                  <div className="motion-gallery-overlay">
                    <div className="motion-gallery-content">
                      <div className="motion-gallery-label">
                        {item.labelLines.map((line, i) => (
                          <span key={i} className="motion-gallery-label-line">
                            {line}
                          </span>
                        ))}
                      </div>

                      <h2 className="motion-gallery-title">{item.title}</h2>

                      <a
                        href={item.link}
                        className="motion-gallery-link"
                        data-gallery-link
                        tabIndex={isActive ? 0 : -1}
                      >
                        VIEW FULL PROJECT <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Pinned Scroll Progress Indicator */}
            <div className="motion-gallery-progress">
              <div className="motion-gallery-ticks">
                {galleryItems.map((item, idx) => (
                  <button
                    key={item.id}
                    className={`motion-gallery-tick ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => {
                      if (wrapperRef.current && typeof window !== 'undefined') {
                        const trigger = ScrollTrigger.getById('motion-gallery-st');
                        if (trigger) {
                          const targetScroll =
                            trigger.start +
                            (trigger.end - trigger.start) *
                              (idx / (galleryItems.length - 1));
                          window.scrollTo({
                            top: targetScroll,
                            behavior: 'smooth',
                          });
                        }
                      }
                    }}
                    aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                  >
                    <span className="tick-number">0{idx + 1}</span>
                    <span className="tick-bar" />
                  </button>
                ))}
              </div>
              <div className="motion-gallery-progress-bar">
                <div
                  className="motion-gallery-progress-fill"
                  style={{
                    width: `${((activeIndex + 1) / galleryItems.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE STACKED FALLBACK VIEW ── */}
      {isMobile && (
        <div className="motion-gallery-mobile-stack">
          <div className="container">
            <span className="section-label reveal">Featured Motion Showcase</span>
            <h2 className="section-heading reveal">Specialized Services in Motion</h2>

            <div className="motion-gallery-mobile-cards">
              {galleryItems.map((item) => (
                <div className="motion-gallery-mobile-card reveal" key={item.id}>
                  {/* Natural 16:9 Image Container */}
                  <div className="motion-gallery-mobile-media-box">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="motion-gallery-mobile-media motion-gallery-duotone"
                    />
                  </div>

                  <div className="motion-gallery-mobile-body">
                    <div className="motion-gallery-label">
                      {item.labelLines.map((line, i) => (
                        <span key={i} className="motion-gallery-label-line">
                          {line}
                        </span>
                      ))}
                    </div>
                    <h3 className="motion-gallery-mobile-title">{item.title}</h3>
                    <a href={item.link} className="motion-gallery-link">
                      VIEW FULL PROJECT <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
