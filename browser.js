// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=isNaN,E=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,i,a,f,c,l,s,p,y,d,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,v=void 0,(v=y-p.length)<0?p:p=d?p+m(v):m(v)+p)),f+=n.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var x,k=Object.prototype,F=k.toString,V=k.__defineGetter__,N=k.__defineSetter__,P=k.__lookupGetter__,C=k.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=k,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var G=x;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var $=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&$.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,R="function"==typeof H&&"symbol"==typeof H("foo")&&W(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null,B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return B&&"symbol"==typeof Symbol.toStringTag}var Z,X=Object.prototype.toString,Y="function"==typeof H?H.toStringTag:"",z=M()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[Y],e=W(r,Y);try{r[Y]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return X.call(r)},q="function"==typeof Uint32Array,D="function"==typeof Uint32Array?Uint32Array:null,J="function"==typeof Uint32Array?Uint32Array:void 0;Z=function(){var r,e,t;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(q&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q=Z,rr="function"==typeof Float64Array,er="function"==typeof Float64Array?Float64Array:null,tr="function"==typeof Float64Array?Float64Array:void 0;K=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),t=e,r=(rr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr,or=K,ir="function"==typeof Uint8Array,ar="function"==typeof Uint8Array?Uint8Array:null,ur="function"==typeof Uint8Array?Uint8Array:void 0;nr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),t=e,r=(ir&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,cr=nr,lr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,pr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(lr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,dr={uint16:fr,uint8:cr};(yr=new dr.uint16(1))[0]=4660;var vr=52===new dr.uint8(yr.buffer)[0],gr=!0===vr?1:0,br=new or(1),hr=new Q(br.buffer);function wr(r){return br[0]=r,hr[gr]}var mr=!0===vr?0:1,jr=new or(1),Ar=new Q(jr.buffer);function Er(r,e){return jr[0]=r,Ar[mr]=e>>>0,jr[0]}var Or=.7853981633974483,_r=3061616997868383e-32,Sr=.3333333333333341,Tr=2147483647;function Ur(r,e,t){var n,o,i,a,u,f,c,l,s;return(o=(n=wr(r))&Tr|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(s=Or-r)+(l=_r-e),e=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(s=r*r)*s),c=s*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=e+s*((u=s*r)*(a+c)+e),l=r+(a+=Sr*u),o>=1072010280?(1-(n>>30&2))*((c=t)-2*(r-(l*l/(l+c)-a))):1===t?l:(c=a-((s=Er(l,0))-r),(f=Er(i=-1/l,0))+i*((u=1+f*s)+f*c))}var Ir,xr,kr=2147483647,Fr=2146435072,Vr=1048575,Nr=!0===vr?0:1,Pr=new or(1),Cr=new Q(Pr.buffer);!0===vr?(Ir=1,xr=0):(Ir=0,xr=1);var Gr={HIGH:Ir,LOW:xr},Lr=new or(1),$r=new Q(Lr.buffer),Wr=Gr.HIGH,Hr=Gr.LOW;function Rr(r,e){return $r[Wr]=r,$r[Hr]=e,Lr[0]}var Br=Math.floor,Mr=Number.POSITIVE_INFINITY,Zr=Number,Xr=Zr.NEGATIVE_INFINITY,Yr=1023,zr=1023,qr=-1023,Dr=-1074;function Jr(r){return r!=r}function Kr(r){return r===Mr||r===Xr}var Qr,re,ee=2147483648;!0===vr?(Qr=1,re=0):(Qr=0,re=1);var te={HIGH:Qr,LOW:re},ne=new or(1),oe=new Q(ne.buffer),ie=te.HIGH,ae=te.LOW;function ue(r,e,t,n){return ne[0]=r,e[n]=oe[ie],e[n+t]=oe[ae],e}function fe(r){return ue(r,[0,0],1,0)}L(fe,"assign",ue);var ce=[0,0],le=22250738585072014e-324,se=4503599627370496;function pe(r,e,t,n){return Jr(r)||Kr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<le?(e[n]=r*se,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}L((function(r){return pe(r,[0,0],1,0)}),"assign",pe);var ye=2220446049250313e-31,de=2148532223,ve=[0,0],ge=[0,0];function be(r,e){var t,n,o,i,a,u;return 0===e||0===r||Jr(r)||Kr(r)?r:(pe(r,ve,1,0),r=ve[0],e+=ve[1],e+=function(r){var e=wr(r);return(e=(e&Fr)>>>20)-Yr|0}(r),e<Dr?(o=0,i=r,fe.assign(o,ce,1,0),a=ce[0],a&=kr,u=wr(i),Rr(a|=u&=ee,ce[1])):e>zr?r<0?Xr:Mr:(e<=qr?(e+=52,n=ye):n=1,fe.assign(r,ge,1,0),t=ge[0],t&=de,n*Rr(t|=e+Yr<<20,ge[1])))}function he(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var we=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],me=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],je=16777216,Ae=5.960464477539063e-8,Ee=he(20),Oe=he(20),_e=he(20),Se=he(20);function Te(r,e,t,n,o,i,a,u,f){var c,l,s,p,y,d,v,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=Ae*b|0,Se[y]=b-je*l|0,b=n[g-1]+l,g-=1;if(b=be(b,o),b-=8*Br(.125*b),b-=v=0|b,s=0,o>0?(v+=y=Se[t-1]>>24-o,Se[t-1]-=y<<24-o,s=Se[t-1]>>23-o):0===o?s=Se[t-1]>>23:b>=.5&&(s=2),s>0){for(v+=1,c=0,y=0;y<t;y++)g=Se[y],0===c?0!==g&&(c=1,Se[y]=16777216-g):Se[y]=16777215-g;if(o>0)switch(o){case 1:Se[t-1]&=8388607;break;case 2:Se[t-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=be(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=Se[y];if(0===g){for(d=1;0===Se[i-d];d++);for(y=t+1;y<=t+d;y++){for(f[u+y]=we[a+y],l=0,g=0;g<=u;g++)l+=r[g]*f[u+(y-g)];n[y]=l}return Te(r,e,t+=d,n,o,i,a,u,f)}}if(0===b)for(t-=1,o-=24;0===Se[t];)t-=1,o-=24;else(b=be(b,-o))>=je?(l=Ae*b|0,Se[t]=b-je*l|0,o+=24,Se[t+=1]=l):Se[t]=0|b;for(l=be(1,o),y=t;y>=0;y--)n[y]=l*Se[y],l*=Ae;for(y=t;y>=0;y--){for(l=0,d=0;d<=p&&d<=t-y;d++)l+=me[d]*n[y+d];_e[t-y]=l}for(l=0,y=t;y>=0;y--)l+=_e[y];for(e[0]=0===s?l:-l,l=_e[0]-l,y=1;y<=t;y++)l+=_e[y];return e[1]=0===s?l:-l,7&v}function Ue(r,e,t,n){var o,i,a,u,f,c,l;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),c=i-(a=n-1),l=a+4,f=0;f<=l;f++)Ee[f]=c<0?0:we[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Ee[a+(f-c)];Oe[f]=o}return Te(r,e,4,Oe,u,4,i,a,Ee)}var Ie=Math.round,xe=.6366197723675814,ke=1.5707963267341256,Fe=6077100506506192e-26,Ve=6077100506303966e-26,Ne=20222662487959506e-37,Pe=20222662487111665e-37,Ce=84784276603689e-45,Ge=2047;function Le(r,e,t){var n,o,i,a,u;return i=r-(n=Ie(r*xe))*ke,a=n*Fe,u=e>>20|0,t[0]=i-a,u-(wr(t[0])>>20&Ge)>16&&(a=n*Ne-((o=i)-(i=o-(a=n*Ve))-a),t[0]=i-a,u-(wr(t[0])>>20&Ge)>49&&(a=n*Ce-((o=i)-(i=o-(a=n*Pe))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var $e=0,We=16777216,He=1.5707963267341256,Re=6077100506506192e-26,Be=2*Re,Me=3*Re,Ze=4*Re,Xe=598523,Ye=1072243195,ze=1073928572,qe=1074752122,De=1074977148,Je=1075183036,Ke=1075388923,Qe=1075594811,rt=1094263291,et=[0,0,0],tt=[0,0];function nt(r,e){var t,n,o,i,a,u,f;if((o=wr(r)&kr|0)<=Ye)return e[0]=r,e[1]=0,0;if(o<=qe)return(o&Vr)===Xe?Le(r,o,e):o<=ze?r>0?(f=r-He,e[0]=f-Re,e[1]=f-e[0]-Re,1):(f=r+He,e[0]=f+Re,e[1]=f-e[0]+Re,-1):r>0?(f=r-2*He,e[0]=f-Be,e[1]=f-e[0]-Be,2):(f=r+2*He,e[0]=f+Be,e[1]=f-e[0]+Be,-2);if(o<=Qe)return o<=Je?o===De?Le(r,o,e):r>0?(f=r-3*He,e[0]=f-Me,e[1]=f-e[0]-Me,3):(f=r+3*He,e[0]=f+Me,e[1]=f-e[0]+Me,-3):o===Ke?Le(r,o,e):r>0?(f=r-4*He,e[0]=f-Ze,e[1]=f-e[0]-Ze,4):(f=r+4*He,e[0]=f+Ze,e[1]=f-e[0]+Ze,-4);if(o<rt)return Le(r,o,e);if(o>=Fr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Pr[0]=r,Cr[Nr]}(r),f=Rr(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)et[a]=0|f,f=(f-et[a])*We;for(et[2]=f,i=3;et[i-1]===$e;)i-=1;return u=Ue(et,tt,n,i),r<0?(e[0]=-tt[0],e[1]=-tt[1],-u):(e[0]=tt[0],e[1]=tt[1],u)}var ot=[0,0],it=2147483647,at=1072243195,ut=2146435072,ft=1044381696;var ct=1.5707963267948966,lt=.7853981633974483,st=6123233995736766e-32,pt=2.414213562373095;function yt(r){var e,t,n,o;return Jr(r)||0===r?r:r===Mr?ct:r===Xr?-ct:(r<0&&(t=!0,r=-r),e=0,r>pt?(n=ct,e=1,r=-1/r):r<=.66?n=0:(n=lt,e=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===e?o+=.5*st:1===e&&(o+=st),n+=o,t?-n:n)}var dt=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)},vt=/./;function gt(r){return"boolean"==typeof r}var bt=Boolean,ht=Boolean.prototype.toString,wt=M();function mt(r){return"object"==typeof r&&(r instanceof bt||(wt?function(r){try{return ht.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function jt(r){return gt(r)||mt(r)}L(jt,"isPrimitive",gt),L(jt,"isObject",mt);var At="object"==typeof self?self:null,Et="object"==typeof window?window:null,Ot="object"==typeof globalThis?globalThis:null,_t=function(r){if(arguments.length){if(!gt(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Ot)return Ot;if(At)return At;if(Et)return Et;throw new Error("unexpected error. Unable to resolve global object.")}(),St=_t.document&&_t.document.childNodes,Tt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;function xt(r){return null!==r&&"object"==typeof r}function kt(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return xt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(Ut,"REGEXP",It),L(xt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!dt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(xt));var Ft="function"==typeof vt||"object"==typeof Tt||"function"==typeof St?function(r){return kt(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?kt(r).toLowerCase():e};function Vt(r){return"function"===Ft(r)}var Nt,Pt=Object,Ct=Object.getPrototypeOf;Nt=Vt(Object.getPrototypeOf)?Ct:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Gt=Nt,Lt=Object.prototype;function $t(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!dt(r)}(r)&&(e=function(r){return null==r?null:(r=Pt(r),Gt(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&Vt(e.constructor)&&"[object Function]"===z(e.constructor)&&W(e,"isPrototypeOf")&&Vt(e.isPrototypeOf)&&(e===Lt||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}function Wt(r){return"number"==typeof r}var Ht=Zr.prototype.toString,Rt=M();function Bt(r){return"object"==typeof r&&(r instanceof Zr||(Rt?function(r){try{return Ht.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function Mt(r){return Wt(r)||Bt(r)}function Zt(r){return r<Mr&&r>Xr&&Br(e=r)===e;var e}function Xt(r){return Wt(r)&&Zt(r)}function Yt(r){return Bt(r)&&Zt(r.valueOf())}function zt(r){return Xt(r)||Yt(r)}function qt(r){return Xt(r)&&r>0}function Dt(r){return Yt(r)&&r.valueOf()>0}function Jt(r){return qt(r)||Dt(r)}function Kt(r){return Xt(r)&&r>=0}function Qt(r){return Yt(r)&&r.valueOf()>=0}function rn(r){return Kt(r)||Qt(r)}function en(r){return Wt(r)&&r>=0}function tn(r){return Bt(r)&&r.valueOf()>=0}function nn(r){return en(r)||tn(r)}function on(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return L(Mt,"isPrimitive",Wt),L(Mt,"isObject",Bt),L(zt,"isPrimitive",Xt),L(zt,"isObject",Yt),L(Jt,"isPrimitive",qt),L(Jt,"isObject",Dt),L(rn,"isPrimitive",Kt),L(rn,"isObject",Qt),L(nn,"isPrimitive",en),L(nn,"isObject",tn),function r(e){var t,n,o,i,a,u,f,c;if(t={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=function(r,e){return $t(e)?W(e,"period")&&(r.period=e.period,!qt(e.period))?new TypeError(on("0tV8N","period",e.period)):W(e,"amplitude")&&(r.amplitude=e.amplitude,!en(e.amplitude))?new TypeError(on("0tV4k","amplitude",e.amplitude)):W(e,"offset")&&(r.offset=e.offset,!Xt(e.offset))?new TypeError(on("0tV8M","offset",e.offset)):W(e,"iter")&&(r.iter=e.iter,!Kt(e.iter))?new TypeError(on("0tV2t","iter",e.iter)):null:new TypeError(on("0tV2V",e))}(t,e)))throw i;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,u=3.141592653589793/t.period,f=t.amplitude/ct,c=0,L(n={},"next",(function(){return c+=1,o||c>t.iter?{done:!0}:(a+=1,{value:f*yt((r=u*(a%=t.period),e=wr(r),(e&=it)<=at?e<ft?r:Ur(r,0,1):e>=ut?NaN:(n=nt(r,ot),Ur(ot[0],ot[1],1-((1&n)<<1))))),done:!1});var r,e,n})),L(n,"return",(function(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}})),R&&L(n,R,(function(){return r(t)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSawtoothWave=e();
//# sourceMappingURL=browser.js.map
