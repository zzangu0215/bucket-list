(this["webpackJsonpbucket-list"]=this["webpackJsonpbucket-list"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(6),r=n.n(o),s=(n(12),n(7)),u=n(2),a=n(0);var l=function(e){var t,n,i=Object(c.useState)((null===(t=e.edit)||void 0===t?void 0:t.value)||""),o=Object(u.a)(i,2),r=o[0],s=o[1],l=Object(c.useState)((null===(n=e.edit)||void 0===n?void 0:n.eagerness)||""),d=Object(u.a)(l,2),j=d[0],b=d[1],m=function(t){var n;t.preventDefault();var c={};c.id=(null===(n=e.edit)||void 0===n?void 0:n.id)||Math.random(1e3*Math.floor())+Date.now(),c.text=r,c.eagerness=j||"low",e.onSubmit(c),s(""),b("")},h=function(e){s(e.target.value)};return e.edit?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Update entry: ",e.edit.value]}),Object(a.jsxs)("form",{className:"bucket-form",onSubmit:m,children:[Object(a.jsx)("input",{type:"text",placeholder:e.edit.value,value:r,name:"text",className:"bucket-input",onChange:h}),Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"dropbtn ".concat(j),children:j||"Priority"}),Object(a.jsxs)("div",{className:"dropdown-content",children:[Object(a.jsx)("p",{onClick:function(){return b("high")},children:"Must do"}),Object(a.jsx)("p",{onClick:function(){return b("medium")},children:"Want to do"}),Object(a.jsx)("p",{onClick:function(){return b("low")},children:"Take it or leave it"})]})]}),Object(a.jsx)("button",{className:"bucket-button",children:"Update"})]})]}):Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"bucket-form",onSubmit:m,children:[Object(a.jsx)("input",{type:"text",placeholder:"Add to your bucket list",value:r,name:"text",className:"bucket-input",onChange:h}),Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"dropbtn ".concat(j),children:j||"Priority"}),Object(a.jsxs)("div",{className:"dropdown-content",children:[Object(a.jsx)("p",{onClick:function(){return b("high")},children:"Must do"}),Object(a.jsx)("p",{onClick:function(){return b("medium")},children:"Want to do"}),Object(a.jsx)("p",{onClick:function(){return b("low")},children:"Take it or leave it"})]})]}),Object(a.jsx)("button",{className:"bucket-button",children:"Add bucket list item"})]})})};var d=function(e){var t=Object(c.useState)({id:null,value:"",eagerness:""}),n=Object(u.a)(t,2),i=n[0],o=n[1];return console.log(e.bucket),i.id?Object(a.jsx)(l,{edit:i,onSubmit:function(t){e.editBucketItem(i.id,t),o({id:null,value:"",eagerness:""})}}):e.bucket.map((function(t){return Object(a.jsxs)("div",{className:t.isComplete?"bucket-row complete ".concat(t.eagerness):"bucket-row ".concat(t.eagerness),children:[Object(a.jsx)("div",{onClick:function(){e.completeBucketItem(t.id)},children:t.text}),Object(a.jsxs)("div",{className:"icons",children:[Object(a.jsxs)("p",{onClick:function(){return o({id:t.id,value:t.text,eagerness:t.eagerness})},children:[" ","\u270f\ufe0f"]}),Object(a.jsxs)("p",{onClick:function(){e.removeBucketItem(t.id)},children:[" ","\ud83d\uddd1\ufe0f"]})]})]},t.id)}))};var j=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"What is on your bucket list?"}),Object(a.jsx)(l,{onSubmit:function(e){i((function(t){return[].concat(Object(s.a)(t),[e])}))}}),Object(a.jsx)(d,{bucket:n,completeBucketItem:function(e){i((function(t){return t.map((function(t){return t.id===e&&(console.log(!t.isComplete),t.isComplete=!0),t}))}))},removeBucketItem:function(e){i((function(t){return n.filter((function(t){return t.id!==e}))}))},editBucketItem:function(e,t){t.text&&i((function(n){return n.map((function(n){return n.id===e?t:n}))}))}})]})};var b=function(){return Object(a.jsx)("div",{className:"bucket-app",children:Object(a.jsx)(j,{})})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.61bd4947.chunk.js.map