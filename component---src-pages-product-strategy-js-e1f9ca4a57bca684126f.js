"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[887],{2873:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(7294),n=a(5610),o=a(2175),c=a(8348),s=a(7137),l=a(4320),i=a(4334),m=a(2531),d=a(4527),u=a(5584);function p(e){var t=e.options,a=e.label,n=e.name,o=e.disabled,c=e.onChange,s=e.defaultValue,l=r.useState(s),p=l[0],g=l[1];return r.createElement("div",{className:"mui-select"},r.createElement(d.Z,{variant:"standard",sx:{minWidth:"100%"}},r.createElement(i.Z,{className:"label",sx:{cursor:"none"}},a),r.createElement(u.Z,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:p,onChange:function(e){g(e.target.value),c(e)},name:n,sx:{":before":{borderBottom:"2px solid #E6E6E6"},":after":{borderBottom:"2px solid #E6E6E6"}},disabled:o},t.map((function(e,t){return r.createElement(m.Z,{value:e.value,key:t,sx:{cursor:"none"}},e.name)})))))}var g,h=a(1597),v=a(6744),E=(0,c.ZP)(s.Z)({"& .MuiFormLabel-root":{color:"#2F2F2F",fontFamily:"Poppins",fontSize:"1.25rem",marginBottom:"6px",lineHeight:"1rem"},"& .MuiFormLabel-asterisk.MuiInputLabel-asterisk":{color:"red"},"& label.Mui:after":{color:"#B5B5B5"},"& label.Mui-focused":{color:"#B5B5B5"},"& .MuiInput-underline:after":{borderBottom:"2px solid #183266"},"& .MuiInput-root:before":(g={borderBottom:0},g.borderBottom="2px solid #E6E6E6",g),"& .MuiInput-input":{cursor:"none"}}),f=[{id:1,name:"Product Strategy",value:"Product Strategy",budget:!1},{id:2,name:"Product Design",value:"Product Design",budget:!1},{id:3,name:"Custom Software Development",value:"Custom Software Development",budget:!1},{id:4,name:"Data Engineering",value:"Data Engineering",budget:!1}],y=[{id:1,name:"$5000-$10000",value:"5000-10000"},{id:2,name:"$10000-$50000",value:"10000-50000"},{id:3,name:"$50000+",value:"50000"}];function b(e){var t=e.type,a=(0,r.useState)({name:"",email:"",company:"",help:"",budget:"",message:""}),n=a[0],c=a[1],s=(0,r.useState)(!0),i=(s[0],s[1]),m=r.useState(!1),d=m[0],u=m[1],g=function(e){var t,a=e.target.value;if("help"===e.target.name){var r=f.filter((function(t){return t.name===e.target.value}));i(r[0].budget)}c(Object.assign({},n,((t={})[e.target.name]=a,t)))};var b=r.createElement("span",{style:{color:"red"}},"Enter a valid name");return r.createElement(r.Fragment,null,r.createElement(v.Z,{open:d}),r.createElement("form",{name:"contact",onSubmit:function(e){if(e.preventDefault(),!(n.name.length>25)){u(!0);var t=document.forms.contact;fetch("https://script.google.com/macros/s/AKfycbyVDyCG6u76JONl627-Z6vDPNXB8eFSLjlabDx4gUI4Qf_lSGZL40869BC2r50BiX3BVg/exec",{method:"POST",body:new FormData(t)}).then((function(){(0,h.navigate)("/thank-you")})).catch((function(e){return console.error("Error!",e.message)}))}}},r.createElement(l.ZP,{container:!0,columnSpacing:5,rowSpacing:6},r.createElement(l.ZP,{item:!0,md:6,sm:12,xs:12},r.createElement(E,{onChange:g,id:"standard-basic",label:"Name",variant:"standard",name:"name",fullWidth:!0,required:!0,helperText:n.name.length>25&&b})),r.createElement(l.ZP,{item:!0,md:6,sm:12,xs:12},r.createElement(E,{onChange:g,id:"standard-basic",label:"Email",variant:"standard",name:"email",fullWidth:!0,type:"email",required:!0})),r.createElement(l.ZP,{item:!0,md:6,sm:12,xs:12},r.createElement(E,{onChange:g,id:"standard-basic",label:"Company",variant:"standard",name:"company",fullWidth:!0})),r.createElement(l.ZP,{item:!0,md:6,sm:12,xs:12,className:"form-fields"},r.createElement(p,{options:f,label:"How can we help you?",defaultValue:function(e){if("ProductStrategy"===e){return"Product Strategy"}if("ProductDesign"===e){return"Product Design"}if("CustomSoftware"===e){return"Custom Software Development"}if("DataEng"===e){return"Data Engineering"}}(t),name:"help",onChange:g})),r.createElement(l.ZP,{item:!0,md:6,sm:12,xs:12,className:"form-fields"},r.createElement(p,{options:y,label:"Budget",name:"budget",onChange:g})),r.createElement(l.ZP,{item:!0,md:12,xs:12,className:"form-fields"},r.createElement("textarea",{onChange:g,name:"message",id:"",cols:"30",rows:"4",placeholder:"Message"}))),r.createElement(l.ZP,{className:"text-right  pe-0 pt-5 mb-2"},r.createElement(o.Z,{text:"CANCEL",variant:"fill",border:"#2f2f2f",bgClr:"#ffffff",clr:"#2f2f2f",className:"me-3",onClick:function(){document.forms.contact.reset()},type:"button"}),r.createElement(o.Z,{text:"SEND MESSAGE",variant:"fill",bgClr:"#f23b48",type:"submit"}))))}var w=a(5336);function x(e){var t=e.type;return r.createElement("div",{className:"contact-us-product-design"},r.createElement("div",{className:"container position-relative"},r.createElement("a",{href:"#top",className:"scroll-top-global d-flex"},r.createElement("div",{className:"icon"},r.createElement(w.Z,{direction:"up"})),r.createElement("div",{className:"text"},"SKIP TO TOP")),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12","data-aos":"fade-up","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1400","data-aos-delay":"200"},r.createElement(n.Z,{variant:"40",className:"pb-2 text-capitalize"},"Ready to get started?"),r.createElement("div",{className:"text"},"Fill in to get a free quote")),r.createElement("div",{className:"col-12","data-aos":"fade-up","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1400","data-aos-delay":"200"},r.createElement(b,{type:t})))))}},5272:function(e,t,a){var r=a(7294),n=a(9760);t.Z=function(){return r.createElement(n.Z,{header:"To find the right solution, you need the right strategy",text:"Everybody has an idea of what the right solution to their problem would be. However, it's not always clear which strategy will help you get there. Let us advise you on the right strategy for your unique case.",btnText:"Talk to US"})}},9250:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(2784),o=a(4588),c=a(5449),s=a(9485),l=function(){return r.createElement("img",{src:"/arrow-white.svg"})};function i(e){var t=e.accordianData,a=r.useState(t[0]),i=a[0],m=a[1];return r.createElement("div",null,t.map((function(e){return r.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top","data-aos-duration":"1000","data-aos-delay":"250",key:e.id},r.createElement(n.Z,{elevation:0,className:"basic-accordian",expanded:e.id===(null==i?void 0:i.id),style:{backgroundColor:e.id===(null==i?void 0:i.id)?"#183266 ":""},onChange:function(){(null==i?void 0:i.id)===e.id?m(null):m(e)},key:e.id},r.createElement(o.Z,{expandIcon:e.id===(null==i?void 0:i.id)?r.createElement(l,null):r.createElement(s.Wi,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.createElement("div",{className:"header",style:{color:e.id===(null==i?void 0:i.id)?"white ":"black"}},e.heading)),r.createElement(c.Z,null,r.createElement("div",{style:{color:e.id===(null==i?void 0:i.id)?"white ":"black"}},e.text))))})))}},2078:function(e,t,a){a.d(t,{t:function(){return c}});var r=a(7294),n=a(1597),o=a(8953),c=function(e){var t=e.card,a=e.col,c=e.gap,s=(0,r.useState)(!1),l=s[0],i=s[1],m=t.Icon,d=t.nav;return r.createElement("div",{className:"col-md-"+a+" g-"+c,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},onClick:function(){d&&"string"==typeof d&&(0,n.navigate)(d)}},r.createElement(o.Z,{className:"card card-hover",elevation:0},r.createElement("div",{className:"text-center icon-div"},r.createElement("div",{className:"icon-wrapper  "+(l?"bg-icon-light":"bg-icon-dark")},m&&r.createElement(m,{fill:l&&"#183266"}))),r.createElement("div",{className:"heading"},t.header),r.createElement("div",{className:"text"},t.text)))};c.defaultProps={col:6,gap:2},t.Z=function(e){var t=e.cardData,a=e.col,n=e.gap;return r.createElement("div",{className:"row g-5 cards"},t.map((function(e,t){return r.createElement(c,{card:e,col:a,gap:n})})))}},9760:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(5610),o=a(7951),c=a(2175),s=a(9485);var l=function(e){var t=e.header,a=e.text,l=e.btnText;return r.createElement("div",{className:"talk-to-us"},r.createElement("div",{className:"triangle"}),r.createElement("div",{className:"inner-div"},r.createElement(s.CJ,null)),r.createElement("div",{className:"container","data-aos":"fade-up","data-aos-anchor-placement":"top-center","data-aos-duration":"1000"},r.createElement("div",{className:""},r.createElement(n.Z,{variant:"40",className:"header"},t)),r.createElement("p",{className:"text"},a),r.createElement(o.Z,{className:"btn-box"},r.createElement(c.Z,{href:"/contact",clr:"white",text:l,border:"#181930",variant:"fill"}))))}},5606:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){var t=e.variant,a=e.align,n=e.children,o=e.className;return r.createElement("div",{className:"center"===a?" text-center":""},r.createElement("div",{className:o+" text"+("26"===t?" size-26":"22"===t?" size-22":"20"===t?" size-20":"18"===t?" size-18":null)},n))}},9680:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var r=a(7294),n=a(2175),o=a(5610);function c(e){var t=e.btnText,a=(e.img,e.children,e.text,e.social,e.id);return r.createElement("div",{className:"ps-hero"},r.createElement("div",{className:"hero-bg",id:a},r.createElement("div",{className:"container position-relative"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-6 hero-text-column","data-aos":"fade-up","data-aos-duration":"1000","data-aos-anchor-placement":"top-bottom"},r.createElement("div",{className:"line-wrapper"},r.createElement("p",{className:"text"},"Product Strategy")),r.createElement(o.Z,{variant:"58",className:"header"},r.createElement("p",{className:"p-1"},"The first step to a successful product")),r.createElement("div",{className:"hero-text"},"Let us take care of the big picture. You can trust us to formulate and execute a product strategy that's aligned with your company's vision and goals."),r.createElement("div",{className:"button text-capitalize"},r.createElement(n.Z,{text:t,variant:"fill",href:"/contact",className:"text-capitalize"}))),r.createElement("div",{className:"col-lg-6 img-hero"},r.createElement("img",{src:"/productStrategy/hero.svg",alt:"",className:"img-fluid"}))))))}var s=a(4320),l=a(7951),i=a(5606);var m=function(){var e=r.useState({box1:!1,box2:!0,box3:!1}),t=e[0],a=e[1];return r.createElement("div",{className:"cards-ps",id:"d-services"},r.createElement("div",null,r.createElement("div",{className:"cards-bg"},r.createElement(s.ZP,{container:!0,justifyContent:"center",columnSpacing:{md:4,sm:3,xs:0},rowSpacing:{md:5,sm:5,xs:0}},r.createElement(s.ZP,{item:!0,md:4,sm:6,xs:12},r.createElement("div",{"data-aos":"zoom-in","data-aos-duration":"1200"},r.createElement(l.Z,{className:t.box1?"box-hover":"box",onMouseEnter:function(){a(Object.assign({},t,{box1:!0,box2:!1,box3:!1}))}},r.createElement("p",{className:"header"},"Discovery Workshop"),r.createElement("p",{className:"text"},"For those who have a wonderful idea but don’t know how to make it work or how to make the business model work to its maximum potential.")))),r.createElement(s.ZP,{item:!0,md:4,sm:6,xs:12},r.createElement("div",{"data-aos":"zoom-in","data-aos-duration":"1200"},r.createElement(l.Z,{className:t.box2?"box-hover":"box",onMouseEnter:function(){a(Object.assign({},t,{box1:!1,box2:!0,box3:!1}))}},r.createElement("p",{className:"header"},"Design Sprint"),r.createElement("p",{className:"text"},"For those who require professional design consultation and architectural advice in order to develop their project.")))),r.createElement(s.ZP,{item:!0,md:4,sm:6,xs:12},r.createElement("div",{"data-aos":"zoom-in","data-aos-duration":"1200"},r.createElement(l.Z,{className:t.box3?"box-hover":"box",onMouseEnter:function(){a(Object.assign({},t,{box1:!1,box2:!1,box3:!0}))}},r.createElement("p",{className:"header"},"Sprint Zero"),r.createElement("p",{className:"text"},"For those who already have wireframing, clickable prototypes, and pixel-perfect screenshots and are ready to start developing their application."))))))))};var d=function(){return r.createElement("div",{className:"services-bg-ps",id:"services"},r.createElement("div",{className:"container py-5 content"},r.createElement(s.ZP,{container:!0},r.createElement(s.ZP,{item:!0,md:7},r.createElement("div",{"data-aos":"fade-right","data-aos-duration":"1000"},r.createElement(o.Z,{variant:"40",color:"white"},"What Are Our Product Strategy Services"))),r.createElement(s.ZP,{item:!0,md:5}),r.createElement(s.ZP,{item:!0,md:7},r.createElement("div",{"data-aos":"fade-left","data-aos-duration":"1000"},r.createElement(i.Z,{className:"text"},"Our product strategy services provide guidance to clients on the development and management of a product, service or brand. Before starting your project, you can decide which of the following services is right for you.")))),r.createElement(l.Z,{pt:{md:2,sm:2,xs:2}},r.createElement(m,null))))};var u=function(){return r.createElement("div",{className:"container custom-software-header","data-aos":"fade-up","data-aos-anchor-placement":"top","data-aos-duration":"500"},r.createElement(s.ZP,{container:!0,mt:{md:8,sm:7,xs:4}},r.createElement(s.ZP,{item:!0,md:12,sm:12,xs:12},r.createElement(o.Z,{variant:"40",className:"text-capitalize"},"What do we cover"," ")),r.createElement(s.ZP,{item:!0,md:6,sm:8,xs:12},r.createElement("p",{className:"sub-text"},"Every service is designed to understand and refine key business goals and then select the best strategy to meet those goals. Product strategy workshops usually cover these key points:"))))},p=a(8953);var g=function(e){var t=e.gap,a=e.cardData,n=e.col;return r.createElement("div",{className:"row g-"+t+" card-icon"},a.map((function(e,t){return r.createElement("div",{className:"col-md-"+n,key:t},r.createElement(p.Z,{className:"card",elevation:0},e.img?r.createElement("div",{className:"icon-img text-center"},r.createElement("div",{className:"img-wrapper"},r.createElement("img",{src:e.img,alt:"img"}))):null,e.header?r.createElement("div",{className:"heading"},e.header):null,e.text?r.createElement("div",{className:"text"},e.text):null))})))};var h=function(){return r.createElement("div",{className:"data-col-custom-software-ps"},r.createElement("div",{className:"container"},r.createElement(g,{cardData:[{img:"/productStrategy/icons-card/img-1.png",header:"Budget Considerations"},{img:"/productStrategy/icons-card/img-3.png",header:"Intensive Discussions"},{img:"/productStrategy/icons-card/img-2.png",header:"Technical Feasibility"},{img:"/productStrategy/icons-card/img-6.png",header:"Expert Consultation"},{img:"/productStrategy/icons-card/img-4.png",header:"Collaborative Decision Making"},{img:"/productStrategy/icons-card/img-5.png",header:"Structured Roadmap"}],col:"4",gap:"3"})))};var v=function(){return r.createElement("div",{className:"py-5 custom-software-main-wrapper"},r.createElement(u,null),r.createElement(h,null))};var E=function(){return r.createElement("div",{className:"consultation-bg"},r.createElement("div",{className:"container"},r.createElement(s.ZP,{container:!0},r.createElement(s.ZP,{item:!0,md:6},r.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top","data-aos-duration":"1000","data-aos-delay":"250"},r.createElement(o.Z,{variant:"40",className:"header"},"Why do you need product strategy consultation?"," ")),r.createElement(i.Z,{className:"text"},"A company's success often depends on how well it can execute its strategy. And so, when a company sets out to develop a business or product strategy, it needs to understand its strengths and weaknesses, the existing market and competition, and the future market trends."),r.createElement(i.Z,{className:"text"},"We will help you by providing the expertise needed to create the right business plan or product strategy.")),r.createElement(s.ZP,{item:!0,md:6,className:"m-auto img-wrapper"},r.createElement("img",{src:"/productStrategy/consultation.png",className:"img-fluid"})))))};var f=function(){return r.createElement("div",{className:"container product-strategy-header"},r.createElement(s.ZP,{container:!0,mt:{md:14,sm:7,xs:4}},r.createElement(s.ZP,{item:!0,md:12,sm:12,xs:12},r.createElement(l.Z,null,r.createElement("div",null,r.createElement(o.Z,{variant:"40",className:"header text-capitalize"},"What you’ll get"," ")))),r.createElement(s.ZP,{item:!0,md:6,sm:8,xs:12},r.createElement("div",null,r.createElement(i.Z,{className:"text"},"You will not only understand the entire process after robust conversations with our expert team, but you will also walk away with everything you need to move forward with your product development.")))))};function y(){return r.createElement("img",{src:"/productStrategy/businessStrategy/analysis.svg"})}function b(){return r.createElement("img",{src:"/productStrategy/businessStrategy/goals.svg"})}function w(){return r.createElement("img",{src:"/productStrategy/businessStrategy/user.svg"})}function x(){return r.createElement("img",{src:"/productStrategy/businessStrategy/userStory.svg"})}function N(){return r.createElement("img",{src:"/productStrategy/businessStrategy/wireframes.svg"})}function S(){return r.createElement("img",{src:"/productStrategy/businessStrategy/cost.svg"})}function Z(){return r.createElement("img",{src:"/productStrategy/businessStrategy/documentation.svg"})}function k(){return r.createElement("img",{src:"/productStrategy/businessStrategy/roadmap.svg"})}function P(){return r.createElement("img",{src:"/productStrategy/businessStrategy/architect.svg"})}var C=function(){var e=[{id:1,header:"Competitive Analysis",icon:r.createElement(y,null)},{id:2,header:"Goals and Milestones",icon:r.createElement(b,null)},{id:3,header:"User Personas",icon:r.createElement(w,null)},{id:4,header:"User Story Mapping",icon:r.createElement(x,null)},{id:5,header:"Wireframes",icon:r.createElement(N,null)},{id:6,header:"Detailed Cost Estimate",icon:r.createElement(S,null)},{id:7,header:"Technical Documentation",icon:r.createElement(Z,null)},{id:8,header:"Development Roadmap",icon:r.createElement(k,null)},{id:9,header:"System Architecture Recommendation Report",icon:r.createElement(P,null)}];return r.createElement("div",{className:"container data-col-bs"},r.createElement(s.ZP,{container:!0,mt:{md:2,sm:2,xs:2},columnSpacing:{md:9,sm:7,xs:4},rowSpacing:{md:0,sm:0,xs:5}},e.map((function(e){return r.createElement(s.ZP,{item:!0,md:4,sm:6,xs:12,key:e.id},r.createElement("div",{className:"content"},r.createElement("div",{className:"icon-wrapper"},e.icon),r.createElement(l.Z,{mt:{md:3,sm:2,xs:1},className:"heading-wrapper"},r.createElement(o.Z,{variant:"26",className:"header"},e.header))))}))))};var D=function(){return r.createElement("div",{className:"business-strategy-wrapper"},r.createElement(f,null),r.createElement(C,null))},T=a(5272),j=a(2078),F=a(3117);function B(){var e=[{id:2,header:"Product Design",text:"We transform your ideas into great products by understanding the problem you are trying to solve and designing an elegant solution that is simple, usable and beautiful.",Icon:F.f3,nav:"/product-design"},{id:3,header:"Custom Software Development",text:"We work with clients to conceptualize, build and launch world-class custom software solutions for startups and enterprises alike.",Icon:F.dl,nav:"/custom-software-development"},{id:4,header:"Data Engineering",text:"We help you leverage data analytics to make smarter decisions about your business and help automate your business operations.",Icon:F.SV,nav:"/data-engineering"}];return r.createElement("div",{className:"container services-ps-section"},r.createElement("div",{className:"wrapper"},r.createElement("div",{className:"col-lg-7 "},r.createElement(o.Z,{variant:"40",className:"header"},"See what else we can do for your business")),r.createElement("div",{className:"row g-5 cards"},e.map((function(e){return r.createElement(j.t,{card:e,col:4})})))))}var I=a(9250);function M(){return r.createElement("div",{className:"paragraph-wrapper"},r.createElement("p",null,"Generally speaking, product strategy is a plan describing what a business product hopes to accomplish and how. This roadmap of your product development allows you to settle your vision, gather research about your audience and the market, prepare an adequate design, work on it hassle-free, and test the solution. It is a step-by-step journey that covers the whole process of releasing your product."))}function W(){return r.createElement("div",{className:"paragraph-wrapper"},r.createElement("p",null,"A solid product strategy helps to translate your idea to future users, gather research that will position your project on the market, and make sure that your business goals are met according to a simple and understandable workflow. Having a well-defined product strategy allows you to plan the release, gather the funds and partners, strategise your product on foreign markets and scale on local ones. Thanks to a thorough product strategy, your team can improve the decision making and understand which tasks to prioritise for the maximum efficiency of the work process."))}function z(){return r.createElement("div",{className:"paragraph-wrapper"},r.createElement("p",null,"The main advantage of a well-defined product strategy is that it can be adjusted and applied to every stage of your process. Surely, it would be more beneficial for your project vision if your business plan was prepared before moving on to the development stage. However, since every work process is prone to changes and unexpected adjustments, having an agile product strategy could save you some headaches. At CodeFulcrum, we usually divide our clients’ strategies into specific milestones, so that you could clearly see how we develop your project from step one to the post-release stage."))}function A(){return r.createElement("div",{className:"paragraph-wrapper"},r.createElement("p",null,"First of all, you should understand that product strategy is subject to change even in the most rigid projects. Since its primary goal is to help you set the correct SMART goals, a good product strategy has to come prior to any other stage of the development process. Further on, there are many variables that can affect the time it will take to create the first draft of a viable product strategy. Key project elements such as the product itself, your budget, tech requirements, etc. can all affect the time it will take to prepare the roadmap. As a rule, there are defined stages of working on the product strategy. They are:"),r.createElement("ul",null,r.createElement("li",null,"Discovering your agenda"),r.createElement("li",null,"Shaping your product vision"),r.createElement("li",null,"Defining product goals"),r.createElement("li",null,"Creating a goal-based roadmap"),r.createElement("li",null,"Repeated review and modifications")),r.createElement("p",null,"At CodeFulcrum, we work according to Scrum iterations, meaning that each cycle of work takes between 1 and 2 weeks, depending on the team. If you require assistance solely with the business aspect of a product strategy, you can count on a faster completion of the entire process. However, we recommend trusting our team with the entire product development."," "))}var O=function(){var e=[{id:1,heading:" What is product strategy?",text:r.createElement(M,null),colored:!0},{id:2,heading:"Why is product strategy important?",text:r.createElement(W,null),colored:!1},{id:3,heading:"When can I use product strategy?",text:r.createElement(z,null),colored:!1},{id:4,heading:"How long does it take to prepare a product strategy?",text:r.createElement(A,null),colored:!1}];return r.createElement("div",{className:"container"},r.createElement(l.Z,{mt:{md:8,sm:5,xs:3},mb:{md:14,sm:8,xs:5}},r.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top","data-aos-duration":"1000","data-aos-delay":"250"}," ",r.createElement(o.Z,{variant:"52"},"FAQ'S")),r.createElement(I.Z,{accordianData:e})))},L=a(2873),H=a(3710);var q=function(){return r.createElement("div",null,r.createElement(H.Z,{metaTitle:"Product Strategy Services - CodeFulcrum",title:"Product Strategy Services",desc:"Our product strategy services help companies build and execute on product vision and plans that drive growth. Contact us today to learn more about our services."}),r.createElement(c,{id:"top",btnText:"LET'S DISCUSS HOW"}),r.createElement(d,null),r.createElement(v,null),r.createElement("div",null,r.createElement(E,null),r.createElement(D,null)),r.createElement(T.Z,null),r.createElement(B,null),r.createElement(O,null),r.createElement(L.Z,null))},R=a(5258),U=a(3284),_=a.n(U),G=a(2926);function V(){r.useEffect((function(){if("undefined"!==document&&"undefined"!==window){var e=document.createElement("script");return e.type="text/javascript",e.src="https://widget.clutch.co/static/js/widget.js",e.async=!0,document.body.appendChild(e),e.onload=function(){window.CLUTCHCO.Init()},function(){window.CLUTCHCO.Destroy(),document.body.removeChild(e)}}}),[]),(0,r.useEffect)((function(){_().init()}),[]);var e="undefined"!=typeof window&&JSON.parse(window.localStorage.getItem("mouseCoords"));return r.createElement(G.Z,null,r.createElement(q,null),r.createElement(R.l,{coord:e,innerSize:16,outerSize:16,color:"255, 255, 255",outerAlpha:.2,innerScale:.8,outerScale:4,clickables:["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link",".swiper-pagination-bullet"]}))}}}]);
//# sourceMappingURL=component---src-pages-product-strategy-js-e1f9ca4a57bca684126f.js.map