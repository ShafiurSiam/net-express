// Internet package pricing & features.
// To change prices, features, or add a new package, edit this file only —
// PackagesSection / PackageCard render whatever is listed here.
// Every human-readable field is { bn, en }; components pick the active
// language via `field[language]` from useLanguage().
import { toBanglaDigits } from "../i18n/numerals.js";

export const packages = [
  {
    id: "home-5",
    category: "home",
    name: { bn: `${toBanglaDigits(5)} Mbps`, en: "5 Mbps" },
    speedValue: 5,
    price: { bn: toBanglaDigits(500), en: "500" },
    period: { bn: "মাস", en: "month" },
    features: {
      bn: ["ব্রাউজিং ও সোশ্যাল মিডিয়ার জন্য উপযুক্ত", "আনলিমিটেড ডেটা", "ফ্রি ইনস্টলেশন"],
      en: ["Suitable for browsing & social media", "Unlimited data", "Free installation"],
    },
    popular: false,
  },
  {
    id: "home-10",
    category: "home",
    name: { bn: `${toBanglaDigits(10)} Mbps`, en: "10 Mbps" },
    speedValue: 10,
    price: { bn: toBanglaDigits(700), en: "700" },
    period: { bn: "মাস", en: "month" },
    features: {
      bn: ["দ্রুত ব্রাউজিং", "HD ভিডিও স্ট্রিমিং", "আনলিমিটেড ডেটা", "ফ্রি ইনস্টলেশন"],
      en: ["Fast browsing", "HD video streaming", "Unlimited data", "Free installation"],
    },
    popular: false,
  },
  {
    id: "home-20",
    category: "home",
    name: { bn: `${toBanglaDigits(20)} Mbps`, en: "20 Mbps" },
    speedValue: 20,
    price: { bn: toBanglaDigits(900), en: "900" },
    period: { bn: "মাস", en: "month" },
    features: {
      bn: ["দ্রুত ব্রডব্যান্ড", "HD ভিডিও স্ট্রিমিং", "অনলাইন ক্লাস ও গেমিং", "২৪/৭ সাপোর্ট"],
      en: ["Fast broadband", "HD video streaming", "Online classes & gaming", "24/7 support"],
    },
    popular: true,
  },
  {
    id: "home-30",
    category: "home",
    name: { bn: `${toBanglaDigits(30)} Mbps`, en: "30 Mbps" },
    speedValue: 30,
    price: { bn: toBanglaDigits(1200), en: "1200" },
    period: { bn: "মাস", en: "month" },
    features: {
      bn: ["অতি দ্রুত ব্রডব্যান্ড", "4K ভিডিও স্ট্রিমিং", "মাল্টি-ডিভাইস সাপোর্ট", "২৪/৭ সাপোর্ট"],
      en: ["Ultra-fast broadband", "4K video streaming", "Multi-device support", "24/7 support"],
    },
    popular: false,
  },
  {
    id: "home-40",
    category: "home",
    name: { bn: `${toBanglaDigits(40)} Mbps`, en: "40 Mbps" },
    speedValue: 40,
    price: { bn: toBanglaDigits(1800), en: "1800" },
    period: { bn: "মাস", en: "month" },
    features: {
      bn: ["প্রিমিয়াম গতি", "4K স্ট্রিমিং ও হেভি গেমিং", "একাধিক ডিভাইসে ব্যবহার", "অগ্রাধিকার সাপোর্ট"],
      en: ["Premium speed", "4K streaming & heavy gaming", "Use across multiple devices", "Priority support"],
    },
    popular: false,
  },
  {
    id: "business-100",
    category: "business",
    name: { bn: `${toBanglaDigits(100)} Mbps বিজনেস`, en: "100 Mbps Business" },
    speedValue: 100,
    price: { bn: toBanglaDigits(5000), en: "5000" },
    period: { bn: "মাস", en: "month" },
    features: {
      bn: ["ডেডিকেটেড ব্যান্ডউইথ", "স্ট্যাটিক আইপি", "৯৯.৯% আপটাইম নিশ্চয়তা", "অগ্রাধিকার সাপোর্ট (২৪/৭)"],
      en: ["Dedicated bandwidth", "Static IP", "99.9% uptime guarantee", "Priority support (24/7)"],
    },
    popular: false,
    staticIp: true,
  },
];

export const packageCategories = [
  { id: "home", label: { bn: "বাসার প্যাকেজ", en: "Home Packages" } },
  { id: "business", label: { bn: "বিজনেস / এন্টারপ্রাইজ", en: "Business / Enterprise" } },
];
