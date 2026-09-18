import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, PartyPopper, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "./Button.jsx";
import { OFFER_TAGS } from "../cards/OfferCard.jsx";
import { offers } from "../../data/offers.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const SHOW_DELAY_MS = 10_000;
const SESSION_KEY = "offerPopupShown";
const CONTACT_PATH = "/contact";
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// sessionStorage can throw (private mode, blocked site data) — fail open/quiet either way.
const hasBeenShown = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
};

const markShown = () => {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
};

/** Condensed OfferCard: same icon badge, ৳ highlight figure, ribbon tag and tokens, minus the CTA. */
const PopupOffer = ({ offer, onNavigate, shouldReduceMotion }) => {
  const { language } = useLanguage();
  const Icon = offer.icon;
  const tag = OFFER_TAGS[offer.id];

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };
  const badge = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.5, rotate: shouldReduceMotion ? 0 : -12 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 280, damping: 18 } },
  };
  const highlight = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.6 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 14 } },
  };

  return (
    <motion.div
      variants={item}
      className="relative isolate flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-white p-5 pt-9 text-center shadow-card"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.14),transparent_70%)]"
      />

      {tag && (
        <span className="absolute right-3 top-3 z-10 overflow-hidden whitespace-nowrap rounded-full bg-primary-red px-2.5 py-1 text-[10px] font-bold tracking-wide text-white shadow-sm">
          {tag[language]}
          <span
            aria-hidden="true"
            className="animate-shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-5 -skew-x-12 bg-white/50"
          />
        </span>
      )}

      <motion.div variants={badge} className="relative z-10">
        <div className="animate-badge-breathe flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-red to-primary-red-dark text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(23,21,26,0.25),0_8px_18px_-6px_rgba(200,16,46,0.5)] ring-1 ring-primary-red-dark/40">
          <Icon size={26} />
        </div>
      </motion.div>

      {offer.highlight && (
        <motion.div variants={highlight} className="relative z-10">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-20 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(200,16,46,0.16),transparent_70%)]"
          />
          <p className="text-4xl font-extrabold leading-none text-primary-red drop-shadow-[0_2px_14px_rgba(200,16,46,0.3)] sm:text-5xl">
            {offer.highlight[language]}
          </p>
          {(offer.highlightNote || offer.disclaimer) && (
            <p className="mt-1 text-xs text-text-secondary">
              {offer.highlightNote && <span>{offer.highlightNote[language]}</span>}
              {offer.highlightNote && offer.disclaimer && " · "}
              {offer.disclaimer &&
                (offer.disclaimerLink ? (
                  <Link
                    to={offer.disclaimerLink}
                    onClick={onNavigate}
                    className="underline decoration-dotted hover:text-primary-red"
                  >
                    {offer.disclaimer[language]}
                  </Link>
                ) : (
                  <span>{offer.disclaimer[language]}</span>
                ))}
            </p>
          )}
        </motion.div>
      )}

      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <h3 className="text-base font-bold text-text-primary sm:text-lg">{offer.title[language]}</h3>
        <p className="text-sm text-text-secondary">{offer.description[language]}</p>
      </div>
    </motion.div>
  );
};

const PopupDialog = ({ onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const titleId = useId();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  // Focus in on open / restore on close, plus body scroll lock (compensating for the scrollbar
  // so the page behind doesn't jump sideways).
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { overflow, paddingRight } = document.body.style;
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarGap > 0) {
      const current = parseFloat(getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${current + scrollbarGap}px`;
    }
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      if (previouslyFocused instanceof HTMLElement && document.contains(previouslyFocused)) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(FOCUSABLE);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (!dialogRef.current.contains(active)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const list = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: shouldReduceMotion ? 0 : 0.2 } },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.25 }}
    >
      <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.85, y: shouldReduceMotion ? 0 : 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 12 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.15 }
            : { type: "spring", stiffness: 320, damping: 20, mass: 0.9 }
        }
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("modal.close")}
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-text-secondary shadow-sm backdrop-blur-sm transition-colors hover:bg-surface hover:text-primary-red"
        >
          <X size={20} />
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="relative isolate overflow-hidden px-6 pb-2 pt-8 text-center sm:px-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 -z-10 h-48 w-96 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(ellipse,rgba(200,16,46,0.16),transparent_70%)]"
            />
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-red/10 text-primary-red">
              <PartyPopper size={24} />
            </div>
            <h2 id={titleId} className="px-8 text-2xl font-extrabold text-text-primary sm:text-3xl">
              {t("offerPopup.heading")}
            </h2>
            <p className="mt-1.5 text-sm text-text-secondary">{t("offerPopup.subheading")}</p>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            animate="visible"
            className="grid gap-4 px-6 py-5 sm:grid-cols-2 sm:px-8"
          >
            {offers.map((offer) => (
              <PopupOffer
                key={offer.id}
                offer={offer}
                onNavigate={onClose}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>
        </div>

        <div className="shrink-0 border-t border-border bg-surface px-6 py-4 sm:px-8">
          <Button
            to={CONTACT_PATH}
            onClick={onClose}
            size="lg"
            icon={ArrowRight}
            className="w-full shadow-[0_10px_24px_-8px_rgba(200,16,46,0.55)]"
          >
            {t("offerPopup.cta")}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/**
 * Timed promo popup, mounted once at the App root (never unmounts on route change), so the
 * 10s timer counts from first page load. Shows at most once per browser session
 * (sessionStorage) and never over /contact — if the timer elapses there, it waits and shows
 * as soon as the visitor navigates elsewhere.
 */
const OfferPopup = () => {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasBeenShown()) return undefined;
    const timer = setTimeout(() => setReady(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready || pathname === CONTACT_PATH || hasBeenShown()) return;
    markShown();
    setOpen(true);
  }, [ready, pathname]);

  const handleClose = useCallback(() => setOpen(false), []);

  return createPortal(<AnimatePresence>{open && <PopupDialog onClose={handleClose} />}</AnimatePresence>, document.body);
};

export default OfferPopup;
