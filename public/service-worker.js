// self.addEventListener("fetch", event => {
//   // This is a dummy event listener
//   // just to pass the PWA installation criteria on 
//   // some browsers
// });

const CACHE_ROOT = process.env.CACHE_ROOT || 'next-cross-route-example';
const CACHE_VERSION = '0.0.1'

const CACHE_NAME = `${CACHE_ROOT}-${CACHE_VERSION}`;

// // Define assets to be cached
const ASSETS_TO_CACHE = [
    '/',
    
    // '/apple-touch-icon.png',
    // '/favicon-16x16.png',
    // '/favicon-32x32.png',
    // '/favicon.ico',
    // '/logo72.png',
    // '/logo128.png',
    // '/logo144.png',
    // '/logo152.png',
    // '/logo192.png',
    // '/logo384.png',
    // '/logo512.png',
    '/sitemap',
    '/sitemap.xml'
];


function registerEvent(){
  self.addEventListener('register', (event) => {
    console.log('service worker registered');
  });
}


function installEvent () {
  self.addEventListener('install', (event) => {
        event.waitUntil(
          caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                // console.log('cache: ', cache)
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
    console.log('service worker installed');
    
  });
};


//-- Activate service worker
function activateEvent() {
  self.addEventListener('activate', () => {
    console.log('service worker activated');
  });
};

// // Activate service worker
// self.addEventListener('activate', (event) => {
//     event.waitUntil(
//         caches.keys().then((cacheNames) => {
//             return Promise.all(
//                 cacheNames.map((cacheName) => {
//                     if (CACHE_VERSION.indexOf(cacheName) === -1) {
//                         // If this cache name isn't present in the array of "current" cache names, then delete it.
//                         console.log('Deleting out of date cache:', cacheName);
//                         return caches.delete(cacheName);
//                     }
//                 })
//             );
//         })
//     );
//     console.log('Service worker activated');
// });





// // Fetch cached assets
// self.addEventListener('fetch', (event) => {
//   // console.log('event: ', event)
//     event.respondWith(
//         caches.match(event.request)
//             .then((response) => {
//                 if (response) {
//                     // If the request matches a cache entry return the cached response
//                     return response;
//                 }
//                 // Else fetch the asset from the network
//                 return fetch(event.request);
//             })
//             .catch(() => {
//                 // If the request does not match any cached asset and network is not available, return the offline fallback page
//                 return caches.match('/');
//             })
//     );
// });

function fetchEvent(){
  try{
    self.addEventListener('fetch', (e) => {
      // console.log('e', e)
      // console.log('e', e.request.url)
      if(e.request.url.includes('chrome-extension://')) {
      
      return false;
      };
      e.respondWith(
        cacheClone(e)
          .catch(() =>  caches.match(e.request))
          .then((res) => res)
      );
    });
  } 
  catch (err) {
    console.log('err: ', err)
  }
};

async function cacheClone(e) {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(CACHE_NAME);
  await cache.put(e.request, resClone);
  return res;
};


// // Handle push events
self.addEventListener('push', (event) => {
    const data = event.data.json();
    const title = data.title;
    const body = data.message;
    // const icon = '/some-icon.png'; // Update with your icon path
    const notificationOptions = {
        body: body,
        // icon: icon,
        tag: 'simple-push-notification-example'
    };

    if (Notification.permission === 'granted') {
        self.registration.showNotification(title, notificationOptions);
    }
});




function main(){
  registerEvent();
  installEvent();
  activateEvent();
  fetchEvent();
}
main();