import{S as s,i as e,s as t,a as n,e as a,c as r,q as o,d as c,f as i,b as l,g as f,j as v,k as $,m,n as d,l as h,o as p,p as u,r as g}from"./client.b5aa0c68.js";import{E}from"./EventsRoll.2ff7929a.js";function j(s){let e,t,j,w,x,b,z,D;return j=new E({props:{events:s[0]}}),z=new E({props:{events:s[0],isPast:!0,title:"Past Events"}}),{c(){e=n(),t=a("div"),r(j.$$.fragment),w=n(),x=a("div"),b=n(),r(z.$$.fragment),this.h()},l(s){o('[data-svelte="svelte-ynwe2a"]',document.head).forEach(c),e=i(s),t=l(s,"DIV",{id:!0,class:!0});var n=f(t);v(j.$$.fragment,n),w=i(n),x=l(n,"DIV",{id:!0,class:!0}),f(x).forEach(c),b=i(n),v(z.$$.fragment,n),n.forEach(c),this.h()},h(){document.title="Events",$(x,"id","spacer"),$(x,"class","svelte-1n663pz"),$(t,"id","container"),$(t,"class","svelte-1n663pz")},m(s,n){m(s,e,n),m(s,t,n),d(j,t,null),h(t,w),h(t,x),h(t,b),d(z,t,null),D=!0},p(s,[e]){const t={};1&e&&(t.events=s[0]),j.$set(t);const n={};1&e&&(n.events=s[0]),z.$set(n)},i(s){D||(p(j.$$.fragment,s),p(z.$$.fragment,s),D=!0)},o(s){u(j.$$.fragment,s),u(z.$$.fragment,s),D=!1},d(s){s&&c(e),s&&c(t),g(j),g(z)}}}function w(){return this.fetch("events.json").then((s=>s.json())).then((s=>({events:s})))}function x(s,e,t){let{events:n}=e;return s.$$set=s=>{"events"in s&&t(0,n=s.events)},[n]}export default class extends s{constructor(s){super(),e(this,s,x,j,t,{events:0})}}export{w as preload};
