import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
	schema: ({ image }) => z.object({
	  	title: z.string(),
	  	description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
	  	cover: image().refine((img) => img.width >= 1080, {
			message: "Cover image must be at least 1080 pixels wide!",
	  	}),
	  	coverAlt: z.string(),
	}),
});

const postCollection = defineCollection({
	schema: ({ image }) => z.object({
	  	title: z.string(),
	  	description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
	  	cover: image().refine((img) => img.width >= 1080, {
			message: "Cover image must be at least 1080 pixels wide!",
	  	}),
	  	coverAlt: z.string(),
	}),
});


export const collections = {
	project: projectCollection,
	post: postCollection,
};