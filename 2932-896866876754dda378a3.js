"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[2932],{6961:function(e,t,r){var n=(0,r(4040).Z)();t.Z=n},2932:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});var n=r(7294),a=r(4942),o=r(5987),i=r(5900),s=r.n(i),c=r(5513),l=r(9541),u=r(9533);function d(e,t){return Array.isArray(e)?e.includes(t):e===t}var p=n.createContext({});p.displayName="AccordionContext";var f=p,y=r(5893),m=["as","bsPrefix","className","children","eventKey"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,i=e.bsPrefix,c=e.className,p=e.children,h=e.eventKey,b=(0,o.Z)(e,m),O=(0,n.useContext)(f).activeEventKey;return i=(0,l.vE)(i,"accordion-collapse"),(0,y.jsx)(u.Z,v(v({ref:t,in:d(O,h)},b),{},{className:s()(c,i),children:(0,y.jsx)(a,{children:n.Children.only(p)})}))}));b.displayName="AccordionCollapse";var O=b,g=n.createContext({eventKey:""});g.displayName="AccordionItemContext";var j=g,w=["as","bsPrefix","className"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,i=e.bsPrefix,c=e.className,u=(0,o.Z)(e,w);i=(0,l.vE)(i,"accordion-body");var d=(0,n.useContext)(j).eventKey;return(0,y.jsx)(O,{eventKey:d,children:(0,y.jsx)(a,x(x({ref:t},u),{},{className:s()(c,i)}))})}));E.displayName="AccordionBody";var N=E,k=r(3433),D=["as","bsPrefix","className","onClick"];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"button":r,i=e.bsPrefix,c=e.className,u=e.onClick,p=(0,o.Z)(e,D);i=(0,l.vE)(i,"accordion-button");var m=(0,n.useContext)(j).eventKey,h=function(e,t){var r=(0,n.useContext)(f),a=r.activeEventKey,o=r.onSelect,i=r.alwaysOpen;return function(r){var n=e===a?null:e;i&&(n=Array.isArray(a)?a.includes(e)?a.filter((function(t){return t!==e})):[].concat((0,k.Z)(a),[e]):[e]),null==o||o(n,r),null==t||t(r)}}(m,u),v=(0,n.useContext)(f).activeEventKey;return"button"===a&&(p.type="button"),(0,y.jsx)(a,S(S({ref:t,onClick:h},p),{},{"aria-expanded":m===v,className:s()(c,i,!d(v,m)&&"collapsed")}))}));Z.displayName="AccordionButton";var K=Z,A=["as","bsPrefix","className","children","onClick"];function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=n.forwardRef((function(e,t){var r=e.as,n=void 0===r?"h2":r,a=e.bsPrefix,i=e.className,c=e.children,u=e.onClick,d=(0,o.Z)(e,A);return a=(0,l.vE)(a,"accordion-header"),(0,y.jsx)(n,I(I({ref:t},d),{},{className:s()(i,a),children:(0,y.jsx)(K,{onClick:u,children:c})}))}));q.displayName="AccordionHeader";var B=q,R=["as","bsPrefix","className","eventKey"];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,i=e.bsPrefix,c=e.className,u=e.eventKey,d=(0,o.Z)(e,R);i=(0,l.vE)(i,"accordion-item");var p=(0,n.useMemo)((function(){return{eventKey:u}}),[u]);return(0,y.jsx)(j.Provider,{value:p,children:(0,y.jsx)(a,_(_({ref:t},d),{},{className:s()(c,i)}))})}));M.displayName="AccordionItem";var T=M,z=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"];function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=n.forwardRef((function(e,t){var r=(0,c.Ch)(e,{activeKey:"onSelect"}),a=r.as,i=void 0===a?"div":a,u=r.activeKey,d=r.bsPrefix,p=r.className,m=r.onSelect,h=r.flush,v=r.alwaysOpen,b=(0,o.Z)(r,z),O=(0,l.vE)(d,"accordion"),g=(0,n.useMemo)((function(){return{activeEventKey:u,onSelect:m,alwaysOpen:v}}),[u,m,v]);return(0,y.jsx)(f.Provider,{value:g,children:(0,y.jsx)(i,F(F({ref:t},b),{},{className:s()(p,O,h&&"".concat(O,"-flush"))}))})}));J.displayName="Accordion";var U=Object.assign(J,{Button:K,Collapse:O,Item:T,Header:B,Body:N}),V=r(6961),G=r(5610);function L(){var e=[{id:1,heading:"Ideation & Estimation",subHeading:"Understanding your idea and needs",text:"First and foremost we determine the scope of your project and take the time to grasp your product idea and business goals. This includes evaluating potential features, tech solutions, and the time required to deliver them. As a result, we can provide you with a general quotation and timeline."},{id:2,heading:"Product Strategy Consultation",subHeading:"Sharpening your vision and discussing the details",text:"We want to ensure that your idea becomes a roaring success. We put together a session of product strategy consulting services - whichever best meets your needs - to help you determine the right plan and sharpen your vision. At the end of this phase, we have wireframes for your app and the first design drafts, we have gathered development requirements, and we have created the project's basic documentation. Everything is in order!"},{id:3,heading:"Design & Development",subHeading:"Bringing your application idea into reality ",text:"Now it's time to get to work! When the project begins, we finalize the designs and start working on your app. The length of this phase is determined by the size and complexity of the app. It normally takes us 3 months to develop a fully functional MVP - a minimum viable product suitable for market release."},{id:4,heading:"QA & Testing",subHeading:"Ensuring smooth running of the application",text:"We take pride in the quality of our service, which means that our QA testers are an essential part of the team, assisting in the development of a safe, secure, and reliable digital product. Before any commercial user accesses the platform, we put the application through intensive stress testing to guarantee that your product performs as required across all platforms and operating systems."},{id:5,heading:"Product Release",subHeading:"Introducing your product to the market",text:"It's time to shine! We handle the deployment and release of your product as soon as it is completed. Timing is critical in this case; we ensure that every component of the system is launched on time and operates flawlessly, with no downtime."},{id:6,heading:"Maintenance & Support ",subHeading:"Joining forces long-term",text:"We provide ongoing support once your application is live. If you think that your application needs further features or improvements, that's terrific. We get to work right away, while still supporting the current version. However, if you choose to transfer the project to your in-house team, we will facilitate you in planning the process and ensure a smooth handoff."}];return n.createElement("div",{className:"quick-project-services"},n.createElement(V.Z,{mt:6,className:"container"},n.createElement("div",{className:"quick-project-inner","data-aos":"zoom-out","data-aos-duration":"1000","data-aos-anchor-placement":"top-bottom"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement(U,null,!!e&&e.map((function(e){return n.createElement(U.Item,{eventKey:e.id,key:e.id},n.createElement("div",{className:"d-flex align-items-center"},n.createElement(G.Z,{align:"center",variant:"42",className:"number"},e.id),n.createElement("div",{className:"w-100"},n.createElement(U.Header,null,e.heading),n.createElement(U.Body,null,n.createElement("p",{className:"header"},e.subHeading),n.createElement("p",{className:"body-paragraph"},e.text)))))}))))))))}}}]);
//# sourceMappingURL=2932-896866876754dda378a3.js.map