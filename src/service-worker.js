// src/service-worker.js
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheFirst } from 'workbox-strategies';

// Precache all files
// precacheAndRoute(self.__WB_MANIFEST);
globalThis.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('static-cache-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/static/css/main.chunk.css',
          '/static/js/main.chunk.js',
          '/static/js/0.chunk.js',
          '/manifest.json',
          // Add more paths to cache as needed
        ]);
      })
    );
  });
  


// Cache CSS, JS, and images with StaleWhileRevalidate strategy
registerRoute(
  /\.(?:js|css|png|jpg|jpeg|svg)$/,
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Cache other resources with NetworkFirst strategy
registerRoute(
  /\.(?:woff|woff2|html|json)$/,
  new NetworkFirst({
    cacheName: 'other-resources',
  })
);

// Cache API responses with CacheFirst strategy
registerRoute(
  /\/api\//,
  new CacheFirst({
    cacheName: 'api-cache',
  })
);
