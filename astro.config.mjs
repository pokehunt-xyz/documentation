// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://docs.pokehunt.xyz',
	integrations: [
		starlight({
			title: 'PokéHunt',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pokehunt-xyz' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Commands',
					autogenerate: { directory: 'commands' },
					collapsed: true,
				},
			],
		}),
	],
});
