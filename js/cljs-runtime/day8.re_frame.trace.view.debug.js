goog.provide('day8.re_frame.trace.view.debug');
goog.require('cljs.core');
goog.require('day8.re_frame.trace.utils.re_com');
goog.require('day8.re_frame.trace.view.components');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.metamorphic');
day8.re_frame.trace.view.debug.render = (function day8$re_frame$trace$view$debug$render(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 auto",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Number of epochs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref((function (){var G__20530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20530) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20530));
})())], 0)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Beginning trace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref((function (){var G__20531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20531) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20531));
})())], 0)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Ending ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref((function (){var G__20533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20533) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20533));
})())], 0)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Current epoch ID ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref((function (){var G__20534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20534) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20534));
})())], 0)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.simple_render,cljs.core.deref((function (){var G__20537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20537) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20537));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["debug-subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"pre epoch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.simple_render,cljs.core.deref((function (){var G__20539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","inter-epoch-subs","subs/inter-epoch-subs",-83233716)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20539) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20539));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pre-epoch-subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"match state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.simple_render,cljs.core.deref((function (){var G__20541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20541) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20541));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["match-state"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Epochs"], null),(function (){var current_match = cljs.core.deref((function (){var G__20542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20542) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20542));
})());
var iter__4324__auto__ = ((function (current_match){
return (function day8$re_frame$trace$view$debug$render_$_iter__20543(s__20544){
return (new cljs.core.LazySeq(null,((function (current_match){
return (function (){
var s__20544__$1 = s__20544;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20544__$1);
if(temp__5457__auto__){
var s__20544__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20544__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20544__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20546 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20545 = (0);
while(true){
if((i__20545 < size__4323__auto__)){
var match = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20545);
var match_info = new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match);
cljs.core.chunk_append(b__20546,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_match,match_info))?"bold":"normal")], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__20545,match_info,match,c__4322__auto__,size__4323__auto__,b__20546,s__20544__$2,temp__5457__auto__,current_match){
return (function (event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0))], null);
});})(i__20545,match_info,match,c__4322__auto__,size__4323__auto__,b__20546,s__20544__$2,temp__5457__auto__,current_match))
,day8.re_frame.trace.metamorphic.summarise_match(match_info)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match_info))], null)));

var G__20573 = (i__20545 + (1));
i__20545 = G__20573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20546),day8$re_frame$trace$view$debug$render_$_iter__20543(cljs.core.chunk_rest(s__20544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20546),null);
}
} else {
var match = cljs.core.first(s__20544__$2);
var match_info = new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_match,match_info))?"bold":"normal")], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (match_info,match,s__20544__$2,temp__5457__auto__,current_match){
return (function (event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0))], null);
});})(match_info,match,s__20544__$2,temp__5457__auto__,current_match))
,day8.re_frame.trace.metamorphic.summarise_match(match_info)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match_info))], null)),day8$re_frame$trace$view$debug$render_$_iter__20543(cljs.core.rest(s__20544__$2)));
}
} else {
return null;
}
break;
}
});})(current_match))
,null,null));
});})(current_match))
;
return iter__4324__auto__(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20555) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20555));
})())));
})()], null)], null);
});

//# sourceMappingURL=day8.re_frame.trace.view.debug.js.map
