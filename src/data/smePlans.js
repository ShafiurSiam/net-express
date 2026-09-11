// SME & Corporate plan pricing is negotiated per client, so unlike src/data/packages.js
// there is no bn/en split here — this section is intentionally English-only.
//
// Shape: `smePlans.heading`/`subheading` are plain strings for the section title.
// Each `smePlans.plans` entry: { id (unique string), name, speed, description
// (plain strings), ctaLabel (button text), ctaType ("negotiable" opens the
// connection-request modal via onSelect, "contact" links straight to /contact),
// highlighted (boolean — shows the "Recommended" badge and a red-bordered card,
// see SMEPlanCard.jsx), contentionRatio/bdixCache/realIp ({ bn, en } pairs —
// deliberate exception to this file's English-only rule: these three feed the
// /packages comparison table, which is Bangla-first like the rest of that page,
// so they need both languages even though name/description/ctaLabel stay
// English-only per this file's original design intent). None of the three is
// stated anywhere in the existing plan data (there's no features list here to
// derive from) — contentionRatio/bdixCache are grounded in each plan's own
// "Dedicated Internet" / "SLA & Priority Support" description, and realIp is
// honestly marked as available-on-request/contact-us rather than asserting a
// fixed inclusion nothing in the data supports. Rendered by SMEPlanCard.jsx.
export const smePlans = {
  heading: "SME & Corporate Plans",
  subheading: "Dedicated bandwidth for your business needs",
  plans: [
    {
      id: "sme-essential",
      name: "SME Essential",
      speed: "50 Mbps",
      description: "Dedicated Internet",
      ctaLabel: "Negotiable",
      ctaType: "negotiable",
      highlighted: false,
      contentionRatio: { bn: "১:১ ডেডিকেটেড", en: "1:1 Dedicated" },
      bdixCache: { bn: "ডেডিকেটেড IX", en: "Dedicated IX" },
      realIp: { bn: "অনুরোধে উপলব্ধ", en: "Available on request" },
    },
    {
      id: "sme-advance",
      name: "SME Advance",
      speed: "75 Mbps",
      description: "Dedicated Internet",
      ctaLabel: "Negotiable",
      ctaType: "negotiable",
      highlighted: false,
      contentionRatio: { bn: "১:১ ডেডিকেটেড", en: "1:1 Dedicated" },
      bdixCache: { bn: "ডেডিকেটেড IX", en: "Dedicated IX" },
      realIp: { bn: "অনুরোধে উপলব্ধ", en: "Available on request" },
    },
    {
      id: "sme-pro",
      name: "SME Pro",
      speed: "100 Mbps",
      description: "Dedicated Internet",
      ctaLabel: "Negotiable",
      ctaType: "negotiable",
      highlighted: false,
      contentionRatio: { bn: "১:১ ডেডিকেটেড", en: "1:1 Dedicated" },
      bdixCache: { bn: "ডেডিকেটেড IX", en: "Dedicated IX" },
      realIp: { bn: "অনুরোধে উপলব্ধ", en: "Available on request" },
    },
    {
      id: "corporate-power",
      name: "Corporate Power",
      speed: "200+ Mbps",
      description: "SLA & Priority Support",
      ctaLabel: "Contact Sales",
      ctaType: "contact",
      highlighted: true,
      contentionRatio: { bn: "১:১ ডেডিকেটেড (SLA)", en: "1:1 Dedicated (SLA)" },
      bdixCache: { bn: "ডেডিকেটেড IX", en: "Dedicated IX" },
      realIp: { bn: "যোগাযোগ করুন", en: "Contact us" },
    },
  ],
};
