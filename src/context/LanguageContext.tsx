"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, Translation, translations } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default language: Spanish.
  const [lang, setLang] = useState<Lang>("es");

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return ctx;
}
