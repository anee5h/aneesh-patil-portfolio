import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    projectSlug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    locale: z.enum(['en', 'ja']),
    summary: z.string(),
    status: z.enum(['live', 'building', 'planned']),
    published: z.boolean().default(false),
    stack: z.array(z.string()),
    featured: z.boolean().optional(),
    year: z.number().int().min(2000).max(2099),
    role: z.string().optional(),
    logo: image().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    screenshots: z.array(z.object({
      image: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).default([]),
    architecture: z.object({
      image: image(),
      alt: z.string(),
      caption: z.string().optional(),
    }).optional(),
    links: z.object({
      github: z.string().url().optional(),
      website: z.string().url().optional(),
      pullRequests: z.array(z.string().url()).optional(),
    }).optional(),
  }),
});

export const collections = { projects };
