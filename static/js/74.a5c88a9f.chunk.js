"use strict";(self.webpackChunkmessenger=self.webpackChunkmessenger||[]).push([[74],{759:function(e,n,t){t.d(n,{a:function(){return a}});t(791);var r=t(184),a=function(){return(0,r.jsxs)("div",{className:"spinner",children:[(0,r.jsx)("div",{className:"part"}),(0,r.jsx)("div",{className:"part"}),(0,r.jsx)("div",{className:"part"})]})}},74:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(439),a=t(791),s=t(87),c=t(689),i=t(184),o=function(e){var n=e.handleOnChange;return(0,i.jsxs)("div",{className:"input-container",children:[(0,i.jsx)("input",{type:"text",id:"name",placeholder:" ",onChange:n}),(0,i.jsx)("label",{htmlFor:"name",children:"Name"}),(0,i.jsx)("div",{className:"underline"})]})},u=t(759),l=t(84),f=function(e,n){var t=JSON.parse(localStorage.getItem("contact")||"[]").filter((function(n){return n.API!==e}));n(t),localStorage.setItem("contact",JSON.stringify(t))},d=function(){var e=Math.floor(10*Math.random());return e>7?"#00FF00":e<7?"#333333":void 0},p=function(){var e=JSON.parse(localStorage.getItem("contact")||"[]"),n=(0,a.useState)(e||[]),t=(0,r.Z)(n,2),p=t[0],h=t[1];(0,a.useEffect)((function(){(0,l.r)()}),[]);var v=function(e){var n=e.currentTarget.id;f(n,h)};return(0,i.jsx)("div",{className:"backdrop",children:(0,i.jsxs)("div",{className:"main",children:[(0,i.jsx)("header",{className:"header",children:"Messenger"}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"sidebar",children:[(0,i.jsx)(o,{handleOnChange:function(e){var n=e.currentTarget.value.toLowerCase(),t=JSON.parse(localStorage.getItem("contact")||"[]").filter((function(e){return e.API.toLowerCase().includes(n)}));h(t)}}),p.map((function(e){var n=e.API;return(0,i.jsxs)(s.rU,{to:"".concat(n),className:"contact",children:[(0,i.jsx)("span",{className:"name",children:n}),(0,i.jsx)("span",{className:"status",style:{color:d()},children:"Online"}),(0,i.jsx)("button",{className:"btn_item",id:n,onClick:v,children:"X"})]},n)}))]}),(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(u.a,{}),children:(0,i.jsx)(c.j3,{})})]})]})})}},84:function(e,n,t){t.d(n,{O:function(){return o},r:function(){return i}});var r=t(165),a=t(861),s=t(243),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat("https://api.publicapis.org/entries"));case 2:return n=e.sent,t=n.data,a=t.entries.slice(10,26),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:n=e.sent,0===JSON.parse(localStorage.getItem("contact")||"[]").length&&localStorage.setItem("contact",JSON.stringify(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0),e.next=4,c();case 4:s=e.sent,i=s.filter((function(e){return e.API===n})),a(i),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,t(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(n,t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=74.a5c88a9f.chunk.js.map