
/*self.addEventListener('install', (e) => {

  console.log('install');
 const cachePromise = caches.open('cache1').then( (cache)=> {
    return cache.addAll([
      './../public/index.html'
    ]);
  })

  e.waitUntil(cachePromise)
});


self.addEventListener('activate', () => {

  console.log('activate');

  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      
      windowClient.navigate(windowClient.url);
    }
  });
});


self.addEventListener('fetch', () => {
    console.log('fetch');
});
*/

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// install new service worker when ok, then reload page.
self.addEventListener("message", msg=>{
    console.log('sw');
    if (msg.data.action=='skipWaiting'){
        self.skipWaiting()
    }
})
