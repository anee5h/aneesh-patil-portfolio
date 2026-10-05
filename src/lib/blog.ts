import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../data/site';

export type BlogEntry = CollectionEntry<'blog'>;

function comparePosts(left: BlogEntry, right: BlogEntry) {
	const dateOrder = right.data.date.getTime() - left.data.date.getTime();
	if (dateOrder !== 0) return dateOrder;

	return left.data.slug.localeCompare(right.data.slug);
}

export function getPublicPosts(locale: Locale) {
	return getCollection('blog', ({ data }) => data.locale === locale && data.published)
		.then((posts) => posts.sort(comparePosts));
}

export function getPublicBlogEntries() {
	return getCollection('blog', ({ data }) => data.published);
}

export function formatBlogDate(date: Date, locale: Locale) {
	return new Intl.DateTimeFormat(locale === 'ja' ? 'ja-JP' : 'en-US', {
		dateStyle: 'long',
		timeZone: 'UTC',
	}).format(date);
}
