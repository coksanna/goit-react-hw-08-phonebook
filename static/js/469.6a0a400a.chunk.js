"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{469:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var a=t(791),r=t(434),o=t(547),s=t(653),c=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},l=function(e){return e.filter},i="contact-item_item__blZrl",m="contact-item_btn__oa1nW",u=t(184),d=function(e){var n=e.id,t=e.name,a=e.number,r=e.removeContact;return(0,u.jsxs)("li",{className:i,children:[t," : ",a,(0,u.jsx)("button",{onClick:function(){return r(n)},type:"button",className:m,children:"Delete"})]})},h="contact-list_list__6PpQb",p=function(e){var n=e.removeContact,t=e.contacts.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,u.jsx)(d,{id:t,name:a,number:r,removeContact:n},t)}));return(0,u.jsx)("ul",{className:h,children:t})},f=p;p.defaultProps={contacts:[]};var _="filter_input__sX944",b=function(e){var n=e.handleChange;return(0,u.jsxs)("label",{className:_,children:["Find contact by name",(0,u.jsx)("input",{name:"filter",onChange:n,placeholder:"enter contact"})]})},v=t(942),x=t(413),j=t(439),N="contact-form_form__jmel0",C="contact-form_formGroup__5zkqg",k="contact-form_formInput__wScdP",g="contact-form_formBtn__3b8cg",w={name:"",number:""},Z=function(e){var n=e.onSubmit,t=(0,a.useState)((0,x.Z)({},w)),r=(0,j.Z)(t,2),o=r[0],s=r[1],c=function(e){var n=e.target,t=n.name,a=n.value;s((function(e){return(0,x.Z)((0,x.Z)({},e),{},(0,v.Z)({},t,a))}))},l=o.name,i=o.number;return(0,u.jsxs)("form",{className:N,onSubmit:function(e){e.preventDefault(),n({name:l,number:i}),s((0,x.Z)({},w))},children:[(0,u.jsxs)("label",{className:C,children:["Name",(0,u.jsx)("input",{className:k,type:"text",name:"name",value:l,placeholder:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:c})]}),(0,u.jsxs)("label",{className:C,children:["Number",(0,u.jsx)("input",{className:k,type:"tel",placeholder:"number",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:c})]}),(0,u.jsx)("button",{className:g,type:"submit",children:"Add contact"})]})},y={wrapper:"phoneBook_wrapper__FD4Vw",title:"phoneBook_title__UJN3k",phonebook:"phoneBook_phonebook__h444N"},A=function(){var e=(0,r.v9)(c),n=(0,r.v9)(l),t=(0,r.I0)();(0,a.useEffect)((function(){t((0,o.CL)())}),[t]);var i=Boolean(e.length);return(0,u.jsxs)("div",{className:y.phonebook,children:[(0,u.jsxs)("div",{className:y.wrapper,children:[(0,u.jsx)("h2",{className:y.title,children:"Phonebook"}),(0,u.jsx)(Z,{onSubmit:function(e){var n=e.name,a=e.number;t((0,o.v6)({name:n,number:a}))}})]}),(0,u.jsxs)("div",{className:y.wrapper,children:[(0,u.jsx)("h2",{className:y.title,children:"Contacts"}),(0,u.jsx)(b,{value:n,handleChange:function(e){var n=e.target;return t((0,s.T)(n.value))}}),i&&(0,u.jsx)(f,{removeContact:function(e){t((0,o.in)(e))},contacts:e}),!i&&(0,u.jsx)("p",{className:y.message,children:"No contacts in list"})]})]})},B=function(){return(0,u.jsx)(A,{})}}}]);
//# sourceMappingURL=469.6a0a400a.chunk.js.map