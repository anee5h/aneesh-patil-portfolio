import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDirectory = resolve('dist');
const workerPath = resolve('public/sw.js');
const workerOutputPath = resolve(distDirectory, 'sw.js');
const precacheManifestPath = resolve(distDirectory, 'precache-manifest.json');

async function listFiles(directory) {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = await Promise.all(entries.map(async (entry) => {
		const entryPath = resolve(directory, entry.name);
		return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
	}));
	return files.flat();
}

function publicUrl(filePath) {
	const relativePath = filePath.slice(distDirectory.length + 1).split(/[\\/]/).join('/');
	if (relativePath === 'index.html') return '/';
	if (relativePath.endsWith('/index.html')) return `/${relativePath.slice(0, -'index.html'.length)}`;
	return `/${relativePath}`;
}

const files = (await listFiles(distDirectory))
	.filter((filePath) => {
		const relativePath = filePath.slice(distDirectory.length + 1).split(/[\\/]/).join('/');
		return relativePath !== 'sw.js'
			&& relativePath !== 'precache-manifest.json'
			&& relativePath !== '404.html'
			&& !relativePath.toLowerCase().endsWith('.pdf')
			&& !relativePath.toLowerCase().endsWith('.map');
	})
	.map((filePath) => ({ filePath, url: publicUrl(filePath) }))
	.sort((left, right) => left.url.localeCompare(right.url));
const pages = files
	.filter(({ filePath }) => filePath.toLowerCase().endsWith('.html'))
	.map(({ url }) => url);

if (!files.some(({ url }) => url === '/') || !files.some(({ url }) => url === '/en/') || !files.some(({ url }) => url === '/ja/')) {
	throw new Error('The root, English, and Japanese home pages must be present in the PWA precache.');
}

const hash = createHash('sha256');
hash.update(await readFile(workerPath));
for (const { filePath, url } of files) {
	hash.update(url);
	hash.update('\0');
	hash.update(await readFile(filePath));
	hash.update('\0');
}
const version = hash.digest('hex').slice(0, 16);

const worker = await readFile(workerOutputPath, 'utf8');
if (!worker.includes('__PWA_BUILD_ID__') || !worker.includes('__PWA_PAGE_URLS__')) {
	throw new Error('Service worker build placeholders are missing.');
}
const builtWorker = worker
	.replaceAll('__PWA_BUILD_ID__', version)
	.replace('__PWA_PAGE_URLS__', JSON.stringify(pages));
await writeFile(workerOutputPath, builtWorker);
await writeFile(precacheManifestPath, `${JSON.stringify({ version, pages, urls: files.map(({ url }) => url) }, null, 2)}\n`);

console.log(`Generated PWA precache for ${files.length} URLs (build ${version}).`);
