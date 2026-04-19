"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=m(function(l,v){
var f=require('@stdlib/math-base-assert-is-positive-zero/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/constants-float64-ninf/dist'),u=require('@stdlib/constants-float64-pinf/dist');function N(e,r){var a,t,i,n;if(a=arguments.length,a===2)return s(e)||s(r)?NaN:e===u||r===u?u:e===r&&e===0?f(e)?e:r:e>r?e:r;for(t=q,n=0;n<a;n++){if(i=arguments[n],s(i)||i===u)return i;(i>t||i===t&&i===0&&f(i))&&(t=i)}return t}v.exports=N
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
