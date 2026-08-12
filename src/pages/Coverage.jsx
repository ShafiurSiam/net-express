import { useState } from "react";
import { Search, MapPin, CheckCircle2, Info } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Container from "../components/common/Container.jsx";
import Button from "../components/common/Button.jsx";
import AnimatedSection from "../components/common/AnimatedSection.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import { coverageAreas } from "../data/coverageAreas.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const Coverage = () => {
  const [area, setArea] = useState("");
  const [result, setResult] = useState(null);
  const { language, t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = area.trim();
    if (!query) return;

    // TODO(backend): replace with a real coverage-lookup API call.
    const isCovered = coverageAreas.some((a) => a[language].includes(query) || query.includes(a[language]));
    setResult({ query, isCovered });
  };

  return (
    <>
      <SEO
        title={t("seo.coverage.title")}
        description={t("seo.coverage.description")}
        path="/coverage"
      />
      <PageHeader
        eyebrow={t("pageHeader.coverage.eyebrow")}
        title={t("pageHeader.coverage.title")}
        subtitle={t("pageHeader.coverage.subtitle")}
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-12">
          <AnimatedSection className="mx-auto w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <MapPin size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder={t("coverage.placeholder")}
                  className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-text-primary outline-none transition-colors focus:border-primary-red"
                />
              </label>
              <Button type="submit" icon={Search} iconPosition="left">
                {t("coverage.verify")}
              </Button>
            </form>

            {result && (
              <AnimatedSection
                className={`mt-4 flex items-start gap-3 rounded-xl border p-4 text-sm ${
                  result.isCovered
                    ? "border-primary-red/20 bg-primary-red/5 text-text-primary"
                    : "border-border bg-surface text-text-secondary"
                }`}
              >
                {result.isCovered ? (
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary-red" />
                ) : (
                  <Info size={20} className="mt-0.5 shrink-0 text-text-secondary" />
                )}
                <span>
                  <strong>{result.query}</strong>{" "}
                  {t(result.isCovered ? "coverage.resultCoveredSuffix" : "coverage.resultNotCoveredSuffix")}
                </span>
              </AnimatedSection>
            )}
          </AnimatedSection>

          <AnimatedSection className="flex flex-col gap-5">
            <h2 className="text-center text-xl font-bold text-text-primary">{t("coverage.sampleHeading")}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {coverageAreas.map((a) => (
                <span
                  key={a.en}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-secondary"
                >
                  {a[language]}
                </span>
              ))}
            </div>
            <p className="text-center text-xs text-text-secondary">{t("coverage.disclaimer")}</p>
          </AnimatedSection>
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default Coverage;
