import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Button from "../common/Button.jsx";
import { packages } from "../../data/packages.js";
import { smePlans } from "../../data/smePlans.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { company } from "../../config/company.js";

const negotiableSmePlans = smePlans.plans.filter((plan) => plan.ctaType === "negotiable");

const emptyForm = {
  name: "",
  mobile: "",
  area: "",
  address: "",
  packageId: "",
};

// Google Apps Script web app URL that appends submissions as rows to a Google
// Sheet (no backend of our own). Swapping this for a real backend later only
// requires changing the fetch call in handleSubmit below.
const SHEETS_WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL;

const getSelectedPackageLabel = (packageId, language, t) => {
  const pkg = packages.find((p) => p.id === packageId);
  if (pkg) {
    return t("connectionForm.packageOption", {
      name: `${pkg.name[language]} (${pkg.speed[language]})`,
      price: pkg.price[language],
      period: pkg.period[language],
    });
  }
  const plan = negotiableSmePlans.find((p) => p.id === packageId);
  if (plan) {
    return t("connectionForm.smePlanOption", { name: plan.name, speed: plan.speed });
  }
  return "";
};

/**
 * Connection-request lead form (Section 51.5 of the spec).
 * Submits in the background to a Google Sheet via SHEETS_WEBHOOK_URL —
 * the user stays on this page throughout, success or failure.
 */
const ConnectionRequestForm = ({ initialPackageId = "", onSubmitted }) => {
  const [form, setForm] = useState({ ...emptyForm, packageId: initialPackageId });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const { language, t } = useLanguage();

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: form.name || "",
          mobile: form.mobile || "",
          area: form.area || "",
          address: form.address || "",
          package: getSelectedPackageLabel(form.packageId, language, t) || "",
        }),
      });

      setSubmitting(false);
      setSubmitted(true);
      onSubmitted?.(form);
    } catch {
      setSubmitting(false);
      setError(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 size={48} className="text-primary-red" />
        <h4 className="text-lg font-bold text-text-primary">{t("connectionForm.successTitle")}</h4>
        <p className="text-sm text-text-secondary">{t("connectionForm.successBody")}</p>
        <p className="text-sm text-text-secondary">{t("connectionForm.savedNote")}</p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setForm({ ...emptyForm, packageId: initialPackageId });
            setSubmitted(false);
          }}
        >
          {t("connectionForm.newRequest")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field label={t("connectionForm.nameLabel")}>
        <input
          type="text"
          value={form.name}
          onChange={handleChange("name")}
          placeholder={t("connectionForm.namePlaceholder")}
          className={inputClass}
        />
      </Field>

      <Field label={t("connectionForm.mobileLabel")}>
        <input
          type="tel"
          value={form.mobile}
          onChange={handleChange("mobile")}
          placeholder={t("connectionForm.mobilePlaceholder")}
          className={inputClass}
        />
      </Field>

      <Field label={t("connectionForm.areaLabel")}>
        <input
          type="text"
          value={form.area}
          onChange={handleChange("area")}
          placeholder={t("connectionForm.areaPlaceholder")}
          className={inputClass}
        />
      </Field>

      <Field label={t("connectionForm.addressLabel")}>
        <textarea
          value={form.address}
          onChange={handleChange("address")}
          placeholder={t("connectionForm.addressPlaceholder")}
          rows={3}
          className={inputClass}
        />
      </Field>

      <Field label={t("connectionForm.packageLabel")}>
        <select value={form.packageId} onChange={handleChange("packageId")} className={inputClass}>
          <option value="">{t("connectionForm.selectPackage")}</option>
          <optgroup label={t("connectionForm.homePackagesGroup")}>
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {t("connectionForm.packageOption", {
                  name: `${pkg.name[language]} (${pkg.speed[language]})`,
                  price: pkg.price[language],
                  period: pkg.period[language],
                })}
              </option>
            ))}
          </optgroup>
          <optgroup label={t("connectionForm.smePlansGroup")}>
            {negotiableSmePlans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {t("connectionForm.smePlanOption", { name: plan.name, speed: plan.speed })}
              </option>
            ))}
          </optgroup>
        </select>
      </Field>

      {error && (
        <p className="rounded-xl bg-primary-red/10 px-4 py-3 text-sm text-primary-red">
          {t("connectionForm.errorMessage", { phone: company.supportPhone })}
        </p>
      )}

      <Button type="submit" disabled={submitting} className="mt-2 w-full">
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {t("connectionForm.submitting")}
          </>
        ) : (
          t("connectionForm.submit")
        )}
      </Button>
    </form>
  );
};

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary placeholder:text-text-secondary/60 outline-none transition-colors focus:border-primary-red";

const Field = ({ label, children }) => (
  <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
    {label}
    {children}
  </label>
);

export default ConnectionRequestForm;
