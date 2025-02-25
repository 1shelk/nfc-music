self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('nfc-music').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/music.mp3',
                '/photo.jpg',
                '/app.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
