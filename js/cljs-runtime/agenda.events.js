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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agenda.events","new-item","agenda.events/new-item",-1801995796),(function (p__34721,event){
var map__34722 = p__34721;
var map__34722__$1 = ((((!((map__34722 == null)))?(((((map__34722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34722):map__34722);
var fx = map__34722__$1;
var map__34723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34722__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__34723__$1 = ((((!((map__34723 == null)))?(((((map__34723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34723):map__34723);
var db = map__34723__$1;
var assignments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34723__$1,new cljs.core.Keyword(null,"assignments","assignments",-1114514911));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agenda.events","remove-item","agenda.events/remove-item",1477204212),(function (p__34726,p__34727){
var map__34728 = p__34726;
var map__34728__$1 = ((((!((map__34728 == null)))?(((((map__34728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34728):map__34728);
var fx = map__34728__$1;
var map__34729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__34729__$1 = ((((!((map__34729 == null)))?(((((map__34729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34729):map__34729);
var db = map__34729__$1;
var assignments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34729__$1,new cljs.core.Keyword(null,"assignments","assignments",-1114514911));
var vec__34730 = p__34727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34730,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34730,(1),null);
var event = vec__34730;
var new_assignments = agenda.events.item_remove(assignments,index);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),new_assignments),new cljs.core.Keyword(null,"write-localstore","write-localstore",411143505),new cljs.core.PersistentArrayMap(null, 1, ["agenda.assignments",new_assignments], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agenda.events","toggle-completion","agenda.events/toggle-completion",1792058162),(function (p__34735,p__34736){
var map__34737 = p__34735;
var map__34737__$1 = ((((!((map__34737 == null)))?(((((map__34737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34737):map__34737);
var fx = map__34737__$1;
var map__34738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34737__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__34738__$1 = ((((!((map__34738 == null)))?(((((map__34738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34738):map__34738);
var db = map__34738__$1;
var assignments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34738__$1,new cljs.core.Keyword(null,"assignments","assignments",-1114514911));
var vec__34739 = p__34736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739,(1),null);
var event = vec__34739;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Event = ",event], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Assignments = ",assignments], 0));

var map__34744 = (assignments.cljs$core$IFn$_invoke$arity$1 ? assignments.cljs$core$IFn$_invoke$arity$1(index) : assignments.call(null,index));
var map__34744__$1 = ((((!((map__34744 == null)))?(((((map__34744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34744):map__34744);
var completed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34744__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
var new_assignments = cljs.core.update.cljs$core$IFn$_invoke$arity$5(assignments,index,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not(completed_QMARK_));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),new_assignments),new cljs.core.Keyword(null,"write-localstore","write-localstore",411143505),new cljs.core.PersistentArrayMap(null, 1, ["agenda.assignments",new_assignments], null)], null);
}));

//# sourceMappingURL=agenda.events.js.map
