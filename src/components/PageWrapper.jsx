import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTop from './BackToTop';
import AIChatbot from './AIChatbot';

/**
 * PageWrapper — Standard shell for all standalone sub-pages.
 * Renders: AnnouncementBar → Navbar → (optional dark hero banner) → children → Footer → floats.
 *
 * Props:
 *   heroLabel   {string}  – small all-caps label above title (e.g. "Our Services")
 *   heroTitle   {string}  – main h1 heading
 *   heroSub     {string}  – optional subtitle / tagline
 *   children    {node}    – page body content below the hero
 */
export default function PageWrapper({ heroLabel, heroTitle, heroSub, children }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        {/* Dark hero banner for every standalone page */}
        <section className="page-hero">
          <div className="container">
            {heroLabel && <span className="page-hero-label">{heroLabel}</span>}
            <h1 className="page-hero-title">{heroTitle}</h1>
            {heroSub && <p className="page-hero-sub">{heroSub}</p>}
          </div>
        </section>

        {/* Page-specific content */}
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <AIChatbot />
    </>
  );
}
