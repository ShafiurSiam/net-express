// "প্যাকেজ তুলনা" table. Every cell is derived directly from packages.js /
// smePlans.js at render time — nothing here is hand-typed. Contention
// ratio / BDIX / Real IP presence is detected by scanning each package's own
// `features.en` text for the relevant keyword, so a data-file edit (e.g.
// removing the BDIX line from a package) automatically updates this table too.
import { Check } from "lucide-react";
import Button from "../../components/common/Button.jsx";
import Badge from "../../components/common/Badge.jsx";
import AnimatedSection from "../../components/common/AnimatedSection.jsx";
import SectionTitle from "../../components/common/SectionTitle.jsx";
import Container from "../../components/common/Container.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { packages } from "../../data/packages.js";
import { smePlans } from "../../data/smePlans.js";

const CONTENTION_RE = /connection ratio/i;
const BDIX_RE = /bdix/i;
const REAL_IP_RE = /real ip/i;

const findFeatureText = (pkg, regex, language) => {
  const idx = pkg.features.en.findIndex((f) => regex.test(f));
  return idx === -1 ? null : pkg.features[language][idx];
};

const hasFeature = (pkg, regex) => pkg.features.en.some((f) => regex.test(f));

const Dash = ({ children }) => <span className="text-text-secondary/60">{children}</span>;

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

        <AnimatedSection className="overflow-x-auto rounded-2xl border border-border bg-white shadow-card">
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface text-text-secondary">
                <th className="px-5 py-4 font-semibold">{t("packagesPage.comparison.colName")}</th>
                <th className="px-5 py-4 font-semibold">{t("packagesPage.comparison.colSpeed")}</th>
                <th className="px-5 py-4 font-semibold">{t("packagesPage.comparison.colContention")}</th>
                <th className="px-5 py-4 font-semibold">{t("packagesPage.comparison.colBdix")}</th>
                <th className="px-5 py-4 font-semibold">{t("packagesPage.comparison.colRealIp")}</th>
                <th className="px-5 py-4 font-semibold">{t("packagesPage.comparison.colPrice")}</th>
                <th className="px-5 py-4 font-semibold">{t("packagesPage.comparison.colAction")}</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => {
                const contention = findFeatureText(pkg, CONTENTION_RE, language);
                const bdix = hasFeature(pkg, BDIX_RE);
                const realIp = hasFeature(pkg, REAL_IP_RE);
                return (
                  <tr key={pkg.id} className="border-b border-border last:border-0 hover:bg-surface/60">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 font-semibold text-text-primary">
                        {pkg.name[language]}
                        {pkg.popular && <Badge tone="red">{t("packageCard.mostPopular")}</Badge>}
                        {pkg.tag && (
                          <Badge tone="outline" className="normal-case">
                            {pkg.tag[language]}
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 font-semibold text-primary-red">{pkg.speed[language]}</td>
                    <td className="px-5 py-4">{contention ?? <Dash>{dash}</Dash>}</td>
                    <td className="px-5 py-4">
                      {bdix ? <Check size={18} className="text-primary-red" /> : <Dash>{dash}</Dash>}
                    </td>
                    <td className="px-5 py-4">
                      {realIp ? <Check size={18} className="text-primary-red" /> : <Dash>{dash}</Dash>}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap font-bold text-text-primary">
                      ৳{pkg.price[language]} / {pkg.period[language]}
                    </td>
                    <td className="px-5 py-4">
                      <Button size="sm" variant="secondary" onClick={() => onSelectPackage(pkg)}>
                        {t("packagesPage.comparison.buyButton")}
                      </Button>
                    </td>
                  </tr>
                );
              })}

              {smePlans.plans.map((plan) => (
                <tr key={plan.id} className="border-b border-border bg-surface/40 last:border-0 hover:bg-surface/70">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 font-semibold text-text-primary">
                      {plan.name}
                      {/* "Recommended" matches SMEPlanCard.jsx's own badge text for plan.highlighted — SME copy is English-only (see smePlans.js) */}
                      {plan.highlighted && <Badge tone="red">Recommended</Badge>}
                    </div>
                  </td>
                  <td className="px-5 py-4 font-semibold text-primary-red">{plan.speed}</td>
                  <td className="px-5 py-4">
                    <Dash>{dash}</Dash>
                  </td>
                  <td className="px-5 py-4">
                    <Dash>{dash}</Dash>
                  </td>
                  <td className="px-5 py-4">
                    <Dash>{dash}</Dash>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap font-bold text-text-primary">{plan.ctaLabel}</td>
                  <td className="px-5 py-4">
                    {plan.ctaType === "contact" ? (
                      <Button size="sm" variant="secondary" to="/contact">
                        {t("packagesPage.comparison.buyButton")}
                      </Button>
                    ) : (
                      <Button size="sm" variant="secondary" onClick={() => onSelectSmePlan(plan)}>
                        {t("packagesPage.comparison.buyButton")}
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
