import uk from './uk.json';
import en from './en.json';

export type Lang = 'uk' | 'en';
export type Translations = typeof uk;

export const translations: Record<Lang, Translations> = { uk, en };

export function getT(lang: Lang): Translations {
  return translations[lang];
}
