const CACHE = 'colombia-v6';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
const REMOTE_OK = h => h.endsWith('wikipedia.org') || h.endsWith('wikimedia.org');
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  const cacheable = e.request.method === 'GET' && (u.origin === location.origin || REMOTE_OK(u.hostname));
  if (!cacheable) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => u.origin === location.origin ? caches.match('./index.html') : Response.error()))
  );
});
