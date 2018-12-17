goog.provide('agenda.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('agenda.events');
goog.require('agenda.views');
goog.require('agenda.config');
agenda.core.dev_setup = (function agenda$core$dev_setup(){
if(agenda.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
agenda.core.mount_root = (function agenda$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [agenda.views.main_panel], null),document.getElementById("app"));
});
agenda.core.init = (function agenda$core$init(){
var G__34746_34747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agenda.events","initialize-db","agenda.events/initialize-db",1461763217)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__34746_34747) : re_frame.core.dispatch_sync.call(null,G__34746_34747));

agenda.core.dev_setup();

return agenda.core.mount_root();
});
goog.exportSymbol('agenda.core.init', agenda.core.init);

//# sourceMappingURL=agenda.core.js.map
