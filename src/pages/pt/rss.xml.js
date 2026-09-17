import { blogFeed } from '../../utils/blog-feed';
export async function GET(context) { return blogFeed('pt', context.site); }
