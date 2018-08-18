const cacheVersion = ('v1');

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

self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');

  event.waitUntil(
    caches.open(cacheVersion).then(cache => {
      cache.addAll(cachedPages);
    })
     .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker Activated');
});
