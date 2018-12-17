goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.fx.kind) : mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__19558 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19559 = null;
var count__19560 = (0);
var i__19561 = (0);
while(true){
if((i__19561 < count__19560)){
var vec__19563 = chunk__19559.cljs$core$IIndexed$_nth$arity$2(null,i__19561);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19563,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19563,(1),null);
var temp__5455__auto___19627 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___19627)){
var effect_fn_19628 = temp__5455__auto___19627;
(effect_fn_19628.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19628.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19628.call(null,effect_value));
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}


var G__19629 = seq__19558;
var G__19630 = chunk__19559;
var G__19631 = count__19560;
var G__19632 = (i__19561 + (1));
seq__19558 = G__19629;
chunk__19559 = G__19630;
count__19560 = G__19631;
i__19561 = G__19632;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19558);
if(temp__5457__auto__){
var seq__19558__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19558__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19558__$1);
var G__19633 = cljs.core.chunk_rest(seq__19558__$1);
var G__19634 = c__4351__auto__;
var G__19635 = cljs.core.count(c__4351__auto__);
var G__19636 = (0);
seq__19558 = G__19633;
chunk__19559 = G__19634;
count__19560 = G__19635;
i__19561 = G__19636;
continue;
} else {
var vec__19566 = cljs.core.first(seq__19558__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19566,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19566,(1),null);
var temp__5455__auto___19637 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___19637)){
var effect_fn_19638 = temp__5455__auto___19637;
(effect_fn_19638.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19638.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19638.call(null,effect_value));
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}


var G__19639 = cljs.core.next(seq__19558__$1);
var G__19640 = null;
var G__19641 = (0);
var G__19642 = (0);
seq__19558 = G__19639;
chunk__19559 = G__19640;
count__19560 = G__19641;
i__19561 = G__19642;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__19570 = cljs.core.seq(value);
var chunk__19571 = null;
var count__19572 = (0);
var i__19573 = (0);
while(true){
if((i__19573 < count__19572)){
var map__19575 = chunk__19571.cljs$core$IIndexed$_nth$arity$2(null,i__19573);
var map__19575__$1 = ((((!((map__19575 == null)))?(((((map__19575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19575):map__19575);
var effect = map__19575__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19575__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19575__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_(((function (seq__19570,chunk__19571,count__19572,i__19573,map__19575,map__19575__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(dispatch);
});})(seq__19570,chunk__19571,count__19572,i__19573,map__19575,map__19575__$1,effect,ms,dispatch))
,ms);
}


var G__19649 = seq__19570;
var G__19650 = chunk__19571;
var G__19651 = count__19572;
var G__19652 = (i__19573 + (1));
seq__19570 = G__19649;
chunk__19571 = G__19650;
count__19572 = G__19651;
i__19573 = G__19652;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19570);
if(temp__5457__auto__){
var seq__19570__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19570__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19570__$1);
var G__19661 = cljs.core.chunk_rest(seq__19570__$1);
var G__19662 = c__4351__auto__;
var G__19663 = cljs.core.count(c__4351__auto__);
var G__19664 = (0);
seq__19570 = G__19661;
chunk__19571 = G__19662;
count__19572 = G__19663;
i__19573 = G__19664;
continue;
} else {
var map__19580 = cljs.core.first(seq__19570__$1);
var map__19580__$1 = ((((!((map__19580 == null)))?(((((map__19580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19580):map__19580);
var effect = map__19580__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19580__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19580__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_(((function (seq__19570,chunk__19571,count__19572,i__19573,map__19580,map__19580__$1,effect,ms,dispatch,seq__19570__$1,temp__5457__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(dispatch);
});})(seq__19570,chunk__19571,count__19572,i__19573,map__19580,map__19580__$1,effect,ms,dispatch,seq__19570__$1,temp__5457__auto__))
,ms);
}


var G__19676 = cljs.core.next(seq__19570__$1);
var G__19677 = null;
var G__19678 = (0);
var G__19679 = (0);
seq__19570 = G__19676;
chunk__19571 = G__19677;
count__19572 = G__19678;
i__19573 = G__19679;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__19593 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19594 = null;
var count__19595 = (0);
var i__19596 = (0);
while(true){
if((i__19596 < count__19595)){
var event = chunk__19594.cljs$core$IIndexed$_nth$arity$2(null,i__19596);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(event);


var G__19693 = seq__19593;
var G__19694 = chunk__19594;
var G__19695 = count__19595;
var G__19696 = (i__19596 + (1));
seq__19593 = G__19693;
chunk__19594 = G__19694;
count__19595 = G__19695;
i__19596 = G__19696;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19593);
if(temp__5457__auto__){
var seq__19593__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19593__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19593__$1);
var G__19697 = cljs.core.chunk_rest(seq__19593__$1);
var G__19698 = c__4351__auto__;
var G__19699 = cljs.core.count(c__4351__auto__);
var G__19700 = (0);
seq__19593 = G__19697;
chunk__19594 = G__19698;
count__19595 = G__19699;
i__19596 = G__19700;
continue;
} else {
var event = cljs.core.first(seq__19593__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(event);


var G__19701 = cljs.core.next(seq__19593__$1);
var G__19702 = null;
var G__19703 = (0);
var G__19704 = (0);
seq__19593 = G__19701;
chunk__19594 = G__19702;
count__19595 = G__19703;
i__19596 = G__19704;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__19618 = cljs.core.seq(value);
var chunk__19619 = null;
var count__19620 = (0);
var i__19621 = (0);
while(true){
if((i__19621 < count__19620)){
var event = chunk__19619.cljs$core$IIndexed$_nth$arity$2(null,i__19621);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19705 = seq__19618;
var G__19706 = chunk__19619;
var G__19707 = count__19620;
var G__19708 = (i__19621 + (1));
seq__19618 = G__19705;
chunk__19619 = G__19706;
count__19620 = G__19707;
i__19621 = G__19708;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19618);
if(temp__5457__auto__){
var seq__19618__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19618__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19618__$1);
var G__19711 = cljs.core.chunk_rest(seq__19618__$1);
var G__19712 = c__4351__auto__;
var G__19713 = cljs.core.count(c__4351__auto__);
var G__19714 = (0);
seq__19618 = G__19711;
chunk__19619 = G__19712;
count__19620 = G__19713;
i__19621 = G__19714;
continue;
} else {
var event = cljs.core.first(seq__19618__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19715 = cljs.core.next(seq__19618__$1);
var G__19716 = null;
var G__19717 = (0);
var G__19718 = (0);
seq__19618 = G__19715;
chunk__19619 = G__19716;
count__19620 = G__19717;
i__19621 = G__19718;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.fx.js.map
