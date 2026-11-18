const C = 'mascara-v2';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x)))).then(() => clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.hostname.includes('peerjs.com')) return;
  const same = u.origin === location.origin;
  const store = r => { if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); } return r; };
  e.respondWith(same
    ? fetch(e.request).then(store).catch(() => caches.match(e.request))
    : caches.match(e.request).then(hit => hit || fetch(e.request).then(store)));
});
