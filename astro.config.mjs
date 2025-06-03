// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.pokehunt.xyz',
	integrations: [
		starlight({
			title: 'PokéHunt',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pokehunt-xyz' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'How to start', slug: 'guides/start' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
