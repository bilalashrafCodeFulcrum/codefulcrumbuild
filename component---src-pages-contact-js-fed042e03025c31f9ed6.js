"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[5501],{8953:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(3366),r=a(7462),i=a(7294),o=a(5505),c=a(9236),l=a(7663),s=a(8348),u=a(2058),m=a(1351);function d(e){return(0,m.Z)("MuiPaper",e)}(0,a(9508).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=a(5893),v=["className","component","elevation","square","variant"],g=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},p=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t["elevation".concat(a.elevation)]]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,r.Z)({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!n.square&&{borderRadius:a.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat((a.vars||a).palette.divider)},"elevation"===n.variant&&(0,r.Z)({boxShadow:(a.vars||a).shadows[n.elevation]},!a.vars&&"dark"===a.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,l.Fq)("#fff",g(n.elevation)),", ").concat((0,l.Fq)("#fff",g(n.elevation)),")")},a.vars&&{backgroundImage:null==(t=a.vars.overlays)?void 0:t[n.elevation]}))})),b=i.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiPaper"}),i=a.className,l=a.component,s=void 0===l?"div":l,m=a.elevation,g=void 0===m?1:m,b=a.square,h=void 0!==b&&b,E=a.variant,w=void 0===E?"elevation":E,x=(0,n.Z)(a,v),Z=(0,r.Z)({},a,{component:s,elevation:g,square:h,variant:w}),y=function(e){var t=e.square,a=e.elevation,n=e.variant,r=e.classes,i={root:["root",n,!t&&"rounded","elevation"===n&&"elevation".concat(a)]};return(0,c.Z)(i,d,r)}(Z);return(0,f.jsx)(p,(0,r.Z)({as:s,ownerState:Z,className:(0,o.Z)(y.root,i),ref:t},x))}))},615:function(e,t,a){a.d(t,{C:function(){return r},n:function(){return n}});var n=function(e){return e.scrollTop};function r(e,t){var a,n,r=e.timeout,i=e.easing,o=e.style,c=void 0===o?{}:o;return{duration:null!=(a=c.transitionDuration)?a:"number"==typeof r?r:r[t.mode]||0,easing:null!=(n=c.transitionTimingFunction)?n:"object"==typeof i?i[t.mode]:i,delay:c.transitionDelay}}},9240:function(e,t,a){var n=a(6550);t.Z=n.Z},6127:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(9439),r=a(7294);var i=function(e){var t=e.controlled,a=e.default,i=(e.name,e.state,r.useRef(void 0!==t).current),o=r.useState(a),c=(0,n.Z)(o,2),l=c[0],s=c[1];return[i?t:l,r.useCallback((function(e){i||s(e)}),[])]}},9485:function(e,t,a){a.d(t,{$I:function(){return f},CI:function(){return m},CJ:function(){return r},Eh:function(){return i},M_:function(){return d},QT:function(){return c},Wi:function(){return o},YJ:function(){return l},ZN:function(){return s},ew:function(){return u}});var n=a(7294),r=function(){return n.createElement("img",{src:"/servicesPage/triangle.svg",style:{width:"4rem",height:"4rem",paddingBottom:".5rem"}})};function i(){return n.createElement("img",{src:"/servicesPage/arrow-services.svg"})}function o(){return n.createElement("img",{src:"/dropdown-arrow.svg"})}function c(){return n.createElement("img",{src:"/arrow-white.svg",style:{width:"13px",height:"13px"}})}function l(e){var t=e.fill;return n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("rect",{width:"24",height:"24",rx:"4",fill:t||"white"}))}function s(){return n.createElement("svg",{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("circle",{cx:"6.5",cy:"7",r:"6.5",fill:"#343434"}))}function u(){return n.createElement("img",{src:"/servicesPage/cardsIcon/img-1.png"})}function m(){return n.createElement("img",{src:"/servicesPage/cardsIcon/img-2.png"})}function d(){return n.createElement("img",{src:"/servicesPage/cardsIcon/img-3.png"})}function f(){return n.createElement("img",{src:"/servicesPage/cardsIcon/img-4.png"})}},2175:function(e,t,a){a.d(t,{Z:function(){return n.Z}});var n=a(6907)},5610:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.variant,a=e.align,r=e.children,i=e.className,o=e.color;return n.createElement("div",{className:"center"===a?"text-center":""},n.createElement("div",{className:"heading"+("white"===o?" heading-white":"")+("64"===t?" size-64":"58"===t?" size-58":"52"===t?" size-52":"48"===t?" size-48":"42"===t?" size-42":"40"===t?" size-40":"37"===t?" size-37":"32"===t?" size-32":"28"===t?" size-28":"26"===t?" size-26":"24"===t?" size-24":"def")+" "+(i||"")},r))}},9235:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n,r=a(7294),i=a(5610),o=a(2175),c=a(8348),l=a(7137),s=a(4320),u=a(1597),m=a(6744),d=a(4334),f=a(2531),v=a(4527),g=a(5584);function p(e){var t=e.options,a=e.label,n=e.name,i=e.disabled,o=e.onChange,c=e.clearSelectFields,l=e.resetSelectClearState,s=r.useState(""),u=s[0],m=s[1];return r.useEffect((function(){c&&m(""),l()}),[c]),r.createElement("div",{className:"mui-select"},r.createElement(v.Z,{variant:"standard",sx:{minWidth:"100%"}},r.createElement(d.Z,{className:i?"disabled":"label",sx:{cursor:"none"}},a),r.createElement(g.Z,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:u,onChange:function(e){m(e.target.value),o(e)},name:n,sx:{":before":{borderBottom:"2px solid #E6E6E6"},":after":{borderBottom:"2px solid #E6E6E6"}},disabled:i},t.map((function(e,t){return r.createElement(f.Z,{value:e.value,key:t,sx:{cursor:"none"}},e.name)})))))}var b=(0,c.ZP)(l.Z)({"& .MuiFormLabel-root":{color:"#2F2F2F",fontFamily:"Poppins",fontSize:"1.25rem",marginBottom:"6px",lineHeight:"1rem"},"& .MuiFormLabel-asterisk.MuiInputLabel-asterisk":{color:"red"},"& label.Mui:after":{color:"#B5B5B5"},"& label.Mui-focused":{color:"#B5B5B5"},"& .MuiInput-underline:after":{borderBottom:"2px solid #183266"},"& .MuiInput-root:before":(n={borderBottom:0},n.borderBottom="2px solid #E6E6E6",n),"& .MuiInput-input":{cursor:"none"}}),h=[{id:1,name:"Product Strategy",value:"Product Strategy",budget:!1},{id:2,name:"Product Design",value:"Product Design",budget:!1},{id:3,name:"Custom Software Development",value:"Custom Software Development",budget:!1},{id:4,name:"Data Engineering",value:"Data Engineering",budget:!1},{id:5,name:"Team Augmentation",value:"Team Augmentation",budget:!1},{id:6,name:"Partnership",value:"Partnership",budget:!0},{id:7,name:"Career",value:"Career",budget:!0},{id:8,name:"Other",value:"Other",budget:!0}],E=[{id:1,name:"$5000-$10000",value:"5000-10000"},{id:2,name:"$10000-$50000",value:"10000-50000"},{id:3,name:"$50000+",value:"50000"}];function w(){var e=(0,r.useState)({name:"",email:"",company:"",help:"",budget:"",message:""}),t=e[0],a=e[1],n=(0,r.useState)(!0),i=n[0],c=n[1],l=r.useState(!1),d=l[0],f=l[1],v=r.useState(!1),g=v[0],w=v[1],x=function(e){var n,r=e.target.value;if("help"===e.target.name){var i=h.filter((function(t){return t.name===e.target.value}));c(i[0].budget)}a(Object.assign({},t,((n={})[e.target.name]=r,n)))};var Z=r.createElement("span",{style:{color:"red"}},"Enter a valid name");return r.createElement(r.Fragment,null,r.createElement(m.Z,{open:d}),r.createElement("form",{name:"contact",onSubmit:function(e){if(e.preventDefault(),!(t.name.length>25)){f(!0);var a=document.forms.contact;fetch("https://script.google.com/macros/s/AKfycbyVDyCG6u76JONl627-Z6vDPNXB8eFSLjlabDx4gUI4Qf_lSGZL40869BC2r50BiX3BVg/exec",{method:"POST",body:new FormData(a)}).then((function(){(0,u.navigate)("/thank-you")})).catch((function(e){return console.error("Error!",e.message)}))}}},r.createElement(s.ZP,{container:!0,rowSpacing:6},r.createElement(s.ZP,{item:!0,md:12,sm:12,xs:12},r.createElement(b,{onChange:x,id:"standard-basic",label:"Name",variant:"standard",name:"name",fullWidth:!0,required:!0,helperText:t.name.length>25&&Z})),r.createElement(s.ZP,{item:!0,md:12,sm:12,xs:12},r.createElement(b,{onChange:x,id:"standard-basic",label:"Email",variant:"standard",name:"email",fullWidth:!0,type:"email",required:!0})),r.createElement(s.ZP,{item:!0,md:12,sm:12,xs:12},r.createElement(b,{onChange:x,id:"standard-basic",label:"Company",variant:"standard",name:"company",fullWidth:!0})),r.createElement(s.ZP,{item:!0,md:12,sm:12,xs:12,className:"form-fields"},r.createElement(p,{options:h,label:"How can we help you?",name:"help",onChange:x,clearSelectFields:g,resetSelectClearState:function(){return w(!1)}})),r.createElement(s.ZP,{item:!0,md:12,sm:12,xs:12,className:"form-fields"},r.createElement(p,{options:E,label:"Budget",name:"budget",disabled:i,onChange:x,clearSelectFields:g,resetSelectClearState:function(){return w(!1)}})),r.createElement(s.ZP,{item:!0,md:12,xs:12,className:"form-fields"},r.createElement("textarea",{onChange:x,name:"message",id:"",cols:"30",rows:"4",placeholder:"Message"}))),r.createElement(s.ZP,{className:"text-right  pe-0 pt-5 mb-2"},r.createElement(o.Z,{text:"CANCEL",variant:"fill",border:"#2f2f2f",bgClr:"#ffffff",clr:"#2f2f2f",className:"me-3",onClick:function(){document.forms.contact.reset(),w(!0)},type:"button"}),r.createElement(o.Z,{text:"SEND MESSAGE",variant:"fill",bgClr:"#f23b48",type:"submit"}))))}var x=a(3710),Z=a(6296),y=a(9485);function S(){return r.createElement("div",{className:"contact-us-main","data-aos":"fade-up","data-aos-duration":"1000","data-aos-anchor-placement":"top-center"},r.createElement(x.Z,{metaTitle:"Contact Us - CodeFulcrum",title:"Contact Us",desc:"Looking for custom software development services? We can help you with that. We offer a wide range of services that can help you with your data engineering needs. Contact us today and let us know how we can help you."}),r.createElement("div",{className:"container position-relative"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement(i.Z,{variant:"40",className:"pb-2 text-capitalize"},"Ready to get started?"),r.createElement("div",{className:"text"},"Get in touch and our team will be right with you!")),r.createElement(s.ZP,{container:!0,className:"col-12"},r.createElement(s.ZP,{item:!0,md:6,sm:12,xs:12,pr:{md:3,sm:0,xs:0},pt:{md:2.5,sm:2,xs:2}},r.createElement("ul",{className:"sub-text pb-4"},r.createElement("li",null," ",r.createElement(y.ZN,null)," We will respond to you within 24 hours."),r.createElement("li",null," ",r.createElement(y.ZN,null),"We’ll sign an NDA if requested."),r.createElement("li",null,r.createElement(y.ZN,null)," You'll be talking to product and tech experts (no account managers).")),r.createElement("div",{className:"m-auto"},r.createElement(Z.S,{src:"../../../static/contact-side.png",placeholder:"none",formats:["auto","webp","avif"],alt:"img",__imageData:a(337)}))),r.createElement(s.ZP,{item:!0,md:6,sm:12,xs:12,pl:{md:3,sm:0,xs:0},pt:{md:0,sm:2.5,xs:2.5}},r.createElement(w,null))))))}var C=a(5258),N=a(3284),P=a.n(N),k=a(628);function B(){(0,r.useEffect)((function(){P().init()}),[]);var e="undefined"!=typeof window&&JSON.parse(window.localStorage.getItem("mouseCoords"));return r.createElement(k.Z,null,r.createElement(S,null),r.createElement(C.l,{coord:e,innerSize:16,outerSize:16,color:"255, 255, 255",outerAlpha:.2,innerScale:.8,outerScale:4,x:!0,clickables:["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link",".swiper-pagination-bullet"]}))}},337:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/251ece9ce3b5bad72f57407cfccb7b30/89660/contact-side.png","srcSet":"/static/251ece9ce3b5bad72f57407cfccb7b30/26b42/contact-side.png 132w,\\n/static/251ece9ce3b5bad72f57407cfccb7b30/f94fd/contact-side.png 263w,\\n/static/251ece9ce3b5bad72f57407cfccb7b30/89660/contact-side.png 526w","sizes":"(min-width: 526px) 526px, 100vw"},"sources":[{"srcSet":"/static/251ece9ce3b5bad72f57407cfccb7b30/9362e/contact-side.avif 132w,\\n/static/251ece9ce3b5bad72f57407cfccb7b30/f2aa4/contact-side.avif 263w,\\n/static/251ece9ce3b5bad72f57407cfccb7b30/fc89f/contact-side.avif 526w","type":"image/avif","sizes":"(min-width: 526px) 526px, 100vw"},{"srcSet":"/static/251ece9ce3b5bad72f57407cfccb7b30/828c4/contact-side.webp 132w,\\n/static/251ece9ce3b5bad72f57407cfccb7b30/820a4/contact-side.webp 263w,\\n/static/251ece9ce3b5bad72f57407cfccb7b30/c6cb7/contact-side.webp 526w","type":"image/webp","sizes":"(min-width: 526px) 526px, 100vw"}]},"width":526,"height":400}')}}]);
//# sourceMappingURL=component---src-pages-contact-js-fed042e03025c31f9ed6.js.map