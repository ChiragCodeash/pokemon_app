const CACHE_NAME = "pokemonV1";
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/manifest.json",
  "/favicon.ico",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  //   "/css/bootstrap.min.css",
  //   "/bootstrap.bundle.min.js",
];

// this.addEventListener("load", (e) => {
//   e.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       cache.addAll(urlsToCache);
//     })
//   );
// });

this.addEventListener("install", (e) => {
    console.log("Call INSTALL ")
    // return
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urlsToCache);
    })
  );
});
// this.addEventListener("load", (e) => {
//   e.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       cache.addAll(urlsToCache);
//     })
//   );
// });

// this.addEventListener("fetch", (event) => {
//   if (!navigator.onLine) {
//     event.respondWith(
//       caches
//         .match(event.request)
//         .then((resp) => {
//           if (resp) {
//             return resp;
//           }
//         })
//         .catch((err) => {
//           console.log("Error ---> ", err);
//         })
//     );
//   }else{
//     c
//   }
// });
self.addEventListener("fetch", (event) => {
    console.log("Call FETCH ")
    // return
  if (navigator.onLine) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchedResponse = fetch(event.request).then(
            (networkResponse) => {
              cache.put(event.request, networkResponse.clone());

              return networkResponse;
            }
          );

          return fetchedResponse;
        });
      })
    );
  }else{
    event.respondWith(caches.open(CACHE_NAME).then((cache) =>{
        return cache.match(event.request).then((res)=>{
            return res
        })
    }))
  }
});
