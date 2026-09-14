// Premium ambient hero visual: layered glow orbs (background) + a restored
// network/node centerpiece graphic and floating accent chips (foreground).
// The centerpiece is a reconstruction (inline SVG, coordinates scaled to fit
// this component's square viewport) of the original src/assets/images/home/hero.svg
// node illustration — central node, radiating connector lines to smaller
// nodes, soft radial glow, scattered accent dots — from before it was
// replaced by a WiFi-icon badge. The live particle network (ParticleBackground,
// rendered full-bleed behind the whole hero section by HeroSection.jsx) is a
// separate, independent layer and is untouched by this. Purely decorative —
// all motion is CSS/Framer Motion, gated by prefers-reduced-motion so the
// composition still reads as intentional (not blank) when motion is off.
import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import { Gauge, Zap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.jsx";

const HeroVisual = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const gradientId = useId();

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

      {/* Foreground: restored network/node centerpiece (central node, radiating
          connector lines to smaller nodes, soft radial glow, scattered accent
          dots) — reconstructed from the original hero.svg, coordinates scaled
          from its 900x820 viewBox down to this component's square 400x400 one. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className={`relative h-full w-full ${shouldReduceMotion ? "" : "animate-float-slow"}`}
      >
        <defs>
          <radialGradient id={`${gradientId}-glow`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="var(--color-primary-red)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-primary-red)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${gradientId}-line`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-primary-red)" />
            <stop offset="100%" stopColor="var(--color-primary-red-dark)" />
          </linearGradient>
          <linearGradient id={`${gradientId}-ring`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-primary-red)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-primary-red)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="200" r="160" fill={`url(#${gradientId}-glow)`} />
        <circle cx="200" cy="200" r="133" stroke={`url(#${gradientId}-ring)`} strokeWidth="1.5" fill="none" />
        <circle cx="200" cy="200" r="102" stroke={`url(#${gradientId}-ring)`} strokeWidth="1" fill="none" />

        <g stroke={`url(#${gradientId}-line)`} strokeWidth="2" strokeLinecap="round" opacity="0.85">
          <line x1="200" y1="200" x2="102" y2="138" />
          <line x1="200" y1="200" x2="284" y2="120" />
          <line x1="200" y1="200" x2="311" y2="227" />
          <line x1="200" y1="200" x2="249" y2="298" />
          <line x1="200" y1="200" x2="129" y2="289" />
          <line x1="200" y1="200" x2="80" y2="227" />
          <line x1="102" y1="138" x2="80" y2="227" />
          <line x1="284" y1="120" x2="311" y2="227" />
          <line x1="249" y1="298" x2="129" y2="289" />
        </g>

        <circle cx="200" cy="200" r="15" fill="var(--color-primary-red)" />
        <circle cx="200" cy="200" r="15" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.6" />

        <g fill="#ffffff" stroke="var(--color-primary-red)" strokeWidth="3">
          <circle cx="102" cy="138" r="6.2" />
          <circle cx="284" cy="120" r="4.4" />
          <circle cx="311" cy="227" r="7.1" />
          <circle cx="249" cy="298" r="4.9" />
          <circle cx="129" cy="289" r="5.8" />
          <circle cx="80" cy="227" r="4" />
        </g>

        <g fill="var(--color-primary-red)" opacity="0.45">
          <circle cx="53" cy="102" r="2.2" />
          <circle cx="355" cy="93" r="1.8" />
          <circle cx="369" cy="289" r="2.7" />
          <circle cx="40" cy="316" r="1.8" />
          <circle cx="209" cy="71" r="1.3" />
        </g>
      </svg>

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
