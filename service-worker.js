!function(){"use strict";const e=1619466506078,t=`cache${e}`,s=["/client/client.005a0093.js","/client/inject_styles.5607aec6.js","/client/index.c1034044.js","/client/EventsRoll.853d4a7d.js","/client/contact.e2e011fa.js","/client/e-board.6c36fd4f.js","/client/index.a3373e45.js","/client/about.118cf89d.js","/client/index.d38c1509.js","/client/[slug].fcc52784.js"].concat(["/service-worker-index.html","/assets/content/events/2021-01-kickoff-game-night.png","/assets/content/events/2021-02-tips-from-a-hiring-perspective.jpg","/assets/content/events/2021-03-creating-a-portfolio.png","/assets/content/events/Fall.jpg","/assets/content/events/tbd.png","/assets/e-board/alex.jpg","/assets/e-board/anon.png","/assets/e-board/anran.png","/assets/e-board/henry.jpg","/assets/e-board/iqra.jpg","/assets/e-board/makenna.jpg","/assets/e-board/rayyan.jpg","/assets/e-board/tien.jpg","/assets/misc/googlePassport.jpg","/components.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/normalize.css","/robots.txt"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),a=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,o=s.host===self.location.host&&n.has(s.pathname),i="only-if-cached"===t.request.cache&&!o;!a||c||i||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
