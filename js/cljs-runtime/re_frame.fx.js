goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27369 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__27373 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27374 = null;
var count__27375 = (0);
var i__27376 = (0);
while(true){
if((i__27376 < count__27375)){
var vec__27377 = chunk__27374.cljs$core$IIndexed$_nth$arity$2(null,i__27376);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27377,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27377,(1),null);
var temp__5455__auto___27527 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27527)){
var effect_fn_27528 = temp__5455__auto___27527;
(effect_fn_27528.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27528.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27528.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27532 = seq__27373;
var G__27533 = chunk__27374;
var G__27534 = count__27375;
var G__27535 = (i__27376 + (1));
seq__27373 = G__27532;
chunk__27374 = G__27533;
count__27375 = G__27534;
i__27376 = G__27535;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27373);
if(temp__5457__auto__){
var seq__27373__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27373__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__27373__$1);
var G__27536 = cljs.core.chunk_rest(seq__27373__$1);
var G__27537 = c__4351__auto__;
var G__27538 = cljs.core.count(c__4351__auto__);
var G__27539 = (0);
seq__27373 = G__27536;
chunk__27374 = G__27537;
count__27375 = G__27538;
i__27376 = G__27539;
continue;
} else {
var vec__27381 = cljs.core.first(seq__27373__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27381,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27381,(1),null);
var temp__5455__auto___27540 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27540)){
var effect_fn_27541 = temp__5455__auto___27540;
(effect_fn_27541.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27541.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27541.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27542 = cljs.core.next(seq__27373__$1);
var G__27543 = null;
var G__27544 = (0);
var G__27545 = (0);
seq__27373 = G__27542;
chunk__27374 = G__27543;
count__27375 = G__27544;
i__27376 = G__27545;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20807__auto___27547 = re_frame.interop.now();
var duration__20808__auto___27548 = (end__20807__auto___27547 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20808__auto___27548,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20807__auto___27547);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27369;
}} else {
var seq__27384 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27385 = null;
var count__27386 = (0);
var i__27387 = (0);
while(true){
if((i__27387 < count__27386)){
var vec__27388 = chunk__27385.cljs$core$IIndexed$_nth$arity$2(null,i__27387);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27388,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27388,(1),null);
var temp__5455__auto___27565 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27565)){
var effect_fn_27566 = temp__5455__auto___27565;
(effect_fn_27566.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27566.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27566.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27567 = seq__27384;
var G__27568 = chunk__27385;
var G__27569 = count__27386;
var G__27570 = (i__27387 + (1));
seq__27384 = G__27567;
chunk__27385 = G__27568;
count__27386 = G__27569;
i__27387 = G__27570;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27384);
if(temp__5457__auto__){
var seq__27384__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27384__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__27384__$1);
var G__27571 = cljs.core.chunk_rest(seq__27384__$1);
var G__27572 = c__4351__auto__;
var G__27573 = cljs.core.count(c__4351__auto__);
var G__27574 = (0);
seq__27384 = G__27571;
chunk__27385 = G__27572;
count__27386 = G__27573;
i__27387 = G__27574;
continue;
} else {
var vec__27396 = cljs.core.first(seq__27384__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27396,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27396,(1),null);
var temp__5455__auto___27576 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27576)){
var effect_fn_27577 = temp__5455__auto___27576;
(effect_fn_27577.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27577.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27577.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27578 = cljs.core.next(seq__27384__$1);
var G__27579 = null;
var G__27580 = (0);
var G__27581 = (0);
seq__27384 = G__27578;
chunk__27385 = G__27579;
count__27386 = G__27580;
i__27387 = G__27581;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27406 = cljs.core.seq(value);
var chunk__27407 = null;
var count__27408 = (0);
var i__27409 = (0);
while(true){
if((i__27409 < count__27408)){
var map__27412 = chunk__27407.cljs$core$IIndexed$_nth$arity$2(null,i__27409);
var map__27412__$1 = ((((!((map__27412 == null)))?(((((map__27412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27412):map__27412);
var effect = map__27412__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27412__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27412__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27406,chunk__27407,count__27408,i__27409,map__27412,map__27412__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27406,chunk__27407,count__27408,i__27409,map__27412,map__27412__$1,effect,ms,dispatch))
,ms);
}


var G__27595 = seq__27406;
var G__27596 = chunk__27407;
var G__27597 = count__27408;
var G__27598 = (i__27409 + (1));
seq__27406 = G__27595;
chunk__27407 = G__27596;
count__27408 = G__27597;
i__27409 = G__27598;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27406);
if(temp__5457__auto__){
var seq__27406__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27406__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__27406__$1);
var G__27603 = cljs.core.chunk_rest(seq__27406__$1);
var G__27604 = c__4351__auto__;
var G__27605 = cljs.core.count(c__4351__auto__);
var G__27606 = (0);
seq__27406 = G__27603;
chunk__27407 = G__27604;
count__27408 = G__27605;
i__27409 = G__27606;
continue;
} else {
var map__27463 = cljs.core.first(seq__27406__$1);
var map__27463__$1 = ((((!((map__27463 == null)))?(((((map__27463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27463):map__27463);
var effect = map__27463__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27463__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27463__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27406,chunk__27407,count__27408,i__27409,map__27463,map__27463__$1,effect,ms,dispatch,seq__27406__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27406,chunk__27407,count__27408,i__27409,map__27463,map__27463__$1,effect,ms,dispatch,seq__27406__$1,temp__5457__auto__))
,ms);
}


var G__27633 = cljs.core.next(seq__27406__$1);
var G__27634 = null;
var G__27635 = (0);
var G__27636 = (0);
seq__27406 = G__27633;
chunk__27407 = G__27634;
count__27408 = G__27635;
i__27409 = G__27636;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__27482 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27483 = null;
var count__27484 = (0);
var i__27485 = (0);
while(true){
if((i__27485 < count__27484)){
var event = chunk__27483.cljs$core$IIndexed$_nth$arity$2(null,i__27485);
re_frame.router.dispatch(event);


var G__27661 = seq__27482;
var G__27662 = chunk__27483;
var G__27663 = count__27484;
var G__27664 = (i__27485 + (1));
seq__27482 = G__27661;
chunk__27483 = G__27662;
count__27484 = G__27663;
i__27485 = G__27664;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27482);
if(temp__5457__auto__){
var seq__27482__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27482__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__27482__$1);
var G__27669 = cljs.core.chunk_rest(seq__27482__$1);
var G__27670 = c__4351__auto__;
var G__27671 = cljs.core.count(c__4351__auto__);
var G__27672 = (0);
seq__27482 = G__27669;
chunk__27483 = G__27670;
count__27484 = G__27671;
i__27485 = G__27672;
continue;
} else {
var event = cljs.core.first(seq__27482__$1);
re_frame.router.dispatch(event);


var G__27677 = cljs.core.next(seq__27482__$1);
var G__27678 = null;
var G__27679 = (0);
var G__27680 = (0);
seq__27482 = G__27677;
chunk__27483 = G__27678;
count__27484 = G__27679;
i__27485 = G__27680;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27503 = cljs.core.seq(value);
var chunk__27505 = null;
var count__27506 = (0);
var i__27507 = (0);
while(true){
if((i__27507 < count__27506)){
var event = chunk__27505.cljs$core$IIndexed$_nth$arity$2(null,i__27507);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27681 = seq__27503;
var G__27682 = chunk__27505;
var G__27683 = count__27506;
var G__27684 = (i__27507 + (1));
seq__27503 = G__27681;
chunk__27505 = G__27682;
count__27506 = G__27683;
i__27507 = G__27684;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27503);
if(temp__5457__auto__){
var seq__27503__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27503__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__27503__$1);
var G__27686 = cljs.core.chunk_rest(seq__27503__$1);
var G__27687 = c__4351__auto__;
var G__27688 = cljs.core.count(c__4351__auto__);
var G__27689 = (0);
seq__27503 = G__27686;
chunk__27505 = G__27687;
count__27506 = G__27688;
i__27507 = G__27689;
continue;
} else {
var event = cljs.core.first(seq__27503__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27690 = cljs.core.next(seq__27503__$1);
var G__27691 = null;
var G__27692 = (0);
var G__27693 = (0);
seq__27503 = G__27690;
chunk__27505 = G__27691;
count__27506 = G__27692;
i__27507 = G__27693;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
