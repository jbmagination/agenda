goog.provide('agenda.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('re_frame.core');
goog.require('agenda.coeffects');
goog.require('agenda.effects');
goog.require('agenda.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agenda.events","initialize-db","agenda.events/initialize-db",1461763217),(function (_,___$1){
return agenda.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agenda.events","new-item","agenda.events/new-item",-1801995796),(function (p__13943,event){
var map__13944 = p__13943;
var map__13944__$1 = ((((!((map__13944 == null)))?(((((map__13944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13944):map__13944);
var fx = map__13944__$1;
var map__13945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13944__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__13945__$1 = ((((!((map__13945 == null)))?(((((map__13945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13945):map__13945);
var db = map__13945__$1;
var assignments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13945__$1,new cljs.core.Keyword(null,"assignments","assignments",-1114514911));
var input_element = document.getElementById("myInput");
var assignment = input_element.value;
input_element.value = "";

if(cljs.core.empty_QMARK_(assignment)){
alert("You must type in something!");

return fx;
} else {
var new_assignments = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(assignments,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),assignment,new cljs.core.Keyword(null,"completed?","completed?",946828354),false], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),new_assignments),new cljs.core.Keyword(null,"write-localstore","write-localstore",411143505),new cljs.core.PersistentArrayMap(null, 1, ["agenda.assignments",new_assignments], null)], null);
}
}));
/**
 * remove item in assignments
 */
agenda.events.item_remove = (function agenda$events$item_remove(assignments,index){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(assignments,(0),index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(assignments,(index + (1)))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agenda.events","remove-item","agenda.events/remove-item",1477204212),(function (p__13948,p__13949){
var map__13950 = p__13948;
var map__13950__$1 = ((((!((map__13950 == null)))?(((((map__13950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13950):map__13950);
var fx = map__13950__$1;
var map__13951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13950__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__13951__$1 = ((((!((map__13951 == null)))?(((((map__13951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13951):map__13951);
var db = map__13951__$1;
var assignments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13951__$1,new cljs.core.Keyword(null,"assignments","assignments",-1114514911));
var vec__13952 = p__13949;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13952,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13952,(1),null);
var event = vec__13952;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Event = ",event], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Assignments = ",assignments], 0));

var new_assignments = agenda.events.item_remove(assignments,index);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New Assignments = ",new_assignments], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),new_assignments),new cljs.core.Keyword(null,"write-localstore","write-localstore",411143505),new cljs.core.PersistentArrayMap(null, 1, ["agenda.assignments",new_assignments], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agenda.events","toggle-completion","agenda.events/toggle-completion",1792058162),(function (p__13957,p__13958){
var map__13959 = p__13957;
var map__13959__$1 = ((((!((map__13959 == null)))?(((((map__13959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13959):map__13959);
var fx = map__13959__$1;
var map__13960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13959__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__13960__$1 = ((((!((map__13960 == null)))?(((((map__13960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13960):map__13960);
var db = map__13960__$1;
var assignments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13960__$1,new cljs.core.Keyword(null,"assignments","assignments",-1114514911));
var vec__13961 = p__13958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13961,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13961,(1),null);
var event = vec__13961;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Event = ",event], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Assignments = ",assignments], 0));

var map__13966 = (assignments.cljs$core$IFn$_invoke$arity$1 ? assignments.cljs$core$IFn$_invoke$arity$1(index) : assignments.call(null,index));
var map__13966__$1 = ((((!((map__13966 == null)))?(((((map__13966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13966):map__13966);
var completed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13966__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
var new_assignments = cljs.core.update.cljs$core$IFn$_invoke$arity$5(assignments,index,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not(completed_QMARK_));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),new_assignments),new cljs.core.Keyword(null,"write-localstore","write-localstore",411143505),new cljs.core.PersistentArrayMap(null, 1, ["agenda.assignments",new_assignments], null)], null);
}));

//# sourceMappingURL=agenda.events.js.map
