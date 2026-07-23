'use client';

import { useEffect } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Stats from '../components/Stats';
import Services from '../components/Services';
import CaseStudy from '../components/CaseStudy';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import BackToTop from '../components/BackToTop';

/**
 * Home — Main page composing all 17 sections in order.
 * Initializes scroll-reveal animations and custom cursor.
 */
export default function Home() {
  useEffect(() => {
    // ── Scroll Reveal (Intersection Observer) ──
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // ── Custom Cursor (desktop only) ──
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let cursor = null;

    if (isDesktop) {
      cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);
      document.documentElement.classList.add('cursor-active');

      const moveCursor = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      };

      const addHover = () => cursor.classList.add('hovering');
      const removeHover = () => cursor.classList.remove('hovering');

      document.addEventListener('mousemove', moveCursor);

      // Observe DOM for interactive elements and add hover listeners
      const interactiveSelector = 'a, button, input, select, textarea, [role="button"]';
      const addHoverListeners = () => {
        document.querySelectorAll(interactiveSelector).forEach((el) => {
          el.addEventListener('mouseenter', addHover);
          el.addEventListener('mouseleave', removeHover);
        });
      };

      addHoverListeners();

      // Re-attach on DOM changes (for dynamically rendered content)
      const mutationObserver = new MutationObserver(addHoverListeners);
      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        revealObserver.disconnect();
        document.removeEventListener('mousemove', moveCursor);
        mutationObserver.disconnect();
        document.documentElement.classList.remove('cursor-active');
        if (cursor && cursor.parentNode) {
          cursor.parentNode.removeChild(cursor);
        }
      };
    }

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* A. Announcement Bar */}
      <AnnouncementBar />

      {/* B. Navigation */}
      <Navbar />

      <main>
        {/* C. Hero Section */}
        <Hero />

        {/* D. Marquee Strip */}
        <Marquee />

        {/* E. Stats Bar */}
        <Stats />

        {/* F. Services Section */}
        <Services />

        {/* G. Featured Case Study */}
        <CaseStudy />

        {/* H. Portfolio Grid */}
        <Portfolio />

        {/* I. Process Section */}
        <Process />

        {/* J. About / Team Section */}
        <About />

        {/* K. Testimonials Section */}
        <Testimonials />

        {/* L. Pricing / Packages */}
        <Pricing />

        {/* M. FAQ Section */}
        <FAQ />

        {/* N. CTA Banner */}
        <CTABanner />

        {/* O. Contact Section */}
        <Contact />

        {/* P. Newsletter Strip */}
        <Newsletter />
      </main>

      {/* Q. Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
