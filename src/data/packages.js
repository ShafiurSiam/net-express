// Internet package pricing & features.
// To change prices, features, or add a new package, edit this file only —
// PackagesSection / PackageCard render whatever is listed here.
// Every human-readable field is { bn, en }; components pick the active
// language via `field[language]` from useLanguage().
//
// Shape of one `packages` entry: { id (unique string), category ("home" |
// "gaming" | "business"), tag ({ bn, en } small badge, or null), name/speed/
// price/period/vatNote ({ bn, en } pairs), speedValue (plain number, used for
// sorting), whatsNew ({ bn, en } highlight callout, or null), features ({ bn:
// [...], en: [...] } — arrays of feature lines, order must match between the two
// languages since PackageCard picks the feature icon from the English line at
// the same index), popular (boolean, shows the "Most Popular" badge),
// contentionRatio/bdixCache/realIp ({ bn, en } pairs — short structured values
// for the /packages comparison table; see ComparisonTable.jsx). These three are
// deliberately NOT derived from `features` at render time — feature lists differ
// in wording/length/order between tiers, so string-matching them for a table cell
// is fragile. Each value below is transcribed from (or, where nothing in a
// package's features says anything on the topic, honestly marked "—" instead of
// guessed) that same package's own `features` line — see the inline comment on
// each entry for exactly which feature line it came from.
// vatNote is optional per entry — PackageCard only renders it when present.
import { toBanglaDigits } from "../i18n/numerals.js";

// GEN Z through BLAZE all share `shortFeatures` verbatim — nothing in the data
// distinguishes an "entry" vs "standard" home tier, so all six home packages get
// identical comparison-table values. Contention ratio is taken straight from
// shortFeatures' own "১:৮ কানেকশন রেশিও" line. BDIX/cache and real-IP status
// aren't part of any home package's features array (only gaming/business
// mention BDIX or real IP) — bdixCache instead reflects the sitewide "হাই-স্পিড
// BDIX ও ক্যাশ সার্ভার অ্যাক্সেস" promise already made in the Packages page's
// feature highlight bar (see packagesPage.highlights in translations.js), and
// realIp points at the same "রিয়েল স্ট্যাটিক পাবলিক আইপি" on-request add-on
// already listed in the add-ons section (src/data/addons.js), since none of
// these six tiers include a static/real IP by default.
const homeTierTableFields = {
  contentionRatio: { bn: "১:৮", en: "1:8" },
  bdixCache: { bn: "BDIX ও ক্যাশ অন্তর্ভুক্ত", en: "BDIX & Cache Included" },
  realIp: { bn: "ঐচ্ছিক (এড-অন)", en: "Optional (Add-on)" },
};

// Standard 4-item feature list shared by every Home package.
const shortFeatures = {
  bn: [
    "১:৮ কানেকশন রেশিও",
    "Optical Fiber Connection (FTTH)",
    "আনলিমিটেড ৪K ভিডিও কলিং",
    "২৪/৭ সাপোর্ট",
  ],
  en: [
    "1:8 connection ratio",
    "Optical Fiber Connection (FTTH)",
    "Unlimited 4K video calling",
    "24/7 Support",
  ],
};

export const packages = [
  {
    id: "genz-35",
    category: "home",
    tag: null,
    name: { bn: "GEN Z", en: "GEN Z" },
    speed: { bn: `${toBanglaDigits(35)} Mbps`, en: "35 Mbps" },
    speedValue: 35,
    price: { bn: toBanglaDigits(630), en: "630" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: null,
    features: shortFeatures,
    popular: false,
    ...homeTierTableFields,
  },
  {
    id: "turbo-40",
    category: "home",
    tag: null,
    name: { bn: "TURBO", en: "TURBO" },
    speed: { bn: `${toBanglaDigits(40)} Mbps`, en: "40 Mbps" },
    speedValue: 40,
    price: { bn: toBanglaDigits(735), en: "735" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "মাল্টি-ডিভাইস কাভারেজ বুস্ট — একসাথে ৪-৫টি ডিভাইসে স্ট্রিমিং, স্টাডি ও স্ক্রলিং, কোনো স্লো-ডাউন নেই",
      en: "Multi-device coverage boost — stream, study, and scroll on 4-5 devices at once, zero slowdown",
    },
    features: shortFeatures,
    popular: false,
    ...homeTierTableFields,
  },
  {
    id: "pro-50",
    category: "home",
    tag: null,
    name: { bn: "PRO", en: "PRO" },
    speed: { bn: `${toBanglaDigits(50)} Mbps`, en: "50 Mbps" },
    speedValue: 50,
    price: { bn: toBanglaDigits(840), en: "840" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "সবচেয়ে জনপ্রিয় প্যাকেজ — পুরো পরিবারের জন্য পারফেক্ট স্পিড ও স্কেয়ালিবিলিটি",
      en: "The most popular package — perfect speed and scalability for the whole family",
    },
    features: shortFeatures,
    popular: true,
    ...homeTierTableFields,
  },
  {
    id: "prime-65",
    category: "home",
    tag: null,
    name: { bn: "PRIME", en: "PRIME" },
    speed: { bn: `${toBanglaDigits(65)} Mbps`, en: "65 Mbps" },
    speedValue: 65,
    price: { bn: toBanglaDigits(1050), en: "1050" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "ওয়ার্ক-ফ্রম-হোম রেডি — জুম, গুগল মিট ও ক্লাউড আপলোডের জন্য প্রায়োরিটি ব্যান্ডউইথ",
      en: "Work-from-home ready — priority bandwidth for Zoom, Google Meet, and cloud uploads",
    },
    features: shortFeatures,
    popular: false,
    ...homeTierTableFields,
  },
  {
    id: "ultra-80",
    category: "home",
    tag: null,
    name: { bn: "ULTRA", en: "ULTRA" },
    speed: { bn: `${toBanglaDigits(80)} Mbps`, en: "80 Mbps" },
    speedValue: 80,
    price: { bn: toBanglaDigits(1260), en: "1260" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "স্মার্ট হোম রেডি — একসাথে ৪K স্ট্রিমিং, স্মার্ট ডিভাইস ও ভারী ডাউনলোড, কোনো ল্যাগ ছাড়াই",
      en: "Smart home ready — 4K streaming, smart devices, and heavy downloads at once, zero lag",
    },
    features: shortFeatures,
    popular: false,
    ...homeTierTableFields,
  },
  {
    id: "blaze-100",
    category: "home",
    tag: null,
    name: { bn: "BLAZE", en: "BLAZE" },
    speed: { bn: `${toBanglaDigits(100)} Mbps`, en: "100 Mbps" },
    speedValue: 100,
    price: { bn: toBanglaDigits(1575), en: "1575" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "হাই-স্পিড আপগ্রেড — বড় পরিবার বা মাল্টি-ইউজার বাসার জন্য বাফার-ফ্রি স্ট্রিমিং",
      en: "High-speed upgrade — buffer-free streaming for big families or multi-user homes",
    },
    features: shortFeatures,
    popular: false,
    ...homeTierTableFields,
  },
  {
    id: "gamex-nitro-150",
    category: "gaming",
    tag: { bn: "Gamer", en: "Gamer" },
    name: { bn: "GameX Nitro", en: "GameX Nitro" },
    speed: { bn: `${toBanglaDigits(150)} Mbps`, en: "150 Mbps" },
    speedValue: 150,
    price: { bn: toBanglaDigits(2100), en: "2100" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "সবচেয়ে দ্রুত আনক্যাপড IX গেমিং রুট — Steam, Epic Games ও PSN ডাউনলোডে ফুল স্পিড, জিরো বাফারিং",
      en: "The fastest uncapped IX gaming route — full speed on Steam, Epic Games, and PSN downloads, zero buffering",
    },
    features: {
      bn: [
        "রিয়েল আইপি (IPv4 ও IPv6)",
        "আনক্যাপড স্পিড (IX/গেমিং)",
        "আনমিটার্ড BDIX FTP সার্ভার অ্যাক্সেস",
        "বাফারলেস ইউটিউব/ফেসবুক স্ট্রিমিং",
      ],
      en: [
        "Real IP (IPv4 & IPv6)",
        "Uncapped speed (IX/Gaming)",
        "Unmetered BDIX FTP server access",
        "Bufferless YouTube/Facebook streaming",
      ],
    },
    popular: false,
    // From this package's own features above: "আনক্যাপড স্পিড (IX/গেমিং)" (uncapped,
    // not a fixed ratio), "আনমিটার্ড BDIX FTP সার্ভার অ্যাক্সেস", "রিয়েল আইপি (IPv4 ও IPv6)".
    contentionRatio: { bn: "আনক্যাপড (IX)", en: "Uncapped (IX)" },
    bdixCache: { bn: "আনমিটার্ড BDIX FTP", en: "Unmetered BDIX FTP" },
    realIp: { bn: "অন্তর্ভুক্ত (IPv4 ও IPv6)", en: "Included (IPv4 & IPv6)" },
  },
  {
    id: "freelancer-175",
    category: "business",
    tag: null,
    name: { bn: "FREELANCER", en: "FREELANCER" },
    speed: { bn: `${toBanglaDigits(175)} Mbps`, en: "175 Mbps" },
    speedValue: 175,
    price: { bn: toBanglaDigits(2400), en: "2400" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "রিয়েল আইপি (IPv4 ও IPv6) + হাই আপলোড স্পিড — রিমোট জব, লাইভ স্ট্রিমিং ও বড় ফাইল আপলোডের জন্য তৈরি",
      en: "Real IP (IPv4 & IPv6) + high upload speed — built for remote jobs, live streaming, and large file uploads",
    },
    features: {
      bn: [
        "রিয়েল আইপি (IPv4 ও IPv6)",
        "হাই আপলোড স্পিড",
        "আনক্যাপড BDIX FTP সার্ভার অ্যাক্সেস",
        "২৪/৭ প্রায়োরিটি সাপোর্ট",
      ],
      en: [
        "Real IP (IPv4 & IPv6)",
        "High upload speed",
        "Uncapped BDIX FTP server access",
        "24/7 priority support",
      ],
    },
    popular: false,
    // From this package's own features above: nothing specifies a connection
    // ratio (it's an uncapped-upload product, not a shared-ratio one), so "—"
    // rather than guessing. "আনক্যাপড BDIX FTP সার্ভার অ্যাক্সেস", "রিয়েল আইপি (IPv4 ও IPv6)".
    contentionRatio: { bn: "—", en: "—" },
    bdixCache: { bn: "আনক্যাপড BDIX FTP", en: "Uncapped BDIX FTP" },
    realIp: { bn: "অন্তর্ভুক্ত (IPv4 ও IPv6)", en: "Included (IPv4 & IPv6)" },
  },
];

export const packageCategories = [
  { id: "home", label: { bn: "হোম প্যাকেজ", en: "Home Packages" } },
  { id: "gaming", label: { bn: "গেমিং প্যাকেজ", en: "Gaming Packages" } },
  { id: "business", label: { bn: "ফ্রিল্যান্সার প্যাকেজ", en: "Freelancer Packages" } },
];
