(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return v});var a=t(12),i=t(4),r=t(5),l=t(7),o=t(6),c=t(8),s=t(0),m=t.n(s),d=t(10),u=t(13),p=t(14),h=t(28),f=t(19),g=t.n(f);function b(){var e=Object(a.a)(["\n  .pagecontainer {\n    height: 100%;\n    width: 100%;\n  }\n  li {\n    list-style: none;\n    font-size: 1.3rem !important;\n    line-height: 2rem;\n    font-weight: bold;\n    color: var(--mainGrey) !important;\n  }\n  .active {\n    color: var(--lightGreen) !important;\n  }\n  li:hover {\n    color: var(--lightGreen);\n    cursor: pointer;\n  }\n  .modalcontainer {\n    background: var(--mainWhite) !important;\n  }\n  /* .modal-img,\n  .modal-list {\n    background: var(--mainWhite) !important;\n  } */\n  .listbutton {\n    position: relative;\n  }\n\n  .input-newList {\n    border: none;\n    background: transparent;\n  }\n\n  .btn.addBtn {\n    border-radius: 100%;\n    width: 2rem;\n    height: 2rem;\n    color: var(--mainWhite);\n    z-index: 3;\n    background: var(--lightGreen) !important;\n    border: none;\n  }\n  span {\n    font-size: 1rem;\n    top: -10%;\n    bottom: -10%;\n    left: 0;\n    right: 0;\n    position: absolute;\n  }\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* #modal {\n    background: var(--mainWhite);\n  } */\n"]);return b=function(){return e},e}var v=function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return m.a.createElement(p.a,null,function(e){var n,t,a=e.modalOpen,i=e.closeModal,r=e.detailedproducts,l=e.currentUser,o=e.addtoWishlist,c=e.createNewList,s=e.handleNewList,u=e.currentWishlist,p=l.wishlists;return r&&(n=r.image),p&&p.length>0&&(t=p.map(function(e){return e.listname?m.a.createElement("li",{onClick:function(e){return o(e)},key:e.listname,className:g()("lists",{active:u&&u.listname===e.listname})},e.listname):""})),a?m.a.createElement(E,null,m.a.createElement("div",{className:"pagecontainer d-flex align-items-center",onClick:function(e){return i(e)}},m.a.createElement("div",{className:"container",id:"pagecontainer"},m.a.createElement("div",{className:"row p-5"},m.a.createElement("div",{id:"modalcontainer",className:"col-12 col-md-10 col-lg-8 mx-auto "},m.a.createElement("div",{className:"row modalcontainer p-5"},m.a.createElement("div",{id:"modal",className:"modal-img col-10 col-md-6 mx-auto d-flex justify-content-center "},m.a.createElement("img",{src:n,alt:"products",className:"img-fluid",width:"200px"})),m.a.createElement("div",{className:"col-10 col-md-6 modal-list mx-auto"},m.a.createElement("h5",{className:"text-title text-center"},"Choose Lists"),m.a.createElement("hr",null),m.a.createElement("ul",null,t),m.a.createElement("div",{className:"border-top py-3 mx-auto"},m.a.createElement("form",{onSubmit:function(e){return c(e)},className:"d-flex list-form align-items-center"},m.a.createElement("div",{className:"listbutton"},m.a.createElement("button",{className:"btn addBtn ",onClick:function(e){return c(e)}},m.a.createElement("span",{className:"d-flex align-items-center justify-content-center mx-auto"},"\u254b"))),"\u2003",m.a.createElement("input",{placeholder:"Add A New List",className:"input-newList",onChange:function(e){return s(e)}}))),m.a.createElement("div",{className:"row "},u?m.a.createElement(d.b,{to:"/wishlist",className:"ml-auto"},m.a.createElement(h.a,{style:{width:"100% !important;"},onClick:function(){return i()}},"View This List")):"")))))))):null})}}]),n}(m.a.Component),E=u.a.div(b())}}]);
//# sourceMappingURL=3.b19e03f0.chunk.js.map