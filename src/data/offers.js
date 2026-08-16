// Promotional offers shown on the homepage and /offers page.
// Each offer's image lives at src/assets/images/offers/offer-0N.svg — swap the file
// (keep the same filename) to change the artwork, and edit the fields below for copy.
//
// Shape of one `offers` entry: { id (unique string), image (imported SVG, see the
// import lines above), badge/title/description/validity ({ bn, en } pairs) }.
// Rendered by OfferCard.jsx.
import offer01 from "../assets/images/offers/offer-01.svg";
import offer02 from "../assets/images/offers/offer-02.svg";
import offer03 from "../assets/images/offers/offer-03.svg";

export const offers = [
  {
    id: "offer-01",
    image: offer01,
    badge: { bn: "নতুন সংযোগ", en: "New Connection" },
    title: { bn: "ইনস্টলেশন সম্পূর্ণ ফ্রি", en: "Installation Completely Free" },
    description: {
      bn: "নতুন সংযোগ নিলে এখনই পাচ্ছেন সম্পূর্ণ ফ্রি ইনস্টলেশন, কোনো লুকানো খরচ নেই।",
      en: "Get a new connection now and enjoy completely free installation — no hidden costs.",
    },
    validity: { bn: "[অফারের মেয়াদ লিখুন]", en: "[Enter offer validity]" },
  },
  {
    id: "offer-02",
    image: offer02,
    badge: { bn: "আপগ্রেড অফার", en: "Upgrade Offer" },
    title: { bn: "১ মাস অতিরিক্ত ফ্রি", en: "1 Extra Month Free" },
    description: {
      bn: "৬ মাসের প্যাকেজ অগ্রিম পরিশোধ করলে পাবেন ১ মাস সম্পূর্ণ ফ্রি।",
      en: "Prepay for a 6-month package and get 1 month completely free.",
    },
    validity: { bn: "[অফারের মেয়াদ লিখুন]", en: "[Enter offer validity]" },
  },
  {
    id: "offer-03",
    image: offer03,
    badge: { bn: "রেফারেল অফার", en: "Referral Offer" },
    title: { bn: "বন্ধুকে রেফার করুন, বিল ছাড় পান", en: "Refer a Friend, Get a Bill Discount" },
    description: {
      bn: "আপনার রেফারেন্সে নতুন গ্রাহক যুক্ত হলে উভয়েই পাবেন পরবর্তী বিলে ছাড়।",
      en: "When a new customer joins through your referral, you both get a discount on your next bill.",
    },
    validity: { bn: "[অফারের মেয়াদ লিখুন]", en: "[Enter offer validity]" },
  },
];
