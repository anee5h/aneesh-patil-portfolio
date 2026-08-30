// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	i18n: {
		locales: ['en', 'ja'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		},
	},
});
