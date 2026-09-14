import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation by default.
 * Mounted once near the router root.
 *
 * When the target location carries a hash (e.g. the navbar's "অ্যাড-অনস" link
 * to /packages#addons), smooth-scroll to that element instead of jumping to
 * the top. The target page may be lazy-loaded (see App.jsx's Suspense
 * routes), so the element isn't necessarily in the DOM yet on the same tick —
 * poll via requestAnimationFrame until it mounts. `scroll-behavior: auto` is
 * forced under prefers-reduced-motion globally (see styles/animations.css),
 * so this "smooth" request degrades to an instant jump there for free.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let cancelled = false;
      let attempts = 0;
      const tryScroll = () => {
        if (cancelled) return;
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 50) {
          attempts += 1;
          requestAnimationFrame(tryScroll);
        }
      };
      tryScroll();
      return () => {
        cancelled = true;
      };
    }

    window.scrollTo({ top: 0, behavior: "instant" in window.HTMLElement.prototype ? "instant" : "auto" });
    return undefined;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
