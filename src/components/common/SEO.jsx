import { useEffect } from "react";
import { site } from "../../config/site.js";

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/**
 * Lightweight per-page SEO: sets document title + meta description + Open Graph
 * tags on mount. Avoids pulling in react-helmet for a handful of tags.
 */
const SEO = ({ title, description, path = "" }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.titleSuffix}` : site.defaultTitle;
    const desc = description || site.defaultDescription;
    const url = `${site.url}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:image", `${site.url}${site.ogImage}`);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", site.locale);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
  }, [title, description, path]);

  return null;
};

export default SEO;
