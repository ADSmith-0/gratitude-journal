import { build, files, timestamp } from '$service-worker';
const urlsToCache = [...build, ...files];

const cacheName = `pwa-assets${timestamp}`;

console.log("[Service Worker] working")

self.addEventListener('install', async () => {
    const cache = await caches.open(cacheName);
    // it stores all resources on first SW install
    cache.addAll(urlsToCache);
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(async (keys) => {
            for(const key of keys){
                if (key !== cacheName) await caches.delete(key);
            }
            self.clients.claim();
        })
    );
});

self.addEventListener("fetch", async event => {
    const cache = await caches.open(cacheName);
    const { request } = event;
    event.respondWith(
        caches.match(request)
            .then(cachedResponse => {
                // It can update the cache to serve updated content on the next request
                return cachedResponse || cache.put(request, fetch(request));
            }
        )
    )
});
