// Primary navigation links shown in the Navbar and mobile menu.
// Add/remove/reorder entries here — no component changes needed.
//
// Shape of one `navLinks` / `footerLinks.*` entry: { label ({ bn, en }), path
// (plain string — a route from src/App.jsx, e.g. "/packages") }. `footerLinks`
// groups the same shape of entry into two columns: `quickLinks` and `support`,
// rendered by Footer.jsx.
// Coverage ships real data (src/data/coverageAreas.js) and is live. Offers
// content is live too (src/data/offers.js).
export const navLinks = [
  { label: { bn: "হোম", en: "Home" }, path: "/" },
  { label: { bn: "আমাদের সম্পর্কে", en: "About" }, path: "/about" },
  { label: { bn: "প্যাকেজ", en: "Packages" }, path: "/packages" },
  { label: { bn: "সেবাসমূহ", en: "Services" }, path: "/services" },
  { label: { bn: "অফার", en: "Offers" }, path: "/offers" },
  { label: { bn: "কভারেজ", en: "Coverage" }, path: "/coverage" },
  { label: { bn: "সহায়তা", en: "Support" }, path: "/support" },
  { label: { bn: "যোগাযোগ", en: "Contact" }, path: "/contact" },
];

// Shows a small "New" badge on the "অফার" (Offers) nav link (desktop navbar
// and mobile menu) to draw attention to the refreshed offers. Set to false
// (or delete this flag and its usages in Navbar.jsx/MobileMenu.jsx) once the
// offers section isn't "new" anymore.
export const isNewOffer = true;

export const footerLinks = {
  quickLinks: [
    { label: { bn: "হোম", en: "Home" }, path: "/" },
    { label: { bn: "আমাদের সম্পর্কে", en: "About" }, path: "/about" },
    { label: { bn: "প্যাকেজ", en: "Packages" }, path: "/packages" },
    { label: { bn: "অফার", en: "Offers" }, path: "/offers" },
    { label: { bn: "কভারেজ", en: "Coverage" }, path: "/coverage" },
  ],
  support: [
    { label: { bn: "যোগাযোগ", en: "Contact" }, path: "/contact" },
    { label: { bn: "সচরাচর জিজ্ঞাসা", en: "FAQ" }, path: "/support" },
    { label: { bn: "বিল পরিশোধ", en: "Pay Bill" }, path: "/payment" },
    { label: { bn: "শর্তাবলী", en: "Terms" }, path: "/terms" },
    { label: { bn: "গোপনীয়তা নীতি", en: "Privacy Policy" }, path: "/privacy" },
  ],
};
