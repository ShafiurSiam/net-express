import { Check, Zap } from "lucide-react";
import Button from "../common/Button.jsx";
import Badge from "../common/Badge.jsx";
import AnimatedSection from "../common/AnimatedSection.jsx";

/**
 * pkg: entry from src/data/packages.js
 * onSelect: called with the package when the user clicks "সংযোগ নিন" (opens the request modal)
 */
const PackageCard = ({ pkg, onSelect, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div
        className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
          pkg.popular
            ? "border-primary-red bg-white shadow-card-hover"
            : "border-border bg-white shadow-card hover:shadow-card-hover"
        }`}
      >
        {pkg.popular && (
          <Badge tone="red" className="absolute -top-3 left-1/2 -translate-x-1/2">
            সবচেয়ে জনপ্রিয়
          </Badge>
        )}

        {pkg.staticIp && (
          <Badge tone="dark" className="absolute -top-3 left-1/2 -translate-x-1/2">
            বিজনেস প্যাকেজ
          </Badge>
        )}

        <div className="flex items-center gap-2 text-primary-red">
          <Zap size={20} />
          <span className="text-sm font-semibold text-text-secondary">ইন্টারনেট স্পিড</span>
        </div>

        <h3 className="mt-2 text-2xl font-bold text-text-primary">{pkg.name}</h3>

        <div className="mt-4 flex items-end gap-1">
          <span className="text-4xl font-extrabold text-text-primary">৳{pkg.price}</span>
          <span className="pb-1 text-text-secondary">/ {pkg.period}</span>
        </div>

        <ul className="mt-6 flex flex-1 flex-col gap-3">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <Check size={18} className="mt-0.5 shrink-0 text-primary-red" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={pkg.popular ? "primary" : "secondary"}
          className="mt-7 w-full"
          onClick={() => onSelect?.(pkg)}
        >
          সংযোগ নিন
        </Button>
      </div>
    </AnimatedSection>
  );
};

export default PackageCard;
