const CACHE_NAME = 'drk-cache-v1';
const urlsToCache = [
  './',
  './index.htm',
  './design.css',
  './DRK_Logo3.svg',
  './movie2.mp4'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
