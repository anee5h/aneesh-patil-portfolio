const BUILD_ID = '__PWA_BUILD_ID__';
const PAGE_URLS = new Set('__PWA_PAGE_URLS__');
const CACHE_PREFIX = 'aneesh-patil-pwa-';
const CACHE_NAME = `${CACHE_PREFIX}${BUILD_ID}`;
const PRECACHE_MANIFEST_URL = '/precache-manifest.json';

self.addEventListener('install', (event) => {
	event.waitUntil((async () => {
		const response = await fetch(PRECACHE_MANIFEST_URL, { cache: 'no-store' });
		if (!response.ok) throw new Error(`Precache manifest request failed: ${response.status}`);

		const manifest = await response.json();
		if (manifest.version !== BUILD_ID || !Array.isArray(manifest.urls) || !Array.isArray(manifest.pages)) {
			throw new Error('Precache manifest does not match this service worker.');
		}

		const cache = await caches.open(CACHE_NAME);
		await cache.addAll(manifest.urls);
		await self.skipWaiting();
		})());
});

self.addEventListener('activate', (event) => {
	event.waitUntil((async () => {
		const cacheNames = await caches.keys();
		await Promise.all(cacheNames
			.filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
			.map((name) => caches.delete(name)));
		await self.clients.claim();
		})());
});

self.addEventListener('fetch', (event) => {
	const { request } = event;
	const url = new URL(request.url);
	if (request.method !== 'GET'
		|| url.origin !== self.location.origin
		|| url.pathname === '/sw.js'
		|| url.pathname === PRECACHE_MANIFEST_URL
		|| url.pathname.toLowerCase().endsWith('.pdf')) return;

	if (request.mode === 'navigate' || PAGE_URLS.has(url.pathname)) {
		event.respondWith(networkFirst(request));
		return;
	}

	event.respondWith(cacheFirst(request));
});

async function networkFirst(request) {
	const cache = await caches.open(CACHE_NAME);
	try {
		const response = await fetch(request);
		if (response.ok) await cache.put(request, response.clone());
		return response;
	} catch {
		return await cache.match(request, { ignoreSearch: true }) ?? new Response(
			'<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Offline</title><body><main><h1>You are offline</h1><p>This page is not cached yet. Connect to the internet and try again.</p><p lang="ja">オフラインです。このページはまだキャッシュされていません。ネットワークに接続してから再度お試しください。</p><a href="/">Portfolio / ポートフォリオ</a></main></body></html>',
			{ status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
		);
	}
}

async function cacheFirst(request) {
	const cache = await caches.open(CACHE_NAME);
	const cached = await cache.match(request, { ignoreSearch: true });
	if (cached) return cached;

	try {
		const response = await fetch(request);
		if (response.ok) await cache.put(request, response.clone());
		return response;
	} catch {
		return new Response('', { status: 504, statusText: 'Offline' });
	}
}
