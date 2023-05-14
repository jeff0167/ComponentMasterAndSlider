"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4691],{7423:(X,x,y)=>{y.d(x,{Uw:()=>I,fo:()=>L});var u=y(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var w=(()=>((w=w||{}).Unimplemented="UNIMPLEMENTED",w.Unavailable="UNAVAILABLE",w))();class H extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const E=n=>{var e,t,i,a,r;const c=n.CapacitorCustomPlatform||null,s=n.Capacitor||{},g=s.Plugins=s.Plugins||{},d=n.CapacitorPlatforms,$=(null===(e=null==d?void 0:d.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==c?c.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),se=(null===(t=null==d?void 0:d.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==$()),le=(null===(i=null==d?void 0:d.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(p=>{const m=B.get(p);return!!(null!=m&&m.platforms.has($())||Y(p))}),Y=(null===(a=null==d?void 0:d.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(p=>{var m;return null===(m=s.PluginHeaders)||void 0===m?void 0:m.find(j=>j.name===p)}),B=new Map,pe=(null===(r=null==d?void 0:d.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((p,m={})=>{const j=B.get(p);if(j)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),j.proxy;const A=$(),W=Y(p);let Z;const me=function(){var h=(0,u.Z)(function*(){return!Z&&A in m?Z=Z="function"==typeof m[A]?yield m[A]():m[A]:null!==c&&!Z&&"web"in m&&(Z=Z="function"==typeof m.web?yield m.web():m.web),Z});return function(){return h.apply(this,arguments)}}(),q=h=>{let b;const U=(..._)=>{const k=me().then(C=>{const T=((h,b)=>{var U,_;if(!W){if(h)return null===(_=h[b])||void 0===_?void 0:_.bind(h);throw new H(`"${p}" plugin is not implemented on ${A}`,w.Unimplemented)}{const k=null==W?void 0:W.methods.find(C=>b===C.name);if(k)return"promise"===k.rtype?C=>s.nativePromise(p,b.toString(),C):(C,T)=>s.nativeCallback(p,b.toString(),C,T);if(h)return null===(U=h[b])||void 0===U?void 0:U.bind(h)}})(C,h);if(T){const D=T(..._);return b=null==D?void 0:D.remove,D}throw new H(`"${p}.${h}()" is not implemented on ${A}`,w.Unimplemented)});return"addListener"===h&&(k.remove=(0,u.Z)(function*(){return b()})),k};return U.toString=()=>`${h.toString()}() { [capacitor code] }`,Object.defineProperty(U,"name",{value:h,writable:!1,configurable:!1}),U},Q=q("addListener"),N=q("removeListener"),he=(h,b)=>{const U=Q({eventName:h},b),_=function(){var C=(0,u.Z)(function*(){const T=yield U;N({eventName:h,callbackId:T},b)});return function(){return C.apply(this,arguments)}}(),k=new Promise(C=>U.then(()=>C({remove:_})));return k.remove=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield _()}),k},z=new Proxy({},{get(h,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return W?he:Q;case"removeListener":return N;default:return q(b)}}});return g[p]=z,B.set(p,{name:p,proxy:z,platforms:new Set([...Object.keys(m),...W?[A]:[]])}),z});return s.convertFileSrc||(s.convertFileSrc=p=>p),s.getPlatform=$,s.handleError=p=>n.console.error(p),s.isNativePlatform=se,s.isPluginAvailable=le,s.pluginMethodNoop=(p,m,j)=>Promise.reject(`${j} does not have an implementation of "${m}".`),s.registerPlugin=pe,s.Exception=H,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},l=(n=>n.Capacitor=E(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),L=l.registerPlugin;class I{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const c=function(){var g=(0,u.Z)(function*(){return i.removeListener(e,t)});return function(){return g.apply(this,arguments)}}(),s=Promise.resolve({remove:c});return Object.defineProperty(s,"remove",{value:(g=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield c()}),function(){return g.apply(this,arguments)})}),s;var g}removeAllListeners(){var e=this;return(0,u.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const i=this.listeners[e];i&&i.forEach(a=>a(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new l.Exception(e,w.Unimplemented)}unavailable(e="not available"){return new l.Exception(e,w.Unavailable)}removeListener(e,t){var i=this;return(0,u.Z)(function*(){const a=i.listeners[e];if(!a)return;const r=a.indexOf(t);i.listeners[e].splice(r,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const V=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),K=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ee extends I{getCookies(){return(0,u.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[a,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=K(a).trim(),r=K(r).trim(),t[a]=r}),t})()}setCookie(e){return(0,u.Z)(function*(){try{const t=V(e.key),i=V(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),c=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${a}; path=${r}; ${c};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,u.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,u.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,u.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}L("CapacitorCookies",{web:()=>new ee});const te=function(){var n=(0,u.Z)(function*(e){return new Promise((t,i)=>{const a=new FileReader;a.onload=()=>{const r=a.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},a.onerror=r=>i(r),a.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class ie extends I{request(e){return(0,u.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),a=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(a=>a.toLocaleLowerCase()).reduce((a,r,c)=>(a[r]=n[e[c]],a),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(a.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[c,s]of Object.entries(n.data||{}))r.set(c,s);t.body=r.toString()}else if(a.includes("multipart/form-data")){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((s,g)=>{r.append(g,s)});else for(const s of Object.keys(n.data))r.append(s,n.data[s]);t.body=r;const c=new Headers(t.headers);c.delete("content-type"),t.headers=c}else(a.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),i=((n,e=!0)=>n?Object.entries(n).reduce((i,a)=>{const[r,c]=a;let s,g;return Array.isArray(c)?(g="",c.forEach(d=>{s=e?encodeURIComponent(d):d,g+=`${r}=${s}&`}),g.slice(0,-1)):(s=e?encodeURIComponent(c):c,g=`${r}=${s}`),`${i}&${g}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=i?`${e.url}?${i}`:e.url,r=yield fetch(a,t),c=r.headers.get("content-type")||"";let g,d,{responseType:s="text"}=r.ok?e:{};switch(c.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":d=yield r.blob(),g=yield te(d);break;case"json":g=yield r.json();break;default:g=yield r.text()}const G={};return r.headers.forEach(($,R)=>{G[R]=$}),{data:g,headers:G,status:r.status,url:r.url}})()}get(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,u.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}L("CapacitorHttp",{web:()=>new ie})},4691:(X,x,y)=>{y.r(x),y.d(x,{HomePage:()=>H});var u=y(5861),M=y(4755),F=y(5030),v=y(7002),o=y(3020);let J=(()=>{class P{constructor(f){this.popover=f,this.description="Are you sure about that?"}choice(f){this.popover.dismiss(f)}}return P.\u0275fac=function(f){return new(f||P)(o.Y36(v.Dh))},P.\u0275cmp=o.Xpm({type:P,selectors:[["app-pop-up"]],inputs:{description:"description"},standalone:!0,features:[o.jDz],decls:8,vars:1,consts:[[1,"pop","ion-padding"],[1,"ion-text-center",2,"padding-bottom","1rem"],["position","floating"],[1,"deleteYes",3,"click"],[1,"deleteNo",3,"click"]],template:function(f,l){1&f&&(o.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-label",2),o._uU(3),o.qZA()(),o.TgZ(4,"ion-button",3),o.NdJ("click",function(){return l.choice(!0)}),o._uU(5,"Yes"),o.qZA(),o.TgZ(6,"ion-button",4),o.NdJ("click",function(){return l.choice(!1)}),o._uU(7,"No"),o.qZA()()),2&f&&(o.xp6(3),o.Oqu(l.description))},dependencies:[v.Pc,v.YG,v.W2,v.Q$,M.ez]}),P})();const w=(0,y(7423).fo)("Geolocation",{web:()=>y.e(4561).then(y.bind(y,4561)).then(P=>new P.GeolocationWeb)});let H=(()=>{class P{constructor(f){this.popoverController=f,this.MyVal=!1,this.printCurrentPosition()}presentPopover(f){var l=this;return(0,u.Z)(function*(){const L=yield l.popoverController.create({component:J,componentProps:{description:"Are you sure about that?"}});yield L.present(),L.onDidDismiss().then(O=>{l.MyVal=null==O?void 0:O.data})})()}printCurrentPosition(){var f=this;return(0,u.Z)(function*(){const l=yield w.getCurrentPosition();f.location=l,console.log("Current position:",f.location)})()}}return P.\u0275fac=function(f){return new(f||P)(o.Y36(v.Dh))},P.\u0275cmp=o.Xpm({type:P,selectors:[["app-home"]],standalone:!0,features:[o.jDz],decls:19,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"]],template:function(f,l){1&f&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"home"),o.qZA()()(),o.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),o._uU(8,"home"),o.qZA()()(),o.TgZ(9,"h1"),o._uU(10,"hi"),o.qZA(),o.TgZ(11,"ion-button",4),o.NdJ("click",function(O){return l.presentPopover(O)}),o._uU(12,"Click Me"),o.qZA(),o.TgZ(13,"h1"),o._uU(14),o.qZA(),o.TgZ(15,"ion-button",4),o.NdJ("click",function(){return l.printCurrentPosition()}),o._uU(16,"Get new pos"),o.qZA(),o.TgZ(17,"h1"),o._uU(18),o.qZA()()),2&f&&(o.Q6J("translucent",!0),o.xp6(4),o.Q6J("fullscreen",!0),o.xp6(10),o.Oqu(l.MyVal),o.xp6(4),o.AsE("latitude: ",null==l.location||null==l.location.coords?null:l.location.coords.latitude,", longitude:",null==l.location||null==l.location.coords?null:l.location.coords.longitude,""))},dependencies:[v.Pc,v.YG,v.W2,v.Gu,v.wd,v.sr,M.ez,F.u5]}),P})()}}]);