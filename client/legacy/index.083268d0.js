import{_ as t,a as n,b as e,c as r,i as s,d as a,S as o,s as c,f as i,e as f,g as u,q as l,j as v,k as d,h,l as $,n as p,o as m,r as g,u as y,p as E,v as R,w as j,x as w,y as x}from"./client.ae17c43a.js";import{E as D}from"./EventsRoll.369c6ac4.js";function I(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(r){var o=n(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return e(this,s)}}function P(t){var n,e,r,s,a,o,c,I;return r=new D({props:{events:t[0]}}),c=new D({props:{events:t[0],isPast:!0,title:"Past Events"}}),{c:function(){n=i(),e=f("div"),u(r.$$.fragment),s=i(),a=f("div"),o=i(),u(c.$$.fragment),this.h()},l:function(t){l('[data-svelte="svelte-ynwe2a"]',document.head).forEach(v),n=d(t),e=h(t,"DIV",{id:!0,class:!0});var i=$(e);p(r.$$.fragment,i),s=d(i),a=h(i,"DIV",{id:!0,class:!0}),$(a).forEach(v),o=d(i),p(c.$$.fragment,i),i.forEach(v),this.h()},h:function(){document.title="Events",m(a,"id","spacer"),m(a,"class","svelte-1n663pz"),m(e,"id","container"),m(e,"class","svelte-1n663pz")},m:function(t,i){g(t,n,i),g(t,e,i),y(r,e,null),E(e,s),E(e,a),E(e,o),y(c,e,null),I=!0},p:function(t,n){var e=R(n,1)[0],s={};1&e&&(s.events=t[0]),r.$set(s);var a={};1&e&&(a.events=t[0]),c.$set(a)},i:function(t){I||(j(r.$$.fragment,t),j(c.$$.fragment,t),I=!0)},o:function(t){w(r.$$.fragment,t),w(c.$$.fragment,t),I=!1},d:function(t){t&&v(n),t&&v(e),x(r),x(c)}}}function S(){return this.fetch("events.json").then((function(t){return t.json()})).then((function(t){return{events:t}}))}function z(t,n,e){var r=n.events,s=(new Date).toISOString();return console.log(s),r.filter((function(t){return t.date>=s})).sort((function(t,n){return t.date<n.date?1:-1})),r.filter((function(t){return t.date<s})).sort((function(t,n){return t.date<n.date?1:-1})),t.$$set=function(t){"events"in t&&e(0,r=t.events)},[r]}var B=function(n){t(i,o);var e=I(i);function i(t){var n;return r(this,i),n=e.call(this),s(a(n),t,z,P,c,{events:0}),n}return i}();export default B;export{S as preload};
