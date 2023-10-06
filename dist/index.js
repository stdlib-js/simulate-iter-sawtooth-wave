"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=l(function(R,m){
var h=require('@stdlib/assert-is-plain-object/dist'),n=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-integer/dist').isPrimitive,E=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,I=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,N=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,a=require('@stdlib/error-tools-fmtprodmsg/dist');function T(r,e){return h(e)?n(e,"period")&&(r.period=e.period,!E(e.period))?new TypeError(a('0tV8N',"period",e.period)):n(e,"amplitude")&&(r.amplitude=e.amplitude,!N(e.amplitude))?new TypeError(a('0tV4k',"amplitude",e.amplitude)):n(e,"offset")&&(r.offset=e.offset,!x(e.offset))?new TypeError(a('0tV8M',"offset",e.offset)):n(e,"iter")&&(r.iter=e.iter,!I(e.iter))?new TypeError(a('0tV2t',"iter",e.iter)):null:new TypeError(a('0tV2V',e));}m.exports=T
});var b=l(function(V,c){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/symbol-iterator/dist'),j=require('@stdlib/math-base-special-tan/dist'),F=require('@stdlib/math-base-special-atan/dist'),L=require('@stdlib/constants-float64-half-pi/dist'),S=require('@stdlib/constants-float64-pi/dist'),A=p();function q(r){var e,t,o,u,i,d,s,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(u=A(e,r),u))throw u;return i=(e.period-e.offset)%e.period,i<0&&(i+=e.period),i-=1,d=S/e.period,s=e.amplitude/L,v=0,t={},f(t,"next",P),f(t,"return",w),g&&f(t,g,y),t;function P(){return v+=1,o||v>e.iter?{done:!0}:(i+=1,i%=e.period,{value:s*F(j(d*i)),done:!1})}function w(O){return o=!0,arguments.length?{value:O,done:!0}:{done:!0}}function y(){return q(e)}}c.exports=q
});var G=b();module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
