"use strict";
console.log("is sw.mjs")
//https://web.dev/install-criteria/
//https://web.dev/customize-install/

//console.log("sw.js")
//cache items
const cacheName = 'site-static';
const assets =[
    '/',
    "/img/favicon.ico",
    "/img/testimg.jpg",
    "/img/icon.jpg",
    "/lib/three/three.mjs",
    "manifest.json",
    "dice3d.mjs",
    "dog.mjs",
    "tempshader.mjs",
    "register-sw.mjs",
    "sw.mjs"
]

self.addEventListener('install', event => {
    //each time edited
    //console.log(`<sw> service worker installed! ${event}`); 
    self.skipWaiting();                       //force update new service worker

    //for the serviceworker to asyn install before terminating
    event.waitUntil(
        caches.open(cacheName)
        .then(cache=>{

            return Promise.all(
                assets.map(asset => {
                    return cache.add(asset)
                    .then(() => {
                        //console.log(`Successfully cached ${asset}`);
                    })
                    .catch(error => {
                        console.error(`Error caching ${asset}: ${error}`);
                    });
                })
            );

            // console.log(`<sw> caching ${cache}`)
            // cache.addAll(assets)
        })
    )



    // event.waitUntil(
    //     caches.optn("static")
    //     .then(cache =>{
    //         return cache.addAll([]);
    //     })
    // )
});

self.addEventListener('activate', event =>{
    //console.log(`<sw> service worker activated! ${event}`)
})


self.addEventListener("fetch", event =>{
    //console.log(`<sw> intercepting fecth for ${event.request.url}`, event)
    event.respondWith(
        caches.match(event.request).then(response =>{
            return response || fetch(event.request);
        })
    )
});









// self.addEventListener("install", e =>{
//     e.waitUntil(
//         caches.open("static").then(cache =>{
//             return cache.addAll([
//                 "./src", 
//                 "dice3d.js",
//                 "dog.js",
//                 "index.html",
//                  //"index.js",
//                  "register-sw.js",
//                  "tempshader.js",
//                  "/img/icon.jpg"
//             ]);
//         })
//     );
//     console.log("Install running");
// });

// self.addEventListener("install", e => {
//     //enforce updating serviceworker for testing purposes
//     self.skipWaiting();

//     const assets = [
//         "./src", 
//         "dice3d.js",
//         "dog.js",
//         "index.html",
//          "index.js",
//          "register-sw.js",
//          "tempshader.js",
//          "/img/icon.jpg"
//     ];

//     e.waitUntil(
//         caches.open("static")
//             .then(cache => {
//                 return assets.reduce((p, asset) => {
//                     return p.then(() => {cache.add(asset)})
//                     .then(()=>{console.log(`successful cached asset: ${asset}`)})
//                     .catch(error => {
//                         console.error(`Failed to cache asset: ${asset}`);
//                         console.error(error);
//                     });
//                 }, Promise.resolve());
//             })
//     );

//     console.log("Service Worker: Installed");
// });







// self.addEventListener("fetch", e =>{
//     console.log(`intercepting fecth for ${e.request.url}`)
//     e.respondWith(
//         caches.match(e.request).then(response =>{
//             return response || fetch(e.request);
//         })
//     )
// });