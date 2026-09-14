import { useCallback, useRef, useState } from "react";
import SEO from "../components/common/SEO.jsx";
import Container from "../components/common/Container.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PackageCard from "../components/cards/PackageCard.jsx";
import PackagesPageHeader from "../sections/packages/PackagesPageHeader.jsx";
import HighlightBar from "../sections/packages/HighlightBar.jsx";
import PackageTabs from "../sections/packages/PackageTabs.jsx";
import PlanFinderSection from "../sections/packages/PlanFinderSection.jsx";
import SMECorporateSection from "../sections/packages/SMECorporateSection.jsx";
import ComparisonTable from "../sections/packages/ComparisonTable.jsx";
import AddonsSection from "../sections/packages/AddonsSection.jsx";
import HowItWorksSection from "../sections/home/HowItWorksSection.jsx";
import PackagesFaqSection from "../sections/packages/PackagesFaqSection.jsx";
import PackagesFinalCTA from "../sections/packages/PackagesFinalCTA.jsx";
import { packages, packageCategories } from "../data/packages.js";
import { centerPopular, getRowStaggerDelay } from "../utils/packageCardLayout.js";
import { useConnectionRequest } from "../context/ConnectionRequestContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const Packages = () => {
  const { openRequest } = useConnectionRequest();
  const { language, t } = useLanguage();

  const [activeTab, setActiveTab] = useState("all");
  const [deviceCount, setDeviceCount] = useState(null);
  const [activity, setActivity] = useState(null);
  const [highlightId, setHighlightId] = useState(null);

  // Shared by both the packages grid and the SME/Corporate grid — ids are unique
  // across packages.js + smePlans.js, so one registry covers the plan finder's
  // scroll-to target no matter which array the recommended id came from.
  const cardRefs = useRef({});
  const registerRef = useCallback(
    (id) => (el) => {
      cardRefs.current[id] = el;
    },
    [],
  );

  const scrollToAndHighlight = useCallback((id) => {
    // Runs after the state update above has committed the "all" tab, so every
    // card (including SME/Corporate) is already in the DOM to scroll to.
    requestAnimationFrame(() => {
      const el = cardRefs.current[id];
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    setHighlightId(id);
    window.setTimeout(() => setHighlightId((current) => (current === id ? null : current)), 2500);
  }, []);

  const handleRecommend = useCallback(
    (result) => {
      setActiveTab("all");
      scrollToAndHighlight(result.id);
    },
    [scrollToAndHighlight],
  );

  const visibleCategories = packageCategories.filter((cat) => activeTab === "all" || activeTab === cat.id);
  const showSme = activeTab === "all" || activeTab === "sme";

  return (
    <>
      <SEO title={t("seo.packages.title")} description={t("seo.packages.description")} path="/packages" />

      <PackagesPageHeader />
      <HighlightBar />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div id="package-tabs" className="scroll-mt-28">
              <PackageTabs activeTab={activeTab} onChange={setActiveTab} />
            </div>

            <PlanFinderSection
              deviceCount={deviceCount}
              activity={activity}
              onSelectDevice={setDeviceCount}
              onSelectActivity={setActivity}
              onRecommend={handleRecommend}
            />
          </div>

          <div id="package-tab-panel" role="tabpanel" aria-labelledby={`package-tab-${activeTab}`} className="flex flex-col gap-16">
            {visibleCategories.map((cat) => {
              const catPackages = centerPopular(packages.filter((pkg) => pkg.category === cat.id));
              return (
                <div key={cat.id} className="flex flex-col gap-10">
                  <SectionTitle title={cat.label[language]} />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {catPackages.map((pkg, i) => (
                      <div
                        key={pkg.id}
                        ref={registerRef(pkg.id)}
                        className={`rounded-2xl transition-shadow duration-700 ${
                          highlightId === pkg.id ? "ring-4 ring-primary-red/40 ring-offset-2 ring-offset-surface" : ""
                        }`}
                      >
                        <PackageCard
                          pkg={pkg}
                          delay={getRowStaggerDelay(i)}
                          variantIndex={i}
                          onSelect={(p) => openRequest(p.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {showSme && <SMECorporateSection id="sme-corporate" registerRef={registerRef} highlightId={highlightId} />}
          </div>
        </Container>
      </section>

      <ComparisonTable
        onSelectPackage={(pkg) => openRequest(pkg.id)}
        onSelectSmePlan={(plan) => openRequest(plan.id)}
      />

      <AddonsSection />
      <HowItWorksSection />
      <PackagesFaqSection />
      <PackagesFinalCTA />
    </>
  );
};

export default Packages;
