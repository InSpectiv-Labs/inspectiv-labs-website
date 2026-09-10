import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().optional(),
    heroImage: image().optional(),
    industry: z.enum(['insurance', 'banking', 'geotech', 'mining', 'general']).optional(),
    readTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
