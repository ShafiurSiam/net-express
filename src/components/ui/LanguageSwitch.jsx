import { useLanguage } from "../../context/LanguageContext.jsx";

/**
 * বাং | EN segmented pill toggle. Instant re-render via LanguageContext —
 * no page reload, choice persists to localStorage.
 */
const LanguageSwitch = ({ className = "" }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-white p-0.5 text-sm font-semibold ${className}`}
      role="group"
    >
      <button
        type="button"
        onClick={() => setLanguage("bn")}
        aria-pressed={language === "bn"}
        aria-label={t("languageSwitch.switchToBangla")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          language === "bn" ? "bg-primary-red text-white" : "text-text-secondary hover:text-primary-red"
        }`}
      >
        বাং
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label={t("languageSwitch.switchToEnglish")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          language === "en" ? "bg-primary-red text-white" : "text-text-secondary hover:text-primary-red"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
