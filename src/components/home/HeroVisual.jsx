// Premium ambient hero visual: layered glow orbs (background) + a floating
// connectivity hub badge and accent chips (foreground). The live particle
// network (ParticleBackground, rendered full-bleed behind the whole hero
// section by HeroSection.jsx) now does the "network mesh" job that used to
// live here as a static SVG, so this component stays focused on the product
// badge/orb layer. Purely decorative — all motion is CSS/Framer Motion,
// gated by prefers-reduced-motion so the composition still reads as
// intentional (not blank) when motion is off.
import { motion, useReducedMotion } from "framer-motion";
import { Gauge, Wifi, Zap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.jsx";

const HeroVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const orbTransition = (duration) =>
    shouldReduceMotion ? undefined : { duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" };

  return (
    <div
      role="img"
      aria-label={t("hero.imageAlt")}
      className="pointer-events-none relative aspect-square w-full overflow-visible"
    >
      {/* Background: soft drifting glow orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-8 -top-6 h-48 w-48 rounded-full bg-primary-red/20 blur-3xl sm:h-56 sm:w-56"
        animate={shouldReduceMotion ? undefined : { x: [0, 22, -10, 0], y: [0, -16, 12, 0] }}
        transition={orbTransition(14)}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-8 -right-6 h-56 w-56 rounded-full bg-primary-red-light/20 blur-3xl sm:h-64 sm:w-64"
        animate={shouldReduceMotion ? undefined : { x: [0, -18, 14, 0], y: [0, 16, -10, 0] }}
        transition={orbTransition(17)}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-red-dark/10 blur-3xl"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.12, 1] }}
        transition={orbTransition(9)}
      />

      {/* Foreground: connectivity hub badge */}
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-24 sm:w-24">
        <div className="animate-badge-breathe flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-primary-red to-primary-red-dark text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(var(--rgb-charcoal),0.25),0_12px_28px_-8px_rgba(var(--rgb-primary-red),0.55)] ring-1 ring-primary-red-dark/40">
          <Wifi size={36} aria-hidden="true" />
        </div>
      </div>

      {/* Foreground: floating accent chips (icon-only, purely ambient) */}
      <div
        aria-hidden="true"
        className="animate-float-slow absolute right-2 top-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white/90 text-primary-red shadow-card backdrop-blur-sm sm:right-6 sm:top-4"
      >
        <Gauge size={20} />
      </div>
      <div
        aria-hidden="true"
        className="animate-float-slow absolute bottom-10 left-0 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white/90 text-primary-red shadow-card backdrop-blur-sm sm:bottom-6 sm:left-2"
        style={{ animationDelay: "1.4s" }}
      >
        <Zap size={20} />
      </div>
    </div>
  );
};

export default HeroVisual;
