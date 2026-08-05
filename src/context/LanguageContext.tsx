"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { content } from "@/content";
import type { Content, Lang } from "@/content";
import { getServerSnapshot, getSnapshot, setLang as setStoredLang, subscribe } from "./languageStore";

interface LanguageContextValue {
  lang: Lang;
  t: Content;
  isEn: boolean;
  isEs: boolean;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    t: content[lang],
    isEn: lang === "en",
    isEs: lang === "es",
    setLang: setStoredLang,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
