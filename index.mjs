// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";function i(i,r){var m,d,o,a;if(2===(m=arguments.length))return t(i)||t(r)?NaN:i===n||r===n?n:i===r&&0===i?s(i)?i:r:i>r?i:r;for(d=e,a=0;a<m;a++){if(t(o=arguments[a])||o===n)return o;(o>d||o===d&&0===o&&s(o))&&(d=o)}return d}export{i as default};
//# sourceMappingURL=index.mjs.map
