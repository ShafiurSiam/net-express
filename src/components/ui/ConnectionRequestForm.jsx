import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "../common/Button.jsx";
import { packages } from "../../data/packages.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const emptyForm = {
  name: "",
  mobile: "",
  area: "",
  address: "",
  packageId: "",
};

/**
 * Connection-request lead form (Section 51.5 of the spec).
 * No backend exists yet, so on submit we just show a confirmation state.
 * When a backend is ready, replace the submit handler below with a real API call.
 */
const ConnectionRequestForm = ({ initialPackageId = "", onSubmitted }) => {
  const [form, setForm] = useState({ ...emptyForm, packageId: initialPackageId });
  const [submitted, setSubmitted] = useState(false);
  const { language, t } = useLanguage();

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO(backend): POST `form` to the connection-request API once it exists.
    console.log("Connection request:", form);

    setSubmitted(true);
    onSubmitted?.(form);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 size={48} className="text-primary-red" />
        <h4 className="text-lg font-bold text-text-primary">{t("connectionForm.successTitle")}</h4>
        <p className="text-sm text-text-secondary">{t("connectionForm.successBody")}</p>
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
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {t("connectionForm.packageOption", {
                name: `${pkg.name[language]} (${pkg.speed[language]})`,
                price: pkg.price[language],
                period: pkg.period[language],
              })}
            </option>
          ))}
        </select>
      </Field>

      <Button type="submit" className="mt-2 w-full">
        {t("connectionForm.submit")}
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
