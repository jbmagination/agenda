goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20838){
var map__20839 = p__20838;
var map__20839__$1 = ((((!((map__20839 == null)))?(((((map__20839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20839):map__20839);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__20844_20892 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__20845_20893 = null;
var count__20846_20894 = (0);
var i__20847_20895 = (0);
while(true){
if((i__20847_20895 < count__20846_20894)){
var vec__20848_20896 = chunk__20845_20893.cljs$core$IIndexed$_nth$arity$2(null,i__20847_20895);
var k_20897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20848_20896,(0),null);
var cb_20898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20848_20896,(1),null);
try{var G__20852_20901 = cljs.core.deref(re_frame.trace.traces);
(cb_20898.cljs$core$IFn$_invoke$arity$1 ? cb_20898.cljs$core$IFn$_invoke$arity$1(G__20852_20901) : cb_20898.call(null,G__20852_20901));
}catch (e20851){var e_20903 = e20851;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20897,"while storing",cljs.core.deref(re_frame.trace.traces),e_20903], 0));
}

var G__20904 = seq__20844_20892;
var G__20905 = chunk__20845_20893;
var G__20906 = count__20846_20894;
var G__20907 = (i__20847_20895 + (1));
seq__20844_20892 = G__20904;
chunk__20845_20893 = G__20905;
count__20846_20894 = G__20906;
i__20847_20895 = G__20907;
continue;
} else {
var temp__5457__auto___20908 = cljs.core.seq(seq__20844_20892);
if(temp__5457__auto___20908){
var seq__20844_20909__$1 = temp__5457__auto___20908;
if(cljs.core.chunked_seq_QMARK_(seq__20844_20909__$1)){
var c__4351__auto___20910 = cljs.core.chunk_first(seq__20844_20909__$1);
var G__20911 = cljs.core.chunk_rest(seq__20844_20909__$1);
var G__20912 = c__4351__auto___20910;
var G__20913 = cljs.core.count(c__4351__auto___20910);
var G__20914 = (0);
seq__20844_20892 = G__20911;
chunk__20845_20893 = G__20912;
count__20846_20894 = G__20913;
i__20847_20895 = G__20914;
continue;
} else {
var vec__20853_20915 = cljs.core.first(seq__20844_20909__$1);
var k_20916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20853_20915,(0),null);
var cb_20917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20853_20915,(1),null);
try{var G__20861_20918 = cljs.core.deref(re_frame.trace.traces);
(cb_20917.cljs$core$IFn$_invoke$arity$1 ? cb_20917.cljs$core$IFn$_invoke$arity$1(G__20861_20918) : cb_20917.call(null,G__20861_20918));
}catch (e20856){var e_20919 = e20856;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20916,"while storing",cljs.core.deref(re_frame.trace.traces),e_20919], 0));
}

var G__20922 = cljs.core.next(seq__20844_20909__$1);
var G__20923 = null;
var G__20924 = (0);
var G__20925 = (0);
seq__20844_20892 = G__20922;
chunk__20845_20893 = G__20923;
count__20846_20894 = G__20924;
i__20847_20895 = G__20925;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
