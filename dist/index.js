"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=q(function(R,f){
var c=require('@stdlib/math-base-special-fast-min/dist');function g(e,r,a){var n,t,v,i,s;for(n=e.length,t=c(n-1,r),v=1,s=0,i=0;i<n;i++)i<=t?(v*=e[i],i===t&&(a[s]=v,s+=1)):(a[s]=e[i],s+=1);return a}f.exports=g
});var m=q(function(b,l){
var x=require('@stdlib/math-base-special-fast-min/dist'),d=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/array-base-zeros/dist'),j=u();function p(e,r){var a=e.length,n=S(a-d(x(a-1,r),0));return j(e,r,n),n}l.exports=p
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=m(),z=u();y(o,"assign",z);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
