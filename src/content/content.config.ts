import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.date(),
    featured: z.boolean().default(false),
    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};