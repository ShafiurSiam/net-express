import { Fragment, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import { X, Wallet, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "../common/Button.jsx";
import LanguageSwitch from "../ui/LanguageSwitch.jsx";
import { navLinks } from "../../data/navigation.js";
import { ftpLinks } from "../../data/ftpLinks.js";
import { company } from "../../config/company.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import logo from "../../assets/logo/logo.svg";

/** Accordion-style "FTP" section for the mobile menu — expands inline instead of hovering. */
const MobileFtpAccordion = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3 text-left text-base font-medium text-text-primary transition-colors hover:bg-surface"
      >
        FTP
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 text-text-secondary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-1 pl-4">
              {ftpLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onNavigate}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-primary-red"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  const { language, t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-charcoal/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-[95] flex w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden"
            initial={{ x: shouldReduceMotion ? 0 : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: shouldReduceMotion ? 0 : "100%" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center justify-between">
              <Link to="/" onClick={onClose}>
                <img src={logo} alt={company.name} className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label={t("nav.closeMenu")}
                className="rounded-full p-2 text-text-primary hover:bg-surface"
              >
                <X size={22} />
              </button>
            </div>

            <LanguageSwitch className="mb-6 self-start" />

            <nav className="flex flex-col gap-1" aria-label={t("nav.mobileNav")}>
              {navLinks.map((link) => (
                <Fragment key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive ? "bg-primary-red/10 text-primary-red" : "text-text-primary hover:bg-surface"
                      }`
                    }
                  >
                    {link.label[language]}
                  </NavLink>
                  {link.path === "/coverage" && <MobileFtpAccordion onNavigate={onClose} />}
                </Fragment>
              ))}
            </nav>

            <Button to="/payment" onClick={onClose} className="mt-8 w-full" icon={Wallet} iconPosition="left">
              {t("common.payBill")}
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default MobileMenu;
