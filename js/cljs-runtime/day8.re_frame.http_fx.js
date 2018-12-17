goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__28992){
var vec__28993 = p__28992;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28993,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28993,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__28997 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__28997);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__29002){
var map__29003 = p__29002;
var map__29003__$1 = ((((!((map__29003 == null)))?(((((map__29003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29003):map__29003);
var request = map__29003__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29003__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29003__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__29003,map__29003__$1,request,on_success,on_failure){
return (function (p1__29000_SHARP_){
var G__29008 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__29000_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29008) : re_frame.core.dispatch.call(null,G__29008));
});})(api,map__29003,map__29003__$1,request,on_success,on_failure))
,((function (api,map__29003,map__29003__$1,request,on_success,on_failure){
return (function (p1__29001_SHARP_){
var G__29009 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__29001_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29009) : re_frame.core.dispatch.call(null,G__29009));
});})(api,map__29003,map__29003__$1,request,on_success,on_failure))
,api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__29010 = cljs.core.seq(seq_request_maps);
var chunk__29011 = null;
var count__29012 = (0);
var i__29013 = (0);
while(true){
if((i__29013 < count__29012)){
var request__$1 = chunk__29011.cljs$core$IIndexed$_nth$arity$2(null,i__29013);
var G__29014_29027 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__29014_29027) : ajax.core.ajax_request.call(null,G__29014_29027));


var G__29028 = seq__29010;
var G__29029 = chunk__29011;
var G__29030 = count__29012;
var G__29031 = (i__29013 + (1));
seq__29010 = G__29028;
chunk__29011 = G__29029;
count__29012 = G__29030;
i__29013 = G__29031;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29010);
if(temp__5457__auto__){
var seq__29010__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29010__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__29010__$1);
var G__29032 = cljs.core.chunk_rest(seq__29010__$1);
var G__29033 = c__4351__auto__;
var G__29034 = cljs.core.count(c__4351__auto__);
var G__29035 = (0);
seq__29010 = G__29032;
chunk__29011 = G__29033;
count__29012 = G__29034;
i__29013 = G__29035;
continue;
} else {
var request__$1 = cljs.core.first(seq__29010__$1);
var G__29018_29039 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__29018_29039) : ajax.core.ajax_request.call(null,G__29018_29039));


var G__29040 = cljs.core.next(seq__29010__$1);
var G__29041 = null;
var G__29042 = (0);
var G__29043 = (0);
seq__29010 = G__29040;
chunk__29011 = G__29041;
count__29012 = G__29042;
i__29013 = G__29043;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__29019_29044 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__29020_29045 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29019_29044,G__29020_29045) : re_frame.core.reg_fx.call(null,G__29019_29044,G__29020_29045));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
