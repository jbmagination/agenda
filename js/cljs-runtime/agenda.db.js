goog.provide('agenda.db');
goog.require('cljs.core');
goog.require('cljs.reader');
agenda.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignments","assignments",-1114514911),(function (){var temp__5455__auto__ = localStorage.getItem("agenda.assignments");
if(cljs.core.truth_(temp__5455__auto__)){
var data = temp__5455__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null);

//# sourceMappingURL=agenda.db.js.map
