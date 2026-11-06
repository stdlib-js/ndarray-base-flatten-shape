"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=q(function(R,f){
var c=require('@stdlib/math-base-special-fast-min/dist');function g(e,r,i){var n,t,v,a,s;for(n=e.length,t=c(n-1,r),v=1,s=0,a=0;a<n;a++)a<=t?(v*=e[a],a===t&&(i[s]=v,s+=1)):(i[s]=e[a],s+=1);return i}f.exports=g
});var m=q(function(b,l){
var x=require('@stdlib/math-base-special-fast-min/dist'),d=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/array-base-zeros/dist'),j=u();function p(e,r){var i=e.length,n=S(i-d(x(i-1,r),0));return j(e,r,n),n}l.exports=p
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=m(),z=u();y(o,"assign",z);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
