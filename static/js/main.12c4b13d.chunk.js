(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{12:function(e,n,t){},20:function(e,n,t){e.exports=t(36)},25:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),o=t(9),r=t.n(o),l=(t(25),t(26),t(14)),u=t(13),m=t(8);t(12);var i=function(e){var n=e.counter,t=e.increment,a=e.decrement,o=e.remove;return c.a.createElement("div",{className:"card mb-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"ID ",c.a.createElement("strong",null,n.id)),c.a.createElement("div",{className:"col"},"Counter name ",c.a.createElement("strong",null,n.name)),c.a.createElement("div",{className:"col"},c.a.createElement("button",{onClick:function(){return a(n.id)},className:"btn btn-primary"},"-"),c.a.createElement("strong",null,n.count),c.a.createElement("button",{onClick:function(){return t(n.id)},className:"btn btn-primary"},"+")),c.a.createElement("div",{className:"col"},c.a.createElement("button",{onClick:function(){return o(n)},className:"btn btn-danger"},"Delete")))))};var s=function(e){var n=Object(a.useState)("Counter "),t=Object(m.a)(n,2),o=t[0],r=t[1],l=Object(a.useState)(0),u=Object(m.a)(l,2),i=u[0],s=u[1];return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",name:"name",value:o,className:"form-control",onChange:function(e){return r(e.target.value)}})),c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"number",name:"count",value:i,className:"form-control",onChange:function(e){return s(e.target.value)}})),c.a.createElement("div",{className:"col"},c.a.createElement("button",{onClick:function(){return e.onSubmit(o,Number(i)),r("Counter "),void s(0)},className:"btn btn-outline-secondary"},"Create")))},d=t(44),E=t(38),b=t(39),v=t(40),f=t(41),C=t(42),p=t(43);function g(e){var n=Object(a.useState)(!0),t=Object(m.a)(n,2),o=t[0],r=t[1];return c.a.createElement(d.a,{isOpen:Boolean(e.name),toggle:e.onCancel},c.a.createElement(E.a,null,"Delete confirmation"),c.a.createElement(b.a,null,c.a.createElement("p",null,"Enter counter name ",c.a.createElement("strong",null,e.name)," to delete it"),c.a.createElement(v.a,null,c.a.createElement(f.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"with a placeholder",onChange:function(n){var t=n.target.value;r(t.trim().toLowerCase()!==e.name.trim().toLowerCase())}}))),c.a.createElement(C.a,null,c.a.createElement(p.a,{color:"danger",onClick:function(){r(!0),e.onSuccess()},disabled:o},"Delete"),c.a.createElement(p.a,{color:"secondary",onClick:function(){r(!0),e.onCancel()}},"Cancel")))}var N=function(){var e=Object(a.useState)([{id:123,name:"Counter 1",count:2},{id:234,name:"Counter 2",count:5},{id:345,name:"Counter 3",count:8},{id:456,name:"Counter 4",count:48}]),n=Object(m.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)({}),d=Object(m.a)(r,2),E=d[0],b=d[1],v=function(e){console.log("INC "+e);var n=t.findIndex((function(n){return n.id===e})),a=Object(l.a)(t);a[n].count=a[n].count+1,o(a)},f=function(e){console.log("DECR "+e);var n=t.map((function(n){return n.id===e?Object(u.a)({},n,{count:n.count-1}):n}));o(n)},C=function(e){b(e)};return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Counters"),"Total ",t.reduce((function(e,n){return e+n.count}),0),c.a.createElement("button",{onClick:function(){console.log("resetTotalCount");var e=t.map((function(e){return Object(u.a)({},e,{count:0})}));o(e)},className:"btn btn-danger"},"Reset total count"),c.a.createElement("hr",null),t.map((function(e){return c.a.createElement(i,{key:e.id,counter:e,increment:v,decrement:f,remove:C})})),c.a.createElement("hr",null),c.a.createElement(s,{onSubmit:function(e,n){var a=[].concat(Object(l.a)(t),[{id:Math.random(),name:e,count:n}]);o(a)}}),c.a.createElement(g,{name:E.name,onSuccess:function(){var e=t.filter((function(e){return e.id!==E.id}));o(e),b({})},onCancel:function(){b({})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.12c4b13d.chunk.js.map