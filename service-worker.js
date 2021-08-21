// Register service worker.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
          .then((reg) => {
            console.log('Service worker registered.', reg);
          });
    });
  }
  

//Add list of files to cache here.
const FILES_TO_CACHE = [
    'offline.html',
 ];
 
 
 self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
 }); 