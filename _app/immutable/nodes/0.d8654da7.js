import{r as w,u as tt,s as et,f as j,a as D,v as Z,g as A,h as R,w as M,c as V,x as J,d as L,j as f,i as b,y as T,z as nt,A as ht,B as kt,C as st,D as Q,E as X,F as Dt,o as zt,G as wt,H as Ct,e as Y,I as Ht,q as vt,J as Et,K as Mt,p as St,L as qt,M as Bt,N as Ut,O as Nt,P as Ft}from"../chunks/scheduler.02eebc4a.js";import{n as Vt,l as bt,f as Kt,h as Gt,S as rt,i as ot,g as _t,t as C,c as ut,a as H,b as K,d as x,m as G,e as W,j as Wt,k as Zt,o as Jt}from"../chunks/index.4a314fc0.js";import{r as Qt,g as Xt,i as Yt}from"../chunks/runtime.esm.0321e7b4.js";import{p as xt}from"../chunks/stores.26283f0d.js";import{e as N}from"../chunks/singletons.eae81b99.js";import{t as te,c as ee}from"../chunks/table.4fa95357.js";import{r as re}from"../chunks/store.1f539acc.js";import{e as gt,u as oe,f as le}from"../chunks/each.84d1d5f3.js";import{t as at}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.c30a1758.js";import{g as Lt,a as Tt}from"../chunks/spread.8a54911c.js";import{w as se}from"../chunks/index.8dd27ccc.js";import{_ as n}from"../chunks/preload-helper.a4192956.js";function ae(r,t,e,i){if(!t)return w;const o=r.getBoundingClientRect();if(t.left===o.left&&t.right===o.right&&t.top===o.top&&t.bottom===o.bottom)return w;const{delay:a=0,duration:u=300,easing:l=tt,start:s=Vt()+a,end:_=s+u,tick:v=w,css:p}=e(r,{from:t,to:o},i);let d=!0,g=!1,h;function m(){p&&(h=Kt(r,0,1,u,a,l,p)),a||(g=!0)}function c(){p&&Gt(r,h),d=!1}return bt(E=>{if(!g&&E>=s&&(g=!0),g&&E>=_&&(v(1,0),c()),!d)return!1;if(g){const I=E-s,P=0+1*l(I/u);v(P,1-P)}return!0}),m(),v(0,1),c}function ie(r){const t=getComputedStyle(r);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:e,height:i}=t,o=r.getBoundingClientRect();r.style.position="absolute",r.style.width=e,r.style.height=i,yt(r,o)}}function yt(r,t){const e=r.getBoundingClientRect();if(t.left!==e.left||t.top!==e.top){const i=getComputedStyle(r),o=i.transform==="none"?"":i.transform;r.style.transform=`${o} translate(${t.left-e.left}px, ${t.top-e.top}px)`}}const ne=""+new URL("../assets/logo.94172e19.svg",import.meta.url).href,_e=""+new URL("../assets/home.53e28e3a.svg",import.meta.url).href,ue=""+new URL("../assets/code.231db803.svg",import.meta.url).href,ce=""+new URL("../assets/help.b4a2a616.svg",import.meta.url).href,me=""+new URL("../assets/github.3fa339eb.svg",import.meta.url).href;function It(r){let t,e,i=`<img src="${te}" alt="table"/>`,o,a,u,l,s=`<img src="${ee}" alt="chart"/>`,_,v,p,d,g=`<img src="${ue}" alt="code"/>`,h;return{c(){t=j("li"),e=j("a"),e.innerHTML=i,a=D(),u=j("li"),l=j("a"),l.innerHTML=s,v=D(),p=j("li"),d=j("a"),d.innerHTML=g,this.h()},l(m){t=A(m,"LI",{"aria-current":!0,class:!0});var c=R(t);e=A(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(e)!=="svelte-123cls0"&&(e.innerHTML=i),c.forEach(L),a=V(m),u=A(m,"LI",{"aria-current":!0,class:!0});var E=R(u);l=A(E,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(l)!=="svelte-uagc90"&&(l.innerHTML=s),E.forEach(L),v=V(m),p=A(m,"LI",{"aria-current":!0,class:!0});var I=R(p);d=A(I,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(d)!=="svelte-bd3ccb"&&(d.innerHTML=g),I.forEach(L),this.h()},h(){f(e,"href",N+"/table"),f(e,"class","svelte-z0p278"),f(t,"aria-current",o=r[1].url.pathname==="/table"?"page":void 0),f(t,"class","svelte-z0p278"),f(l,"href",N+"/chart"),f(l,"class","svelte-z0p278"),f(u,"aria-current",_=r[1].url.pathname==="/chart"?"page":void 0),f(u,"class","svelte-z0p278"),f(d,"href",N+"/code"),f(d,"class","svelte-z0p278"),f(p,"aria-current",h=r[1].url.pathname==="/code"?"page":void 0),f(p,"class","svelte-z0p278")},m(m,c){b(m,t,c),T(t,e),b(m,a,c),b(m,u,c),T(u,l),b(m,v,c),b(m,p,c),T(p,d)},p(m,c){c&2&&o!==(o=m[1].url.pathname==="/table"?"page":void 0)&&f(t,"aria-current",o),c&2&&_!==(_=m[1].url.pathname==="/chart"?"page":void 0)&&f(u,"aria-current",_),c&2&&h!==(h=m[1].url.pathname==="/code"?"page":void 0)&&f(p,"aria-current",h)},d(m){m&&(L(t),L(a),L(u),L(v),L(p))}}}function pe(r){let t,e,i=`<a href="/" class="svelte-z0p278"><img src="${ne}" alt="Unspent Chi" class="svelte-z0p278"/></a>`,o,a,u,l,s,_,v,p,d=`<img src="${_e}" alt="home"/>`,g,h,m,c,E,I=`<img src="${ce}" alt="help"/>`,P,U,k,z,lt,S,ct=`<a href="https://github.com/2qx/unspent" class="svelte-z0p278"><img src="${me}" alt="GitHub" class="svelte-z0p278"/></a>`,O=r[0]&&It(r);return{c(){t=j("header"),e=j("div"),e.innerHTML=i,o=D(),a=j("nav"),u=Z("svg"),l=Z("path"),s=D(),_=j("ul"),v=j("li"),p=j("a"),p.innerHTML=d,h=D(),O&&O.c(),m=D(),c=j("li"),E=j("a"),E.innerHTML=I,U=D(),k=Z("svg"),z=Z("path"),lt=D(),S=j("div"),S.innerHTML=ct,this.h()},l($){t=A($,"HEADER",{class:!0});var y=R(t);e=A(y,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-2m7j1"&&(e.innerHTML=i),o=V(y),a=A(y,"NAV",{class:!0});var q=R(a);u=J(q,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var mt=R(u);l=J(mt,"path",{d:!0,class:!0}),R(l).forEach(L),mt.forEach(L),s=V(q),_=A(q,"UL",{class:!0});var B=R(_);v=A(B,"LI",{"aria-current":!0,class:!0});var pt=R(v);p=A(pt,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(p)!=="svelte-1w70vgq"&&(p.innerHTML=d),pt.forEach(L),h=V(B),O&&O.l(B),m=V(B),c=A(B,"LI",{"aria-current":!0,class:!0});var ft=R(c);E=A(ft,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(E)!=="svelte-1lkddtx"&&(E.innerHTML=I),ft.forEach(L),B.forEach(L),U=V(q),k=J(q,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var dt=R(k);z=J(dt,"path",{d:!0,class:!0}),R(z).forEach(L),dt.forEach(L),q.forEach(L),lt=V(y),S=A(y,"DIV",{class:!0,"data-svelte-h":!0}),M(S)!=="svelte-thcts3"&&(S.innerHTML=ct),y.forEach(L),this.h()},h(){f(e,"class","corner svelte-z0p278"),f(l,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),f(l,"class","svelte-z0p278"),f(u,"viewBox","0 0 2 3"),f(u,"aria-hidden","true"),f(u,"class","svelte-z0p278"),f(p,"href",N+"/"),f(p,"class","svelte-z0p278"),f(v,"aria-current",g=r[1].url.pathname==="/"?"page":void 0),f(v,"class","svelte-z0p278"),f(E,"href",N+"/help"),f(E,"class","svelte-z0p278"),f(c,"aria-current",P=r[1].url.pathname==="/help"?"page":void 0),f(c,"class","svelte-z0p278"),f(_,"class","svelte-z0p278"),f(z,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),f(z,"class","svelte-z0p278"),f(k,"viewBox","0 0 2 3"),f(k,"aria-hidden","true"),f(k,"class","svelte-z0p278"),f(a,"class","svelte-z0p278"),f(S,"class","corner svelte-z0p278"),f(t,"class","svelte-z0p278")},m($,y){b($,t,y),T(t,e),T(t,o),T(t,a),T(a,u),T(u,l),T(a,s),T(a,_),T(_,v),T(v,p),T(_,h),O&&O.m(_,null),T(_,m),T(_,c),T(c,E),T(a,U),T(a,k),T(k,z),T(t,lt),T(t,S)},p($,[y]){y&2&&g!==(g=$[1].url.pathname==="/"?"page":void 0)&&f(v,"aria-current",g),$[0]?O?O.p($,y):(O=It($),O.c(),O.m(_,m)):O&&(O.d(1),O=null),y&2&&P!==(P=$[1].url.pathname==="/help"?"page":void 0)&&f(c,"aria-current",P)},i:w,o:w,d($){$&&L(t),O&&O.d()}}}function fe(r,t,e){let i;nt(r,xt,a=>e(1,i=a));let o=!1;return re.subscribe(a=>{e(0,o=!!a)}),[o,i]}class de extends rt{constructor(t){super(),ot(this,t,fe,pe,et,{})}}function $t(r){const t=r-1;return t*t*t+1}function he(r,{delay:t=0,duration:e=400,easing:i=tt}={}){const o=+getComputedStyle(r).opacity;return{delay:t,duration:e,easing:i,css:a=>`opacity: ${a*o}`}}function ve(r,{delay:t=0,duration:e=400,easing:i=$t,x:o=0,y:a=0,opacity:u=0}={}){const l=getComputedStyle(r),s=+l.opacity,_=l.transform==="none"?"":l.transform,v=s*(1-u),[p,d]=ht(o),[g,h]=ht(a);return{delay:t,duration:e,easing:i,css:(m,c)=>`
			transform: ${_} translate(${(1-m)*p}${d}, ${(1-m)*g}${h});
			opacity: ${s-v*c}`}}function Ee(r,{from:t,to:e},i={}){const o=getComputedStyle(r),a=o.transform==="none"?"":o.transform,[u,l]=o.transformOrigin.split(" ").map(parseFloat),s=t.left+t.width*u/e.width-(e.left+u),_=t.top+t.height*l/e.height-(e.top+l),{delay:v=0,duration:p=g=>Math.sqrt(g)*120,easing:d=$t}=i;return{delay:v,duration:kt(p)?p(Math.sqrt(s*s+_*_)):p,easing:d,css:(g,h)=>{const m=h*s,c=h*_,E=g+h*t.width/e.width,I=g+h*t.height/e.height;return`transform: ${a} translate(${m}px, ${c}px) scale(${E}, ${I});`}}}function jt(r){return Object.prototype.toString.call(r)==="[object Date]"}function it(r,t){if(r===t||r!==r)return()=>r;const e=typeof r;if(e!==typeof t||Array.isArray(r)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const i=t.map((o,a)=>it(r[a],o));return o=>i.map(a=>a(o))}if(e==="object"){if(!r||!t)throw new Error("Object cannot be null");if(jt(r)&&jt(t)){r=r.getTime(),t=t.getTime();const a=t-r;return u=>new Date(r+u*a)}const i=Object.keys(t),o={};return i.forEach(a=>{o[a]=it(r[a],t[a])}),a=>{const u={};return i.forEach(l=>{u[l]=o[l](a)}),u}}if(e==="number"){const i=t-r;return o=>r+o*i}throw new Error(`Cannot interpolate ${e} values`)}function ge(r,t={}){const e=se(r);let i,o=r;function a(u,l){if(r==null)return e.set(r=u),Promise.resolve();o=u;let s=i,_=!1,{delay:v=0,duration:p=400,easing:d=tt,interpolate:g=it}=st(st({},t),l);if(p===0)return s&&(s.abort(),s=null),e.set(r=o),Promise.resolve();const h=Vt()+v;let m;return i=bt(c=>{if(c<h)return!0;_||(m=g(r,u),typeof p=="function"&&(p=p(r,u)),_=!0),s&&(s.abort(),s=null);const E=c-h;return E>p?(e.set(r=u),!1):(e.set(r=m(d(E/p))),!0)}),i.promise}return{set:a,update:(u,l)=>a(u(o,r),l),subscribe:e.subscribe}}function Le(r){let t,e=r[0].msg+"",i;return{c(){t=new Ct(!1),i=Y(),this.h()},l(o){t=Ht(o,!1),i=Y(),this.h()},h(){t.a=i},m(o,a){t.m(e,o,a),b(o,i,a)},p(o,a){a&1&&e!==(e=o[0].msg+"")&&t.p(e)},i:w,o:w,d(o){o&&(L(i),t.d())}}}function Te(r){let t,e,i;const o=[r[2]];var a=r[0].component.src;function u(l,s){let _={};if(s!==void 0&&s&4)_=Lt(o,[Tt(l[2])]);else for(let v=0;v<o.length;v+=1)_=st(_,o[v]);return{props:_}}return a&&(t=vt(a,u(r))),{c(){t&&K(t.$$.fragment),e=Y()},l(l){t&&x(t.$$.fragment,l),e=Y()},m(l,s){t&&G(t,l,s),b(l,e,s),i=!0},p(l,s){if(s&1&&a!==(a=l[0].component.src)){if(t){_t();const _=t;C(_.$$.fragment,1,0,()=>{W(_,1)}),ut()}a?(t=vt(a,u(l,s)),K(t.$$.fragment),H(t.$$.fragment,1),G(t,e.parentNode,e)):t=null}else if(a){const _=s&4?Lt(o,[Tt(l[2])]):{};t.$set(_)}},i(l){i||(t&&H(t.$$.fragment,l),i=!0)},o(l){t&&C(t.$$.fragment,l),i=!1},d(l){l&&L(e),t&&W(t,l)}}}function At(r){let t,e,i;return{c(){t=j("div"),this.h()},l(o){t=A(o,"DIV",{class:!0,role:!0,tabindex:!0}),R(t).forEach(L),this.h()},h(){f(t,"class","_toastBtn pe svelte-10l0ogd"),f(t,"role","button"),f(t,"tabindex","0")},m(o,a){b(o,t,a),e||(i=[X(t,"click",r[4]),X(t,"keydown",r[8])],e=!0)},p:w,d(o){o&&L(t),e=!1,Dt(i)}}}function Ie(r){let t,e,i,o,a,u,l,s,_,v;const p=[Te,Le],d=[];function g(m,c){return m[0].component?0:1}i=g(r),o=d[i]=p[i](r);let h=r[0].dismissable&&At(r);return{c(){t=j("div"),e=j("div"),o.c(),a=D(),h&&h.c(),u=D(),l=j("progress"),this.h()},l(m){t=A(m,"DIV",{class:!0});var c=R(t);e=A(c,"DIV",{role:!0,class:!0});var E=R(e);o.l(E),E.forEach(L),a=V(c),h&&h.l(c),u=V(c),l=A(c,"PROGRESS",{class:!0}),R(l).forEach(L),c.forEach(L),this.h()},h(){f(e,"role","status"),f(e,"class","_toastMsg svelte-10l0ogd"),Q(e,"pe",r[0].component),f(l,"class","_toastBar svelte-10l0ogd"),l.value=r[1],f(t,"class","_toastItem svelte-10l0ogd"),Q(t,"pe",r[0].pausable)},m(m,c){b(m,t,c),T(t,e),d[i].m(e,null),T(t,a),h&&h.m(t,null),T(t,u),T(t,l),s=!0,_||(v=[X(t,"mouseenter",r[9]),X(t,"mouseleave",r[6])],_=!0)},p(m,[c]){let E=i;i=g(m),i===E?d[i].p(m,c):(_t(),C(d[E],1,1,()=>{d[E]=null}),ut(),o=d[i],o?o.p(m,c):(o=d[i]=p[i](m),o.c()),H(o,1),o.m(e,null)),(!s||c&1)&&Q(e,"pe",m[0].component),m[0].dismissable?h?h.p(m,c):(h=At(m),h.c(),h.m(t,u)):h&&(h.d(1),h=null),(!s||c&2)&&(l.value=m[1]),(!s||c&1)&&Q(t,"pe",m[0].pausable)},i(m){s||(H(o),s=!0)},o(m){C(o),s=!1},d(m){m&&L(t),d[i].d(),h&&h.d(),_=!1,Dt(v)}}}function je(r,t,e){let i,{item:o}=t;const a=ge(o.initial,{duration:o.duration,easing:tt});nt(r,a,I=>e(1,i=I));const u=()=>at.pop(o.id),l=()=>{(i===1||i===0)&&u()};let s=o.initial,_=s,v=!1;const p=()=>{!v&&i!==s&&(a.set(i,{duration:0}),v=!0)},d=()=>{if(v){const I=o.duration,P=I-I*((i-_)/(s-_));a.set(s,{duration:P}).then(l),v=!1}};let g={};const h=()=>document.hidden?p():d(),m=I=>{const{hidden:P,addEventListener:U,removeEventListener:k}=document;if(typeof P>"u")return;const z="visibilitychange";return I?U(z,h):k(z,h),!0};zt(()=>m(!0)&&h()),wt(()=>{typeof o.onpop=="function"&&o.onpop(o.id),m(!1)});const c=I=>{I instanceof KeyboardEvent&&["Enter"," "].includes(I.key)&&u()},E=()=>{o.pausable&&p()};return r.$$set=I=>{"item"in I&&e(0,o=I.item)},r.$$.update=()=>{if(r.$$.dirty&1&&typeof o.progress<"u"&&e(0,o.next=o.progress,o),r.$$.dirty&131&&s!==o.next&&(e(7,s=o.next),_=i,v=!1,a.set(s).then(l)),r.$$.dirty&1&&o.component){const{props:I={},sendIdTo:P}=o.component;e(2,g={...I,...P&&{[P]:o.id}})}},[o,i,g,a,u,p,d,s,c,E]}class Ae extends rt{constructor(t){super(),ot(this,t,je,Ie,et,{item:0})}}function Rt(r,t,e){const i=r.slice();return i[5]=t[e],i}function Ot(r,t){let e,i,o,a,u,l,s,_,v=w,p;return i=new Ae({props:{item:t[5]}}),{key:r,first:null,c(){e=j("li"),K(i.$$.fragment),o=D(),this.h()},l(d){e=A(d,"LI",{class:!0,style:!0});var g=R(e);x(i.$$.fragment,g),o=V(g),g.forEach(L),this.h()},h(){f(e,"class",a=Et(t[5].classes.join(" "))+" svelte-yh90az"),f(e,"style",u=t[1](t[5].theme)),this.first=e},m(d,g){b(d,e,g),G(i,e,null),T(e,o),p=!0},p(d,g){t=d;const h={};g&1&&(h.item=t[5]),i.$set(h),(!p||g&1&&a!==(a=Et(t[5].classes.join(" "))+" svelte-yh90az"))&&f(e,"class",a),(!p||g&1&&u!==(u=t[1](t[5].theme)))&&f(e,"style",u)},r(){_=e.getBoundingClientRect()},f(){ie(e),v(),yt(e,_)},a(){v(),v=ae(e,_,Ee,{duration:200})},i(d){p||(H(i.$$.fragment,d),d&&Mt(()=>{p&&(s&&s.end(1),l=Wt(e,ve,t[5].intro),l.start())}),p=!0)},o(d){C(i.$$.fragment,d),l&&l.invalidate(),d&&(s=Zt(e,he,{})),p=!1},d(d){d&&L(e),W(i),d&&s&&s.end()}}}function Re(r){let t,e=[],i=new Map,o,a=gt(r[0]);const u=l=>l[5].id;for(let l=0;l<a.length;l+=1){let s=Rt(r,a,l),_=u(s);i.set(_,e[l]=Ot(_,s))}return{c(){t=j("ul");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=A(l,"UL",{class:!0});var s=R(t);for(let _=0;_<e.length;_+=1)e[_].l(s);s.forEach(L),this.h()},h(){f(t,"class","_toastContainer svelte-yh90az")},m(l,s){b(l,t,s);for(let _=0;_<e.length;_+=1)e[_]&&e[_].m(t,null);o=!0},p(l,[s]){if(s&3){a=gt(l[0]),_t();for(let _=0;_<e.length;_+=1)e[_].r();e=oe(e,s,u,1,l,a,i,t,le,Ot,null,Rt);for(let _=0;_<e.length;_+=1)e[_].a();ut()}},i(l){if(!o){for(let s=0;s<a.length;s+=1)H(e[s]);o=!0}},o(l){for(let s=0;s<e.length;s+=1)C(e[s]);o=!1},d(l){l&&L(t);for(let s=0;s<e.length;s+=1)e[s].d()}}}function Oe(r,t,e){let i;nt(r,at,s=>e(4,i=s));let{options:o={}}=t,{target:a="default"}=t,u;const l=s=>Object.keys(s).reduce((_,v)=>`${_}${v}:${s[v]};`,"");return r.$$set=s=>{"options"in s&&e(2,o=s.options),"target"in s&&e(3,a=s.target)},r.$$.update=()=>{r.$$.dirty&12&&at._init(a,o),r.$$.dirty&24&&e(0,u=i.filter(s=>s.target===a))},[u,l,o,a,i]}class Pe extends rt{constructor(t){super(),ot(this,t,Oe,Re,et,{options:2,target:3})}}const De=(r,t)=>{const e=r[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((i,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})},Ve=["am","cs","es","fr","hi","la","pa","sr@ijekavianlatin","uk","zh_TW","ar","da","es_SV","fr_LU","hr","lt","pl","sr","ur","az","de","es_VE","ga_IE","hu","lv","pt_BR","sr@latin","uz@Cyrl","az@latin","el","et","ga","it","mg","pt","sv","uz","bg","en","eu","gl_ES","ja","ml","ro","ta","uz@Latn","bn","eo","fa","gl","ka","mn","ru","te","yue","bs","es_CL","fi","gu","kk","nb","si","tk","zh-Hans","ca","es_CO","fil","hak","km","ne","sk","tl","zh-Hant","cmn","es_DO","fr_CM","he","ko","nl","sl","tr","zh_HK","zh"];for(const r of Ve)Qt(r,()=>De(Object.assign({"../../locale/am.json":()=>n(()=>import("../chunks/am.529b5a34.js"),[],import.meta.url),"../../locale/ar.json":()=>n(()=>import("../chunks/ar.c87f250c.js"),[],import.meta.url),"../../locale/az.json":()=>n(()=>import("../chunks/az.686d4cbc.js"),[],import.meta.url),"../../locale/az@latin.json":()=>n(()=>import("../chunks/az@latin.686d4cbc.js"),[],import.meta.url),"../../locale/bg.json":()=>n(()=>import("../chunks/bg.5f0f0783.js"),[],import.meta.url),"../../locale/bn.json":()=>n(()=>import("../chunks/bn.16b26d6a.js"),[],import.meta.url),"../../locale/bs.json":()=>n(()=>import("../chunks/bs.941e02f9.js"),[],import.meta.url),"../../locale/ca.json":()=>n(()=>import("../chunks/ca.6c7adc29.js"),[],import.meta.url),"../../locale/cmn.json":()=>n(()=>import("../chunks/cmn.b0e628b1.js"),[],import.meta.url),"../../locale/cs.json":()=>n(()=>import("../chunks/cs.7d4fe45f.js"),[],import.meta.url),"../../locale/da.json":()=>n(()=>import("../chunks/da.6392df33.js"),[],import.meta.url),"../../locale/de.json":()=>n(()=>import("../chunks/de.3e3f4c5f.js"),[],import.meta.url),"../../locale/el.json":()=>n(()=>import("../chunks/el.3243471c.js"),[],import.meta.url),"../../locale/en.json":()=>n(()=>import("../chunks/en.6f3ee844.js"),[],import.meta.url),"../../locale/eo.json":()=>n(()=>import("../chunks/eo.50cd82ca.js"),[],import.meta.url),"../../locale/es.json":()=>n(()=>import("../chunks/es.71efc2e6.js"),[],import.meta.url),"../../locale/es_CL.json":()=>n(()=>import("../chunks/es_CL.9ee05e2e.js"),[],import.meta.url),"../../locale/es_CO.json":()=>n(()=>import("../chunks/es_CO.433908ff.js"),[],import.meta.url),"../../locale/es_DO.json":()=>n(()=>import("../chunks/es_DO.a65977f2.js"),[],import.meta.url),"../../locale/es_SV.json":()=>n(()=>import("../chunks/es_SV.1dbb15d6.js"),[],import.meta.url),"../../locale/es_VE.json":()=>n(()=>import("../chunks/es_VE.b8ee81ab.js"),[],import.meta.url),"../../locale/et.json":()=>n(()=>import("../chunks/et.494808c1.js"),[],import.meta.url),"../../locale/eu.json":()=>n(()=>import("../chunks/eu.a75c8a66.js"),[],import.meta.url),"../../locale/fa.json":()=>n(()=>import("../chunks/fa.aade2e5b.js"),[],import.meta.url),"../../locale/fi.json":()=>n(()=>import("../chunks/fi.6dcbe2d8.js"),[],import.meta.url),"../../locale/fil.json":()=>n(()=>import("../chunks/fil.bf95a8c2.js"),[],import.meta.url),"../../locale/fr.json":()=>n(()=>import("../chunks/fr.41ca0c71.js"),[],import.meta.url),"../../locale/fr_CM.json":()=>n(()=>import("../chunks/fr_CM.41ca0c71.js"),[],import.meta.url),"../../locale/fr_LU.json":()=>n(()=>import("../chunks/fr_LU.41ca0c71.js"),[],import.meta.url),"../../locale/ga.json":()=>n(()=>import("../chunks/ga.1aa0cf77.js"),[],import.meta.url),"../../locale/ga_IE.json":()=>n(()=>import("../chunks/ga_IE.1aa0cf77.js"),[],import.meta.url),"../../locale/gl.json":()=>n(()=>import("../chunks/gl.651f427e.js"),[],import.meta.url),"../../locale/gl_ES.json":()=>n(()=>import("../chunks/gl_ES.3f06996a.js"),[],import.meta.url),"../../locale/gu.json":()=>n(()=>import("../chunks/gu.edaeef9f.js"),[],import.meta.url),"../../locale/hak.json":()=>n(()=>import("../chunks/hak.b0e628b1.js"),[],import.meta.url),"../../locale/he.json":()=>n(()=>import("../chunks/he.d494dad3.js"),[],import.meta.url),"../../locale/hi.json":()=>n(()=>import("../chunks/hi.4cb599b9.js"),[],import.meta.url),"../../locale/hr.json":()=>n(()=>import("../chunks/hr.f5b831e0.js"),[],import.meta.url),"../../locale/hu.json":()=>n(()=>import("../chunks/hu.79273dde.js"),[],import.meta.url),"../../locale/it.json":()=>n(()=>import("../chunks/it.06e10525.js"),[],import.meta.url),"../../locale/ja.json":()=>n(()=>import("../chunks/ja.8a280c75.js"),[],import.meta.url),"../../locale/ka.json":()=>n(()=>import("../chunks/ka.2ec605ad.js"),[],import.meta.url),"../../locale/kk.json":()=>n(()=>import("../chunks/kk.000fa10d.js"),[],import.meta.url),"../../locale/km.json":()=>n(()=>import("../chunks/km.5a841b56.js"),[],import.meta.url),"../../locale/ko.json":()=>n(()=>import("../chunks/ko.fc0f77d6.js"),[],import.meta.url),"../../locale/la.json":()=>n(()=>import("../chunks/la.d70640e2.js"),[],import.meta.url),"../../locale/lt.json":()=>n(()=>import("../chunks/lt.16c32a57.js"),[],import.meta.url),"../../locale/lv.json":()=>n(()=>import("../chunks/lv.45fb267a.js"),[],import.meta.url),"../../locale/mg.json":()=>n(()=>import("../chunks/mg.10ff1fbf.js"),[],import.meta.url),"../../locale/ml.json":()=>n(()=>import("../chunks/ml.03d87de5.js"),[],import.meta.url),"../../locale/mn.json":()=>n(()=>import("../chunks/mn.d30c6c8d.js"),[],import.meta.url),"../../locale/nb.json":()=>n(()=>import("../chunks/nb.7e77055e.js"),[],import.meta.url),"../../locale/ne.json":()=>n(()=>import("../chunks/ne.44b2108c.js"),[],import.meta.url),"../../locale/nl.json":()=>n(()=>import("../chunks/nl.105a7e42.js"),[],import.meta.url),"../../locale/pa.json":()=>n(()=>import("../chunks/pa.693eb7f1.js"),[],import.meta.url),"../../locale/pl.json":()=>n(()=>import("../chunks/pl.b9961fab.js"),[],import.meta.url),"../../locale/pt.json":()=>n(()=>import("../chunks/pt.fb84e45c.js"),[],import.meta.url),"../../locale/pt_BR.json":()=>n(()=>import("../chunks/pt_BR.8e9ba906.js"),[],import.meta.url),"../../locale/ro.json":()=>n(()=>import("../chunks/ro.19e446df.js"),[],import.meta.url),"../../locale/ru.json":()=>n(()=>import("../chunks/ru.f40b76b5.js"),[],import.meta.url),"../../locale/si.json":()=>n(()=>import("../chunks/si.b73214e2.js"),[],import.meta.url),"../../locale/sk.json":()=>n(()=>import("../chunks/sk.31b4e620.js"),[],import.meta.url),"../../locale/sl.json":()=>n(()=>import("../chunks/sl.0919a363.js"),[],import.meta.url),"../../locale/sr.json":()=>n(()=>import("../chunks/sr.9666a827.js"),[],import.meta.url),"../../locale/sr@ijekavianlatin.json":()=>n(()=>import("../chunks/sr@ijekavianlatin.adfa69b0.js"),[],import.meta.url),"../../locale/sr@latin.json":()=>n(()=>import("../chunks/sr@latin.69f1cefa.js"),[],import.meta.url),"../../locale/sv.json":()=>n(()=>import("../chunks/sv.81b70acf.js"),[],import.meta.url),"../../locale/ta.json":()=>n(()=>import("../chunks/ta.c2881ecd.js"),[],import.meta.url),"../../locale/te.json":()=>n(()=>import("../chunks/te.268f6888.js"),[],import.meta.url),"../../locale/tk.json":()=>n(()=>import("../chunks/tk.27105eef.js"),[],import.meta.url),"../../locale/tl.json":()=>n(()=>import("../chunks/tl.35bb5dd0.js"),[],import.meta.url),"../../locale/tr.json":()=>n(()=>import("../chunks/tr.5e75aa15.js"),[],import.meta.url),"../../locale/uk.json":()=>n(()=>import("../chunks/uk.0b9beb0d.js"),[],import.meta.url),"../../locale/ur.json":()=>n(()=>import("../chunks/ur.eb8221b2.js"),[],import.meta.url),"../../locale/uz.json":()=>n(()=>import("../chunks/uz.ffba54b1.js"),[],import.meta.url),"../../locale/uz@Cyrl.json":()=>n(()=>import("../chunks/uz@Cyrl.c26b27a3.js"),[],import.meta.url),"../../locale/uz@Latn.json":()=>n(()=>import("../chunks/uz@Latn.c182086d.js"),[],import.meta.url),"../../locale/yue.json":()=>n(()=>import("../chunks/yue.b0e628b1.js"),[],import.meta.url),"../../locale/zh-Hans.json":()=>n(()=>import("../chunks/zh-Hans.227fe02f.js"),[],import.meta.url),"../../locale/zh-Hant.json":()=>n(()=>import("../chunks/zh-Hant.3484784d.js"),[],import.meta.url),"../../locale/zh.json":()=>n(()=>import("../chunks/zh.67e41b14.js"),[],import.meta.url),"../../locale/zh_HK.json":()=>n(()=>import("../chunks/zh_HK.a7ddf3ff.js"),[],import.meta.url),"../../locale/zh_TW.json":()=>n(()=>import("../chunks/zh_TW.d824274d.js"),[],import.meta.url)}),`../../locale/${r}.json`));const be=r=>({p:r&0}),Pt=r=>({p:F});function ye(r){let t,e,i,o,a,u,l,s,_,v='<p>visit <a href="https://unspent.app/documentation" class="svelte-p7fobq">unspent.app</a> to learn more</p> <p><a href="https://unspent.app/202309_fundraiser" class="svelte-p7fobq">💚 support this work 💚</a></p>',p;function d(c){r[2](c)}let g={};F!==void 0&&(g.currentPage=F),e=new de({props:g}),St.push(()=>Jt(e,"currentPage",d)),a=new Pe({});const h=r[1].default,m=qt(h,r,r[0],Pt);return{c(){t=j("div"),K(e.$$.fragment),o=D(),K(a.$$.fragment),u=D(),l=j("main"),m&&m.c(),s=D(),_=j("footer"),_.innerHTML=v,this.h()},l(c){t=A(c,"DIV",{class:!0});var E=R(t);x(e.$$.fragment,E),o=V(E),x(a.$$.fragment,E),u=V(E),l=A(E,"MAIN",{class:!0});var I=R(l);m&&m.l(I),I.forEach(L),s=V(E),_=A(E,"FOOTER",{class:!0,"data-svelte-h":!0}),M(_)!=="svelte-1gqauwo"&&(_.innerHTML=v),E.forEach(L),this.h()},h(){f(l,"class","svelte-p7fobq"),f(_,"class","svelte-p7fobq"),f(t,"class","app svelte-p7fobq")},m(c,E){b(c,t,E),G(e,t,null),T(t,o),G(a,t,null),T(t,u),T(t,l),m&&m.m(l,null),T(t,s),T(t,_),p=!0},p(c,[E]){const I={};!i&&E&0&&(i=!0,I.currentPage=F,Bt(()=>i=!1)),e.$set(I),m&&m.p&&(!p||E&1)&&Ut(m,h,c,c[0],p?Ft(h,c[0],E,be):Nt(c[0]),Pt)},i(c){p||(H(e.$$.fragment,c),H(a.$$.fragment,c),H(m,c),p=!0)},o(c){C(e.$$.fragment,c),C(a.$$.fragment,c),C(m,c),p=!1},d(c){c&&L(t),W(e),W(a),m&&m.d(c)}}}let F;{let r=Xt();console.log(r),r.includes("-")&&(r=r.split("-").shift()),console.log(r),Yt({fallbackLocale:"en",initialLocale:r})}function $e(r,t,e){let{$$slots:i={},$$scope:o}=t;function a(u){F=u}return r.$$set=u=>{"$$scope"in u&&e(0,o=u.$$scope)},[o,i,a]}class Ke extends rt{constructor(t){super(),ot(this,t,$e,ye,et,{})}}export{Ke as component};
//# sourceMappingURL=0.d8654da7.js.map
