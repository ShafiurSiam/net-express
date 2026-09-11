// "প্যাকেজ তুলনা" table. Every cell reads straight off packages.js / smePlans.js
// fields (contentionRatio, bdixCache, realIp, price/ctaLabel, speed, name) — there
// is no more scanning each package's freeform `features` array to guess a value.
// That approach broke because feature lists differ in wording/length/order
// between tiers (home vs gaming vs business vs SME), so string-matching them at
// render time was fragile; the three comparison fields are now explicit data on
// each package/plan instead. See the comments on those fields in packages.js /
// smePlans.js for exactly where each value came from.
import Button from "../../components/common/Button.jsx";
import Badge from "../../components/common/Badge.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Container from "../../components/common/Container.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { packages } from "../../data/packages.js";
import { smePlans } from "../../data/smePlans.js";

// Category -> left-accent color, per the redesign: red for home, the site's
// darker brand red for gaming+freelancer, near-black/gray for SME/Corporate.
// Deliberately stays inside the existing red/white/neutral palette (variables.css)
// — no blue/navy.
const CATEGORY_ACCENT = {
  home: "border-l-primary-red",
  gaming: "border-l-primary-red-dark",
  business: "border-l-primary-red-dark",
};
const SME_ACCENT = "border-l-charcoal";

// FREELANCER has no `tag` in packages.js (adding one there would also put a
// badge on its PackageCard, which is out of scope here) — this table-only
// lookup adds the "Pro" tag to just this row without touching card data.
const COMPARE_ONLY_TAGS = {
  "freelancer-175": { bn: "Pro", en: "Pro" },
};

const cellValue = (value, language, dash) => value?.[language] ?? dash;

const ComparisonTable = ({ onSelectPackage, onSelectSmePlan }) => {
  const { language, t } = useLanguage();
  const dash = t("packagesPage.comparison.dash");

  return (
    <section className="py-14 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow={t("packagesPage.comparison.eyebrow")}
          title={t("packagesPage.comparison.title")}
          subtitle={t("packagesPage.comparison.subtitle")}
        />

        <AnimatedSection className="overflow-x-auto rounded-2xl border border-border shadow-card">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-charcoal text-xs font-semibold uppercase tracking-wide text-white">
                <th className="px-5 py-4">{t("packagesPage.comparison.colName")}</th>
                <th className="px-5 py-4">{t("packagesPage.comparison.colSpeed")}</th>
                <th className="px-5 py-4">{t("packagesPage.comparison.colContention")}</th>
                <th className="px-5 py-4">{t("packagesPage.comparison.colBdix")}</th>
                <th className="px-5 py-4">{t("packagesPage.comparison.colRealIp")}</th>
                <th className="px-5 py-4">{t("packagesPage.comparison.colPrice")}</th>
                <th className="px-5 py-4">{t("packagesPage.comparison.colAction")}</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => {
                const accent = CATEGORY_ACCENT[pkg.category] ?? SME_ACCENT;
                const proTag = COMPARE_ONLY_TAGS[pkg.id];
                return (
                  <tr key={pkg.id} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className={`border-l-4 px-5 py-4 ${accent}`}>
                      <div className="flex items-center gap-2 font-semibold text-text-primary">
                        {pkg.name[language]}
                        {pkg.popular && <Badge tone="red">{t("packageCard.mostPopular")}</Badge>}
                        {pkg.tag && (
                          <Badge tone="outline" className="normal-case">
                            {pkg.tag[language]}
                          </Badge>
                        )}
                        {proTag && (
                          <Badge tone="outline" className="normal-case">
                            {proTag[language]}
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 font-semibold text-primary-red">{pkg.speed[language]}</td>
                    <td className="px-5 py-4 text-text-secondary">{cellValue(pkg.contentionRatio, language, dash)}</td>
                    <td className="px-5 py-4 text-text-secondary">{cellValue(pkg.bdixCache, language, dash)}</td>
                    <td className="px-5 py-4 text-text-secondary">{cellValue(pkg.realIp, language, dash)}</td>
                    <td className="px-5 py-4 whitespace-nowrap font-bold text-primary-red">৳{pkg.price[language]}</td>
                    <td className="px-5 py-4">
                      <Button size="sm" variant="primary" onClick={() => onSelectPackage(pkg)}>
                        {t("packagesPage.comparison.buyButton")}
                      </Button>
                    </td>
                  </tr>
                );
              })}

              {smePlans.plans.map((plan, i) => (
                <tr key={plan.id} className={(packages.length + i) % 2 === 0 ? "bg-white" : "bg-surface"}>
                  <td className={`border-l-4 px-5 py-4 ${SME_ACCENT}`}>
                    <span className="font-semibold text-text-primary">{plan.name}</span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-primary-red">{plan.speed}</td>
                  <td className="px-5 py-4 text-text-secondary">{cellValue(plan.contentionRatio, language, dash)}</td>
                  <td className="px-5 py-4 text-text-secondary">{cellValue(plan.bdixCache, language, dash)}</td>
                  <td className="px-5 py-4 text-text-secondary">{cellValue(plan.realIp, language, dash)}</td>
                  <td className="px-5 py-4 whitespace-nowrap font-bold text-text-primary">{plan.ctaLabel}</td>
                  <td className="px-5 py-4">
                    {plan.ctaType === "contact" ? (
                      <Button size="sm" variant="dark" to="/contact">
                        {t("packagesPage.comparison.quoteButton")}
                      </Button>
                    ) : (
                      <Button size="sm" variant="dark" onClick={() => onSelectSmePlan(plan)}>
                        {t("packagesPage.comparison.quoteButton")}
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default ComparisonTable;
