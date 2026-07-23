/**
 * Marquee — Full-width black band with gold scrolling service keywords.
 * Pure CSS animation, no external library.
 */
export default function Marquee() {
  const services = [
    'Web Design',
    'App Development',
    'SEO',
    'Video Editing',
    'Photo Editing',
    'Social Growth',
    'Branding',
    'Strategy',
  ];

  // Duplicate the list for seamless infinite scroll
  const items = [...services, ...services];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((service, i) => (
          <span key={i}>
            <span className="marquee-text">{service}</span>
            <span className="marquee-separator">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
