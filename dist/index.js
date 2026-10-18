"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var o=m(function(l,v){
var f=require('@stdlib/math-base-assert-is-positive-zero/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/constants-float64-ninf/dist'),a=require('@stdlib/constants-float64-pinf/dist');function N(e,r){var n,t,i,u;if(n=arguments.length,n===2)return s(e)||s(r)?NaN:e===a||r===a?a:e===r&&e===0?f(e)?e:r:e>r?e:r;for(t=q,u=0;u<n;u++){if(i=arguments[u],s(i)||i===a)return i;(i>t||i===t&&i===0&&f(i))&&(t=i)}return t}v.exports=N
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
