import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Fields a post touches (Software Engineering / CS / Math / Logic).
				// Posts are flat (no per-field folders) — this is how they're browsed/filtered.
				tags: z.array(z.string()).default([]),
			}),
		}),
	}),
};
