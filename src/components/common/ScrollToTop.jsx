import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation by default.
 * Mounted once near the router root.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window.HTMLElement.prototype ? "instant" : "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
