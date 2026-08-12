// Promotional offers shown on the homepage and /offers page.
// Each offer's image lives at src/assets/images/offers/offer-0N.svg — swap the file
// (keep the same filename) to change the artwork, and edit the fields below for copy.
import offer01 from "../assets/images/offers/offer-01.svg";
import offer02 from "../assets/images/offers/offer-02.svg";
import offer03 from "../assets/images/offers/offer-03.svg";

export const offers = [
  {
    id: "offer-01",
    image: offer01,
    badge: "নতুন সংযোগ",
    title: "ইনস্টলেশন সম্পূর্ণ ফ্রি",
    description: "নতুন সংযোগ নিলে এখনই পাচ্ছেন সম্পূর্ণ ফ্রি ইনস্টলেশন, কোনো লুকানো খরচ নেই।",
    validity: "[অফারের মেয়াদ লিখুন]",
  },
  {
    id: "offer-02",
    image: offer02,
    badge: "আপগ্রেড অফার",
    title: "১ মাস অতিরিক্ত ফ্রি",
    description: "৬ মাসের প্যাকেজ অগ্রিম পরিশোধ করলে পাবেন ১ মাস সম্পূর্ণ ফ্রি।",
    validity: "[অফারের মেয়াদ লিখুন]",
  },
  {
    id: "offer-03",
    image: offer03,
    badge: "রেফারেল অফার",
    title: "বন্ধুকে রেফার করুন, বিল ছাড় পান",
    description: "আপনার রেফারেন্সে নতুন গ্রাহক যুক্ত হলে উভয়েই পাবেন পরবর্তী বিলে ছাড়।",
    validity: "[অফারের মেয়াদ লিখুন]",
  },
];
