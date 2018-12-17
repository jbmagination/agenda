goog.provide('gearnut.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('re_frame.core');
goog.require('gearnut.coeffects');
goog.require('gearnut.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("gearnut.events","initialize-db","gearnut.events/initialize-db",-786228537),(function (_,___$1){
return gearnut.db.default_db;
}));
gearnut.events.handle_lookup_response = (function gearnut$events$handle_lookup_response(db,p__13863){
var vec__13864 = p__13863;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13864,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13864,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"lookup-data","lookup-data",-2105662390),response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lookup-response-type","lookup-response-type",598632958),name], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("gearnut.events","process-response","gearnut.events/process-response",1436841156),(function (db,event){
return gearnut.events.handle_lookup_response(db,event);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("gearnut.events","bad-response","gearnut.events/bad-response",-1130011059),(function (db,event){
return gearnut.events.handle_lookup_response(db,event);
}));
gearnut.events.handle_lookup_event = (function gearnut$events$handle_lookup_event(coeffects,event){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coeffects], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(coeffects),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(coeffects)),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(coeffects),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gearnut.events","process-response","gearnut.events/process-response",1436841156)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gearnut.events","bad-response","gearnut.events/bad-response",-1130011059)], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("gearnut.events","lookup","gearnut.events/lookup",73421965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13867 = new cljs.core.Keyword("gearnut.coeffects","dom-value-by-id","gearnut.coeffects/dom-value-by-id",2044973923);
var G__13868 = new cljs.core.Keyword(null,"url","url",276297046);
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(G__13867,G__13868) : re_frame.core.inject_cofx.call(null,G__13867,G__13868));
})()], null),gearnut.events.handle_lookup_event);
gearnut.events.on_file_load = (function gearnut$events$on_file_load(db,event){
var reader = event.target;
var file_content = reader.result;
return file_content;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("gearnut.events","file-chosen","gearnut.events/file-chosen",1187915888),(function (db,event){
var file = document.getElementById("starter-image-picker").files.item((0));
var content = URL.createObjectURL(file);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"starter-image","starter-image",-1907356219),content);
}));

//# sourceMappingURL=gearnut.events.js.map
