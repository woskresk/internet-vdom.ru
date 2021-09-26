// source --> https://internet-vdom.ru/wp-content/plugins/ewww-image-optimizer/includes/lazysizes.min.js?ver=492.0 
var ewww_webp_supported=!1;function lazysizesWebP(e,t){var a=new Image;a.onload=function(){ewww_webp_supported=0<a.width&&0<a.height,t()},a.onerror=function(){t()},a.src="data:image/webp;base64,"+{alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[e]}function constrainSrc(e,t,a,i){if(null===e)return e;var r=/w=(\d+)/,n=/fit=(\d+),(\d+)/,o=/resize=(\d+),(\d+)/,s=decodeURIComponent(e);if(void 0===eio_lazy_vars)var eio_lazy_vars={exactdn_domain:".exactdn.com"};if(0<e.search("\\?")&&0<e.search(eio_lazy_vars.exactdn_domain)){var l=o.exec(s);if(l&&t<l[1])return s.replace(o,"resize="+t+","+a);var d=r.exec(e);if(d&&t<=d[1])return"bg-cover"===i?e.replace(r,"resize="+t+","+a):e.replace(r,"w="+t);var c=n.exec(s);if(c&&t<c[1])return"bg-cover"===i?e.replace(r,"resize="+t+","+a):s.replace(n,"fit="+t+","+a);if(!d&&!c&&!l)return"img"===i?e+"&fit="+t+","+a:"bg-cover"===i?e+"?resize="+t+","+a:t<a?e+"&h="+a:e+"&w="+t}return-1==e.search("\\?")&&0<e.search(eio_lazy_vars.exactdn_domain)?"img"===i?e+"?fit="+t+","+a:"bg-cover"===i?e+"?resize="+t+","+a:t<a?e+"?h="+a:e+"?w="+t:e}window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.init=!1,function(e,t){var a=function(i,A){"use strict";if(!A.getElementsByClassName)return;var g,z,v=A.documentElement,n=i.Date,r=i.HTMLPictureElement,o="addEventListener",h="getAttribute",t=i[o],u=i.setTimeout,a=i.requestAnimationFrame||u,s=i.requestIdleCallback,f=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],d={},m=Array.prototype.forEach,c=function(e,t){return d[t]||(d[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),d[t].test(e[h]("class")||"")&&d[t]},p=function(e,t){c(e,t)||e.setAttribute("class",(e[h]("class")||"").trim()+" "+t)},y=function(e,t){var a;(a=c(e,t))&&e.setAttribute("class",(e[h]("class")||"").replace(a," "))},b=function(t,a,e){var i=e?o:"removeEventListener";e&&b(t,a),l.forEach(function(e){t[i](e,a)})},w=function(e,t,a,i,r){var n=A.createEvent("Event");return a||(a={}),a.instance=g,n.initEvent(t,!i,!r),n.detail=a,e.dispatchEvent(n),n},C=function(e,t){var a;!r&&(a=i.picturefill||z.pf)?(t&&t.src&&!e[h]("srcset")&&e.setAttribute("srcset",t.src),a({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},_=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,a){for(a=a||e.offsetWidth;a<z.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},x=(B=[],R=[],L=B,N=function(){var e=L;for(L=B.length?R:B,M=!(S=!0);e.length;)e.shift()();S=!1},Q=function(e,t){S&&!t?e.apply(this,arguments):(L.push(e),M||(M=!0,(A.hidden?u:a)(N)))},Q._lsFlush=N,Q),e=function(a,e){return e?function(){x(a)}:function(){var e=this,t=arguments;x(function(){a.apply(e,t)})}},W=function(e){var t,a,i=function(){t=null,e()},r=function(){var e=n.now()-a;e<99?u(r,99-e):(s||i)(i)};return function(){a=n.now(),t||(t=u(r,99))}};var S,M,B,R,L,N,Q;!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in z=i.lazySizesConfig||i.lazysizesConfig||{},t)e in z||(z[e]=t[e]);i.lazySizesConfig=z,u(function(){z.init&&D()})}();var P=(se=/^img$/i,le=/^iframe$/i,de="onscroll"in i&&!/(gle|ing)bot/.test(navigator.userAgent),ce=0,ue=0,fe=-1,Ae=function(e){ue--,(!e||ue<0||!e.target)&&(ue=0)},ge=function(e){return null==Z&&(Z="hidden"==_(A.body,"visibility")),Z||"hidden"!=_(e.parentNode,"visibility")&&"hidden"!=_(e,"visibility")},ze=function(e,t){var a,i=e,r=ge(e);for(V-=t,K+=t,X-=t,Y+=t;r&&(i=i.offsetParent)&&i!=A.body&&i!=v;)(r=0<(_(i,"opacity")||1))&&"visible"!=_(i,"overflow")&&(a=i.getBoundingClientRect(),r=Y>a.left&&X<a.right&&K>a.top-1&&V<a.bottom+1);return r},ve=function(){var e,t,a,i,r,n,o,s,l,d,c,u,f=g.elements;if((G=z.loadMode)&&ue<8&&(e=f.length)){for(t=0,fe++,d=!z.expand||z.expand<1?500<v.clientHeight&&500<v.clientWidth?500:370:z.expand,g._defEx=d,c=d*z.expFactor,u=z.hFac,Z=null,ce<c&&ue<1&&2<fe&&2<G&&!A.hidden?(ce=c,fe=0):ce=1<G&&1<fe&&ue<6?d:0;t<e;t++)if(f[t]&&!f[t]._lazyRace)if(de)if((s=f[t][h]("data-expand"))&&(n=1*s)||(n=ce),l!==n&&(q=innerWidth+n*u,j=innerHeight+n,o=-1*n,l=n),a=f[t].getBoundingClientRect(),(K=a.bottom)>=o&&(V=a.top)<=j&&(Y=a.right)>=o*u&&(X=a.left)<=q&&(K||Y||X||V)&&(z.loadHidden||ge(f[t]))&&(J&&ue<3&&!s&&(G<3||fe<4)||ze(f[t],n))){if(Ce(f[t]),r=!0,9<ue)break}else!r&&J&&!i&&ue<4&&fe<4&&2<G&&(I[0]||z.preloadAfterLoad)&&(I[0]||!s&&(K||Y||X||V||"auto"!=f[t][h](z.sizesAttr)))&&(i=I[0]||f[t]);else Ce(f[t]);i&&!r&&Ce(i)}},ee=ve,ae=0,ie=z.throttleDelay,re=z.ricTimeout,ne=function(){te=!1,ae=n.now(),ee()},oe=s&&49<re?function(){s(ne,{timeout:re}),re!==z.ricTimeout&&(re=z.ricTimeout)}:e(function(){u(ne)},!0),he=function(e){var t;(e=!0===e)&&(re=33),te||(te=!0,(t=ie-(n.now()-ae))<0&&(t=0),e||t<9?oe():u(oe,t))},me=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(Ae(e),p(t,z.loadedClass),y(t,z.loadingClass),b(t,ye),w(t,"lazyloaded"))},pe=e(me),ye=function(e){pe({target:e.target})},be=function(e){var t,a=e[h](z.srcsetAttr);(t=z.customMedia[e[h]("data-media")||e[h]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},we=e(function(e,t,a,i,r){var n,o,s,l,d,c;(d=w(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(a?p(e,z.autosizesClass):e.setAttribute("sizes",i)),o=e[h](z.srcsetAttr),n=e[h](z.srcAttr),r&&(s=e.parentNode,l=s&&f.test(s.nodeName||"")),c=t.firesLoad||"src"in e&&(o||n||l),d={target:e},p(e,z.loadingClass),c&&(clearTimeout(O),O=u(Ae,2500),b(e,ye,!0)),l&&m.call(s.getElementsByTagName("source"),be),o?e.setAttribute("srcset",o):n&&!l&&(le.test(e.nodeName)?function(t,a){try{t.contentWindow.location.replace(a)}catch(e){t.src=a}}(e,n):e.src=n),r&&(o||l)&&C(e,{src:n})),e._lazyRace&&delete e._lazyRace,y(e,z.lazyClass),x(function(){(!c||e.complete&&1<e.naturalWidth)&&(me(d),e._lazyCache=!0,u(function(){"_lazyCache"in e&&delete e._lazyCache},9))},!0)}),Ce=function(e){var t,a=se.test(e.nodeName),i=a&&(e[h](z.sizesAttr)||e[h]("sizes")),r="auto"==i;(!r&&J||!a||!e[h]("src")&&!e.srcset||e.complete||c(e,z.errorClass)||!c(e,z.lazyClass))&&(t=w(e,"lazyunveilread").detail,r&&k.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ue++,we(e,t,r,i,a))},_e=function(){if(!J)if(n.now()-$<999)u(_e,999);else{var e=W(function(){z.loadMode=3,he()});J=!0,z.loadMode=3,he(),t("scroll",function(){3==z.loadMode&&(z.loadMode=2),e()},!0)}},{_:function(){$=n.now(),g.elements=A.getElementsByClassName(z.lazyClass),I=A.getElementsByClassName(z.lazyClass+" "+z.preloadClass),t("scroll",he,!0),t("resize",he,!0),i.MutationObserver?new MutationObserver(he).observe(v,{childList:!0,subtree:!0,attributes:!0}):(v[o]("DOMNodeInserted",he,!0),v[o]("DOMAttrModified",he,!0),setInterval(he,999)),t("hashchange",he,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){A[o](e,he,!0)}),/d$|^c/.test(A.readyState)?_e():(t("load",_e),A[o]("DOMContentLoaded",he),u(_e,2e4)),g.elements.length?(ve(),x._lsFlush()):he()},checkElems:he,unveil:Ce}),k=(H=e(function(e,t,a,i){var r,n,o;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),f.test(t.nodeName||""))for(r=t.getElementsByTagName("source"),n=0,o=r.length;n<o;n++)r[n].setAttribute("sizes",i);a.detail.dataAttr||C(e,a.detail)}),U=function(e,t,a){var i,r=e.parentNode;r&&(a=E(e,r,a),(i=w(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=i.detail.width)&&a!==e._lazysizesWidth&&H(e,r,i,a))},F=W(function(){var e,t=T.length;if(t)for(e=0;e<t;e++)U(T[e])}),{_:function(){T=A.getElementsByClassName(z.autosizesClass),t("resize",F)},checkElems:F,updateElem:U}),D=function(){D.i||(D.i=!0,k._(),P._())};var T,H,U,F;var I,J,O,G,$,q,j,V,X,Y,K,Z,ee,te,ae,ie,re,ne,oe,se,le,de,ce,ue,fe,Ae,ge,ze,ve,he,me,pe,ye,be,we,Ce,_e;return g={cfg:z,autoSizer:k,loader:P,init:D,uP:C,aC:p,rC:y,hC:c,fire:w,gW:E,rAF:x}}(e,e.document);e.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}(window),lazysizesWebP("alpha",lazySizes.init),document.addEventListener("lazybeforeunveil",function(e){var t=e.target,a=t.getAttribute("data-srcset");if(!a&&t.naturalWidth&&1<t.naturalWidth&&1<t.naturalHeight){var i=window.devicePixelRatio||1,r=1.25*t.clientWidth<t.naturalWidth,n=1.25*t.clientHeight<t.naturalHeight;if(r||n){var o=Math.round(t.offsetWidth*i),s=Math.round(t.offsetHeight*i),l=t.getAttribute("data-src"),d=t.getAttribute("data-src-webp");ewww_webp_supported&&d&&-1==l.search("webp=1")&&(l=d);var c=constrainSrc(l,o,s,"img");c&&l!=c&&t.setAttribute("data-src",c)}}if(ewww_webp_supported){if(a&&-1<a.search("webp=1"))return;if(a){var u=t.getAttribute("data-srcset-webp");u&&t.setAttribute("data-srcset",u)}if((l=t.getAttribute("data-src"))&&-1<l.search("webp=1"))return;if(!(d=t.getAttribute("data-src-webp")))return;t.setAttribute("data-src",d)}}),function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(s,i,l){"use strict";var d,c;i.addEventListener&&(d=function(e,t){var a=i.createElement("img");a.onload=function(){a.onload=null,a.onerror=null,a=null,t()},a.onerror=a.onload,a.src=e,a&&a.complete&&a.onload&&a.onload()},addEventListener("lazybeforeunveil",function(e){var t,a,i;if(e.detail.instance==l&&!e.defaultPrevented){if("none"==e.target.preload&&(e.target.preload="auto"),t=e.target.getAttribute("data-bg")){ewww_webp_supported&&(a=e.target.getAttribute("data-bg-webp"))&&(t=a);var r=s.devicePixelRatio||1,n=Math.round(e.target.offsetWidth*r),o=Math.round(e.target.offsetHeight*r);t=s.lazySizes.hC(e.target,"wp-block-cover")?constrainSrc(t,n,o,"bg-cover"):constrainSrc(t,n,o,"bg"),e.detail.firesLoad=!0,d(t,function(){e.target.style.backgroundImage="url("+(c.test(t)?JSON.stringify(t):t)+")",e.detail.firesLoad=!1,l.fire(e.target,"_lazyloaded",{},!0,!0)})}(i=e.target.getAttribute("data-poster"))&&(e.detail.firesLoad=!0,d(i,function(){e.target.poster=i,e.detail.firesLoad=!1,l.fire(e.target,"_lazyloaded",{},!0,!0)}))}},!(c=/\(|\)|\s|'/)))});