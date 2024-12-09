const CACHE_NAME = 'film-app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json'
];

// Instalace service workeru
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Soubory jsou ukládány do cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Aktivace service workeru
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Cache byla odstraněna:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Zachytávání síťových požadavků
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
