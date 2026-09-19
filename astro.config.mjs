// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

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
	adapter: netlify(),
	// Off: the dev toolbar breaks when one Astro dev page is iframed inside
	// another (as the SSR demo does), throwing an unhandled rejection instead
	// of rendering. Not worth the toolbar's convenience for this site.
	devToolbar: { enabled: false },
});