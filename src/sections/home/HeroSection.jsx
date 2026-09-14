// Renders the homepage hero banner (headline, CTA buttons, hero artwork) — first section on Home.
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Wifi } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import Button from "../../components/common/Button.jsx";
import HeroVisual from "../../components/home/HeroVisual.jsx";
import ParticleBackground from "../../components/common/ParticleBackground.jsx";
import { useConnectionRequest } from "../../context/ConnectionRequestContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = (shouldReduceMotion) => ({
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
});

const HeroSection = () => {
  const { openRequest } = useConnectionRequest();
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const fx = item(shouldReduceMotion);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* Live particle-network backdrop, full-bleed behind the whole hero (both
          columns) — z-0, layered under the content below via relative z-10.
          Ambient-only on touch devices; gently reacts to cursor proximity on
          desktop (see ParticleBackground's "hero" strength). */}
      <ParticleBackground strength="hero" className="z-0" />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 text-left"
        >
          <motion.span
            variants={fx}
            className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-1.5 text-sm font-semibold text-primary-red"
          >
            <Wifi size={16} /> {t("hero.eyebrow")}
          </motion.span>

          <motion.h1 variants={fx} className="text-4xl font-extrabold leading-[1.15] text-text-primary sm:text-5xl lg:text-6xl">
            {t("hero.titleLead")} <span className="text-primary-red">{t("hero.titleHighlight")}</span>,<br /> {t("hero.titleTail")}
          </motion.h1>

          <motion.p variants={fx} className="max-w-lg text-lg text-text-secondary">
            {t("hero.subtitle")}
          </motion.p>

          <motion.div variants={fx} className="flex flex-wrap items-center gap-4 pt-2">
            <Button to="/packages" size="lg" icon={ArrowRight}>
              {t("hero.ctaPrimary")}
            </Button>
            <Button variant="secondary" size="lg" onClick={() => openRequest()}>
              {t("hero.ctaSecondary")}
            </Button>
          </motion.div>

          <motion.div variants={fx} className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-text-secondary">
            <span>{t("hero.trustSupport")}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{t("hero.trustUptime")}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{t("hero.trustInstall")}</span>
          </motion.div>
        </motion.div>

        {/* Centerpiece graphic: hidden below md (768px) so it doesn't render or
            reserve layout space on mobile — matches this project's existing
            mobile/tablet cutoff (see MobileActionBar.jsx, NetworkCoverageMap.jsx). */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto hidden w-full max-w-sm md:block lg:max-w-md"
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
