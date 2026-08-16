// Customer testimonials — placeholder names/quotes until real reviews are collected.
// Shape of one entry: { id (unique string), name/area/quote ({ bn, en } pairs),
// rating (plain number 1-5, shown as filled stars) }. Designed to render through
// TestimonialCard.jsx (expects flat `testimonial.quote`/`name`/`area`/`rating`
// props, so a `field[language]` pick would happen at the call site) — as of this
// writing no page or section imports this data yet.
export const testimonials = [
  {
    id: "t1",
    name: { bn: "[গ্রাহকের নাম]", en: "[Customer Name]" },
    area: { bn: "ধানমন্ডি, ঢাকা", en: "Dhanmondi, Dhaka" },
    quote: {
      bn: "নেট এক্সপ্রেসের ইন্টারনেট স্পিড দারুণ স্টেবল। বাসায় কাজ করার সময় কখনো সংযোগ বিচ্ছিন্ন হয়নি।",
      en: "Net Express's internet speed is remarkably stable. My connection never dropped while working from home.",
    },
    rating: 5,
  },
  {
    id: "t2",
    name: { bn: "[গ্রাহকের নাম]", en: "[Customer Name]" },
    area: { bn: "উত্তরা, ঢাকা", en: "Uttara, Dhaka" },
    quote: {
      bn: "কাস্টমার সাপোর্ট টিম খুবই দ্রুত সাড়া দেয়। সমস্যার সমাধান কয়েক মিনিটেই হয়ে যায়।",
      en: "The customer support team responds very quickly. Issues get resolved within minutes.",
    },
    rating: 5,
  },
  {
    id: "t3",
    name: { bn: "[গ্রাহকের নাম]", en: "[Customer Name]" },
    area: { bn: "মিরপুর, ঢাকা", en: "Mirpur, Dhaka" },
    quote: {
      bn: "বিল পরিশোধ করা খুবই সহজ, বিকাশ দিয়ে মুহূর্তেই পেমেন্ট করা যায়।",
      en: "Paying the bill is very easy — I can pay instantly with bKash.",
    },
    rating: 4,
  },
];
