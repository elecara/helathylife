// Service worker: rende l'app utilizzabile offline.
// Quando modifichi index.html, cambia il numero di versione qui sotto per aggiornare l'app sul telefono.
const CACHE = "pancia-serena-v1";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Pagina: prima la rete (così prendi gli aggiornamenti), se sei offline usa la copia salvata
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); return r; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  // Font e file statici: prima la cache, poi la rete
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (url.origin === location.origin || url.host.includes("fonts.g")) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => hit)));
});
