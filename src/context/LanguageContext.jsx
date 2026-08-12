import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
import { resolve } from "../i18n/translations.js";

const STORAGE_KEY = "net-express-lang";

const LanguageContext = createContext(null);

/**
 * Mounted once near the app root so any component can read the active
 * language and translate UI copy via t(). Bangla is the default and
 * primary language (Section 5 of the spec); English is secondary/opt-in.
 */
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "bn" ? stored : "bn";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "bn" ? "en" : "bn"));
  }, []);

  const t = useCallback(
    (key, vars) => {
      let str = resolve(key, language);
      if (vars) {
        for (const [name, value] of Object.entries(vars)) {
          str = str.replaceAll(`{${name}}`, value);
        }
      }
      return str;
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, toggleLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
