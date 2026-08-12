// Internet package pricing & features.
// To change prices, features, or add a new package, edit this file only —
// PackagesSection / PackageCard render whatever is listed here.
export const packages = [
  {
    id: "home-5",
    category: "home",
    name: "৫ Mbps",
    speedValue: 5,
    price: "৫০০",
    period: "মাস",
    features: ["ব্রাউজিং ও সোশ্যাল মিডিয়ার জন্য উপযুক্ত", "আনলিমিটেড ডেটা", "ফ্রি ইনস্টলেশন"],
    popular: false,
  },
  {
    id: "home-10",
    category: "home",
    name: "১০ Mbps",
    speedValue: 10,
    price: "৭০০",
    period: "মাস",
    features: ["দ্রুত ব্রাউজিং", "HD ভিডিও স্ট্রিমিং", "আনলিমিটেড ডেটা", "ফ্রি ইনস্টলেশন"],
    popular: false,
  },
  {
    id: "home-20",
    category: "home",
    name: "২০ Mbps",
    speedValue: 20,
    price: "৯০০",
    period: "মাস",
    features: [
      "দ্রুত ব্রডব্যান্ড",
      "HD ভিডিও স্ট্রিমিং",
      "অনলাইন ক্লাস ও গেমিং",
      "২৪/৭ সাপোর্ট",
    ],
    popular: true,
  },
  {
    id: "home-30",
    category: "home",
    name: "৩০ Mbps",
    speedValue: 30,
    price: "১২০০",
    period: "মাস",
    features: [
      "অতি দ্রুত ব্রডব্যান্ড",
      "4K ভিডিও স্ট্রিমিং",
      "মাল্টি-ডিভাইস সাপোর্ট",
      "২৪/৭ সাপোর্ট",
    ],
    popular: false,
  },
  {
    id: "home-40",
    category: "home",
    name: "৪০ Mbps",
    speedValue: 40,
    price: "১৮০০",
    period: "মাস",
    features: [
      "প্রিমিয়াম গতি",
      "4K স্ট্রিমিং ও হেভি গেমিং",
      "একাধিক ডিভাইসে ব্যবহার",
      "অগ্রাধিকার সাপোর্ট",
    ],
    popular: false,
  },
  {
    id: "business-100",
    category: "business",
    name: "১০০ Mbps বিজনেস",
    speedValue: 100,
    price: "৫০০০",
    period: "মাস",
    features: [
      "ডেডিকেটেড ব্যান্ডউইথ",
      "স্ট্যাটিক আইপি",
      "৯৯.৯% আপটাইম নিশ্চয়তা",
      "অগ্রাধিকার সাপোর্ট (২৪/৭)",
    ],
    popular: false,
    staticIp: true,
  },
];

export const packageCategories = [
  { id: "home", label: "বাসার প্যাকেজ" },
  { id: "business", label: "বিজনেস / এন্টারপ্রাইজ" },
];
