import { CheckCircle2, Clock, Globe, Server, Sparkles, Video, Wifi, Zap, PlayCircle } from "lucide-react";
import Button from "../common/Button.jsx";
import Badge from "../common/Badge.jsx";
import AnimatedSection from "../common/AnimatedSection.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

// Picks an icon matching what a feature line is about, based on its (stable) English text —
// keeps the icon choice independent of which language is currently displayed.
const getFeatureIcon = (featureEn) => {
  const text = featureEn.toLowerCase();
  if (text.includes("ftp")) return Server;
  if (text.includes("bdix") || text.includes("cdn")) return Wifi;
  if (text.includes("video calling")) return Video;
  if (text.includes("streaming")) return PlayCircle;
  if (text.includes("real ip") || text.includes("ipv6") || text.includes("public ip")) return Globe;
  if (text.includes("uncapped") || text.includes("upload speed") || text.includes("gaming")) return Zap;
  if (text.includes("support")) return Clock;
  return CheckCircle2;
};

/**
 * pkg: entry from src/data/packages.js
 * onSelect: called with the package when the user clicks "Get Connected" (opens the request modal)
 */
const PackageCard = ({ pkg, onSelect, delay = 0 }) => {
  const { language, t } = useLanguage();

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
            {t("packageCard.mostPopular")}
          </Badge>
        )}

        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold text-text-primary">{pkg.name[language]}</h3>
          {pkg.tag && (
            <Badge tone="outline" className="normal-case">
              {pkg.tag[language]}
            </Badge>
          )}
        </div>

        <p className="mt-1 text-lg font-bold text-primary-red">{pkg.speed[language]}</p>

        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-extrabold text-text-primary">৳{pkg.price[language]}</span>
          <span className="pb-1 text-text-secondary">/ {pkg.period[language]}</span>
        </div>
        {/* vatNote is optional per package (packages.js) — only rendered when the entry sets it */}
        {pkg.vatNote && <span className="text-xs text-text-secondary">{pkg.vatNote[language]}</span>}

        {pkg.whatsNew && (
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-primary-red/30 bg-primary-red/5 px-3.5 py-3">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-primary-red" />
            <p className="text-sm text-text-primary">
              <span className="font-bold text-primary-red">{t("packageCard.whatsNew")}: </span>
              {pkg.whatsNew[language]}
            </p>
          </div>
        )}

        <ul className="mt-6 flex flex-1 flex-col gap-3">
          {pkg.features[language].map((feature, i) => {
            const Icon = getFeatureIcon(pkg.features.en[i]);
            return (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <Icon size={18} className="mt-0.5 shrink-0 text-primary-red" />
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>

        <Button
          variant={pkg.popular ? "primary" : "secondary"}
          className="mt-7 w-full"
          onClick={() => onSelect?.(pkg)}
        >
          {t("packageCard.getConnected")}
        </Button>
      </div>
    </AnimatedSection>
  );
};

export default PackageCard;
