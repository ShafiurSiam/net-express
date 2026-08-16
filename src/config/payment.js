// Single source of truth for the bill-payment link and supported payment methods.
// Change VITE_PAYMENT_URL in .env to update the live payment link without touching code.
//
// Shape of this file: `paymentConfig.url` is a plain string (the "Pay Bill" link
// target), `paymentConfig.methods` is a list of payment badges rendered by
// PaymentBadges — each entry is { id, label: { bn, en }, color } where `color` is
// a hex code used for that method's badge background.
export const paymentConfig = {
  url: import.meta.env.VITE_PAYMENT_URL || "https://example.com/payment",
  methods: [
    { id: "bkash", label: { bn: "বিকাশ", en: "bKash" }, color: "#E2136E" },
    { id: "nagad", label: { bn: "নগদ", en: "Nagad" }, color: "#F6921E" },
    { id: "rocket", label: { bn: "রকেট", en: "Rocket" }, color: "#8C3494" },
    { id: "card", label: { bn: "কার্ড / ব্যাংক ট্রান্সফার", en: "Card / Bank Transfer" }, color: "#6B0F1A" },
  ],
};
