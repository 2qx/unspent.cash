import{s as ue,f as p,g as b,h as E,d as f,j as S,i as w,r as K,z as _e,Q as he,l as B,m as y,a as H,e as le,c as C,n as R,W as de,k as me,y as _,X as pe,w as oe,E as ce}from"./scheduler.02eebc4a.js";import{e as se}from"./each.84d1d5f3.js";import{S as be,i as ke}from"./index.4a314fc0.js";import{P as ge}from"./Record.2aea415f.js";import{$ as ve}from"./runtime.esm.0321e7b4.js";import{l as we}from"./lock_clock.7dae73f4.js";const fe=""+new URL("../assets/arrow_split.b1074e57.svg",import.meta.url).href;function ie(n,e,l){const r=n.slice();return r[14]=e[l],r}function Ee(n){let e;return{c(){e=p("progress"),this.h()},l(l){e=b(l,"PROGRESS",{id:!0,"aria-label":!0}),E(e).forEach(f),this.h()},h(){S(e,"id","progress-bar"),S(e,"aria-label","Content loading…")},m(l,r){w(l,e,r)},p:K,d(l){l&&f(e)}}}function Be(n){let e;return{c(){e=B("0 sats")},l(l){e=y(l,"0 sats")},m(l,r){w(l,e,r)},p:K,d(l){l&&f(e)}}}function ye(n){let e,l,r,a,t,i=se(n[0]),o=[];for(let s=0;s<i.length;s+=1)o[s]=ne(ie(n,i,s));return{c(){e=B(n[2]),l=H(),r=B(n[3]),a=H();for(let s=0;s<o.length;s+=1)o[s].c();t=le()},l(s){e=y(s,n[2]),l=C(s),r=y(s,n[3]),a=C(s);for(let c=0;c<o.length;c+=1)o[c].l(s);t=le()},m(s,c){w(s,e,c),w(s,l,c),w(s,r,c),w(s,a,c);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(s,c);w(s,t,c)},p(s,c){if(c&4&&R(e,s[2]),c&8&&R(r,s[3]),c&113){i=se(s[0]);let u;for(u=0;u<i.length;u+=1){const L=ie(s,i,u);o[u]?o[u].p(L,c):(o[u]=ne(L),o[u].c(),o[u].m(t.parentNode,t))}for(;u<o.length;u+=1)o[u].d(1);o.length=i.length}},d(s){s&&(f(e),f(l),f(r),f(a),f(t)),de(o,s)}}}function re(n){let e,l,r,a,t,i=n[14].waitBlocks+"",o;return{c(){e=p("img"),a=H(),t=p("b"),o=B(i),this.h()},l(s){e=b(s,"IMG",{src:!0,alt:!0}),a=C(s),t=b(s,"B",{});var c=E(t);o=y(c,i),c.forEach(f),this.h()},h(){pe(e.src,l=we)||S(e,"src",l),S(e,"alt",r=n[5]("ok"))},m(s,c){w(s,e,c),w(s,a,c),w(s,t,c),_(t,o)},p(s,c){c&32&&r!==(r=s[5]("ok"))&&S(e,"alt",r),c&1&&i!==(i=s[14].waitBlocks+"")&&R(o,i)},d(s){s&&(f(e),f(a),f(t))}}}function Se(n){let e,l=`<img src="${fe}"/>`,r,a;function t(){return n[9](n[14])}return{c(){e=p("button"),e.innerHTML=l},l(i){e=b(i,"BUTTON",{"data-svelte-h":!0}),oe(e)!=="svelte-ulnfbr"&&(e.innerHTML=l)},m(i,o){w(i,e,o),r||(a=ce(e,"click",t),r=!0)},p(i,o){n=i},d(i){i&&f(e),r=!1,a()}}}function Te(n){let e,l=`<img src="${fe}"/>`,r,a;function t(){return n[8](n[14])}return{c(){e=p("button"),e.innerHTML=l},l(i){e=b(i,"BUTTON",{"data-svelte-h":!0}),oe(e)!=="svelte-ulnfbr"&&(e.innerHTML=l)},m(i,o){w(i,e,o),r||(a=ce(e,"click",t),r=!0)},p(i,o){n=i},d(i){i&&f(e),r=!1,a()}}}function ae(n){let e,l=n[14].estimateUnlockDate+"",r;return{c(){e=p("p"),r=B(l)},l(a){e=b(a,"P",{});var t=E(e);r=y(t,l),t.forEach(f)},m(a,t){w(a,e,t),_(e,r)},p(a,t){t&1&&l!==(l=a[14].estimateUnlockDate+"")&&R(r,l)},d(a){a&&f(e)}}}function ne(n){let e,l,r,a,t,i,o=n[14].satoshis.toLocaleString()+"",s,c,u,L,N,U=(Number(n[14].satoshis)/1e8).toLocaleString(void 0,{minimumSignificantDigits:6})+"",A,O,P,h,m,G,V,D,I=n[14].txid+"",j,Y,q=n[14].vout+"",z,Z,k=n[4]>0&&n[14].waitBlocks>0&&re(n);function x(d,v){return d[14].waitBlocks<0?Te:Se}let Q=x(n),T=Q(n),g=n[4]>0&&n[14].waitBlocks>0&&ae(n);return{c(){e=p("table"),l=p("tr"),r=p("td"),k&&k.c(),a=H(),t=p("td"),i=p("b"),s=B(o),c=B(" sats "),u=p("br"),L=H(),N=p("i"),A=B(U),O=B(" BCH"),P=H(),h=p("tr"),m=p("td"),T.c(),G=H(),g&&g.c(),V=H(),D=p("td"),j=B(I),Y=B(":"),z=B(q),Z=H(),this.h()},l(d){e=b(d,"TABLE",{class:!0});var v=E(e);l=b(v,"TR",{});var W=E(l);r=b(W,"TD",{class:!0});var ee=E(r);k&&k.l(ee),ee.forEach(f),a=C(W),t=b(W,"TD",{class:!0});var M=E(t);i=b(M,"B",{});var te=E(i);s=y(te,o),te.forEach(f),c=y(M," sats "),u=b(M,"BR",{}),L=C(M),N=b(M,"I",{});var $=E(N);A=y($,U),O=y($," BCH"),$.forEach(f),M.forEach(f),W.forEach(f),P=C(v),h=b(v,"TR",{});var X=E(h);m=b(X,"TD",{class:!0});var F=E(m);T.l(F),G=C(F),g&&g.l(F),F.forEach(f),V=C(X),D=b(X,"TD",{colspan:!0,style:!0,class:!0});var J=E(D);j=y(J,I),Y=y(J,":"),z=y(J,q),J.forEach(f),X.forEach(f),Z=C(v),v.forEach(f),this.h()},h(){S(r,"class","svelte-1lht9d3"),S(t,"class","svelte-1lht9d3"),S(m,"class","svelte-1lht9d3"),S(D,"colspan","3"),me(D,"line-break","anywhere"),S(D,"class","svelte-1lht9d3"),S(e,"class","svelte-1lht9d3")},m(d,v){w(d,e,v),_(e,l),_(l,r),k&&k.m(r,null),_(l,a),_(l,t),_(t,i),_(i,s),_(t,c),_(t,u),_(t,L),_(t,N),_(N,A),_(N,O),_(e,P),_(e,h),_(h,m),T.m(m,null),_(m,G),g&&g.m(m,null),_(h,V),_(h,D),_(D,j),_(D,Y),_(D,z),_(e,Z)},p(d,v){d[4]>0&&d[14].waitBlocks>0?k?k.p(d,v):(k=re(d),k.c(),k.m(r,null)):k&&(k.d(1),k=null),v&1&&o!==(o=d[14].satoshis.toLocaleString()+"")&&R(s,o),v&1&&U!==(U=(Number(d[14].satoshis)/1e8).toLocaleString(void 0,{minimumSignificantDigits:6})+"")&&R(A,U),Q===(Q=x(d))&&T?T.p(d,v):(T.d(1),T=Q(d),T&&(T.c(),T.m(m,G))),d[4]>0&&d[14].waitBlocks>0?g?g.p(d,v):(g=ae(d),g.c(),g.m(m,null)):g&&(g.d(1),g=null),v&1&&I!==(I=d[14].txid+"")&&R(j,I),v&1&&q!==(q=d[14].vout+"")&&R(z,q)},d(d){d&&f(e),k&&k.d(),T.d(),g&&g.d()}}}function Le(n){let e;function l(t,i){return t[0]&&t[0].length>0?ye:!t[1]&&t[0].length==0?Be:Ee}let r=l(n),a=r(n);return{c(){e=p("section"),a.c(),this.h()},l(t){e=b(t,"SECTION",{class:!0});var i=E(e);a.l(i),i.forEach(f),this.h()},h(){S(e,"class","svelte-1lht9d3")},m(t,i){w(t,e,i),a.m(e,null)},p(t,[i]){r===(r=l(t))&&a?a.p(t,i):(a.d(1),a=r(t),a&&(a.c(),a.m(e,null)))},i:K,o:K,d(t){t&&f(e),a.d()}}}function De(n,e,l){let r;_e(n,ve,h=>l(5,r=h));let{receiptAddress:a=""}=e,t=[],i,o=!0,s=!1,c="",u="",L=-1,N=Date.now();he(async()=>{a&&(i||(i=new ge(4383,a,1500,96),i&&await A()))});const U=async h=>{s=!1;try{l(2,c=await i.execute(a,void 0,[h])),s=!0,l(3,u="")}catch(m){l(3,u=m)}},A=async()=>{l(0,t=await i.getUtxos()),l(4,L=await i.provider.getBlockHeight()),l(0,t=t.sort((h,m)=>h.height-m.height)),l(0,t=t.map(h=>{let m=h.height+4383-L;return{...h,estimateUnlockDate:new Date(N+m*6e5).toLocaleString(),waitBlocks:m}})),l(1,o=!1)},O=async h=>U(h),P=async h=>U(h);return n.$$set=h=>{"receiptAddress"in h&&l(7,a=h.receiptAddress)},[t,o,c,u,L,r,U,a,O,P]}class Me extends be{constructor(e){super(),ke(this,e,De,Le,ue,{receiptAddress:7})}}export{Me as U};
//# sourceMappingURL=UtxoSection.77cef671.js.map
