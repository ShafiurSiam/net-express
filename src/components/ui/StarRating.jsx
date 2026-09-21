import { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";

const STARS = [1, 2, 3, 4, 5];

const StarIcon = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/**
 * Read-only stars. `value` may be fractional (e.g. an average of 4.3): a filled
 * row is clipped over a grey row. The clip width is computed from the star
 * geometry (whole stars + gaps + the fraction of the next star) instead of a
 * percentage of the container, so it stays correct even when a flex parent
 * stretches the container wider than the five stars.
 */
const STAR_GAP = "0.125rem"; // matches gap-0.5

export const StarDisplay = ({ value, size = 18, label }) => {
  const clamped = Math.max(0, Math.min(5, value));
  const whole = Math.floor(clamped);
  const fraction = clamped - whole;
  const filledWidth = `calc(${whole} * (${size}px + ${STAR_GAP}) + ${fraction} * ${size}px)`;

  return (
    <span role="img" aria-label={label} className="relative inline-flex w-fit">
      <span className="inline-flex gap-0.5 text-star-empty">
        {STARS.map((n) => (
          <StarIcon key={n} size={size} className="shrink-0" />
        ))}
      </span>
      <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: filledWidth }}>
        <span className="inline-flex gap-0.5 text-primary-red">
          {STARS.map((n) => (
            <StarIcon key={n} size={size} className="shrink-0" />
          ))}
        </span>
      </span>
    </span>
  );
};

/**
 * Clickable 1-5 star input (a radio group: Tab to focus, arrow keys / Home / End
 * to change, hover previews the rating).
 */
export const StarInput = ({ value, onChange, label, invalid = false, size = 36 }) => {
  const { t } = useLanguage();
  const [hover, setHover] = useState(0);
  const buttonRefs = useRef([]);
  const shown = hover || value;

  const select = (n) => {
    onChange(n);
    buttonRefs.current[n - 1]?.focus();
  };

  const handleKeyDown = (e) => {
    const current = value || 0;
    const moves = {
      ArrowRight: Math.min(5, current + 1),
      ArrowUp: Math.min(5, current + 1),
      ArrowLeft: Math.max(1, current - 1),
      ArrowDown: Math.max(1, current - 1),
      Home: 1,
      End: 5,
    };
    if (moves[e.key] === undefined) return;
    e.preventDefault();
    select(moves[e.key]);
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      aria-invalid={invalid}
      className="inline-flex gap-1"
      onMouseLeave={() => setHover(0)}
      onKeyDown={handleKeyDown}
    >
      {STARS.map((n) => (
        <button
          key={n}
          ref={(el) => {
            buttonRefs.current[n - 1] = el;
          }}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={t("reviews.starLabel", { count: n })}
          tabIndex={value === n || (!value && n === 1) ? 0 : -1}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          className={`rounded-md p-0.5 transition-transform hover:scale-110 ${
            n <= shown ? "text-primary-red" : "text-star-empty"
          }`}
        >
          <StarIcon size={size} />
        </button>
      ))}
    </div>
  );
};
