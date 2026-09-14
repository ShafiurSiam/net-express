// Promotional offers shown on the homepage and /offers page.
// Rendered by OfferCard.jsx as elegant icon-badge cards (see OfferCard.jsx for the markup).
//
// Shape of one `offers` entry:
//   id          unique string
//   icon        lucide-react icon component, shown in a soft red icon badge at the top of the card
//   image       imported placeholder artwork (src/assets/images/offers/offer-0N.svg) — swap the
//               file (keep the same filename) to drop in real photography/artwork later. The
//               current icon-badge card design doesn't render this field, but it's kept so the
//               data model doesn't need reshaping if a future card design brings the image back.
//   highlight     optional { bn, en } — a large reward figure shown prominently on the card (e.g. "৳৫০০")
//   highlightNote optional { bn, en } — small plain-text qualifier shown under the highlight figure
//                 (e.g. "up to"), for rewards that aren't a flat guaranteed amount
//   disclaimer    optional { bn, en } — small print shown under the highlight figure (e.g. "শর্ত প্রযোজ্য");
//                 paired with disclaimerLink to render it as a link to that route
//   disclaimerLink  optional route string, e.g. "/terms"
//   title/description  { bn, en } headline and one-line supporting copy
//   cta         { label: { bn, en }, action: "openRequest" (opens the connection-request modal)
//                 | "link" (navigates to `to`) }
import { UserPlus, Gift } from "lucide-react";
import offer01 from "../assets/images/offers/offer-01.svg";
import offer02 from "../assets/images/offers/offer-02.svg";

export const offers = [
  {
    id: "referral-bonus",
    icon: UserPlus,
    image: offer01,
    highlight: { bn: "৳৫০০", en: "৳500" },
    highlightNote: { bn: "পর্যন্ত", en: "up to" },
    disclaimer: { bn: "শর্ত প্রযোজ্য", en: "Terms apply" },
    disclaimerLink: "/terms",
    title: { bn: "বন্ধুকে রেফার করুন, জিতুন ৳৫০০ পর্যন্ত", en: "Refer a Friend, Win Up to BDT 500" },
    description: {
      bn: "আপনার রেফারেন্সে বন্ধু নতুন সংযোগ নিলেই আপনার অ্যাকাউন্টে যোগ হবে রেফারেল বোনাস।",
      en: "The moment a friend takes a new connection through your referral, a referral bonus lands in your account.",
    },
    cta: { label: { bn: "এখনই রেফার করুন", en: "Refer Now" }, action: "link", to: "/contact" },
  },
  {
    id: "free-connection-charge",
    icon: Gift,
    image: offer02,
    title: { bn: "নতুন সংযোগে ফ্রি সংযোগ চার্জ", en: "Free Connection Charge on Sign-Up" },
    description: {
      bn: "নতুন গ্রাহকদের জন্য সংযোগ চার্জ এখন সম্পূর্ণ মওকুফ — আজই যুক্ত হোন বাড়তি কোনো খরচ ছাড়াই।",
      en: "Connection charge is now fully waived for new customers — join today with zero extra cost.",
    },
    cta: { label: { bn: "সংযোগ নিন", en: "Get Connected" }, action: "openRequest" },
  },
];
