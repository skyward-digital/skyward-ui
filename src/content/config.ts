// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"

// Define a `type` and `schema` for each collection
const componentsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.boolean().optional(),
    links: z
      .object({
        github: z.string().optional(),
        storybook: z.string().optional(),
      })
      .optional(),
    // pubDate: z.date(),
    // author: z.string(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string(),
    // }),
    // tags: z.array(z.string()),
  }),
})

const exampleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.boolean().optional(),
    links: z
      .object({
        github: z.string().optional(),
        storybook: z.string().optional(),
      })
      .optional(),
    // pubDate: z.date(),
    // author: z.string(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string(),
    // }),
    // tags: z.array(z.string()),
  }),
})

const pageSections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.boolean().optional(),
    links: z
      .object({
        github: z.string().optional(),
        storybook: z.string().optional(),
      })
      .optional(),
    // pubDate: z.date(),
    // author: z.string(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string(),
    // }),
    // tags: z.array(z.string()),
  }),
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  components: componentsCollection,
  example: exampleCollection,
  pageSections: pageSections,
}
