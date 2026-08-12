import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Accessible menu-button dropdown for the desktop navbar, used for grouped
 * external links (e.g. FTP servers). Opens on hover, click, or keyboard
 * focus so it works for mouse, touch, and keyboard users alike.
 *
 * items: [{ id, label, url }]
 */
const NavDropdown = ({ label, items, triggerClassName = "" }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const suppressFocusOpen = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const menuId = useId();

  const close = (focusTrigger = false) => {
    setOpen(false);
    if (focusTrigger) {
      // Focusing the trigger below would otherwise re-trigger onFocus and reopen the menu.
      suppressFocusOpen.current = true;
      triggerRef.current?.focus();
    }
  };

  useEffect(() => {
    if (!open) return undefined;

    const onClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") close(true);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => itemRefs.current[0]?.focus());
    }
  };

  const handleMenuKeyDown = (e) => {
    const focusable = itemRefs.current;
    const currentIndex = focusable.indexOf(document.activeElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusable[(currentIndex + 1) % focusable.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusable[(currentIndex - 1 + focusable.length) % focusable.length]?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  const handleBlur = (e) => {
    if (!rootRef.current?.contains(e.relatedTarget)) setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(true)}
        onKeyDown={handleTriggerKeyDown}
        onFocus={() => {
          if (suppressFocusOpen.current) {
            suppressFocusOpen.current = false;
            return;
          }
          setOpen(true);
        }}
        className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${triggerClassName}`}
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={label}
            onKeyDown={handleMenuKeyDown}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-50 mt-2 min-w-[200px] overflow-hidden rounded-2xl border border-border bg-white py-2 shadow-card-hover"
          >
            {items.map((item, index) => (
              <a
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                role="menuitem"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => close()}
                className="block px-4 py-2.5 text-sm font-medium text-text-primary transition-colors duration-150 hover:bg-surface hover:text-primary-red"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
