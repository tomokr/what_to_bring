(this.webpackJsonpshopping_list=this.webpackJsonpshopping_list||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(18),j=c.n(i),a=(c(26),c(27),c(28),c(0));var l=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"active",href:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/listPage",children:"list"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/about",children:"About"})})]})})})},r=c(8),b=c(12),h=["listName","listId","onClick","className"],o=function(e){var t=e.listName,c=e.listId,n=e.onClick,s=e.className,i=(Object(b.a)(e,h),"/list/"+c+"/"+t);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{href:i,onClick:n,className:s,children:t}),Object(a.jsx)("br",{})]})};var O=function(){var e=Object(n.useState)("default"),t=Object(r.a)(e,2)[1],c=function(e){t(e.currentTarget.className)};return Object(a.jsx)(a.Fragment,{children:["list1","list2","list3"].map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(o,{listName:e,listId:t+1,onClick:c,className:e})})}))})},u=c(21),d=c(2),x=["onClick","className"],m=function(e){var t=e.onClick,c=e.className;Object(b.a)(e,x);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{href:"#",onClick:t,className:c,children:"Fav"}),Object(a.jsx)("br",{})]})},f=function(e){Object.assign({},e);var t=Object(d.f)().listName,c=Object(d.f)().listId,s=Object(n.useState)(""),i=Object(r.a)(s,2),j=i[0],l=i[1],b=Object(n.useState)(),h=Object(r.a)(b,2),o=h[0],O=h[1],x=Object(n.useState)(!1),f=Object(r.a)(x,2),p=f[0],g=f[1],v=Object(n.useState)([]),N=Object(r.a)(v,2),k=N[0],C=N[1];return Object(n.useEffect)((function(){fetch("https://glacial-castle-81771.herokuapp.com/items/"+c).then((function(e){return e.json()})).then((function(e){g(!0),C(e)}),(function(e){g(!0),O(e)}))}),[]),o?Object(a.jsxs)("div",{children:["Error: ",o?o.message:"something happens",")"]}):p?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)(m,{}),Object(a.jsx)("div",{className:"ShoppingListMain",children:Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:"",name:j};""!==t.name&&C((function(e){return[].concat(Object(u.a)(e),[t])})),l("")},children:[Object(a.jsx)("input",{value:j,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Add"})]})})}),Object(a.jsx)("div",{children:Object(a.jsx)("ul",{style:{listStyleType:"none"},children:k.length>0&&k.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",id:e.id},t),e.name]},"label"+t)},t)}))})}),Object(a.jsx)("button",{onClick:function(){C([])},children:"Remove All"})]}):Object(a.jsx)("div",{children:"Loading..."})},p=c(15);var g=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h2",{children:"About"})})};var v=function(){return Object(a.jsx)(p.a,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l,{}),Object(a.jsx)("h1",{className:"title",children:"What to bring - list"}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/about",children:Object(a.jsx)(g,{})}),Object(a.jsx)(d.a,{path:"/listpage",children:Object(a.jsx)(O,{})}),Object(a.jsx)(d.a,{path:"/list/:listId",component:f})]}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/tomokr/shopping_list",children:"https://github.com/tomokr/shopping_list"})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),i(e),j(e)}))};j.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),N()}},[[35,1,2]]]);
//# sourceMappingURL=main.7e512a09.chunk.js.map