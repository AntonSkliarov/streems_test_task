(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),r=s.n(c),a=s(6),i=s.n(a),u=(s(12),s(2)),j=s.n(u),l=s(3),o=s(4),d="https://5fca3e863c1c220016441fcc.mockapi.io/api/v1";function p(){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(j.a.mark((function e(){var t,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(14),s(15),s(16);function h(e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(j.a.mark((function e(t){var s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/users/").concat(t,"/posts"));case 2:return s=e.sent,e.next=5,s.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(17);function x(e){var t=e.post,s=e.setDisplayedPost;return Object(n.jsxs)("li",{className:"post",children:[Object(n.jsx)("p",{className:"post__content",children:t.content}),Object(n.jsx)("button",{className:"post__show-details-button",type:"button",onClick:function(){return s(t)},children:"Show post details"})]})}s(18);function f(e){var t=e.userId,s=e.setDisplayedPost,r=Object(c.useState)([]),a=Object(o.a)(r,2),i=a[0],u=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:s=e.sent,u(s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(n.jsx)("div",{className:"user-posts",children:i.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"User Posts"}),Object(n.jsx)("ol",{className:"user-posts__list",children:i.map((function(e){return Object(n.jsx)(x,{post:e,setDisplayedPost:s},e.id)}))})]}):Object(n.jsx)("h2",{children:"User has no posts"})})}function m(e){var t=e.displayedPost;return Object(n.jsxs)("div",{className:"displayed-post",children:[Object(n.jsx)("h2",{children:"Post details"}),Object(n.jsx)("img",{src:t.image,alt:"Dispayed post"}),Object(n.jsx)("p",{children:t.content})]})}function v(e){var t=e.user,s=e.userDetailsId,r=e.setUserDetailsId,a=Object(c.useState)({}),i=Object(o.a)(a,2),u=i[0],j=i[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"user",children:Object(n.jsx)("li",{className:"user__item",children:s!==t.id?Object(n.jsx)("div",{className:"user__preview",children:Object(n.jsx)("button",{className:"user__details-button",type:"button",onClick:function(){return r(t.id)},children:Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{className:"user__preview-avatar",src:t.avatar,alt:"User avatar"}),Object(n.jsx)("p",{className:"user__preview-name",children:t.name})]})})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"user__details",children:[Object(n.jsx)("img",{className:"user__avatar",src:t.avatar,alt:"User avatar"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"user__details-name",children:"Name: "}),t.name]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"user__details-role",children:"Role: "}),t.role]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"user__details-city",children:"City: "}),t.city]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"user__details-phone",children:"Phone: "}),t.phone]})]}),Object(n.jsx)(f,{userId:Number(t.id),setDisplayedPost:j})]})})},t.id),u.userId===s&&Object(n.jsx)(m,{displayedPost:u})]})}s(19);function _(e){var t=e.users,s=Object(c.useState)(0),r=Object(o.a)(s,2),a=r[0],i=r[1];return Object(n.jsxs)("div",{className:"users",children:[Object(n.jsx)("h1",{className:"users__title",children:"Users List"}),Object(n.jsx)("ul",{className:"users-list",children:t.map((function(e){return Object(n.jsx)(v,{user:e,userDetailsId:a,setUserDetailsId:i},e.id)}))})]})}function N(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsx)("div",{children:Object(n.jsx)(_,{users:s})})}i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.0e2be0f8.chunk.js.map