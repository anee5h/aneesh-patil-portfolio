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
			viewCaseStudy: 'View case study',
			exploreProjects: 'Explore my projects',
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
			metaTitle: 'Aneesh Patil | Software Engineer / Greater Tokyo Area',
			metaDescription: 'Aneesh Patil is a software engineer based in the Greater Tokyo Area who builds and maintains web applications across frontend, backend, and cloud infrastructure.',
			eyebrow: 'Software Engineer / Greater Tokyo Area',
			title: 'Aneesh Patil',
			intro: [
				"I'm a software engineer based in the Greater Tokyo Area. I build web applications, API integrations, and cloud services.",
				'I enjoy working across the stack, especially untangling data issues and keeping systems reliable after release.',
			],
			stack: 'React · TypeScript · JavaScript · Node.js · Python · AWS',
			availabilityTitle: 'Actively seeking software engineering roles',
			availabilityLocation: 'Tokyo 23 Wards · Remote in Japan',
			experienceTitle: 'Experience',
			projectTitle: 'Projects',
			writingTitle: 'Writing',
			writingEmpty: 'First posts coming soon.',
		},
		work: {
			metaTitle: 'Projects | Aneesh Patil',
			metaDescription: 'Projects I have built and am still working on.',
			title: 'Projects',
			empty: "I'll add more projects when they are ready to share.",
		},
		about: {
			metaTitle: 'About | Aneesh Patil',
			metaDescription: "Aneesh Patil's experience in system engineering, full-stack web development, APIs, cloud infrastructure, and data work.",
			title: 'About',
			intro: [
				"I'm a software engineer in the Greater Tokyo Area, with over five years of IT experience, including more than four years in web application development.",
				"I began in data analysis and operations for Amazon Japan's Kindle business, then moved into system engineering and full-stack web development. Since then, I've worked on web applications, system integrations, APIs, data migrations, and cloud services across several industries.",
				"I've built frontend applications with React and TypeScript, backend services with Node.js and Python, and cloud-based systems on AWS. My work has covered the development cycle, from requirements and technical design to implementation, testing, release, and production maintenance.",
				"I enjoy understanding how different parts of a system fit together and solving real-world problems. I read Hacker News to keep up with new developments in tech and try out technologies that interest me. Outside work, I'm building Meguruto, a travel discovery and planning product for Japan.",
			],
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
				{ name: 'Japanese', level: 'Business level', note: 'JLPT N2 certified' },
				{ name: 'English', level: 'Fluent' },
				{ name: 'Marathi', level: 'Native' },
				{ name: 'Hindi', level: 'Fluent' },
			] as const,
			skillsTitle: 'Tools & capabilities',
			skills: [
				{ title: 'Frontend', technologies: ['React', 'TypeScript', 'JavaScript', 'Astro'] },
				{ title: 'Backend & APIs', technologies: ['Node.js', 'Python', 'REST APIs'] },
				{ title: 'Cloud & Data', technologies: ['AWS', 'Supabase', 'SQL', 'Cloudflare'] },
				{ title: 'Testing & Quality', technologies: ['Playwright', 'Vitest', 'Jest'] },
			] as const,
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
			architectureServices: 'Data & external services',
			architectureDeployment: 'Deployment',
			fullSizeDiagram: 'View the diagram at full size',
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
			viewCaseStudy: 'ケーススタディを見る',
			exploreProjects: 'プロジェクトを見る',
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
			metaTitle: 'パティルアニシュ | ソフトウェアエンジニア / 首都圏',
			metaDescription: 'フロントエンド、バックエンド、クラウドまで、Webアプリケーションの開発と保守に携わるパティルアニシュの職務経歴です。',
			eyebrow: 'ソフトウェアエンジニア / 首都圏',
			title: 'パティルアニシュ',
			intro: [
				'首都圏で活動するソフトウェアエンジニアです。WebアプリケーションやAPI連携、クラウドサービスを開発しています。',
				'フロントエンドからバックエンドまで幅広く関わり、データの課題を解決しながら、リリース後も安定して使えるシステムを作るのが好きです。',
			],
			stack: 'React · TypeScript · JavaScript · Node.js · Python · AWS',
			availabilityTitle: 'ソフトウェアエンジニア職を積極的に探しています。',
			availabilityLocation: '東京23区 / 日本国内リモート',
			experienceTitle: '職務経歴',
			projectTitle: 'プロジェクト',
			writingTitle: 'ブログ',
			writingEmpty: '最初の記事を準備中です。',
		},
		work: {
			metaTitle: 'プロジェクト | パティルアニシュ',
			metaDescription: '作ったものや、現在開発中のプロジェクトを紹介します。',
			title: 'プロジェクト',
			empty: '公開できるプロジェクトを準備中です。',
		},
		about: {
			metaTitle: 'プロフィール | パティルアニシュ',
			metaDescription: 'パティルアニシュのシステムエンジニアリング、フルスタックWeb開発、API、クラウド、データ分析の経験です。',
			title: 'プロフィール',
			intro: [
				'首都圏で活動するソフトウェアエンジニアです。IT業界で5年以上、Webアプリケーション開発で4年以上の経験があります。',
				'Amazon JapanのKindle部門でデータ分析や運用業務を担当した後、システムエンジニアとしてWebアプリケーション開発やシステム連携に携わってきました。複数の業界で、API開発やデータ移行、クラウドを使ったシステム開発も経験しています。',
				'React・TypeScriptを使ったフロントエンド開発、Node.js・Pythonを使ったバックエンド開発、AWSを使ったクラウドサービス開発を経験しています。要件整理や設計から、実装・テスト・リリース、その後の保守まで担当してきました。',
				'システム全体の動きを理解し、実際の課題に合った解決策を考えるのが好きです。普段はHacker Newsで技術の動向を追い、気になったものを試しています。個人では、日本の旅行先探しや旅行計画を助ける「Meguruto」を開発しています。',
			],
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
				{ name: '日本語', level: 'ビジネスレベル', note: 'JLPT N2認定' },
				{ name: '英語', level: '流暢' },
				{ name: 'マラーティー語', level: '母語' },
				{ name: 'ヒンディー語', level: '流暢' },
			] as const,
			skillsTitle: '技術・対応領域',
			skills: [
				{ title: 'フロントエンド', technologies: ['React', 'TypeScript', 'JavaScript', 'Astro'] },
				{ title: 'バックエンド・API', technologies: ['Node.js', 'Python', 'REST API'] },
				{ title: 'クラウド・データ', technologies: ['AWS', 'Supabase', 'SQL', 'Cloudflare'] },
				{ title: 'テスト・品質', technologies: ['Playwright', 'Vitest', 'Jest'] },
			] as const,
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
			architectureServices: 'データ・外部サービス',
			architectureDeployment: 'デプロイ先',
			fullSizeDiagram: '構成図を原寸大で見る',
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
