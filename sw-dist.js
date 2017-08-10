"use strict";

var CACHE_NAME = "bufon-Restaurant-v1", cacheUrls = [ "/offline/view.html", "/offline/style.css", "/offline/mapa.jpg" ];

self.addEventListener("install", function(e) {
    console.log("Instalando"), caches.open(CACHE_NAME).then(function(e) {
        return console.log("Opened cache"), e.addAll(cacheUrls);
    });
}), self.addEventListener("activate", function(e) {
    e.waitUntil(caches.keys().then(function(e) {
        return Promise.all(e.map(function(e) {
            if (CACHE_NAME !== e) return caches.delete(e);
        }));
    }));
}), self.addEventListener("fetch", function(e) {
    e.respondWith(caches.match(e.request).then(function(n) {
        return n || fetch(e.request);
    }).catch(function(n) {
        if ("navigate" == e.request.mode) return caches.match("/offline/view.html");
    }));
});