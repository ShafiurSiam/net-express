// Internet package pricing & features.
// To change prices, features, or add a new package, edit this file only —
// PackagesSection / PackageCard render whatever is listed here.
// Every human-readable field is { bn, en }; components pick the active
// language via `field[language]` from useLanguage().
import { toBanglaDigits } from "../i18n/numerals.js";

const sharedFeatures = {
  bn: [
    "হাই-স্পিড BDIX ও CDN কানেক্টিভিটি",
    "৪K কোয়ালিটিতে ইউটিউব ও ফেসবুক স্ট্রিমিং",
    "আনলিমিটেড ৪K ভিডিও কলিং",
    "Optical Fiber Connection (FTTH)",
    "শুধুমাত্র IPv6 পাবলিক আইপি",
    "লো ল্যাটেন্সি গেমিং",
    "২৪/৭ ফোন ও অনলাইন সাপোর্ট",
    "১:৮ কানেকশন রেশিও",
  ],
  en: [
    "High-speed BDIX & CDN connectivity",
    "4K-quality YouTube & Facebook streaming",
    "Unlimited 4K video calling",
    "Optical Fiber Connection (FTTH)",
    "IPv6 public IP only",
    "Low-latency gaming",
    "24/7 phone & online support",
    "1:8 connection ratio",
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
    whatsNew: {
      bn: "আনলিমিটেড FUP — অনলাইন ক্লাস, রিলস আর গ্রুপ স্টাডির জন্য পারফেক্ট",
      en: "Unlimited FUP — perfect for online classes, reels, and group study",
    },
    features: sharedFeatures,
    popular: false,
  },
  {
    id: "turbo-45",
    category: "home",
    tag: null,
    name: { bn: "TURBO", en: "TURBO" },
    speed: { bn: `${toBanglaDigits(45)} Mbps`, en: "45 Mbps" },
    speedValue: 45,
    price: { bn: toBanglaDigits(735), en: "735" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "মাল্টি-ডিভাইস কাভারেজ বুস্ট — একসাথে ৪-৫টি ডিভাইসে স্ট্রিমিং, স্টাডি ও স্ক্রলিং, কোনো স্লো-ডাউন নেই",
      en: "Multi-device coverage boost — stream, study, and scroll on 4-5 devices at once, zero slowdown",
    },
    features: sharedFeatures,
    popular: false,
  },
  {
    id: "pro-60",
    category: "home",
    tag: null,
    name: { bn: "PRO", en: "PRO" },
    speed: { bn: `${toBanglaDigits(60)} Mbps`, en: "60 Mbps" },
    speedValue: 60,
    price: { bn: toBanglaDigits(840), en: "840" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "ওয়ার্ক-ফ্রম-হোম রেডি — জুম, গুগল মিট ও ক্লাউড আপলোডের জন্য প্রায়োরিটি ব্যান্ডউইথ",
      en: "Work-from-home ready — priority bandwidth for Zoom, Google Meet, and cloud uploads",
    },
    features: sharedFeatures,
    popular: false,
  },
  {
    id: "blaze-100",
    category: "home",
    tag: { bn: "Gaming", en: "Gaming" },
    name: { bn: "BLAZE", en: "BLAZE" },
    speed: { bn: `${toBanglaDigits(100)} Mbps`, en: "100 Mbps" },
    speedValue: 100,
    price: { bn: toBanglaDigits(1050), en: "1050" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "ডেডিকেটেড গেমিং রুট — PUBG, Valorant, Free Fire-এ ১০ms-এর নিচে পিং প্রায়োরিটি",
      en: "Dedicated gaming route — sub-10ms priority ping on PUBG, Valorant, and Free Fire",
    },
    features: sharedFeatures,
    popular: true,
  },
  {
    id: "velocity-200",
    category: "business",
    tag: null,
    name: { bn: "VELOCITY", en: "VELOCITY" },
    speed: { bn: `${toBanglaDigits(200)} Mbps`, en: "200 Mbps" },
    speedValue: 200,
    price: { bn: toBanglaDigits(2100), en: "2100" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "ফ্রি স্ট্যাটিক আইপি + ৯৯.৯% আপটাইম SLA — বাড়ন্ত ব্যবসার জন্য তৈরি",
      en: "Free static IP + 99.9% uptime SLA — built for growing businesses",
    },
    features: sharedFeatures,
    popular: false,
  },
  {
    id: "storm-300",
    category: "business",
    tag: null,
    name: { bn: "STORM", en: "STORM" },
    speed: { bn: `${toBanglaDigits(300)} Mbps`, en: "300 Mbps" },
    speedValue: 300,
    price: { bn: toBanglaDigits(3150), en: "3150" },
    period: { bn: "মাস", en: "month" },
    vatNote: { bn: "(৫% ভ্যাটসহ)", en: "(VAT 5% included)" },
    whatsNew: {
      bn: "ডেডিকেটেড ব্যান্ডউইথ, কোনো শেয়ারিং নেই — এন্টারপ্রাইজ-গ্রেড নির্ভরযোগ্যতা ও প্রায়োরিটি NOC সাপোর্ট সহ",
      en: "Dedicated bandwidth, zero sharing — enterprise-grade reliability with priority NOC support",
    },
    features: sharedFeatures,
    popular: false,
  },
];

export const packageCategories = [
  { id: "home", label: { bn: "হোম প্যাকেজ", en: "Home Packages" } },
  { id: "business", label: { bn: "বিজনেস / এন্টারপ্রাইজ প্যাকেজ", en: "Business / Enterprise Packages" } },
];
