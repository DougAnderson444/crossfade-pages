import{L as ne,M as he,N as me,S as B,i as C,s as O,e as F,b as v,f as _,g as ee,t as p,d as te,h as u,C as J,k as b,l as k,m as g,n as c,E as Q,F as K,G as W,O as _e,P as ge,Q as ce,R as T,T as q,I as w,B as P,U as X,D as pe,q as Y,r as Z,w as A,x as S,y as j,z as N,a as R,c as L,p as G,J as $e,V as ve,u as re}from"./index-92548e75.js";import{w as we,b as x}from"./paths-877e2ee1.js";function be(r){const e=r-1;return e*e*e+1}function ke(r){return Math.sin(r*Math.PI/2)}function Ie(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(r);l<t.length;l++)e.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(r,t[l])&&(n[t[l]]=r[t[l]]);return n}function Ee(r,{delay:e=0,duration:n=400,easing:t=me}={}){const l=+getComputedStyle(r).opacity;return{delay:e,duration:n,easing:t,css:s=>`opacity: ${s*l}`}}function Me(r){var{fallback:e}=r,n=Ie(r,["fallback"]);const t=new Map,l=new Map;function s(a,o,f){const{delay:d=0,duration:h=D=>Math.sqrt(D)*30,easing:I=be}=ne(ne({},n),f),M=o.getBoundingClientRect(),y=a.left-M.left,E=a.top-M.top,m=a.width/M.width,$=a.height/M.height,V=Math.sqrt(y*y+E*E),H=getComputedStyle(o),U=H.transform==="none"?"":H.transform,de=+H.opacity;return{delay:d,duration:he(h)?h(V):h,easing:I,css:(D,le)=>`
				opacity: ${D*de};
				transform-origin: top left;
				transform: ${U} translate(${le*y}px,${le*E}px) scale(${D+(1-D)*m}, ${D+(1-D)*$});
			`}}function i(a,o,f){return(d,h)=>(a.set(h.key,{rect:d.getBoundingClientRect()}),()=>{if(o.has(h.key)){const{rect:I}=o.get(h.key);return o.delete(h.key),s(I,d,h)}return a.delete(h.key),e&&e(d,h,f)})}return[i(l,t,!1),i(t,l,!0)]}const ue=450,ye=Me({duration:ue,easing:ke});function se(r){let e,n,t,l,s;const i=r[5].default,a=J(i,r,r[4],null);return{c(){e=b("div"),a&&a.c(),this.h()},l(o){e=k(o,"DIV",{"data-id":!0,class:!0,contenteditable:!0});var f=g(e);a&&a.l(f),f.forEach(u),this.h()},h(){c(e,"data-id",r[0]),c(e,"class",n=""+r[1]+" outline-none select-none"),c(e,"contenteditable",!1)},m(o,f){v(o,e,f),a&&a.m(e,null),s=!0},p(o,f){r=o,a&&a.p&&(!s||f&16)&&Q(a,i,r,r[4],s?W(i,r[4],f,null):K(r[4]),null),(!s||f&1)&&c(e,"data-id",r[0]),(!s||f&2&&n!==(n=""+r[1]+" outline-none select-none"))&&c(e,"class",n)},i(o){s||(_(a,o),_e(()=>{l&&l.end(1),t=ge(e,r[3],{key:r[0]}),t.start()}),s=!0)},o(o){p(a,o),t&&t.invalidate(),l=ce(e,r[2],{key:r[0]}),s=!1},d(o){o&&u(e),a&&a.d(o),o&&l&&l.end()}}}function Be(r){let e,n,t=r[1]&&se(r);return{c(){t&&t.c(),e=F()},l(l){t&&t.l(l),e=F()},m(l,s){t&&t.m(l,s),v(l,e,s),n=!0},p(l,[s]){l[1]?t?(t.p(l,s),s&2&&_(t,1)):(t=se(l),t.c(),_(t,1),t.m(e.parentNode,e)):t&&(ee(),p(t,1,1,()=>{t=null}),te())},i(l){n||(_(t),n=!0)},o(l){p(t),n=!1},d(l){t&&t.d(l),l&&u(e)}}}function Ce(r,e,n){let{$$slots:t={},$$scope:l}=e,{id:s}=e,{styling:i=" "}=e;const[a,o]=ye;return r.$$set=f=>{"id"in f&&n(0,s=f.id),"styling"in f&&n(1,i=f.styling),"$$scope"in f&&n(4,l=f.$$scope)},[s,i,a,o,l,t]}class Oe extends B{constructor(e){super(),C(this,e,Ce,Be,O,{id:0,styling:1})}}const z=we(null);function Ve(r){let e,n;return{c(){e=T("svg"),n=T("path"),this.h()},l(t){e=q(t,"svg",{xmlns:!0,viewBox:!0,fill:!0});var l=g(e);n=q(l,"path",{d:!0}),g(n).forEach(u),l.forEach(u),this.h()},h(){c(n,"d","M344 0h144c13 0 22 11 24 24v144a24 24 0 0 1-41 17l-39-39-87 87c-9 9-25 9-34 0l-32-32c-9-9-9-25 0-34l87-87-39-39a24 24 0 0 1 17-41zM184 496H40c-13 0-24-11-24-24V328a24 24 0 0 1 41-17l39 39 87-87c9-9 25-9 34 0l32 32c9 9 9 25 0 34l-87 87 39 39a24 24 0 0 1-17 41z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox","0 0 512 512"),c(e,"fill","currentColor")},m(t,l){v(t,e,l),w(e,n)},p:P,i:P,o:P,d(t){t&&u(e)}}}class De extends B{constructor(e){super(),C(this,e,null,Ve,O,{})}}function Pe(r){let e,n;return{c(){e=T("svg"),n=T("path"),this.h()},l(t){e=q(t,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var l=g(e);n=q(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(n).forEach(u),l.forEach(u),this.h()},h(){c(n,"stroke-linecap","round"),c(n,"stroke-linejoin","round"),c(n,"stroke-width","2"),c(n,"d","M12 6v6m0 0v6m0-6h6m-6 0H6"),c(e,"class","w-6 h-6"),c(e,"fill","none"),c(e,"stroke","currentColor"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(t,l){v(t,e,l),w(e,n)},p:P,i:P,o:P,d(t){t&&u(e)}}}class Ae extends B{constructor(e){super(),C(this,e,null,Pe,O,{})}}function Se(r){let e,n;const t=r[1].default,l=J(t,r,r[0],null);return{c(){e=b("div"),l&&l.c(),this.h()},l(s){e=k(s,"DIV",{class:!0});var i=g(e);l&&l.l(i),i.forEach(u),this.h()},h(){c(e,"class","relative m-0")},m(s,i){v(s,e,i),l&&l.m(e,null),n=!0},p(s,[i]){l&&l.p&&(!n||i&1)&&Q(l,t,s,s[0],n?W(t,s[0],i,null):K(s[0]),null)},i(s){n||(_(l,s),n=!0)},o(s){p(l,s),n=!1},d(s){s&&u(e),l&&l.d(s)}}}function je(r,e,n){let{$$slots:t={},$$scope:l}=e;return r.$$set=s=>{"$$scope"in s&&n(0,l=s.$$scope)},[l,t]}class Ne extends B{constructor(e){super(),C(this,e,je,Se,O,{})}}function He(r){let e,n;const t=r[1].default,l=J(t,r,r[0],null);return{c(){e=b("div"),l&&l.c(),this.h()},l(s){e=k(s,"DIV",{class:!0});var i=g(e);l&&l.l(i),i.forEach(u),this.h()},h(){c(e,"class","flex justify-center items-center rounded-lg border border-neutral-300 shadow-sm p-2 h-full w-fit text-center")},m(s,i){v(s,e,i),l&&l.m(e,null),n=!0},p(s,[i]){l&&l.p&&(!n||i&1)&&Q(l,t,s,s[0],n?W(t,s[0],i,null):K(s[0]),null)},i(s){n||(_(l,s),n=!0)},o(s){p(l,s),n=!1},d(s){s&&u(e),l&&l.d(s)}}}function Te(r,e,n){let{$$slots:t={},$$scope:l}=e;return r.$$set=s=>{"$$scope"in s&&n(0,l=s.$$scope)},[l,t]}class qe extends B{constructor(e){super(),C(this,e,Te,He,O,{})}}let ze="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Re=(r=21)=>{let e="",n=r;for(;n--;)e+=ze[Math.random()*64|0];return e};function Le(r,e){const n=e||Re(6);z.set({...X(z),...Ue(n),[r]:{...X(z)[r],children:[...X(z)[r].children,{id:n}]}})}function Ue(r){return{[r]:{children:[],color:Fe()}}}function Fe(){let r=Math.floor(Math.random()*256),e=Math.floor(Math.random()*256),n=Math.floor(Math.random()*256);return r=Math.floor(r+(255-r)/2),e=Math.floor(e+(255-e)/2),n=Math.floor(n+(255-n)/2),"#"+((1<<24)+(r<<16)+(e<<8)+n).toString(16).slice(1)}function Ge(r){let e;return{c(){e=Y("Add Item")},l(n){e=Z(n,"Add Item")},m(n,t){v(n,e,t)},d(n){n&&u(e)}}}function Je(r){let e,n,t,l;const s=r[3].default,i=J(s,r,r[2],null),a=i||Ge();return{c(){e=b("button"),a&&a.c()},l(o){e=k(o,"BUTTON",{});var f=g(e);a&&a.l(f),f.forEach(u)},m(o,f){v(o,e,f),a&&a.m(e,null),n=!0,t||(l=pe(e,"click",r[0]),t=!0)},p(o,[f]){i&&i.p&&(!n||f&4)&&Q(i,s,o,o[2],n?W(s,o[2],f,null):K(o[2]),null)},i(o){n||(_(a,o),n=!0)},o(o){p(a,o),n=!1},d(o){o&&u(e),a&&a.d(o),t=!1,l()}}}function Qe(r,e,n){let{$$slots:t={},$$scope:l}=e,{pageId:s}=e;function i(){Le(s)}return r.$$set=a=>{"pageId"in a&&n(1,s=a.pageId),"$$scope"in a&&n(2,l=a.$$scope)},[i,s,l,t]}class Ke extends B{constructor(e){super(),C(this,e,Qe,Je,O,{pageId:1})}}function We(r){let e,n;return e=new Ae({}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){j(e,t,l),n=!0},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Xe(r){let e,n;return e=new Ke({props:{pageId:r[0],$$slots:{default:[We]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){j(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.pageId=t[0]),l&2&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Ye(r){let e,n;return e=new Ne({props:{$$slots:{default:[Xe]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){j(e,t,l),n=!0},p(t,l){const s={};l&3&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Ze(r){let e,n,t;return n=new qe({props:{$$slots:{default:[Ye]},$$scope:{ctx:r}}}),{c(){e=b("div"),A(n.$$.fragment),this.h()},l(l){e=k(l,"DIV",{class:!0});var s=g(e);S(n.$$.fragment,s),s.forEach(u),this.h()},h(){c(e,"class","absolute bottom-0 right-0 m-1 p-1")},m(l,s){v(l,e,s),j(n,e,null),t=!0},p(l,[s]){const i={};s&3&&(i.$$scope={dirty:s,ctx:l}),n.$set(i)},i(l){t||(_(n.$$.fragment,l),t=!0)},o(l){p(n.$$.fragment,l),t=!1},d(l){l&&u(e),N(n)}}}function xe(r,e,n){let{pageId:t}=e;return r.$$set=l=>{"pageId"in l&&n(0,t=l.pageId)},[t]}class et extends B{constructor(e){super(),C(this,e,xe,Ze,O,{pageId:0})}}function oe(r,e,n){const t=r.slice();return t[3]=e[n],t[5]=n,t}function ae(r){let e,n,t,l;return{c(){e=b("a"),n=b("div"),t=T("svg"),l=T("path"),this.h()},l(s){e=k(s,"A",{href:!0,class:!0,contenteditable:!0});var i=g(e);n=k(i,"DIV",{class:!0});var a=g(n);t=q(a,"svg",{xmlns:!0,viewBox:!0,fill:!0,stroke:!0});var o=g(t);l=q(o,"path",{d:!0}),g(l).forEach(u),o.forEach(u),a.forEach(u),i.forEach(u),this.h()},h(){c(l,"d","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"viewBox","0 0 576 512"),c(t,"fill","currentColor"),c(t,"stroke","currentColor"),c(n,"class","h-8 w-8 m-4"),c(e,"href",x+"/"),c(e,"class","select-none cursor-pointer"),c(e,"contenteditable",!1)},m(s,i){v(s,e,i),w(e,n),w(n,t),w(t,l)},p:P,d(s){s&&u(e)}}}function ie(r){let e,n,t=r[2].children,l=[];for(let i=0;i<t.length;i+=1)l[i]=fe(oe(r,t,i));const s=i=>p(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=F()},l(i){for(let a=0;a<l.length;a+=1)l[a].l(i);e=F()},m(i,a){for(let o=0;o<l.length;o+=1)l[o].m(i,a);v(i,e,a),n=!0},p(i,a){if(a&6){t=i[2].children;let o;for(o=0;o<t.length;o+=1){const f=oe(i,t,o);l[o]?(l[o].p(f,a),_(l[o],1)):(l[o]=fe(f),l[o].c(),_(l[o],1),l[o].m(e.parentNode,e))}for(ee(),o=t.length;o<l.length;o+=1)s(o);te()}},i(i){if(!n){for(let a=0;a<t.length;a+=1)_(l[a]);n=!0}},o(i){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)p(l[a]);n=!1},d(i){ve(l,i),i&&u(e)}}}function tt(r){let e,n,t,l,s,i,a,o=r[3].id+"",f,d,h=r[1][r[3].id].children.length?r[1][r[3].id].children.length+" Items":"",I,M,y,E;return l=new De({}),{c(){e=b("div"),n=b("a"),t=b("div"),A(l.$$.fragment),i=R(),a=b("span"),f=Y(o),d=R(),I=Y(h),y=R(),this.h()},l(m){e=k(m,"DIV",{class:!0});var $=g(e);n=k($,"A",{href:!0,class:!0,contenteditable:!0});var V=g(n);t=k(V,"DIV",{class:!0});var H=g(t);S(l.$$.fragment,H),H.forEach(u),V.forEach(u),i=L($),a=k($,"SPAN",{class:!0});var U=g(a);f=Z(U,o),U.forEach(u),d=L($),I=Z($,h),$.forEach(u),y=L(m),this.h()},h(){var m;c(t,"class","float-right top-0 right-0 h-6 w-6 m-1 text-neutral-800/50"),c(n,"href",s=x+"/"+r[3].id),c(n,"class","select-none cursor-pointer"),c(n,"contenteditable",!1),c(a,"class","text-xl text-white/50"),c(e,"class","flex-1 flex flex-col flex-wrap w-28 h-28 m-4 p-2 rounded-lg shadow text-white"),G(e,"background-color",(m=r[1][r[3].id])==null?void 0:m.color)},m(m,$){v(m,e,$),w(e,n),w(n,t),j(l,t,null),w(e,i),w(e,a),w(a,f),w(e,d),w(e,I),v(m,y,$),E=!0},p(m,$){var V;r=m,(!E||$&4&&s!==(s=x+"/"+r[3].id))&&c(n,"href",s),(!E||$&4)&&o!==(o=r[3].id+"")&&re(f,o),(!E||$&6)&&h!==(h=r[1][r[3].id].children.length?r[1][r[3].id].children.length+" Items":"")&&re(I,h),$&6&&G(e,"background-color",(V=r[1][r[3].id])==null?void 0:V.color)},i(m){E||(_(l.$$.fragment,m),M&&M.end(1),E=!0)},o(m){p(l.$$.fragment,m),M=ce(e,Ee,{duration:ue}),E=!1},d(m){m&&u(e),N(l),m&&M&&M.end(),m&&u(y)}}}function fe(r){let e,n;return e=new Oe({props:{id:r[3].id,$$slots:{default:[tt]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){j(e,t,l),n=!0},p(t,l){const s={};l&4&&(s.id=t[3].id),l&70&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function lt(r){let e,n,t,l,s,i,a=r[0]!=="home"&&ae(),o=r[2]&&r[2].children&&r[2].children.length&&ie(r);return s=new et({props:{pageId:r[0]}}),{c(){e=b("div"),a&&a.c(),n=R(),o&&o.c(),t=R(),l=b("div"),A(s.$$.fragment),this.h()},l(f){e=k(f,"DIV",{class:!0});var d=g(e);a&&a.l(d),n=L(d),o&&o.l(d),d.forEach(u),t=L(f),l=k(f,"DIV",{class:!0});var h=g(l);S(s.$$.fragment,h),h.forEach(u),this.h()},h(){var f;c(e,"class","absolute flex flex-row flex-wrap min-w-[24rem] min-h-[24rem] items-start"),G(e,"background-color",(f=r[2])==null?void 0:f.color),c(l,"class","w-full h-16")},m(f,d){v(f,e,d),a&&a.m(e,null),w(e,n),o&&o.m(e,null),v(f,t,d),v(f,l,d),j(s,l,null),i=!0},p(f,[d]){var I;f[0]!=="home"?a?a.p(f,d):(a=ae(),a.c(),a.m(e,n)):a&&(a.d(1),a=null),f[2]&&f[2].children&&f[2].children.length?o?(o.p(f,d),d&4&&_(o,1)):(o=ie(f),o.c(),_(o,1),o.m(e,null)):o&&(ee(),p(o,1,1,()=>{o=null}),te()),d&4&&G(e,"background-color",(I=f[2])==null?void 0:I.color);const h={};d&1&&(h.pageId=f[0]),s.$set(h)},i(f){i||(_(o),_(s.$$.fragment,f),i=!0)},o(f){p(o),p(s.$$.fragment,f),i=!1},d(f){f&&u(e),a&&a.d(),o&&o.d(),f&&u(t),f&&u(l),N(s)}}}function nt(r,e,n){let t;$e(r,z,i=>n(1,t=i));let{pageId:l}=e,s;return r.$$set=i=>{"pageId"in i&&n(0,l=i.pageId)},r.$$.update=()=>{r.$$.dirty&3&&t&&l&&n(2,s=t[l])},[l,t,s]}class ot extends B{constructor(e){super(),C(this,e,nt,lt,O,{pageId:0})}}export{Oe as C,ot as P,Ue as c,z as d};
