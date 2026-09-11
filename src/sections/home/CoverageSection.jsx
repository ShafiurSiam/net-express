// Renders the homepage coverage section: the animated network schematic
// (NetworkCoverageMap) plus the area-checker (search box + demo result
// against src/data/coverageAreas.js).
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import Container from "../../components/common/Container.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Button from "../../components/common/Button.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import NetworkCoverageMap from "../../components/coverage/NetworkCoverageMap.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const CoverageSection = () => {
  const [area, setArea] = useState("");
  const [result, setResult] = useState(null);
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!area.trim()) return;

    // TODO(backend): replace with a real coverage-lookup API call.
    setResult(area.trim());
  };

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-16">
        <NetworkCoverageMap />

        <div id="coverage-checker" className="mx-auto flex w-full max-w-xl scroll-mt-24 flex-col gap-6">
          <SectionTitle
            eyebrow={t("home.coverageSection.eyebrow")}
            title={t("home.coverageSection.title")}
            subtitle={t("home.coverageSection.subtitle")}
          />

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1">
              <MapPin size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder={t("home.coverageSection.placeholder")}
                className="w-full rounded-xl border border-border bg-white py-3.5 pl-11 pr-4 text-text-primary outline-none transition-colors focus:border-primary-red"
              />
            </label>
            <Button type="submit" icon={Search} iconPosition="left">
              {t("home.coverageSection.button")}
            </Button>
          </form>

          {result && (
            <AnimatedSection className="rounded-xl border border-primary-red/20 bg-primary-red/5 p-4 text-sm text-text-primary">
              <strong>{result}</strong> {t("home.coverageSection.resultSuffix")}{" "}
              <Link to="/coverage" className="font-semibold text-primary-red underline">
                {t("home.coverageSection.coveragePageLink")}
              </Link>{" "}
              {t("home.coverageSection.resultTail")}
            </AnimatedSection>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CoverageSection;
