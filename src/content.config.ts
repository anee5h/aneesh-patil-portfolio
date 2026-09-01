// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    locale: z.enum(['en', 'ja']),
    summary: z.string(),
    status: z.enum(['live', 'building', 'planned']),
    stack: z.array(z.string()),
    featured: z.boolean().optional(),
    year: z.number().int().min(2000).max(2099),
    role: z.string().optional(),
    links: z.object({
      github: z.string().url().optional(),
      website: z.string().url().optional(),
    }).optional(),
    counterpart: z.object({
      title: z.string(),
      slug: z.string(),
    }).optional(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { projects };
