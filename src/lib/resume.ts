import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Locale } from '../data/site';

export type ResumeDocumentKey = 'cv' | 'resume' | 'shokumukeirekisho' | 'rirekisho';

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
		href: '/Aneesh_Patil_Resume_EN_Public.pdf',
		file: 'public/Aneesh_Patil_Resume_EN_Public.pdf',
		label: { en: 'English résumé', ja: '英文レジュメ' },
	},
	{
		key: 'cv',
		href: '/Aneesh_Patil_CV_EN_Public.pdf',
		file: 'public/Aneesh_Patil_CV_EN_Public.pdf',
		label: { en: 'English CV', ja: '英文職務経歴書' },
	},
	{
		key: 'rirekisho',
		href: '/履歴書_パティルアニシュシャシカント_公開用.pdf',
		file: 'public/履歴書_パティルアニシュシャシカント_公開用.pdf',
		label: { en: 'Japanese résumé', ja: '履歴書' },
	},
	{
		key: 'shokumukeirekisho',
		href: '/職務経歴書_パティルアニシュシャシカント_公開用.pdf',
		file: 'public/職務経歴書_パティルアニシュシャシカント_公開用.pdf',
		label: { en: 'Japanese work history', ja: '職務経歴書' },
	},
];

export const resumeDocuments: ResumeDocument[] = definitions.map((document) => ({
	...document,
	available: existsSync(resolve(process.cwd(), document.file)),
}));

export function getResumeDocuments(locale: Locale) {
	const order: ResumeDocumentKey[] = locale === 'ja'
		? ['rirekisho', 'shokumukeirekisho', 'resume', 'cv']
		: ['resume', 'cv', 'rirekisho', 'shokumukeirekisho'];

	return resumeDocuments
		.filter((document) => document.available)
		.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key))
		.map(({ key, href, label }) => ({ key, href, label: label[locale] }));
}
