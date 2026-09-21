// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://anee5h.com',
	trailingSlash: 'always',
	prefetch: {
		prefetchAll: false,
	},
	devToolbar: {
		enabled: false,
	},
	integrations: [sitemap({
		filter: (page) => {
			const pathname = new URL(page).pathname;
			return pathname !== '/' && !/^\/(?:en|ja)\/(?:blog|resume)(?:\/|$)/.test(pathname);
		},
	})],
	i18n: {
		locales: ['en', 'ja'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
