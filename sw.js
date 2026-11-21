const CACHE='ethossai-demo-v3';
const PRECACHE=['./','./index.html','./app.css','./app.js','./content.js','./lang.js','./manifest.webmanifest','./fonts/pjs.woff2','./fonts/syne.woff2','./fonts/outfit.woff2','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()).catch(()=>{}));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.origin!==self.location.origin)return;
  e.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{
      const net=await fetch(e.request);
      if(net&&net.ok)cache.put(e.request,net.clone());
      return net;
    }catch(err){
      const hit=await cache.match(e.request);
      if(hit)return hit;
      if(e.request.mode==='navigate')return cache.match('./index.html');
      throw err;
    }
  })());
});
