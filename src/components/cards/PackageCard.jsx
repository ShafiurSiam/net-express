import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Gamepad2,
  Gauge,
  Globe,
  Home,
  Laptop2,
  Server,
  Sparkles,
  Video,
  Wifi,
  Zap,
  PlayCircle,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../common/Button.jsx";
import AnimatedSection from "../common/AnimatedSection.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

// Picks an icon matching what a feature line is about, based on its (stable) English text —
// keeps the icon choice independent of which language is currently displayed.
const getFeatureIcon = (featureEn) => {
  const text = featureEn.toLowerCase();
  if (text.includes("ftp")) return Server;
  if (text.includes("bdix") || text.includes("cdn")) return Wifi;
  if (text.includes("video calling")) return Video;
  if (text.includes("streaming")) return PlayCircle;
  if (text.includes("real ip") || text.includes("ipv6") || text.includes("public ip")) return Globe;
  if (text.includes("uncapped") || text.includes("upload speed") || text.includes("gaming")) return Zap;
  if (text.includes("support")) return Clock;
  return CheckCircle2;
};

// One subtle per-category personality, all still inside the red/white palette:
// gaming reads a touch more energetic (higher-opacity, tighter-blur corner glow,
// snappier hover), home/freelancer stay calmer. Icon choice is the main signal.
const CATEGORY_META = {
  home: { icon: Home, glowOpacity: 0.1, glowBlur: "blur-2xl", hoverDuration: "duration-300" },
  gaming: { icon: Gamepad2, glowOpacity: 0.18, glowBlur: "blur-xl", hoverDuration: "duration-200" },
  business: { icon: Laptop2, glowOpacity: 0.12, glowBlur: "blur-2xl", hoverDuration: "duration-300" },
};

/**
 * pkg: entry from src/data/packages.js
 * onSelect: called with the package when "Get Connected" is clicked (opens the request modal)
 * variantIndex: used only to alternate which corner the ambient glow bleeds from,
 *   so neighboring cards in a row don't look like exact clones.
 */
const PackageCard = ({ pkg, onSelect, delay = 0, variantIndex = 0 }) => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const meta = CATEGORY_META[pkg.category] ?? CATEGORY_META.home;
  const CategoryIcon = meta.icon;
  const glowCorner = variantIndex % 2 === 0 ? "-right-10 -top-10" : "-left-10 -top-10";

  const priceVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 14, delay: shouldReduceMotion ? 0 : delay + 0.25 },
    },
  };

  return (
    <AnimatedSection delay={delay} className="h-full">
      {/* Outer layer carries the hover/elevation transform (and, for pkg.popular, a
          permanent desktop-only lift) so it moves the ribbon and the card face
          together. The inner layer owns overflow-hidden for the glow effects, which
          can't also host the ribbon since that pokes above the card's top edge. */}
      <div
        className={`group relative h-full transition-transform ${meta.hoverDuration} hover:-translate-y-1 hover:scale-[1.02] ${
          pkg.popular ? "lg:-translate-y-2 lg:scale-[1.03] lg:hover:-translate-y-3 lg:hover:scale-[1.04]" : ""
        }`}
      >
        {pkg.popular && (
          <span className="absolute -top-3.5 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-r from-primary-red to-primary-red-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_4px_14px_-2px_rgba(var(--rgb-primary-red),0.5)]">
            <Sparkles size={13} className="shrink-0" aria-hidden="true" />
            {t("packageCard.mostPopular")}
            <span
              aria-hidden="true"
              className="animate-shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-6 -skew-x-12 bg-white/40"
            />
          </span>
        )}

        <div
          className={`relative isolate flex h-full flex-col overflow-hidden rounded-2xl border p-7 shadow-card transition-shadow duration-300 group-hover:shadow-card-hover ${
            pkg.popular
              ? "border-primary-red bg-gradient-to-b from-primary-red/5 via-white to-white shadow-card-hover"
              : "border-border bg-white"
          }`}
        >
          {/* Ambient category-tinted corner wash; intensifies on hover */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute ${glowCorner} h-40 w-40 rounded-full ${meta.glowBlur} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
            style={{ background: `radial-gradient(circle, rgba(var(--rgb-primary-red), ${meta.glowOpacity}), transparent 70%)` }}
          />

          {pkg.popular ? (
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

          <div className="relative z-10 flex items-start justify-between gap-2">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-red to-primary-red-dark text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(var(--rgb-charcoal),0.25),0_8px_18px_-6px_rgba(var(--rgb-primary-red),0.5)] ring-1 ring-primary-red-dark/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <CategoryIcon size={24} />
            </div>

            {pkg.tag && (
              <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-primary-red/15 to-primary-red/5 px-3 py-1 text-xs font-semibold text-primary-red-dark ring-1 ring-primary-red/20">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-red" />
                {pkg.tag[language]}
                {pkg.category === "gaming" && (
                  <span
                    aria-hidden="true"
                    className="animate-shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-4 -skew-x-12 bg-white/50"
                  />
                )}
              </span>
            )}
          </div>

          <h3 className="relative z-10 mt-4 text-2xl font-bold text-text-primary">{pkg.name[language]}</h3>

          <span className="relative z-10 mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-text-secondary ring-1 ring-border">
            <Gauge size={14} className="text-primary-red" aria-hidden="true" />
            {pkg.speed[language]}
          </span>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={priceVariants}
            className="relative z-10 mt-4 flex items-end gap-1 transition-transform duration-300 group-hover:scale-[1.03]"
          >
            <span className="pb-1.5 text-2xl font-bold text-primary-red">৳</span>
            <span className="text-5xl font-extrabold leading-none text-primary-red drop-shadow-[0_2px_16px_rgba(var(--rgb-primary-red),0.28)]">
              {pkg.price[language]}
            </span>
            <span className="pb-1.5 text-text-secondary">/{pkg.period[language]}</span>
          </motion.div>
          {pkg.vatNote && <span className="relative z-10 mt-0.5 text-xs text-text-secondary">{pkg.vatNote[language]}</span>}

          {pkg.whatsNew && (
            <div className="relative z-10 mt-4 flex items-start gap-2 rounded-xl border border-primary-red/20 bg-gradient-to-br from-primary-red/5 to-transparent px-3.5 py-3">
              <Sparkles size={16} className="mt-0.5 shrink-0 text-primary-red" aria-hidden="true" />
              <p className="text-sm text-text-primary">
                <span className="font-bold text-primary-red">{t("packageCard.whatsNew")}: </span>
                {pkg.whatsNew[language]}
              </p>
            </div>
          )}

          <div className="relative z-10 my-5 h-px w-full bg-border" />

          <ul className="relative z-10 flex flex-1 flex-col gap-4">
            {pkg.features[language].map((feature, i) => {
              const Icon = getFeatureIcon(pkg.features.en[i]);
              return (
                <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-red/10 text-primary-red">
                    <Icon size={13} aria-hidden="true" />
                  </span>
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>

          <Button
            variant={pkg.popular ? "primary" : "secondary"}
            icon={ArrowRight}
            className={`relative z-10 mt-7 w-full group-hover:-translate-y-0.5 group-hover:scale-[1.02] ${
              pkg.popular ? "" : "group-hover:shadow-card-hover"
            }`}
            onClick={() => onSelect?.(pkg)}
          >
            {t("packageCard.getConnected")}
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PackageCard;
