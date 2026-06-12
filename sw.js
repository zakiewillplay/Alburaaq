const CACHE_NAME = 'digity-cache-v3';

self.addEventListener('install', event => {
  self.skipWaiting();
  // Don't cache anything during install – just activate immediately
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Always try the network first, fall back to cache if offline
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache the fresh response for offline use
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});