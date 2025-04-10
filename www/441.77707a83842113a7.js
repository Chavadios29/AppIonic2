"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[441],{333:(xe,Z,h)=>{h.d(Z,{c:()=>E,g:()=>y,h:()=>g,o:()=>q});var I=h(467);const g=(_,l)=>null!==l.closest(_),E=(_,l)=>"string"==typeof _&&_.length>0?Object.assign({"ion-color":!0,[`ion-color-${_}`]:!0},l):l,y=_=>{const l={};return(_=>void 0!==_?(Array.isArray(_)?_:_.split(" ")).filter(O=>null!=O).map(O=>O.trim()).filter(O=>""!==O):[])(_).forEach(O=>l[O]=!0),l},te=/^[a-z][a-z0-9+\-.]*:/,q=function(){var _=(0,I.A)(function*(l,O,z,H){if(null!=l&&"#"!==l[0]&&!te.test(l)){const U=document.querySelector("ion-router");if(U)return null!=O&&O.preventDefault(),U.push(l,z,H)}return!1});return function(O,z,H,U){return _.apply(this,arguments)}}()},441:(xe,Z,h)=>{h.r(Z),h.d(Z,{ion_modal:()=>be});var I=h(467),g=h(6317),E=h(7938),G=h(7602),y=h(2397),te=h(7838),q=h(9144),_=h(8438),l=h(9492),O=h(333),z=h(1312),H=h(4346),U=h(1622),k=h(9986),le=h(3351),ce=h(8607),J=h(8476),V=(h(6221),h(1970),h(4379),function(e){return e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",e}(V||{}));const ne={getEngine(){const e=(0,_.g)();if(null!=e&&e.isPluginAvailable("StatusBar"))return e.Plugins.StatusBar},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:(e=(0,I.A)(function*(){const t=this.getEngine();if(!t)return V.Default;const{style:n}=yield t.getInfo();return n}),function(){return e.apply(this,arguments)})},oe=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},pe=()=>{!J.w||J.w.innerWidth>=768||ne.setStyle({style:V.Dark})},re=(e=V.Default)=>{!J.w||J.w.innerWidth>=768||ne.setStyle({style:e})},he=function(){var e=(0,I.A)(function*(t,n){"function"!=typeof t.canDismiss||!(yield t.canDismiss(void 0,l.G))||(n.isRunning()?n.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(n,o){return e.apply(this,arguments)}}(),ie=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,fe=(e,t)=>(0,y.j)(400,e/Math.abs(1.1*t),500),ue=e=>{const{currentBreakpoint:t,backdropBreakpoint:n,expandToScroll:o}=e,s=void 0===n||n<t,i=s?`calc(var(--backdrop-opacity) * ${t})`:"0",a=(0,k.c)("backdropAnimation").fromTo("opacity",0,i);return s&&a.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,k.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:a,contentAnimation:o?void 0:(0,k.c)("contentAnimation").keyframes([{offset:0,opacity:1,maxHeight:100*(1-t)+"%"},{offset:1,opacity:1,maxHeight:100*t+"%"}])}},me=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=`calc(var(--backdrop-opacity) * ${oe(t,n)})`,s=[{offset:0,opacity:o},{offset:1,opacity:0}],i=[{offset:0,opacity:o},{offset:n,opacity:0},{offset:1,opacity:0}],a=(0,k.c)("backdropAnimation").keyframes(0!==n?i:s);return{wrapperAnimation:(0,k.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},ge=(e,t)=>{const{presentingEl:n,currentBreakpoint:o,expandToScroll:s}=t,i=(0,y.g)(e),{wrapperAnimation:a,backdropAnimation:r,contentAnimation:d}=void 0!==o?ue(t):{backdropAnimation:(0,k.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,k.c)().fromTo("transform","translateY(100vh)","translateY(0vh)"),contentAnimation:void 0};r.addElement(i.querySelector("ion-backdrop")),a.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}),!s&&(null==d||d.addElement(e.querySelector(".ion-page")));const c=(0,k.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation([a]).beforeAddWrite(()=>{if(s)return;const m=e.querySelector("ion-footer"),b=e.shadowRoot.querySelector("ion-footer");if(m&&!b){const v=m.clientHeight,x=m.cloneNode(!0);e.shadowRoot.appendChild(x),m.style.setProperty("display","none"),m.setAttribute("aria-hidden","true"),e.querySelector(".ion-page").style.setProperty("padding-bottom",`${v}px`)}});if(d&&c.addAnimation(d),n){const m=window.innerWidth<768,b="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,v=(0,y.g)(n),x=(0,k.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),w=document.body;if(m){const R=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",L=`translateY(${b?"-10px":R}) scale(0.915)`;x.afterStyles({transform:L}).beforeAddWrite(()=>w.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:L,borderRadius:"10px 10px 0 0"}]),c.addAnimation(x)}else if(c.addAnimation(r),b){const p=`translateY(-10px) scale(${b?.915:1})`;x.afterStyles({transform:p}).addElement(v.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:p}]);const D=(0,k.c)().afterStyles({transform:p}).addElement(v.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:p}]);c.addAnimation([x,D])}else a.fromTo("opacity","0","1")}else c.addAnimation(r);return c},ye=(e,t,n=500)=>{const{presentingEl:o,currentBreakpoint:s,expandToScroll:i}=t,a=(0,y.g)(e),{wrapperAnimation:r,backdropAnimation:d}=void 0!==s?me(t):{backdropAnimation:(0,k.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,k.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};d.addElement(a.querySelector("ion-backdrop")),r.addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const c=(0,k.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(r).beforeAddWrite(()=>{if(i)return;const m=e.querySelector("ion-footer");if(m){const b=e.shadowRoot.querySelector("ion-footer");m.style.removeProperty("display"),m.removeAttribute("aria-hidden"),b.style.setProperty("display","none"),b.setAttribute("aria-hidden","true"),e.querySelector(".ion-page").style.removeProperty("padding-bottom")}});if(o){const m=window.innerWidth<768,b="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,v=(0,y.g)(o),x=(0,k.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(R=>{1===R&&(o.style.setProperty("overflow",""),Array.from(w.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(D=>void 0!==D.presentingElement).length<=1&&w.style.setProperty("background-color",""))}),w=document.body;if(m){const R=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",L=`translateY(${b?"-10px":R}) scale(0.915)`;x.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:L,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),c.addAnimation(x)}else if(c.addAnimation(d),b){const p=`translateY(-10px) scale(${b?.915:1})`;x.addElement(v.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:p},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const D=(0,k.c)().addElement(v.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:p},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);c.addAnimation([x,D])}else r.fromTo("opacity","1","0")}else c.addAnimation(d);return c},Ae=(e,t)=>{const{currentBreakpoint:n,expandToScroll:o}=t,s=(0,y.g)(e),{wrapperAnimation:i,backdropAnimation:a,contentAnimation:r}=void 0!==n?ue(t):{backdropAnimation:(0,k.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,k.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),contentAnimation:void 0};a.addElement(s.querySelector("ion-backdrop")),i.addElement(s.querySelector(".modal-wrapper")),o&&(null==r||r.addElement(e.querySelector(".ion-page")));const d=(0,k.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,i]).beforeAddWrite(()=>{if(o)return;const c=e.querySelector("ion-footer"),m=e.shadowRoot.querySelector("ion-footer");if(c&&!m){const b=c.clientHeight,v=c.cloneNode(!0);e.shadowRoot.appendChild(v),c.style.setProperty("display","none"),c.setAttribute("aria-hidden","true"),e.querySelector(".ion-page").style.setProperty("padding-bottom",`${b}px`)}});return r&&d.addAnimation(r),d},De=(e,t)=>{const{currentBreakpoint:n,expandToScroll:o}=t,s=(0,y.g)(e),{wrapperAnimation:i,backdropAnimation:a}=void 0!==n?me(t):{backdropAnimation:(0,k.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,k.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return a.addElement(s.querySelector("ion-backdrop")),i.addElement(s.querySelector(".modal-wrapper")),(0,k.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,i]).beforeAddWrite(()=>{if(o)return;const d=e.querySelector("ion-footer");if(d){const c=e.shadowRoot.querySelector("ion-footer");d.style.removeProperty("display"),d.removeAttribute("aria-hidden"),c.style.setProperty("display","none"),c.setAttribute("aria-hidden","true"),e.querySelector(".ion-page").style.removeProperty("padding-bottom")}})},be=class{constructor(e){(0,g.r)(this,e),this.didPresent=(0,g.c)(this,"ionModalDidPresent",7),this.willPresent=(0,g.c)(this,"ionModalWillPresent",7),this.willDismiss=(0,g.c)(this,"ionModalWillDismiss",7),this.didDismiss=(0,g.c)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,g.c)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,g.c)(this,"didPresent",7),this.willPresentShorthand=(0,g.c)(this,"willPresent",7),this.willDismissShorthand=(0,g.c)(this,"willDismiss",7),this.didDismissShorthand=(0,g.c)(this,"didDismiss",7),this.ionMount=(0,g.c)(this,"ionMount",7),this.lockController=(0,te.c)(),this.triggerController=(0,l.e)(),this.coreDelegate=(0,G.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;"cycle"!==n||void 0!==t||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,l.B)},this.onLifecycle=t=>{const n=this.usersElement,o=Pe[t.type];if(n&&o){const s=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(s)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.expandToScroll=!0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.focusTrap=!0,this.canDismiss=!0}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{el:e}=this;(0,l.j)(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var e;const{breakpoints:t,initialBreakpoint:n,el:o,htmlAttributes:s}=this,i=this.isSheetModal=void 0!==t&&void 0!==n,a=["aria-label","role"];this.inheritedAttributes=(0,y.h)(o,a),void 0!==s&&a.forEach(r=>{s[r]&&(this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{[r]:s[r]}),delete s[r])}),i&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==t&&void 0!==n&&!t.includes(n)&&(0,q.p)("Your breakpoints array must include the initialBreakpoint value."),null!==(e=this.htmlAttributes)&&void 0!==e&&e.id||(0,l.k)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,y.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var n=this;return(0,I.A)(function*(){const{canDismiss:o}=n;return"function"==typeof o?o(e,t):o})()}present(){var e=this;return(0,I.A)(function*(){const t=yield e.lockController.lock();if(e.presented)return void t();const{presentingElement:n,el:o}=e;e.currentBreakpoint=e.initialBreakpoint;const{inline:s,delegate:i}=e.getDelegate(!0);e.ionMount.emit(),e.usersElement=yield(0,G.a)(i,o,e.component,["ion-page"],e.componentProps,s),(0,y.k)(o)?yield(0,z.e)(e.usersElement):e.keepContentsMounted||(yield(0,z.w)()),(0,g.w)(()=>e.el.classList.add("show-modal"));const a=void 0!==n;a&&"ios"===(0,H.b)(e)&&(e.statusBarStyle=yield ne.getStyle(),pe()),yield(0,l.f)(e,"modalEnter",ge,Ae,{presentingEl:n,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint,expandToScroll:e.expandToScroll}),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,y.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(U.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.isSheetModal?e.initSheetGesture():a&&e.initSwipeToClose(),t()})()}initSwipeToClose(){var t,e=this;if("ios"!==(0,H.b)(this))return;const{el:n}=this,o=this.leaveAnimation||H.c.get("modalLeave",ye),s=this.animation=o(n,{presentingEl:this.presentingElement,expandToScroll:this.expandToScroll});if(!(0,E.a)(n))return void(0,E.p)(n);const a=null!==(t=this.statusBarStyle)&&void 0!==t?t:V.Default;this.gesture=((e,t,n,o)=>{const i=e.offsetHeight;let a=!1,r=!1,d=null,c=null,b=!0,v=0;const L=(0,ce.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:l.O,direction:"y",threshold:10,canStart:C=>{const B=C.event.target;return null===B||!B.closest||(d=(0,E.f)(B),d?(c=(0,E.i)(d)?(0,y.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===c.scrollTop):null===B.closest("ion-footer"))},onStart:C=>{const{deltaY:B}=C;b=!d||!(0,E.i)(d)||d.scrollY,r=void 0!==e.canDismiss&&!0!==e.canDismiss,B>0&&d&&(0,E.d)(d),t.progressStart(!0,a?1:0)},onMove:C=>{const{deltaY:B}=C;B>0&&d&&(0,E.d)(d);const Y=C.deltaY/i,K=Y>=0&&r,M=K?.2:.9999,j=K?ie(Y/M):Y,S=(0,y.j)(1e-4,j,M);t.progressStep(S),S>=.5&&v<.5?re(n):S<.5&&v>=.5&&pe(),v=S},onEnd:C=>{const B=C.velocityY,Y=C.deltaY/i,K=Y>=0&&r,M=K?.2:.9999,j=K?ie(Y/M):Y,S=(0,y.j)(1e-4,j,M),F=!K&&(C.deltaY+1e3*B)/i>=.5;let $=F?-.001:.001;F?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),$+=(0,le.g)([0,0],[.32,.72],[0,1],[1,1],S)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),$+=(0,le.g)([0,0],[1,0],[.68,.28],[1,1],S)[0]);const se=fe(F?Y*i:(1-S)*i,B);a=F,L.enable(!1),d&&(0,E.r)(d,b),t.onFinish(()=>{F||L.enable(!0)}).progressEnd(F?1:0,$,se),K&&S>M/4?he(e,t):F&&o()}});return L})(n,s,a,()=>{this.gestureAnimationDismissing=!0,re(this.statusBarStyle),this.animation.onFinish((0,I.A)(function*(){yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const o=this.enterAnimation||H.c.get("modalEnter",ge),s=this.animation=o(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n,expandToScroll:this.expandToScroll});s.progressStart(!0,1);const{gesture:i,moveSheetToBreakpoint:a}=((e,t,n,o,s,i,a=[],r,d,c,m)=>{const x={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==s?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-s,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}],CONTENT_KEYFRAMES:[{offset:0,maxHeight:"100%"},{offset:1,maxHeight:"0%"}]},w=e.querySelector("ion-content"),R=n.clientHeight;let p=o,D=0,L=!1,C=null;const Y=a[a.length-1],K=a[0],M=i.childAnimations.find(f=>"wrapperAnimation"===f.id),j=i.childAnimations.find(f=>"backdropAnimation"===f.id),S=i.childAnimations.find(f=>"contentAnimation"===f.id),X=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove(l.F)},F=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add(l.F)},$=f=>{const u=e.querySelector("ion-footer");if(!u)return;const A=n.nextElementSibling,P="original"===f?A:u,N="original"===f?u:A;N.style.removeProperty("display"),N.removeAttribute("aria-hidden");const W=e.querySelector(".ion-page");"original"===f?W.style.removeProperty("padding-bottom"):W.style.setProperty("padding-bottom",`${N.clientHeight}px`),P.style.setProperty("display","none"),P.setAttribute("aria-hidden","true")};M&&j&&(M.keyframes([...x.WRAPPER_KEYFRAMES]),j.keyframes([...x.BACKDROP_KEYFRAMES]),null==S||S.keyframes([...x.CONTENT_KEYFRAMES]),i.progressStart(!0,1-p),p>s?X():F()),w&&p!==Y&&r&&(w.scrollY=!1);const ke=f=>{const{breakpoint:u,canDismiss:A,breakpointOffset:P,animated:N}=f,W=A&&0===u,T=W?p:u,ae=0!==T;return p=0,M&&j&&(M.keyframes([{offset:0,transform:`translateY(${100*P}%)`},{offset:1,transform:`translateY(${100*(1-T)}%)`}]),j.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${oe(1-P,s)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${oe(T,s)})`}]),S&&S.keyframes([{offset:0,maxHeight:100*(1-P)+"%"},{offset:1,maxHeight:100*T+"%"}]),i.progressStep(0)),ee.enable(!1),!r&&ae&&$("cloned"),W?he(e,i):ae||c(),w&&(T===a[a.length-1]||!r)&&(w.scrollY=!0),new Promise(de=>{i.onFinish(()=>{ae?M&&j?(0,y.r)(()=>{M.keyframes([...x.WRAPPER_KEYFRAMES]),j.keyframes([...x.BACKDROP_KEYFRAMES]),null==S||S.keyframes([...x.CONTENT_KEYFRAMES]),i.progressStart(!0,1-T),p=T,m(p),p>s?X():F(),ee.enable(!0),de()}):(ee.enable(!0),de()):de()},{oneTimeCallback:!0}).progressEnd(1,0,N?500:0)})},ee=(0,ce.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:f=>{const u=(0,E.f)(f.event.target);if(p=d(),!r&&u)return 0===((0,E.i)(u)?(0,y.g)(u).querySelector(".inner-scroll"):u).scrollTop;if(1===p&&u){const A=(0,E.i)(u)?(0,y.g)(u).querySelector(".inner-scroll"):u;return!u.querySelector("ion-refresher")&&0===A.scrollTop}return!0},onStart:f=>{if(L=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===K,!r){const u=(0,E.f)(f.event.target);C=u&&(0,E.i)(u)?(0,y.g)(u).querySelector(".inner-scroll"):u}r||$("original"),f.deltaY>0&&w&&(w.scrollY=!1),(0,y.r)(()=>{e.focus()}),i.progressStart(!0,1-p)},onMove:f=>{if(!r&&f.deltaY<=0&&C)return;f.deltaY>0&&w&&(w.scrollY=!1);const A=a.length>1?1-a[1]:void 0,P=1-p+f.deltaY/R,N=void 0!==A&&P>=A&&L,W=N?.95:.9999,T=N&&void 0!==A?A+ie((P-A)/(W-A)):P;D=(0,y.j)(1e-4,T,W),i.progressStep(D)},onEnd:f=>{if(!r&&f.deltaY<=0&&C&&C.scrollTop>0)return;const P=p-(f.deltaY+350*f.velocityY)/R,N=a.reduce((W,T)=>Math.abs(T-P)<Math.abs(W-P)?T:W);ke({breakpoint:N,breakpointOffset:D,canDismiss:L,animated:!0})}});return{gesture:ee,moveSheetToBreakpoint:ke}})(this.el,this.backdropEl,e,t,n,s,this.sortedBreakpoints,this.expandToScroll,()=>{var r;return null!==(r=this.currentBreakpoint)&&void 0!==r?r:0},()=>this.sheetOnDismiss(),r=>{this.currentBreakpoint!==r&&(this.currentBreakpoint=r,this.ionBreakpointDidChange.emit({breakpoint:r}))});this.gesture=i,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,I.A)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,I.A)(function*(){var o;if(n.gestureAnimationDismissing&&t!==l.G)return!1;const s=yield n.lockController.lock();if("handler"!==t&&!(yield n.checkCanDismiss(e,t)))return s(),!1;const{presentingElement:i}=n;void 0!==i&&"ios"===(0,H.b)(n)&&re(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener(U.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0);const r=yield(0,l.g)(n,e,t,"modalLeave",ye,De,{presentingEl:i,currentBreakpoint:null!==(o=n.currentBreakpoint)&&void 0!==o?o:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint,expandToScroll:n.expandToScroll});if(r){const{delegate:d}=n.getDelegate();yield(0,G.d)(d,n.usersElement),(0,g.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy()}return n.currentBreakpoint=void 0,n.animation=void 0,s(),r})()}onDidDismiss(){return(0,l.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,I.A)(function*(){if(!t.isSheetModal)return void(0,q.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,q.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:o,canDismiss:s,breakpoints:i,animated:a}=t;n!==e&&o&&(t.sheetTransition=o({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==s&&!0!==s&&0===i[0],animated:a}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,I.A)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,I.A)(function*(){const{breakpoints:t,currentBreakpoint:n}=e;if(!t||null==n)return!1;const o=t.filter(r=>0!==r),i=(o.indexOf(n)+1)%o.length,a=o[i];return yield e.setCurrentBreakpoint(a),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:o,handleBehavior:s,inheritedAttributes:i,focusTrap:a,expandToScroll:r}=this,d=!1!==e&&t,c=(0,H.b)(this),m=void 0!==n&&"ios"===c,b="cycle"===s;return(0,g.h)(g.e,Object.assign({key:"e661562f9e4126136cee337e4ab8ca69ac80faae","no-router":!0,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[c]:!0,"modal-default":!m&&!t,"modal-card":m,"modal-sheet":t,"modal-no-expand-scroll":t&&!r,"overlay-hidden":!0,[l.F]:!1===a},(0,O.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,g.h)("ion-backdrop",{key:"9221692e0e111f99e80239ca44faaaed9b288425",ref:v=>this.backdropEl=v,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===c&&(0,g.h)("div",{key:"20def7088d31e5eb13c3f2404c514cd8b74cd966",class:"modal-shadow"}),(0,g.h)("div",Object.assign({key:"b11229330571d4ff7b9136dfdddcd7d759ada876",role:"dialog"},i,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:v=>this.wrapperEl=v}),d&&(0,g.h)("button",{key:"95b2a62477dfbc063a91910f0d37357388cfd914",class:"modal-handle",tabIndex:b?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:b?this.onHandleClick:void 0,part:"handle"}),(0,g.h)("slot",{key:"fba17dfdbdffbfd8992f473f633d172c5124dc19"})))}get el(){return(0,g.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Pe={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var e;be.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer ion-toolbar:first-of-type{padding-top:6px}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}}}]);