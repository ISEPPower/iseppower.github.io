import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_CATEGORIES } from './consts';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			lang: z.enum(['en', 'pt']),
			translationKey: z.string().min(1),
			category: z.enum(BLOG_CATEGORIES).default('Project Updates'),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			week: z.number().int().positive().optional(),
			reportStatus: z.enum(['in-progress', 'complete']).optional(),
			authors: z.array(z.string().min(1)).default(['ISEPower']),
			contributions: z.array(z.object({ name: z.string().min(1), task: z.string().min(1) })).default([]),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
