goog.provide('day8.re_frame.trace.db');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.utils.localstorage');
day8.re_frame.trace.db.init_db = (function day8$re_frame$trace$db$init_db(debug_QMARK_){
var panel_width_PERCENT_ = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("panel-width-ratio",0.35);
var show_panel_QMARK_ = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-panel",false);
var selected_tab = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("selected-tab",new cljs.core.Keyword(null,"app-db","app-db",865606302));
var filter_items = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filter-items",cljs.core.PersistentVector.EMPTY);
var app_db_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-paths",cljs.core.PersistentArrayMap.EMPTY));
var json_ml_paths = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-json-ml-expansions",cljs.core.PersistentHashSet.EMPTY);
var external_window_QMARK_ = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window?",false);
var show_epoch_traces_QMARK_ = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-epoch-traces?",true);
var using_trace_QMARK_ = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("using-trace?",true);
var ignored_events = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("ignored-events",cljs.core.PersistentArrayMap.EMPTY);
var low_level_trace = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("low-level-trace",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent","reagent",2131627322),true,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),true], null));
var filtered_view_trace = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filtered-view-trace",(function (){var id1 = cljs.core.random_uuid();
var id2 = cljs.core.random_uuid();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id1,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.box",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.box","re-com.box",-858521688,null),new cljs.core.Keyword(null,"sort","sort",953465918),(0)], null),id2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id2,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.input-text",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.input-text","re-com.input-text",-1695951110,null),new cljs.core.Keyword(null,"sort","sort",953465918),(1)], null)]);
})());
var num_epochs = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("retained-epochs",(5));
var categories = day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("categories",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
if(cljs.core.truth_(using_trace_QMARK_)){
var G__20873_20957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359)], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20873_20957) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20873_20957));
} else {
}

var G__20875_20958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),panel_width_PERCENT_], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20875_20958) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20875_20958));

var G__20876_20959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),show_panel_QMARK_], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20876_20959) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20876_20959));

var G__20878_20962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),selected_tab], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20878_20962) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20878_20962));

var G__20879_20965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),ignored_events], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20879_20965) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20879_20965));

var G__20880_20968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),filtered_view_trace], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20880_20968) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20880_20968));

var G__20881_20970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),low_level_trace], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20881_20970) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20881_20970));

var G__20882_20971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),num_epochs], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20882_20971) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20882_20971));

var G__20883_20973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),debug_QMARK_], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20883_20973) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20883_20973));

if(cljs.core.truth_(external_window_QMARK_)){
var G__20884_20975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","launch-external","global/launch-external",821773827)], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20884_20975) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20884_20975));
} else {
}

var G__20885_20976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),filter_items], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20885_20976) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20885_20976));

var G__20886_20977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),categories], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20886_20977) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20886_20977));

var G__20889_20981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),show_epoch_traces_QMARK_], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20889_20981) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20889_20981));

var G__20890_20983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),app_db_paths], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20890_20983) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20890_20983));

var G__20891_20984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),json_ml_paths], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20891_20984) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20891_20984));

var G__20940_20985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430)], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20940_20985) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20940_20985));

var G__20941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20941) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20941));
});

//# sourceMappingURL=day8.re_frame.trace.db.js.map
