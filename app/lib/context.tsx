'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { translations, type Lang, type Translations } from '../i18n';

type Theme = 'dark' | 'light';

interface AppCtx {
  theme: Theme;
  lang: Lang;
  tr: Translations;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const Ctx = createContext<AppCtx>({} as AppCtx);

const setCookie = (name: string, value: string) => {
  try {
    document.cookie = `${name}=${value}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // skip
  }
};

export const AppProvider = ({
  children,
  initialTheme,
  initialLang,
}: {
  children: ReactNode;
  initialTheme: Theme;
  initialLang: Lang;
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [lang, setLang] = useState<Lang>(initialLang);

  const toggleTheme = () => {
    setTheme(p => {
      const next = p === 'dark' ? 'light' : 'dark';
      setCookie('vexor-theme', next);
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  };

  const toggleLang = () => {
    setLang(p => {
      const next = p === 'uk' ? 'en' : 'uk';
      setCookie('vexor-lang', next);
      return next;
    });
  };

  const tr = useMemo(() => translations[lang], [lang]);

  return (
    <Ctx.Provider value={{ theme, lang, tr, toggleTheme, toggleLang }}>{children}</Ctx.Provider>
  );
};

export const useApp = () => useContext(Ctx);
