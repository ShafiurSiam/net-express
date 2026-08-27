// Social & messaging links, including the floating contact button target.
// Shape: `social` is a flat object of plain URL strings, one per platform (no
// bn/en split since URLs aren't translated) — keyed by facebook/messenger/
// whatsapp. Read by the Footer's social icon row and by `floatingContact`
// below.
// Note: the whatsapp number here is WhatsApp-only — never reuse it as the
// support or billing contact phone (company.supportPhone/billingPhone) or as a
// tel: link.
export const social = {
  facebook: "https://www.facebook.com/NetExpressTongi/",
  messenger: "https://m.me/netexpress.example",
  whatsapp: "https://wa.me/8801611160096",
};

// The floating action button (bottom-right, all pages) links here.
// Shape: { type: "whatsapp" | "messenger", url }. Switch `type` to change which
// icon/label the button shows; `url` is where it links.
export const floatingContact = {
  type: "whatsapp", // "whatsapp" | "messenger"
  url: social.whatsapp,
};
