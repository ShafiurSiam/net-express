// Optional value-added add-ons shown on the /packages page, below the comparison table.
// None of these have a fixed price yet, so unlike packages.js there is no `price`
// field — each entry shows a status `badge` instead ("চাহিদা অনুযায়ী", etc.) and
// links to /contact for a quote. Update copy/badges here only; do not add prices
// until real add-on pricing exists.
//
// The "web-development" entry is intentionally Bangla in both `bn` and `en` —
// unlike the other entries, its copy does not swap to English when the site
// language is toggled.
//
// Shape of one `addons` entry: { id (unique string), badge/title/description
// ({ bn, en } pairs) }. Icon choice lives in AddonsSection.jsx (parallel array,
// same convention as WhyChooseUsSection), not here.
export const addons = [
  {
    id: "static-ip",
    badge: { bn: "চাহিদা অনুযায়ী উপলব্ধ", en: "Available on request" },
    title: { bn: "রিয়েল স্ট্যাটিক পাবলিক আইপি", en: "Real Static Public IP" },
    description: {
      bn: "সার্ভার হোস্টিং, সিসিটিভি রিমোট ভিউ বা রিমোট অ্যাক্সেসের জন্য একটি স্থায়ী পাবলিক আইপি যোগ করুন।",
      en: "Add a fixed public IP for server hosting, remote CCTV viewing, or remote access.",
    },
  },
  {
    id: "wifi6-router",
    badge: { bn: "বিশেষ ছাড়ে", en: "At a special discount" },
    title: { bn: "ডুয়াল-ব্যান্ড Wi-Fi 6 রাউটার", en: "Dual-Band Wi-Fi 6 Router" },
    description: {
      bn: "সর্বশেষ Wi-Fi 6 প্রযুক্তির রাউটার দিয়ে দ্রুত ও স্থিতিশীল ওয়্যারলেস কভারেজ নিশ্চিত করুন।",
      en: "Get faster, more stable wireless coverage with the latest Wi-Fi 6 router technology.",
    },
  },
  {
    id: "mesh-wifi",
    badge: { bn: "টার্নকি সেটআপ", en: "Turnkey setup" },
    title: { bn: "পুরো বাড়ি জুড়ে মেশ Wi-Fi", en: "Whole-Home Mesh Wi-Fi" },
    description: {
      bn: "বড় বাসা বা একাধিক তলায় ডেড-জোন ছাড়াই পুরো জায়গায় সমান ওয়াই-ফাই কভারেজ পান।",
      en: "Get even Wi-Fi coverage throughout a large home or multi-floor space, with no dead zones.",
    },
  },
  {
    id: "cctv-security",
    badge: { bn: "প্রফেশনাল সেটআপ", en: "Professional setup" },
    title: { bn: "সিসিটিভি ও সিকিউরিটি সেটআপ", en: "CCTV & Security Setup" },
    description: {
      bn: "বাসা বা অফিসের জন্য প্রফেশনাল সিসিটিভি ক্যামেরা ইনস্টলেশন ও রিমোট মনিটরিং সেটআপ।",
      en: "Professional CCTV camera installation and remote monitoring setup for your home or office.",
    },
  },
  {
    id: "web-development",
    badge: { bn: "কাস্টম ডিজাইন", en: "কাস্টম ডিজাইন" },
    title: {
      bn: "ওয়েবসাইট ডেভেলপমেন্ট (পার্সনাল + বিজনেস)",
      en: "ওয়েবসাইট ডেভেলপমেন্ট (পার্সনাল + বিজনেস)",
    },
    description: {
      bn: "আপনার নির্দিষ্ট চাহিদা ও পরিকল্পনা অনুযায়ী তৈরি প্রফেশনাল, সম্পূর্ণ কাস্টম ওয়েবসাইট — ব্যক্তিগত ও ব্যবসায়িক, উভয় প্রয়োজনেই।",
      en: "আপনার নির্দিষ্ট চাহিদা ও পরিকল্পনা অনুযায়ী তৈরি প্রফেশনাল, সম্পূর্ণ কাস্টম ওয়েবসাইট — ব্যক্তিগত ও ব্যবসায়িক, উভয় প্রয়োজনেই।",
    },
  },
];
