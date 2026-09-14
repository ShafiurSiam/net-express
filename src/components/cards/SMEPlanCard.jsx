import { ArrowRight, Briefcase, Building2, Crown, Landmark, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../common/Button.jsx";
import AnimatedSection from "../common/AnimatedSection.jsx";

const PLAN_ICONS = {
  "sme-essential": Building2,
  "sme-advance": Landmark,
  "sme-pro": Briefcase,
  "corporate-power": Crown,
};

// One subtle, token-only accent per plan (corner-glow corner + icon-chip gradient
// direction) so the row of 4 doesn't read as identical clones — same treatment
// already used on the Offer/Add-on cards.
const PLAN_ACCENTS = {
  "sme-essential": { glow: "-right-10 -top-10", chip: "from-primary-red to-primary-red-dark" },
  "sme-advance": { glow: "-left-10 -top-10", chip: "from-primary-red-light to-primary-red" },
  "sme-pro": { glow: "-right-10 -bottom-10", chip: "from-primary-red-dark to-primary-red" },
  "corporate-power": { glow: "-left-10 -bottom-10", chip: "from-primary-red-dark via-primary-red to-primary-red-light" },
};

/**
 * plan: entry from src/data/smePlans.js
 * onSelect: called with the plan when "Negotiable" is clicked (opens the same
 *   request modal as PackageCard's "Get Connected" — see ConnectionRequestForm).
 * SME & Corporate copy is intentionally English-only (see smePlans.js), so unlike
 * PackageCard this renders plain strings instead of `field[language]`.
 */
const SMEPlanCard = ({ plan, onSelect, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  const Icon = PLAN_ICONS[plan.id] ?? Building2;
  const accent = PLAN_ACCENTS[plan.id] ?? PLAN_ACCENTS["sme-essential"];

  const speedVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 14, delay: shouldReduceMotion ? 0 : delay + 0.25 },
    },
  };

  return (
    <AnimatedSection delay={delay} className="h-full">
      {/* Outer layer carries the hover/elevation transform (and, for plan.highlighted, a
          permanent desktop-only lift) so it moves the ribbon and the card face together.
          The inner layer owns overflow-hidden (for the corner-glow/border-glow effects)
          and can't also host the ribbon, since that pokes above the card's top edge. */}
      <div
        className={`group relative h-full transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
          plan.highlighted ? "lg:-translate-y-2 lg:scale-[1.03] lg:hover:-translate-y-3 lg:hover:scale-[1.04]" : ""
        }`}
      >
        {plan.highlighted && (
          <span className="absolute -top-3.5 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-r from-primary-red to-primary-red-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_4px_14px_-2px_rgba(200,16,46,0.5)]">
            <Sparkles size={13} className="shrink-0" aria-hidden="true" />
            Recommended
            <span
              aria-hidden="true"
              className="animate-shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-6 -skew-x-12 bg-white/40"
            />
          </span>
        )}

        <div
          className={`relative isolate flex h-full flex-col gap-3 overflow-hidden rounded-2xl border p-7 shadow-card transition-shadow duration-300 group-hover:shadow-card-hover ${
            plan.highlighted
              ? "border-primary-red bg-gradient-to-b from-primary-red/5 via-white to-white shadow-card-hover"
              : "border-border bg-white"
          }`}
        >
          {/* Ambient red-tinted corner wash; intensifies on hover */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute ${accent.glow} h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.12),transparent_70%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
          />

          {plan.highlighted ? (
            /* Permanent, gently pulsing glow ring for the standout tier */
            <div
              aria-hidden="true"
              className="animate-pulse-glow pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-primary-red/30"
            />
          ) : (
            /* Gradient border-glow, only visible on hover */
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary-red), var(--color-primary-red-light), var(--color-primary-red))",
                WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
          )}

          <div
            className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.chip} text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(23,21,26,0.25),0_8px_18px_-6px_rgba(200,16,46,0.5)] ring-1 ring-primary-red-dark/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon size={28} />
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={speedVariants}
            className="relative z-10 text-4xl font-extrabold leading-none text-primary-red drop-shadow-[0_2px_14px_rgba(200,16,46,0.3)]"
          >
            {plan.speed}
          </motion.p>

          <h3 className="relative z-10 text-xl font-bold text-text-primary">{plan.name}</h3>
          <p className="relative z-10 text-sm text-text-secondary">{plan.description}</p>

          <div className="flex-1" />

          {plan.ctaType === "contact" ? (
            <Button
              to="/contact"
              variant="primary"
              icon={ArrowRight}
              className="relative z-10 w-full group-hover:-translate-y-0.5 group-hover:scale-[1.02]"
            >
              {plan.ctaLabel}
            </Button>
          ) : (
            <Button
              variant="secondary"
              icon={ArrowRight}
              className="relative z-10 w-full group-hover:-translate-y-0.5 group-hover:scale-[1.02] group-hover:shadow-card-hover"
              onClick={() => onSelect?.(plan)}
            >
              {plan.ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SMEPlanCard;
