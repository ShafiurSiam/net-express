// Central source of truth for company identity & contact details.
// Edit values here to update them everywhere across the site (navbar, footer, contact page, meta tags).
// Human-readable fields are { bn, en }; numeric fields stay plain and are
// formatted with formatNumber(value, language) at render time.
//
// Shape of this file: a single `company` object (not a list), fields include —
// name/nameBangla (plain strings), tagline/shortDescription/phone/address/
// btrcLicense/workingHours ({ bn, en } pairs), phoneRaw/hotline/email/
// supportEmail (plain strings, no bn/en split since they're not translated),
// and foundedYear/copyrightYear (plain numbers).
export const company = {
  name: "Net Express",
  nameBangla: "নেট এক্সপ্রেস",
  tagline: { bn: "আপনার গতির সাথী", en: "Your Speed Companion" },
  shortDescription: {
    bn: "একটি আধুনিক, নির্ভরযোগ্য ও প্রযুক্তিনির্ভর বাংলাদেশের ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান।",
    en: "A modern, reliable, and technology-driven internet service provider in Bangladesh.",
  },
  phone: { bn: "[ফোন নম্বর লিখুন]", en: "[Enter phone number]" },
  phoneRaw: "01XXXXXXXXX",
  hotline: "16XXX",
  email: "info@netexpress.example.com",
  supportEmail: "support@netexpress.example.com",
  address: { bn: "[অফিসের ঠিকানা লিখুন], ঢাকা, বাংলাদেশ", en: "[Enter office address], Dhaka, Bangladesh" },
  btrcLicense: { bn: "[BTRC লাইসেন্স নম্বর]", en: "[BTRC License Number]" },
  workingHours: { bn: "সকাল ৯টা - রাত ১০টা (সব দিন)", en: "9:00 AM - 10:00 PM (all days)" },
  foundedYear: 2026,
  copyrightYear: 2026,
};
