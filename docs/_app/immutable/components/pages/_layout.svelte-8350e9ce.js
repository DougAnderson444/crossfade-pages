import{S as v,i as b,s as w,C,D as F,m as $,h as f,n as c,b as g,E as B,F as H,G as V,k as p,l as h,H as y,I as z,J as A,f as d,t as m,K as S,L as q,M as L,q as O,r as P,w as k,x as I,y as E,z as D,N as G,O as J,P as K,p as M,o as Q,Q as U,a as R,c as W}from"../../chunks/index-d2e69dce.js";import{i as N,n as X}from"../../chunks/stores-388c8dd4.js";function Y(o){let e,t;return{c(){e=C("svg"),t=C("path"),this.h()},l(s){e=F(s,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var l=$(e);t=F(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),$(t).forEach(f),l.forEach(f),this.h()},h(){c(t,"stroke-linecap","round"),c(t,"stroke-linejoin","round"),c(t,"stroke-width","2"),c(t,"d","M12 6v6m0 0v6m0-6h6m-6 0H6"),c(e,"class","w-6 h-6"),c(e,"fill","none"),c(e,"stroke","currentColor"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(s,l){g(s,e,l),B(e,t)},p:H,i:H,o:H,d(s){s&&f(e)}}}class Z extends v{constructor(e){super(),b(this,e,null,Y,w,{})}}function x(o){let e,t;const s=o[1].default,l=V(s,o,o[0],null);return{c(){e=p("div"),l&&l.c(),this.h()},l(n){e=h(n,"DIV",{class:!0});var r=$(e);l&&l.l(r),r.forEach(f),this.h()},h(){c(e,"class","relative m-0")},m(n,r){g(n,e,r),l&&l.m(e,null),t=!0},p(n,[r]){l&&l.p&&(!t||r&1)&&y(l,s,n,n[0],t?A(s,n[0],r,null):z(n[0]),null)},i(n){t||(d(l,n),t=!0)},o(n){m(l,n),t=!1},d(n){n&&f(e),l&&l.d(n)}}}function ee(o,e,t){let{$$slots:s={},$$scope:l}=e;return o.$$set=n=>{"$$scope"in n&&t(0,l=n.$$scope)},[l,s]}class te extends v{constructor(e){super(),b(this,e,ee,x,w,{})}}function se(o){let e,t;const s=o[1].default,l=V(s,o,o[0],null);return{c(){e=p("div"),l&&l.c(),this.h()},l(n){e=h(n,"DIV",{class:!0});var r=$(e);l&&l.l(r),r.forEach(f),this.h()},h(){c(e,"class","flex justify-center items-center rounded-lg border border-neutral-300 shadow-sm p-2 h-full w-fit text-center")},m(n,r){g(n,e,r),l&&l.m(e,null),t=!0},p(n,[r]){l&&l.p&&(!t||r&1)&&y(l,s,n,n[0],t?A(s,n[0],r,null):z(n[0]),null)},i(n){t||(d(l,n),t=!0)},o(n){m(l,n),t=!1},d(n){n&&f(e),l&&l.d(n)}}}function le(o,e,t){let{$$slots:s={},$$scope:l}=e;return o.$$set=n=>{"$$scope"in n&&t(0,l=n.$$scope)},[l,s]}class ne extends v{constructor(e){super(),b(this,e,le,se,w,{})}}function re(o){let e;return{c(){e=O("Add Item")},l(t){e=P(t,"Add Item")},m(t,s){g(t,e,s)},d(t){t&&f(e)}}}function oe(o){let e,t,s,l;const n=o[2].default,r=V(n,o,o[1],null),a=r||re();return{c(){e=p("button"),a&&a.c()},l(i){e=h(i,"BUTTON",{});var u=$(e);a&&a.l(u),u.forEach(f)},m(i,u){g(i,e,u),a&&a.m(e,null),t=!0,s||(l=S(e,"click",o[0]),s=!0)},p(i,[u]){r&&r.p&&(!t||u&2)&&y(r,n,i,i[1],t?A(n,i[1],u,null):z(i[1]),null)},i(i){t||(d(a,i),t=!0)},o(i){m(a,i),t=!1},d(i){i&&f(e),a&&a.d(i),s=!1,l()}}}function ae(o,e,t){let s;q(o,N,a=>t(3,s=a));let{$$slots:l={},$$scope:n}=e;function r(){console.log("add item"),L(N,s=[...s,{children:[],id:X(6)}],s)}return o.$$set=a=>{"$$scope"in a&&t(1,n=a.$$scope)},[r,n,l]}class ie extends v{constructor(e){super(),b(this,e,ae,oe,w,{})}}function ue(o){let e,t;return e=new Z({}),{c(){k(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,l){E(e,s,l),t=!0},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function fe(o){let e,t,s;function l(r){o[1](r)}let n={$$slots:{default:[ue]},$$scope:{ctx:o}};return o[0]!==void 0&&(n.items=o[0]),e=new ie({props:n}),G.push(()=>J(e,"items",l)),{c(){k(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,a){E(e,r,a),s=!0},p(r,a){const i={};a&4&&(i.$$scope={dirty:a,ctx:r}),!t&&a&1&&(t=!0,i.items=r[0],K(()=>t=!1)),e.$set(i)},i(r){s||(d(e.$$.fragment,r),s=!0)},o(r){m(e.$$.fragment,r),s=!1},d(r){D(e,r)}}}function ce(o){let e,t;return e=new te({props:{$$slots:{default:[fe]},$$scope:{ctx:o}}}),{c(){k(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,l){E(e,s,l),t=!0},p(s,l){const n={};l&5&&(n.$$scope={dirty:l,ctx:s}),e.$set(n)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function de(o){let e,t,s;return t=new ne({props:{$$slots:{default:[ce]},$$scope:{ctx:o}}}),{c(){e=p("div"),k(t.$$.fragment),this.h()},l(l){e=h(l,"DIV",{class:!0});var n=$(e);I(t.$$.fragment,n),n.forEach(f),this.h()},h(){c(e,"class","absolute bottom-0 right-0 m-1 p-1")},m(l,n){g(l,e,n),E(t,e,null),s=!0},p(l,[n]){const r={};n&5&&(r.$$scope={dirty:n,ctx:l}),t.$set(r)},i(l){s||(d(t.$$.fragment,l),s=!0)},o(l){m(t.$$.fragment,l),s=!1},d(l){l&&f(e),D(t)}}}function me(o,e,t){let{items:s=[]}=e;function l(n){s=n,t(0,s)}return o.$$set=n=>{"items"in n&&t(0,s=n.items)},[s,l]}class $e extends v{constructor(e){super(),b(this,e,me,de,w,{items:0})}}const{window:_e}=U;function pe(o){let e,t,s,l;const n=o[3].default,r=V(n,o,o[2],null);return{c(){e=p("div"),r&&r.c(),this.h()},l(a){e=h(a,"DIV",{class:!0,style:!0});var i=$(e);r&&r.l(i),i.forEach(f),this.h()},h(){c(e,"class","app svelte-13zx0oz"),M(e,"--vh",o[0]+"px"),M(e,"height","calc(var(--vh, 1vh) * 100)")},m(a,i){g(a,e,i),r&&r.m(e,null),t=!0,s||(l=S(_e,"resize",o[1]),s=!0)},p(a,[i]){r&&r.p&&(!t||i&4)&&y(r,n,a,a[2],t?A(n,a[2],i,null):z(a[2]),null),(!t||i&1)&&M(e,"--vh",a[0]+"px")},i(a){t||(d(r,a),t=!0)},o(a){m(r,a),t=!1},d(a){a&&f(e),r&&r.d(a),s=!1,l()}}}function he(o,e,t){let{$$slots:s={},$$scope:l}=e,n;Q(()=>{document.body.style.padding="0",document.body.style.margin="0",r()});function r(){t(0,n=window.innerHeight*.01)}return o.$$set=a=>{"$$scope"in a&&t(2,l=a.$$scope)},[n,r,l,s]}class ge extends v{constructor(e){super(),b(this,e,he,pe,w,{})}}function ve(o){let e,t,s,l,n,r;const a=o[0].default,i=V(a,o,o[1],null);return n=new $e({}),{c(){e=p("main"),t=p("div"),i&&i.c(),s=R(),l=p("div"),k(n.$$.fragment),this.h()},l(u){e=h(u,"MAIN",{class:!0});var _=$(e);t=h(_,"DIV",{class:!0});var j=$(t);i&&i.l(j),j.forEach(f),s=W(_),l=h(_,"DIV",{class:!0});var T=$(l);I(n.$$.fragment,T),T.forEach(f),_.forEach(f),this.h()},h(){c(t,"class","w-full h-full border-2 border-green-500 items-center justify-items-center"),c(l,"class","w-full h-16"),c(e,"class","flex flex-col h-full w-full")},m(u,_){g(u,e,_),B(e,t),i&&i.m(t,null),B(e,s),B(e,l),E(n,l,null),r=!0},p(u,_){i&&i.p&&(!r||_&2)&&y(i,a,u,u[1],r?A(a,u[1],_,null):z(u[1]),null)},i(u){r||(d(i,u),d(n.$$.fragment,u),r=!0)},o(u){m(i,u),m(n.$$.fragment,u),r=!1},d(u){u&&f(e),i&&i.d(u),D(n)}}}function be(o){let e,t;return e=new ge({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),{c(){k(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,l){E(e,s,l),t=!0},p(s,[l]){const n={};l&2&&(n.$$scope={dirty:l,ctx:s}),e.$set(n)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function we(o,e,t){let{$$slots:s={},$$scope:l}=e;return o.$$set=n=>{"$$scope"in n&&t(1,l=n.$$scope)},[s,l]}class Ee extends v{constructor(e){super(),b(this,e,we,be,w,{})}}export{Ee as default};