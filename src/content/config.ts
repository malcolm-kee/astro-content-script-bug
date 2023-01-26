import { z, defineCollection } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string()
    })
  })
}