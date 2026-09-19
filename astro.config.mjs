// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'beacon',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DreamerOnACloud/beacon' }],
			// Posts are flat (no per-field folders) — see tags in each post's frontmatter.
			sidebar: [{ label: 'Posts', items: [{ autogenerate: { directory: 'posts' } }] }],
		}),
	],
});
