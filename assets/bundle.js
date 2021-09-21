!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);const r=Math.PI,i=2*r,o=1e-6,a=i-o;function u(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function c(){return new u}u.prototype=c.prototype={constructor:u,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,i,a){t=+t,n=+n,e=+e,i=+i,a=+a;var u=this._x1,c=this._y1,s=e-t,l=i-n,h=u-t,f=c-n,p=h*h+f*f;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(p>o)if(Math.abs(f*s-l*h)>o&&a){var d=e-u,y=i-c,v=s*s+l*l,_=d*d+y*y,m=Math.sqrt(v),g=Math.sqrt(p),x=a*Math.tan((r-Math.acos((v+p-_)/(2*m*g)))/2),w=x/g,A=x/m;Math.abs(w-1)>o&&(this._+="L"+(t+w*h)+","+(n+w*f)),this._+="A"+a+","+a+",0,0,"+ +(f*d>h*y)+","+(this._x1=t+A*s)+","+(this._y1=n+A*l)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,u,c,s){t=+t,n=+n,s=!!s;var l=(e=+e)*Math.cos(u),h=e*Math.sin(u),f=t+l,p=n+h,d=1^s,y=s?u-c:c-u;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+f+","+p:(Math.abs(this._x1-f)>o||Math.abs(this._y1-p)>o)&&(this._+="L"+f+","+p),e&&(y<0&&(y=y%i+i),y>a?this._+="A"+e+","+e+",0,1,"+d+","+(t-l)+","+(n-h)+"A"+e+","+e+",0,1,"+d+","+(this._x1=f)+","+(this._y1=p):y>o&&(this._+="A"+e+","+e+",0,"+ +(y>=r)+","+d+","+(this._x1=t+e*Math.cos(c))+","+(this._y1=n+e*Math.sin(c))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var s=c,l=function(t){return function(){return t}},h=Math.abs,f=Math.atan2,p=Math.cos,d=Math.max,y=Math.min,v=Math.sin,_=Math.sqrt,m=1e-12,g=Math.PI,x=g/2,w=2*g;function A(t){return t>1?0:t<-1?g:Math.acos(t)}function b(t){return t>=1?x:t<=-1?-x:Math.asin(t)}function C(t){return t.innerRadius}function M(t){return t.outerRadius}function S(t){return t.startAngle}function O(t){return t.endAngle}function T(t){return t&&t.padAngle}function E(t,n,e,r,i,o,a,u){var c=e-t,s=r-n,l=a-i,h=u-o,f=h*c-l*s;if(!(f*f<m))return[t+(f=(l*(n-o)-h*(t-i))/f)*c,n+f*s]}function N(t,n,e,r,i,o,a){var u=t-e,c=n-r,s=(a?o:-o)/_(u*u+c*c),l=s*c,h=-s*u,f=t+l,p=n+h,y=e+l,v=r+h,m=(f+y)/2,g=(p+v)/2,x=y-f,w=v-p,A=x*x+w*w,b=i-o,C=f*v-y*p,M=(w<0?-1:1)*_(d(0,b*b*A-C*C)),S=(C*w-x*M)/A,O=(-C*x-w*M)/A,T=(C*w+x*M)/A,E=(-C*x+w*M)/A,N=S-m,P=O-g,F=T-m,j=E-g;return N*N+P*P>F*F+j*j&&(S=T,O=E),{cx:S,cy:O,x01:-l,y01:-h,x11:S*(i/b-1),y11:O*(i/b-1)}}function P(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function F(t,n){t instanceof Map?(t=[void 0,t],void 0===n&&(n=B)):void 0===n&&(n=j);for(var e,r,i,o,a,u=new I(t),c=[u];e=c.pop();)if((i=n(e.data))&&(a=(i=Array.from(i)).length))for(e.children=i,o=a-1;o>=0;--o)c.push(r=i[o]=new I(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(R)}function j(t){return t.children}function B(t){return Array.isArray(t)?t[1]:null}function L(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function R(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function I(t){this.data=t,this.depth=this.height=0,this.parent=null}I.prototype=F.prototype={constructor:I,count:function(){return this.eachAfter(P)},each:function(t,n){let e=-1;for(const r of this)t.call(n,r,++e,this);return this},eachAfter:function(t,n){for(var e,r,i,o=this,a=[o],u=[],c=-1;o=a.pop();)if(u.push(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r]);for(;o=u.pop();)t.call(n,o,++c,this);return this},eachBefore:function(t,n){for(var e,r,i=this,o=[i],a=-1;i=o.pop();)if(t.call(n,i,++a,this),e=i.children)for(r=e.length-1;r>=0;--r)o.push(e[r]);return this},find:function(t,n){let e=-1;for(const r of this)if(t.call(n,r,++e,this))return r},sum:function(t){return this.eachAfter((function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e}))},sort:function(t){return this.eachBefore((function(n){n.children&&n.children.sort(t)}))},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;t=e.pop(),n=r.pop();for(;t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore((function(n){n.children||t.push(n)})),t},links:function(){var t=this,n=[];return t.each((function(e){e!==t&&n.push({source:e.parent,target:e})})),n},copy:function(){return F(this).eachBefore(L)},[Symbol.iterator]:function*(){var t,n,e,r,i=this,o=[i];do{for(t=o.reverse(),o=[];i=t.pop();)if(yield i,n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e])}while(o.length)}};var q=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)};function D(){}var k=function(t){return null==t?D:function(){return this.querySelector(t)}};function z(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function H(){return[]}function U(t){return function(n){return n.matches(t)}}var V=Array.prototype.find;function W(){return this.firstElementChild}var G=Array.prototype.filter;function Z(){return Array.from(this.children)}var Q=function(t){return new Array(t.length)};function X(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}X.prototype={constructor:X,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var $=function(t){return function(){return t}};function J(t,n,e,r,i,o){for(var a,u=0,c=n.length,s=o.length;u<s;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new X(t,o[u]);for(;u<c;++u)(a=n[u])&&(i[u]=a)}function K(t,n,e,r,i,o,a){var u,c,s,l=new Map,h=n.length,f=o.length,p=new Array(h);for(u=0;u<h;++u)(c=n[u])&&(p[u]=s=a.call(c,c.__data__,u,n)+"",l.has(s)?i[u]=c:l.set(s,c));for(u=0;u<f;++u)s=a.call(t,o[u],u,o)+"",(c=l.get(s))?(r[u]=c,c.__data__=o[u],l.delete(s)):e[u]=new X(t,o[u]);for(u=0;u<h;++u)(c=n[u])&&l.get(p[u])===c&&(i[u]=c)}function Y(t){return t.__data__}function tt(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function nt(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var et="http://www.w3.org/1999/xhtml",rt={svg:"http://www.w3.org/2000/svg",xhtml:et,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},it=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),rt.hasOwnProperty(n)?{space:rt[n],local:t}:t};function ot(t){return function(){this.removeAttribute(t)}}function at(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ut(t,n){return function(){this.setAttribute(t,n)}}function ct(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function st(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function lt(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var ht=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function ft(t){return function(){this.style.removeProperty(t)}}function pt(t,n,e){return function(){this.style.setProperty(t,n,e)}}function dt(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function yt(t,n){return t.style.getPropertyValue(n)||ht(t).getComputedStyle(t,null).getPropertyValue(n)}function vt(t){return function(){delete this[t]}}function _t(t,n){return function(){this[t]=n}}function mt(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function gt(t){return t.trim().split(/^|\s+/)}function xt(t){return t.classList||new wt(t)}function wt(t){this._node=t,this._names=gt(t.getAttribute("class")||"")}function At(t,n){for(var e=xt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function bt(t,n){for(var e=xt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Ct(t){return function(){At(this,t)}}function Mt(t){return function(){bt(this,t)}}function St(t,n){return function(){(n.apply(this,arguments)?At:bt)(this,t)}}wt.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Ot(){this.textContent=""}function Tt(t){return function(){this.textContent=t}}function Et(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function Nt(){this.innerHTML=""}function Pt(t){return function(){this.innerHTML=t}}function Ft(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function jt(){this.nextSibling&&this.parentNode.appendChild(this)}function Bt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Lt(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===et&&n.documentElement.namespaceURI===et?n.createElement(t):n.createElementNS(e,t)}}function Rt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var It=function(t){var n=it(t);return(n.local?Rt:Lt)(n)};function qt(){return null}function Dt(){var t=this.parentNode;t&&t.removeChild(this)}function kt(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function zt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Ht(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function Ut(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function Vt(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function Wt(t,n,e){var r=ht(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function Gt(t,n){return function(){return Wt(this,t,n)}}function Zt(t,n){return function(){return Wt(this,t,n.apply(this,arguments))}}var Qt=[null];function Xt(t,n){this._groups=t,this._parents=n}function $t(){return new Xt([[document.documentElement]],Qt)}Xt.prototype=$t.prototype={constructor:Xt,select:function(t){"function"!=typeof t&&(t=k(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],c=u.length,s=r[i]=new Array(c),l=0;l<c;++l)(o=u[l])&&(a=t.call(o,o.__data__,l,u))&&("__data__"in o&&(a.__data__=o.__data__),s[l]=a);return new Xt(r,this._parents)},selectAll:function(t){var n;"function"==typeof t?t=function(t){return function(){return z(t.apply(this,arguments))}}(t):t=null==(n=t)?H:function(){return this.querySelectorAll(n)};for(var e=this._groups,r=e.length,i=[],o=[],a=0;a<r;++a)for(var u,c=e[a],s=c.length,l=0;l<s;++l)(u=c[l])&&(i.push(t.call(u,u.__data__,l,c)),o.push(u));return new Xt(i,o)},selectChild:function(t){return this.select(null==t?W:function(t){return function(){return V.call(this.children,t)}}("function"==typeof t?t:U(t)))},selectChildren:function(t){return this.selectAll(null==t?Z:function(t){return function(){return G.call(this.children,t)}}("function"==typeof t?t:U(t)))},filter:function(t){var n;"function"!=typeof t&&(n=t,t=function(){return this.matches(n)});for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o)for(var a,u=e[o],c=u.length,s=i[o]=[],l=0;l<c;++l)(a=u[l])&&t.call(a,a.__data__,l,u)&&s.push(a);return new Xt(i,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,Y);var e=n?K:J,r=this._parents,i=this._groups;"function"!=typeof t&&(t=$(t));for(var o=i.length,a=new Array(o),u=new Array(o),c=new Array(o),s=0;s<o;++s){var l=r[s],h=i[s],f=h.length,p=tt(t.call(l,l&&l.__data__,s,r)),d=p.length,y=u[s]=new Array(d),v=a[s]=new Array(d),_=c[s]=new Array(f);e(l,h,y,v,_,p,n);for(var m,g,x=0,w=0;x<d;++x)if(m=y[x]){for(x>=w&&(w=x+1);!(g=v[w])&&++w<d;);m._next=g||null}}return(a=new Xt(a,r))._enter=u,a._exit=c,a},enter:function(){return new Xt(this._enter||this._groups.map(Q),this._parents)},exit:function(){return new Xt(this._exit||this._groups.map(Q),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,a=Math.min(i,o),u=new Array(i),c=0;c<a;++c)for(var s,l=e[c],h=r[c],f=l.length,p=u[c]=new Array(f),d=0;d<f;++d)(s=l[d]||h[d])&&(p[d]=s);for(;c<i;++c)u[c]=e[c];return new Xt(u,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=nt);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],c=u.length,s=i[o]=new Array(c),l=0;l<c;++l)(a=u[l])&&(s[l]=a);s.sort(n)}return new Xt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=it(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?at:ot:"function"==typeof n?e.local?lt:st:e.local?ct:ut)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?ft:"function"==typeof n?dt:pt)(t,n,null==e?"":e)):yt(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?vt:"function"==typeof n?mt:_t)(t,n)):this.node()[t]},classed:function(t,n){var e=gt(t+"");if(arguments.length<2){for(var r=xt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?St:n?Ct:Mt)(e,n))},text:function(t){return arguments.length?this.each(null==t?Ot:("function"==typeof t?Et:Tt)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Nt:("function"==typeof t?Ft:Pt)(t)):this.node().innerHTML},raise:function(){return this.each(jt)},lower:function(){return this.each(Bt)},append:function(t){var n="function"==typeof t?t:It(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:It(t),r=null==n?qt:"function"==typeof n?n:k(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(Dt)},clone:function(t){return this.select(t?zt:kt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=Ht(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?Vt:Ut,r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var c,s=0,l=u.length;s<l;++s)for(r=0,c=u[s];r<a;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?Zt:Gt)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};function Jt(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);if(204!==t.status&&205!==t.status)return t.json()}var Kt=Object.assign({},{arc:function(){var t=C,n=M,e=l(0),r=null,i=S,o=O,a=T,u=null;function c(){var c,l,d=+t.apply(this,arguments),C=+n.apply(this,arguments),M=i.apply(this,arguments)-x,S=o.apply(this,arguments)-x,O=h(S-M),T=S>M;if(u||(u=c=s()),C<d&&(l=C,C=d,d=l),C>m)if(O>w-m)u.moveTo(C*p(M),C*v(M)),u.arc(0,0,C,M,S,!T),d>m&&(u.moveTo(d*p(S),d*v(S)),u.arc(0,0,d,S,M,T));else{var P,F,j=M,B=S,L=M,R=S,I=O,q=O,D=a.apply(this,arguments)/2,k=D>m&&(r?+r.apply(this,arguments):_(d*d+C*C)),z=y(h(C-d)/2,+e.apply(this,arguments)),H=z,U=z;if(k>m){var V=b(k/d*v(D)),W=b(k/C*v(D));(I-=2*V)>m?(L+=V*=T?1:-1,R-=V):(I=0,L=R=(M+S)/2),(q-=2*W)>m?(j+=W*=T?1:-1,B-=W):(q=0,j=B=(M+S)/2)}var G=C*p(j),Z=C*v(j),Q=d*p(R),X=d*v(R);if(z>m){var $,J=C*p(B),K=C*v(B),Y=d*p(L),tt=d*v(L);if(O<g&&($=E(G,Z,Y,tt,J,K,Q,X))){var nt=G-$[0],et=Z-$[1],rt=J-$[0],it=K-$[1],ot=1/v(A((nt*rt+et*it)/(_(nt*nt+et*et)*_(rt*rt+it*it)))/2),at=_($[0]*$[0]+$[1]*$[1]);H=y(z,(d-at)/(ot-1)),U=y(z,(C-at)/(ot+1))}}q>m?U>m?(P=N(Y,tt,G,Z,C,U,T),F=N(J,K,Q,X,C,U,T),u.moveTo(P.cx+P.x01,P.cy+P.y01),U<z?u.arc(P.cx,P.cy,U,f(P.y01,P.x01),f(F.y01,F.x01),!T):(u.arc(P.cx,P.cy,U,f(P.y01,P.x01),f(P.y11,P.x11),!T),u.arc(0,0,C,f(P.cy+P.y11,P.cx+P.x11),f(F.cy+F.y11,F.cx+F.x11),!T),u.arc(F.cx,F.cy,U,f(F.y11,F.x11),f(F.y01,F.x01),!T))):(u.moveTo(G,Z),u.arc(0,0,C,j,B,!T)):u.moveTo(G,Z),d>m&&I>m?H>m?(P=N(Q,X,J,K,d,-H,T),F=N(G,Z,Y,tt,d,-H,T),u.lineTo(P.cx+P.x01,P.cy+P.y01),H<z?u.arc(P.cx,P.cy,H,f(P.y01,P.x01),f(F.y01,F.x01),!T):(u.arc(P.cx,P.cy,H,f(P.y01,P.x01),f(P.y11,P.x11),!T),u.arc(0,0,d,f(P.cy+P.y11,P.cx+P.x11),f(F.cy+F.y11,F.cx+F.x11),T),u.arc(F.cx,F.cy,H,f(F.y11,F.x11),f(F.y01,F.x01),!T))):u.arc(0,0,d,R,L,T):u.lineTo(Q,X)}else u.moveTo(0,0);if(u.closePath(),c)return u=null,c+""||null}return c.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-g/2;return[p(r)*e,v(r)*e]},c.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),c):t},c.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),c):n},c.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:l(+t),c):e},c.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:l(+t),c):r},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),c):i},c.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:l(+t),c):o},c.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:l(+t),c):a},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c},hierarchy:F,json:function(t,n){return fetch(t,n).then(Jt)},partition:function(){var t=1,n=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&function(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,s=t.value&&(r-n)/t.value;++u<c;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*s}(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n);var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(q),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i},select:function(t){return"string"==typeof t?new Xt([[document.querySelector(t)]],[document.documentElement]):new Xt([[t]],Qt)},selectAll:function(t){return"string"==typeof t?new Xt([document.querySelectorAll(t)],[document.documentElement]):new Xt([z(t)],Qt)}}),Yt=500,tn=Math.min(Yt,500)/10.3,nn=Kt.arc().startAngle((function(t){return t.x0})).endAngle((function(t){return t.x1})).padAngle((function(t){return Math.min((t.x1-t.x0)/2,-499.995)})).padRadius(0).innerRadius((function(t){return t.y0*tn+55})).outerRadius((function(t){return Math.max(t.y0*tn,t.y1*tn+55)})),en=Kt.select(".sunburst-text").append("div").attr("class","row tooltips"),rn=function(t){for(var n=[],e=t;e.parent;)n.unshift(e),e=e.parent;return n},on={2016:"#CCCCCC",2017:"#CCCCCC",2018:"#CCCCCC",2019:"#CCCCCC",2020:"#CCCCCC","Advocacy Network Fund":"#277da1","Creative Media Awards":"#f9844a","Data Futures Lab":"#577590","Discretionary Awards":"#f8961e","Fellows in Residence/Senior Fellows":"#4d908e","Gigabit Community Fund":"#f3722c",Hive:"#43aa8b","MOSS (Mozilla Open Source Support)":"#f94144","Mozilla Fellowship":"#90be6d","Mozilla Science Mini Grants":"#c43437","NSF WINS (Wireless Innovations for a Networked Society Challenge)":"#f9c74f","Open Internet Engineering Fellowship":"#af376b","Open News Fellowship":"#2d5480","Open Science Fellowship":"#662d91","Open Web Fellowship":"#234061","OpenDOTT Fellowship":"#485399","Other Programs":"#1e3753","Responsible Computer Science Challenge":"#39669c","Tech + Society Fellowship":"#15273c","Tech Policy Fellowship":"#471f61","Privacy + Security":"#1a1a49","Open Innovation":"#31315c","Digital Inclusion":"#48486d","Web Literacy":"#5f5f80",Decentralization:"#767692","Trustworthy AI":"#8c8ca3","Other/unavailable":"#a3a3b6"};Kt.json("".concat(window.location.origin+window.location.pathname,"/data/sunburst-data.json")).then((function(t){var n=function(t){var n=Kt.hierarchy(t).sum((function(t){return t.children||t.count}));return Kt.partition().size([2*Math.PI,n.height+1])(n)}(t);n.each((function(t){return t.current=t}));var e=Kt.select("svg#sunburst").attr("viewBox","0, 0, ".concat(Yt," ").concat(500)).attr("width",Yt).attr("height",500).append("g").attr("transform","translate(".concat(250,",").concat(250,")"));e.selectAll("path").data(n.descendants().slice(1)).join("path").attr("d",(function(t){return nn(t.current)})).attr("class",(function(t){return"layer-".concat(t.depth)})).style("fill",(function(t){return on[t.data.name]})).style("stroke","#FFF").style("stroke-width",1).on("mouseover",(function(t,n){document.querySelector(".large-text").style.display="none",function(t){var n=t.depth,e=t.data;if(1===n){var r=Math.round(100*e.totalAwardAmount)/100;r=r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),en.html('<div class="column large-12 small-12">\n        <h2 class="title">'.concat(e.name,'</h2>\n      </div>\n      <div class="column large-5 small-12">\n        <h3>Strategy/Focus</h3>\n        <h4>').concat(e.focus,"</h4>\n        <p>").concat(e.description,'</p>\n      </div>\n      <div class="column large-7 small-12">\n        <h3>Types of Programs</h3>\n        <p>').concat(e.children.length,"</p>\n        <h3>Total Award Amount</h3>\n        <p>$").concat(r,"</p>\n        <h3>Countries Represented</h3>\n        <p>").concat(e.awardedCountries.length,"</p>\n      </div>"))}else if(2===n){var i="";e.children.forEach((function(t){i+="<p>".concat(t.name,"</p>")})),en.html('<div class="column large-12 small-12">\n        <span class="parent-data">'.concat(t.parent.data.name,'</span>\n        <h2 class="title">').concat(e.name,'</h2>\n      </div>\n      <div class="column large-5 small-12">\n        <h3>Program Focus</h3>\n        <p>').concat(e.purpose,'</p>\n      </div>\n      <div class="column large-7 small-12">\n        <h3>Geographic Focus</h3>\n        <p>').concat(e.allCountriesPerType.sort().join(", "),"</p>\n        <h3>Number of Awards</h3>\n        <p>").concat(e.count,"</p>\n        <h3>Internet Health Issues</h3>\n        ").concat(i,"\n      </div>"))}else if(3===n){var o="";e.primaryOutput.forEach((function(t){o+="<p>".concat(t,"</p>")})),en.html('<div class="column large-12 small-12">\n        <span class="parent-data">'.concat(t.parent.parent.data.name," | ").concat(t.parent.data.name,'</span>\n        <h2 class="title">').concat(e.name,'</h2>\n      </div>\n      <div class="column large-5 small-12">\n        <h3>Summary</h3>\n        <p>').concat(e.description,'</p>\n      </div>\n      <div class="column large-7 small-12">\n        <h3>Number of Awards</h3>\n        <p>').concat(e.count,"</p>\n        <h3>Types of Outputs</h3>\n        <p>").concat(o,"</p>\n      </div>"))}}(n),function(t){var n=rn(t);Kt.selectAll("path").filter((function(t){return n.indexOf(t)<0})).classed("ancestor",!0)}(n),e.append("text").attr("class","sunburst-center-text").text("Clear").style("fill","#bbbbbb").style("font-size","2rem").attr("x",-40).attr("y",10).on("mouseover",(function(){e.select("text").remove()}))})).on("mouseleave",(function(t){!function(t){var n=rn(t);Kt.selectAll("path").filter((function(t){return n.indexOf(t)<0})).classed("ancestor",!1)}(t),en.html(""),document.querySelector(".large-text").style.display="block",e.select("text").remove()}))})).catch((function(t){console.error("Error loading the data")}))}]);
//# sourceMappingURL=bundle.js.map