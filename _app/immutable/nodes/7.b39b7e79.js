import{s as Me,f,a as M,R as Se,g as u,d as n,c as S,J as z,h as C,j as T,k as Ae,z as p,i as m,C as Be,l as U,m as q,n as Y,r as oe,A as $e,w as De}from"../chunks/scheduler.31c5c991.js";import{S as Re,i as Pe,b as fe,d as ue,m as he,t as Q,c as Ue,a as W,e as _e,g as qe}from"../chunks/index.8d8dd004.js";import{p as je}from"../chunks/stores.e3feb74d.js";import{j as Oe}from"../chunks/singletons.e2eb27c5.js";import{s as Ie,a as Ne,m as ze,w as Ve}from"../chunks/share.8f3639cd.js";import{l as Xe}from"../chunks/lock_clock.5471ed23.js";import{t as Je,c as Fe}from"../chunks/table.4fa95357.js";import"../chunks/runtime.esm.b4d15a0b.js";import{t as K,C as Ge}from"../chunks/CopyToClipboard.136192ac.js";import{i as Ke,f as Qe,l as We,s as Ye,P as Ze,c as xe,b as et,d as tt}from"../chunks/Record.6654a730.js";import{C as st}from"../chunks/ContractChartSection.c2c0ca5a.js";import{U as lt}from"../chunks/UtxoSection.22b8cf28.js";const at=Oe("goto"),nt=!1,rt=!0;async function it({url:r}){let e=r.searchParams.get("q")||void 0,s=r.searchParams.get("addr")||void 0;return{q:e,addr:s}}const wt=Object.freeze(Object.defineProperty({__proto__:null,load:it,prerender:rt,ssr:nt},Symbol.toStringTag,{value:"Module"}));function ct(r){let e;return{c(){e=f("td"),this.h()},l(s){e=u(s,"TD",{colspan:!0,class:!0}),C(e).forEach(n),this.h()},h(){T(e,"colspan","4"),T(e,"class","svelte-1dh7vdh")},m(s,t){m(s,e,t)},p:oe,d(s){s&&n(e)}}}function ot(r){let e,s,t,i,o=r[0].toLocaleString()+"",v,a,c,b,y,g=(Number(r[0])/1e8).toLocaleString(void 0,{minimumSignificantDigits:6})+"",k,P,d=r[1]>0&&Ee(r);return{c(){e=f("td"),d&&d.c(),s=M(),t=f("td"),i=f("b"),v=U(o),a=U(" sats "),c=f("br"),b=U(`
					(`),y=f("i"),k=U(g),P=U(" BCH)"),this.h()},l(h){e=u(h,"TD",{style:!0,class:!0});var H=C(e);d&&d.l(H),H.forEach(n),s=S(h),t=u(h,"TD",{colspan:!0,class:!0});var L=C(t);i=u(L,"B",{});var D=C(i);v=q(D,o),D.forEach(n),a=q(L," sats "),c=u(L,"BR",{}),b=q(L,`
					(`),y=u(L,"I",{});var R=C(y);k=q(R,g),R.forEach(n),P=q(L," BCH)"),L.forEach(n),this.h()},h(){Ae(e,"text-align","center"),T(e,"class","svelte-1dh7vdh"),T(t,"colspan","3"),T(t,"class","svelte-1dh7vdh")},m(h,H){m(h,e,H),d&&d.m(e,null),m(h,s,H),m(h,t,H),p(t,i),p(i,v),p(t,a),p(t,c),p(t,b),p(t,y),p(y,k),p(t,P)},p(h,H){h[1]>0?d?d.p(h,H):(d=Ee(h),d.c(),d.m(e,null)):d&&(d.d(1),d=null),H&1&&o!==(o=h[0].toLocaleString()+"")&&Y(v,o),H&1&&g!==(g=(Number(h[0])/1e8).toLocaleString(void 0,{minimumSignificantDigits:6})+"")&&Y(k,g)},d(h){h&&(n(e),n(s),n(t)),d&&d.d()}}}function Ee(r){let e,s,t;return{c(){e=f("b"),s=U(r[1]),t=U(" UTXO(s)")},l(i){e=u(i,"B",{});var o=C(e);s=q(o,r[1]),t=q(o," UTXO(s)"),o.forEach(n)},m(i,o){m(i,e,o),p(e,s),p(e,t)},p(i,o){o&2&&Y(s,i[1])},d(i){i&&n(e)}}}function dt(r){let e,s="error";return{c(){e=f("td"),e.textContent=s,this.h()},l(t){e=u(t,"TD",{colspan:!0,class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1trhrut"&&(e.textContent=s),this.h()},h(){T(e,"colspan","4"),T(e,"class","svelte-1dh7vdh")},m(t,i){m(t,e,i)},p:oe,i:oe,o:oe,d(t){t&&n(e)}}}function ft(r){let e,s=`<p class="svelte-1dh7vdh"><img src="${Xe}" alt="lock_clock"/></p>`,t,i,o,v;return o=new Ge({props:{text:r[3].getAddress(),$$slots:{default:[ut,({copy:a})=>({11:a}),({copy:a})=>a?2048:0]},$$scope:{ctx:r}}}),o.$on("copy",r[7]),{c(){e=f("td"),e.innerHTML=s,t=M(),i=f("td"),fe(o.$$.fragment),this.h()},l(a){e=u(a,"TD",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-dwf5t0"&&(e.innerHTML=s),t=S(a),i=u(a,"TD",{colspan:!0,class:!0});var c=C(i);ue(o.$$.fragment,c),c.forEach(n),this.h()},h(){T(e,"class","svelte-1dh7vdh"),T(i,"colspan","3"),T(i,"class","svelte-1dh7vdh")},m(a,c){m(a,e,c),m(a,t,c),m(a,i,c),he(o,i,null),v=!0},p(a,c){const b={};c&8&&(b.text=a[3].getAddress()),c&6152&&(b.$$scope={dirty:c,ctx:a}),o.$set(b)},i(a){v||(W(o.$$.fragment,a),v=!0)},o(a){Q(o.$$.fragment,a),v=!1},d(a){a&&(n(e),n(t),n(i)),_e(o)}}}function ut(r){let e,s,t=r[3].getAddress()+"",i,o,v;return{c(){e=f("div"),s=f("button"),i=U(t),this.h()},l(a){e=u(a,"DIV",{class:!0});var c=C(e);s=u(c,"BUTTON",{});var b=C(s);i=q(b,t),b.forEach(n),c.forEach(n),this.h()},h(){T(e,"class","action")},m(a,c){m(a,e,c),p(e,s),p(s,i),o||(v=$e(s,"click",function(){De(r[11])&&r[11].apply(this,arguments)}),o=!0)},p(a,c){r=a,c&8&&t!==(t=r[3].getAddress()+"")&&Y(i,t)},d(a){a&&n(e),o=!1,v()}}}function He(r){let e,s=`<td class="svelte-1dh7vdh"><p class="svelte-1dh7vdh"><img src="${Ne}" alt="to"/></p></td> <td class="svelte-1dh7vdh"><p class="svelte-1dh7vdh"><img src="${ze}" alt="month"/></p></td> <td colspan="2" class="svelte-1dh7vdh"><p class="svelte-1dh7vdh"><b>1.04% month</b></p> <p class="svelte-1dh7vdh"><b>11.8% year</b></p></td>`;return{c(){e=f("tr"),e.innerHTML=s},l(t){e=u(t,"TR",{"data-svelte-h":!0}),z(e)!=="svelte-14109v9"&&(e.innerHTML=s)},m(t,i){m(t,e,i)},d(t){t&&n(e)}}}function Le(r){let e,s=`<img src="${Ve}" alt="wallet"/>`;return{c(){e=f("p"),e.innerHTML=s,this.h()},l(t){e=u(t,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-1js286s"&&(e.innerHTML=s),this.h()},h(){T(e,"class","svelte-1dh7vdh")},m(t,i){m(t,e,i)},d(t){t&&n(e)}}}function we(r){let e;return{c(){e=U(r[2])},l(s){e=q(s,r[2])},m(s,t){m(s,e,t)},p(s,t){t&4&&Y(e,s[2])},d(s){s&&n(e)}}}function ht(r){let e,s,t,i=`<img src="${Ie}" alt="share"/>`,o,v,a,c,b,y,g,k,P,d,h,H='<td class="svelte-1dh7vdh"></td> <td style="line-break:auto;" colspan="3" class="svelte-1dh7vdh"></td>',L,D,R,de,j,V,Z,x,ee,X,me=`<img src="${Je}" alt="table"/>`,te,O,se,le,ae,J,pe=`<img src="${Fe}" alt="chart"/>`,ne,I,re;function ve(l,_){return l[0]?ot:ct}let ie=ve(r),$=ie(r);const be=[ft,dt],N=[];function ge(l,_){return l[3]?0:1}g=ge(r),k=N[g]=be[g](r);let w=r[4]&&He(),A=r[2]&&Le(),E=r[2]&&we(r);return O=new lt({props:{receiptAddress:r[2]}}),I=new st({props:{receiptAddress:r[2]}}),{c(){e=f("meta"),s=M(),t=f("h4"),t.innerHTML=i,o=M(),v=f("section"),a=f("table"),c=f("tr"),$.c(),b=M(),y=f("tr"),k.c(),P=M(),w&&w.c(),d=M(),h=f("tr"),h.innerHTML=H,L=M(),D=f("tr"),R=f("td"),A&&A.c(),de=M(),j=f("td"),V=f("p"),E&&E.c(),Z=M(),x=f("hr"),ee=M(),X=f("h4"),X.innerHTML=me,te=M(),fe(O.$$.fragment),se=M(),le=f("hr"),ae=M(),J=f("h4"),J.innerHTML=pe,ne=M(),fe(I.$$.fragment),this.h()},l(l){const _=Se("svelte-iflsr",document.head);e=u(_,"META",{name:!0,content:!0}),_.forEach(n),s=S(l),t=u(l,"H4",{"data-svelte-h":!0}),z(t)!=="svelte-16mtc41"&&(t.innerHTML=i),o=S(l),v=u(l,"SECTION",{class:!0});var F=C(v);a=u(F,"TABLE",{class:!0});var B=C(a);c=u(B,"TR",{});var G=C(c);$.l(G),G.forEach(n),b=S(B),y=u(B,"TR",{});var Te=C(y);k.l(Te),Te.forEach(n),P=S(B),w&&w.l(B),d=S(B),h=u(B,"TR",{"data-svelte-h":!0}),z(h)!=="svelte-1cank22"&&(h.innerHTML=H),L=S(B),D=u(B,"TR",{});var ce=C(D);R=u(ce,"TD",{class:!0});var ke=C(R);A&&A.l(ke),ke.forEach(n),de=S(ce),j=u(ce,"TD",{style:!0,colspan:!0,class:!0});var ye=C(j);V=u(ye,"P",{class:!0});var Ce=C(V);E&&E.l(Ce),Ce.forEach(n),ye.forEach(n),ce.forEach(n),B.forEach(n),F.forEach(n),Z=S(l),x=u(l,"HR",{}),ee=S(l),X=u(l,"H4",{"data-svelte-h":!0}),z(X)!=="svelte-14jk4jp"&&(X.innerHTML=me),te=S(l),ue(O.$$.fragment,l),se=S(l),le=u(l,"HR",{}),ae=S(l),J=u(l,"H4",{"data-svelte-h":!0}),z(J)!=="svelte-1q7no15"&&(J.innerHTML=pe),ne=S(l),ue(I.$$.fragment,l),this.h()},h(){document.title="∑ ₿ᵪ",T(e,"name","description"),T(e,"content","Unspent Cash"),T(R,"class","svelte-1dh7vdh"),T(V,"class","svelte-1dh7vdh"),Ae(j,"line-break","anywhere"),T(j,"colspan","3"),T(j,"class","svelte-1dh7vdh"),T(a,"class","svelte-1dh7vdh"),T(v,"class","svelte-1dh7vdh")},m(l,_){p(document.head,e),m(l,s,_),m(l,t,_),m(l,o,_),m(l,v,_),p(v,a),p(a,c),$.m(c,null),p(a,b),p(a,y),N[g].m(y,null),p(a,P),w&&w.m(a,null),p(a,d),p(a,h),p(a,L),p(a,D),p(D,R),A&&A.m(R,null),p(D,de),p(D,j),p(j,V),E&&E.m(V,null),m(l,Z,_),m(l,x,_),m(l,ee,_),m(l,X,_),m(l,te,_),he(O,l,_),m(l,se,_),m(l,le,_),m(l,ae,_),m(l,J,_),m(l,ne,_),he(I,l,_),re=!0},p(l,[_]){ie===(ie=ve(l))&&$?$.p(l,_):($.d(1),$=ie(l),$&&($.c(),$.m(c,null)));let F=g;g=ge(l),g===F?N[g].p(l,_):(qe(),Q(N[F],1,1,()=>{N[F]=null}),Ue(),k=N[g],k?k.p(l,_):(k=N[g]=be[g](l),k.c()),W(k,1),k.m(y,null)),l[4]?w||(w=He(),w.c(),w.m(a,d)):w&&(w.d(1),w=null),l[2]?A||(A=Le(),A.c(),A.m(R,null)):A&&(A.d(1),A=null),l[2]?E?E.p(l,_):(E=we(l),E.c(),E.m(V,null)):E&&(E.d(1),E=null);const B={};_&4&&(B.receiptAddress=l[2]),O.$set(B);const G={};_&4&&(G.receiptAddress=l[2]),I.$set(G)},i(l){re||(W(k),W(O.$$.fragment,l),W(I.$$.fragment,l),re=!0)},o(l){Q(k),Q(O.$$.fragment,l),Q(I.$$.fragment,l),re=!1},d(l){l&&(n(s),n(t),n(o),n(v),n(Z),n(x),n(ee),n(X),n(te),n(se),n(le),n(ae),n(J),n(ne)),n(e),$.d(),N[g].d(),w&&w.d(),A&&A.d(),E&&E.d(),_e(O,l),_e(I,l)}}}function _t(r,e,s){let t;Be(r,je,d=>s(8,t=d));let{data:i}=e,{p:o}=e,v,a,c,b,y=!1;if(i.q&&!c){let d=Ke(Qe(encodeURI(i.q)));c=We(d),y=!0,g(!1)}async function g(d=!0){if(c)try{try{s(2,c=await Ye(c)),s(4,y=!0)}catch(L){s(4,y=!1),L.message?K.push(L.message,{classes:["warn"]}):K.push(L,{classes:["warn"]})}s(3,b=new Ze(4383,c,1500,96)),k();let h=xe(c).bytecode,H=decodeURI(et(tt(h)));t.url.searchParams.set("q",H),at(`?${t.url.searchParams.toString()}`)}catch(h){s(3,b=void 0),h.message?K.push(h.message,{classes:["warn"]}):K.push(h,{classes:["warn"]})}else s(3,b=void 0),s(0,v=void 0)}const k=async()=>{b&&s(0,v=await b.getBalance()),b&&s(1,a=(await b.getUtxos()).length)},P=()=>K.push("📋🗸");return r.$$set=d=>{"data"in d&&s(5,i=d.data),"p"in d&&s(6,o=d.p)},[v,a,c,b,y,i,o,P]}class At extends Re{constructor(e){super(),Pe(this,e,_t,ht,Me,{data:5,p:6})}}export{At as component,wt as universal};
//# sourceMappingURL=7.b39b7e79.js.map
