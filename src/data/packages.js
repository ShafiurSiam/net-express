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

// Shorter, tier-specific feature list used by PRO/PRIME/ULTRA/BLAZE.
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
    whatsNew: {
      bn: "আনলিমিটেড FUP — অনলাইন ক্লাস, রিলস আর গ্রুপ স্টাডির জন্য পারফেক্ট",
      en: "Unlimited FUP — perfect for online classes, reels, and group study",
    },
    features: sharedFeatures,
    popular: false,
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
    features: sharedFeatures,
    popular: false,
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
      bn: "ওয়ার্ক-ফ্রম-হোম রেডি — জুম, গুগল মিট ও ক্লাউড আপলোডের জন্য প্রায়োরিটি ব্যান্ডউইথ",
      en: "Work-from-home ready — priority bandwidth for Zoom, Google Meet, and cloud uploads",
    },
    features: shortFeatures,
    popular: false,
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
      bn: "সবচেয়ে জনপ্রিয় প্যাকেজ — পুরো পরিবারের জন্য পারফেক্ট স্পিড ও স্কেয়ালিবিলিটি",
      en: "The most popular package — perfect speed and scalability for the whole family",
    },
    features: shortFeatures,
    popular: true,
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
  },
];

export const packageCategories = [
  { id: "home", label: { bn: "হোম প্যাকেজ", en: "Home Packages" } },
  { id: "gaming", label: { bn: "গেমিং প্যাকেজ", en: "Gaming Packages" } },
  { id: "business", label: { bn: "ফ্রিল্যান্সার প্যাকেজ", en: "Freelancer Packages" } },
];
