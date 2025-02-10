// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,i,a,f,c,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)f+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),f+=n.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var k,x=Object.prototype,F=x.toString,V=x.__defineGetter__,N=x.__defineSetter__,P=x.__lookupGetter__,C=x.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=x,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var G=k;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var $=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&$.call(r,e)}var R="function"==typeof Symbol?Symbol:void 0;var W="function"==typeof R&&"symbol"==typeof R("foo")&&H(R,"iterator")&&"symbol"==typeof R.iterator?Symbol.iterator:null;var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return B&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var X="function"==typeof R?R.toStringTag:"";var Y=M()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[X],e=H(r,X);try{r[X]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[X]=t:delete r[X],n}:function(r){return Z.call(r)},z="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null;var D,J="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,t;if("function"!=typeof q)return!1;try{e=new q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(z&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null;var er,tr="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),t=e,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr=er,or="function"==typeof Uint8Array;var ir="function"==typeof Uint8Array?Uint8Array:null;var ar,ur="function"==typeof Uint8Array?Uint8Array:void 0;ar=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,256,257]),t=e,r=(or&&t instanceof Uint8Array||"[object Uint8Array]"===Y(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=ar,cr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null;var sr,pr="function"==typeof Uint16Array?Uint16Array:void 0;sr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(cr&&t instanceof Uint16Array||"[object Uint16Array]"===Y(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,vr={uint16:sr,uint8:fr};(yr=new vr.uint16(1))[0]=4660;var dr=52===new vr.uint8(yr.buffer)[0],gr=!0===dr?1:0,br=new nr(1),wr=new K(br.buffer);function hr(r){return br[0]=r,wr[gr]}var mr=!0===dr?0:1,jr=new nr(1),Ar=new K(jr.buffer);function Er(r,e){return jr[0]=r,Ar[mr]=e>>>0,jr[0]}var Or=.7853981633974483,_r=3061616997868383e-32,Sr=.3333333333333341,Ur=2147483647;function Ir(r,e,t){var n,o,i,a,u,f,c,l,s;return(o=(n=hr(r))&Ur|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(s=Or-r)+(l=_r-e),e=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(s=r*r)*s),c=s*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=e+s*((u=s*r)*(a+c)+e),l=r+(a+=Sr*u),o>=1072010280?(1-(n>>30&2))*((c=t)-2*(r-(l*l/(l+c)-a))):1===t?l:(c=a-((s=Er(l,0))-r),(f=Er(i=-1/l,0))+i*((u=1+f*s)+f*c))}var Tr,kr,xr=2147483647,Fr=2146435072,Vr=1048575,Nr=!0===dr?0:1,Pr=new nr(1),Cr=new K(Pr.buffer);!0===dr?(Tr=1,kr=0):(Tr=0,kr=1);var Gr={HIGH:Tr,LOW:kr},Lr=new nr(1),$r=new K(Lr.buffer),Hr=Gr.HIGH,Rr=Gr.LOW;function Wr(r,e){return $r[Hr]=r,$r[Rr]=e,Lr[0]}var Br=Math.floor,Mr=Number.POSITIVE_INFINITY,Zr=Number,Xr=Zr.NEGATIVE_INFINITY,Yr=1023,zr=1023,qr=-1023,Dr=-1074;function Jr(r){return r!=r}function Kr(r){return r===Mr||r===Xr}var Qr,re,ee=2147483648;!0===dr?(Qr=1,re=0):(Qr=0,re=1);var te={HIGH:Qr,LOW:re},ne=new nr(1),oe=new K(ne.buffer),ie=te.HIGH,ae=te.LOW;function ue(r,e,t,n){return ne[0]=r,e[n]=oe[ie],e[n+t]=oe[ae],e}function fe(r){return ue(r,[0,0],1,0)}L(fe,"assign",ue);var ce=[0,0];var le=22250738585072014e-324;var se=4503599627370496;function pe(r,e,t,n){return Jr(r)||Kr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<le?(e[n]=r*se,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}L((function(r){return pe(r,[0,0],1,0)}),"assign",pe);var ye=2220446049250313e-31,ve=2148532223,de=[0,0],ge=[0,0];function be(r,e){var t,n,o,i,a,u;return 0===e||0===r||Jr(r)||Kr(r)?r:(pe(r,de,1,0),r=de[0],e+=de[1],e+=function(r){var e=hr(r);return(e=(e&Fr)>>>20)-Yr|0}(r),e<Dr?(o=0,i=r,fe.assign(o,ce,1,0),a=ce[0],a&=xr,u=hr(i),Wr(a|=u&=ee,ce[1])):e>zr?r<0?Xr:Mr:(e<=qr?(e+=52,n=ye):n=1,fe.assign(r,ge,1,0),t=ge[0],t&=ve,n*Wr(t|=e+Yr<<20,ge[1])))}function we(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var he=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],me=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],je=16777216,Ae=5.960464477539063e-8,Ee=we(20),Oe=we(20),_e=we(20),Se=we(20);function Ue(r,e,t,n,o,i,a,u,f){var c,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=Ae*b|0,Se[y]=b-je*l|0,b=n[g-1]+l,g-=1;if(b=be(b,o),b-=8*Br(.125*b),b-=d=0|b,s=0,o>0?(d+=y=Se[t-1]>>24-o,Se[t-1]-=y<<24-o,s=Se[t-1]>>23-o):0===o?s=Se[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,c=0,y=0;y<t;y++)g=Se[y],0===c?0!==g&&(c=1,Se[y]=16777216-g):Se[y]=16777215-g;if(o>0)switch(o){case 1:Se[t-1]&=8388607;break;case 2:Se[t-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=be(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=Se[y];if(0===g){for(v=1;0===Se[i-v];v++);for(y=t+1;y<=t+v;y++){for(f[u+y]=he[a+y],l=0,g=0;g<=u;g++)l+=r[g]*f[u+(y-g)];n[y]=l}return Ue(r,e,t+=v,n,o,i,a,u,f)}}if(0===b)for(t-=1,o-=24;0===Se[t];)t-=1,o-=24;else(b=be(b,-o))>=je?(l=Ae*b|0,Se[t]=b-je*l|0,o+=24,Se[t+=1]=l):Se[t]=0|b;for(l=be(1,o),y=t;y>=0;y--)n[y]=l*Se[y],l*=Ae;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=me[v]*n[y+v];_e[t-y]=l}for(l=0,y=t;y>=0;y--)l+=_e[y];for(e[0]=0===s?l:-l,l=_e[0]-l,y=1;y<=t;y++)l+=_e[y];return e[1]=0===s?l:-l,7&d}function Ie(r,e,t,n){var o,i,a,u,f,c,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),c=i-(a=n-1),l=a+4,f=0;f<=l;f++)Ee[f]=c<0?0:he[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Ee[a+(f-c)];Oe[f]=o}return 4,Ue(r,e,4,Oe,u,4,i,a,Ee)}var Te=Math.round,ke=.6366197723675814,xe=1.5707963267341256,Fe=6077100506506192e-26,Ve=6077100506303966e-26,Ne=20222662487959506e-37,Pe=20222662487111665e-37,Ce=84784276603689e-45,Ge=2047;function Le(r,e,t){var n,o,i,a,u;return i=r-(n=Te(r*ke))*xe,a=n*Fe,u=e>>20|0,t[0]=i-a,u-(hr(t[0])>>20&Ge)>16&&(a=n*Ne-((o=i)-(i=o-(a=n*Ve))-a),t[0]=i-a,u-(hr(t[0])>>20&Ge)>49&&(a=n*Ce-((o=i)-(i=o-(a=n*Pe))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var $e=0,He=16777216,Re=1.5707963267341256,We=6077100506506192e-26,Be=2*We,Me=3*We,Ze=4*We,Xe=598523,Ye=1072243195,ze=1073928572,qe=1074752122,De=1074977148,Je=1075183036,Ke=1075388923,Qe=1075594811,rt=1094263291,et=[0,0,0],tt=[0,0];function nt(r,e){var t,n,o,i,a,u,f;if((o=hr(r)&xr|0)<=Ye)return e[0]=r,e[1]=0,0;if(o<=qe)return(o&Vr)===Xe?Le(r,o,e):o<=ze?r>0?(f=r-Re,e[0]=f-We,e[1]=f-e[0]-We,1):(f=r+Re,e[0]=f+We,e[1]=f-e[0]+We,-1):r>0?(f=r-2*Re,e[0]=f-Be,e[1]=f-e[0]-Be,2):(f=r+2*Re,e[0]=f+Be,e[1]=f-e[0]+Be,-2);if(o<=Qe)return o<=Je?o===De?Le(r,o,e):r>0?(f=r-3*Re,e[0]=f-Me,e[1]=f-e[0]-Me,3):(f=r+3*Re,e[0]=f+Me,e[1]=f-e[0]+Me,-3):o===Ke?Le(r,o,e):r>0?(f=r-4*Re,e[0]=f-Ze,e[1]=f-e[0]-Ze,4):(f=r+4*Re,e[0]=f+Ze,e[1]=f-e[0]+Ze,-4);if(o<rt)return Le(r,o,e);if(o>=Fr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Pr[0]=r,Cr[Nr]}(r),f=Wr(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)et[a]=0|f,f=(f-et[a])*He;for(et[2]=f,i=3;et[i-1]===$e;)i-=1;return u=Ie(et,tt,n,i),r<0?(e[0]=-tt[0],e[1]=-tt[1],-u):(e[0]=tt[0],e[1]=tt[1],u)}var ot=[0,0],it=1072243195,at=1044381696;function ut(r){var e,t;return e=hr(r),(e&=xr)<=it?e<at?r:Ir(r,0,1):e>=Fr?NaN:(t=nt(r,ot),Ir(ot[0],ot[1],1-((1&t)<<1)))}var ft=1.5707963267948966,ct=.7853981633974483;var lt=6123233995736766e-32,st=2.414213562373095;function pt(r){var e,t,n,o;return Jr(r)||0===r?r:r===Mr?ft:r===Xr?-ft:(r<0&&(t=!0,r=-r),e=0,r>st?(n=ft,e=1,r=-1/r):r<=.66?n=0:(n=ct,e=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===e?o+=.5*lt:1===e&&(o+=lt),n+=o,t?-n:n)}var yt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var vt=/./;function dt(r){return"boolean"==typeof r}var gt=Boolean,bt=Boolean.prototype.toString;var wt=M();function ht(r){return"object"==typeof r&&(r instanceof gt||(wt?function(r){try{return bt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function mt(r){return dt(r)||ht(r)}L(mt,"isPrimitive",dt),L(mt,"isObject",ht);var jt="object"==typeof self?self:null,At="object"==typeof window?window:null,Et="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ot="object"==typeof Et?Et:null,_t="object"==typeof globalThis?globalThis:null;var St=function(r){if(arguments.length){if(!dt(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(_t)return _t;if(jt)return jt;if(At)return At;if(Ot)return Ot;throw new Error("unexpected error. Unable to resolve global object.")}(),Ut=St.document&&St.document.childNodes,It=Int8Array;function Tt(){return/^\s*function\s*([^(]*)/i}var kt=/^\s*function\s*([^(]*)/i;function xt(r){return null!==r&&"object"==typeof r}function Ft(r){var e,t,n,o;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=kt.exec(n.toString()))return e[1]}return xt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(Tt,"REGEXP",kt),L(xt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(xt));var Vt="function"==typeof vt||"object"==typeof It||"function"==typeof Ut?function(r){return Ft(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ft(r).toLowerCase():e};function Nt(r){return"function"===Vt(r)}var Pt,Ct=Object,Gt=Object.getPrototypeOf;Pt=Nt(Object.getPrototypeOf)?Gt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Lt=Pt;var $t=Object.prototype;function Ht(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yt(r)}(r)&&(e=function(r){return null==r?null:(r=Ct(r),Lt(r))}(r),!e||!H(r,"constructor")&&H(e,"constructor")&&Nt(e.constructor)&&"[object Function]"===Y(e.constructor)&&H(e,"isPrototypeOf")&&Nt(e.isPrototypeOf)&&(e===$t||function(r){var e;for(e in r)if(!H(r,e))return!1;return!0}(r)))}function Rt(r){return"number"==typeof r}var Wt=Zr.prototype.toString;var Bt=M();function Mt(r){return"object"==typeof r&&(r instanceof Zr||(Bt?function(r){try{return Wt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function Zt(r){return Rt(r)||Mt(r)}function Xt(r){return r<Mr&&r>Xr&&Br(e=r)===e;var e}function Yt(r){return Rt(r)&&Xt(r)}function zt(r){return Mt(r)&&Xt(r.valueOf())}function qt(r){return Yt(r)||zt(r)}function Dt(r){return Yt(r)&&r>0}function Jt(r){return zt(r)&&r.valueOf()>0}function Kt(r){return Dt(r)||Jt(r)}function Qt(r){return Yt(r)&&r>=0}function rn(r){return zt(r)&&r.valueOf()>=0}function en(r){return Qt(r)||rn(r)}function tn(r){return Rt(r)&&r>=0}function nn(r){return Mt(r)&&r.valueOf()>=0}function on(r){return tn(r)||nn(r)}function an(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function un(r){var e,t,n,o,i,a,u,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=function(r,e){return Ht(e)?H(e,"period")&&(r.period=e.period,!Dt(e.period))?new TypeError(an("0tV8N","period",e.period)):H(e,"amplitude")&&(r.amplitude=e.amplitude,!tn(e.amplitude))?new TypeError(an("0tV4k","amplitude",e.amplitude)):H(e,"offset")&&(r.offset=e.offset,!Yt(e.offset))?new TypeError(an("0tV8M","offset",e.offset)):H(e,"iter")&&(r.iter=e.iter,!Qt(e.iter))?new TypeError(an("0tV2t","iter",e.iter)):null:new TypeError(an("0tV2V",e))}(e,r),o))throw o;return(i=(e.period-e.offset)%e.period)<0&&(i+=e.period),i-=1,a=3.141592653589793/e.period,u=e.amplitude/ft,f=0,L(t={},"next",(function(){if(f+=1,n||f>e.iter)return{done:!0};return i+=1,{value:u*pt(ut(a*(i%=e.period))),done:!1}})),L(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),W&&L(t,W,(function(){return un(e)})),t}L(Zt,"isPrimitive",Rt),L(Zt,"isObject",Mt),L(qt,"isPrimitive",Yt),L(qt,"isObject",zt),L(Kt,"isPrimitive",Dt),L(Kt,"isObject",Jt),L(en,"isPrimitive",Qt),L(en,"isObject",rn),L(on,"isPrimitive",tn),L(on,"isObject",nn);export{un as default};
//# sourceMappingURL=mod.js.map
