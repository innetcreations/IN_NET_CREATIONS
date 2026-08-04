'use client';

import { useEffect } from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import CaseStudy from '../components/CaseStudy';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import About from '../components/About';
import FAQ from '../components/FAQ';
import BentoGallery from '../components/BentoGallery';
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

        {/* F. Services Section */}
        <Services />

        {/* G. Featured Case Study */}
        <CaseStudy />

        {/* G.5 Bento Gallery */}
        <BentoGallery />

        {/* H. Portfolio Grid */}
        <Portfolio />

        {/* I. Process Section */}
        <Process />

        {/* J. About / Team Section */}
        <About />

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
