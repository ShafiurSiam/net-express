import Button from "../common/Button.jsx";
import Badge from "../common/Badge.jsx";
import AnimatedSection from "../common/AnimatedSection.jsx";

/**
 * plan: entry from src/data/smePlans.js
 * onSelect: called with the plan when "Negotiable" is clicked (opens the same
 *   request modal as PackageCard's "Get Connected" — see ConnectionRequestForm).
 * SME & Corporate copy is intentionally English-only (see smePlans.js), so unlike
 * PackageCard this renders plain strings instead of `field[language]`.
 */
const SMEPlanCard = ({ plan, onSelect, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      {/* plan.highlighted swaps the border to red and pre-applies the hover shadow, marking this
          as the recommended plan even before the user hovers (paired with the "Recommended" badge below) */}
      <div
        className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
          plan.highlighted
            ? "border-primary-red bg-white shadow-card-hover"
            : "border-border bg-white shadow-card hover:shadow-card-hover"
        }`}
      >
        {plan.highlighted && (
          <Badge tone="red" className="absolute -top-3 left-1/2 -translate-x-1/2">
            Recommended
          </Badge>
        )}

        <h3 className="text-2xl font-bold text-text-primary">{plan.name}</h3>
        <p className="mt-3 text-4xl font-extrabold text-primary-red">{plan.speed}</p>
        <p className="mt-1 text-sm text-text-secondary">{plan.description}</p>

        <div className="flex-1" />

        {plan.ctaType === "contact" ? (
          <Button to="/contact" variant="primary" className="mt-7 w-full">
            {plan.ctaLabel}
          </Button>
        ) : (
          <Button variant="secondary" className="mt-7 w-full" onClick={() => onSelect?.(plan)}>
            {plan.ctaLabel}
          </Button>
        )}
      </div>
    </AnimatedSection>
  );
};

export default SMEPlanCard;
