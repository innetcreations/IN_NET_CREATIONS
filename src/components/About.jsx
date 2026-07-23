import PlaceholderImage from './PlaceholderImage';

/**
 * About — Studio story and two founder cards with placeholder portraits.
 */
export default function About() {
  const founders = [
    {
      name: 'Manohar',
      role: 'Co-Founder & Lead Developer',
      quote: '"Great digital work starts with genuinely understanding the people behind the business."',
    },
    {
      name: 'S. Harish Raj',
      role: 'Co-Founder & Creative Lead',
      quote: '"Every pixel should earn its place — design is strategy made visible."',
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-label reveal">About Us</span>
        <h2 className="section-heading reveal">A small team that thinks big</h2>

        <p className="about-story reveal">
          IN NET CREATIONS is a hands-on digital studio founded in Madurai by two partners who believe
          the best work happens when you&apos;re personally invested. We&apos;re not a factory — we&apos;re a
          studio that treats every project like our own. From strategy to launch and beyond, you work
          directly with the people building your product.
        </p>

        <div className="about-team">
          {founders.map((founder, i) => (
            <div className={`about-card reveal reveal-delay-${i + 1}`} key={founder.name}>
              {/* TODO: Replace with real founder photo — see /assets/team/ */}
              <PlaceholderImage
                label="Founder photo"
                dimensions="400×400"
                style={{ width: 160, height: 160, borderRadius: '50%', margin: '0 auto 1.5rem' }}
              />
              <h3 className="about-card-name">{founder.name}</h3>
              <p className="about-card-role">{founder.role}</p>
              <p className="about-card-quote">{founder.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
