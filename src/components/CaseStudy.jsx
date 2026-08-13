import { featuredProject } from '../data/projects';
import ProjectImage from './ProjectImage';

/**
 * CaseStudy — Large, single-project spotlight block for Sri Suriya Pipes.
 * Image left, details right.
 */
export default function CaseStudy() {
  const project = featuredProject || {
    name: 'Sri Suriya Pipes',
    title: 'Digital Presence for a 20+ Year Manufacturer',
    description:
      'A full business website for a trusted Madurai PVC pipe manufacturer — product catalog, size charts, WhatsApp ordering, UPI payments, and a built-in chat assistant.',
    tag: 'Web (Client Project)',
    image: '/assets/projects/suriya-pipes.png',
    link: 'https://www.suriyapipe.com',
  };

  return (
    <section className="case-study" id="case-study">
      <div className="container">
        <span className="section-label reveal">Featured Project</span>
        <h2 className="section-heading reveal">Work that speaks for itself</h2>

        <div className="case-study-inner">
          <div className="case-study-image reveal">
            <ProjectImage
              src={project.image}
              alt={project.name}
              title={project.name}
              dimensions="1600×1000"
            />
          </div>

          <div className="case-study-details reveal reveal-delay-2">
            <span className="case-study-tag">{project.tag}</span>
            <h3 className="case-study-title">{project.title}</h3>
            <p className="case-study-desc">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-link"
              data-portfolio-link
            >
              Visit Live Site ({project.name}) <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

