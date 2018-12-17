goog.provide('mranderson047.reagent.v0v8v0_alpha2.reagent.debug');
goog.require('cljs.core');
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking = false;
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2 !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.debug !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings !== 'undefined')){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2 !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.debug !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console !== 'undefined')){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__17880__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17881__i = 0, G__17881__a = new Array(arguments.length -  0);
while (G__17881__i < G__17881__a.length) {G__17881__a[G__17881__i] = arguments[G__17881__i + 0]; ++G__17881__i;}
  args = new cljs.core.IndexedSeq(G__17881__a,0,null);
} 
return G__17880__delegate.call(this,args);};
G__17880.cljs$lang$maxFixedArity = 0;
G__17880.cljs$lang$applyTo = (function (arglist__17882){
var args = cljs.core.seq(arglist__17882);
return G__17880__delegate(args);
});
G__17880.cljs$core$IFn$_invoke$arity$variadic = G__17880__delegate;
return G__17880;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__17883__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17884__i = 0, G__17884__a = new Array(arguments.length -  0);
while (G__17884__i < G__17884__a.length) {G__17884__a[G__17884__i] = arguments[G__17884__i + 0]; ++G__17884__i;}
  args = new cljs.core.IndexedSeq(G__17884__a,0,null);
} 
return G__17883__delegate.call(this,args);};
G__17883.cljs$lang$maxFixedArity = 0;
G__17883.cljs$lang$applyTo = (function (arglist__17885){
var args = cljs.core.seq(arglist__17885);
return G__17883__delegate(args);
});
G__17883.cljs$core$IFn$_invoke$arity$variadic = G__17883__delegate;
return G__17883;
})()
;})(o))
;

return o;
})();
}
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_warnings = (function mranderson047$reagent$v0v8v0_alpha2$reagent$debug$track_warnings(f){
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking = true;

cljs.core.reset_BANG_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings);
cljs.core.reset_BANG_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings,null);

mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=mranderson047.reagent.v0v8v0_alpha2.reagent.debug.js.map
