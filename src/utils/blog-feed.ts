import rss from '@astrojs/rss';
import { SITE_TITLE } from '../consts';
import { blogIndexPath, blogPostPath, blogText, getBlogPosts, languageTag, type BlogLocale } from './blog';

export async function blogFeed(locale: BlogLocale, site: URL) {
  const posts = (await getBlogPosts()).filter(post => post.data.lang === locale);
  return rss({
    title: SITE_TITLE,
    description: blogText[locale].description,
    site: new URL(blogIndexPath(locale), site),
    customData: '<language>' + languageTag[locale] + '</language>',
    items: posts.map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.pubDate, link: blogPostPath(post) })),
  });
}
