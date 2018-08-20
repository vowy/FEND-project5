const cacheName = 'v1';
const cachedPages = [
  'index.html',
  'restaurant.html',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg'
];

self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');

  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(cachedPages);
    })
     .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker Activated');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map
      )
    })
  )
});
