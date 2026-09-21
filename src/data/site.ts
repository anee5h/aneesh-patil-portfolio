import { experienceByLocale } from './experience';

export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const siteLinks = {
	github: 'https://github.com/anee5h',
	linkedin: 'https://linkedin.com/in/anee5h',
	email: 'mailto:hello@anee5h.com',
} as const;

const copy = {
	en: {
			nav: {
				work: 'Projects',
				writing: 'Blog',
			about: 'About',
		},
		actions: {
			viewCaseStudy: 'Case study',
			github: 'GitHub',
			liveProduct: 'Live product',
			pullRequest: 'Pull requests',
			backToWork: 'Back to Projects',
		},
		status: {
			live: 'Live',
			building: 'In progress',
			planned: 'Planned',
		},
		home: {
			metaTitle: 'Aneesh Patil | Software Engineer in Japan',
			metaDescription: 'Aneesh Patil is a software engineer in Japan who builds and maintains web applications across frontend, backend, and cloud infrastructure.',
			eyebrow: 'Software engineer / Yokohama, Japan',
			title: 'Aneesh Patil',
			intro: [
				'I build web products from idea to production.',
				"I'm a software engineer working across frontend, backend, and cloud infrastructure.",
			],
			stack: 'React · TypeScript · Node.js · Python · AWS',
			availabilityTitle: 'Open to software engineering opportunities',
			availabilityLocation: 'Tokyo · Remote in Japan',
			experienceTitle: 'Experience',
			experienceText: "Where I've worked and what I did there.",
			projectEyebrow: 'Projects',
			projectIntro: "A collection of things I've built, am building, and learned along the way.",
			writingTitle: 'Writing',
			writingText: "Notes on software engineering, things I've built, and technologies I'm curious about.",
			writingEmpty: 'First posts coming soon.',
		},
		work: {
			metaTitle: 'Projects | Aneesh Patil',
			metaDescription: 'Projects I have built and am still working on.',
			title: 'Projects',
			intro: "A collection of things I've built, am building, and learned along the way.",
			empty: "I'll add more projects when they are ready to share.",
		},
		about: {
			metaTitle: 'About | Aneesh Patil',
			metaDescription: "Aneesh Patil's experience in system engineering, full-stack web development, APIs, cloud infrastructure, and data work.",
			title: 'About',
			intro: 'I started in IT operations and data-focused work, then moved into system engineering and full-stack web development. I work across product development, APIs, cloud infrastructure, and maintenance.',
			experienceTitle: 'Professional experience',
			experience: experienceByLocale.en,
			educationTitle: 'Education',
			education: [
				{
					title: 'Master of Technology in Manufacturing Engineering',
					institution: 'National Institute of Technology Karnataka (NITK)',
					year: '2019',
				},
				{
					title: 'Bachelor of Engineering in Mechanical Engineering',
					institution: 'Shivaji University',
					year: '2016',
				},
			] as const,
			languagesTitle: 'Languages',
			languages: [
				{ name: 'English', level: 'Business level' },
				{ name: 'Japanese', level: 'Business level', note: 'JLPT N2' },
			] as const,
			skillsTitle: 'Tools & capabilities',
			skills: [
				{ title: 'Frontend', technologies: ['React', 'TypeScript', 'JavaScript', 'Astro'] },
				{ title: 'Backend & APIs', technologies: ['Node.js', 'Python', 'PHP', 'REST APIs'] },
				{ title: 'Cloud & data', technologies: ['AWS Lambda', 'API Gateway', 'SQL', 'Supabase', 'Cloudflare Pages'] },
				{ title: 'Quality & testing', technologies: ['Playwright', 'Vitest', 'Jest'] },
			] as const,
			supportingSkillsTitle: 'Also used',
			supportingSkills: ['Zendesk API', 'Git', 'GitHub', 'GitLab', 'Linear', 'Backlog'],
		},
		resumePage: {
			metaTitle: 'Résumé | Aneesh Patil',
			metaDescription: 'Career documents, education, and technical experience for Aneesh Patil.',
			title: 'Résumé',
			intro: 'Experience, education, and the technical work behind my career.',
			downloadsTitle: 'Downloads',
			downloadsText: 'Download the available documents as PDFs.',
			pendingText: 'Public documents will appear here when they are ready.',
		},
		writing: {
			metaTitle: 'Blog | Aneesh Patil',
			metaDescription: 'Notes on software engineering, projects, and technologies I’m exploring.',
			title: 'Blog',
			intro: "Notes on software engineering, things I've built, and technologies I'm curious about.",
			emptyTitle: 'Nothing published yet',
			emptyText: 'I’m working on my first few posts. In the meantime, you can explore my projects.',
		},
		project: {
			featured: 'Project',
			role: 'Role',
			year: 'Year',
			stack: 'Stack',
			links: 'Links',
			status: 'Status',
		},
		notFound: {
			title: 'Page not found',
			text: 'The page you requested does not exist, or it has moved.',
			jaText: 'お探しのページは存在しないか、移動しました。',
		},
	},
	ja: {
		nav: {
			work: 'プロジェクト',
			writing: 'ブログ',
			about: 'プロフィール',
		},
		actions: {
			viewCaseStudy: 'ケーススタディ',
			github: 'GitHub',
			liveProduct: 'プロダクトを見る',
			pullRequest: 'プルリクエスト',
			backToWork: 'プロジェクトに戻る',
		},
		status: {
			live: '公開中',
			building: '開発中',
			planned: '計画中',
		},
		home: {
			metaTitle: 'パティルアニシュ | 日本のソフトウェアエンジニア',
			metaDescription: 'フロントエンド、バックエンド、クラウドまで、Webアプリケーションの開発と保守に携わるパティルアニシュの職務経歴です。',
			eyebrow: 'Software engineer / 横浜・日本',
			title: 'パティルアニシュ',
			intro: [
				'アイデアを形にし、実際に使えるWebプロダクトを開発しています。',
				'フロントエンドからバックエンド、クラウドまで幅広く携わっています。',
			],
			stack: 'React · TypeScript · Node.js · Python · AWS',
			availabilityTitle: 'ソフトウェアエンジニアとしての新しい機会を探しています。',
			availabilityLocation: '東京・日本国内のリモート',
			experienceTitle: '職務経歴',
			experienceText: 'これまでの開発とプロジェクト推進の経験です。',
			projectEyebrow: 'プロジェクト',
			projectIntro: 'これまでに作ったものや、現在取り組んでいるもの、その開発を通じて学んだことを紹介します。',
			writingTitle: 'ブログ',
			writingText: '開発したもの、試している技術、エンジニアリングについて書いていきます。',
			writingEmpty: '最初の記事を準備中です。',
		},
		work: {
			metaTitle: 'プロジェクト | パティルアニシュ',
			metaDescription: '作ったものや、現在開発中のプロジェクトを紹介します。',
			title: 'プロジェクト',
			intro: 'これまでに作ったものや、現在取り組んでいるもの、その開発を通じて学んだことを紹介します。',
			empty: '公開できるプロジェクトを準備中です。',
		},
		about: {
			metaTitle: 'プロフィール | パティルアニシュ',
			metaDescription: 'パティルアニシュのシステムエンジニアリング、フルスタックWeb開発、API、クラウド、データ分析の経験です。',
			title: 'プロフィール',
			intro: 'IT運用とデータ分析からキャリアを始め、現在はシステムエンジニアリングとフルスタックのWeb開発に携わっています。プロダクト開発、API、クラウドインフラ、運用・改善まで担当しています。',
			experienceTitle: '職務経歴',
			experience: experienceByLocale.ja,
			educationTitle: '学歴',
			education: [
				{
					title: '製造工学専攻 工学修士',
					institution: 'National Institute of Technology Karnataka（NITK）',
					year: '2019年',
				},
				{
					title: '機械工学科 工学士',
					institution: 'Shivaji University',
					year: '2016年',
				},
			] as const,
			languagesTitle: '言語',
			languages: [
				{ name: '英語', level: 'ビジネスレベル' },
				{ name: '日本語', level: 'ビジネスレベル', note: 'JLPT N2' },
			] as const,
			skillsTitle: '技術・対応領域',
			skills: [
				{ title: 'フロントエンド', technologies: ['React', 'TypeScript', 'JavaScript', 'Astro'] },
				{ title: 'バックエンド・API', technologies: ['Node.js', 'Python', 'PHP', 'REST API'] },
				{ title: 'クラウド・データ', technologies: ['AWS Lambda', 'API Gateway', 'SQL', 'Supabase', 'Cloudflare Pages'] },
				{ title: '品質・テスト', technologies: ['Playwright', 'Vitest', 'Jest'] },
			] as const,
			supportingSkillsTitle: 'その他の経験',
			supportingSkills: ['Zendesk API', 'Git', 'GitHub', 'GitLab', 'Linear', 'Backlog'],
		},
		resumePage: {
			metaTitle: '職務経歴書・履歴書 | パティルアニシュ',
			metaDescription: 'パティルアニシュの職務経歴書、履歴書、技術経験をまとめています。',
			title: '職務経歴書・履歴書',
			intro: '職務経験、学歴、技術経験をまとめています。',
			downloadsTitle: 'ダウンロード',
			downloadsText: '公開中の書類をPDFでダウンロードできます。',
			pendingText: '公開用の書類は準備中です。',
		},
		writing: {
			metaTitle: 'ブログ | パティルアニシュ',
			metaDescription: 'ソフトウェア開発、作ったもの、試している技術についてのノートです。',
			title: 'ブログ',
			intro: 'ソフトウェア開発、作ったもの、気になっている技術についてのノートです。',
			emptyTitle: 'まだ公開記事はありません',
			emptyText: '最初の記事を準備中です。まずはプロジェクトをご覧ください。',
		},
		project: {
			featured: 'プロジェクト',
			role: '担当',
			year: '年',
			stack: '技術',
			links: 'リンク',
			status: 'ステータス',
		},
		notFound: {
			title: 'ページが見つかりません',
			text: 'お探しのページは存在しないか、移動しました。',
			jaText: 'The page you requested does not exist, or it has moved.',
		},
	},
} as const;

export function getCopy(locale: Locale) {
	return copy[locale];
}
