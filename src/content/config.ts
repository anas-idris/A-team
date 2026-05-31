import { defineCollection, z } from 'astro:content';

const spentApp = defineCollection({
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })),
    techStack: z.array(z.string()),
    screenshots: z.array(z.object({
      image: z.string(),
      caption: z.string(),
    })),
  }),
});

export const collections = { spentApp };
