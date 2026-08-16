// SME & Corporate plan pricing is negotiated per client, so unlike src/data/packages.js
// there is no bn/en split here — this section is intentionally English-only.
//
// Shape: `smePlans.heading`/`subheading` are plain strings for the section title.
// Each `smePlans.plans` entry: { id (unique string), name, speed, description
// (plain strings), ctaLabel (button text), ctaType ("negotiable" opens the
// connection-request modal via onSelect, "contact" links straight to /contact),
// highlighted (boolean — shows the "Recommended" badge and a red-bordered card,
// see SMEPlanCard.jsx). Rendered by SMEPlanCard.jsx.
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
    },
    {
      id: "sme-advance",
      name: "SME Advance",
      speed: "75 Mbps",
      description: "Dedicated Internet",
      ctaLabel: "Negotiable",
      ctaType: "negotiable",
      highlighted: false,
    },
    {
      id: "sme-pro",
      name: "SME Pro",
      speed: "100 Mbps",
      description: "Dedicated Internet",
      ctaLabel: "Negotiable",
      ctaType: "negotiable",
      highlighted: false,
    },
    {
      id: "corporate-power",
      name: "Corporate Power",
      speed: "200+ Mbps",
      description: "SLA & Priority Support",
      ctaLabel: "Contact Sales",
      ctaType: "contact",
      highlighted: true,
    },
  ],
};
