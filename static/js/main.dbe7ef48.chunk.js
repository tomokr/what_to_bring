(this.webpackJsonpshopping_list=this.webpackJsonpshopping_list||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(18),r=c.n(i),j=(c(26),c(27),c(28),c(7)),a=c(0);var l=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{className:"active",to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/listPage",children:"list"})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/about",children:"About"})})]})})})},b=c(9),o=c(13),h=["listName","listId","onClick","className"],O=function(e){var t=e.listName,c=e.listId,n=e.onClick,s=e.className,i=(Object(o.a)(e,h),"/list/"+c+"/"+t);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j.b,{to:i,onClick:n,className:s,children:t}),Object(a.jsx)("br",{})]})};var d=function(){var e=Object(n.useState)("default"),t=Object(b.a)(e,2)[1],c=function(e){t(e.currentTarget.className)};return Object(a.jsx)(a.Fragment,{children:["list1","list2","list3"].map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(O,{listName:e,listId:t+1,onClick:c,className:e})})}))})},u=c(21),x=c(2),m=["onClick","className"],p=function(e){var t=e.onClick,c=e.className;Object(o.a)(e,m);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{href:"#",onClick:t,className:c,children:"Fav"}),Object(a.jsx)("br",{})]})},g=function(e){Object.assign({},e);var t=Object(x.f)().listName,c=Object(x.f)().listId,s=Object(n.useState)(""),i=Object(b.a)(s,2),r=i[0],j=i[1],l=Object(n.useState)(),o=Object(b.a)(l,2),h=o[0],O=o[1],d=Object(n.useState)(!1),m=Object(b.a)(d,2),g=m[0],f=m[1],v=Object(n.useState)([]),k=Object(b.a)(v,2),N=k[0],C=k[1];return Object(n.useEffect)((function(){fetch("https://glacial-castle-81771.herokuapp.com/items/"+c).then((function(e){return e.json()})).then((function(e){f(!0),C(e)}),(function(e){f(!0),O(e)}))}),[]),h?Object(a.jsxs)("div",{children:["Error: ",h?h.message:"something happens",")"]}):g?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)(p,{}),Object(a.jsx)("div",{className:"ShoppingListMain",children:Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:"",name:r};""!==t.name&&C((function(e){return[].concat(Object(u.a)(e),[t])})),j("")},children:[Object(a.jsx)("input",{value:r,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Add"})]})})}),Object(a.jsx)("div",{children:Object(a.jsx)("ul",{style:{listStyleType:"none"},children:N.length>0&&N.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",id:e.id},t),e.name]},"label"+t)},t)}))})}),Object(a.jsx)("button",{onClick:function(){C([])},children:"Remove All"})]}):Object(a.jsx)("div",{children:"Loading..."})};var f=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"About"}),"This page is created by ",Object(a.jsx)("a",{href:"https://github.com/tomokr",children:"@tomokr"}),". ",Object(a.jsx)("br",{}),"The frontend repo: ",Object(a.jsx)("a",{href:"https://github.com/tomokr/what_to_bring",children:"here"}),".",Object(a.jsx)("br",{}),"The backend repo: ",Object(a.jsx)("a",{href:"https://github.com/tomokr/what_to_bring_backend",children:"here"}),", also deployed at ",Object(a.jsx)("a",{href:"https://glacial-castle-81771.herokuapp.com/",children:"Heroku"}),".",Object(a.jsx)("br",{})]})};var v=function(){return Object(a.jsx)(j.a,{basename:"/",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l,{}),Object(a.jsx)("h1",{className:"title",children:"What to bring - list"}),Object(a.jsx)("h2",{children:"What's this?"}),'This is the "social-packing-list (checklist)" service.',Object(a.jsx)("br",{}),"Currently under developping.",Object(a.jsx)("br",{}),"Please see ",Object(a.jsx)(j.b,{to:"/about",children:"about"})," page who is working for this site.",Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:"/about",children:Object(a.jsx)(f,{})}),Object(a.jsx)(x.a,{path:"/listpage",children:Object(a.jsx)(d,{})}),Object(a.jsx)(x.a,{path:"/list/:listId",component:g})]}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://tomokr.github.io/what_to_bring/",children:"https://tomokr.github.io/what_to_bring/"})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),k()}},[[35,1,2]]]);
//# sourceMappingURL=main.dbe7ef48.chunk.js.map