// Partners shown in the homepage "Our Partners" trust section.
// We only list companies we actually have a real relationship with — do not
// add placeholder/aspirational partners here.
//
// Logos live at src/assets/images/partners/ and are bundled locally like
// every other image in this project (never hotlinked). Most are official
// brand marks sourced from Wikimedia Commons (for the global vendor/peering
// names) or downloaded directly from the partner's own official site (for
// the Bangladeshi names) — see the "Partner logos" note in README.md.
// These are third-party trademarks used here to indicate a real technology
// or network relationship (upstream transit, peering, equipment vendor, or
// transmission network operator) — not to imply endorsement by those
// companies.
//
// level-3.png and fiber-at-home.png were supplied directly by Siam (their
// official sites were unreachable/had no sourceable logo during the initial
// automated pass). level-3.png is cropped from a promotional banner rather
// than an isolated logo file, so it keeps a photographic background unlike
// the other cards' clean white/transparent marks — swap in a cleaner asset
// later if one turns up, same `logoSrc` mechanism.
import level3Logo from "../assets/images/partners/level-3.png";
import summitLogo from "../assets/images/partners/summit.png";
import bdixLogo from "../assets/images/partners/bdix.png";
import googleLogo from "../assets/images/partners/google.svg";
import facebookLogo from "../assets/images/partners/facebook.svg";
import ispabLogo from "../assets/images/partners/ispab.png";
import ciscoLogo from "../assets/images/partners/cisco.svg";
import juniperLogo from "../assets/images/partners/juniper.svg";
import huaweiLogo from "../assets/images/partners/huawei.svg";
import dellLogo from "../assets/images/partners/dell.svg";
import bdcomLogo from "../assets/images/partners/bdcom.png";
import mikrotikLogo from "../assets/images/partners/mikrotik.svg";
import fiberAtHomeLogo from "../assets/images/partners/fiber-at-home.png";

// Filter categories for the tab bar. `icon` is a lucide-react icon name,
// resolved to a component in PartnersSection.jsx. Kept even if a category
// were ever empty — the tab only renders once at least one partner is
// assigned to it (see PartnersSection.jsx).
export const partnerCategories = [
  { id: "iig-upstream", label: "IIG / আপস্ট্রিম", icon: "Globe" },
  { id: "peering", label: "পিয়ারিং", icon: "Share2" },
  { id: "technology", label: "প্রযুক্তি", icon: "Cpu" },
  { id: "nttn", label: "NTTN", icon: "GitFork" },
];

// Shape of one entry: { id (unique string), name (kept in Latin script —
// real proper noun, not translated), categories (array of
// partnerCategories ids — a partner can belong to more than one tab, e.g.
// Summit Communications is a real dual-role IIG/Upstream + NTTN operator,
// not a data-entry mistake), logoSrc (imported image, or undefined to fall
// back to a text wordmark) }. Rendered by PartnersSection.jsx.
export const partners = [
  { id: "level-3", name: "Level 3", categories: ["iig-upstream"], logoSrc: level3Logo },
  { id: "summit", name: "Summit Communications", categories: ["iig-upstream", "nttn"], logoSrc: summitLogo },
  { id: "bdix", name: "BDIX", categories: ["peering"], logoSrc: bdixLogo },
  { id: "google", name: "Google", categories: ["peering"], logoSrc: googleLogo },
  { id: "facebook", name: "Facebook", categories: ["peering"], logoSrc: facebookLogo },
  { id: "ispab", name: "ISPAB", categories: ["peering"], logoSrc: ispabLogo },
  { id: "cisco", name: "Cisco", categories: ["technology"], logoSrc: ciscoLogo },
  { id: "juniper", name: "Juniper", categories: ["technology"], logoSrc: juniperLogo },
  { id: "huawei", name: "Huawei", categories: ["technology"], logoSrc: huaweiLogo },
  { id: "dell", name: "Dell Technologies", categories: ["technology"], logoSrc: dellLogo },
  { id: "bdcom", name: "BDCOM", categories: ["technology"], logoSrc: bdcomLogo },
  { id: "mikrotik", name: "MikroTik", categories: ["technology"], logoSrc: mikrotikLogo },
  { id: "fiber-at-home", name: "Fiber@Home", categories: ["nttn"], logoSrc: fiberAtHomeLogo },
];
