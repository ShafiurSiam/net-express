import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { floatingContact } from "../../config/social.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

/**
 * Fixed bottom-right WhatsApp/Messenger button shown on every page.
 * Target (WhatsApp vs Messenger) is set once in src/config/social.js.
 */
const FloatingContactButton = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const label = t(floatingContact.type === "whatsapp" ? "floatingContact.whatsapp" : "floatingContact.messenger");

  return (
    <motion.a
      href={floatingContact.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: shouldReduceMotion ? 0 : 1, duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.08 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} fill="currentColor" className="text-white" />
    </motion.a>
  );
};

export default FloatingContactButton;
