import { MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { social } from "../../config/social.js";
import { company } from "../../config/company.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { FacebookIcon } from "../common/SocialIcons.jsx";

/**
 * Fixed bottom action bar shown on mobile only (spec Section 51.4 companion).
 * Mirrors FloatingContactButton's WhatsApp target and reuses the same config
 * (social.js / company.js) rather than hardcoding any URL or number here.
 */
const MobileActionBar = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.nav
      aria-label={t("mobileActionBar.landmarkLabel")}
      initial={{ y: shouldReduceMotion ? 0 : 60, opacity: shouldReduceMotion ? 1 : 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.2 }}
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 divide-x divide-border border-t border-border bg-white shadow-[0_-4px_16px_rgba(23,21,26,0.08)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("mobileActionBar.facebookLabel")}
        className="flex min-h-[3rem] flex-col items-center justify-center gap-0.5 bg-primary-red py-2 text-xs font-semibold text-white transition-colors active:bg-primary-red-dark"
      >
        <FacebookIcon width={20} height={20} />
        Facebook
      </a>
      <a
        href={social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("mobileActionBar.whatsappLabel")}
        className="flex min-h-[3rem] flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-[#25D366] transition-colors active:bg-surface"
      >
        <MessageCircle size={20} fill="currentColor" className="text-[#25D366]" />
        WhatsApp
      </a>
      <a
        href={`tel:${company.supportPhone}`}
        aria-label={t("mobileActionBar.callLabel")}
        className="flex min-h-[3rem] flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-charcoal transition-colors active:bg-surface"
      >
        <Phone size={20} className="text-primary-red" />
        Call
      </a>
    </motion.nav>
  );
};

export default MobileActionBar;
