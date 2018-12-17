goog.provide('agenda.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('agenda.subs');
agenda.views.main_panel = (function agenda$views$main_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"level"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#myDIV","div#myDIV",1379000086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Homework"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#myInput","input#myInput",-1619180793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"assignment description ..."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"addBtn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__14016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","new-item","agenda.events/new-item",-1801995796)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14016) : re_frame.core.dispatch.call(null,G__14016));
})], null),"Add"], null)], null),(function (){var temp__5457__auto__ = cljs.core.deref((function (){var G__14017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.subs","assignments","agenda.subs/assignments",-709317394)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14017) : re_frame.core.subscribe.call(null,G__14017));
})());
if(cljs.core.truth_(temp__5457__auto__)){
var assignments = temp__5457__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Assignments to render = ",assignments], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = ((function (assignments,temp__5457__auto__){
return (function agenda$views$main_panel_$_iter__14018(s__14019){
return (new cljs.core.LazySeq(null,((function (assignments,temp__5457__auto__){
return (function (){
var s__14019__$1 = s__14019;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__14019__$1);
if(temp__5457__auto____$1){
var s__14019__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14019__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14019__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14021 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14020 = (0);
while(true){
if((i__14020 < size__4323__auto__)){
var vec__14022 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14020);
var map__14025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14022,(0),null);
var map__14025__$1 = ((((!((map__14025 == null)))?(((((map__14025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14025):map__14025);
var assignment = map__14025__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14025__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var completed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14025__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14022,(1),null);
cljs.core.chunk_append(b__14021,(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Completed? = ",completed_QMARK_], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null),(cljs.core.truth_(completed_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"checked"], null):null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__14020,vec__14022,map__14025,map__14025__$1,assignment,description,completed_QMARK_,index,c__4322__auto__,size__4323__auto__,b__14021,s__14019__$2,temp__5457__auto____$1,assignments,temp__5457__auto__){
return (function (){
var G__14027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","toggle-completion","agenda.events/toggle-completion",1792058162),index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14027) : re_frame.core.dispatch.call(null,G__14027));
});})(i__14020,vec__14022,map__14025,map__14025__$1,assignment,description,completed_QMARK_,index,c__4322__auto__,size__4323__auto__,b__14021,s__14019__$2,temp__5457__auto____$1,assignments,temp__5457__auto__))
], null),description], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close","span.close",-217177185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__14020,vec__14022,map__14025,map__14025__$1,assignment,description,completed_QMARK_,index,c__4322__auto__,size__4323__auto__,b__14021,s__14019__$2,temp__5457__auto____$1,assignments,temp__5457__auto__){
return (function (){
var G__14028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","remove-item","agenda.events/remove-item",1477204212),index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14028) : re_frame.core.dispatch.call(null,G__14028));
});})(i__14020,vec__14022,map__14025,map__14025__$1,assignment,description,completed_QMARK_,index,c__4322__auto__,size__4323__auto__,b__14021,s__14019__$2,temp__5457__auto____$1,assignments,temp__5457__auto__))
], null),"\u00D7"], null)], null);
})()
);

var G__14036 = (i__14020 + (1));
i__14020 = G__14036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14021),agenda$views$main_panel_$_iter__14018(cljs.core.chunk_rest(s__14019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14021),null);
}
} else {
var vec__14029 = cljs.core.first(s__14019__$2);
var map__14032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14029,(0),null);
var map__14032__$1 = ((((!((map__14032 == null)))?(((((map__14032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14032):map__14032);
var assignment = map__14032__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14032__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var completed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14032__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14029,(1),null);
return cljs.core.cons((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Completed? = ",completed_QMARK_], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null),(cljs.core.truth_(completed_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"checked"], null):null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__14029,map__14032,map__14032__$1,assignment,description,completed_QMARK_,index,s__14019__$2,temp__5457__auto____$1,assignments,temp__5457__auto__){
return (function (){
var G__14034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","toggle-completion","agenda.events/toggle-completion",1792058162),index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14034) : re_frame.core.dispatch.call(null,G__14034));
});})(vec__14029,map__14032,map__14032__$1,assignment,description,completed_QMARK_,index,s__14019__$2,temp__5457__auto____$1,assignments,temp__5457__auto__))
], null),description], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close","span.close",-217177185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__14029,map__14032,map__14032__$1,assignment,description,completed_QMARK_,index,s__14019__$2,temp__5457__auto____$1,assignments,temp__5457__auto__){
return (function (){
var G__14035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","remove-item","agenda.events/remove-item",1477204212),index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14035) : re_frame.core.dispatch.call(null,G__14035));
});})(vec__14029,map__14032,map__14032__$1,assignment,description,completed_QMARK_,index,s__14019__$2,temp__5457__auto____$1,assignments,temp__5457__auto__))
], null),"\u00D7"], null)], null);
})()
,agenda$views$main_panel_$_iter__14018(cljs.core.rest(s__14019__$2)));
}
} else {
return null;
}
break;
}
});})(assignments,temp__5457__auto__))
,null,null));
});})(assignments,temp__5457__auto__))
;
return iter__4324__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(assignments,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(assignments)))));
})()], null)], null);
} else {
return null;
}
})()], null);
});

//# sourceMappingURL=agenda.views.js.map
