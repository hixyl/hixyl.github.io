"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{4796:function(e,t,n){n.d(t,{OTC:function(){return g},Pi8:function(){return p},mXi:function(){return v},y$C:function(){return y}});var r=n(8543),i=n(8070),a=n(5255);let l=r.C5?window:void 0,u=r.C5?window.document:void 0;function o(...e){let t,n,a,u;if("string"==typeof e[0]||Array.isArray(e[0])?([n,a,u]=e,t=l):[t,n,a,u]=e,!t)return r.ZT;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);let s=[],d=()=>{s.forEach(e=>e()),s.length=0},f=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),c=(0,i.YP)(()=>[function(e){var t;let n=(0,r.Tn)(e);return null!=(t=null==n?void 0:n.$el)?t:n}(t),(0,r.Tn)(u)],([e,t])=>{if(d(),!e)return;let i=(0,r.Kn)(t)?{...t}:t;s.push(...n.flatMap(t=>a.map(n=>f(e,t,n,i))))},{immediate:!0,flush:"post"}),m=()=>{c(),d()};return(0,r.IY)(m),m}r.C5&&window.navigator,r.C5&&window.location;let s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d="__vueuse_ssr_handlers__",f=(d in s||(s[d]=s[d]||{}),s[d]),c={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},m="vueuse-storage";function y(e,t,n,u={}){var s;let{flush:d="pre",deep:y=!0,listenToStorageChanges:v=!0,writeDefaults:p=!0,mergeDefaults:w=!1,shallow:g,window:h=l,eventFilter:b,onError:A=e=>{console.error(e)},initOnMounted:S}=u,C=(g?a.XI:a.iH)("function"==typeof t?t():t);if(!n)try{n=(f.getDefaultStorage||(()=>null==l?void 0:l.localStorage))()}catch(e){A(e)}if(!n)return C;let E=(0,r.Tn)(t),I=null==E?"any":E instanceof Set?"set":E instanceof Map?"map":E instanceof Date?"date":"boolean"==typeof E?"boolean":"string"==typeof E?"string":"object"==typeof E?"object":Number.isNaN(E)?"any":"number",T=null!=(s=u.serializer)?s:c[I],{pause:_,resume:N}=(0,r._I)(C,()=>(function(t){try{if(null==t)n.removeItem(e);else{let r=T.write(t),i=n.getItem(e);i!==r&&(n.setItem(e,r),h&&h.dispatchEvent(new CustomEvent(m,{detail:{key:e,oldValue:i,newValue:r,storageArea:n}})))}}catch(e){A(e)}})(C.value),{flush:d,deep:y,eventFilter:b});return h&&v&&(0,r.u7)(()=>{o(h,"storage",q),o(h,m,O),S&&q()}),S||q(),C;function O(e){q(e.detail)}function q(t){if(!t||t.storageArea===n){if(t&&null==t.key){C.value=E;return}if(!t||t.key===e){_();try{(null==t?void 0:t.newValue)!==T.write(C.value)&&(C.value=function(t){let r=t?t.newValue:n.getItem(e);if(null==r)return p&&null!=E&&n.setItem(e,T.write(E)),E;if(!t&&w){let e=T.read(r);return"function"==typeof w?w(e,E):"object"!==I||Array.isArray(e)?e:{...E,...e}}return"string"!=typeof r?r:T.read(r)}(t))}catch(e){A(e)}finally{t?(0,i.Y3)(N):N()}}}}}function v(e={}){let{controls:t=!1,interval:n="requestAnimationFrame"}=e,i=(0,a.iH)(new Date),u=()=>i.value=new Date,o="requestAnimationFrame"===n?function(e,t={}){let{immediate:n=!0,fpsLimit:i,window:u=l}=t,o=(0,a.iH)(!1),s=i?1e3/i:null,d=0,f=null;function c(t){if(!o.value||!u)return;let n=t-(d||t);if(s&&n<s){f=u.requestAnimationFrame(c);return}e({delta:n,timestamp:t}),d=t,f=u.requestAnimationFrame(c)}function m(){!o.value&&u&&(o.value=!0,f=u.requestAnimationFrame(c))}function y(){o.value=!1,null!=f&&u&&(u.cancelAnimationFrame(f),f=null)}return n&&m(),(0,r.IY)(y),{isActive:(0,a.OT)(o),pause:y,resume:m}}(u,{immediate:!0}):(0,r.Zv)(u,n,{immediate:!0});return t?{now:i,...o}:i}function p(e,t=r.ZT,n={}){let{immediate:i=!0,manual:l=!1,type:o="text/javascript",async:s=!0,crossOrigin:d,referrerPolicy:f,noModule:c,defer:m,document:y=u,attrs:v={}}=n,p=(0,a.iH)(null),w=null,g=n=>new Promise((i,a)=>{let l=e=>(p.value=e,i(e),e);if(!y){i(!1);return}let u=!1,w=y.querySelector(`script[src="${(0,r.Tn)(e)}"]`);w?w.hasAttribute("data-loaded")&&l(w):((w=y.createElement("script")).type=o,w.async=s,w.src=(0,r.Tn)(e),m&&(w.defer=m),d&&(w.crossOrigin=d),c&&(w.noModule=c),f&&(w.referrerPolicy=f),Object.entries(v).forEach(([e,t])=>null==w?void 0:w.setAttribute(e,t)),u=!0),w.addEventListener("error",e=>a(e)),w.addEventListener("abort",e=>a(e)),w.addEventListener("load",()=>{w.setAttribute("data-loaded","true"),t(w),l(w)}),u&&(w=y.head.appendChild(w)),n||l(w)}),h=(e=!0)=>(w||(w=g(e)),w),b=()=>{if(!y)return;w=null,p.value&&(p.value=null);let t=y.querySelector(`script[src="${(0,r.Tn)(e)}"]`);t&&y.head.removeChild(t)};return i&&!l&&(0,r.u7)(h),l||(0,r.sP)(b),{scriptTag:p,load:h,unload:b}}let w=0;function g(e,t={}){let n=(0,a.iH)(!1),{document:l=u,immediate:o=!0,manual:s=!1,id:d=`vueuse_styletag_${++w}`}=t,f=(0,a.iH)(e),c=()=>{},m=()=>{if(!l)return;let e=l.getElementById(d)||l.createElement("style");e.isConnected||(e.id=d,t.media&&(e.media=t.media),l.head.appendChild(e)),n.value||(c=(0,i.YP)(f,t=>{e.textContent=t},{immediate:!0}),n.value=!0)},y=()=>{l&&n.value&&(c(),l.head.removeChild(l.getElementById(d)),n.value=!1)};return o&&!s&&(0,r.u7)(m),s||(0,r.IY)(y),{id:d,css:f,unload:y,load:m,isLoaded:(0,a.OT)(n)}}r.yR}}]);