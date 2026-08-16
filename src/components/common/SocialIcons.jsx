/**
 * Minimal outline glyph for social platforms not included in lucide-react
 * (brand marks were dropped from the icon set). Purely functional link
 * indicator, not a brand logo.
 */
const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const FacebookIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M15 4h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
  </svg>
);
