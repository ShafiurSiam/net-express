// Partners shown in the homepage "Our Partners" trust section.
// We only list companies we actually have a real relationship with — do not
// add placeholder/aspirational partners here.
//
// `partnerCategories`: filter groups, kept even when a category currently has
// zero partners (e.g. "peering", "technology" can be added later). The UI only
// renders a tab/label for a category that has at least one partner — see
// PartnersSection.jsx.
//
// Shape of one `partners` entry: { id (unique string), name (kept in Latin
// script — real proper noun, not translated), category (must match a
// partnerCategories id), logoSrc (optional, unset for now) }.
//
// No real logo image files exist yet, so cards render a styled text wordmark
// of `name` by default. To swap in a real logo later: put the image at
// src/assets/images/partners/<file>, import it in this file, and set
// `logoSrc` on that partner's entry — PartnerCard.jsx already renders an
// <img> from logoSrc when present, falling back to the text wordmark
// otherwise. No component changes needed. Rendered by PartnersSection.jsx.
export const partnerCategories = [
  { id: "iig-upstream", label: { bn: "আইআইজি / আপস্ট্রিম", en: "IIG / Upstream" } },
  { id: "nttn", label: { bn: "এনটিটিএন", en: "NTTN" } },
  // Leave room to add "peering" and "technology" later — do not remove a
  // category just because it's empty.
];

export const partners = [
  { id: "level-3", name: "Level 3", category: "iig-upstream", logoSrc: undefined },
  { id: "summit-communications", name: "Summit Communications", category: "nttn", logoSrc: undefined },
  { id: "fiber-at-home", name: "Fiber@Home", category: "nttn", logoSrc: undefined },
];
