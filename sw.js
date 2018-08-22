const cacheName = 'v2';
const cachedPages = [
  "/./",
  'index.html',
  'restaurant.html',
  'http://localhost:3000/restaurant.html?id=1',
  'http://localhost:3000/restaurant.html?id=2',
  'http://localhost:3000/restaurant.html?id=3',
  'http://localhost:3000/restaurant.html?id=4',
  'http://localhost:3000/restaurant.html?id=5',
  'http://localhost:3000/restaurant.html?id=6',
  'http://localhost:3000/restaurant.html?id=7',
  'http://localhost:3000/restaurant.html?id=8',
  'http://localhost:3000/restaurant.html?id=9',
  'http://localhost:3000/restaurant.html?id=10',
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

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      return cache.addAll(cachedPages);
    })
  );
});


self.addEventListener('activate', (e) => {
  console.log('Service Worker Activated');
  e.waitUntil(
    caches.keys().then(cacheName => {
      return Promise.all(
        cacheName.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          };
        })
      )
    })
  )
});

self.addEventListener ('fetch', (e) => {
 e.respondWith(
   fetch(e.request).catch(
    () => caches.match(e.request)
 ));
});
