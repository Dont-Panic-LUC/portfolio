!function(){"use strict";const e=1616544671465,t=`cache${e}`,n=["/client/client.8412376d.js","/client/inject_styles.5607aec6.js","/client/index.f9226e4c.js","/client/EventsRoll.ff66e3d1.js","/client/contact.0b4c371a.js","/client/e-board.ce57ace5.js","/client/index.483dd3c3.js","/client/about.6fd431d9.js","/client/index.344ae961.js","/client/[slug].e80ca57d.js"].concat(["/service-worker-index.html","/components.css","/content/eBoard/alex.jpg","/content/eBoard/anon.png","/content/eBoard/anran.png","/content/eBoard/henry.jpg","/content/eBoard/iqra.jpg","/content/eBoard/makenna.jpg","/content/eBoard/rayyan.jpg","/content/eBoard/tien.jpg","/content/events/2021-01-kickoff-game-night.png","/content/events/2021-02-tips-from-a-hiring-perspective.jpg","/content/events/2021-03-creating-a-portfolio.png","/content/miscImage/googlePassport.jpg","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/normalize.css"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),a=n.protocol.startsWith("http"),s=n.hostname===self.location.hostname&&n.port!==self.location.port,o=n.host===self.location.host&&c.has(n.pathname),i="only-if-cached"===t.request.cache&&!o;!a||s||i||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
