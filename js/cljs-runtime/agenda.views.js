goog.provide('agenda.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('agenda.subs');
agenda.views.main_panel = (function agenda$views$main_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"level"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#myDIV","div#myDIV",1379000086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Homework"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#myInput","input#myInput",-1619180793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"assignment description ..."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"addBtn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","new-item","agenda.events/new-item",-1801995796)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29326) : re_frame.core.dispatch.call(null,G__29326));
})], null),"Add"], null)], null),(function (){var temp__5457__auto__ = cljs.core.deref((function (){var G__29327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.subs","assignments","agenda.subs/assignments",-709317394)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29327) : re_frame.core.subscribe.call(null,G__29327));
})());
if(cljs.core.truth_(temp__5457__auto__)){
var assignments = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = ((function (assignments,temp__5457__auto__){
return (function agenda$views$main_panel_$_iter__29328(s__29329){
return (new cljs.core.LazySeq(null,((function (assignments,temp__5457__auto__){
return (function (){
var s__29329__$1 = s__29329;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__29329__$1);
if(temp__5457__auto____$1){
var s__29329__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29329__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__29329__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__29331 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__29330 = (0);
while(true){
if((i__29330 < size__4323__auto__)){
var vec__29332 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__29330);
var map__29335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(0),null);
var map__29335__$1 = ((((!((map__29335 == null)))?(((((map__29335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29335):map__29335);
var assignment = map__29335__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29335__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var completed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29335__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(1),null);
cljs.core.chunk_append(b__29331,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29330,vec__29332,map__29335,map__29335__$1,assignment,description,completed_QMARK_,index,c__4322__auto__,size__4323__auto__,b__29331,s__29329__$2,temp__5457__auto____$1,assignments,temp__5457__auto__){
return (function (){
var G__29337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","toggle-completion","agenda.events/toggle-completion",1792058162),index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29337) : re_frame.core.dispatch.call(null,G__29337));
});})(i__29330,vec__29332,map__29335,map__29335__$1,assignment,description,completed_QMARK_,index,c__4322__auto__,size__4323__auto__,b__29331,s__29329__$2,temp__5457__auto____$1,assignments,temp__5457__auto__))
], null),(cljs.core.truth_(completed_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"checked"], null):null)], 0)),description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close","span.close",-217177185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29330,vec__29332,map__29335,map__29335__$1,assignment,description,completed_QMARK_,index,c__4322__auto__,size__4323__auto__,b__29331,s__29329__$2,temp__5457__auto____$1,assignments,temp__5457__auto__){
return (function (){
var G__29338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","remove-item","agenda.events/remove-item",1477204212),index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29338) : re_frame.core.dispatch.call(null,G__29338));
});})(i__29330,vec__29332,map__29335,map__29335__$1,assignment,description,completed_QMARK_,index,c__4322__auto__,size__4323__auto__,b__29331,s__29329__$2,temp__5457__auto____$1,assignments,temp__5457__auto__))
], null),"\u00D7"], null)], null));

var G__29346 = (i__29330 + (1));
i__29330 = G__29346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29331),agenda$views$main_panel_$_iter__29328(cljs.core.chunk_rest(s__29329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29331),null);
}
} else {
var vec__29339 = cljs.core.first(s__29329__$2);
var map__29342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29339,(0),null);
var map__29342__$1 = ((((!((map__29342 == null)))?(((((map__29342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29342):map__29342);
var assignment = map__29342__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29342__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var completed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29342__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29339,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__29339,map__29342,map__29342__$1,assignment,description,completed_QMARK_,index,s__29329__$2,temp__5457__auto____$1,assignments,temp__5457__auto__){
return (function (){
var G__29344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","toggle-completion","agenda.events/toggle-completion",1792058162),index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29344) : re_frame.core.dispatch.call(null,G__29344));
});})(vec__29339,map__29342,map__29342__$1,assignment,description,completed_QMARK_,index,s__29329__$2,temp__5457__auto____$1,assignments,temp__5457__auto__))
], null),(cljs.core.truth_(completed_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"checked"], null):null)], 0)),description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close","span.close",-217177185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__29339,map__29342,map__29342__$1,assignment,description,completed_QMARK_,index,s__29329__$2,temp__5457__auto____$1,assignments,temp__5457__auto__){
return (function (){
var G__29345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","remove-item","agenda.events/remove-item",1477204212),index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29345) : re_frame.core.dispatch.call(null,G__29345));
});})(vec__29339,map__29342,map__29342__$1,assignment,description,completed_QMARK_,index,s__29329__$2,temp__5457__auto____$1,assignments,temp__5457__auto__))
], null),"\u00D7"], null)], null),agenda$views$main_panel_$_iter__29328(cljs.core.rest(s__29329__$2)));
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
