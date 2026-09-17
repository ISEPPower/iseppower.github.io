import { sitePath } from './paths';

export type Locale = 'en' | 'pt';
export interface LanguageLink { locale: Locale; href: string; }
export const languageTag = { en: 'en', pt: 'pt-PT' } as const;

/** Page routes retain their identifiers in both languages. */
export function localizedPath(locale: Locale, path = ''): string {
  return sitePath((locale === 'pt' ? 'pt/' : '') + path.replace(/^\/+/, ''));
}

export function pageAlternates(pathname: string): LanguageLink[] {
  const base = sitePath();
  const path = pathname.startsWith(base) ? pathname.slice(base.length) : '';
  const route = path.replace(/^pt(?:\/|$)/, '');
  return (['en', 'pt'] as const).map(locale => ({ locale, href: localizedPath(locale, route) }));
}
