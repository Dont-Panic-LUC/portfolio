import{S as t,i as s,s as e,a as n,e as a,t as o,q as i,d as r,f as c,b as u,g as l,h,k as f,m as d,l as m,u as p,v}from"./client.2f169072.js";function y(t){let s,e,y,x,g,j,w=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){e=n(),y=a("h1"),x=o(w),g=n(),j=a("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),e=c(t),y=u(t,"H1",{});var s=l(y);x=h(s,w),s.forEach(r),g=c(t),j=u(t,"DIV",{class:!0}),l(j).forEach(r),this.h()},h(){f(j,"class","content svelte-emm3f3")},m(t,s){d(t,e,s),d(t,y,s),m(y,x),d(t,g,s),d(t,j,s),j.innerHTML=E},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&w!==(w=t[0].title+"")&&p(x,w),1&e&&E!==(E=t[0].html+"")&&(j.innerHTML=E)},i:v,o:v,d(t){t&&r(e),t&&r(y),t&&r(g),t&&r(j)}}}var x=function(t,s,e,n){return new(e||(e=Promise))((function(a,o){function i(t){try{c(n.next(t))}catch(t){o(t)}}function r(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var s;t.done?a(t.value):(s=t.value,s instanceof e?s:new e((function(t){t(s)}))).then(i,r)}c((n=n.apply(t,s||[])).next())}))};function g({params:t}){return x(this,void 0,void 0,(function*(){const s=yield this.fetch(`blog/${t.slug}.json`),e=yield s.json();if(200===s.status)return{post:e};this.error(s.status,e.message)}))}function j(t,s,e){let{post:n}=s;return t.$$set=t=>{"post"in t&&e(0,n=t.post)},[n]}export default class extends t{constructor(t){super(),s(this,t,j,y,e,{post:0})}}export{g as preload};
