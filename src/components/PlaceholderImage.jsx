/**
 * PlaceholderImage — Reusable empty image placeholder component
 *
 * Renders a clearly-marked placeholder container with a dashed border,
 * image icon, and dimension caption. Used everywhere a real image will
 * eventually go — never a solid color block or fake gray rectangle.
 *
 * Props:
 *   @param {string} label     — Descriptive label, e.g. "Founder photo"
 *   @param {string} dimensions — Ideal size, e.g. "400×400"
 *   @param {string} className — Additional CSS classes
 *   @param {object} style     — Additional inline styles
 */
export default function PlaceholderImage({ label = 'Image', dimensions = '', className = '', style = {} }) {
  const caption = dimensions ? `${label} — ${dimensions}` : label;

  return (
    <div
      className={`placeholder-image ${className}`}
      style={style}
      role="img"
      aria-label={`Placeholder: ${caption}`}
    >
      {/* Image icon */}
      <svg
        className="placeholder-image-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="placeholder-image-label">{caption}</span>
    </div>
  );
}
