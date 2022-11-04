// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-tan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-atan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.0.8-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.0.8-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function j(e,t){return o(t)?d(t,"period")&&(e.period=t.period,!p(t.period))?new TypeError(f("0Re8f","period",t.period)):d(t,"amplitude")&&(e.amplitude=t.amplitude,!a(t.amplitude))?new TypeError(f("0Re4x","amplitude",t.amplitude)):d(t,"offset")&&(e.offset=t.offset,!m(t.offset))?new TypeError(f("0Re8e","offset",t.offset)):d(t,"iter")&&(e.iter=t.iter,!l(t.iter))?new TypeError(f("0Re35","iter",t.iter)):null:new TypeError(f("0Re2h",t))}function h(o){var d,m,p,l,a,f,u,v;if(d={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(l=j(d,o)))throw l;return(a=(d.period-d.offset)%d.period)<0&&(a+=d.period),a-=1,f=n/d.period,u=d.amplitude/r,v=0,e(m={},"next",c),e(m,"return",g),t&&e(m,t,b),m;function c(){return v+=1,p||v>d.iter?{done:!0}:(a+=1,a%=d.period,{value:u*i(s(f*a)),done:!1})}function g(e){return p=!0,arguments.length?{value:e,done:!0}:{done:!0}}function b(){return h(d)}}export{h as default};
//# sourceMappingURL=index.mjs.map
