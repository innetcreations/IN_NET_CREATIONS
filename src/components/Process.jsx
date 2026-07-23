/**
 * Process — 5-step horizontal timeline showing the studio's workflow.
 * Discover → Strategy → Design → Build → Grow
 */
export default function Process() {
  const steps = [
    {
      num: 1,
      title: 'Discover',
      desc: 'We listen, research, and understand your business inside-out.',
    },
    {
      num: 2,
      title: 'Strategy',
      desc: 'A clear roadmap — goals, audience, positioning, and timelines.',
    },
    {
      num: 3,
      title: 'Design',
      desc: 'Pixel-perfect mockups you approve before a single line of code.',
    },
    {
      num: 4,
      title: 'Build',
      desc: 'Clean, fast, tested code — with progress updates every step of the way.',
    },
    {
      num: 5,
      title: 'Grow',
      desc: 'Launch, optimize, iterate — we stay with you beyond day one.',
    },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <span className="section-label reveal">How We Work</span>
        <h2 className="section-heading reveal">Five steps from idea to impact</h2>

        <div className="process-timeline">
          {steps.map((step, i) => (
            <div className={`process-step reveal reveal-delay-${i + 1}`} key={step.num}>
              <div className="process-step-circle">{step.num}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
