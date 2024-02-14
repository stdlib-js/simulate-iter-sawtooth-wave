// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSawtoothWave=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=s.call(e,h,"$1e"),e=s.call(e,w,"e"),e=s.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,v,"e-0$1"),r.alternate&&(e=s.call(e,d,"$1."),e=s.call(e,b,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function A(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+A(e):A(e)+r}var j=String.fromCharCode,O=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function N(r){var t,n,e,i,a,c,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(i=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,O(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,O(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!O(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=O(a)?String(e.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,n,e,o;for(n=[],o=0,e=S.exec(r);e;)(t=r.slice(o,S.lastIndex-e[0].length)).length&&n.push(t),n.push(T(e)),o=S.lastIndex,e=S.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function U(r){return"string"==typeof r}function x(r){var t,n;if(!U(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[I(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return N.apply(null,t)}var k,P=Object.prototype,V=P.toString,G=P.__defineGetter__,H=P.__defineSetter__,L=P.__lookupGetter__,W=P.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(L.call(r,t)||W.call(r,t)?(e=r.__proto__,r.__proto__=P,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,n.get),a&&H&&H.call(r,t,n.set),r};var $=k;function C(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var B=Object.prototype.hasOwnProperty;function R(r,t){return null!=r&&B.call(r,t)}var M="function"==typeof Symbol?Symbol:void 0;var Z="function"==typeof M&&"symbol"==typeof M("foo")&&R(M,"iterator")&&"symbol"==typeof M.iterator?Symbol.iterator:null;var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q="function"==typeof M?M.toStringTag:"";var D=Y()?function(r){var t,n,e;if(null==r)return z.call(r);n=r[q],t=R(r,q);try{r[q]=void 0}catch(t){return z.call(r)}return e=z.call(r),t?r[q]=n:delete r[q],e}:function(r){return z.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,t,n;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(J&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var tr=Q,nr="function"==typeof Float64Array;var er="function"==typeof Float64Array?Float64Array:null;var or,ir="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,t,n;if("function"!=typeof er)return!1;try{t=new er([1,3.14,-3.14,NaN]),n=t,r=(nr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=or,ur="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var cr,lr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,256,257]),n=t,r=(ur&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=cr,sr="function"==typeof Uint16Array;var yr="function"==typeof Uint16Array?Uint16Array:null;var vr,dr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var br,gr={uint16:vr,uint8:pr};(br=new gr.uint16(1))[0]=4660;var wr=52===new gr.uint8(br.buffer)[0],hr=!0===wr?1:0,mr=new ar(1),Ar=new tr(mr.buffer);function Fr(r){return mr[0]=r,Ar[hr]}var jr="function"==typeof Float64Array;var Or="function"==typeof Float64Array?Float64Array:null;var Er,_r="function"==typeof Float64Array?Float64Array:void 0;Er=function(){var r,t,n;if("function"!=typeof Or)return!1;try{t=new Or([1,3.14,-3.14,NaN]),n=t,r=(jr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Nr=!0===wr?0:1,Sr=new Er(1),Tr=new tr(Sr.buffer);function Ir(r,t){return Sr[0]=r,Tr[Nr]=t>>>0,Sr[0]}function Ur(r,t,n){var e,o,i,a,u,f,c,l,p;return(o=2147483647&(e=Fr(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(p=.7853981633974483-r)+(l=3061616997868383e-32-t),t=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(p=r*r)*p),c=p*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=t+p*((u=p*r)*(a+c)+t),l=r+(a+=.3333333333333341*u),o>=1072010280?(1-(e>>30&2))*((c=n)-2*(r-(l*l/(l+c)-a))):1===n?l:(c=a-((p=Ir(l,0))-r),(f=Ir(i=-1/l,0))+i*((u=1+f*p)+f*c))}var xr=2146435072,kr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var Vr,Gr="function"==typeof Float64Array?Float64Array:void 0;Vr=function(){var r,t,n;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),n=t,r=(kr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Hr=!0===wr?0:1,Lr=new Vr(1),Wr=new tr(Lr.buffer);var $r="function"==typeof Float64Array;var Cr="function"==typeof Float64Array?Float64Array:null;var Br,Rr,Mr,Zr="function"==typeof Float64Array?Float64Array:void 0;Br=function(){var r,t,n;if("function"!=typeof Cr)return!1;try{t=new Cr([1,3.14,-3.14,NaN]),n=t,r=($r&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")},!0===wr?(Rr=1,Mr=0):(Rr=0,Mr=1);var Xr={HIGH:Rr,LOW:Mr},Yr=new Br(1),zr=new tr(Yr.buffer),qr=Xr.HIGH,Dr=Xr.LOW;function Jr(r,t){return zr[qr]=r,zr[Dr]=t,Yr[0]}var Kr=Math.floor,Qr=Number.POSITIVE_INFINITY,rt=Number,tt=rt.NEGATIVE_INFINITY;function nt(r){return r===Qr||r===tt}var et="function"==typeof Float64Array;var ot="function"==typeof Float64Array?Float64Array:null;var it,at,ut,ft="function"==typeof Float64Array?Float64Array:void 0;it=function(){var r,t,n;if("function"!=typeof ot)return!1;try{t=new ot([1,3.14,-3.14,NaN]),n=t,r=(et&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ft:function(){throw new Error("not implemented")},!0===wr?(at=1,ut=0):(at=0,ut=1);var ct={HIGH:at,LOW:ut},lt=new it(1),pt=new tr(lt.buffer),st=ct.HIGH,yt=ct.LOW;function vt(r,t,n,e){return lt[0]=r,t[e]=pt[st],t[e+n]=pt[yt],t}function dt(r){return vt(r,[0,0],1,0)}C(dt,"assign",vt);var bt=[0,0];function gt(r,t,n,e){return function(r){return r!=r}(r)||nt(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}C((function(r){return gt(r,[0,0],1,0)}),"assign",gt);var wt="function"==typeof Float64Array;var ht="function"==typeof Float64Array?Float64Array:null;var mt,At,Ft,jt="function"==typeof Float64Array?Float64Array:void 0;mt=function(){var r,t,n;if("function"!=typeof ht)return!1;try{t=new ht([1,3.14,-3.14,NaN]),n=t,r=(wt&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?jt:function(){throw new Error("not implemented")},!0===wr?(At=1,Ft=0):(At=0,Ft=1);var Ot={HIGH:At,LOW:Ft},Et=new mt(1),_t=new tr(Et.buffer),Nt=Ot.HIGH,St=Ot.LOW;function Tt(r,t,n,e){return Et[0]=r,t[e]=_t[Nt],t[e+n]=_t[St],t}function It(r){return Tt(r,[0,0],1,0)}C(It,"assign",Tt);var Ut=[0,0],xt=[0,0];function kt(r,t){var n,e,o;return 0===t||0===r||(o=r)!=o||nt(r)?r:(gt(r,Ut,1,0),t+=Ut[1],t+=function(r){var t=Fr(r);return(t=(t&xr)>>>20)-1023|0}(r=Ut[0]),t<-1074?function(r,t){var n,e;return dt.assign(r,bt,1,0),n=bt[0],n&=2147483647,e=Fr(t),Jr(n|=e&=2147483648,bt[1])}(0,r):t>1023?r<0?tt:Qr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,It.assign(r,xt,1,0),n=xt[0],n&=2148532223,e*Jr(n|=t+1023<<20,xt[1])))}function Pt(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Vt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ht=16777216,Lt=5.960464477539063e-8,Wt=Pt(20),$t=Pt(20),Ct=Pt(20),Bt=Pt(20);function Rt(r,t,n,e,o,i,a,u,f){var c,l,p,s,y,v,d,b,g;for(s=i,g=e[n],b=n,y=0;b>0;y++)l=Lt*g|0,Bt[y]=g-Ht*l|0,g=e[b-1]+l,b-=1;if(g=kt(g,o),g-=8*Kr(.125*g),g-=d=0|g,p=0,o>0?(d+=y=Bt[n-1]>>24-o,Bt[n-1]-=y<<24-o,p=Bt[n-1]>>23-o):0===o?p=Bt[n-1]>>23:g>=.5&&(p=2),p>0){for(d+=1,c=0,y=0;y<n;y++)b=Bt[y],0===c?0!==b&&(c=1,Bt[y]=16777216-b):Bt[y]=16777215-b;if(o>0)switch(o){case 1:Bt[n-1]&=8388607;break;case 2:Bt[n-1]&=4194303}2===p&&(g=1-g,0!==c&&(g-=kt(1,o)))}if(0===g){for(b=0,y=n-1;y>=i;y--)b|=Bt[y];if(0===b){for(v=1;0===Bt[i-v];v++);for(y=n+1;y<=n+v;y++){for(f[u+y]=Vt[a+y],l=0,b=0;b<=u;b++)l+=r[b]*f[u+(y-b)];e[y]=l}return Rt(r,t,n+=v,e,o,i,a,u,f)}}if(0===g)for(n-=1,o-=24;0===Bt[n];)n-=1,o-=24;else(g=kt(g,-o))>=Ht?(l=Lt*g|0,Bt[n]=g-Ht*l|0,o+=24,Bt[n+=1]=l):Bt[n]=0|g;for(l=kt(1,o),y=n;y>=0;y--)e[y]=l*Bt[y],l*=Lt;for(y=n;y>=0;y--){for(l=0,v=0;v<=s&&v<=n-y;v++)l+=Gt[v]*e[y+v];Ct[n-y]=l}for(l=0,y=n;y>=0;y--)l+=Ct[y];for(t[0]=0===p?l:-l,l=Ct[0]-l,y=1;y<=n;y++)l+=Ct[y];return t[1]=0===p?l:-l,7&d}function Mt(r,t,n,e){var o,i,a,u,f,c,l;for(4,(i=(n-3)/24|0)<0&&(i=0),u=n-24*(i+1),c=i-(a=e-1),l=a+4,f=0;f<=l;f++)Wt[f]=c<0?0:Vt[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Wt[a+(f-c)];$t[f]=o}return 4,Rt(r,t,4,$t,u,4,i,a,Wt)}var Zt=Math.round;function Xt(r,t,n){var e,o,i,a,u;return i=r-1.5707963267341256*(e=Zt(.6366197723675814*r)),a=6077100506506192e-26*e,u=t>>20|0,n[0]=i-a,u-(Fr(n[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),n[0]=i-a,u-(Fr(n[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),n[0]=i-a)),n[1]=i-n[0]-a,e}var Yt=1.5707963267341256,zt=6077100506506192e-26,qt=2*zt,Dt=3*zt,Jt=4*zt,Kt=[0,0,0],Qt=[0,0];function rn(r,t){var n,e,o,i,a,u,f;if((o=2147483647&Fr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Xt(r,o,t):o<=1073928572?r>0?(f=r-Yt,t[0]=f-zt,t[1]=f-t[0]-zt,1):(f=r+Yt,t[0]=f+zt,t[1]=f-t[0]+zt,-1):r>0?(f=r-2*Yt,t[0]=f-qt,t[1]=f-t[0]-qt,2):(f=r+2*Yt,t[0]=f+qt,t[1]=f-t[0]+qt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Xt(r,o,t):r>0?(f=r-3*Yt,t[0]=f-Dt,t[1]=f-t[0]-Dt,3):(f=r+3*Yt,t[0]=f+Dt,t[1]=f-t[0]+Dt,-3):1075388923===o?Xt(r,o,t):r>0?(f=r-4*Yt,t[0]=f-Jt,t[1]=f-t[0]-Jt,4):(f=r+4*Yt,t[0]=f+Jt,t[1]=f-t[0]+Jt,-4);if(o<1094263291)return Xt(r,o,t);if(o>=xr)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Lr[0]=r,Wr[Hr]}(r),f=Jr(o-((e=(o>>20)-1046)<<20|0),n),a=0;a<2;a++)Kt[a]=0|f,f=16777216*(f-Kt[a]);for(Kt[2]=f,i=3;0===Kt[i-1];)i-=1;return u=Mt(Kt,Qt,e,i),r<0?(t[0]=-Qt[0],t[1]=-Qt[1],-u):(t[0]=Qt[0],t[1]=Qt[1],u)}var tn=[0,0];function nn(r){var t,n;return t=Fr(r),(t&=2147483647)<=1072243195?t<1044381696?r:Ur(r,0,1):t>=2146435072?NaN:(n=rn(r,tn),Ur(tn[0],tn[1],1-((1&n)<<1)))}var en=1.5707963267948966;var on=6123233995736766e-32;function an(r){var t,n,e,o;return function(r){return r!=r}(r)||0===r?r:r===Qr?en:r===tt?-en:(r<0&&(n=!0,r=-r),t=0,r>2.414213562373095?(e=en,t=1,r=-1/r):r<=.66?e=0:(e=.7853981633974483,t=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===t?o+=.5*on:1===t&&(o+=on),e+=o,n?-e:e)}var un=3.141592653589793;var fn=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var cn=/./;function ln(r){return"boolean"==typeof r}var pn=Boolean,sn=Boolean.prototype.toString;var yn=Y();function vn(r){return"object"==typeof r&&(r instanceof pn||(yn?function(r){try{return sn.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function dn(r){return ln(r)||vn(r)}function bn(){return new Function("return this;")()}C(dn,"isPrimitive",ln),C(dn,"isObject",vn);var gn="object"==typeof self?self:null,wn="object"==typeof window?window:null,hn="object"==typeof global?global:null,mn="object"==typeof globalThis?globalThis:null;var An=function(r){if(arguments.length){if(!ln(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return bn()}if(mn)return mn;if(gn)return gn;if(wn)return wn;if(hn)return hn;throw new Error("unexpected error. Unable to resolve global object.")}(),Fn=An.document&&An.document.childNodes,jn=Int8Array;function On(){return/^\s*function\s*([^(]*)/i}var En=/^\s*function\s*([^(]*)/i;function _n(r){return null!==r&&"object"==typeof r}function Nn(r){var t,n,e,o;if(("Object"===(n=D(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=En.exec(e.toString()))return t[1]}return _n(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}C(On,"REGEXP",En),C(_n,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!fn(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(_n));var Sn="function"==typeof cn||"object"==typeof jn||"function"==typeof Fn?function(r){return Nn(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Nn(r).toLowerCase():t};function Tn(r){return"function"===Sn(r)}var In,Un=Object,xn=Object.getPrototypeOf;In=Tn(Object.getPrototypeOf)?xn:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var kn=In;var Pn=Object.prototype;function Vn(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fn(r)}(r)&&(t=function(r){return null==r?null:(r=Un(r),kn(r))}(r),!t||!R(r,"constructor")&&R(t,"constructor")&&Tn(t.constructor)&&"[object Function]"===D(t.constructor)&&R(t,"isPrototypeOf")&&Tn(t.isPrototypeOf)&&(t===Pn||function(r){var t;for(t in r)if(!R(r,t))return!1;return!0}(r)))}function Gn(r){return"number"==typeof r}var Hn=rt.prototype.toString;var Ln=Y();function Wn(r){return"object"==typeof r&&(r instanceof rt||(Ln?function(r){try{return Hn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function $n(r){return Gn(r)||Wn(r)}function Cn(r){return r<Qr&&r>tt&&Kr(t=r)===t;var t}function Bn(r){return Gn(r)&&Cn(r)}function Rn(r){return Wn(r)&&Cn(r.valueOf())}function Mn(r){return Bn(r)||Rn(r)}function Zn(r){return Bn(r)&&r>0}function Xn(r){return Rn(r)&&r.valueOf()>0}function Yn(r){return Zn(r)||Xn(r)}function zn(r){return Bn(r)&&r>=0}function qn(r){return Rn(r)&&r.valueOf()>=0}function Dn(r){return zn(r)||qn(r)}function Jn(r){return Gn(r)&&r>=0}function Kn(r){return Wn(r)&&r.valueOf()>=0}function Qn(r){return Jn(r)||Kn(r)}function re(r,t){return Vn(t)?R(t,"period")&&(r.period=t.period,!Zn(t.period))?new TypeError(x("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):R(t,"amplitude")&&(r.amplitude=t.amplitude,!Jn(t.amplitude))?new TypeError(x("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):R(t,"offset")&&(r.offset=t.offset,!Bn(t.offset))?new TypeError(x("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):R(t,"iter")&&(r.iter=t.iter,!zn(t.iter))?new TypeError(x("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(x("invalid argument. Options argument must be an object. Value: `%s`.",t))}return C($n,"isPrimitive",Gn),C($n,"isObject",Wn),C(Mn,"isPrimitive",Bn),C(Mn,"isObject",Rn),C(Yn,"isPrimitive",Zn),C(Yn,"isObject",Xn),C(Dn,"isPrimitive",zn),C(Dn,"isObject",qn),C(Qn,"isPrimitive",Jn),C(Qn,"isObject",Kn),function r(t){var n,e,o,i,a,u,f,c;if(n={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=re(n,t)))throw i;return(a=(n.period-n.offset)%n.period)<0&&(a+=n.period),a-=1,u=un/n.period,f=n.amplitude/en,c=0,C(e={},"next",l),C(e,"return",p),Z&&C(e,Z,s),e;function l(){return c+=1,o||c>n.iter?{done:!0}:(a+=1,a%=n.period,{value:f*an(nn(u*a)),done:!1})}function p(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function s(){return r(n)}}}));
//# sourceMappingURL=index.js.map
