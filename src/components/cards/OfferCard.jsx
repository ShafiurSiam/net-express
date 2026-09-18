import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../common/Button.jsx";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

// Short "notice me" ribbon copy per offer — purely decorative, so it lives here rather
// than in offers.js (which stays reserved for actual offer terms/copy).
export const OFFER_TAGS = {
  "referral-bonus": { bn: "সীমিত অফার", en: "Limited Offer" },
  "free-connection-charge": { bn: "একদম ফ্রি", en: "100% Free" },
};

const OfferCard = ({ offer, delay = 0 }) => {
  const { language } = useLanguage();
  const { openRequest } = useConnectionRequest();
  const shouldReduceMotion = useReducedMotion();
  const Icon = offer.icon;
  const tag = OFFER_TAGS[offer.id];

  const ctaProps =
    offer.cta.action === "openRequest" ? { onClick: () => openRequest() } : { to: offer.cta.to };

  // Card fades/slides in first, then its children pop in one after another
  // (icon badge -> highlight figure -> body copy -> CTA) via variant propagation.
  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: delay + 0.15,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.5, rotate: shouldReduceMotion ? 0 : -12 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 280, damping: 18 },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 14 },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="group relative isolate flex h-full flex-col items-center gap-4 overflow-hidden rounded-2xl border border-border bg-white p-8 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      {/* Ambient red-tinted wash bleeding in from the top-right corner; intensifies on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.14),transparent_70%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Gradient border-glow, only visible on hover */}
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

      {tag && (
        <span className="absolute right-4 top-4 z-10 overflow-hidden whitespace-nowrap rounded-full bg-primary-red px-2.5 py-1 text-[10px] font-bold tracking-wide text-white shadow-sm">
          {tag[language]}
          <span
            aria-hidden="true"
            className="animate-shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-5 -skew-x-12 bg-white/50"
          />
        </span>
      )}

      <motion.div variants={badgeVariants} className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center">
        <div className="animate-badge-breathe flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-red to-primary-red-dark text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(23,21,26,0.25),0_8px_18px_-6px_rgba(200,16,46,0.5)] ring-1 ring-primary-red-dark/40">
          <Icon size={28} />
        </div>
      </motion.div>

      {offer.highlight && (
        <motion.div variants={highlightVariants} className="relative z-10">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-24 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(200,16,46,0.16),transparent_70%)]"
          />
          <span aria-hidden="true" className="absolute -right-2 top-0 h-1.5 w-1.5 rounded-full bg-primary-red/40" />
          <span aria-hidden="true" className="absolute -left-3 bottom-1 h-1 w-1 rounded-full bg-primary-red/30" />
          <p className="text-5xl font-extrabold leading-none text-primary-red drop-shadow-[0_2px_14px_rgba(200,16,46,0.3)] sm:text-6xl">
            {offer.highlight[language]}
          </p>
          {(offer.highlightNote || offer.disclaimer) && (
            <p className="mt-1 text-xs text-text-secondary">
              {offer.highlightNote && <span>{offer.highlightNote[language]}</span>}
              {offer.highlightNote && offer.disclaimer && " · "}
              {offer.disclaimer &&
                (offer.disclaimerLink ? (
                  <Link to={offer.disclaimerLink} className="underline decoration-dotted hover:text-primary-red">
                    {offer.disclaimer[language]}
                  </Link>
                ) : (
                  <span>{offer.disclaimer[language]}</span>
                ))}
            </p>
          )}
        </motion.div>
      )}

      <motion.div variants={fadeVariants} className="relative z-10 flex flex-1 flex-col items-center gap-2">
        <h3 className="text-xl font-bold text-text-primary">{offer.title[language]}</h3>
        <p className="flex-1 text-sm text-text-secondary">{offer.description[language]}</p>
      </motion.div>

      <motion.div variants={fadeVariants} className="relative z-10 w-full sm:w-auto">
        <Button
          {...ctaProps}
          variant="secondary"
          icon={ArrowRight}
          className="w-full hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-card-hover sm:w-auto"
        >
          {offer.cta.label[language]}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default OfferCard;
