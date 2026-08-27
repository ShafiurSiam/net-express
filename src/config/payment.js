// Single source of truth for the bill-payment link and supported payment method.
// Change VITE_PAYMENT_URL in .env to update the live payment link without touching code.
//
// Shape of this file: `paymentConfig.url` is a plain string (the "Pay Bill" link
// target — the external bKash bill-payment portal), `paymentConfig.methods` is the
// list of supported payment methods rendered by PaymentBadges — each entry is
// { id, label: { bn, en }, color } where `color` is that method's brand accent hex.
// bKash is currently the only supported method.
export const paymentConfig = {
  url: import.meta.env.VITE_PAYMENT_URL || "https://example.com/payment",
  methods: [
    { id: "bkash", label: { bn: "বিকাশ", en: "bKash" }, color: "#E2136E" },
  ],
};
