goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.impl.batching');
goog.require('clojure.set');
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.debug !== 'undefined')){
} else {
reagent.ratom.debug = false;
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.generation !== 'undefined')){
} else {
reagent.ratom.generation = (0);
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom._running !== 'undefined')){
} else {
reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
reagent.ratom.reactive_QMARK_ = (function reagent$ratom$reactive_QMARK_(){
return !((reagent.ratom._STAR_ratom_context_STAR_ == null));
});
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref(reagent.ratom._running);
});
reagent.ratom.arr_len = (function reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
reagent.ratom.arr_eq = (function reagent$ratom$arr_eq(x,y){
var len = reagent.ratom.arr_len(x);
var and__3938__auto__ = (len === reagent.ratom.arr_len(y));
if(and__3938__auto__){
var i = (0);
while(true){
var or__3949__auto__ = (i === len);
if(or__3949__auto__){
return or__3949__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__20320 = (i + (1));
i = G__20320;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__3938__auto__;
}
});
reagent.ratom.in_context = (function reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR_20209 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_20209;
}});
reagent.ratom.deref_capture = (function reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = reagent.ratom.generation = (reagent.ratom.generation + (1));


var res = reagent.ratom.in_context(r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5461__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto__ == null)){
return null;
} else {
var r = temp__5461__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
reagent.ratom.check_watches = (function reagent$ratom$check_watches(old,new$){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
reagent.ratom.add_w = (function reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f));

return this$.watchesArr = null;
});
reagent.ratom.remove_w = (function reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key));

return this$.watchesArr = null;
});
reagent.ratom.notify_w = (function reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv(((function (w){
return (function (p1__20214_SHARP_,p2__20215_SHARP_,p3__20216_SHARP_){
var G__20221 = p1__20214_SHARP_;
G__20221.push(p2__20215_SHARP_);

G__20221.push(p3__20216_SHARP_);

return G__20221;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_20322 = (a[i]);
var f_20323 = (a[(i + (1))]);
(f_20323.cljs$core$IFn$_invoke$arity$4 ? f_20323.cljs$core$IFn$_invoke$arity$4(k_20322,this$,old,new$) : f_20323.call(null,k_20322,this$,old,new$));

var G__20324 = ((2) + i);
i = G__20324;
continue;
} else {
return null;
}
break;
}
});
reagent.ratom.pr_atom = (function reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR_20223 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(a);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_20223;
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.rea_queue !== 'undefined')){
} else {
reagent.ratom.rea_queue = null;
}
reagent.ratom.rea_enqueue = (function reagent$ratom$rea_enqueue(r){
if((reagent.ratom.rea_queue == null)){
reagent.ratom.rea_queue = [];

reagent.impl.batching.schedule();
} else {
}

return reagent.ratom.rea_queue.push(r);
});
reagent.ratom.flush_BANG_ = (function reagent$ratom$flush_BANG_(){
while(true){
var q = reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
reagent.ratom.rea_queue = null;

var n__4408__auto___20326 = q.length;
var i_20327 = (0);
while(true){
if((i_20327 < n__4408__auto___20326)){
(q[i_20327])._queued_run();

var G__20328 = (i_20327 + (1));
i_20327 = G__20328;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_;

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reagent.ratom/RAtom");
});

/**
 * Positional factory function for reagent.ratom/RAtom.
 */
reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var G__20241 = arguments.length;
switch (G__20241) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___20340 = arguments.length;
var i__4532__auto___20342 = (0);
while(true){
if((i__4532__auto___20342 < len__4531__auto___20340)){
args_arr__4546__auto__.push((arguments[i__4532__auto___20342]));

var G__20343 = (i__4532__auto___20342 + (1));
i__4532__auto___20342 = G__20343;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.__GT_RAtom(x,null,null,null);
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20249){
var map__20250 = p__20249;
var map__20250__$1 = ((((!((map__20250 == null)))?(((((map__20250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20250):map__20250);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return reagent.ratom.__GT_RAtom(x,meta,validator,null);
});

/** @this {Function} */
reagent.ratom.atom.cljs$lang$applyTo = (function (seq20238){
var G__20239 = cljs.core.first(seq20238);
var seq20238__$1 = cljs.core.next(seq20238);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20239,seq20238__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

reagent.ratom.cache_key = "reagReactionCache";
reagent.ratom.cached_reaction = (function reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if(!((r == null))){
return cljs.core._deref(r);
} else {
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__20256 = f;
var G__20257 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__20258 = ((function (G__20256,G__20257,m,m__$1,r){
return (function (x){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

var __20347 = (o["reagReactionCache"]);
var __20348__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__20347,k);
(o["reagReactionCache"] = __20348__$1);

if(!((obj == null))){
obj.reaction = null;
} else {
}

if(!((destroy == null))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__20256,G__20257,m,m__$1,r))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__20256,G__20257,G__20258) : reagent.ratom.make_reaction.call(null,G__20256,G__20257,G__20258));
})();
var v = cljs.core._deref(r__$1);
(o["reagReactionCache"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

if(!((obj == null))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
return reagent.ratom.cached_reaction(((function (temp__5459__auto__,this$__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
});})(temp__5459__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
});

reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
});

reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.Track.cljs$lang$type = true;

reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track";

reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reagent.ratom/Track");
});

/**
 * Positional factory function for reagent.ratom/Track.
 */
reagent.ratom.__GT_Track = (function reagent$ratom$__GT_Track(f,args,reaction){
return (new reagent.ratom.Track(f,args,reaction));
});

reagent.ratom.make_track = (function reagent$ratom$make_track(f,args){
return (new reagent.ratom.Track(f,args,null));
});
reagent.ratom.make_track_BANG_ = (function reagent$ratom$make_track_BANG_(f,args){
var t = reagent.ratom.make_track(f,args);
var r = (function (){var G__20260 = ((function (t){
return (function (){
return cljs.core._deref(t);
});})(t))
;
var G__20261 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__20262 = true;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__20260,G__20261,G__20262) : reagent.ratom.make_reaction.call(null,G__20260,G__20261,G__20262));
})();
cljs.core.deref(r);

return r;
});
reagent.ratom.track = (function reagent$ratom$track(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20358 = arguments.length;
var i__4532__auto___20359 = (0);
while(true){
if((i__4532__auto___20359 < len__4531__auto___20358)){
args__4534__auto__.push((arguments[i__4532__auto___20359]));

var G__20360 = (i__4532__auto___20359 + (1));
i__4532__auto___20359 = G__20360;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track(f,args);
});

reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.ratom.track.cljs$lang$applyTo = (function (seq20263){
var G__20264 = cljs.core.first(seq20263);
var seq20263__$1 = cljs.core.next(seq20263);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20264,seq20263__$1);
});

reagent.ratom.track_BANG_ = (function reagent$ratom$track_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20362 = arguments.length;
var i__4532__auto___20363 = (0);
while(true){
if((i__4532__auto___20363 < len__4531__auto___20362)){
args__4534__auto__.push((arguments[i__4532__auto___20363]));

var G__20364 = (i__4532__auto___20363 + (1));
i__4532__auto___20363 = G__20364;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_(f,args);
});

reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq20265){
var G__20266 = cljs.core.first(seq20265);
var seq20265__$1 = cljs.core.next(seq20265);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20266,seq20265__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_20267 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_20267;
}});

reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if(!((self__.watches == null))){
return reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if(((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__20269 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20269) : f.call(null,G__20269));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__20270 = a__$1._peek();
var G__20271 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20270,G__20271) : f.call(null,G__20270,G__20271));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__20272 = a__$1._peek();
var G__20273 = x;
var G__20274 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20272,G__20273,G__20274) : f.call(null,G__20272,G__20273,G__20274));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
var f = ((((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
:((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(temp__5459__auto__,oldstate,this$__$1))
);
return reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reagent.ratom/RCursor");
});

/**
 * Positional factory function for reagent.ratom/RCursor.
 */
reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var or__3949__auto__ = ((!((src == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,src));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src))));
}
})()){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["src must be a reactive atom or a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)))].join('')),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
reagent.ratom.with_let_destroy = (function reagent$ratom$with_let_destroy(v){
var temp__5461__auto__ = v.destroy;
if((temp__5461__auto__ == null)){
return null;
} else {
var f = temp__5461__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
reagent.ratom.with_let_values = (function reagent$ratom$with_let_values(key){
var temp__5459__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5459__auto__ == null)){
return [];
} else {
var c = temp__5459__auto__;
return reagent.ratom.cached_reaction(cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if(((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null))))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});

reagent.ratom.add_on_dispose_BANG_ = (function reagent$ratom$add_on_dispose_BANG_(this$,f){
if(((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null))))){
return this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4244__auto__.call(null,this$,f));
} else {
var m__4244__auto____$1 = (reagent.ratom.add_on_dispose_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4244__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if(((!((this$ == null))) && (!((this$.reagent$ratom$IRunnable$run$arity$1 == null))))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reagent.ratom.run[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reagent.ratom.run["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

reagent.ratom.handle_reaction_change = (function reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_20280 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_20280;
}});

reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
});

reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
self__.watching = derefed;

var seq__20281_20377 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__20282_20378 = null;
var count__20283_20379 = (0);
var i__20284_20380 = (0);
while(true){
if((i__20284_20380 < count__20283_20379)){
var w_20381 = chunk__20282_20378.cljs$core$IIndexed$_nth$arity$2(null,i__20284_20380);
cljs.core._add_watch(w_20381,this$,reagent.ratom.handle_reaction_change);


var G__20382 = seq__20281_20377;
var G__20383 = chunk__20282_20378;
var G__20384 = count__20283_20379;
var G__20385 = (i__20284_20380 + (1));
seq__20281_20377 = G__20382;
chunk__20282_20378 = G__20383;
count__20283_20379 = G__20384;
i__20284_20380 = G__20385;
continue;
} else {
var temp__5457__auto___20386 = cljs.core.seq(seq__20281_20377);
if(temp__5457__auto___20386){
var seq__20281_20387__$1 = temp__5457__auto___20386;
if(cljs.core.chunked_seq_QMARK_(seq__20281_20387__$1)){
var c__4351__auto___20388 = cljs.core.chunk_first(seq__20281_20387__$1);
var G__20389 = cljs.core.chunk_rest(seq__20281_20387__$1);
var G__20390 = c__4351__auto___20388;
var G__20391 = cljs.core.count(c__4351__auto___20388);
var G__20392 = (0);
seq__20281_20377 = G__20389;
chunk__20282_20378 = G__20390;
count__20283_20379 = G__20391;
i__20284_20380 = G__20392;
continue;
} else {
var w_20393 = cljs.core.first(seq__20281_20387__$1);
cljs.core._add_watch(w_20393,this$,reagent.ratom.handle_reaction_change);


var G__20394 = cljs.core.next(seq__20281_20387__$1);
var G__20395 = null;
var G__20396 = (0);
var G__20397 = (0);
seq__20281_20377 = G__20394;
chunk__20282_20378 = G__20395;
count__20283_20379 = G__20396;
i__20284_20380 = G__20397;
continue;
}
} else {
}
}
break;
}

var seq__20285 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__20286 = null;
var count__20287 = (0);
var i__20288 = (0);
while(true){
if((i__20288 < count__20287)){
var w = chunk__20286.cljs$core$IIndexed$_nth$arity$2(null,i__20288);
cljs.core._remove_watch(w,this$);


var G__20400 = seq__20285;
var G__20401 = chunk__20286;
var G__20402 = count__20287;
var G__20403 = (i__20288 + (1));
seq__20285 = G__20400;
chunk__20286 = G__20401;
count__20287 = G__20402;
i__20288 = G__20403;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20285);
if(temp__5457__auto__){
var seq__20285__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20285__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20285__$1);
var G__20406 = cljs.core.chunk_rest(seq__20285__$1);
var G__20407 = c__4351__auto__;
var G__20408 = cljs.core.count(c__4351__auto__);
var G__20409 = (0);
seq__20285 = G__20406;
chunk__20286 = G__20407;
count__20287 = G__20408;
i__20288 = G__20409;
continue;
} else {
var w = cljs.core.first(seq__20285__$1);
cljs.core._remove_watch(w,this$);


var G__20412 = cljs.core.next(seq__20285__$1);
var G__20413 = null;
var G__20414 = (0);
var G__20415 = (0);
seq__20285 = G__20412;
chunk__20286 = G__20413;
count__20287 = G__20414;
i__20288 = G__20415;
continue;
}
} else {
return null;
}
}
break;
}
});

reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && (!((self__.watching == null))))){
return this$._run(true);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return reagent.ratom.deref_capture(f__$1,this$);
}catch (e20289){var e = e20289;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
});

reagent.ratom.Reaction.prototype._set_opts = (function (p__20290){
var self__ = this;
var map__20291 = p__20290;
var map__20291__$1 = ((((!((map__20291 == null)))?(((((map__20291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20291):map__20291);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20291__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20291__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20291__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20291__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if(!((auto_run__$1 == null))){
this$.auto_run = auto_run__$1;
} else {
}

if(!((on_set == null))){
this$.on_set = on_set;
} else {
}

if(!((on_dispose == null))){
this$.on_dispose = on_dispose;
} else {
}

if(!((no_cache == null))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__20293_20422 = cljs.core.seq(cljs.core.set(wg));
var chunk__20294_20423 = null;
var count__20295_20424 = (0);
var i__20296_20425 = (0);
while(true){
if((i__20296_20425 < count__20295_20424)){
var w_20426 = chunk__20294_20423.cljs$core$IIndexed$_nth$arity$2(null,i__20296_20425);
cljs.core._remove_watch(w_20426,this$__$1);


var G__20428 = seq__20293_20422;
var G__20429 = chunk__20294_20423;
var G__20430 = count__20295_20424;
var G__20431 = (i__20296_20425 + (1));
seq__20293_20422 = G__20428;
chunk__20294_20423 = G__20429;
count__20295_20424 = G__20430;
i__20296_20425 = G__20431;
continue;
} else {
var temp__5457__auto___20432 = cljs.core.seq(seq__20293_20422);
if(temp__5457__auto___20432){
var seq__20293_20435__$1 = temp__5457__auto___20432;
if(cljs.core.chunked_seq_QMARK_(seq__20293_20435__$1)){
var c__4351__auto___20436 = cljs.core.chunk_first(seq__20293_20435__$1);
var G__20438 = cljs.core.chunk_rest(seq__20293_20435__$1);
var G__20439 = c__4351__auto___20436;
var G__20440 = cljs.core.count(c__4351__auto___20436);
var G__20441 = (0);
seq__20293_20422 = G__20438;
chunk__20294_20423 = G__20439;
count__20295_20424 = G__20440;
i__20296_20425 = G__20441;
continue;
} else {
var w_20442 = cljs.core.first(seq__20293_20435__$1);
cljs.core._remove_watch(w_20442,this$__$1);


var G__20443 = cljs.core.next(seq__20293_20435__$1);
var G__20444 = null;
var G__20445 = (0);
var G__20446 = (0);
seq__20293_20422 = G__20443;
chunk__20294_20423 = G__20444;
count__20295_20424 = G__20445;
i__20296_20425 = G__20446;
continue;
}
} else {
}
}
break;
}

if(!((this$__$1.on_dispose == null))){
this$__$1.on_dispose(s);
} else {
}

var temp__5461__auto__ = this$__$1.on_dispose_arr;
if((temp__5461__auto__ == null)){
return null;
} else {
var a = temp__5461__auto__;
var n__4408__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4408__auto__)){
var fexpr__20297_20447 = (a[i]);
(fexpr__20297_20447.cljs$core$IFn$_invoke$arity$1 ? fexpr__20297_20447.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__20297_20447.call(null,this$__$1));

var G__20448 = (i + (1));
i = G__20448;
continue;
} else {
return null;
}
break;
}
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = this$__$1.on_dispose_arr;
if((temp__5459__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5459__auto__;
return a.push(f__$1);
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__20298 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__20298) : f__$1.call(null,G__20298));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__20299 = a__$1._peek_at();
var G__20300 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__20299,G__20300) : f__$1.call(null,G__20299,G__20300));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__20301 = a__$1._peek_at();
var G__20302 = x;
var G__20303 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__20301,G__20302,G__20303) : f__$1.call(null,G__20301,G__20302,G__20303));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.flush_BANG_();

return this$__$1._run(false);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
reagent.ratom.remove_w(this$__$1,key);

if(((!(was_empty)) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return this$__$1.reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5461__auto___20464 = self__.caught;
if((temp__5461__auto___20464 == null)){
} else {
var e_20465 = temp__5461__auto___20464;
throw e_20465;
}

var non_reactive_20466 = (reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_20466){
reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_20466) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_20467 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_20467,self__.state)))){
} else {
reagent.ratom.notify_w(this$__$1,oldstate_20467,self__.state);
}
} else {
}
} else {
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reagent.ratom/Reaction");
});

/**
 * Positional factory function for reagent.ratom/Reaction.
 */
reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20474 = arguments.length;
var i__4532__auto___20475 = (0);
while(true){
if((i__4532__auto___20475 < len__4531__auto___20474)){
args__4534__auto__.push((arguments[i__4532__auto___20475]));

var G__20476 = (i__4532__auto___20475 + (1));
i__4532__auto___20475 = G__20476;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__20306){
var map__20307 = p__20306;
var map__20307__$1 = ((((!((map__20307 == null)))?(((((map__20307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20307):map__20307);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20307__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20307__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20307__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq20304){
var G__20305 = cljs.core.first(seq20304);
var seq20304__$1 = cljs.core.next(seq20304);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20305,seq20304__$1);
});

reagent.ratom.temp_reaction = reagent.ratom.make_reaction(null);
reagent.ratom.run_in_reaction = (function reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = reagent.ratom.temp_reaction;
var res = reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
reagent.ratom.temp_reaction = reagent.ratom.make_reaction(null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
});})(r,res))
;

(obj[key] = r);
}

return res;
});
reagent.ratom.check_derefs = (function reagent$ratom$check_derefs(f){
var ctx = {};
var res = reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,!((ctx.captured == null))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && (!((reagent.ratom._STAR_ratom_context_STAR_ == null))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if(!((self__.watches == null))){
reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reagent.ratom/Wrapper");
});

/**
 * Positional factory function for reagent.ratom/Wrapper.
 */
reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return reagent.ratom.__GT_Wrapper(value,reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=reagent.ratom.js.map
