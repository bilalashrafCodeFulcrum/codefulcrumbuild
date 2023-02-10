/*! For license information please see 4e77d04fd2d76c3e27ecc12ad6a13a383619061e-ec069518de673a97cc4a.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[3649],{1919:function(e,n,t){t.d(n,{Z:function(){return ee}});var r=t(9439),i=t(4942),o=t(7462),a=t(3366),u=t(7294),c=t(5505),l=t(9236),s=t(8348),p=t(2058),d=t(5973),f=t(955),h=t(93),m=t(3433),v=t(168),b=t(7326),y=t(4578),g=t(1278);function Z(e,n){var t=Object.create(null);return e&&u.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,u.isValidElement)(e)?n(e):e}(e)})),t}function R(e,n,t){return null!=t[n]?t[n]:e.props[n]}function x(e,n,t){var r=Z(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),o=[];for(var a in e)a in n?o.length&&(i[a]=o,o=[]):o.push(a);var u={};for(var c in n){if(i[c])for(r=0;r<i[c].length;r++){var l=i[c][r];u[i[c][r]]=t(l)}u[c]=t(c)}for(r=0;r<o.length;r++)u[o[r]]=t(o[r]);return u}(n,r);return Object.keys(i).forEach((function(o){var a=i[o];if((0,u.isValidElement)(a)){var c=o in n,l=o in r,s=n[o],p=(0,u.isValidElement)(s)&&!s.props.in;!l||c&&!p?l||!c||p?l&&c&&(0,u.isValidElement)(s)&&(i[o]=(0,u.cloneElement)(a,{onExited:t.bind(null,a),in:s.props.in,exit:R(a,"exit",e),enter:R(a,"enter",e)})):i[o]=(0,u.cloneElement)(a,{in:!1}):i[o]=(0,u.cloneElement)(a,{onExited:t.bind(null,a),in:!0,exit:R(a,"exit",e),enter:R(a,"enter",e)})}})),i}var E=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},M=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind((0,b.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,y.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,r=o,Z(t.children,(function(e){return(0,u.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:R(e,"appear",t),enter:R(e,"enter",t),exit:R(e,"exit",t)})}))):x(e,i,o),firstRender:!1}},t.handleExited=function(e,n){var t=Z(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,o.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,a.Z)(e,["component","childFactory"]),i=this.state.contextValue,o=E(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?u.createElement(g.Z.Provider,{value:i},o):u.createElement(g.Z.Provider,{value:i},u.createElement(n,r,o))},n}(u.Component);M.defaultProps={component:"div",childFactory:function(e){return e}};var w=M,k=t(3431),T=t(5893);var C=function(e){var n=e.className,t=e.classes,i=e.pulsate,o=void 0!==i&&i,a=e.rippleX,l=e.rippleY,s=e.rippleSize,p=e.in,d=e.onExited,f=e.timeout,h=u.useState(!1),m=(0,r.Z)(h,2),v=m[0],b=m[1],y=(0,c.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),g={width:s,height:s,top:-s/2+l,left:-s/2+a},Z=(0,c.Z)(t.child,v&&t.childLeaving,o&&t.childPulsate);return p||v||b(!0),u.useEffect((function(){if(!p&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,p,f]),(0,T.jsx)("span",{className:y,style:g,children:(0,T.jsx)("span",{className:Z})})},P=t(9508);var V,S,L,j,D,B,N,F,O=(0,P.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),z=["center","classes","className"],I=(0,k.keyframes)(D||(D=V||(V=(0,v.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),_=(0,k.keyframes)(B||(B=S||(S=(0,v.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),K=(0,k.keyframes)(N||(N=L||(L=(0,v.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),X=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),U=(0,s.ZP)(C,{name:"MuiTouchRipple",slot:"Ripple"})(F||(F=j||(j=(0,v.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),O.rippleVisible,I,550,(function(e){return e.theme.transitions.easing.easeInOut}),O.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),O.child,O.childLeaving,_,550,(function(e){return e.theme.transitions.easing.easeInOut}),O.childPulsate,K,(function(e){return e.theme.transitions.easing.easeInOut})),A=u.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiTouchRipple"}),i=t.center,l=void 0!==i&&i,s=t.classes,d=void 0===s?{}:s,f=t.className,h=(0,a.Z)(t,z),v=u.useState([]),b=(0,r.Z)(v,2),y=b[0],g=b[1],Z=u.useRef(0),R=u.useRef(null);u.useEffect((function(){R.current&&(R.current(),R.current=null)}),[y]);var x=u.useRef(!1),E=u.useRef(null),M=u.useRef(null),k=u.useRef(null);u.useEffect((function(){return function(){clearTimeout(E.current)}}),[]);var C=u.useCallback((function(e){var n=e.pulsate,t=e.rippleX,r=e.rippleY,i=e.rippleSize,o=e.cb;g((function(e){return[].concat((0,m.Z)(e),[(0,T.jsx)(U,{classes:{ripple:(0,c.Z)(d.ripple,O.ripple),rippleVisible:(0,c.Z)(d.rippleVisible,O.rippleVisible),ripplePulsate:(0,c.Z)(d.ripplePulsate,O.ripplePulsate),child:(0,c.Z)(d.child,O.child),childLeaving:(0,c.Z)(d.childLeaving,O.childLeaving),childPulsate:(0,c.Z)(d.childPulsate,O.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:r,rippleSize:i},Z.current)])})),Z.current+=1,R.current=o}),[d]),P=u.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=n.pulsate,i=void 0!==r&&r,o=n.center,a=void 0===o?l||n.pulsate:o,u=n.fakeElement,c=void 0!==u&&u;if("mousedown"===(null==e?void 0:e.type)&&x.current)x.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(x.current=!0);var s,p,d,f=c?null:k.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(a||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var m=e.touches?e.touches[0]:e,v=m.clientX,b=m.clientY;s=Math.round(v-h.left),p=Math.round(b-h.top)}if(a)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2==0&&(d+=1);else{var y=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,g=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(y,2)+Math.pow(g,2))}null!=e&&e.touches?null===M.current&&(M.current=function(){C({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:t})},E.current=setTimeout((function(){M.current&&(M.current(),M.current=null)}),80)):C({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:t})}}),[l,C]),V=u.useCallback((function(){P({},{pulsate:!0})}),[P]),S=u.useCallback((function(e,n){if(clearTimeout(E.current),"touchend"===(null==e?void 0:e.type)&&M.current)return M.current(),M.current=null,void(E.current=setTimeout((function(){S(e,n)})));M.current=null,g((function(e){return e.length>0?e.slice(1):e})),R.current=n}),[]);return u.useImperativeHandle(n,(function(){return{pulsate:V,start:P,stop:S}}),[V,P,S]),(0,T.jsx)(X,(0,o.Z)({className:(0,c.Z)(d.root,O.root,f),ref:k},h,{children:(0,T.jsx)(w,{component:null,exit:!0,children:y})}))})),Y=A,H=t(1351);function W(e){return(0,H.Z)("MuiButtonBase",e)}var $,q=(0,P.Z)("MuiButtonBase",["root","disabled","focusVisible"]),G=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],J=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})(($={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,i.Z)($,"&.".concat(q.disabled),{pointerEvents:"none",cursor:"default"}),(0,i.Z)($,"@media print",{colorAdjust:"exact"}),$)),Q=u.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiButtonBase"}),i=t.action,s=t.centerRipple,m=void 0!==s&&s,v=t.children,b=t.className,y=t.component,g=void 0===y?"button":y,Z=t.disabled,R=void 0!==Z&&Z,x=t.disableRipple,E=void 0!==x&&x,M=t.disableTouchRipple,w=void 0!==M&&M,k=t.focusRipple,C=void 0!==k&&k,P=t.LinkComponent,V=void 0===P?"a":P,S=t.onBlur,L=t.onClick,j=t.onContextMenu,D=t.onDragLeave,B=t.onFocus,N=t.onFocusVisible,F=t.onKeyDown,O=t.onKeyUp,z=t.onMouseDown,I=t.onMouseLeave,_=t.onMouseUp,K=t.onTouchEnd,X=t.onTouchMove,U=t.onTouchStart,A=t.tabIndex,H=void 0===A?0:A,$=t.TouchRippleProps,q=t.touchRippleRef,Q=t.type,ee=(0,a.Z)(t,G),ne=u.useRef(null),te=u.useRef(null),re=(0,d.Z)(te,q),ie=(0,h.Z)(),oe=ie.isFocusVisibleRef,ae=ie.onFocus,ue=ie.onBlur,ce=ie.ref,le=u.useState(!1),se=(0,r.Z)(le,2),pe=se[0],de=se[1];R&&pe&&de(!1),u.useImperativeHandle(i,(function(){return{focusVisible:function(){de(!0),ne.current.focus()}}}),[]);var fe=u.useState(!1),he=(0,r.Z)(fe,2),me=he[0],ve=he[1];u.useEffect((function(){ve(!0)}),[]);var be=me&&!E&&!R;function ye(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;return(0,f.Z)((function(r){return n&&n(r),!t&&te.current&&te.current[e](r),!0}))}u.useEffect((function(){pe&&C&&!E&&me&&te.current.pulsate()}),[E,C,pe,me]);var ge=ye("start",z),Ze=ye("stop",j),Re=ye("stop",D),xe=ye("stop",_),Ee=ye("stop",(function(e){pe&&e.preventDefault(),I&&I(e)})),Me=ye("start",U),we=ye("stop",K),ke=ye("stop",X),Te=ye("stop",(function(e){ue(e),!1===oe.current&&de(!1),S&&S(e)}),!1),Ce=(0,f.Z)((function(e){ne.current||(ne.current=e.currentTarget),ae(e),!0===oe.current&&(de(!0),N&&N(e)),B&&B(e)})),Pe=function(){var e=ne.current;return g&&"button"!==g&&!("A"===e.tagName&&e.href)},Ve=u.useRef(!1),Se=(0,f.Z)((function(e){C&&!Ve.current&&pe&&te.current&&" "===e.key&&(Ve.current=!0,te.current.stop(e,(function(){te.current.start(e)}))),e.target===e.currentTarget&&Pe()&&" "===e.key&&e.preventDefault(),F&&F(e),e.target===e.currentTarget&&Pe()&&"Enter"===e.key&&!R&&(e.preventDefault(),L&&L(e))})),Le=(0,f.Z)((function(e){C&&" "===e.key&&te.current&&pe&&!e.defaultPrevented&&(Ve.current=!1,te.current.stop(e,(function(){te.current.pulsate(e)}))),O&&O(e),L&&e.target===e.currentTarget&&Pe()&&" "===e.key&&!e.defaultPrevented&&L(e)})),je=g;"button"===je&&(ee.href||ee.to)&&(je=V);var De={};"button"===je?(De.type=void 0===Q?"button":Q,De.disabled=R):(ee.href||ee.to||(De.role="button"),R&&(De["aria-disabled"]=R));var Be=(0,d.Z)(ce,ne),Ne=(0,d.Z)(n,Be);var Fe=(0,o.Z)({},t,{centerRipple:m,component:g,disabled:R,disableRipple:E,disableTouchRipple:w,focusRipple:C,tabIndex:H,focusVisible:pe}),Oe=function(e){var n=e.disabled,t=e.focusVisible,r=e.focusVisibleClassName,i=e.classes,o={root:["root",n&&"disabled",t&&"focusVisible"]},a=(0,l.Z)(o,W,i);return t&&r&&(a.root+=" ".concat(r)),a}(Fe);return(0,T.jsxs)(J,(0,o.Z)({as:je,className:(0,c.Z)(Oe.root,b),ownerState:Fe,onBlur:Te,onClick:L,onContextMenu:Ze,onFocus:Ce,onKeyDown:Se,onKeyUp:Le,onMouseDown:ge,onMouseLeave:Ee,onMouseUp:xe,onDragLeave:Re,onTouchEnd:we,onTouchMove:ke,onTouchStart:Me,ref:Ne,tabIndex:R?-1:H,type:Q},De,ee,{children:[v,be?(0,T.jsx)(Y,(0,o.Z)({ref:re,center:m},$)):null]}))})),ee=Q},4817:function(e,n){var t=60103,r=60106,i=60107,o=60108,a=60114,u=60109,c=60110,l=60112,s=60113,p=60120,d=60115,f=60116,h=60121,m=60122,v=60117,b=60129,y=60131;if("function"==typeof Symbol&&Symbol.for){var g=Symbol.for;t=g("react.element"),r=g("react.portal"),i=g("react.fragment"),o=g("react.strict_mode"),a=g("react.profiler"),u=g("react.provider"),c=g("react.context"),l=g("react.forward_ref"),s=g("react.suspense"),p=g("react.suspense_list"),d=g("react.memo"),f=g("react.lazy"),h=g("react.block"),m=g("react.server.block"),v=g("react.fundamental"),b=g("react.debug_trace_mode"),y=g("react.legacy_hidden")}function Z(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case i:case a:case o:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case l:case f:case d:case u:return e;default:return n}}case r:return n}}}},4162:function(e,n,t){t(4817)},955:function(e,n,t){var r=t(3634);n.Z=r.Z},5973:function(e,n,t){var r=t(8127);n.Z=r.Z},93:function(e,n,t){t.d(n,{Z:function(){return d}});var r,i=t(7294),o=!0,a=!1,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function l(){o=!1}function s(){"hidden"===this.visibilityState&&a&&(o=!0)}function p(e){var n,t,r,i=e.target;try{return i.matches(":focus-visible")}catch(a){}return o||(t=(n=i).type,!("INPUT"!==(r=n.tagName)||!u[t]||n.readOnly)||"TEXTAREA"===r&&!n.readOnly||!!n.isContentEditable)}var d=function(){var e=i.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",c,!0),n.addEventListener("mousedown",l,!0),n.addEventListener("pointerdown",l,!0),n.addEventListener("touchstart",l,!0),n.addEventListener("visibilitychange",s,!0))}),[]),n=i.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!p(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(a=!0,window.clearTimeout(r),r=window.setTimeout((function(){a=!1}),100),n.current=!1,!0)},ref:e}}},168:function(e,n,t){function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=4e77d04fd2d76c3e27ecc12ad6a13a383619061e-ec069518de673a97cc4a.js.map