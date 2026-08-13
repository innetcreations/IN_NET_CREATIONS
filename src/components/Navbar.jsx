'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Navbar — Sticky navigation with scroll-shrink, mobile overlay, theme toggle.
 * Logo: /assets/T_logo.png served from /public/assets/.
 * Smart routing: smooth-scroll anchors on homepage, route links on sub-pages.
 */
export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark]         = useState(false);
  const [logoError, setLogoError]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  };

  const isHome = pathname === '/';

  const navLinks = [
    { label: 'Services', anchor: '#services', route: '/services' },
    { label: 'Work',     anchor: '#portfolio', route: '/work'     },
    { label: 'Process',  anchor: '#process',   route: '/process'  },
    { label: 'About',    anchor: '#about',     route: '/about'    },
    { label: 'Contact',  anchor: '#contact',   route: '/contact'  },
  ];

  const handleAnchorClick = (e, anchor) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(anchor);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    }
  };

  const linkHref = (link) => isHome ? link.anchor : link.route;
  const isActive = (link) => pathname === link.route;

  return (
    <>
      {/* ─────────────── Main Navbar ─────────────── */}
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">

          {/* Logo */}
          <a href="/" className="navbar-logo" aria-label="IN NET CREATIONS — Home">
            {!logoError ? (
              <img
                src="/assets/T_logo.png"
                alt="IN NET CREATIONS logo"
                width={180}
                height={44}
                className="navbar-logo-img"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="navbar-logo-text">IN NET CREATIONS</span>
            )}
          </a>

          {/* Desktop links */}
          <div className="navbar-links" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={linkHref(link)}
                className={`navbar-link${isActive(link) ? ' active' : ''}`}
                role="menuitem"
                onClick={(e) => handleAnchorClick(e, link.anchor)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="navbar-actions">
            <button
              className="navbar-contrast-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? '☀' : '◐'}
            </button>

            <a href="/book-a-call" className="navbar-cta">
              Book a Call
            </a>

            <button
              className={`navbar-mobile-toggle${mobileOpen ? ' active' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ─────────────── Mobile Menu Overlay ─────────────── */}
      <div
        id="mobile-menu"
        className={`mobile-menu${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        {/* Logo in mobile menu */}
        <a
          href="/"
          className="mobile-menu-logo"
          onClick={() => setMobileOpen(false)}
          aria-label="IN NET CREATIONS — Home"
        >
          {!logoError ? (
            <img
              src="/assets/T_logo.png"
              alt="IN NET CREATIONS logo"
              width={160}
              height={40}
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
          ) : (
            <span style={{
              color: 'var(--text-on-dark)',
              fontWeight: 700,
              letterSpacing: '0.15em',
              fontSize: 'var(--text-sm)',
            }}>
              IN NET CREATIONS
            </span>
          )}
        </a>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={linkHref(link)}
            className="mobile-menu-link"
            onClick={(e) => handleAnchorClick(e, link.anchor)}
          >
            {link.label}
          </a>
        ))}

        <a
          href="/book-a-call"
          className="mobile-menu-cta"
          onClick={() => setMobileOpen(false)}
        >
          Book a Call
        </a>
      </div>
    </>
  );
}
