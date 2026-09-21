import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Locale } from '../data/site';

export type ResumeDocumentKey = 'resume' | 'shokumukeirekisho' | 'rirekisho';

interface ResumeDocumentDefinition {
	key: ResumeDocumentKey;
	href: string;
	file: string;
	label: Record<Locale, string>;
}

export interface ResumeDocument extends ResumeDocumentDefinition {
	available: boolean;
}

const definitions: ResumeDocumentDefinition[] = [
	{
		key: 'resume',
		href: '/resume.pdf',
		file: 'public/resume.pdf',
		label: { en: 'English résumé', ja: '英文レジュメ' },
	},
	{
		key: 'shokumukeirekisho',
		href: '/shokumukeirekisho.pdf',
		file: 'public/shokumukeirekisho.pdf',
		label: { en: 'Japanese work history', ja: '職務経歴書' },
	},
	{
		key: 'rirekisho',
		href: '/rirekisho.pdf',
		file: 'public/rirekisho.pdf',
		label: { en: 'Japanese résumé', ja: '履歴書' },
	},
];

export const resumeDocuments: ResumeDocument[] = definitions.map((document) => ({
	...document,
	available: existsSync(resolve(process.cwd(), document.file)),
}));

export function getResumeDocuments(locale: Locale) {
	return resumeDocuments
		.filter((document) => document.available)
		.map(({ key, href, label }) => ({ key, href, label: label[locale] }));
}
