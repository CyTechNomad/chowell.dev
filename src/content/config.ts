import { date } from "astro/zod";
import { z, defineCollection } from "astro:content";
const blogCollection = defineCollection(
    {
        schema: z.object({
            title: z.string(),
            description: z.string(),
            date: z.date(),
            tags: z.array(z.string()),
        }),
    });

export const collections = {
    "blog": blogCollection
};