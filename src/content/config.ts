// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"

// Define a `type` and `schema` for each collection
const gettingStartedCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
})

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

const marketingComponents = defineCollection({
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

const appComponents = defineCollection({
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
  gettingStarted: gettingStartedCollection,
  components: componentsCollection,
  example: exampleCollection,
  marketingComponents: marketingComponents,
  appComponents: appComponents,
}
