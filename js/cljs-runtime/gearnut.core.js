goog.provide('gearnut.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('gearnut.events');
goog.require('gearnut.views');
goog.require('gearnut.config');
gearnut.core.dev_setup = (function gearnut$core$dev_setup(){
if(gearnut.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
gearnut.core.mount_root = (function gearnut$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gearnut.views.main_panel], null),document.getElementById("app"));
});
gearnut.core.init = (function gearnut$core$init(){
var G__13869_13870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gearnut.events","initialize-db","gearnut.events/initialize-db",-786228537)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__13869_13870) : re_frame.core.dispatch_sync.call(null,G__13869_13870));

gearnut.core.dev_setup();

return gearnut.core.mount_root();
});
goog.exportSymbol('gearnut.core.init', gearnut.core.init);

//# sourceMappingURL=gearnut.core.js.map
