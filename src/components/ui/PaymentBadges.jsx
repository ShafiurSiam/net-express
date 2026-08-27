import { paymentConfig } from "../../config/payment.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

/**
 * Prominent bKash bill-payment badge. Represents a supported payment method,
 * not an official brand partnership. Renders as a single, well-spaced brand
 * chip so the bKash-only payment flow reads as intentional, not sparse.
 */
const PaymentBadges = ({ className = "" }) => {
  const { language } = useLanguage();
  const bkash =
    paymentConfig.methods.find((method) => method.id === "bkash") ?? paymentConfig.methods[0];

  return (
    <div
      className={`inline-flex items-center gap-3.5 rounded-2xl border-2 bg-white px-6 py-4 shadow-card ${className}`}
      style={{ borderColor: `${bkash.color}40` }}
    >
      <span
        className="rounded-xl px-3.5 py-2 text-xl font-black leading-none tracking-tight text-white"
        style={{ backgroundColor: bkash.color }}
      >
        {bkash.label[language]}
      </span>
      <span className="text-sm font-semibold text-text-primary">
        {language === "bn" ? "দিয়ে সহজে বিল পরিশোধ" : "easy bill payment"}
      </span>
    </div>
  );
};

export default PaymentBadges;
