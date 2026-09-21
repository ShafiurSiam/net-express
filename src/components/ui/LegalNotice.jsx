import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";

const routes = { terms: "/terms", privacy: "/privacy" };
const linkClass = "font-semibold text-primary-red underline underline-offset-2 hover:text-primary-red-dark";

/**
 * Turns a translated string containing <terms>…</terms> / <privacy>…</privacy>
 * markers into text with links to those pages (opened in a new tab so a
 * half-filled form isn't lost).
 */
export const LegalLinks = ({ i18nKey }) => {
  const { t } = useLanguage();
  const parts = t(i18nKey).split(/(<(?:terms|privacy)>.*?<\/(?:terms|privacy)>)/);

  return parts.map((part, i) => {
    const match = part.match(/^<(terms|privacy)>(.*)<\/\1>$/);
    if (!match) return part;
    return (
      <Link key={i} to={routes[match[1]]} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {match[2]}
      </Link>
    );
  });
};

/** Required "I agree to the Terms and Privacy Policy" checkbox for data-collecting forms. */
export const ConsentCheckbox = ({ checked, onChange, invalid }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-start gap-3 text-sm text-text-secondary">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={invalid}
          className="mt-1 h-4 w-4 shrink-0 accent-primary-red"
        />
        <span>
          <LegalLinks i18nKey="legal.consent.label" />
        </span>
      </label>
      {invalid && (
        <span role="alert" className="text-xs text-primary-red">
          {t("legal.consent.required")}
        </span>
      )}
    </div>
  );
};

/** One-line notice under the review form's submit button. */
export const ReviewNotice = () => (
  <p className="text-center text-xs text-text-secondary">
    <LegalLinks i18nKey="legal.reviewNotice.text" />
  </p>
);
