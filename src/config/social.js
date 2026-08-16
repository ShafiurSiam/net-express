// Social & messaging links, including the floating contact button target.
// Shape: `social` is a flat object of plain URL strings, one per platform (no
// bn/en split since URLs aren't translated) — keyed by facebook/messenger/
// whatsapp/youtube/instagram. Read by the Footer's social icon row and by
// `floatingContact` below.
export const social = {
  facebook: "https://facebook.com/netexpress.example",
  messenger: "https://m.me/netexpress.example",
  whatsapp: "https://wa.me/8801XXXXXXXXX",
  youtube: "https://youtube.com/@netexpress.example",
  instagram: "https://instagram.com/netexpress.example",
};

// The floating action button (bottom-right, all pages) links here.
// Shape: { type: "whatsapp" | "messenger", url }. Switch `type` to change which
// icon/label the button shows; `url` is where it links.
export const floatingContact = {
  type: "whatsapp", // "whatsapp" | "messenger"
  url: social.whatsapp,
};
