import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Gauge, Download, Upload, Timer, Info } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { formatNumber } from "../i18n/numerals.js";

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Placeholder result — no real measurement runs here yet (see Section 51.8 of the spec).
const DEMO_RESULT = { download: 42, upload: 18, ping: 12 };

const SpeedTest = () => {
  const [status, setStatus] = useState("idle"); // idle | testing | done
  const shouldReduceMotion = useReducedMotion();
  const { language, t } = useLanguage();

  const runTest = () => {
    setStatus("testing");
    // TODO(backend): replace this timeout with a real speed-measurement call.
    setTimeout(() => setStatus("done"), shouldReduceMotion ? 200 : 2200);
  };

  const progress = status === "done" ? DEMO_RESULT.download / 100 : status === "testing" ? 0.85 : 0;

  return (
    <>
      <SEO title={t("seo.speedTest.title")} description={t("seo.speedTest.description")} path="/speed-test" />
      <PageHeader eyebrow={t("pageHeader.speedTest.eyebrow")} title={t("pageHeader.speedTest.title")} subtitle={t("pageHeader.speedTest.subtitle")} />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col items-center gap-10">
          <AnimatedSection className="flex flex-col items-center gap-8">
            <div className="relative h-56 w-56">
              <svg viewBox="0 0 220 220" className="h-full w-full -rotate-90">
                <circle cx="110" cy="110" r={RADIUS} fill="none" stroke="var(--color-border)" strokeWidth="14" />
                <motion.circle
                  cx="110"
                  cy="110"
                  r={RADIUS}
                  fill="none"
                  stroke="var(--color-primary-red)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  initial={{ strokeDashoffset: CIRCUMFERENCE }}
                  animate={{ strokeDashoffset: CIRCUMFERENCE * (1 - progress) }}
                  transition={{ duration: shouldReduceMotion ? 0 : 2, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <Gauge size={28} className="text-primary-red" />
                <span className="text-3xl font-extrabold text-text-primary">
                  {status === "done" ? formatNumber(DEMO_RESULT.download, language) : status === "testing" ? "..." : formatNumber(0, language)}
                </span>
                <span className="text-sm text-text-secondary">Mbps</span>
              </div>
            </div>

            <Button size="lg" onClick={runTest} disabled={status === "testing"}>
              {status === "testing" ? t("speedTest.testing") : t("speedTest.start")}
            </Button>
          </AnimatedSection>

          {status === "done" && (
            <AnimatedSection className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <ResultTile icon={Download} label={t("speedTest.download")} value={`${formatNumber(DEMO_RESULT.download, language)} Mbps`} />
              <ResultTile icon={Upload} label={t("speedTest.upload")} value={`${formatNumber(DEMO_RESULT.upload, language)} Mbps`} />
              <ResultTile icon={Timer} label={t("speedTest.ping")} value={`${formatNumber(DEMO_RESULT.ping, language)} ms`} />
            </AnimatedSection>
          )}

          <p className="flex max-w-lg items-start gap-2 text-center text-xs text-text-secondary">
            <Info size={14} className="mt-0.5 shrink-0" />
            {t("speedTest.disclaimer")}
          </p>
        </Container>
      </section>
    </>
  );
};

const ResultTile = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-6 text-center shadow-card">
    <Icon size={22} className="text-primary-red" />
    <span className="text-xl font-bold text-text-primary">{value}</span>
    <span className="text-sm text-text-secondary">{label}</span>
  </div>
);

export default SpeedTest;
