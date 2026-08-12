import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "../common/Button.jsx";
import { packages } from "../../data/packages.js";

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

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO(backend): POST `form` to the connection-request API once it exists.
    console.log("সংযোগ অনুরোধ:", form);

    setSubmitted(true);
    onSubmitted?.(form);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 size={48} className="text-primary-red" />
        <h4 className="text-lg font-bold text-text-primary">অনুরোধ গ্রহণ করা হয়েছে</h4>
        <p className="text-sm text-text-secondary">
          ধন্যবাদ! আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setForm({ ...emptyForm, packageId: initialPackageId });
            setSubmitted(false);
          }}
        >
          নতুন অনুরোধ করুন
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field label="নাম">
        <input
          type="text"
          value={form.name}
          onChange={handleChange("name")}
          placeholder="আপনার নাম লিখুন"
          className={inputClass}
        />
      </Field>

      <Field label="মোবাইল নম্বর">
        <input
          type="tel"
          value={form.mobile}
          onChange={handleChange("mobile")}
          placeholder="০১XXXXXXXXX"
          className={inputClass}
        />
      </Field>

      <Field label="এলাকা / থানা">
        <input
          type="text"
          value={form.area}
          onChange={handleChange("area")}
          placeholder="যেমনঃ ধানমন্ডি, ঢাকা"
          className={inputClass}
        />
      </Field>

      <Field label="সম্পূর্ণ ঠিকানা">
        <textarea
          value={form.address}
          onChange={handleChange("address")}
          placeholder="বাসা/হোল্ডিং নম্বর, রোড, এলাকা"
          rows={3}
          className={inputClass}
        />
      </Field>

      <Field label="পছন্দের প্যাকেজ">
        <select value={form.packageId} onChange={handleChange("packageId")} className={inputClass}>
          <option value="">প্যাকেজ নির্বাচন করুন</option>
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.name} — ৳{pkg.price}/{pkg.period}
            </option>
          ))}
        </select>
      </Field>

      <Button type="submit" className="mt-2 w-full">
        অনুরোধ পাঠান
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
