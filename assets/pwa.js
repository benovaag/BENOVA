const CACHE = "pwabuilder-precache";
const precacheFiles = [
  /* Array contendo os arquivos para cache */
];

self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Iniciando instalação");

  console.log("[PWA Builder] Próxima etapa de instalação");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Cacheando páginas durante a instalação");
      return cache.addAll(precacheFiles);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("[PWA Builder] Reivindicando clientes para a página atual");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) { 
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request).then(
      function (response) {

        event.waitUntil(
          fetch(event.request).then(function (response) {
            return updateCache(event.request, response);
          })
        );

        return response;
      },
      function () {

        return fetch(event.request)
          .then(function (response) {

            event.waitUntil(updateCache(event.request, response.clone()));

            return response;
          })
          .catch(function (error) {
            console.log("[PWA Builder] Falha na conexão" + error);
          });
      }
    )
  );
});

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}
