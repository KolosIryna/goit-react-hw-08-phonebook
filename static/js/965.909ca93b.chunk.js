"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[965],{965:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,o,i,a=t(9434),c=t(5594),s=t(6916),l=function(n){return n.contacts.contacts.items},d=function(n){return n.contacts.filter},u=(0,s.P1)([l,d],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),p=function(n){return n.contacts.contacts.isLoading},x=function(n){return n.contacts.contacts.error},m=t(168),h=t(6444),f=h.ZP.div(r||(r=(0,m.Z)(["\n  .text {\n    text-align: center;\n    font-size: 36px;\n    text-decoration: underline;\n    text-decoration-style: double;\n  }\n\n  .form {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .label {\n    width: 400px;\n  }\n\n  .title {\n    display: block;\n    margin-bottom: 10px;\n    font-size: 18px;\n    line-height: 1.17;\n    letter-spacing: 0.04em;\n  }\n\n  .input {\n    padding: 0 10px;\n    margin-bottom: 15px;\n    width: 100%;\n    height: 35px;\n    font-size: 16px;\n    border: 1px solid rgba(46, 47, 66, 0.4);\n    border-radius: 4px;\n  }\n\n  .btn {\n    display: block;\n    margin: auto;\n    min-width: 110px;\n    height: 40px;\n    padding: 5px 20px;\n    border: 1px solid grey;\n    border-radius: 4px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.5;\n    letter-spacing: 0.04em;\n    cursor: pointer;\n    background-color: white;\n    color: black;\n\n    &:hover,\n    &:focus {\n      background-color: rgb(21, 184, 21);\n      color: white;\n    }\n  }\n"]))),b=t(3329),g=function(){var n=(0,a.I0)(),e=(0,a.v9)(l);return(0,b.jsxs)(f,{children:[(0,b.jsx)("h1",{className:"text",children:"Phonebook"}),(0,b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements.name.value,o=t.currentTarget.elements.number.value;if(e.some((function(n){return n.name.toLowerCase()===r.toLowerCase()})))alert("".concat(r," is already in contacts."));else{var i={name:r,number:o};n((0,c.uK)(i)),t.currentTarget.reset()}},className:"form",children:[(0,b.jsxs)("label",{className:"label",children:[(0,b.jsx)("span",{className:"title",children:"Name"}),(0,b.jsx)("input",{className:"input",name:"name",type:"text",required:!0,placeholder:"Enter name"}),(0,b.jsx)("span",{className:"title",children:"Number"}),(0,b.jsx)("input",{className:"input",type:"tel",name:"number",required:!0,placeholder:"Number",minLength:"7",maxLength:"12"})]}),(0,b.jsx)("button",{className:"btn",type:"submit",children:"Add contact"})]})]})},j=t(614),v=function(){var n=(0,a.v9)(d),e=(0,a.I0)();return(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{children:"Find contacts by name"}),(0,b.jsx)("form",{children:(0,b.jsx)("input",{type:"text",placeholder:"Search contacts",value:n,onChange:function(n){var t=n.target.value;e((0,j.Tv)(t))},style:{padding:"5px",fontSize:"16px",border:"1px solid #ccc",borderRadius:"4px",width:"300px"}})})]})},w=t(2791),y=t(7108),k=h.ZP.div(o||(o=(0,m.Z)(["\n  .item {\n    margin-bottom: 15px;\n  }\n\n  .button {\n    min-width: 50px;\n    margin-left: 10px;\n\n    border: 1px solid grey;\n    border-radius: 4px;\n    padding: 4px;\n    font-weight: 500;\n    font-size: 16px;\n\n    background-color: white;\n    color: black;\n  }\n\n  .button:hover,\n  .button:focus {\n    background-color: red;\n    color: white;\n  }\n"]))),N=function(){var n=(0,a.I0)(),e=(0,a.v9)(p),t=(0,a.v9)(x),r=(0,a.v9)(u);(0,w.useEffect)((function(){n((0,c.yF)())}),[n]);return(0,b.jsxs)(k,{children:[(0,b.jsx)("ul",{children:r.length>0?r.map((function(e){return(0,b.jsxs)("li",{className:"item",children:[e.name,": ",e.phone,(0,b.jsx)("button",{className:"button",onClick:function(){return t=e.id,void n((0,c.GK)(t));var t},children:"Delete"})]},e.id)})):(0,b.jsx)("p",{children:"No contacts found"})}),e&&(0,b.jsx)(y.Z,{}),t&&(0,b.jsx)("p",{children:"Oppsss Erorr"})]})},C=h.ZP.div(i||(i=(0,m.Z)(["\n  padding: 20px;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: rgb(213 220 244);\n\n  .appstyled {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    flex-direction: column;\n    width: 800px;\n    padding-top: 15px;\n\n    margin: 0 auto;\n  }\n\n  .text {\n    text-align: center;\n    font-size: 36px;\n    text-decoration: underline;\n    text-decoration-style: double;\n  }\n"]))),z=function(){return(0,b.jsx)(C,{children:(0,b.jsxs)("div",{className:"appstyled",children:[(0,b.jsx)(g,{}),(0,b.jsx)("h2",{className:"text",children:"Contacts"}),(0,b.jsx)(v,{}),(0,b.jsx)(N,{})]})})}}}]);
//# sourceMappingURL=965.909ca93b.chunk.js.map