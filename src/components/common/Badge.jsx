const tones = {
  red: "bg-primary-red text-white",
  redSoft: "bg-primary-red/10 text-primary-red",
  dark: "bg-charcoal text-white",
  outline: "bg-white text-primary-red border border-primary-red/30",
};

const Badge = ({ children, tone = "redSoft", className = "" }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone]} ${className}`}
  >
    {children}
  </span>
);

export default Badge;
