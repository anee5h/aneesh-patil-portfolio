import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../data/site';

export type ProjectEntry = CollectionEntry<'projects'>;

function compareProjects(left: ProjectEntry, right: ProjectEntry) {
	const featuredOrder = Number(right.data.featured === true) - Number(left.data.featured === true);
	if (featuredOrder !== 0) return featuredOrder;

	const yearOrder = right.data.year - left.data.year;
	if (yearOrder !== 0) return yearOrder;

	return left.data.projectSlug.localeCompare(right.data.projectSlug);
}

function validateProjectEntries(entries: ProjectEntry[], locale: Locale) {
	const errors: string[] = [];
	const entriesBySlug = new Map<string, ProjectEntry>();

	for (const entry of entries) {
		const previous = entriesBySlug.get(entry.data.projectSlug);
		if (previous) {
			errors.push(
				`Duplicate projectSlug "${entry.data.projectSlug}" for ${locale}: ${previous.id} and ${entry.id}.`,
			);
			continue;
		}

		entriesBySlug.set(entry.data.projectSlug, entry);
	}

	const featured = entries.filter(({ data }) => data.featured === true);
	if (featured.length > 1) {
		errors.push(`Multiple featured projects for ${locale}: ${featured.map(({ id }) => id).join(', ')}.`);
	}

	if (errors.length > 0) {
		throw new Error(`[project catalog] ${errors.join(' ')}`);
	}
}

async function loadPublicProjects(locale: Locale) {
	const entries = await getCollection('projects', ({ data }) => data.locale === locale);
	validateProjectEntries(entries, locale);

	return entries
		.filter(({ data }) => data.published && data.status !== 'planned')
		.sort(compareProjects);
}

export function getPublicProjects(locale: Locale) {
	return loadPublicProjects(locale);
}

export async function getFeaturedProject(locale: Locale) {
	return (await loadPublicProjects(locale))[0];
}
