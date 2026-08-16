// Global site metadata used for page titles, meta descriptions, and Open Graph tags.
// Shape: a single `site` object (not a list) — titleSuffix (plain string, appended
// to every page <title>), defaultTitle/defaultDescription ({ bn, en } pairs, used
// as SEO fallbacks when a page doesn't set its own), url/ogImage/themeColor (plain
// strings), locale ({ bn, en } BCP-47 tags for the <html lang> / OG locale tag).
export const site = {
  titleSuffix: "Net Express",
  defaultTitle: {
    bn: "Net Express | বাংলাদেশের নির্ভরযোগ্য ইন্টারনেট সেবা",
    en: "Net Express | Bangladesh's Reliable Internet Service",
  },
  defaultDescription: {
    bn: "Net Express — দ্রুতগতির, নির্ভরযোগ্য ও সাশ্রয়ী মূল্যের ব্রডব্যান্ড ইন্টারনেট সংযোগ। আজই আপনার এলাকায় সংযোগ নিন।",
    en: "Net Express — fast, reliable, and affordable broadband internet connection. Get connected in your area today.",
  },
  url: import.meta.env.VITE_SITE_URL || "https://netexpress.example.com",
  ogImage: "/og-image.svg",
  locale: { bn: "bn_BD", en: "en_US" },
  themeColor: "#C8102E",
};
