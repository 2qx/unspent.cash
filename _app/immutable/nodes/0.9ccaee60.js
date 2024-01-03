import{r as F,u as _t,v as At,w as St,x as pt,s as nt,f as T,a as y,g as I,h as P,d as g,c as k,j as d,y as ot,i as w,z as E,A as X,B as qt,C as ft,o as Kt,D as Wt,H as Zt,e as Y,E as Jt,q as Rt,F as at,G as Qt,I as lt,J as q,K as it,p as Xt,L as Yt,M as xt,N as te,O as ee,P as re}from"../chunks/scheduler.0a456663.js";import{n as Bt,l as Nt,f as oe,h as le,S as ut,i as mt,g as Et,t as B,c as vt,a as N,b as Z,d as x,m as J,e as Q,j as ie,k as ae,o as se}from"../chunks/index.a39ae510.js";import{r as Ut,g as _e,i as ne}from"../chunks/runtime.esm.799eaf60.js";import{e as Pt,u as ue,f as me}from"../chunks/each.abf595da.js";import{t as st,C as ce}from"../chunks/CopyToClipboard.ae6f4741.js";import{g as Dt,a as Ot}from"../chunks/spread.8a54911c.js";import{w as pe}from"../chunks/index.c40a0177.js";import{p as de}from"../chunks/stores.38470ba8.js";import{g as fe}from"../chunks/navigation.8e6e88fc.js";import{e as et}from"../chunks/singletons.ee946865.js";import{c as Ee,t as ve}from"../chunks/table.4fa95357.js";import{h as he}from"../chunks/help.b55f240e.js";import{r as Vt,s as bt,p as je}from"../chunks/store.772ed0bf.js";import{_ as o}from"../chunks/preload-helper.a4192956.js";function ge(r,t,e,a){if(!t)return F;const l=r.getBoundingClientRect();if(t.left===l.left&&t.right===l.right&&t.top===l.top&&t.bottom===l.bottom)return F;const{delay:i=0,duration:u=300,easing:s=_t,start:_=Bt()+i,end:n=_+u,tick:c=F,css:m}=e(r,{from:t,to:l},a);let p=!0,j=!1,f;function v(){m&&(f=oe(r,0,1,u,i,s,m)),i||(j=!0)}function h(){m&&le(r,f),p=!1}return Nt(A=>{if(!j&&A>=_&&(j=!0),j&&A>=n&&(c(1,0),h()),!p)return!1;if(j){const R=A-_,b=0+1*s(R/u);c(b,1-b)}return!0}),v(),c(0,1),h}function Le(r){const t=getComputedStyle(r);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:e,height:a}=t,l=r.getBoundingClientRect();r.style.position="absolute",r.style.width=e,r.style.height=a,Ft(r,l)}}function Ft(r,t){const e=r.getBoundingClientRect();if(t.left!==e.left||t.top!==e.top){const a=getComputedStyle(r),l=a.transform==="none"?"":a.transform;r.style.transform=`${l} translate(${t.left-e.left}px, ${t.top-e.top}px)`}}function Gt(r){const t=r-1;return t*t*t+1}function Te(r,{delay:t=0,duration:e=400,easing:a=_t}={}){const l=+getComputedStyle(r).opacity;return{delay:t,duration:e,easing:a,css:i=>`opacity: ${i*l}`}}function Ie(r,{delay:t=0,duration:e=400,easing:a=Gt,x:l=0,y:i=0,opacity:u=0}={}){const s=getComputedStyle(r),_=+s.opacity,n=s.transform==="none"?"":s.transform,c=_*(1-u),[m,p]=At(l),[j,f]=At(i);return{delay:t,duration:e,easing:a,css:(v,h)=>`
			transform: ${n} translate(${(1-v)*m}${p}, ${(1-v)*j}${f});
			opacity: ${_-c*h}`}}function Ae(r,{from:t,to:e},a={}){const l=getComputedStyle(r),i=l.transform==="none"?"":l.transform,[u,s]=l.transformOrigin.split(" ").map(parseFloat),_=t.left+t.width*u/e.width-(e.left+u),n=t.top+t.height*s/e.height-(e.top+s),{delay:c=0,duration:m=j=>Math.sqrt(j)*120,easing:p=Gt}=a;return{delay:c,duration:St(m)?m(Math.sqrt(_*_+n*n)):m,easing:p,css:(j,f)=>{const v=f*_,h=f*n,A=j+f*t.width/e.width,R=j+f*t.height/e.height;return`transform: ${i} translate(${v}px, ${h}px) scale(${A}, ${R});`}}}function yt(r){return Object.prototype.toString.call(r)==="[object Date]"}function dt(r,t){if(r===t||r!==r)return()=>r;const e=typeof r;if(e!==typeof t||Array.isArray(r)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const a=t.map((l,i)=>dt(r[i],l));return l=>a.map(i=>i(l))}if(e==="object"){if(!r||!t)throw new Error("Object cannot be null");if(yt(r)&&yt(t)){r=r.getTime(),t=t.getTime();const i=t-r;return u=>new Date(r+u*i)}const a=Object.keys(t),l={};return a.forEach(i=>{l[i]=dt(r[i],t[i])}),i=>{const u={};return a.forEach(s=>{u[s]=l[s](i)}),u}}if(e==="number"){const a=t-r;return l=>r+l*a}throw new Error(`Cannot interpolate ${e} values`)}function Re(r,t={}){const e=pe(r);let a,l=r;function i(u,s){if(r==null)return e.set(r=u),Promise.resolve();l=u;let _=a,n=!1,{delay:c=0,duration:m=400,easing:p=_t,interpolate:j=dt}=pt(pt({},t),s);if(m===0)return _&&(_.abort(),_=null),e.set(r=l),Promise.resolve();const f=Bt()+c;let v;return a=Nt(h=>{if(h<f)return!0;n||(v=j(r,u),typeof m=="function"&&(m=m(r,u)),n=!0),_&&(_.abort(),_=null);const A=h-f;return A>m?(e.set(r=u),!1):(e.set(r=v(p(A/m))),!0)}),a.promise}return{set:i,update:(u,s)=>i(u(l,r),s),subscribe:e.subscribe}}function Pe(r){let t,e=r[0].msg+"",a;return{c(){t=new Zt(!1),a=Y(),this.h()},l(l){t=Jt(l,!1),a=Y(),this.h()},h(){t.a=a},m(l,i){t.m(e,l,i),w(l,a,i)},p(l,i){i&1&&e!==(e=l[0].msg+"")&&t.p(e)},i:F,o:F,d(l){l&&(g(a),t.d())}}}function De(r){let t,e,a;const l=[r[2]];var i=r[0].component.src;function u(s,_){let n={};if(_!==void 0&&_&4)n=Dt(l,[Ot(s[2])]);else for(let c=0;c<l.length;c+=1)n=pt(n,l[c]);return{props:n}}return i&&(t=Rt(i,u(r))),{c(){t&&Z(t.$$.fragment),e=Y()},l(s){t&&x(t.$$.fragment,s),e=Y()},m(s,_){t&&J(t,s,_),w(s,e,_),a=!0},p(s,_){if(_&1&&i!==(i=s[0].component.src)){if(t){Et();const n=t;B(n.$$.fragment,1,0,()=>{Q(n,1)}),vt()}i?(t=Rt(i,u(s,_)),Z(t.$$.fragment),N(t.$$.fragment,1),J(t,e.parentNode,e)):t=null}else if(i){const n=_&4?Dt(l,[Ot(s[2])]):{};t.$set(n)}},i(s){a||(t&&N(t.$$.fragment,s),a=!0)},o(s){t&&B(t.$$.fragment,s),a=!1},d(s){s&&g(e),t&&Q(t,s)}}}function kt(r){let t,e,a;return{c(){t=T("div"),this.h()},l(l){t=I(l,"DIV",{class:!0,role:!0,tabindex:!0}),P(t).forEach(g),this.h()},h(){d(t,"class","_toastBtn pe svelte-10l0ogd"),d(t,"role","button"),d(t,"tabindex","0")},m(l,i){w(l,t,i),e||(a=[X(t,"click",r[4]),X(t,"keydown",r[8])],e=!0)},p:F,d(l){l&&g(t),e=!1,qt(a)}}}function Oe(r){let t,e,a,l,i,u,s,_,n,c;const m=[De,Pe],p=[];function j(v,h){return v[0].component?0:1}a=j(r),l=p[a]=m[a](r);let f=r[0].dismissable&&kt(r);return{c(){t=T("div"),e=T("div"),l.c(),i=y(),f&&f.c(),u=y(),s=T("progress"),this.h()},l(v){t=I(v,"DIV",{class:!0});var h=P(t);e=I(h,"DIV",{role:!0,class:!0});var A=P(e);l.l(A),A.forEach(g),i=k(h),f&&f.l(h),u=k(h),s=I(h,"PROGRESS",{class:!0}),P(s).forEach(g),h.forEach(g),this.h()},h(){d(e,"role","status"),d(e,"class","_toastMsg svelte-10l0ogd"),ot(e,"pe",r[0].component),d(s,"class","_toastBar svelte-10l0ogd"),s.value=r[1],d(t,"class","_toastItem svelte-10l0ogd"),ot(t,"pe",r[0].pausable)},m(v,h){w(v,t,h),E(t,e),p[a].m(e,null),E(t,i),f&&f.m(t,null),E(t,u),E(t,s),_=!0,n||(c=[X(t,"mouseenter",r[9]),X(t,"mouseleave",r[6])],n=!0)},p(v,[h]){let A=a;a=j(v),a===A?p[a].p(v,h):(Et(),B(p[A],1,1,()=>{p[A]=null}),vt(),l=p[a],l?l.p(v,h):(l=p[a]=m[a](v),l.c()),N(l,1),l.m(e,null)),(!_||h&1)&&ot(e,"pe",v[0].component),v[0].dismissable?f?f.p(v,h):(f=kt(v),f.c(),f.m(t,u)):f&&(f.d(1),f=null),(!_||h&2)&&(s.value=v[1]),(!_||h&1)&&ot(t,"pe",v[0].pausable)},i(v){_||(N(l),_=!0)},o(v){B(l),_=!1},d(v){v&&g(t),p[a].d(),f&&f.d(),n=!1,qt(c)}}}function Ve(r,t,e){let a,{item:l}=t;const i=Re(l.initial,{duration:l.duration,easing:_t});ft(r,i,R=>e(1,a=R));const u=()=>st.pop(l.id),s=()=>{(a===1||a===0)&&u()};let _=l.initial,n=_,c=!1;const m=()=>{!c&&a!==_&&(i.set(a,{duration:0}),c=!0)},p=()=>{if(c){const R=l.duration,b=R-R*((a-n)/(_-n));i.set(_,{duration:b}).then(s),c=!1}};let j={};const f=()=>document.hidden?m():p(),v=R=>{const{hidden:b,addEventListener:C,removeEventListener:z}=document;if(typeof b>"u")return;const M="visibilitychange";return R?C(M,f):z(M,f),!0};Kt(()=>v(!0)&&f()),Wt(()=>{typeof l.onpop=="function"&&l.onpop(l.id),v(!1)});const h=R=>{R instanceof KeyboardEvent&&["Enter"," "].includes(R.key)&&u()},A=()=>{l.pausable&&m()};return r.$$set=R=>{"item"in R&&e(0,l=R.item)},r.$$.update=()=>{if(r.$$.dirty&1&&typeof l.progress<"u"&&e(0,l.next=l.progress,l),r.$$.dirty&131&&_!==l.next&&(e(7,_=l.next),n=a,c=!1,i.set(_).then(s)),r.$$.dirty&1&&l.component){const{props:R={},sendIdTo:b}=l.component;e(2,j={...R,...b&&{[b]:l.id}})}},[l,a,j,i,u,m,p,_,h,A]}class be extends ut{constructor(t){super(),mt(this,t,Ve,Oe,nt,{item:0})}}function $t(r,t,e){const a=r.slice();return a[5]=t[e],a}function wt(r,t){let e,a,l,i,u,s,_,n,c=F,m;return a=new be({props:{item:t[5]}}),{key:r,first:null,c(){e=T("li"),Z(a.$$.fragment),l=y(),this.h()},l(p){e=I(p,"LI",{class:!0,style:!0});var j=P(e);x(a.$$.fragment,j),l=k(j),j.forEach(g),this.h()},h(){d(e,"class",i=at(t[5].classes.join(" "))+" svelte-yh90az"),d(e,"style",u=t[1](t[5].theme)),this.first=e},m(p,j){w(p,e,j),J(a,e,null),E(e,l),m=!0},p(p,j){t=p;const f={};j&1&&(f.item=t[5]),a.$set(f),(!m||j&1&&i!==(i=at(t[5].classes.join(" "))+" svelte-yh90az"))&&d(e,"class",i),(!m||j&1&&u!==(u=t[1](t[5].theme)))&&d(e,"style",u)},r(){n=e.getBoundingClientRect()},f(){Le(e),c(),Ft(e,n)},a(){c(),c=ge(e,n,Ae,{duration:200})},i(p){m||(N(a.$$.fragment,p),p&&Qt(()=>{m&&(_&&_.end(1),s=ie(e,Ie,t[5].intro),s.start())}),m=!0)},o(p){B(a.$$.fragment,p),s&&s.invalidate(),p&&(_=ae(e,Te,{})),m=!1},d(p){p&&g(e),Q(a),p&&_&&_.end()}}}function ye(r){let t,e=[],a=new Map,l,i=Pt(r[0]);const u=s=>s[5].id;for(let s=0;s<i.length;s+=1){let _=$t(r,i,s),n=u(_);a.set(n,e[s]=wt(n,_))}return{c(){t=T("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=I(s,"UL",{class:!0});var _=P(t);for(let n=0;n<e.length;n+=1)e[n].l(_);_.forEach(g),this.h()},h(){d(t,"class","_toastContainer svelte-yh90az")},m(s,_){w(s,t,_);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null);l=!0},p(s,[_]){if(_&3){i=Pt(s[0]),Et();for(let n=0;n<e.length;n+=1)e[n].r();e=ue(e,_,u,1,s,i,a,t,me,wt,null,$t);for(let n=0;n<e.length;n+=1)e[n].a();vt()}},i(s){if(!l){for(let _=0;_<i.length;_+=1)N(e[_]);l=!0}},o(s){for(let _=0;_<e.length;_+=1)B(e[_]);l=!1},d(s){s&&g(t);for(let _=0;_<e.length;_+=1)e[_].d()}}}function ke(r,t,e){let a;ft(r,st,_=>e(4,a=_));let{options:l={}}=t,{target:i="default"}=t,u;const s=_=>Object.keys(_).reduce((n,c)=>`${n}${c}:${_[c]};`,"");return r.$$set=_=>{"options"in _&&e(2,l=_.options),"target"in _&&e(3,i=_.target)},r.$$.update=()=>{r.$$.dirty&12&&st._init(i,l),r.$$.dirty&24&&e(0,u=a.filter(_=>_.target===i))},[u,s,l,i,a]}class $e extends ut{constructor(t){super(),mt(this,t,ke,ye,nt,{options:2,target:3})}}const we=""+new URL("../assets/logo.058cd407.svg",import.meta.url).href,Ce=""+new URL("../assets/home.53e28e3a.svg",import.meta.url).href,ze=""+new URL("../assets/code.231db803.svg",import.meta.url).href,Me=""+new URL("../assets/restart.1e308b65.svg",import.meta.url).href,He=""+new URL("../assets/github.3fa339eb.svg",import.meta.url).href;function Ct(r){let t,e,a,l=`<img src="${Ee}" alt="chart"/>`,i,u,s,_,n=r[0]>5&&zt(r),c=r[0]>5&&Mt(r);return{c(){n&&n.c(),t=y(),e=T("li"),a=T("a"),a.innerHTML=l,s=y(),c&&c.c(),_=Y(),this.h()},l(m){n&&n.l(m),t=k(m),e=I(m,"LI",{class:!0,"aria-current":!0});var p=P(e);a=I(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(a)!=="svelte-uagc90"&&(a.innerHTML=l),p.forEach(g),s=k(m),c&&c.l(m),_=Y(),this.h()},h(){d(a,"href",et+"/chart"),d(a,"class","svelte-188jjru"),d(e,"class",i=at(r[0]==4?"flashing":"")+" svelte-188jjru"),d(e,"aria-current",u=r[1].url.pathname==="/chart"?"page":void 0)},m(m,p){n&&n.m(m,p),w(m,t,p),w(m,e,p),E(e,a),w(m,s,p),c&&c.m(m,p),w(m,_,p)},p(m,p){m[0]>5?n?n.p(m,p):(n=zt(m),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null),p&1&&i!==(i=at(m[0]==4?"flashing":"")+" svelte-188jjru")&&d(e,"class",i),p&2&&u!==(u=m[1].url.pathname==="/chart"?"page":void 0)&&d(e,"aria-current",u),m[0]>5?c?c.p(m,p):(c=Mt(m),c.c(),c.m(_.parentNode,_)):c&&(c.d(1),c=null)},d(m){m&&(g(t),g(e),g(s),g(_)),n&&n.d(m),c&&c.d(m)}}}function zt(r){let t,e,a=`<img src="${ve}" alt="table"/>`,l;return{c(){t=T("li"),e=T("a"),e.innerHTML=a,this.h()},l(i){t=I(i,"LI",{"aria-current":!0,class:!0});var u=P(t);e=I(u,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(e)!=="svelte-i5ihrc"&&(e.innerHTML=a),u.forEach(g),this.h()},h(){d(e,"href",et+"/table"),d(e,"class","svelte-188jjru"),d(t,"aria-current",l=r[1].url.pathname==="/table"?"page":void 0),d(t,"class","svelte-188jjru")},m(i,u){w(i,t,u),E(t,e)},p(i,u){u&2&&l!==(l=i[1].url.pathname==="/table"?"page":void 0)&&d(t,"aria-current",l)},d(i){i&&g(t)}}}function Mt(r){let t,e,a=`<img src="${ze}" alt="code"/>`,l;return{c(){t=T("li"),e=T("a"),e.innerHTML=a,this.h()},l(i){t=I(i,"LI",{"aria-current":!0,class:!0});var u=P(t);e=I(u,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(e)!=="svelte-njq77z"&&(e.innerHTML=a),u.forEach(g),this.h()},h(){d(e,"href",et+"/code"),d(e,"class","svelte-188jjru"),d(t,"aria-current",l=r[1].url.pathname==="/code"?"page":void 0),d(t,"class","svelte-188jjru")},m(i,u){w(i,t,u),E(t,e)},p(i,u){u&2&&l!==(l=i[1].url.pathname==="/code"?"page":void 0)&&d(t,"aria-current",l)},d(i){i&&g(t)}}}function Se(r){let t,e,a=`<a href="/" class="svelte-188jjru"><img src="${we}" alt="Unspent Cash" class="svelte-188jjru"/></a>`,l,i,u,s,_,n,c,m,p=`<img src="${Ce}" alt="home"/>`,j,f,v,h,A,R=`<img src="${he}" alt="help"/>`,b,C,z,M,G,D,L,V=`<img src="${Me}" alt="restart" class="svelte-188jjru"/>`,U,O,ht=`<img src="${He}" alt="GitHub" class="svelte-188jjru"/>`,ct,jt,$=r[0]>3&&Ct(r);return{c(){t=T("header"),e=T("div"),e.innerHTML=a,l=y(),i=T("nav"),u=lt("svg"),s=lt("path"),_=y(),n=T("ul"),c=T("li"),m=T("a"),m.innerHTML=p,f=y(),$&&$.c(),v=y(),h=T("li"),A=T("a"),A.innerHTML=R,C=y(),z=lt("svg"),M=lt("path"),G=y(),D=T("div"),L=T("span"),L.innerHTML=V,U=y(),O=T("a"),O.innerHTML=ht,this.h()},l(S){t=I(S,"HEADER",{class:!0});var H=P(t);e=I(H,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-wu0ome"&&(e.innerHTML=a),l=k(H),i=I(H,"NAV",{class:!0});var K=P(i);u=it(K,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var gt=P(u);s=it(gt,"path",{d:!0,class:!0}),P(s).forEach(g),gt.forEach(g),_=k(K),n=I(K,"UL",{class:!0});var W=P(n);c=I(W,"LI",{"aria-current":!0,class:!0});var Lt=P(c);m=I(Lt,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(m)!=="svelte-1w70vgq"&&(m.innerHTML=p),Lt.forEach(g),f=k(W),$&&$.l(W),v=k(W),h=I(W,"LI",{"aria-current":!0,class:!0});var Tt=P(h);A=I(Tt,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(A)!=="svelte-1lkddtx"&&(A.innerHTML=R),Tt.forEach(g),W.forEach(g),C=k(K),z=it(K,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var It=P(z);M=it(It,"path",{d:!0,class:!0}),P(M).forEach(g),It.forEach(g),K.forEach(g),G=k(H),D=I(H,"DIV",{class:!0});var rt=P(D);L=I(rt,"SPAN",{"data-svelte-h":!0}),q(L)!=="svelte-j9eidg"&&(L.innerHTML=V),U=k(rt),O=I(rt,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(O)!=="svelte-1wb8n0r"&&(O.innerHTML=ht),rt.forEach(g),H.forEach(g),this.h()},h(){d(e,"class","corner svelte-188jjru"),d(s,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d(s,"class","svelte-188jjru"),d(u,"viewBox","0 0 2 3"),d(u,"aria-hidden","true"),d(u,"class","svelte-188jjru"),d(m,"href",et+"/"),d(m,"class","svelte-188jjru"),d(c,"aria-current",j=r[1].url.pathname==="/"?"page":void 0),d(c,"class","svelte-188jjru"),d(A,"href",et+"/help"),d(A,"class","svelte-188jjru"),d(h,"aria-current",b=r[1].url.pathname==="/help"?"page":void 0),d(h,"class","svelte-188jjru"),d(n,"class","svelte-188jjru"),d(M,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(M,"class","svelte-188jjru"),d(z,"viewBox","0 0 2 3"),d(z,"aria-hidden","true"),d(z,"class","svelte-188jjru"),d(i,"class","svelte-188jjru"),d(O,"href","https://github.com/2qx/unspent"),d(O,"class","svelte-188jjru"),d(D,"class","corner svelte-188jjru"),d(t,"class","svelte-188jjru")},m(S,H){w(S,t,H),E(t,e),E(t,l),E(t,i),E(i,u),E(u,s),E(i,_),E(i,n),E(n,c),E(c,m),E(n,f),$&&$.m(n,null),E(n,v),E(n,h),E(h,A),E(i,C),E(i,z),E(z,M),E(t,G),E(t,D),E(D,L),E(D,U),E(D,O),ct||(jt=X(L,"click",r[2]),ct=!0)},p(S,[H]){H&2&&j!==(j=S[1].url.pathname==="/"?"page":void 0)&&d(c,"aria-current",j),S[0]>3?$?$.p(S,H):($=Ct(S),$.c(),$.m(n,v)):$&&($.d(1),$=null),H&2&&b!==(b=S[1].url.pathname==="/help"?"page":void 0)&&d(h,"aria-current",b)},i:F,o:F,d(S){S&&g(t),$&&$.d(),ct=!1,jt()}}}function qe(r,t,e){let a;ft(r,de,u=>e(1,a=u));let l;return Vt.subscribe(u=>{}),bt.subscribe(u=>{e(0,l=Number(u)),console.log(l)}),[l,a,()=>{bt.set(""),Vt.set(""),je.set(""),fe("/")}]}class Be extends ut{constructor(t){super(),mt(this,t,qe,Se,nt,{})}}const Ne=(r,t)=>{const e=r[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((a,l)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+t)))})};Ut("en",()=>o(()=>import("../chunks/en.22c7c92f.js"),[],import.meta.url));const Ue=["af","ak","am","ar","as","ay","az","be","bg","bho","bm","bn","bs","ca","ceb","ckb","co","cs","cy","da","de","doi","dv","ee","el","en","eo","es","et","eu","fa","fi","fr","fy","ga","gd","gl","gn","gom","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","ilo","is","it","iw","ja","jw","ka","kk","km","kn","ko","kri","ku","ky","la","lb","lg","ln","lo","lt","lus","lv","mai","mg","mi","mk","ml","mn","mni-Mtei","mr","ms","mt","my","ne","nl","no","nso","ny","om","or","pa","pl","ps","pt","qu","ro","ru","rw","sa","sd","si","sk","sl","sm","sn","so","sq","sr","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tr","ts","tt","ug","uk","ur","uz","vi","xh","yi","yo","zh","zh-CN","zh-TW","zu"];for(const r of Ue)Ut(r,()=>Ne(Object.assign({"../../locale/0en.json":()=>o(()=>import("../chunks/0en.c873fdc8.js"),[],import.meta.url),"../../locale/af.json":()=>o(()=>import("../chunks/af.54883870.js"),[],import.meta.url),"../../locale/ak.json":()=>o(()=>import("../chunks/ak.7652b6ea.js"),[],import.meta.url),"../../locale/am.json":()=>o(()=>import("../chunks/am.d13c2737.js"),[],import.meta.url),"../../locale/ar.json":()=>o(()=>import("../chunks/ar.cf43421d.js"),[],import.meta.url),"../../locale/as.json":()=>o(()=>import("../chunks/as.3b5bacbb.js"),[],import.meta.url),"../../locale/ay.json":()=>o(()=>import("../chunks/ay.f87f05bd.js"),[],import.meta.url),"../../locale/az.json":()=>o(()=>import("../chunks/az.7bdc716f.js"),[],import.meta.url),"../../locale/be.json":()=>o(()=>import("../chunks/be.067533ff.js"),[],import.meta.url),"../../locale/bg.json":()=>o(()=>import("../chunks/bg.cd47f65f.js"),[],import.meta.url),"../../locale/bho.json":()=>o(()=>import("../chunks/bho.654b64c3.js"),[],import.meta.url),"../../locale/bm.json":()=>o(()=>import("../chunks/bm.d5754a94.js"),[],import.meta.url),"../../locale/bn.json":()=>o(()=>import("../chunks/bn.88645bc0.js"),[],import.meta.url),"../../locale/bs.json":()=>o(()=>import("../chunks/bs.e8990de9.js"),[],import.meta.url),"../../locale/ca.json":()=>o(()=>import("../chunks/ca.ab23800c.js"),[],import.meta.url),"../../locale/ceb.json":()=>o(()=>import("../chunks/ceb.93ce4b41.js"),[],import.meta.url),"../../locale/ckb.json":()=>o(()=>import("../chunks/ckb.e972d79a.js"),[],import.meta.url),"../../locale/co.json":()=>o(()=>import("../chunks/co.18cccccf.js"),[],import.meta.url),"../../locale/cs.json":()=>o(()=>import("../chunks/cs.33446f4f.js"),[],import.meta.url),"../../locale/cy.json":()=>o(()=>import("../chunks/cy.02457b49.js"),[],import.meta.url),"../../locale/da.json":()=>o(()=>import("../chunks/da.76f9180e.js"),[],import.meta.url),"../../locale/de.json":()=>o(()=>import("../chunks/de.6cce7b0e.js"),[],import.meta.url),"../../locale/doi.json":()=>o(()=>import("../chunks/doi.61368cd9.js"),[],import.meta.url),"../../locale/dv.json":()=>o(()=>import("../chunks/dv.40ed69f5.js"),[],import.meta.url),"../../locale/ee.json":()=>o(()=>import("../chunks/ee.6e2bf0c9.js"),[],import.meta.url),"../../locale/el.json":()=>o(()=>import("../chunks/el.577e94f6.js"),[],import.meta.url),"../../locale/en.json":()=>o(()=>import("../chunks/en.22c7c92f.js"),[],import.meta.url),"../../locale/eo.json":()=>o(()=>import("../chunks/eo.5c917d6a.js"),[],import.meta.url),"../../locale/es.json":()=>o(()=>import("../chunks/es.de5523d4.js"),[],import.meta.url),"../../locale/et.json":()=>o(()=>import("../chunks/et.5c73107b.js"),[],import.meta.url),"../../locale/eu.json":()=>o(()=>import("../chunks/eu.ee608b80.js"),[],import.meta.url),"../../locale/fa.json":()=>o(()=>import("../chunks/fa.9caed966.js"),[],import.meta.url),"../../locale/fi.json":()=>o(()=>import("../chunks/fi.49ab19a7.js"),[],import.meta.url),"../../locale/fr.json":()=>o(()=>import("../chunks/fr.000e77b9.js"),[],import.meta.url),"../../locale/fy.json":()=>o(()=>import("../chunks/fy.c15ffa12.js"),[],import.meta.url),"../../locale/ga.json":()=>o(()=>import("../chunks/ga.3fe0d1b1.js"),[],import.meta.url),"../../locale/gd.json":()=>o(()=>import("../chunks/gd.05ea913e.js"),[],import.meta.url),"../../locale/gl.json":()=>o(()=>import("../chunks/gl.9a9118a9.js"),[],import.meta.url),"../../locale/gn.json":()=>o(()=>import("../chunks/gn.5e7aff54.js"),[],import.meta.url),"../../locale/gom.json":()=>o(()=>import("../chunks/gom.ebfbbb4b.js"),[],import.meta.url),"../../locale/gu.json":()=>o(()=>import("../chunks/gu.a1999f93.js"),[],import.meta.url),"../../locale/ha.json":()=>o(()=>import("../chunks/ha.f6ae52a1.js"),[],import.meta.url),"../../locale/haw.json":()=>o(()=>import("../chunks/haw.e745f31f.js"),[],import.meta.url),"../../locale/he.json":()=>o(()=>import("../chunks/he.d287ddb1.js"),[],import.meta.url),"../../locale/hi.json":()=>o(()=>import("../chunks/hi.93ffa93a.js"),[],import.meta.url),"../../locale/hmn.json":()=>o(()=>import("../chunks/hmn.b7ae9cbc.js"),[],import.meta.url),"../../locale/hr.json":()=>o(()=>import("../chunks/hr.ebbf8845.js"),[],import.meta.url),"../../locale/ht.json":()=>o(()=>import("../chunks/ht.8ceb41c3.js"),[],import.meta.url),"../../locale/hu.json":()=>o(()=>import("../chunks/hu.b0aef985.js"),[],import.meta.url),"../../locale/hy.json":()=>o(()=>import("../chunks/hy.700c63b5.js"),[],import.meta.url),"../../locale/id.json":()=>o(()=>import("../chunks/id.adb9b42a.js"),[],import.meta.url),"../../locale/ig.json":()=>o(()=>import("../chunks/ig.570b99e7.js"),[],import.meta.url),"../../locale/ilo.json":()=>o(()=>import("../chunks/ilo.dba60bc1.js"),[],import.meta.url),"../../locale/is.json":()=>o(()=>import("../chunks/is.8dddb0f7.js"),[],import.meta.url),"../../locale/it.json":()=>o(()=>import("../chunks/it.c2f2a48e.js"),[],import.meta.url),"../../locale/iw.json":()=>o(()=>import("../chunks/iw.5c0aa87d.js"),[],import.meta.url),"../../locale/ja.json":()=>o(()=>import("../chunks/ja.089e2937.js"),[],import.meta.url),"../../locale/jw.json":()=>o(()=>import("../chunks/jw.c17dd8ff.js"),[],import.meta.url),"../../locale/ka.json":()=>o(()=>import("../chunks/ka.e8f92570.js"),[],import.meta.url),"../../locale/kk.json":()=>o(()=>import("../chunks/kk.053eed9a.js"),[],import.meta.url),"../../locale/km.json":()=>o(()=>import("../chunks/km.d138b726.js"),[],import.meta.url),"../../locale/kn.json":()=>o(()=>import("../chunks/kn.7b99af6e.js"),[],import.meta.url),"../../locale/ko.json":()=>o(()=>import("../chunks/ko.042a21ef.js"),[],import.meta.url),"../../locale/kri.json":()=>o(()=>import("../chunks/kri.69716489.js"),[],import.meta.url),"../../locale/ku.json":()=>o(()=>import("../chunks/ku.be9fc96f.js"),[],import.meta.url),"../../locale/ky.json":()=>o(()=>import("../chunks/ky.436a893f.js"),[],import.meta.url),"../../locale/la.json":()=>o(()=>import("../chunks/la.b0cce10f.js"),[],import.meta.url),"../../locale/lb.json":()=>o(()=>import("../chunks/lb.142f07e8.js"),[],import.meta.url),"../../locale/lg.json":()=>o(()=>import("../chunks/lg.7f3ba1dc.js"),[],import.meta.url),"../../locale/ln.json":()=>o(()=>import("../chunks/ln.35919c1a.js"),[],import.meta.url),"../../locale/lo.json":()=>o(()=>import("../chunks/lo.e00cd1a8.js"),[],import.meta.url),"../../locale/lt.json":()=>o(()=>import("../chunks/lt.5f4e9205.js"),[],import.meta.url),"../../locale/lus.json":()=>o(()=>import("../chunks/lus.2a29fca3.js"),[],import.meta.url),"../../locale/lv.json":()=>o(()=>import("../chunks/lv.6cbb5580.js"),[],import.meta.url),"../../locale/mai.json":()=>o(()=>import("../chunks/mai.b6c4a330.js"),[],import.meta.url),"../../locale/mg.json":()=>o(()=>import("../chunks/mg.f0c7d33f.js"),[],import.meta.url),"../../locale/mi.json":()=>o(()=>import("../chunks/mi.aa99b676.js"),[],import.meta.url),"../../locale/mk.json":()=>o(()=>import("../chunks/mk.f6059003.js"),[],import.meta.url),"../../locale/ml.json":()=>o(()=>import("../chunks/ml.a7ac66d2.js"),[],import.meta.url),"../../locale/mn.json":()=>o(()=>import("../chunks/mn.317241dc.js"),[],import.meta.url),"../../locale/mni-Mtei.json":()=>o(()=>import("../chunks/mni-Mtei.06a76f83.js"),[],import.meta.url),"../../locale/mr.json":()=>o(()=>import("../chunks/mr.dc8759ef.js"),[],import.meta.url),"../../locale/ms.json":()=>o(()=>import("../chunks/ms.aa90c876.js"),[],import.meta.url),"../../locale/mt.json":()=>o(()=>import("../chunks/mt.2ada0ebb.js"),[],import.meta.url),"../../locale/my.json":()=>o(()=>import("../chunks/my.a0020531.js"),[],import.meta.url),"../../locale/ne.json":()=>o(()=>import("../chunks/ne.ef2c0c44.js"),[],import.meta.url),"../../locale/nl.json":()=>o(()=>import("../chunks/nl.7cbe2b4a.js"),[],import.meta.url),"../../locale/no.json":()=>o(()=>import("../chunks/no.983a2d2e.js"),[],import.meta.url),"../../locale/nso.json":()=>o(()=>import("../chunks/nso.971affe2.js"),[],import.meta.url),"../../locale/ny.json":()=>o(()=>import("../chunks/ny.3a0f093e.js"),[],import.meta.url),"../../locale/om.json":()=>o(()=>import("../chunks/om.842ef8d0.js"),[],import.meta.url),"../../locale/or.json":()=>o(()=>import("../chunks/or.f1440a10.js"),[],import.meta.url),"../../locale/pa.json":()=>o(()=>import("../chunks/pa.25b8ef25.js"),[],import.meta.url),"../../locale/pl.json":()=>o(()=>import("../chunks/pl.f408add6.js"),[],import.meta.url),"../../locale/ps.json":()=>o(()=>import("../chunks/ps.8a32e7b2.js"),[],import.meta.url),"../../locale/pt.json":()=>o(()=>import("../chunks/pt.8e53a830.js"),[],import.meta.url),"../../locale/qu.json":()=>o(()=>import("../chunks/qu.1292635d.js"),[],import.meta.url),"../../locale/ro.json":()=>o(()=>import("../chunks/ro.268dcfae.js"),[],import.meta.url),"../../locale/ru.json":()=>o(()=>import("../chunks/ru.527bcc32.js"),[],import.meta.url),"../../locale/rw.json":()=>o(()=>import("../chunks/rw.cbc78344.js"),[],import.meta.url),"../../locale/sa.json":()=>o(()=>import("../chunks/sa.1df255a0.js"),[],import.meta.url),"../../locale/sd.json":()=>o(()=>import("../chunks/sd.ff034e7a.js"),[],import.meta.url),"../../locale/si.json":()=>o(()=>import("../chunks/si.c4325a5a.js"),[],import.meta.url),"../../locale/sk.json":()=>o(()=>import("../chunks/sk.6d685d11.js"),[],import.meta.url),"../../locale/sl.json":()=>o(()=>import("../chunks/sl.9035c53e.js"),[],import.meta.url),"../../locale/sm.json":()=>o(()=>import("../chunks/sm.3102d5a8.js"),[],import.meta.url),"../../locale/sn.json":()=>o(()=>import("../chunks/sn.336d6d64.js"),[],import.meta.url),"../../locale/so.json":()=>o(()=>import("../chunks/so.001db200.js"),[],import.meta.url),"../../locale/sq.json":()=>o(()=>import("../chunks/sq.20464746.js"),[],import.meta.url),"../../locale/sr.json":()=>o(()=>import("../chunks/sr.63db1132.js"),[],import.meta.url),"../../locale/st.json":()=>o(()=>import("../chunks/st.b237935c.js"),[],import.meta.url),"../../locale/su.json":()=>o(()=>import("../chunks/su.0f199278.js"),[],import.meta.url),"../../locale/sv.json":()=>o(()=>import("../chunks/sv.9a8cd708.js"),[],import.meta.url),"../../locale/sw.json":()=>o(()=>import("../chunks/sw.7f80af41.js"),[],import.meta.url),"../../locale/ta.json":()=>o(()=>import("../chunks/ta.be439b61.js"),[],import.meta.url),"../../locale/te.json":()=>o(()=>import("../chunks/te.d166a091.js"),[],import.meta.url),"../../locale/tg.json":()=>o(()=>import("../chunks/tg.5f1694eb.js"),[],import.meta.url),"../../locale/th.json":()=>o(()=>import("../chunks/th.38ecf962.js"),[],import.meta.url),"../../locale/ti.json":()=>o(()=>import("../chunks/ti.d31d0cbd.js"),[],import.meta.url),"../../locale/tk.json":()=>o(()=>import("../chunks/tk.75640295.js"),[],import.meta.url),"../../locale/tl.json":()=>o(()=>import("../chunks/tl.173c8db2.js"),[],import.meta.url),"../../locale/tr.json":()=>o(()=>import("../chunks/tr.bd46ca2e.js"),[],import.meta.url),"../../locale/ts.json":()=>o(()=>import("../chunks/ts.945d1f95.js"),[],import.meta.url),"../../locale/tt.json":()=>o(()=>import("../chunks/tt.75f4c872.js"),[],import.meta.url),"../../locale/ug.json":()=>o(()=>import("../chunks/ug.4afcd6dd.js"),[],import.meta.url),"../../locale/uk.json":()=>o(()=>import("../chunks/uk.238388cc.js"),[],import.meta.url),"../../locale/ur.json":()=>o(()=>import("../chunks/ur.c8e1078b.js"),[],import.meta.url),"../../locale/uz.json":()=>o(()=>import("../chunks/uz.64d46f3d.js"),[],import.meta.url),"../../locale/vi.json":()=>o(()=>import("../chunks/vi.dc1219b5.js"),[],import.meta.url),"../../locale/xh.json":()=>o(()=>import("../chunks/xh.86e952e4.js"),[],import.meta.url),"../../locale/yi.json":()=>o(()=>import("../chunks/yi.770d5f6a.js"),[],import.meta.url),"../../locale/yo.json":()=>o(()=>import("../chunks/yo.9118a9d0.js"),[],import.meta.url),"../../locale/zh-CN.json":()=>o(()=>import("../chunks/zh-CN.2dce8354.js"),[],import.meta.url),"../../locale/zh-TW.json":()=>o(()=>import("../chunks/zh-TW.38fa812d.js"),[],import.meta.url),"../../locale/zh.json":()=>o(()=>import("../chunks/zh.2dce8354.js"),[],import.meta.url),"../../locale/zu.json":()=>o(()=>import("../chunks/zu.e19fd1a2.js"),[],import.meta.url)}),`../../locale/${r}.json`));const Fe=r=>({p:r&0}),Ht=r=>({p:tt});function Ge(r){let t,e,a="💚 support unspent.cash 💚",l,i;return{c(){t=T("div"),e=T("button"),e.textContent=a,this.h()},l(u){t=I(u,"DIV",{class:!0});var s=P(t);e=I(s,"BUTTON",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-11qo2h2"&&(e.textContent=a),s.forEach(g),this.h()},h(){d(e,"class","svelte-1wk4mcz"),d(t,"class","donate svelte-1wk4mcz")},m(u,s){w(u,t,s),E(t,e),l||(i=X(e,"click",function(){St(r[4])&&r[4].apply(this,arguments)}),l=!0)},p(u,s){r=u},d(u){u&&g(t),l=!1,i()}}}function Ke(r){let t,e,a,l,i,u,s,_,n,c,m,p,j=`₿∙ϕ:
			<a target="_blank" href="https://unspent.app/documentation" class="svelte-1wk4mcz">docs</a> <a target="_blank" href="https://unspent.app/earn" class="svelte-1wk4mcz">earn</a> <a target="_blank" href="https://unspent.app/create" class="svelte-1wk4mcz">adv</a> |
			<a target="_blank" href="https://t.me/unspent_cash" class="svelte-1wk4mcz">telegram</a>`,f,v,h,A,R,b,C;function z(L){r[1](L)}let M={};tt!==void 0&&(M.currentPage=tt),e=new Be({props:M}),Xt.push(()=>se(e,"currentPage",z)),i=new $e({});const G=r[0].default,D=Yt(G,r,r[3],Ht);return c=new ce({props:{text:"bitcoincash:qz7xjt4xcpdu2gl75vrvkpwzfpjhy9hnm55gwzyvj4",$$slots:{default:[Ge,({copy:L})=>({4:L}),({copy:L})=>L?16:0]},$$scope:{ctx:r}}}),c.$on("copy",r[2]),{c(){t=T("div"),Z(e.$$.fragment),l=y(),Z(i.$$.fragment),u=y(),s=T("main"),D&&D.c(),_=y(),n=T("footer"),Z(c.$$.fragment),m=y(),p=T("p"),p.innerHTML=j,f=y(),v=T("br"),h=T("br"),A=y(),R=T("br"),b=T("br"),this.h()},l(L){t=I(L,"DIV",{class:!0});var V=P(t);x(e.$$.fragment,V),l=k(V),x(i.$$.fragment,V),u=k(V),s=I(V,"MAIN",{class:!0});var U=P(s);D&&D.l(U),U.forEach(g),_=k(V),n=I(V,"FOOTER",{class:!0});var O=P(n);x(c.$$.fragment,O),m=k(O),p=I(O,"P",{"data-svelte-h":!0}),q(p)!=="svelte-mee8y6"&&(p.innerHTML=j),f=k(O),v=I(O,"BR",{}),h=I(O,"BR",{}),A=k(O),R=I(O,"BR",{}),b=I(O,"BR",{}),O.forEach(g),V.forEach(g),this.h()},h(){d(s,"class","svelte-1wk4mcz"),d(n,"class","svelte-1wk4mcz"),d(t,"class","app svelte-1wk4mcz")},m(L,V){w(L,t,V),J(e,t,null),E(t,l),J(i,t,null),E(t,u),E(t,s),D&&D.m(s,null),E(t,_),E(t,n),J(c,n,null),E(n,m),E(n,p),E(n,f),E(n,v),E(n,h),E(n,A),E(n,R),E(n,b),C=!0},p(L,[V]){const U={};!a&&V&0&&(a=!0,U.currentPage=tt,xt(()=>a=!1)),e.$set(U),D&&D.p&&(!C||V&8)&&te(D,G,L,L[3],C?re(G,L[3],V,Fe):ee(L[3]),Ht);const O={};V&24&&(O.$$scope={dirty:V,ctx:L}),c.$set(O)},i(L){C||(N(e.$$.fragment,L),N(i.$$.fragment,L),N(D,L),N(c.$$.fragment,L),C=!0)},o(L){B(e.$$.fragment,L),B(i.$$.fragment,L),B(D,L),B(c.$$.fragment,L),C=!1},d(L){L&&g(t),Q(e),Q(i),D&&D.d(L),Q(c)}}}let tt;{let r=_e();ne({fallbackLocale:"en",initialLocale:r})}function We(r,t,e){let{$$slots:a={},$$scope:l}=t;function i(s){tt=s}const u=()=>st.push("bitcoincash:qz7xjt4xcpdu2gl75vrvkpwzfpjhy9hnm55gwzyvj4 📋💚🗸 ");return r.$$set=s=>{"$$scope"in s&&e(3,l=s.$$scope)},[a,i,u,l]}class _r extends ut{constructor(t){super(),mt(this,t,We,Ke,nt,{})}}export{_r as component};
//# sourceMappingURL=0.9ccaee60.js.map
