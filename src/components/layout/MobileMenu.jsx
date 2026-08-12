import { useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import { X, Wallet } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "../common/Button.jsx";
import { navLinks } from "../../data/navigation.js";
import { company } from "../../config/company.js";
import logo from "../../assets/logo/logo.svg";

const MobileMenu = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();

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
            <div className="mb-8 flex items-center justify-between">
              <Link to="/" onClick={onClose}>
                <img src={logo} alt={company.name} className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="মেনু বন্ধ করুন"
                className="rounded-full p-2 text-text-primary hover:bg-surface"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-1" aria-label="মোবাইল মেনু">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-primary-red/10 text-primary-red" : "text-text-primary hover:bg-surface"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <Button to="/payment" onClick={onClose} className="mt-8 w-full" icon={Wallet} iconPosition="left">
              বিল পরিশোধ
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default MobileMenu;
