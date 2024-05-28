import { z, defineCollection } from "astro:content";
const blogCollection = defineCollection(
    {
        schema: z.object({
            tags: z.array(z.string()),
        }),
    });

export const collections = {
    "blog": blogCollection
};