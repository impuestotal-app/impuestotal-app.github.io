/* Permite instalar IMPUESTOTAL como aplicación. No guarda datos: todo pasa directo a la red. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
