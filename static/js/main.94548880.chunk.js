(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),r=s.n(c),a=s(6),i=s.n(a),u=(s(12),s(2)),o=s.n(u),j=s(3),l=s(4),p="https://5fca3e863c1c220016441fcc.mockapi.io/api/v1";function d(){return b.apply(this,arguments)}function b(){return(b=Object(j.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(14),s(15),s(16);function h(e){return O.apply(this,arguments)}function O(){return(O=Object(j.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/users/").concat(t,"/posts"));case 2:return s=e.sent,e.next=5,s.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(17);function f(e){var t=e.post,s=e.setDisplayedPost;return Object(n.jsxs)("li",{className:"post",children:[Object(n.jsx)("p",{children:t.content}),Object(n.jsx)("button",{className:"post__show-details-button",type:"button",onClick:function(){return s(t)},children:"Show post details"})]})}s(18);function x(e){var t=e.userId,s=e.setDisplayedPost,r=Object(c.useState)([]),a=Object(l.a)(r,2),i=a[0],u=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:s=e.sent,u(s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(n.jsx)("div",{className:"user-posts",children:i.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"User Posts"}),Object(n.jsx)("ol",{className:"user-posts__list",children:i.map((function(e){return Object(n.jsx)(f,{post:e,setDisplayedPost:s},e.id)}))})]}):Object(n.jsx)("h2",{children:"User has no posts"})})}function m(e){var t=e.user,s=e.userDetailsId,r=e.setUserDetailsId,a=Object(c.useState)({}),i=Object(l.a)(a,2),u=i[0],o=i[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"user",children:Object(n.jsx)("li",{className:"user__item",children:s!==t.id?Object(n.jsx)("div",{className:"user__preview",children:Object(n.jsx)("button",{className:"user__details-button",type:"button",onClick:function(){return r(t.id)},children:Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:"user__preview-avatar",src:t.avatar,alt:"User avatar"}),Object(n.jsx)("p",{children:"Name: ".concat(t.name)})]})})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"user__details",children:[Object(n.jsx)("img",{className:"user__avatar",src:t.avatar,alt:"User avatar"}),Object(n.jsx)("p",{children:"Name: ".concat(t.name)}),Object(n.jsx)("p",{children:"Role: ".concat(t.role)}),Object(n.jsx)("p",{children:"City: ".concat(t.city)}),Object(n.jsx)("p",{children:"Phone: ".concat(t.phone)})]}),Object(n.jsx)(x,{userId:Number(t.id),setDisplayedPost:o})]})})},t.id),u.userId===s&&Object(n.jsxs)("div",{className:"user__displayed-post",children:[Object(n.jsx)("h2",{children:"Post details"}),Object(n.jsx)("img",{src:u.image,alt:"Dispayed post"}),Object(n.jsx)("p",{children:u.content})]})]})}s(19);function v(e){var t=e.users,s=Object(c.useState)(0),r=Object(l.a)(s,2),a=r[0],i=r[1];return Object(n.jsx)("ul",{className:"users-list",children:t.map((function(e){return Object(n.jsx)(m,{user:e,userDetailsId:a,setUserDetailsId:i},e.id)}))})}function y(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsx)("div",{children:Object(n.jsx)(v,{users:s})})}i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.94548880.chunk.js.map