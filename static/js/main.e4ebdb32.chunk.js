(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),r=s(6),i=s.n(r),u=(s(13),s(2)),l=s.n(u),o=s(3),j=s(4),d="https://5fca3e863c1c220016441fcc.mockapi.io/api/v1";function p(){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(15),s(16),s(17);function h(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(l.a.mark((function e(t){var s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/users/").concat(t,"/posts"));case 2:return s=e.sent,e.next=5,s.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=s(7),f=s.n(x);s(18);function m(e){var t=e.post,s=e.setDisplayedPost,a=e.postId,r=Object(n.useCallback)((function(){return s(t)}));return Object(c.jsxs)("li",{className:"post",children:[Object(c.jsx)("p",{className:"post__content",children:t.content}),Object(c.jsx)("button",{className:f()("post__show-details-button",{"post__show-details-button--active":t.id===a}),type:"button",onClick:r,children:"Show details"})]})}s(19);function _(e){var t=e.userId,s=e.setDisplayedPost,a=e.postId,r=Object(n.useState)([]),i=Object(j.a)(r,2),u=i[0],d=i[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:s=e.sent,d(s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(c.jsx)("div",{className:"user-posts",children:u.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"User Posts"}),Object(c.jsx)("ol",{className:"user-posts__list",children:u.map((function(e){return Object(c.jsx)(m,{post:e,setDisplayedPost:s,postId:a},e.id)}))})]}):Object(c.jsx)("h2",{children:"User has no posts"})})}s(20);function v(e){var t=e.displayedPost;return Object(c.jsxs)("div",{className:"displayed-post",children:[Object(c.jsx)("h2",{className:"displayed-post__title",children:"Post details"}),Object(c.jsx)("img",{className:"displayed-post__iamge",src:t.image,alt:"Dispayed post"}),Object(c.jsx)("p",{className:"displayed-post__content",children:t.content})]})}function N(e){var t=e.user,s=e.userDetailsId,a=e.setUserDetailsId,r=Object(n.useState)({}),i=Object(j.a)(r,2),u=i[0],l=i[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"user",children:Object(c.jsx)("li",{className:"user__item",children:s!==t.id?Object(c.jsx)("div",{className:"user__preview",children:Object(c.jsx)("button",{className:"user__details-button",type:"button",onClick:function(){return a(t.id)},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:"user__preview-avatar",src:t.avatar,alt:"User avatar"}),Object(c.jsx)("p",{className:"user__preview-name",children:t.name})]})})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"user__details",children:[Object(c.jsx)("img",{className:"user__avatar",src:t.avatar,alt:"User avatar"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"user__details-name",children:"Name: "}),t.name]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"user__details-role",children:"Role: "}),t.role]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"user__details-city",children:"City: "}),t.city]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"user__details-phone",children:"Phone: "}),t.phone]})]}),Object(c.jsx)(_,{userId:Number(t.id),setDisplayedPost:l,postId:u.id})]})})},t.id),u.userId===s&&Object(c.jsx)(v,{displayedPost:u})]})}s(21);function y(e){var t=e.users,s=Object(n.useState)(0),a=Object(j.a)(s,2),r=a[0],i=a[1];return Object(c.jsxs)("div",{className:"users",children:[Object(c.jsx)("h1",{className:"users__title",children:"Users List"}),Object(c.jsx)("ul",{className:"users-list",children:t.map((function(e){return Object(c.jsx)(N,{user:e,userDetailsId:r,setUserDetailsId:i},e.id)}))})]})}function w(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{children:Object(c.jsx)(y,{users:s})})}i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e4ebdb32.chunk.js.map