// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Blog',
					items: [
						{ label: '📚 All Posts Archive', slug: 'blog/index' },
						{ label: 'First Post', slug: 'blog/first-post' },
						{ label: 'Second Post', slug: 'blog/second-post' },
						{ label: 'Third Post', slug: 'blog/third-post' },
						{ label: 'Fourth Post', slug: 'blog/fourth-post' },
						{ label: 'Fifth Post', slug: 'blog/fifth-post' },
					],
				},
			],
		}),
	],
});
