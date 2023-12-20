import{s as pe,e as Y,i as T,d as i,z as Ae,f as h,g as _,h as y,w as F,j as m,y as p,E as te,B as $e,Q as Oe,a as S,c as A,r as U,l as N,m as j,n as Z,R as Ue,k as qe,S as Be,F as Ve}from"../chunks/scheduler.02eebc4a.js";import{S as he,i as _e,a as I,g as ne,t as O,c as ae,b as oe,d as ce,m as ie,e as ue}from"../chunks/index.4a314fc0.js";import{s as ze,a as Fe,b as xe,c as Ge,l as Ie,m as Qe}from"../chunks/BroadcastAction.svelte_svelte_type_style_lang.62e9de06.js";import{w as Ne}from"../chunks/wallet.a6e4e482.js";import{l as Xe}from"../chunks/lock_clock.7dae73f4.js";import{$ as Je}from"../chunks/runtime.esm.0321e7b4.js";import{t as W}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.c30a1758.js";import{C as je}from"../chunks/CopyToClipboard.059a8859.js";import"../chunks/singletons.d54a2a27.js";import{b as Ke,d as We,g as Ye,R as Ze,s as et,P as tt,c as st}from"../chunks/Record.0f7a6a2f.js";import{p as lt}from"../chunks/stores.f3030cda.js";import{r as Re}from"../chunks/store.1f539acc.js";const rt=!1,nt=!0;async function at({url:o}){let e=o.searchParams.get("q")||void 0,t=o.searchParams.get("addr")||void 0;return{q:e,addr:t}}const Ot=Object.freeze(Object.defineProperty({__proto__:null,load:at,prerender:nt,ssr:rt},Symbol.toStringTag,{value:"Module"})),ot=""+new URL("../assets/arrow_right.af7624c4.svg",import.meta.url).href,ct=""+new URL("../assets/announce.fca45ce5.svg",import.meta.url).href;function Me(o){let e,t;return e=new je({props:{text:o[1],$$slots:{default:[it,({copy:s})=>({4:s}),({copy:s})=>s?16:0]},$$scope:{ctx:o}}}),e.$on("copy",o[2]),{c(){oe(e.$$.fragment)},l(s){ce(e.$$.fragment,s)},m(s,l){ie(e,s,l),t=!0},p(s,l){const r={};l&2&&(r.text=s[1]),l&48&&(r.$$scope={dirty:l,ctx:s}),e.$set(r)},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){ue(e,s)}}}function it(o){let e,t,s=`<img src="${ze}" alt="share"/>`,l,r;return{c(){e=h("div"),t=h("button"),t.innerHTML=s,this.h()},l(c){e=_(c,"DIV",{class:!0});var n=y(e);t=_(n,"BUTTON",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-o8rp4l"&&(t.innerHTML=s),n.forEach(i),this.h()},h(){m(t,"class","hitMe svelte-95tolh"),m(e,"class","action")},m(c,n){T(c,e,n),p(e,t),l||(r=te(t,"click",function(){$e(o[4])&&o[4].apply(this,arguments)}),l=!0)},p(c,n){o=c},d(c){c&&i(e),l=!1,r()}}}function ut(o){let e,t,s=o[0]&&Me(o);return{c(){s&&s.c(),e=Y()},l(l){s&&s.l(l),e=Y()},m(l,r){s&&s.m(l,r),T(l,e,r),t=!0},p(l,[r]){l[0]?s?(s.p(l,r),r&1&&I(s,1)):(s=Me(l),s.c(),I(s,1),s.m(e.parentNode,e)):s&&(ne(),O(s,1,1,()=>{s=null}),ae())},i(l){t||(I(s),t=!0)},o(l){O(s),t=!1},d(l){l&&i(e),s&&s.d(l)}}}function ft(o,e,t){let s;Ae(o,lt,n=>t(3,s=n));let{lockingBytecode:l}=e,r;if(l){let n=decodeURI(Ke(We(l)));s.url.searchParams.set("q",n),r="https://"+s.url.host+"/s?"+s.url.searchParams.toString()}const c=()=>W.push("link copied");return o.$$set=n=>{"lockingBytecode"in n&&t(0,l=n.lockingBytecode)},[l,r,c]}class dt extends he{constructor(e){super(),_e(this,e,ft,ut,pe,{lockingBytecode:0})}}function pt(o){let e,t,s=`<img src="${ct}" alt="announce"/>`,l,r,c,n,a,u=!o[2]&&Ce(),b=o[3]&&De(o);return{c(){e=h("div"),t=h("button"),t.innerHTML=s,l=S(),u&&u.c(),r=S(),b&&b.c(),c=Y(),this.h()},l(f){e=_(f,"DIV",{});var v=y(e);t=_(v,"BUTTON",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-xthcbf"&&(t.innerHTML=s),v.forEach(i),l=A(f),u&&u.l(f),r=A(f),b&&b.l(f),c=Y(),this.h()},h(){m(t,"class","hitMe svelte-kwnyj0")},m(f,v){T(f,e,v),p(e,t),T(f,l,v),u&&u.m(f,v),T(f,r,v),b&&b.m(f,v),T(f,c,v),n||(a=te(t,"click",o[4]),n=!0)},p(f,v){f[2]?u&&(u.d(1),u=null):u||(u=Ce(),u.c(),u.m(r.parentNode,r)),f[3]?b?b.p(f,v):(b=De(f),b.c(),b.m(c.parentNode,c)):b&&(b.d(1),b=null)},i:U,o:U,d(f){f&&(i(e),i(l),i(r),i(c)),u&&u.d(f),b&&b.d(f),n=!1,a()}}}function ht(o){let e,t,s;return t=new dt({props:{lockingBytecode:o[0]}}),{c(){e=h("div"),oe(t.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var r=y(e);ce(t.$$.fragment,r),r.forEach(i),this.h()},h(){m(e,"class","action")},m(l,r){T(l,e,r),ie(t,e,null),s=!0},p(l,r){const c={};r&1&&(c.lockingBytecode=l[0]),t.$set(c)},i(l){s||(I(t.$$.fragment,l),s=!0)},o(l){O(t.$$.fragment,l),s=!1},d(l){l&&i(e),ue(t)}}}function _t(o){let e,t='<button disabled=""><progress id="progress-bar" aria-label="Content loading…" class="svelte-kwnyj0"></progress></button>';return{c(){e=h("div"),e.innerHTML=t,this.h()},l(s){e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1qoxalt"&&(e.innerHTML=t),this.h()},h(){m(e,"class","action")},m(s,l){T(s,e,l)},p:U,i:U,o:U,d(s){s&&i(e)}}}function Ce(o){let e;return{c(){e=h("progress"),this.h()},l(t){e=_(t,"PROGRESS",{id:!0,"aria-label":!0,class:!0}),y(e).forEach(i),this.h()},h(){m(e,"id","progress-bar"),m(e,"aria-label","Content loading…"),m(e,"class","svelte-kwnyj0")},m(t,s){T(t,e,s)},d(t){t&&i(e)}}}function De(o){let e,t;return{c(){e=h("pre"),t=N(o[3])},l(s){e=_(s,"PRE",{});var l=y(e);t=j(l,o[3]),l.forEach(i)},m(s,l){T(s,e,l),p(e,t)},p(s,l){l&8&&Z(t,s[3])},d(s){s&&i(e)}}}function mt(o){let e,t,s,l;const r=[_t,ht,pt],c=[];function n(a,u){return a[1]==null?0:a[1]==!0?1:2}return e=n(o),t=c[e]=r[e](o),{c(){t.c(),s=Y()},l(a){t.l(a),s=Y()},m(a,u){c[e].m(a,u),T(a,s,u),l=!0},p(a,[u]){let b=e;e=n(a),e===b?c[e].p(a,u):(ne(),O(c[b],1,1,()=>{c[b]=null}),ae(),t=c[e],t?t.p(a,u):(t=c[e]=r[e](a),t.c()),I(t,1),t.m(s.parentNode,s))},i(a){l||(I(t),l=!0)},o(a){O(t),l=!1},d(a){a&&i(s),c[e].d(a)}}}function bt(o,e,t){let{opReturnHex:s}=e,{lockingBytecode:l}=e,r="",c,n="",a,u=!0,b=!1,f="";Oe(async()=>{s!==r&&(r=s,t(2,u=!0),b=!1,t(3,f=""),n="",await $())});function v(){t(2,u=!1),a=setInterval(()=>{},100)}function w(){t(2,u=!0),clearTimeout(a),t(1,c=!0)}const $=async()=>{if(s.length>0){let d=s.length>60?s.slice(0,60):s,E=await Ye("https://demo.chaingraph.cash/v1/graphql",d);E=E.filter(R=>R==s),t(1,c=E.length>0),console.log("is published: ",c)}},k=async()=>{try{v(),b=!1;let d={network:"mainnet",version:2};n=await new Ze(void 0,void 0,d).broadcast(s),t(1,c=!0),b=!0,t(3,f=""),w()}catch(d){t(3,f=d),w()}};return o.$$set=d=>{"opReturnHex"in d&&t(5,s=d.opReturnHex),"lockingBytecode"in d&&t(0,l=d.lockingBytecode)},[l,c,u,f,k,s]}class vt extends he{constructor(e){super(),_e(this,e,bt,mt,pe,{opReturnHex:5,lockingBytecode:0})}}function gt(o){let e;return{c(){e=h("td"),this.h()},l(t){e=_(t,"TD",{colspan:!0,class:!0}),y(e).forEach(i),this.h()},h(){m(e,"colspan","4"),m(e,"class","svelte-ph5yes")},m(t,s){T(t,e,s)},p:U,d(t){t&&i(e)}}}function kt(o){let e,t="",s,l,r,c=o[0].toLocaleString()+"",n,a,u,b,f,v=(Number(o[0])/1e8).toLocaleString(void 0,{minimumSignificantDigits:6})+"",w,$;return{c(){e=h("td"),e.innerHTML=t,s=S(),l=h("td"),r=h("b"),n=N(c),a=N(" sats "),u=h("br"),b=N(`
					(`),f=h("i"),w=N(v),$=N(" BCH)"),this.h()},l(k){e=_(k,"TD",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1555otm"&&(e.innerHTML=t),s=A(k),l=_(k,"TD",{colspan:!0,class:!0});var d=y(l);r=_(d,"B",{});var E=y(r);n=j(E,c),E.forEach(i),a=j(d," sats "),u=_(d,"BR",{}),b=j(d,`
					(`),f=_(d,"I",{});var R=y(f);w=j(R,v),R.forEach(i),$=j(d," BCH)"),d.forEach(i),this.h()},h(){m(e,"class","svelte-ph5yes"),m(l,"colspan","3"),m(l,"class","svelte-ph5yes")},m(k,d){T(k,e,d),T(k,s,d),T(k,l,d),p(l,r),p(r,n),p(l,a),p(l,u),p(l,b),p(l,f),p(f,w),p(l,$)},p(k,d){d&1&&c!==(c=k[0].toLocaleString()+"")&&Z(n,c),d&1&&v!==(v=(Number(k[0])/1e8).toLocaleString(void 0,{minimumSignificantDigits:6})+"")&&Z(w,v)},d(k){k&&(i(e),i(s),i(l))}}}function yt(o){let e,t=o[5]("create")+"",s;return{c(){e=h("td"),s=N(t),this.h()},l(l){e=_(l,"TD",{colspan:!0,class:!0});var r=y(e);s=j(r,t),r.forEach(i),this.h()},h(){m(e,"colspan","4"),m(e,"class","svelte-ph5yes")},m(l,r){T(l,e,r),p(e,s)},p(l,r){r&32&&t!==(t=l[5]("create")+"")&&Z(s,t)},i:U,o:U,d(l){l&&i(e)}}}function Tt(o){let e,t=`<p class="svelte-ph5yes"><img src="${Xe}" alt="lock_clock"/><img src="${Qe}" alt="month"/></p>`,s,l,r,c;return r=new je({props:{text:o[2].getAddress(),$$slots:{default:[Et,({copy:n})=>({16:n}),({copy:n})=>n?65536:0]},$$scope:{ctx:o}}}),r.$on("copy",o[9]),{c(){e=h("td"),e.innerHTML=t,s=S(),l=h("td"),oe(r.$$.fragment),this.h()},l(n){e=_(n,"TD",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1o0vwqp"&&(e.innerHTML=t),s=A(n),l=_(n,"TD",{colspan:!0,class:!0});var a=y(l);ce(r.$$.fragment,a),a.forEach(i),this.h()},h(){m(e,"class","svelte-ph5yes"),m(l,"colspan","3"),m(l,"class","svelte-ph5yes")},m(n,a){T(n,e,a),T(n,s,a),T(n,l,a),ie(r,l,null),c=!0},p(n,a){const u={};a&4&&(u.text=n[2].getAddress()),a&196612&&(u.$$scope={dirty:a,ctx:n}),r.$set(u)},i(n){c||(I(r.$$.fragment,n),c=!0)},o(n){O(r.$$.fragment,n),c=!1},d(n){n&&(i(e),i(s),i(l)),ue(r)}}}function Et(o){let e,t,s=o[2].getAddress()+"",l,r,c;return{c(){e=h("div"),t=h("button"),l=N(s),this.h()},l(n){e=_(n,"DIV",{class:!0});var a=y(e);t=_(a,"BUTTON",{});var u=y(t);l=j(u,s),u.forEach(i),a.forEach(i),this.h()},h(){m(e,"class","action")},m(n,a){T(n,e,a),p(e,t),p(t,l),r||(c=te(t,"click",function(){$e(o[16])&&o[16].apply(this,arguments)}),r=!0)},p(n,a){o=n,a&4&&s!==(s=o[2].getAddress()+"")&&Z(l,s)},d(n){n&&i(e),r=!1,c()}}}function Pe(o){let e,t,s='<p class="svelte-ph5yes">1 m; 4383 blocks</p>',l,r,c='<p class="svelte-ph5yes"><b>1/96</b></p>',n,a,u='<p class="svelte-ph5yes"><b>95/96</b></p>',b,f,v,w,$=new Intl.NumberFormat().format(1500)+"",k,d,E,R,J=`<td class="svelte-ph5yes"></td> <td class="svelte-ph5yes"><p class="svelte-ph5yes"><img src="${Fe}" alt="to"/></p></td> <td class="svelte-ph5yes"><p class="svelte-ph5yes"><img src="${xe}" alt="back"/></p></td> <td class="svelte-ph5yes"><p class="svelte-ph5yes"><img src="${Ge}" alt="step"/></p></td>`;return{c(){e=h("tr"),t=h("td"),t.innerHTML=s,l=S(),r=h("td"),r.innerHTML=c,n=S(),a=h("td"),a.innerHTML=u,b=S(),f=h("td"),v=h("p"),w=h("b"),k=N($),d=N(" sat"),E=S(),R=h("tr"),R.innerHTML=J,this.h()},l(L){e=_(L,"TR",{});var H=y(e);t=_(H,"TD",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-10pdzxv"&&(t.innerHTML=s),l=A(H),r=_(H,"TD",{style:!0,class:!0,"data-svelte-h":!0}),F(r)!=="svelte-1lsxiuc"&&(r.innerHTML=c),n=A(H),a=_(H,"TD",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-1nurm3p"&&(a.innerHTML=u),b=A(H),f=_(H,"TD",{class:!0});var C=y(f);v=_(C,"P",{class:!0});var D=y(v);w=_(D,"B",{});var Q=y(w);k=j(Q,$),d=j(Q," sat"),Q.forEach(i),D.forEach(i),C.forEach(i),H.forEach(i),E=A(L),R=_(L,"TR",{"data-svelte-h":!0}),F(R)!=="svelte-17jd5xn"&&(R.innerHTML=J),this.h()},h(){m(t,"class","svelte-ph5yes"),qe(r,"max-width","40px"),m(r,"class","svelte-ph5yes"),m(a,"class","svelte-ph5yes"),m(v,"class","svelte-ph5yes"),m(f,"class","svelte-ph5yes")},m(L,H){T(L,e,H),p(e,t),p(e,l),p(e,r),p(e,n),p(e,a),p(e,b),p(e,f),p(f,v),p(v,w),p(w,k),p(w,d),T(L,E,H),T(L,R,H)},p:U,d(L){L&&(i(e),i(E),i(R))}}}function Se(o){let e,t=`<img src="${Ie}" alt="lock"/><img src="${Ne}" alt="wallet"/>`;return{c(){e=h("p"),e.innerHTML=t,this.h()},l(s){e=_(s,"P",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1qw8kvj"&&(e.innerHTML=t),this.h()},h(){m(e,"class","svelte-ph5yes")},m(s,l){T(s,e,l)},d(s){s&&i(e)}}}function wt(o){let e,t=`<img src="${Ie}" alt="lock"/><img src="${Ne}" alt="wallet"/><img src="${ot}" alt="arrow_right"/>`;return{c(){e=h("p"),e.innerHTML=t,this.h()},l(s){e=_(s,"P",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1ctkcxi"&&(e.innerHTML=t),this.h()},h(){m(e,"class","svelte-ph5yes")},m(s,l){T(s,e,l)},p:U,i:U,o:U,d(s){s&&i(e)}}}function Ht(o){let e,t,s;return t=new vt({props:{opReturnHex:o[2].toOpReturn(!0),lockingBytecode:o[4]}}),{c(){e=h("p"),oe(t.$$.fragment),this.h()},l(l){e=_(l,"P",{class:!0});var r=y(e);ce(t.$$.fragment,r),r.forEach(i),this.h()},h(){m(e,"class","svelte-ph5yes")},m(l,r){T(l,e,r),ie(t,e,null),s=!0},p(l,r){const c={};r&4&&(c.opReturnHex=l[2].toOpReturn(!0)),r&16&&(c.lockingBytecode=l[4]),t.$set(c)},i(l){s||(I(t.$$.fragment,l),s=!0)},o(l){O(t.$$.fragment,l),s=!1},d(l){l&&i(e),ue(t)}}}function Lt(o){let e,t,s,l,r,c,n,a,u,b,f,v,w,$,k,d=o[5]("receive")+"",E,R,J,L,H,C,D,Q,X,V,ee,fe,me;function be(g,B){return g[0]?kt:gt}let se=be(o),z=se(o);const ve=[Tt,yt],x=[];function ge(g,B){return g[2]?0:1}a=ge(o),u=x[a]=ve[a](o);let M=o[3]&&Pe(),P=o[2]&&Se();const ke=[Ht,wt],G=[];function ye(g,B){return g[2]?0:1}return C=ye(o),D=G[C]=ke[C](o),{c(){e=h("meta"),t=S(),s=h("section"),l=h("table"),r=h("tr"),z.c(),c=S(),n=h("tr"),u.c(),b=S(),M&&M.c(),f=S(),v=h("tr"),w=h("td"),P&&P.c(),$=S(),k=h("td"),E=N(d),R=N(":"),J=S(),L=h("tr"),H=h("td"),D.c(),Q=S(),X=h("td"),V=h("textarea"),this.h()},l(g){const B=Ue("svelte-iflsr",document.head);e=_(B,"META",{name:!0,content:!0}),B.forEach(i),t=A(g),s=_(g,"SECTION",{class:!0});var K=y(s);l=_(K,"TABLE",{class:!0});var q=y(l);r=_(q,"TR",{});var Te=y(r);z.l(Te),Te.forEach(i),c=A(q),n=_(q,"TR",{});var Ee=y(n);u.l(Ee),Ee.forEach(i),b=A(q),M&&M.l(q),f=A(q),v=_(q,"TR",{});var le=y(v);w=_(le,"TD",{class:!0});var we=y(w);P&&P.l(we),we.forEach(i),$=A(le),k=_(le,"TD",{style:!0,colspan:!0,class:!0});var de=y(k);E=j(de,d),R=j(de,":"),de.forEach(i),le.forEach(i),J=A(q),L=_(q,"TR",{});var re=y(L);H=_(re,"TD",{class:!0});var He=y(H);D.l(He),He.forEach(i),Q=A(re),X=_(re,"TD",{colspan:!0,class:!0});var Le=y(X);V=_(Le,"TEXTAREA",{id:!0,placeholder:!0,class:!0}),y(V).forEach(i),Le.forEach(i),re.forEach(i),q.forEach(i),K.forEach(i),this.h()},h(){document.title="∑ ₿ᵪ",m(e,"name","description"),m(e,"content","Unspent Cash"),m(w,"class","svelte-ph5yes"),qe(k,"line-break","auto"),m(k,"colspan","3"),m(k,"class","svelte-ph5yes"),m(H,"class","svelte-ph5yes"),m(V,"id","addr"),m(V,"placeholder","bitcoincash:qz...... ........vj4"),m(V,"class","svelte-ph5yes"),m(X,"colspan","3"),m(X,"class","svelte-ph5yes"),m(l,"class","svelte-ph5yes"),m(s,"class","svelte-ph5yes")},m(g,B){p(document.head,e),T(g,t,B),T(g,s,B),p(s,l),p(l,r),z.m(r,null),p(l,c),p(l,n),x[a].m(n,null),p(l,b),M&&M.m(l,null),p(l,f),p(l,v),p(v,w),P&&P.m(w,null),p(v,$),p(v,k),p(k,E),p(k,R),p(l,J),p(l,L),p(L,H),G[C].m(H,null),p(L,Q),p(L,X),p(X,V),Be(V,o[1]),ee=!0,fe||(me=[te(V,"change",o[10]),te(V,"input",o[11])],fe=!0)},p(g,[B]){se===(se=be(g))&&z?z.p(g,B):(z.d(1),z=se(g),z&&(z.c(),z.m(r,null)));let K=a;a=ge(g),a===K?x[a].p(g,B):(ne(),O(x[K],1,1,()=>{x[K]=null}),ae(),u=x[a],u?u.p(g,B):(u=x[a]=ve[a](g),u.c()),I(u,1),u.m(n,null)),g[3]?M?M.p(g,B):(M=Pe(),M.c(),M.m(l,f)):M&&(M.d(1),M=null),g[2]?P||(P=Se(),P.c(),P.m(w,null)):P&&(P.d(1),P=null),(!ee||B&32)&&d!==(d=g[5]("receive")+"")&&Z(E,d);let q=C;C=ye(g),C===q?G[C].p(g,B):(ne(),O(G[q],1,1,()=>{G[q]=null}),ae(),D=G[C],D?D.p(g,B):(D=G[C]=ke[C](g),D.c()),I(D,1),D.m(H,null)),B&2&&Be(V,g[1])},i(g){ee||(I(u),I(D),ee=!0)},o(g){O(u),O(D),ee=!1},d(g){g&&(i(t),i(s)),i(e),z.d(),x[a].d(),M&&M.d(),P&&P.d(),G[C].d(),fe=!1,Ve(me)}}}function Bt(o,e,t){let s;Ae(o,Je,d=>t(5,s=d));let{data:l}=e,{p:r}=e,c,n,a,u=!1,b;async function f(d=!0){if(n)try{try{t(1,n=await et(n)),t(3,u=!0),d&&Re.set(n)}catch(E){t(3,u=!1),E.message?W.push(E.message,{classes:["warn"]}):W.push(E,{classes:["warn"]})}t(2,a=new tt(4383,n,1500,96)),v(),t(4,b=st(n).bytecode)}catch(E){t(2,a=void 0),E.message?W.push(E.message,{classes:["warn"]}):W.push(E,{classes:["warn"]})}else t(2,a=void 0),t(0,c=void 0)}const v=async()=>{a&&t(0,c=await a.getBalance()),a&&(await a.getUtxos()).length};Re.subscribe(d=>{t(1,n=d),n&&!a&&f()});const w=()=>W.push("📋🗸"),$=()=>f();function k(){n=this.value,t(1,n)}return o.$$set=d=>{"data"in d&&t(7,l=d.data),"p"in d&&t(8,r=d.p)},[c,n,a,u,b,s,f,l,r,w,$,k]}class Ut extends he{constructor(e){super(),_e(this,e,Bt,Lt,pe,{data:7,p:8})}}export{Ut as component,Ot as universal};
//# sourceMappingURL=2.693f3b4d.js.map
