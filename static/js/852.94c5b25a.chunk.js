"use strict";(self.webpackChunkmessenger=self.webpackChunkmessenger||[]).push([[852],{852:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(439),a=n(791),s=n(689),c=n(759),u=n(433),i=n(184),o=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],c=(0,a.useState)([]),o=(0,r.Z)(c,2),l=o[0],p=o[1],f=(0,a.useState)(!1),v=(0,r.Z)(f,2),d=v[0],h=v[1];return(0,i.jsxs)("div",{className:"text-container",children:[d&&(0,i.jsx)("div",{className:"text-error",children:"Please, enter text !"}),(0,i.jsx)("div",{className:"chat",children:l.map((function(e,t){return(0,i.jsx)("div",{className:"message-wrap",children:(0,i.jsx)("p",{children:e.text})},t)}))}),(0,i.jsxs)("form",{className:"chat-input",onSubmit:function(e){if(e.preventDefault(),!n)return h(!0),void setTimeout((function(){h(!1)}),2e3);var t={text:n};p((function(e){return[].concat((0,u.Z)(e),[t])})),s("")},children:[(0,i.jsx)("input",{type:"text",placeholder:"Enter a message",value:n,onChange:function(e){s(e.currentTarget.value)}}),(0,i.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},l=n(84),p=function(){var e=(0,s.UO)().chatId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),u=n[0],p=n[1],f=(0,a.useState)(!1),v=(0,r.Z)(f,2),d=v[0],h=v[1];return(0,a.useEffect)((function(){var t=e||"";(0,l.OL)(t,h,p)}),[e]),(0,i.jsxs)("div",{className:"item",children:[d?(0,i.jsx)(c.a,{}):u.map((function(e){var t=e.API,n=e.Description;return(0,i.jsxs)("div",{className:"name-contact",children:[(0,i.jsx)("h1",{className:"title",children:t}),(0,i.jsx)("p",{className:"description",children:n})]},t)})),(0,i.jsx)(o,{})]})}},759:function(e,t,n){n.d(t,{a:function(){return a}});n(791);var r=n(184),a=function(){return(0,r.jsxs)("div",{className:"spinner",children:[(0,r.jsx)("div",{className:"part"}),(0,r.jsx)("div",{className:"part"}),(0,r.jsx)("div",{className:"part"})]})}},84:function(e,t,n){n.d(t,{Cz:function(){return c},OL:function(){return i},rQ:function(){return u}});var r=n(165),a=n(861),s=n(243),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.publicapis.org/entries");case 3:return t=e.sent,n=t.data,a=n.entries.slice(10,26),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(JSON.parse(localStorage.getItem("contact")||"[]").length>0)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,c();case 6:t=e.sent,localStorage.setItem("contact",JSON.stringify(t)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var s,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,c();case 4:s=e.sent,u=s.filter((function(e){return e.API===t})),a(u),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,n(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t,n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=852.94c5b25a.chunk.js.map