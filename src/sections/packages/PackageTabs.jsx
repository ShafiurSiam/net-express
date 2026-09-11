// Tab navigation for /packages: filters which package group(s) render below.
// Horizontally scrollable on narrow screens (no dropdown fallback needed — a
// 5-item row fits without wrapping oddly and never causes page-level overflow
// since the scroll container is its own box).
import { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";

const TAB_IDS = ["all", "home", "gaming", "business", "sme"];

const PackageTabs = ({ activeTab, onChange }) => {
  const { t } = useLanguage();
  const buttonRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % TAB_IDS.length;
    else if (e.key === "ArrowLeft") nextIndex = (index - 1 + TAB_IDS.length) % TAB_IDS.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = TAB_IDS.length - 1;
    if (nextIndex === null) return;

    e.preventDefault();
    const nextId = TAB_IDS[nextIndex];
    onChange(nextId);
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={t("packagesPage.tabs.ariaLabel")}
      className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
    >
      {TAB_IDS.map((id, index) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            ref={(el) => (buttonRefs.current[index] = el)}
            type="button"
            role="tab"
            id={`package-tab-${id}`}
            aria-selected={isActive}
            aria-controls="package-tab-panel"
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-primary-red text-white shadow-card"
                : "border border-border bg-white text-text-secondary hover:border-primary-red/40 hover:text-primary-red"
            }`}
          >
            {t(`packagesPage.tabs.${id}`)}
          </button>
        );
      })}
    </div>
  );
};

export default PackageTabs;
