// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSawtoothWave=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var O=String.fromCharCode,E=isNaN,_=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,i,a,c,s,l,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(n=r[l]))c+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),c+=n.arg||"",s+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,e,n,o;for(e=[],o=0,n=U.exec(r);n;)(t=r.slice(o,U.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=U.lastIndex,n=U.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){return"string"==typeof r}function k(r){var t,e,n;if(!F(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=I(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return T.apply(null,e)}var N,P=Object.prototype,V=P.toString,G=P.__defineGetter__,L=P.__defineSetter__,$=P.__lookupGetter__,C=P.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&($.call(r,t)||C.call(r,t)?(n=r.__proto__,r.__proto__=P,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&L&&L.call(r,t,e.set),r};var W=N;function H(r,t,e){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var B=Object.prototype.hasOwnProperty;function R(r,t){return null!=r&&B.call(r,t)}var M="function"==typeof Symbol?Symbol:void 0;var Z="function"==typeof M&&"symbol"==typeof M("foo")&&R(M,"iterator")&&"symbol"==typeof M.iterator?Symbol.iterator:null;var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q="function"==typeof M?M.toStringTag:"";var D=Y()?function(r){var t,e,n;if(null==r)return z.call(r);e=r[q],t=R(r,q);try{r[q]=void 0}catch(t){return z.call(r)}return n=z.call(r),t?r[q]=e:delete r[q],n}:function(r){return z.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,t,e;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(J&&e instanceof Uint32Array||"[object Uint32Array]"===D(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var tr=Q,er="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null;var or,ir="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,t,e;if("function"!=typeof nr)return!1;try{t=new nr([1,3.14,-3.14,NaN]),e=t,r=(er&&e instanceof Float64Array||"[object Float64Array]"===D(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=or,ur="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var cr,sr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,t,e;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,256,257]),e=t,r=(ur&&e instanceof Uint8Array||"[object Uint8Array]"===D(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=cr,pr="function"==typeof Uint16Array;var yr="function"==typeof Uint16Array?Uint16Array:null;var vr,dr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,t,e;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(pr&&e instanceof Uint16Array||"[object Uint16Array]"===D(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var gr,br={uint16:vr,uint8:lr};(gr=new br.uint16(1))[0]=4660;var hr=52===new br.uint8(gr.buffer)[0],wr=!0===hr?1:0,mr=new ar(1),jr=new tr(mr.buffer);function Ar(r){return mr[0]=r,jr[wr]}var Or=!0===hr?0:1,Er=new ar(1),_r=new tr(Er.buffer);function Sr(r,t){return Er[0]=r,_r[Or]=t>>>0,Er[0]}function Tr(r,t,e){var n,o,i,a,u,f,c,s,l;return(o=2147483647&(n=Ar(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(l=.7853981633974483-r)+(s=3061616997868383e-32-t),t=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),c=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),a=t+l*((u=l*r)*(a+c)+t),s=r+(a+=.3333333333333341*u),o>=1072010280?(1-(n>>30&2))*((c=e)-2*(r-(s*s/(s+c)-a))):1===e?s:(c=a-((l=Sr(s,0))-r),(f=Sr(i=-1/s,0))+i*((u=1+f*l)+f*c))}var Ur,xr,Ir=2147483647,Fr=2146435072,kr=!0===hr?0:1,Nr=new ar(1),Pr=new tr(Nr.buffer);!0===hr?(Ur=1,xr=0):(Ur=0,xr=1);var Vr={HIGH:Ur,LOW:xr},Gr=new ar(1),Lr=new tr(Gr.buffer),$r=Vr.HIGH,Cr=Vr.LOW;function Wr(r,t){return Lr[$r]=r,Lr[Cr]=t,Gr[0]}var Hr=Math.floor,Br=Number.POSITIVE_INFINITY,Rr=Number,Mr=Rr.NEGATIVE_INFINITY;function Zr(r){return r!=r}function Xr(r){return r===Br||r===Mr}var Yr,zr;!0===hr?(Yr=1,zr=0):(Yr=0,zr=1);var qr={HIGH:Yr,LOW:zr},Dr=new ar(1),Jr=new tr(Dr.buffer),Kr=qr.HIGH,Qr=qr.LOW;function rt(r,t,e,n){return Dr[0]=r,t[n]=Jr[Kr],t[n+e]=Jr[Qr],t}function tt(r){return rt(r,[0,0],1,0)}H(tt,"assign",rt);var et=[0,0];function nt(r,t,e,n){return Zr(r)||Xr(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}H((function(r){return nt(r,[0,0],1,0)}),"assign",nt);var ot=[0,0],it=[0,0];function at(r,t){var e,n,o,i,a,u;return 0===t||0===r||Zr(r)||Xr(r)?r:(nt(r,ot,1,0),t+=ot[1],t+=function(r){var t=Ar(r);return(t=(t&Fr)>>>20)-1023|0}(r=ot[0]),t<-1074?(o=0,i=r,tt.assign(o,et,1,0),a=et[0],a&=Ir,u=Ar(i),Wr(a|=u&=2147483648,et[1])):t>1023?r<0?Mr:Br:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,tt.assign(r,it,1,0),e=it[0],e&=2148532223,n*Wr(e|=t+1023<<20,it[1])))}function ut(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var ft=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ct=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],st=16777216,lt=5.960464477539063e-8,pt=ut(20),yt=ut(20),vt=ut(20),dt=ut(20);function gt(r,t,e,n,o,i,a,u,f){var c,s,l,p,y,v,d,g,b;for(p=i,b=n[e],g=e,y=0;g>0;y++)s=lt*b|0,dt[y]=b-st*s|0,b=n[g-1]+s,g-=1;if(b=at(b,o),b-=8*Hr(.125*b),b-=d=0|b,l=0,o>0?(d+=y=dt[e-1]>>24-o,dt[e-1]-=y<<24-o,l=dt[e-1]>>23-o):0===o?l=dt[e-1]>>23:b>=.5&&(l=2),l>0){for(d+=1,c=0,y=0;y<e;y++)g=dt[y],0===c?0!==g&&(c=1,dt[y]=16777216-g):dt[y]=16777215-g;if(o>0)switch(o){case 1:dt[e-1]&=8388607;break;case 2:dt[e-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=at(1,o)))}if(0===b){for(g=0,y=e-1;y>=i;y--)g|=dt[y];if(0===g){for(v=1;0===dt[i-v];v++);for(y=e+1;y<=e+v;y++){for(f[u+y]=ft[a+y],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(y-g)];n[y]=s}return gt(r,t,e+=v,n,o,i,a,u,f)}}if(0===b)for(e-=1,o-=24;0===dt[e];)e-=1,o-=24;else(b=at(b,-o))>=st?(s=lt*b|0,dt[e]=b-st*s|0,o+=24,dt[e+=1]=s):dt[e]=0|b;for(s=at(1,o),y=e;y>=0;y--)n[y]=s*dt[y],s*=lt;for(y=e;y>=0;y--){for(s=0,v=0;v<=p&&v<=e-y;v++)s+=ct[v]*n[y+v];vt[e-y]=s}for(s=0,y=e;y>=0;y--)s+=vt[y];for(t[0]=0===l?s:-s,s=vt[0]-s,y=1;y<=e;y++)s+=vt[y];return t[1]=0===l?s:-s,7&d}function bt(r,t,e,n){var o,i,a,u,f,c,s;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),c=i-(a=n-1),s=a+4,f=0;f<=s;f++)pt[f]=c<0?0:ft[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*pt[a+(f-c)];yt[f]=o}return 4,gt(r,t,4,yt,u,4,i,a,pt)}var ht=Math.round;function wt(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=ht(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(Ar(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(Ar(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var mt=1.5707963267341256,jt=6077100506506192e-26,At=2*jt,Ot=3*jt,Et=4*jt,_t=[0,0,0],St=[0,0];function Tt(r,t){var e,n,o,i,a,u,f;if((o=Ar(r)&Ir|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?wt(r,o,t):o<=1073928572?r>0?(f=r-mt,t[0]=f-jt,t[1]=f-t[0]-jt,1):(f=r+mt,t[0]=f+jt,t[1]=f-t[0]+jt,-1):r>0?(f=r-2*mt,t[0]=f-At,t[1]=f-t[0]-At,2):(f=r+2*mt,t[0]=f+At,t[1]=f-t[0]+At,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?wt(r,o,t):r>0?(f=r-3*mt,t[0]=f-Ot,t[1]=f-t[0]-Ot,3):(f=r+3*mt,t[0]=f+Ot,t[1]=f-t[0]+Ot,-3):1075388923===o?wt(r,o,t):r>0?(f=r-4*mt,t[0]=f-Et,t[1]=f-t[0]-Et,4):(f=r+4*mt,t[0]=f+Et,t[1]=f-t[0]+Et,-4);if(o<1094263291)return wt(r,o,t);if(o>=Fr)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return Nr[0]=r,Pr[kr]}(r),f=Wr(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)_t[a]=0|f,f=16777216*(f-_t[a]);for(_t[2]=f,i=3;0===_t[i-1];)i-=1;return u=bt(_t,St,n,i),r<0?(t[0]=-St[0],t[1]=-St[1],-u):(t[0]=St[0],t[1]=St[1],u)}var Ut=[0,0];function xt(r){var t,e;return t=Ar(r),(t&=2147483647)<=1072243195?t<1044381696?r:Tr(r,0,1):t>=2146435072?NaN:(e=Tt(r,Ut),Tr(Ut[0],Ut[1],1-((1&e)<<1)))}var It=1.5707963267948966;var Ft=6123233995736766e-32;function kt(r){var t,e,n,o;return Zr(r)||0===r?r:r===Br?It:r===Mr?-It:(r<0&&(e=!0,r=-r),t=0,r>2.414213562373095?(n=It,t=1,r=-1/r):r<=.66?n=0:(n=.7853981633974483,t=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===t?o+=.5*Ft:1===t&&(o+=Ft),n+=o,e?-n:n)}var Nt=3.141592653589793;var Pt=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var Vt=/./;function Gt(r){return"boolean"==typeof r}var Lt=Boolean,$t=Boolean.prototype.toString;var Ct=Y();function Wt(r){return"object"==typeof r&&(r instanceof Lt||(Ct?function(r){try{return $t.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function Ht(r){return Gt(r)||Wt(r)}function Bt(){return new Function("return this;")()}H(Ht,"isPrimitive",Gt),H(Ht,"isObject",Wt);var Rt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Zt="object"==typeof global?global:null,Xt="object"==typeof globalThis?globalThis:null;var Yt=function(r){if(arguments.length){if(!Gt(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Bt()}if(Xt)return Xt;if(Rt)return Rt;if(Mt)return Mt;if(Zt)return Zt;throw new Error("unexpected error. Unable to resolve global object.")}(),zt=Yt.document&&Yt.document.childNodes,qt=Int8Array;function Dt(){return/^\s*function\s*([^(]*)/i}var Jt=/^\s*function\s*([^(]*)/i;function Kt(r){return null!==r&&"object"==typeof r}function Qt(r){var t,e,n,o;if(("Object"===(e=D(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Jt.exec(n.toString()))return t[1]}return Kt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}H(Dt,"REGEXP",Jt),H(Kt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Pt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Kt));var re="function"==typeof Vt||"object"==typeof qt||"function"==typeof zt?function(r){return Qt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Qt(r).toLowerCase():t};function te(r){return"function"===re(r)}var ee,ne=Object,oe=Object.getPrototypeOf;ee=te(Object.getPrototypeOf)?oe:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ie=ee;var ae=Object.prototype;function ue(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Pt(r)}(r)&&(t=function(r){return null==r?null:(r=ne(r),ie(r))}(r),!t||!R(r,"constructor")&&R(t,"constructor")&&te(t.constructor)&&"[object Function]"===D(t.constructor)&&R(t,"isPrototypeOf")&&te(t.isPrototypeOf)&&(t===ae||function(r){var t;for(t in r)if(!R(r,t))return!1;return!0}(r)))}function fe(r){return"number"==typeof r}var ce=Rr.prototype.toString;var se=Y();function le(r){return"object"==typeof r&&(r instanceof Rr||(se?function(r){try{return ce.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function pe(r){return fe(r)||le(r)}function ye(r){return r<Br&&r>Mr&&Hr(t=r)===t;var t}function ve(r){return fe(r)&&ye(r)}function de(r){return le(r)&&ye(r.valueOf())}function ge(r){return ve(r)||de(r)}function be(r){return ve(r)&&r>0}function he(r){return de(r)&&r.valueOf()>0}function we(r){return be(r)||he(r)}function me(r){return ve(r)&&r>=0}function je(r){return de(r)&&r.valueOf()>=0}function Ae(r){return me(r)||je(r)}function Oe(r){return fe(r)&&r>=0}function Ee(r){return le(r)&&r.valueOf()>=0}function _e(r){return Oe(r)||Ee(r)}function Se(r,t){return ue(t)?R(t,"period")&&(r.period=t.period,!be(t.period))?new TypeError(k("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):R(t,"amplitude")&&(r.amplitude=t.amplitude,!Oe(t.amplitude))?new TypeError(k("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):R(t,"offset")&&(r.offset=t.offset,!ve(t.offset))?new TypeError(k("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):R(t,"iter")&&(r.iter=t.iter,!me(t.iter))?new TypeError(k("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}return H(pe,"isPrimitive",fe),H(pe,"isObject",le),H(ge,"isPrimitive",ve),H(ge,"isObject",de),H(we,"isPrimitive",be),H(we,"isObject",he),H(Ae,"isPrimitive",me),H(Ae,"isObject",je),H(_e,"isPrimitive",Oe),H(_e,"isObject",Ee),function r(t){var e,n,o,i,a,u,f,c;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=Se(e,t)))throw i;return(a=(e.period-e.offset)%e.period)<0&&(a+=e.period),a-=1,u=Nt/e.period,f=e.amplitude/It,c=0,H(n={},"next",s),H(n,"return",l),Z&&H(n,Z,p),n;function s(){return c+=1,o||c>e.iter?{done:!0}:(a+=1,a%=e.period,{value:f*kt(xt(u*a)),done:!1})}function l(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function p(){return r(e)}}}));
//# sourceMappingURL=index.js.map
