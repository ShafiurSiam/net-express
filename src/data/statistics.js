// Trust/statistics section values.
// IMPORTANT: These are clearly-marked PLACEHOLDER figures — replace with real
// company data once available. Do not present these as verified facts.
// `value`/`suffix` are stored as plain Arabic-numeral text and formatted via
// formatNumber(value, language) at render time; only `label` needs {bn, en}.
//
// Shape of one entry: { id (unique string), value (plain number, animated by
// CountUp), suffix (plain string appended after the number, e.g. "+" or "%+"),
// label ({ bn, en }), placeholder (boolean — flags demo data, not read by any
// component; documentation only). Rendered by StatsSection.jsx.
export const statistics = [
  { id: "customers", value: 1000, suffix: "+", label: { bn: "সন্তুষ্ট গ্রাহক", en: "Happy Customers" }, placeholder: true },
  { id: "uptime", value: 99, suffix: "%+", label: { bn: "নেটওয়ার্ক আপটাইম", en: "Network Uptime" }, placeholder: true },
  { id: "support", value: 24, suffix: "/7", label: { bn: "কাস্টমার সাপোর্ট", en: "Customer Support" }, placeholder: true },
  { id: "experience", value: 10, suffix: "+", label: { bn: "বছরের অভিজ্ঞতা", en: "Years of Experience" }, placeholder: true },
];
