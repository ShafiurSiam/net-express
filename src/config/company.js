// Central source of truth for company identity & contact details.
// Edit values here to update them everywhere across the site (navbar, footer, contact page, meta tags).
// Human-readable fields are { bn, en }; numeric fields stay plain and are
// formatted with formatNumber(value, language) at render time.
//
// Shape of this file: a single `company` object (not a list), fields include —
// name/nameBangla (plain strings), tagline/shortDescription/address/
// workingHours ({ bn, en } pairs), supportPhone/billingPhone (plain digit
// strings — two separate, clearly labelled numbers; there is no single general
// "phone" field any more), email/
// supportEmail (plain strings, no bn/en split since they're not translated),
// foundedYear/copyrightYear (plain numbers), and logo/logoWhite (imported SVG
// asset URLs — the only place the logo files should be imported from; Navbar,
// MobileMenu and Footer read them from here rather than importing the assets
// directly, per spec section 51.1).
import logo from "../assets/logo/logo.svg";
import logoWhite from "../assets/logo/logo-white.svg";

export const company = {
  name: "Net Express",
  nameBangla: "নেট এক্সপ্রেস",
  tagline: { bn: "আপনার গতির সাথী", en: "Your Speed Companion" },
  shortDescription: {
    bn: "একটি আধুনিক, নির্ভরযোগ্য ও প্রযুক্তিনির্ভর বাংলাদেশের ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান।",
    en: "A modern, reliable, and technology-driven internet service provider in Bangladesh.",
  },
  // Two separate contact numbers, each rendered with its own label everywhere:
  // supportPhone is the general "call us" number; billingPhone is only for
  // billing enquiries and must never be shown as a generic contact number.
  supportPhone: "01842775508",
  billingPhone: "01877630296",
  email: "info@netexpress.example.com",
  supportEmail: "support@netexpress.example.com",
  // Deliberate exception to the site's Bangla-first rule (same as the SME & Corporate Plans
  // section): the address value stays in English in both languages; only labels around it are Bangla.
  address: {
    bn: "18, Dulah Miah Biponi Bitan (Noakhali Potti), Tongi Bazar, Gazipur 1710",
    en: "18, Dulah Miah Biponi Bitan (Noakhali Potti), Tongi Bazar, Gazipur 1710",
  },
  workingHours: { bn: "সকাল ৯টা - রাত ১০টা (সব দিন)", en: "9:00 AM - 10:00 PM (all days)" },
  foundedYear: 2026,
  copyrightYear: 2026,
  logo,
  logoWhite,
};
