// Primary navigation links shown in the Navbar and mobile menu.
// Add/remove/reorder entries here — no component changes needed.
//
// Shape of one `navLinks` / `footerLinks.*` entry: { label ({ bn, en }), path
// (plain string — a route from src/App.jsx, e.g. "/packages") }. `footerLinks`
// groups the same shape of entry into two columns: `quickLinks` and `support`,
// rendered by Footer.jsx.
export const navLinks = [
  { label: { bn: "হোম", en: "Home" }, path: "/" },
  { label: { bn: "আমাদের সম্পর্কে", en: "About" }, path: "/about" },
  { label: { bn: "প্যাকেজ", en: "Packages" }, path: "/packages" },
  { label: { bn: "অফার", en: "Offers" }, path: "/offers" },
  { label: { bn: "কভারেজ", en: "Coverage" }, path: "/coverage" },
  { label: { bn: "সহায়তা", en: "Support" }, path: "/support" },
  { label: { bn: "যোগাযোগ", en: "Contact" }, path: "/contact" },
];

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
