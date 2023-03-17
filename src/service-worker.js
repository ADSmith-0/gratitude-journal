import { build, files, version } from '$service-worker';
const ASSETS = [...build, ...files];

const CACHE = `pwa-assets${version}`;

console.log("[Service Worker] working")

self.addEventListener('install', async () => {
    const cache = await caches.open(CACHE);
    // it stores all resources on first SW install
    await cache.addAll(ASSETS);
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(async (keys) => {
            for(const key of keys){
                if (key !== CACHE) await caches.delete(key);
            }
            self.clients.claim();
        })
    );
});

self.addEventListener("fetch", event => {
    async function respond(){
        const url = new URL(event.request.url);
        const cache = await caches.open(CACHE);

        if(ASSETS.includes(url.pathname)){
            return cache.match(event.request);
        }

        try {
            const response = await fetch(event.request);

            if(response.status === 200){
                cache.put(event.request, response.clone());
            }

            return response;
        } catch {
            return cache.match(event.request);
        }
    }
    
    event.respondWith(respond());
});
