/*! For license information please see component---src-pages-blog-js-fd03f3363f20b60f07d4.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[3007],{9591:function(e,t,r){var n=r(8).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(C){u=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=N(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=f;var m={};function d(){}function p(){}function g(){}var v={};u(v,s,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(_([])));b&&b!==r&&a.call(b,s)&&(v=b);var w=g.prototype=d.prototype=Object.create(v);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,i,s,c){var l=h(e[o],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,s,c)}),(function(e){r("throw",e,s,c)})):t.resolve(f).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,c)}))}c(l.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function N(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=h(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function _(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=g,u(w,"constructor",g),u(g,"constructor",p),p.displayName=u(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},x(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(w),u(w,l,"Generator"),u(w,s,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7757:function(e,t,r){var n=r(9591)();e.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},6961:function(e,t,r){"use strict";var n=(0,r(4040).Z)();t.Z=n},4040:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7462),o=r(3366),a=r(7294),i=r(5505),s=r(1727),c=r(2037),l=r(8297),u=r(7120),f=r(5893),h=["className","component"];function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,r=e.defaultClassName,m=void 0===r?"MuiBox-root":r,d=e.generateClassName,p=e.styleFunctionSx,g=void 0===p?c.Z:p,v=(0,s.ZP)("div")(g),y=a.forwardRef((function(e,r){var a=(0,u.Z)(t),s=(0,l.Z)(e),c=s.className,p=s.component,g=void 0===p?"div":p,y=(0,o.Z)(s,h);return(0,f.jsx)(v,(0,n.Z)({as:g,ref:r,className:(0,i.Z)(c,d?d(m):m),theme:a},y))}));return y}},8001:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),o=r(4320),a=r(3010),i=r(1597);var s=function(e){var t=e.cardData,r=e.col,s=e.gap;return n.createElement("div",{className:"blog-card"},n.createElement(o.ZP,{container:!0,spacing:s,justifyContent:"center"},t.map((function(e,t){return n.createElement(o.ZP,{item:!0,md:r,key:t},n.createElement(i.Link,{to:"/blogs/"+e.id,style:{textDecoration:"none"}},n.createElement("div",{className:"blog-single-card"},n.createElement("div",{className:"img-wrapper text-center"},n.createElement("img",{src:e.img,alt:"img",className:""})),n.createElement("p",{className:"date-card"},e.date),n.createElement("p",{className:"header-card"},e.header),n.createElement("p",{className:"text-card"},(0,a.VN)(e.text,170)))))}))))}},7480:function(e,t){"use strict";t.Z=[{id:1,img:"/blog/blogs-imgs/blog-1.png",date:"02 Jan, 2023",header:"Custom Made Software Advantages and Disadvantages",text:"There are basically two alternatives available when it comes to using specialized software: bespoke software and off-the-shelf software. Which option is preferable is unclear. It depends on the objectives of your business."},{id:3,img:"/blog/blogs-imgs/blog-3.png",date:"10 Jan, 2023",header:"Cutting Edge Technologies for Custom Software Development",text:"Although the world is changing quickly, the high-tech industry changes twice as quickly. Custom software development firms make every effort to create high-quality solutions that meet their clients' objectives while also leveraging cutting-edge technology to go above and beyond their"},{id:4,img:"/blog/blogs-imgs/blog-4.png",date:"17 Jan, 2023",header:"What can I expect from a Custom Software Developer?",text:"The practice of creating software applications specifically for a person or business is known as custom software development. Contrary to commercial off-the-shelf (COTS) software, bespoke alternatives typically focus on a particular issue."},{id:5,img:"/blog/blogs-imgs/blog-5.png",date:"20 Jan, 2023",header:"What is Agile Project Management in Software Development?",text:"One of the cutting-edge approaches to project management presented recently is agile project management. It is widely used in the management of software development projects. To understand agile project management, it is helpful to compare it to the software development process."},{id:6,img:"/blog/blogs-imgs/blog-6.png",date:"24 Jan, 2023",header:"Which Kind of Industries Prefer Custom Made Software?",text:"Without software, running a firm is currently impossible. Every business uses it, whether for straightforward tasks like email management or easy research, or for more complicated ones like employee time tracking, bookkeeping, or project management."},{id:7,img:"/blog/blogs-imgs/blog-7.png",date:"27 Jan, 2023",header:"Why do you Need a Custom Software Solution for your Business?",text:"Businesses are looking for novel methods to stay on top of trends as a result of advancing technology and rising client expectations. In this context, a specific kind of software has become more well-known as maybe the finest strategy for staying ahead of the curve."},{id:8,img:"/blog/blogs-imgs/blog-8.png",date:"1 Feb, 2023",header:"What is Custom Software Development and why is it Important?",text:"Whether you're a group of software engineers, an entrepreneur, or the owner of a company, you recognize the value of efficient software administration and development."},{id:9,img:"/blog/blogs-imgs/blog-9.png",date:"03 Feb, 2023",header:"Cutting Edge Technologies for Custom Software Development",text:"Every successful business has a strong custom software solution at its core. Businesses from every sector utilize software to improve a range of their business operations, from processing transactions to data analytics."},{id:10,img:"/blog/blogs-imgs/blog-10.png",date:"07 Feb, 2023",header:"What is the Average cost of Custom Software Development?",text:"Custom software development can be a significant investment for a business, but it can also bring a lot of value by improving efficiency, streamlining processes, and increasing revenue."}]},5610:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294);function o(e){var t=e.variant,r=e.align,o=e.children,a=e.className,i=e.color;return n.createElement("div",{className:"center"===r?"text-center":""},n.createElement("div",{className:"heading"+("white"===i?" heading-white":"")+("64"===t?" size-64":"58"===t?" size-58":"52"===t?" size-52":"48"===t?" size-48":"42"===t?" size-42":"40"===t?" size-40":"37"===t?" size-37":"32"===t?" size-32":"28"===t?" size-28":"26"===t?" size-26":"24"===t?" size-24":"def")+" "+(a||"")},o))}},3010:function(e,t,r){"use strict";r.d(t,{VN:function(){return i},Yb:function(){return c},jj:function(){return u}});var n=r(5861),o=r(7757),a=r.n(o),i=function(e,t){var r=e.length>t?"...":"";return""+e.substring(0,t)+r},s=function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result.split(",")[1])},n.onerror=function(e){return r(e)}}))},c=function(e){return fetch("https://vast-jeans-dog.cyclic.app/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},l=function(e){void 0===e&&(e="test.pdf");var t=e.split(".");return t[t.length-1]};function u(e,t,r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function e(t,r,n){var o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n&&(n="file"),t){e.next=3;break}return e.abrupt("return",null);case 3:return r||(r=t.name),o=l(t.name),e.next=7,s(t);case 7:return i=e.sent,e.abrupt("return",{filename:r+"-"+n+"."+o,type:t.type,disposition:"attachment",content:i});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5498:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(7294),o=r(5610),a=r(6961);function i(e){var t=e.text,r=e.header;return n.createElement("div",{className:"hero-bg","data-aos":"fade-up","data-aos-anchor-placement":"top-center","data-aos-duration":"1000"},n.createElement("div",{className:"container position-relative"},n.createElement("div",{className:"row pb-4"},n.createElement("div",{className:"col-lg-6 col-sm-12 col-xs-12  hero-text-column-blog"},n.createElement(o.Z,{variant:"58",className:"header text-capitalize"},r),n.createElement(a.Z,{className:"hero-text-blog"},t)),n.createElement("div",{className:"col-lg-6  col-sm-12  col-xs-12 "},n.createElement("div",{className:"hero-img-blog position-relative"},n.createElement("img",{src:"/blog/hero.svg",alt:"",className:"img-fluid display-tablet-none"}))))))}var s=r(4320),c=r(8001),l=r(7480),u=r(1597);var f=function(){return n.createElement("div",{className:"container"},n.createElement("div",{className:"blog-display"},n.createElement("div",{className:"first-blog-wrapper"},n.createElement(u.Link,{to:"/blogs/2",style:{textDecoration:"none"}},n.createElement(s.ZP,{container:!0,spacing:4,justifyContent:"center"},n.createElement(s.ZP,{item:!0,md:6},n.createElement("img",{src:"/blog/blog-2.png",alt:"img",className:"header-blog-img"})),n.createElement(s.ZP,{item:!0,md:6},n.createElement("p",{className:"date"},"10 Jan, 2023"),n.createElement("p",{className:"header"},"Cutting Edge Technologies for Custom Software Development"),n.createElement("p",{className:"text"},"Although the world is changing quickly, the high-tech industry changes twice as quickly. Custom software development firms make every effort to create high-quality solutions that meet their clients' objectives while also leveraging cutting-edge technology their..."))))),n.createElement("div",{className:"card-wrapper"},n.createElement(c.Z,{cardData:l.Z,col:4,gap:4}))))};var h=function(){return n.createElement("div",null,n.createElement(i,{header:"The latest ideas from experts in digital enterprise technology",text:"CodeFulcrum is a software development company located in USA and Pakistan. We are committed to developing innovative software solutions for Startups, SMEs and Enterprises all across the globe, helping them grow their businesses using latest technology solutions."}),n.createElement(f,null))},m=r(5258),d=r(3284),p=r.n(d),g=r(2926);function v(){(0,n.useEffect)((function(){p().init()}),[]);var e="undefined"!=typeof window&&JSON.parse(window.localStorage.getItem("mouseCoords"));return n.createElement(g.Z,null,n.createElement(h,null),n.createElement(m.l,{coord:e,innerSize:16,outerSize:16,color:"255, 255, 255",outerAlpha:.2,innerScale:.8,outerScale:4,x:!0,clickables:["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link",".swiper-pagination-bullet"]}))}},5861:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,c,"next",e)}function c(e){n(i,o,a,s,c,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-blog-js-fd03f3363f20b60f07d4.js.map