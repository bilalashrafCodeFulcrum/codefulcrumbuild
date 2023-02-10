"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[14],{14:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var n=a(7294),r=a(2784),l=a(4588),i=a(5449),o=a(9308),s=a(9485);function d(e){var t=e.accordianData,a=n.useState(t[0]),d=a[0],m=a[1],c=function(){return n.createElement("img",{src:"/arrow-white.svg"})};return n.createElement("div",{className:"container","data-aos":"fade-up","data-aos-anchor-placement":"top-center","data-aos-duration":"1000"},t.map((function(e){return n.createElement("div",{key:e.id},n.createElement(r.Z,{className:"accordian-wrapper container",elevation:0,expanded:e.id===(null==d?void 0:d.id),onClick:function(){(null==d?void 0:d.id)===e.id?m(null):m(e)},style:{backgroundColor:(null==d?void 0:d.id)===e.id?"#183266":"transparent"},key:e.id},n.createElement(l.Z,{expandIcon:(null==d?void 0:d.id)===e.id?n.createElement(c,null):n.createElement(s.Wi,null)},n.createElement("div",null,n.createElement(o.Z,{className:"header",style:{color:(null==d?void 0:d.id)===e.id?"white":"#2f2f2f"}},e.heading),!d&&n.createElement(o.Z,{className:"accordian-desc"},e.desc))),n.createElement(i.Z,null,n.createElement("ul",{className:"accordian-bullets",style:{color:(null==d?void 0:d.id)===e.id?"white":"#2f2f2f"}},e.text.map((function(e,t){return n.createElement("li",{key:t},e)}))))))})))}var m=a(4320),c=a(5610),u=a(5861),f=a(7757),h=a.n(f),p=a(2175),g=a(8348),v=a(7137),b=a(8550),E=a(1597),w=a(4334),y=a(2531),x=a(4527),k=a(5584);function N(e){var t=e.options,a=e.label,r=e.name,l=e.disabled,i=e.onChange,o=e.clearSelectFields,s=e.resetSelectClearState,d=n.useState(""),m=d[0],c=d[1];return n.useEffect((function(){o&&c(""),s()}),[o]),n.createElement("div",{className:"mui-select"},n.createElement(x.Z,{variant:"standard",sx:{minWidth:"100%"}},n.createElement(w.Z,{className:l?"disabled":"label",sx:{cursor:"none"}},a),n.createElement(k.Z,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:m,onChange:function(e){c(e.target.value),i(e)},name:r,sx:{":before":{borderBottom:"2px solid #E6E6E6"},":after":{borderBottom:"2px solid #E6E6E6"}},disabled:l},t.map((function(e,t){return n.createElement(y.Z,{value:e.value,key:t,sx:{cursor:"none"}},e.name)})))))}var Z,S=a(6744),C=a(3010),P=(0,g.ZP)(v.Z)({"& .MuiFormLabel-root":{color:"#2F2F2F",fontFamily:"Poppins",fontSize:"1rem",marginBottom:"6px",lineHeight:"1rem"},"& .MuiFormLabel-asterisk.MuiInputLabel-asterisk":{color:"red"},"& label.Mui:after":{color:"#B5B5B5"},"& label.Mui-focused":{color:"#B5B5B5"},"& .MuiInput-underline:after":{borderBottom:"2px solid #183266"},"& .MuiInput-root:before":(Z={borderBottom:0},Z.borderBottom="2px solid #E6E6E6",Z),"& .MuiInput-input":{cursor:"none"}}),T=[{id:1,name:"Product Strategy",value:"Product Strategy",budget:!1},{id:2,name:"Product Design",value:"Product Design",budget:!1},{id:3,name:"Custom Software Development",value:"Custom Software Development",budget:!1},{id:4,name:"Data Engineering",value:"Data Engineering",budget:!1}],B=[{id:1,name:"$5000-$10000",value:"5000-10000"},{id:2,name:"$10000-$50000",value:"10000-50000"},{id:3,name:"$50000+",value:"50000"}];function M(){var e=n.useState(!1),t=e[0],a=e[1],r=n.useState(!1),l=r[0],i=r[1],o=n.useState(!1),s=o[0],d=o[1],c=(0,n.useState)({name:"",email:"",company:"",help:"",budget:"",message:""}),f=c[0],g=c[1],v=(0,n.useState)(!0),w=v[0],y=v[1],x=function(e){var t,a=e.target.value;if("help"===e.target.name){var n=T.filter((function(t){return t.name===e.target.value}));y(n[0].budget)}g(Object.assign({},f,((t={})[e.target.name]=a,t))),i(!1)};function k(){return(k=(0,u.Z)(h().mark((function e(t){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(f.name.length>25)){e.next=3;break}return e.abrupt("return");case 3:a(!0),n={to:f.email,subject:""+f.help,name:"Client Query: "+f.name,html:"\n      <div>\n      <div><b>Hi,</b> </div>\n      <div>"+f.message+" </div>\n      <br />\n      <div><b>Name:</b> "+f.name+" </div>\n      <div><b>Email:</b> "+f.email+" </div>\n      <div><b>Budget:</b> "+f.budget+" </div>\n      </div>\n      "},(0,C.Yb)(n).then((function(e){200==e.status?(0,E.navigate)("/thank-you"):i(!0),a(!1)})).catch((function(e){console.error({err:e}),i(!0)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=n.createElement("span",{style:{color:"red"}},"Enter a valid name");return n.createElement(n.Fragment,null,l&&n.createElement(b.Z,{variant:"outlined",severity:"error",className:"mui-alert"},"Message sending failed"),n.createElement(S.Z,{open:t}),n.createElement("form",{name:"contact",onSubmit:function(e){return k.apply(this,arguments)}},n.createElement(m.ZP,{container:!0,columnSpacing:5,rowSpacing:6},n.createElement(m.ZP,{item:!0,md:6,sm:12,xs:12},n.createElement(P,{onChange:x,id:"standard-basic",label:"Name",variant:"standard",name:"name",fullWidth:!0,required:!0,helperText:f.name.length>25&&Z})),n.createElement(m.ZP,{item:!0,md:6,sm:12,xs:12},n.createElement(P,{onChange:x,id:"standard-basic",label:"Email",variant:"standard",name:"email",fullWidth:!0,type:"email",required:!0})),n.createElement(m.ZP,{item:!0,md:6,sm:12,xs:12},n.createElement(P,{onChange:x,id:"standard-basic",label:"Company",variant:"standard",name:"company",fullWidth:!0})),n.createElement(m.ZP,{item:!0,md:6,sm:12,xs:12,className:"form-fields"},n.createElement(N,{options:T,label:"How can we help you?",name:"help",onChange:x,clearSelectFields:s,resetSelectClearState:function(){return d(!1)}})),n.createElement(m.ZP,{item:!0,md:6,sm:12,xs:12,className:"form-fields"},n.createElement(N,{options:B,label:"Budget",name:"budget",disabled:w,onChange:x,clearSelectFields:s,resetSelectClearState:function(){return d(!1)}})),n.createElement(m.ZP,{item:!0,md:12,xs:12,className:"form-fields"},n.createElement("textarea",{onChange:x,name:"message",id:"",cols:"30",rows:"4",placeholder:"Message"}))),n.createElement(m.ZP,{className:"text-right  pe-0 pt-5"},n.createElement(p.Z,{text:"CANCEL",variant:"fill",border:"#2f2f2f",bgClr:"#ffffff",clr:"#2f2f2f",className:"me-3",onClick:function(){document.forms.contact.reset(),d(!0)},type:"button"}),n.createElement(p.Z,{text:"SEND MESSAGE",variant:"fill",bgClr:"#f23b48",type:"submit"}))))}var F=a(5336);function D(){return n.createElement("div",{className:"contact-us-services",id:"about_us_section"},n.createElement("div",{className:"container position-relative"},n.createElement("a",{href:"#top",className:"scroll-top-global d-flex"},n.createElement("div",{className:"icon"},n.createElement(F.Z,{direction:"up"})),n.createElement("div",{className:"text"},"SKIP TO TOP")),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12","data-aos":"fade-up","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1400","data-aos-delay":"200"},n.createElement(c.Z,{variant:"40",className:"pb-2 text-capitalize"},"Ready to get started?"),n.createElement("div",{className:"text"},"Get in touch and our team will be right with you!")),n.createElement("div",{className:"col-12","data-aos":"fade-up","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1400","data-aos-delay":"200"},n.createElement(M,null)))))}a(5606);var W=function(){return n.createElement("div",{className:"services-img-wrapper"},n.createElement(m.ZP,{container:!0,className:"container"},n.createElement(m.ZP,{item:!0,md:9},n.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top-center","data-aos-duration":"1000"},n.createElement(c.Z,{variant:"40",className:"header"},"We Work Under A Variety Of Engagement Models That Are Built On Teamwork And Partnership")))),n.createElement(m.ZP,{container:!0,mb:12,className:"container"},n.createElement(m.ZP,{item:!0,md:6,mt:4},n.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top-center"},n.createElement("p",{className:"text-work"},"We've always been a company of people who are determined to be the best they can be everyday! Our collaboration with our partners is what makes us strong and successful in this industry.")))),n.createElement("div",{className:"service-accord"},n.createElement("div",null,n.createElement(d,{accordianData:[{id:1,heading:"Team Augmentation",desc:"This engagement model works well when you envision a series of software projects but don’t wish...",text:["This engagement model works well when you envision a series of software projects but don’t wish to hire permanent employees, or if you are finding it difficult to find the right skill set in a timely manner.","This one provides flexibility to change course and re-prioritize your projects and tasks as you go along. It allows you full control over how you would like to make the best use of your team’s time and skill set.","You work directly with your team members at CodeFulcrum and assign tasks. CodeFulcrum Agile scrum master assists with the process.","This engagement model offers discounted rates compared to the Project Based/Fixed Cost engagement models."]},{id:2,heading:"Project Based",desc:"This engagement model is suitable when your software requirements are well-defined and not like...",text:["This engagement model is suitable when your software requirements are well-defined and not likely to change during the development process.","We work with you upfront to define your software specifications in detail.","We then guarantee delivery of the defined set of functionality in a specific time frame and cost.","This engagement model is not suitable for projects where software requirements are likely to change or evolve."]},{id:3,heading:"Time and Material (T&M)",desc:"This engagement model works best when the amount of development work envisioned....",text:["This engagement model works best when the amount of development work envisioned is small but not well-defined.","The engagement is split into smaller fixed-cost/fixed-time phases (e.g. one month long).","This engagement model limits your exposure for each phase and provides the option to review and decide about the next phase’s budget allocation only if you are satisfied with the deliverables of the preceding phase.","This engagement model is not suitable for on-going development requirements and turnarounds are naturally not as fast as those possible with dedicated teams."]}]}))),n.createElement(D,null))}}}]);
//# sourceMappingURL=14-2d3d6035b3884d11d921.js.map