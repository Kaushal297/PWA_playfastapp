// service-worker.js
const cacheName = 'play-fast-app-cache-v1';
const cacheFiles = [
    // '/',
    // '/about/index.html',
    // '/contact/index.html',
    // '/terms/index.html',
    '/styles/bootstrap.min.css',
    // '/styles/main.css',
    '/scripts/bootstrap.bundle.min.js',
    // '/scripts/index.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((thisCacheName) => {
                    if (thisCacheName !== cacheName) {
                        return caches.delete(thisCacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
