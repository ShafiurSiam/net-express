import { CreditCard } from "lucide-react";
import { paymentConfig } from "../../config/payment.js";

/**
 * Labeled placeholder badges for supported payment rails — these represent
 * supported methods, not brand endorsements, since real logos aren't in use.
 */
const PaymentBadges = ({ className = "" }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {paymentConfig.methods.map((method) => (
        <div
          key={method.id}
          className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 shadow-card"
        >
          {method.id === "card" ? (
            <CreditCard size={18} style={{ color: method.color }} />
          ) : (
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: method.color }}
            >
              {method.label.charAt(0)}
            </span>
          )}
          <span className="text-sm font-semibold text-text-primary">{method.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PaymentBadges;
