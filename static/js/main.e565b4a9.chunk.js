(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],[,,,,,function(t,e,n){t.exports={task:"Task_task__1DdZY",checked:"Task_checked__1qRwc",delete:"Task_delete__XZv6Z"}},,function(t,e,n){t.exports={form:"UserInput_form__3G7o-",inputBox:"UserInput_inputBox__bk6t1"}},function(t,e,n){t.exports={cbButton1:"Checkbox_cbButton1__Mk9Om",cbButton2:"Checkbox_cbButton2__cjZWj"}},,,,function(t,e,n){t.exports={title:"Header_title__n7UhO"}},function(t,e,n){t.exports={taskslist:"TasksList_taskslist__9a8Ed"}},function(t,e,n){t.exports={footer:"Footer_footer__E-BoB"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(11),o=n.n(a),i=(n(20),n(10)),r=n(9),u=n(2),l=n(12),j=n.n(l),b=n(0),d=function(){return Object(b.jsx)("h1",{className:j.a.title,children:"What's the plan for today?"})},f=n(15),O=n(7),h=n.n(O),k=function(t){var e=Object(s.useState)(""),n=Object(u.a)(e,2),c=n[0],a=n[1];return Object(b.jsx)("form",{className:h.a.form,onSubmit:function(e){e.preventDefault(),0!==c.trim().length&&(t.onAddTask({id:Object(f.a)(10),title:c.trim(),status:!1}),a(""))},children:Object(b.jsxs)("div",{className:h.a.inputBox,children:[Object(b.jsx)("input",{type:"text",placeholder:"Add a task",onChange:function(t){a(t.target.value)},value:c}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)("i",{className:"fas fa-plus"})})]})})},x=n(8),m=n.n(x),p=function(t){return Object(b.jsxs)(b.Fragment,{children:[!t.status&&Object(b.jsx)("button",{onClick:t.onClick,className:m.a.cbButton1}),t.status&&Object(b.jsx)("button",{onClick:t.onClick,className:m.a.cbButton2,children:Object(b.jsx)("i",{className:"fas fa-check"})})]})},_=n(5),N=n.n(_),v=function(t){var e=Object(s.useState)(t.task.status),n=Object(u.a)(e,2),c=n[0],a=n[1];return Object(b.jsxs)("li",{className:"".concat(N.a.task," ").concat(c?N.a.checked:""),children:[Object(b.jsx)(p,{status:c,onClick:function(){a((function(t){return!t})),t.onUpdate(t.id)}}),Object(b.jsx)("p",{children:t.task.title}),Object(b.jsx)("button",{className:N.a.delete,onClick:function(){return t.onDelete(t.id)},children:Object(b.jsx)("i",{className:"fas fa-times"})})]})},g=n(13),B=n.n(g),S=function(t){return Object(b.jsx)("ul",{className:B.a.taskslist,children:t.items.map((function(e,n){return Object(b.jsx)(v,{id:e.id,task:e,onDelete:t.onDeleteTask,onUpdate:t.onUpdateTask},e.id)}))})},T=n(14),C=n.n(T),I=function(){return Object(b.jsx)("div",{className:C.a.footer,children:Object(b.jsxs)("p",{children:["Built by"," ",Object(b.jsx)("a",{href:"https://shashiirk.github.io/portfolio",target:"_blank",rel:"noreferrer",children:"Shashikanth"})]})})},U=(n(22),function(){var t=Object(s.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1];Object(s.useEffect)((function(){var t=JSON.parse(localStorage.getItem("tasks"));t&&c(t)}),[]),Object(s.useEffect)((function(){0===n.length?localStorage.removeItem("tasks"):localStorage.setItem("tasks",JSON.stringify(n))}),[n]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"outer-container",children:[Object(b.jsx)(d,{}),Object(b.jsxs)("div",{className:"inner-container",children:[Object(b.jsx)(k,{onAddTask:function(t){c((function(e){return[].concat(Object(r.a)(e),[t])}))}}),Object(b.jsx)(S,{items:n,onDeleteTask:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))},onUpdateTask:function(t){c((function(e){var n=e.findIndex((function(e){return e.id===t})),s=e[n],c=Object(i.a)(Object(i.a)({},s),{},{status:!s.status}),a=Object(r.a)(e);return a[n]=c,a}))}})]})]}),Object(b.jsx)(I,{})]})});o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e565b4a9.chunk.js.map