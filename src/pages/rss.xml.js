import { blogFeed } from '../utils/blog-feed';
export async function GET(context) { return blogFeed('en', context.site); }
