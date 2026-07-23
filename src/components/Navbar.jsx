'use client';

import { useState, useEffect } from 'react';

/**
 * Navbar — Sticky navigation with scroll-shrink effect, mobile overlay menu,
 * contrast toggle, and typographic logo fallback.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo — falls back to typographic wordmark if image not present */}
          <a href="#" className="navbar-logo" aria-label="IN NET CREATIONS — Home">
            {/* TODO: Replace with real logo — see /assets/logo/in-net-creations-logo.png */}
            <LogoWithFallback />
          </a>

          {/* Desktop Links */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <button
              className="navbar-contrast-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? '☀' : '◐'}
            </button>
            <a href="#contact" className="navbar-cta" onClick={(e) => handleNavClick(e, '#contact')}>
              Book a Call
            </a>
            <button
              className={`navbar-mobile-toggle ${mobileOpen ? 'active' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="mobile-menu-cta" onClick={(e) => handleNavClick(e, '#contact')}>
          Book a Call
        </a>
      </div>
    </>
  );
}

/**
 * LogoWithFallback — Tries to render the logo image; if it fails,
 * falls back to a tracked-out typographic wordmark.
 */
function LogoWithFallback() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return <span className="navbar-logo-text">IN NET CREATIONS</span>;
  }

  return (
    <>
      <img
        src="/assets/logo/in-net-creations-logo.png"
        alt="IN NET CREATIONS"
        onError={() => setImgError(true)}
        style={{ height: 36, width: 'auto', objectFit: 'contain' }}
      />
    </>
  );
}
