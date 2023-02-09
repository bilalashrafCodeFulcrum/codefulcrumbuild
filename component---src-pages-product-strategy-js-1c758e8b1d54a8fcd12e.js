"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[887],{2873:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(7294),r=a(5610),o=a(5861),s=a(7757),c=a.n(s),l=a(2175),i=a(8348),d=a(7137),m=a(8550),u=a(4320),p=a(4334),g=a(2531),v=a(4527),h=a(5584);function E(e){var t=e.options,a=e.label,r=e.name,o=e.disabled,s=e.onChange,c=e.defaultValue,l=n.useState(c),i=l[0],d=l[1];return n.createElement("div",{className:"mui-select"},n.createElement(v.Z,{variant:"standard",sx:{minWidth:"100%"}},n.createElement(p.Z,{className:"label",sx:{cursor:"none"}},a),n.createElement(h.Z,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:i,onChange:function(e){d(e.target.value),s(e)},name:r,sx:{":before":{borderBottom:"2px solid #E6E6E6"},":after":{borderBottom:"2px solid #E6E6E6"}},disabled:o},t.map((function(e,t){return n.createElement(g.Z,{value:e.value,key:t,sx:{cursor:"none"}},e.name)})))))}var f,y=a(1597),b=a(3010),x=a(6744),w=(0,i.ZP)(d.Z)({"& .MuiFormLabel-root":{color:"#2F2F2F",fontFamily:"Poppins",fontSize:"1rem",marginBottom:"6px",lineHeight:"1rem"},"& .MuiFormLabel-asterisk.MuiInputLabel-asterisk":{color:"red"},"& label.Mui:after":{color:"#B5B5B5"},"& label.Mui-focused":{color:"#B5B5B5"},"& .MuiInput-underline:after":{borderBottom:"2px solid #183266"},"& .MuiInput-root:before":(f={borderBottom:0},f.borderBottom="2px solid #E6E6E6",f),"& .MuiInput-input":{cursor:"none"}}),N=[{id:1,name:"Product Strategy",value:"Product Strategy",budget:!1},{id:2,name:"Product Design",value:"Product Design",budget:!1},{id:3,name:"Custom Software Development",value:"Custom Software Development",budget:!1},{id:4,name:"Data Engineering",value:"Data Engineering",budget:!1}],S=[{id:1,name:"$5000-$10000",value:"5000-10000"},{id:2,name:"$10000-$50000",value:"10000-50000"},{id:3,name:"$50000+",value:"50000"}];function Z(e){var t=e.type,a=(0,n.useState)({name:"",email:"",company:"",help:"",budget:"",message:""}),r=a[0],s=a[1],i=(0,n.useState)(!0),d=(i[0],i[1]),p=n.useState(!1),g=p[0],v=p[1],h=n.useState(!1),f=h[0],Z=h[1],k=function(e){var t,a=e.target.value;if("help"===e.target.name){var n=N.filter((function(t){return t.name===e.target.value}));d(n[0].budget)}s(Object.assign({},r,((t={})[e.target.name]=a,t))),v(!1)},C=function(e){if("ProductStrategy"===e){return"Product Strategy"}if("ProductDesign"===e){return"Product Design"}if("CustomSoftware"===e){return"Custom Software Development"}if("DataEng"===e){return"Data Engineering"}};function P(){return(P=(0,o.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r.name.length>25)){e.next=3;break}return e.abrupt("return");case 3:Z(!0),a={to:"sales@codefulcrum.com",subject:"Client Query: "+r.help,name:"Client Query: "+r.name,html:"\n      <div>\n      <div><b>Hi,</b> </div>\n      <div>"+r.message+" </div>\n      <br />\n      <div><b>Name:</b> "+r.name+" </div>\n      <div><b>Email:</b> "+r.email+" </div>\n      <div><b>Budget:</b> "+r.budget+" </div>\n      </div>\n      "},(0,b.Yb)(a).then((function(e){200==e.status?(0,y.navigate)("/thank-you"):v(!0),Z(!1)})).catch((function(e){console.error({err:e}),v(!0)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.useEffect((function(){var e=C(t);s(Object.assign({},r,{help:e}))}),[t]);var D=n.createElement("span",{style:{color:"red"}},"Enter a valid name");return n.createElement(n.Fragment,null,g&&n.createElement(m.Z,{variant:"outlined",severity:"error",className:"mui-alert"},"Message sending failed"),n.createElement(x.Z,{open:f}),n.createElement("form",{name:"contact",onSubmit:function(e){return P.apply(this,arguments)}},n.createElement(u.ZP,{container:!0,columnSpacing:5,rowSpacing:6},n.createElement(u.ZP,{item:!0,md:6,sm:12,xs:12},n.createElement(w,{onChange:k,id:"standard-basic",label:"Name",variant:"standard",name:"name",fullWidth:!0,required:!0,helperText:r.name.length>25&&D})),n.createElement(u.ZP,{item:!0,md:6,sm:12,xs:12},n.createElement(w,{onChange:k,id:"standard-basic",label:"Email",variant:"standard",name:"email",fullWidth:!0,type:"email",required:!0})),n.createElement(u.ZP,{item:!0,md:6,sm:12,xs:12},n.createElement(w,{onChange:k,id:"standard-basic",label:"Company",variant:"standard",name:"company",fullWidth:!0})),n.createElement(u.ZP,{item:!0,md:6,sm:12,xs:12,className:"form-fields"},n.createElement(E,{options:N,label:"How can we help you?",defaultValue:C(t),disabled:!0,name:"help",onChange:k})),n.createElement(u.ZP,{item:!0,md:6,sm:12,xs:12,className:"form-fields"},n.createElement(E,{options:S,label:"Budget",name:"budget",onChange:k})),n.createElement(u.ZP,{item:!0,md:12,xs:12,className:"form-fields"},n.createElement("textarea",{onChange:k,name:"message",id:"",cols:"30",rows:"4",placeholder:"Message"}))),n.createElement(u.ZP,{className:"text-right  pe-0 pt-5 mb-2"},n.createElement(l.Z,{text:"CANCEL",variant:"fill",border:"#2f2f2f",bgClr:"#ffffff",clr:"#2f2f2f",className:"me-3",onClick:function(){document.forms.contact.reset()},type:"button"}),n.createElement(l.Z,{text:"SEND MESSAGE",variant:"fill",bgClr:"#f23b48",type:"submit"}))))}var k=a(5336);function C(e){var t=e.type;return n.createElement("div",{className:"contact-us-product-design"},n.createElement("div",{className:"container position-relative"},n.createElement("a",{href:"#top",className:"scroll-top-global d-flex"},n.createElement("div",{className:"icon"},n.createElement(k.Z,{direction:"up"})),n.createElement("div",{className:"text"},"SKIP TO TOP")),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12","data-aos":"fade-up","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1400","data-aos-delay":"200"},n.createElement(r.Z,{variant:"40",className:"pb-2 text-capitalize"},"Ready to get started?"),n.createElement("div",{className:"text"},"Fill in to get a free quote")),n.createElement("div",{className:"col-12","data-aos":"fade-up","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1400","data-aos-delay":"200"},n.createElement(Z,{type:t})))))}},5272:function(e,t,a){var n=a(7294),r=a(9760);t.Z=function(){return n.createElement(r.Z,{header:"Let’s choose the best technology for your business",text:"Already know what tech stack you want to use in your next app? Great! Still not quite sure? Let us advise you on the best solution for your unique case.",btnText:"Talk to US"})}},9250:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(2784),o=a(4588),s=a(5449),c=a(9485),l=function(){return n.createElement("img",{src:"/arrow-white.svg"})};function i(e){var t=e.accordianData,a=n.useState(t[0]),i=a[0],d=a[1];return n.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top","data-aos-duration":"1000","data-aos-delay":"250"},t.map((function(e){return n.createElement("div",{key:e.id},n.createElement(r.Z,{elevation:0,className:"basic-accordian",expanded:e.id===(null==i?void 0:i.id),style:{backgroundColor:e.id===(null==i?void 0:i.id)?"#183266 ":""},onChange:function(){(null==i?void 0:i.id)===e.id?d(null):d(e)},key:e.id},n.createElement(o.Z,{expandIcon:e.id===(null==i?void 0:i.id)?n.createElement(l,null):n.createElement(c.Wi,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.createElement("div",{className:"header",style:{color:e.id===(null==i?void 0:i.id)?"white ":"black"}},e.heading)),n.createElement(s.Z,null,n.createElement("div",{style:{color:e.id===(null==i?void 0:i.id)?"white ":"black"}},e.text))))})))}},2078:function(e,t,a){a.d(t,{t:function(){return s}});var n=a(7294),r=a(1597),o=a(8953),s=function(e){var t=e.card,a=e.col,s=e.gap,c=(0,n.useState)(!1),l=c[0],i=c[1],d=t.Icon,m=t.nav;return n.createElement("div",{className:"col-md-"+a+" g-"+s,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},onClick:function(){m&&"string"==typeof m&&(0,r.navigate)(m)}},n.createElement(o.Z,{className:"card card-hover",elevation:0},n.createElement("div",{className:"text-center icon-div"},n.createElement("div",{className:"icon-wrapper  "+(l?"bg-icon-light":"bg-icon-dark")},d&&n.createElement(d,{fill:l&&"#183266"}))),n.createElement("div",{className:"heading"},t.header),n.createElement("div",{className:"text"},t.text)))};s.defaultProps={col:6,gap:2},t.Z=function(e){var t=e.cardData,a=e.col,r=e.gap;return n.createElement("div",{className:"row g-5 cards"},t.map((function(e,t){return n.createElement(s,{card:e,col:a,gap:r})})))}},9760:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(5610),o=a(7951),s=a(2175),c=a(9485);var l=function(e){var t=e.header,a=e.text,l=e.btnText;return n.createElement("div",{className:"talk-to-us-dark"},n.createElement("div",{className:"triangle"}),n.createElement("div",{className:"inner-div"},n.createElement(c.CJ,null)),n.createElement("div",{className:"container","data-aos":"fade-up","data-aos-anchor-placement":"top-center","data-aos-duration":"1000"},n.createElement("div",{className:""},n.createElement(r.Z,{variant:"40",className:"header"},t)),n.createElement("p",{className:"text"},a),n.createElement(o.Z,{className:"btn-box"},n.createElement(s.Z,{href:"/contact",clr:"white",text:l,border:"#181930",variant:"fill"}))))}},5606:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.variant,a=e.align,r=e.children,o=e.className;return n.createElement("div",{className:"center"===a?" text-center":""},n.createElement("div",{className:o+" text"+("26"===t?" size-26":"22"===t?" size-22":"20"===t?" size-20":"18"===t?" size-18":null)},r))}},9680:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var n=a(7294),r=a(2175),o=a(5610);function s(e){var t=e.btnText,a=(e.img,e.children,e.text,e.social,e.id);return n.createElement("div",{className:"ps-hero"},n.createElement("div",{className:"hero-bg",id:a},n.createElement("div",{className:"container position-relative"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-6 hero-text-column","data-aos":"fade-up","data-aos-duration":"1000","data-aos-anchor-placement":"top-bottom"},n.createElement("div",{className:"line-wrapper"},n.createElement("p",{className:"text"},"Product Strategy")),n.createElement(o.Z,{variant:"58",className:"header"},n.createElement("p",{className:"p-1"},"The first step to a successful product")),n.createElement("div",{className:"hero-text"},"Let us take care of the big picture. You can trust us to formulate and execute a product strategy that's aligned with your company's vision and goals."),n.createElement("div",{className:"button text-capitalize"},n.createElement(r.Z,{text:t,variant:"fill",href:"/contact",className:"text-capitalize"}))),n.createElement("div",{className:"col-lg-6 img-hero"},n.createElement("img",{src:"/productStrategy/hero.svg",alt:"",className:"img-fluid"}))))))}var c=a(4320),l=a(7951),i=a(5606);var d=function(){var e=n.useState({box1:!1,box2:!0,box3:!1}),t=e[0],a=e[1];return n.createElement("div",{className:"cards-ps",id:"d-services"},n.createElement("div",null,n.createElement("div",{className:"cards-bg"},n.createElement(c.ZP,{container:!0,justifyContent:"center",columnSpacing:{md:4,sm:3,xs:0},rowSpacing:{md:5,sm:5,xs:0}},n.createElement(c.ZP,{item:!0,md:4,sm:6,xs:12},n.createElement("div",{"data-aos":"zoom-in","data-aos-duration":"1200"},n.createElement(l.Z,{className:t.box1?"box-hover":"box",onMouseEnter:function(){a(Object.assign({},t,{box1:!0,box2:!1,box3:!1}))},onMouseLeave:function(){a({box1:!1,box2:!1,box3:!1})}},n.createElement("p",{className:"header"},"Discovery Workshop"),n.createElement("p",{className:"text"},"For those who have a wonderful idea but don’t know how to make it work or how to make the business model work to its maximum potential.")))),n.createElement(c.ZP,{item:!0,md:4,sm:6,xs:12},n.createElement("div",{"data-aos":"zoom-in","data-aos-duration":"1200"},n.createElement(l.Z,{className:t.box2?"box-hover":"box",onMouseEnter:function(){a(Object.assign({},t,{box1:!1,box2:!0,box3:!1}))},onMouseLeave:function(){a({box1:!1,box2:!1,box3:!1})}},n.createElement("p",{className:"header"},"Design Sprint"),n.createElement("p",{className:"text"},"For those who require professional design consultation and architectural advice in order to develop their project.")))),n.createElement(c.ZP,{item:!0,md:4,sm:6,xs:12},n.createElement("div",{"data-aos":"zoom-in","data-aos-duration":"1200"},n.createElement(l.Z,{className:t.box3?"box-hover":"box",onMouseEnter:function(){a(Object.assign({},t,{box1:!1,box2:!1,box3:!0}))},onMouseLeave:function(){a({box1:!1,box2:!1,box3:!1})}},n.createElement("p",{className:"header"},"Sprint Zero"),n.createElement("p",{className:"text"},"For those who already have wireframing, clickable prototypes, and pixel-perfect screenshots and are ready to start developing their application."))))))))};var m=function(){return n.createElement("div",{className:"services-bg-ps",id:"services"},n.createElement("div",{className:"container py-5 content"},n.createElement(c.ZP,{container:!0},n.createElement(c.ZP,{item:!0,md:7},n.createElement("div",{"data-aos":"fade-right","data-aos-duration":"1000"},n.createElement(o.Z,{variant:"40",color:"white"},"What Are Our Product Strategy Services"))),n.createElement(c.ZP,{item:!0,md:5}),n.createElement(c.ZP,{item:!0,md:7},n.createElement("div",{"data-aos":"fade-left","data-aos-duration":"1000"},n.createElement(i.Z,{className:"text"},"Our product strategy services provide guidance to clients on the development and management of a product, service or brand. Before starting your project, you can decide which of the following services is right for you.")))),n.createElement(l.Z,{pt:{md:2,sm:2,xs:2}},n.createElement(d,null))))};var u=function(){return n.createElement("div",{className:"container custom-software-header","data-aos":"fade-up","data-aos-anchor-placement":"top","data-aos-duration":"500"},n.createElement(c.ZP,{container:!0,mt:{md:8,sm:7,xs:4}},n.createElement(c.ZP,{item:!0,md:12,sm:12,xs:12},n.createElement(o.Z,{variant:"40",className:"text-capitalize"},"What do we cover"," ")),n.createElement(c.ZP,{item:!0,md:6,sm:8,xs:12},n.createElement("p",{className:"sub-text"},"Every service is designed to understand and refine key business goals and then select the best strategy to meet those goals. Product strategy workshops usually cover these key points:"))))},p=a(8953);var g=function(e){var t=e.gap,a=e.cardData,r=e.col;return n.createElement("div",{className:"row g-"+t+" card-icon"},a.map((function(e,t){return n.createElement("div",{className:"col-md-"+r,key:t},n.createElement(p.Z,{className:"card",elevation:0},e.img?n.createElement("div",{className:"icon-img text-center"},n.createElement("div",{className:"img-wrapper"},n.createElement("img",{src:e.img,alt:"img"}))):null,e.header?n.createElement("div",{className:"heading"},e.header):null,e.text?n.createElement("div",{className:"text"},e.text):null))})))};var v=function(){return n.createElement("div",{className:"data-col-custom-software-ps"},n.createElement("div",{className:"container"},n.createElement(g,{cardData:[{img:"/productStrategy/icons-card/img-1.png",header:"Budget Considerations"},{img:"/productStrategy/icons-card/img-3.png",header:"Intensive Discussions"},{img:"/productStrategy/icons-card/img-2.png",header:"Technical Feasibility"},{img:"/productStrategy/icons-card/img-6.png",header:"Expert Consultation"},{img:"/productStrategy/icons-card/img-4.png",header:"Collaborative Decision Making"},{img:"/productStrategy/icons-card/img-5.png",header:"Structured Roadmap"}],col:"4",gap:"3"})))};var h=function(){return n.createElement("div",{className:"py-5 custom-software-main-wrapper"},n.createElement(u,null),n.createElement(v,null))};var E=function(){return n.createElement("div",{className:"consultation-bg"},n.createElement("div",{className:"container"},n.createElement(c.ZP,{container:!0},n.createElement(c.ZP,{item:!0,md:6},n.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top","data-aos-duration":"1000","data-aos-delay":"250"},n.createElement(o.Z,{variant:"40",className:"header"},"Why do you need product strategy consultation?"," ")),n.createElement(i.Z,{className:"text"},"A company's success often depends on how well it can execute its strategy. And so, when a company sets out to develop a business or product strategy, it needs to understand its strengths and weaknesses, the existing market and competition, and the future market trends."),n.createElement(i.Z,{className:"text"},"We will help you by providing the expertise needed to create the right business plan or product strategy.")),n.createElement(c.ZP,{item:!0,md:6,className:"m-auto img-wrapper"},n.createElement("img",{src:"/productStrategy/consultation.png",className:"img-fluid"})))))};var f=function(){return n.createElement("div",{className:"container product-strategy-header"},n.createElement(c.ZP,{container:!0,mt:{md:14,sm:7,xs:4}},n.createElement(c.ZP,{item:!0,md:12,sm:12,xs:12},n.createElement(l.Z,null,n.createElement("div",null,n.createElement(o.Z,{variant:"40",className:"header text-capitalize"},"What you’ll get"," ")))),n.createElement(c.ZP,{item:!0,md:6,sm:8,xs:12},n.createElement("div",null,n.createElement(i.Z,{className:"text"},"You will not only understand the entire process after robust conversations with our expert team, but you will also walk away with everything you need to move forward with your product development.")))))};function y(){return n.createElement("img",{src:"/productStrategy/businessStrategy/analysis.svg"})}function b(){return n.createElement("img",{src:"/productStrategy/businessStrategy/goals.svg"})}function x(){return n.createElement("img",{src:"/productStrategy/businessStrategy/user.svg"})}function w(){return n.createElement("img",{src:"/productStrategy/businessStrategy/userStory.svg"})}function N(){return n.createElement("img",{src:"/productStrategy/businessStrategy/wireframes.svg"})}function S(){return n.createElement("img",{src:"/productStrategy/businessStrategy/cost.svg"})}function Z(){return n.createElement("img",{src:"/productStrategy/businessStrategy/documentation.svg"})}function k(){return n.createElement("img",{src:"/productStrategy/businessStrategy/roadmap.svg"})}function C(){return n.createElement("img",{src:"/productStrategy/businessStrategy/architect.svg"})}var P=function(){var e=[{id:1,header:"Competitive Analysis",icon:n.createElement(y,null)},{id:2,header:"Goals and Milestones",icon:n.createElement(b,null)},{id:3,header:"User Personas",icon:n.createElement(x,null)},{id:4,header:"User Story Mapping",icon:n.createElement(w,null)},{id:5,header:"Wireframes",icon:n.createElement(N,null)},{id:6,header:"Detailed Cost Estimate",icon:n.createElement(S,null)},{id:7,header:"Technical Documentation",icon:n.createElement(Z,null)},{id:8,header:"Development Roadmap",icon:n.createElement(k,null)},{id:9,header:"System Architecture Recommendation Report",icon:n.createElement(C,null)}];return n.createElement("div",{className:"container data-col-bs"},n.createElement(c.ZP,{container:!0,mt:{md:2,sm:2,xs:2},columnSpacing:{md:9,sm:7,xs:4},rowSpacing:{md:0,sm:0,xs:5}},e.map((function(e){return n.createElement(c.ZP,{item:!0,md:4,sm:6,xs:12,key:e.id},n.createElement("div",{className:"content"},n.createElement("div",{className:"icon-wrapper"},e.icon),n.createElement(l.Z,{mt:{md:3,sm:2,xs:1},className:"heading-wrapper"},n.createElement(o.Z,{variant:"26",className:"header"},e.header))))}))))};var D=function(){return n.createElement("div",{className:"business-strategy-wrapper"},n.createElement(f,null),n.createElement(P,null))},M=a(5272),j=a(2078),T=a(3117);function W(){var e=[{id:2,header:"Product Design",text:"We transform your ideas into great products by understanding the problem you are trying to solve and designing an elegant solution that is simple, usable and beautiful.",Icon:T.f3,nav:"/product-design"},{id:3,header:"Custom Software Development",text:"We work with clients to conceptualize, build and launch world-class custom software solutions for startups and enterprises alike.",Icon:T.dl,nav:"/custom-software-development"},{id:4,header:"Data Engineering",text:"We help you leverage data analytics to make smarter decisions about your business and help automate your business operations.",Icon:T.SV,nav:"/data-engineering"}];return n.createElement("div",{className:"container services-ps-section"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"col-lg-7 "},n.createElement(o.Z,{variant:"40",className:"header"},"See what else we can do for your business")),n.createElement("div",{className:"row g-5 cards"},e.map((function(e){return n.createElement(j.t,{card:e,col:4})})))))}var F=a(9250);function I(){return n.createElement("div",{className:"paragraph-wrapper"},n.createElement("p",null,"Generally speaking, product strategy is a plan describing what a business product hopes to accomplish and how. This roadmap of your product development allows you to settle your vision, gather research about your audience and the market, prepare an adequate design, work on it hassle-free, and test the solution. It is a step-by-step journey that covers the whole process of releasing your product."))}function z(){return n.createElement("div",{className:"paragraph-wrapper"},n.createElement("p",null,"A solid product strategy helps to translate your idea to future users, gather research that will position your project on the market, and make sure that your business goals are met according to a simple and understandable workflow. Having a well-defined product strategy allows you to plan the release, gather the funds and partners, strategise your product on foreign markets and scale on local ones. Thanks to a thorough product strategy, your team can improve the decision making and understand which tasks to prioritise for the maximum efficiency of the work process."))}function B(){return n.createElement("div",{className:"paragraph-wrapper"},n.createElement("p",null,"The main advantage of a well-defined product strategy is that it can be adjusted and applied to every stage of your process. Surely, it would be more beneficial for your project vision if your business plan was prepared before moving on to the development stage. However, since every work process is prone to changes and unexpected adjustments, having an agile product strategy could save you some headaches. At CodeFulcrum, we usually divide our clients’ strategies into specific milestones, so that you could clearly see how we develop your project from step one to the post-release stage."))}function A(){return n.createElement("div",{className:"paragraph-wrapper"},n.createElement("p",null,"First of all, you should understand that product strategy is subject to change even in the most rigid projects. Since its primary goal is to help you set the correct SMART goals, a good product strategy has to come prior to any other stage of the development process. Further on, there are many variables that can affect the time it will take to create the first draft of a viable product strategy. Key project elements such as the product itself, your budget, tech requirements, etc. can all affect the time it will take to prepare the roadmap. As a rule, there are defined stages of working on the product strategy. They are:"),n.createElement("ul",null,n.createElement("li",null,"Discovering your agenda"),n.createElement("li",null,"Shaping your product vision"),n.createElement("li",null,"Defining product goals"),n.createElement("li",null,"Creating a goal-based roadmap"),n.createElement("li",null,"Repeated review and modifications")),n.createElement("p",null,"At CodeFulcrum, we work according to Scrum iterations, meaning that each cycle of work takes between 1 and 2 weeks, depending on the team. If you require assistance solely with the business aspect of a product strategy, you can count on a faster completion of the entire process. However, we recommend trusting our team with the entire product development."," "))}var L=function(){var e=[{id:1,heading:" What is product strategy?",text:n.createElement(I,null),colored:!0},{id:2,heading:"Why is product strategy important?",text:n.createElement(z,null),colored:!1},{id:3,heading:"When can I use product strategy?",text:n.createElement(B,null),colored:!1},{id:4,heading:"How long does it take to prepare a product strategy?",text:n.createElement(A,null),colored:!1}];return n.createElement("div",{className:"container"},n.createElement(l.Z,{mt:{md:8,sm:5,xs:3},mb:{md:14,sm:8,xs:5}},n.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top","data-aos-duration":"1000","data-aos-delay":"250"}," ",n.createElement(o.Z,{variant:"52"},"FAQ'S")),n.createElement(F.Z,{accordianData:e})))},O=a(2873),H=a(3710);var q=function(){return n.createElement("div",null,n.createElement(H.Z,{metaTitle:"Product Strategy Services - CodeFulcrum",title:"Product Strategy Services",desc:"Our product strategy services help companies build and execute on product vision and plans that drive growth. Contact us today to learn more about our services."}),n.createElement(s,{id:"top",btnText:"LET'S DISCUSS HOW"}),n.createElement(m,null),n.createElement(h,null),n.createElement("div",null,n.createElement(E,null),n.createElement(D,null)),n.createElement(M.Z,null),n.createElement(W,null),n.createElement(L,null),n.createElement(O.Z,{type:"ProductStrategy"}))},R=a(5258),U=a(3284),_=a.n(U),$=a(2926);function G(){n.useEffect((function(){if("undefined"!==document&&"undefined"!==window){var e=document.createElement("script");return e.type="text/javascript",e.src="https://widget.clutch.co/static/js/widget.js",e.async=!0,document.body.appendChild(e),e.onload=function(){window.CLUTCHCO.Init()},function(){window.CLUTCHCO.Destroy(),document.body.removeChild(e)}}}),[]),(0,n.useEffect)((function(){_().init()}),[]);var e="undefined"!=typeof window&&JSON.parse(window.localStorage.getItem("mouseCoords"));return n.createElement($.Z,null,n.createElement(q,null),n.createElement(R.l,{coord:e,innerSize:16,outerSize:16,color:"255, 255, 255",outerAlpha:.2,innerScale:.8,outerScale:4,clickables:["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link",".swiper-pagination-bullet"]}))}}}]);
//# sourceMappingURL=component---src-pages-product-strategy-js-1c758e8b1d54a8fcd12e.js.map