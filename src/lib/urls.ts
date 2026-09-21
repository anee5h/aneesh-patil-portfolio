import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../data/site';

export function localizedUrl(locale: Locale, path = '') {
	const normalizedPath = path.replace(/^\/+|\/+$/g, '');
	const url = getRelativeLocaleUrl(locale, normalizedPath);

	return url === '/' || url.endsWith('/') ? url : `${url}/`;
}

export function alternateLocalePath(pathname: string, locale: Locale) {
	const path = pathname
		.replace(/^\/(?:en|ja)(?=\/|$)/, '')
		.replace(/^\/+|\/+$/g, '');
	const isKnownPath =
		path === '' ||
		path === 'projects' ||
		path === 'about' ||
		path === 'blog' ||
		path === 'resume' ||
		path === '404' ||
		/^projects\/[^/]+$/.test(path) ||
		/^blog\/[^/]+$/.test(path);

	return localizedUrl(locale, isKnownPath && path !== '404' ? path : '');
}
