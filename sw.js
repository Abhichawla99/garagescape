// Service Worker for GarageScape.ca
const CACHE_NAME = 'garagescape-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/images/hero-garage-organization.jpg',
  '/images/garage-organization-before-after-1.jpg',
  '/images/garage-organization-before-after-2.jpg',
  '/images/garage-cleaning-before-after.jpg',
  '/images/custom-shelving-installation.jpg',
  '/images/epoxy-flooring-result.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
