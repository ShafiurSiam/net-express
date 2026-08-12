// Single source of truth for the bill-payment link and supported payment methods.
// Change VITE_PAYMENT_URL in .env to update the live payment link without touching code.
export const paymentConfig = {
  url: import.meta.env.VITE_PAYMENT_URL || "https://example.com/payment",
  methods: [
    { id: "bkash", label: "বিকাশ", color: "#E2136E" },
    { id: "nagad", label: "নগদ", color: "#F6921E" },
    { id: "rocket", label: "রকেট", color: "#8C3494" },
    { id: "card", label: "কার্ড / ব্যাংক ট্রান্সফার", color: "#6B0F1A" },
  ],
};
