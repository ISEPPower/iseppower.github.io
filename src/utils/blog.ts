import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE_TITLE } from '../consts';
import { localizedPath } from './i18n';
import type { LanguageLink } from './i18n';
export { languageTag } from './i18n';
export type { LanguageLink } from './i18n';

export type BlogLocale = 'en' | 'pt';

export const blogText = {
  en: {
    title: SITE_TITLE, eyebrow: 'Development Journal / Equipa 10',
    heading: SITE_TITLE,
    description: 'The ISEPower development journal across our master’s challenges. Active challenge: Challenge 1 - Demand Response Advisor.',
    updates: 'Project updates',
    introduction: 'Updates will follow the project from initial scope to knowledge engineering, prototyping and evaluation. Future results will be reported when evidence is available.',
    categories: 'Published categories', read: 'Read the update',
    back: 'All project updates', updated: 'Updated', language: 'Blog language',
    empty: 'No posts have been published in English yet.',
  },
  pt: {
    title: SITE_TITLE, eyebrow: 'Diário de Desenvolvimento / Equipa 10',
    heading: SITE_TITLE,
    description: 'O diário de desenvolvimento da ISEPower ao longo dos desafios do mestrado. Desafio ativo: Desafio 1 - Demand Response Advisor.',
    updates: 'Atualizações do projeto',
    introduction: 'As publicações acompanharão o projeto desde a definição do âmbito até à engenharia do conhecimento, prototipagem e avaliação. Os resultados serão apresentados quando houver evidências disponíveis.',
    categories: 'Categorias publicadas', read: 'Ler a publicação',
    back: 'Todas as atualizações', updated: 'Atualizado em', language: 'Idioma do blog',
    empty: 'Ainda não existem publicações em português.',
  },
} as const;

const portugueseCategories: Record<CollectionEntry<'blog'>['data']['category'], string> = {
  'Project Updates': 'Atualizações do Projeto',
  'Knowledge Acquisition': 'Aquisição de Conhecimento',
  'Knowledge Representation': 'Representação do Conhecimento',
  Prototype: 'Protótipo', Research: 'Investigação', Results: 'Resultados',
};

export function categoryLabel(category: CollectionEntry<'blog'>['data']['category'], locale: BlogLocale) {
  return locale === 'pt' ? portugueseCategories[category] : category;
}

export function blogIndexPath(locale: BlogLocale): string {
  return localizedPath(locale, 'blog/');
}

export function postSlug(post: CollectionEntry<'blog'>): string {
  return post.id.replace(/^(en|pt)\//, '');
}

export function blogPostPath(post: CollectionEntry<'blog'>): string {
  return blogIndexPath(post.data.lang) + postSlug(post) + '/';
}

/** Fail early on ambiguous translation pairs instead of linking to the wrong article. */
export async function getBlogPosts() {
  const posts = await getCollection('blog');
  const translations = new Set<string>();
  for (const post of posts) {
    const key = `${post.data.lang}:${post.data.translationKey}`;
    if (translations.has(key)) throw new Error(`Duplicate blog translation: ${key}`);
    translations.add(key);
  }
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function translationLinks(post: CollectionEntry<'blog'>, posts: CollectionEntry<'blog'>[]): LanguageLink[] {
  return posts.filter(candidate => candidate.data.translationKey === post.data.translationKey)
    .map(candidate => ({ locale: candidate.data.lang, href: blogPostPath(candidate) }));
}
