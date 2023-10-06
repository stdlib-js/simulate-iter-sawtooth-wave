// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,_=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,i,a,c,l,s,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,o;for(t=[],o=0,n=I.exec(r);n;)(e=r.slice(o,I.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=I.lastIndex,n=I.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function k(r){return"string"==typeof r}function x(r){var e,t,n;if(!k(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return U.apply(null,t)}var V,N=Object.prototype,P=N.toString,G=N.__defineGetter__,C=N.__defineSetter__,L=N.__lookupGetter__,$=N.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(L.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var H=V;function M(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var R=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&R.call(r,e)}var B="function"==typeof Symbol?Symbol:void 0;var Z="function"==typeof B&&"symbol"==typeof B("foo")&&W(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null;var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return X&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z="function"==typeof B?B.toStringTag:"";var D=J()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[z],e=W(r,z);try{r[z]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[z]=t:delete r[z],n}:function(r){return Y.call(r)},q="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(q&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,tr="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null;var or,ir="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,NaN]),t=e,r=(tr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=or,ur="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var cr,lr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),t=e,r=(ur&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr=cr,pr="function"==typeof Uint16Array;var yr="function"==typeof Uint16Array?Uint16Array:null;var vr,dr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(pr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var gr,br={uint16:vr,uint8:sr};(gr=new br.uint16(1))[0]=4660;var wr=52===new br.uint8(gr.buffer)[0],hr=!0===wr?1:0,mr=new ar(1),jr=new er(mr.buffer);function Ar(r){return mr[0]=r,jr[hr]}var Er=!0===wr?0:1,Or=new ar(1),_r=new er(Or.buffer);function Sr(r,e){return Or[0]=r,_r[Er]=e>>>0,Or[0]}function Ur(r,e,t){var n,o,i,a,u,f,c,l,s;return(o=2147483647&(n=Ar(r))|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(s=.7853981633974483-r)+(l=3061616997868383e-32-e),e=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(s=r*r)*s),c=s*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=e+s*((u=s*r)*(a+c)+e),l=r+(a+=.3333333333333341*u),o>=1072010280?(1-(n>>30&2))*((c=t)-2*(r-(l*l/(l+c)-a))):1===t?l:(c=a-((s=Sr(l,0))-r),(f=Sr(i=-1/l,0))+i*((u=1+f*s)+f*c))}var Ir,Tr,Fr=!0===wr?0:1,kr=new ar(1),xr=new er(kr.buffer);!0===wr?(Ir=1,Tr=0):(Ir=0,Tr=1);var Vr={HIGH:Ir,LOW:Tr},Nr=new ar(1),Pr=new er(Nr.buffer),Gr=Vr.HIGH,Cr=Vr.LOW;function Lr(r,e){return Pr[Gr]=r,Pr[Cr]=e,Nr[0]}var $r=Math.floor,Hr=Number.POSITIVE_INFINITY,Mr=Number,Rr=Mr.NEGATIVE_INFINITY;function Wr(r){return r!=r}function Br(r){return r===Hr||r===Rr}var Zr,Xr;!0===wr?(Zr=1,Xr=0):(Zr=0,Xr=1);var Jr={HIGH:Zr,LOW:Xr},Yr=new ar(1),zr=new er(Yr.buffer),Dr=Jr.HIGH,qr=Jr.LOW;function Kr(r,e,t,n){return Yr[0]=r,e[n]=zr[Dr],e[n+t]=zr[qr],e}function Qr(r){return Kr(r,[0,0],1,0)}M(Qr,"assign",Kr);var re=[0,0];function ee(r,e,t,n){return Wr(r)||Br(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}M((function(r){return ee(r,[0,0],1,0)}),"assign",ee);var te=[0,0],ne=[0,0];function oe(r,e){var t,n,o,i,a,u;return 0===e||0===r||Wr(r)||Br(r)?r:(ee(r,te,1,0),e+=te[1],e+=function(r){var e=Ar(r);return(e=(2146435072&e)>>>20)-1023|0}(r=te[0]),e<-1074?(o=0,i=r,Qr.assign(o,re,1,0),a=re[0],a&=2147483647,u=Ar(i),Lr(a|=u&=2147483648,re[1])):e>1023?r<0?Rr:Hr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Qr.assign(r,ne,1,0),t=ne[0],t&=2148532223,n*Lr(t|=e+1023<<20,ne[1])))}function ie(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ae=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ue=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fe=5.960464477539063e-8,ce=ie(20),le=ie(20),se=ie(20),pe=ie(20);function ye(r,e,t,n,o,i,a,u,f){var c,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=fe*b|0,pe[y]=b-16777216*l|0,b=n[g-1]+l,g-=1;if(b=oe(b,o),b-=8*$r(.125*b),b-=d=0|b,s=0,o>0?(d+=y=pe[t-1]>>24-o,pe[t-1]-=y<<24-o,s=pe[t-1]>>23-o):0===o?s=pe[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,c=0,y=0;y<t;y++)g=pe[y],0===c?0!==g&&(c=1,pe[y]=16777216-g):pe[y]=16777215-g;if(o>0)switch(o){case 1:pe[t-1]&=8388607;break;case 2:pe[t-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=oe(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=pe[y];if(0===g){for(v=1;0===pe[i-v];v++);for(y=t+1;y<=t+v;y++){for(f[u+y]=ae[a+y],l=0,g=0;g<=u;g++)l+=r[g]*f[u+(y-g)];n[y]=l}return ye(r,e,t+=v,n,o,i,a,u,f)}}if(0===b)for(t-=1,o-=24;0===pe[t];)t-=1,o-=24;else(b=oe(b,-o))>=16777216?(l=fe*b|0,pe[t]=b-16777216*l|0,o+=24,pe[t+=1]=l):pe[t]=0|b;for(l=oe(1,o),y=t;y>=0;y--)n[y]=l*pe[y],l*=fe;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=ue[v]*n[y+v];se[t-y]=l}for(l=0,y=t;y>=0;y--)l+=se[y];for(e[0]=0===s?l:-l,l=se[0]-l,y=1;y<=t;y++)l+=se[y];return e[1]=0===s?l:-l,7&d}function ve(r,e,t,n){var o,i,a,u,f,c,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),c=i-(a=n-1),l=a+4,f=0;f<=l;f++)ce[f]=c<0?0:ae[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*ce[a+(f-c)];le[f]=o}return 4,ye(r,e,4,le,u,4,i,a,ce)}var de=Math.round;function ge(r,e,t){var n,o,i,a,u;return i=r-1.5707963267341256*(n=de(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=i-a,u-(Ar(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),t[0]=i-a,u-(Ar(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var be=1.5707963267341256,we=6077100506506192e-26,he=2*we,me=4*we,je=[0,0,0],Ae=[0,0];function Ee(r,e){var t,n,o,i,a,u,f;if((o=2147483647&Ar(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?ge(r,o,e):o<=1073928572?r>0?(f=r-be,e[0]=f-we,e[1]=f-e[0]-we,1):(f=r+be,e[0]=f+we,e[1]=f-e[0]+we,-1):r>0?(f=r-2*be,e[0]=f-he,e[1]=f-e[0]-he,2):(f=r+2*be,e[0]=f+he,e[1]=f-e[0]+he,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?ge(r,o,e):r>0?(f=r-3*be,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*be,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===o?ge(r,o,e):r>0?(f=r-4*be,e[0]=f-me,e[1]=f-e[0]-me,4):(f=r+4*be,e[0]=f+me,e[1]=f-e[0]+me,-4);if(o<1094263291)return ge(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return kr[0]=r,xr[Fr]}(r),f=Lr(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)je[a]=0|f,f=16777216*(f-je[a]);for(je[2]=f,i=3;0===je[i-1];)i-=1;return u=ve(je,Ae,n,i),r<0?(e[0]=-Ae[0],e[1]=-Ae[1],-u):(e[0]=Ae[0],e[1]=Ae[1],u)}var Oe=[0,0];function _e(r){var e,t;return e=Ar(r),(e&=2147483647)<=1072243195?e<1044381696?r:Ur(r,0,1):e>=2146435072?NaN:(t=Ee(r,Oe),Ur(Oe[0],Oe[1],1-((1&t)<<1)))}var Se=1.5707963267948966;function Ue(r){var e,t,n,o;return Wr(r)||0===r?r:r===Hr?Se:r===Rr?-Se:(r<0&&(t=!0,r=-r),e=0,r>2.414213562373095?(n=Se,e=1,r=-1/r):r<=.66?n=0:(n=.7853981633974483,e=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===e?o+=3061616997868383e-32:1===e&&(o+=6123233995736766e-32),n+=o,t?-n:n)}var Ie=3.141592653589793;var Te=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var Fe=/./;function ke(r){return"boolean"==typeof r}var xe=Boolean,Ve=Boolean.prototype.toString;var Ne=J();function Pe(r){return"object"==typeof r&&(r instanceof xe||(Ne?function(r){try{return Ve.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function Ge(r){return ke(r)||Pe(r)}function Ce(){return new Function("return this;")()}M(Ge,"isPrimitive",ke),M(Ge,"isObject",Pe);var Le="object"==typeof self?self:null,$e="object"==typeof window?window:null,He="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Me="object"==typeof He?He:null,Re="object"==typeof globalThis?globalThis:null;var We=function(r){if(arguments.length){if(!ke(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ce()}if(Re)return Re;if(Le)return Le;if($e)return $e;if(Me)return Me;throw new Error("unexpected error. Unable to resolve global object.")}(),Be=We.document&&We.document.childNodes,Ze=Int8Array;function Xe(){return/^\s*function\s*([^(]*)/i}var Je=/^\s*function\s*([^(]*)/i;function Ye(r){return null!==r&&"object"==typeof r}function ze(r){var e,t,n,o;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Je.exec(n.toString()))return e[1]}return Ye(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(Xe,"REGEXP",Je),M(Ye,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Te(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ye));var De="function"==typeof Fe||"object"==typeof Ze||"function"==typeof Be?function(r){return ze(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ze(r).toLowerCase():e};function qe(r){return"function"===De(r)}var Ke,Qe=Object,rt=Object.getPrototypeOf;Ke=qe(Object.getPrototypeOf)?rt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var et=Ke;var tt=Object.prototype;function nt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Te(r)}(r)&&(e=function(r){return null==r?null:(r=Qe(r),et(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&qe(e.constructor)&&"[object Function]"===D(e.constructor)&&W(e,"isPrototypeOf")&&qe(e.isPrototypeOf)&&(e===tt||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}function ot(r){return"number"==typeof r}var it=Mr.prototype.toString;var at=J();function ut(r){return"object"==typeof r&&(r instanceof Mr||(at?function(r){try{return it.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function ft(r){return ot(r)||ut(r)}function ct(r){return r<Hr&&r>Rr&&$r(e=r)===e;var e}function lt(r){return ot(r)&&ct(r)}function st(r){return ut(r)&&ct(r.valueOf())}function pt(r){return lt(r)||st(r)}function yt(r){return lt(r)&&r>0}function vt(r){return st(r)&&r.valueOf()>0}function dt(r){return yt(r)||vt(r)}function gt(r){return lt(r)&&r>=0}function bt(r){return st(r)&&r.valueOf()>=0}function wt(r){return gt(r)||bt(r)}function ht(r){return ot(r)&&r>=0}function mt(r){return ut(r)&&r.valueOf()>=0}function jt(r){return ht(r)||mt(r)}function At(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Et(r,e){return nt(e)?W(e,"period")&&(r.period=e.period,!yt(e.period))?new TypeError(At("0tV8N,JM","period",e.period)):W(e,"amplitude")&&(r.amplitude=e.amplitude,!ht(e.amplitude))?new TypeError(At("0tV4k,I9","amplitude",e.amplitude)):W(e,"offset")&&(r.offset=e.offset,!lt(e.offset))?new TypeError(At("0tV8M,JG","offset",e.offset)):W(e,"iter")&&(r.iter=e.iter,!gt(e.iter))?new TypeError(At("0tV2t,G9","iter",e.iter)):null:new TypeError(At("0tV2V,FD",e))}function Ot(r){var e,t,n,o,i,a,u,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=Et(e,r)))throw o;return(i=(e.period-e.offset)%e.period)<0&&(i+=e.period),i-=1,a=Ie/e.period,u=e.amplitude/Se,f=0,M(t={},"next",c),M(t,"return",l),Z&&M(t,Z,s),t;function c(){return f+=1,n||f>e.iter?{done:!0}:(i+=1,i%=e.period,{value:u*Ue(_e(a*i)),done:!1})}function l(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function s(){return Ot(e)}}M(ft,"isPrimitive",ot),M(ft,"isObject",ut),M(pt,"isPrimitive",lt),M(pt,"isObject",st),M(dt,"isPrimitive",yt),M(dt,"isObject",vt),M(wt,"isPrimitive",gt),M(wt,"isObject",bt),M(jt,"isPrimitive",ht),M(jt,"isObject",mt);export{Ot as default};
//# sourceMappingURL=mod.js.map
