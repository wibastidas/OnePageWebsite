const CACHE_NAME = "bufon-Restaurant-v1"
const cacheUrls = [
					"/offline/view.html",
					"/offline/style.css",
					"/offline/mapa.jpg"
					]

self.addEventListener('install', function(event) {
  console.log("Instalando")
  caches.open(CACHE_NAME)
	  .then(function(cache) {
	    console.log('Opened cache')
	    return cache.addAll(cacheUrls)
	  });
});

self.addEventListener("activate",function(ev){
	ev.waitUntil(
		caches.keys().then(function(cache_names){
			return Promise.all(
				cache_names.map(function(cache_name){
					if(CACHE_NAME !== cache_name){

						return caches.delete(cache_name)
					}
				})
			)
		})
	)
})

self.addEventListener("fetch",function(ev){
	ev.respondWith(
		caches.match(ev.request)
			.then(function(response){
				if(response){
					return response
				}
				return fetch(ev.request)
			}).catch(function(err){
				if(ev.request.mode == "navigate"){
					return caches.match("/offline/view.html")
				}
			})
	)
})