// Interactive "কোন প্যাকেজ আপনার জন্য?" recommendation helper. Purely a frontend
// convenience — it never renders numbers of its own; it looks up an id from
// src/utils/planFinder.js and reads that package's real name/speed straight out
// of packages.js / smePlans.js, then asks the parent (Packages.jsx) to scroll to
// and highlight that exact card.
import { useEffect } from "react";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import Button from "../../components/common/Button.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { packages } from "../../data/packages.js";
import { smePlans } from "../../data/smePlans.js";
import { DEVICE_OPTIONS, ACTIVITY_OPTIONS, findRecommendedPlan } from "../../utils/planFinder.js";

const pillClass = (active) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
    active
      ? "bg-primary-red text-white shadow-card"
      : "border border-border bg-white text-text-secondary hover:border-primary-red/40 hover:text-primary-red"
  }`;

const PlanFinderSection = ({ deviceCount, activity, onSelectDevice, onSelectActivity, onRecommend }) => {
  const { language, t } = useLanguage();

  const result = deviceCount && activity ? findRecommendedPlan(deviceCount, activity) : null;

  useEffect(() => {
    if (deviceCount && activity) {
      const match = findRecommendedPlan(deviceCount, activity);
      if (match) onRecommend(match);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceCount, activity]);

  const resultPkg = result
    ? result.isSme
      ? smePlans.plans.find((p) => p.id === result.id)
      : packages.find((p) => p.id === result.id)
    : null;

  const resultName = resultPkg ? (result.isSme ? resultPkg.name : resultPkg.name[language]) : null;
  const resultSpeed = resultPkg ? (result.isSme ? resultPkg.speed : resultPkg.speed[language]) : null;

  return (
    <AnimatedSection className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-1">
        <span className="w-fit rounded-full bg-primary-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-red">
          {t("packagesPage.planFinder.eyebrow")}
        </span>
        <h2 className="text-2xl font-bold text-text-primary">{t("packagesPage.planFinder.title")}</h2>
        <p className="text-sm text-text-secondary">{t("packagesPage.planFinder.subtitle")}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold text-text-primary">{t("packagesPage.planFinder.q1Label")}</p>
          <div className="flex flex-wrap gap-2">
            {DEVICE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                aria-pressed={deviceCount === opt}
                onClick={() => onSelectDevice(opt)}
                className={pillClass(deviceCount === opt)}
              >
                {t(`packagesPage.planFinder.q1Options.${opt}`)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-text-primary">{t("packagesPage.planFinder.q2Label")}</p>
          <div className="flex flex-wrap gap-2">
            {ACTIVITY_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                aria-pressed={activity === opt}
                onClick={() => onSelectActivity(opt)}
                className={pillClass(activity === opt)}
              >
                {t(`packagesPage.planFinder.q2Options.${opt}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        {resultPkg ? (
          <p className="text-sm text-text-primary">
            <span className="text-text-secondary">{t("packagesPage.planFinder.resultLabel")}: </span>
            <span className="font-bold text-primary-red">{resultName}</span>{" "}
            <span className="text-text-secondary">({resultSpeed})</span>
          </p>
        ) : (
          <p className="text-sm text-text-secondary">{t("packagesPage.planFinder.prompt")}</p>
        )}
        {resultPkg && (
          <Button size="sm" variant="secondary" onClick={() => onRecommend(result)}>
            {t("packagesPage.planFinder.resultCta")}
          </Button>
        )}
      </div>
    </AnimatedSection>
  );
};

export default PlanFinderSection;
