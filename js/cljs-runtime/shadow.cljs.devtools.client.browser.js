goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28489 = arguments.length;
var i__4532__auto___28490 = (0);
while(true){
if((i__4532__auto___28490 < len__4531__auto___28489)){
args__4534__auto__.push((arguments[i__4532__auto___28490]));

var G__28491 = (i__4532__auto___28490 + (1));
i__4532__auto___28490 = G__28491;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq28214){
var G__28218 = cljs.core.first(seq28214);
var seq28214__$1 = cljs.core.next(seq28214);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28218,seq28214__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__28232){
var map__28234 = p__28232;
var map__28234__$1 = ((((!((map__28234 == null)))?(((((map__28234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28234):map__28234);
var src = map__28234__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28234__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28234__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__28242 = cljs.core.seq(sources);
var chunk__28243 = null;
var count__28244 = (0);
var i__28245 = (0);
while(true){
if((i__28245 < count__28244)){
var map__28246 = chunk__28243.cljs$core$IIndexed$_nth$arity$2(null,i__28245);
var map__28246__$1 = ((((!((map__28246 == null)))?(((((map__28246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28246):map__28246);
var src = map__28246__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28246__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28246__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28246__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28246__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__28504 = seq__28242;
var G__28505 = chunk__28243;
var G__28506 = count__28244;
var G__28507 = (i__28245 + (1));
seq__28242 = G__28504;
chunk__28243 = G__28505;
count__28244 = G__28506;
i__28245 = G__28507;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28242);
if(temp__5457__auto__){
var seq__28242__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28242__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__28242__$1);
var G__28508 = cljs.core.chunk_rest(seq__28242__$1);
var G__28509 = c__4351__auto__;
var G__28510 = cljs.core.count(c__4351__auto__);
var G__28511 = (0);
seq__28242 = G__28508;
chunk__28243 = G__28509;
count__28244 = G__28510;
i__28245 = G__28511;
continue;
} else {
var map__28252 = cljs.core.first(seq__28242__$1);
var map__28252__$1 = ((((!((map__28252 == null)))?(((((map__28252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28252):map__28252);
var src = map__28252__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__28512 = cljs.core.next(seq__28242__$1);
var G__28513 = null;
var G__28514 = (0);
var G__28515 = (0);
seq__28242 = G__28512;
chunk__28243 = G__28513;
count__28244 = G__28514;
i__28245 = G__28515;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__28272 = cljs.core.seq(js_requires);
var chunk__28273 = null;
var count__28274 = (0);
var i__28275 = (0);
while(true){
if((i__28275 < count__28274)){
var js_ns = chunk__28273.cljs$core$IIndexed$_nth$arity$2(null,i__28275);
var require_str_28517 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28517);


var G__28518 = seq__28272;
var G__28519 = chunk__28273;
var G__28520 = count__28274;
var G__28521 = (i__28275 + (1));
seq__28272 = G__28518;
chunk__28273 = G__28519;
count__28274 = G__28520;
i__28275 = G__28521;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28272);
if(temp__5457__auto__){
var seq__28272__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28272__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__28272__$1);
var G__28526 = cljs.core.chunk_rest(seq__28272__$1);
var G__28527 = c__4351__auto__;
var G__28528 = cljs.core.count(c__4351__auto__);
var G__28529 = (0);
seq__28272 = G__28526;
chunk__28273 = G__28527;
count__28274 = G__28528;
i__28275 = G__28529;
continue;
} else {
var js_ns = cljs.core.first(seq__28272__$1);
var require_str_28531 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_28531);


var G__28533 = cljs.core.next(seq__28272__$1);
var G__28534 = null;
var G__28535 = (0);
var G__28536 = (0);
seq__28272 = G__28533;
chunk__28273 = G__28534;
count__28274 = G__28535;
i__28275 = G__28536;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__28280 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__28280) : callback.call(null,G__28280));
} else {
var G__28282 = shadow.cljs.devtools.client.env.files_url();
var G__28283 = ((function (G__28282){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__28282))
;
var G__28284 = "POST";
var G__28285 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__28286 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__28282,G__28283,G__28284,G__28285,G__28286);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__28290){
var map__28291 = p__28290;
var map__28291__$1 = ((((!((map__28291 == null)))?(((((map__28291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28291):map__28291);
var msg = map__28291__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28291__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28291__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__28293 = info;
var map__28293__$1 = ((((!((map__28293 == null)))?(((((map__28293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28293):map__28293);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28293__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28293__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__28293,map__28293__$1,sources,compiled,map__28291,map__28291__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28295(s__28296){
return (new cljs.core.LazySeq(null,((function (map__28293,map__28293__$1,sources,compiled,map__28291,map__28291__$1,msg,info,reload_info){
return (function (){
var s__28296__$1 = s__28296;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28296__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__28305 = cljs.core.first(xs__6012__auto__);
var map__28305__$1 = ((((!((map__28305 == null)))?(((((map__28305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28305):map__28305);
var src = map__28305__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28305__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__28296__$1,map__28305,map__28305__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__28293,map__28293__$1,sources,compiled,map__28291,map__28291__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28295_$_iter__28297(s__28298){
return (new cljs.core.LazySeq(null,((function (s__28296__$1,map__28305,map__28305__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__28293,map__28293__$1,sources,compiled,map__28291,map__28291__$1,msg,info,reload_info){
return (function (){
var s__28298__$1 = s__28298;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__28298__$1);
if(temp__5457__auto____$1){
var s__28298__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28298__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__28298__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__28300 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__28299 = (0);
while(true){
if((i__28299 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__28299);
cljs.core.chunk_append(b__28300,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__28562 = (i__28299 + (1));
i__28299 = G__28562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28300),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28295_$_iter__28297(cljs.core.chunk_rest(s__28298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28300),null);
}
} else {
var warning = cljs.core.first(s__28298__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28295_$_iter__28297(cljs.core.rest(s__28298__$2)));
}
} else {
return null;
}
break;
}
});})(s__28296__$1,map__28305,map__28305__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__28293,map__28293__$1,sources,compiled,map__28291,map__28291__$1,msg,info,reload_info))
,null,null));
});})(s__28296__$1,map__28305,map__28305__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__28293,map__28293__$1,sources,compiled,map__28291,map__28291__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__28295(cljs.core.rest(s__28296__$1)));
} else {
var G__28567 = cljs.core.rest(s__28296__$1);
s__28296__$1 = G__28567;
continue;
}
} else {
var G__28568 = cljs.core.rest(s__28296__$1);
s__28296__$1 = G__28568;
continue;
}
} else {
return null;
}
break;
}
});})(map__28293,map__28293__$1,sources,compiled,map__28291,map__28291__$1,msg,info,reload_info))
,null,null));
});})(map__28293,map__28293__$1,sources,compiled,map__28291,map__28291__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__28317_28569 = cljs.core.seq(warnings);
var chunk__28318_28570 = null;
var count__28319_28571 = (0);
var i__28320_28572 = (0);
while(true){
if((i__28320_28572 < count__28319_28571)){
var map__28322_28576 = chunk__28318_28570.cljs$core$IIndexed$_nth$arity$2(null,i__28320_28572);
var map__28322_28577__$1 = ((((!((map__28322_28576 == null)))?(((((map__28322_28576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28322_28576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28322_28576):map__28322_28576);
var w_28578 = map__28322_28577__$1;
var msg_28579__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28322_28577__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28322_28577__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28322_28577__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28322_28577__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28582)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28580),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28581),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28579__$1)].join(''));


var G__28583 = seq__28317_28569;
var G__28584 = chunk__28318_28570;
var G__28585 = count__28319_28571;
var G__28586 = (i__28320_28572 + (1));
seq__28317_28569 = G__28583;
chunk__28318_28570 = G__28584;
count__28319_28571 = G__28585;
i__28320_28572 = G__28586;
continue;
} else {
var temp__5457__auto___28587 = cljs.core.seq(seq__28317_28569);
if(temp__5457__auto___28587){
var seq__28317_28588__$1 = temp__5457__auto___28587;
if(cljs.core.chunked_seq_QMARK_(seq__28317_28588__$1)){
var c__4351__auto___28589 = cljs.core.chunk_first(seq__28317_28588__$1);
var G__28590 = cljs.core.chunk_rest(seq__28317_28588__$1);
var G__28591 = c__4351__auto___28589;
var G__28592 = cljs.core.count(c__4351__auto___28589);
var G__28593 = (0);
seq__28317_28569 = G__28590;
chunk__28318_28570 = G__28591;
count__28319_28571 = G__28592;
i__28320_28572 = G__28593;
continue;
} else {
var map__28327_28598 = cljs.core.first(seq__28317_28588__$1);
var map__28327_28599__$1 = ((((!((map__28327_28598 == null)))?(((((map__28327_28598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28327_28598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28327_28598):map__28327_28598);
var w_28600 = map__28327_28599__$1;
var msg_28601__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28327_28599__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_28602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28327_28599__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28327_28599__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_28604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28327_28599__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_28604)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_28602),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_28603),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_28601__$1)].join(''));


var G__28606 = cljs.core.next(seq__28317_28588__$1);
var G__28607 = null;
var G__28608 = (0);
var G__28609 = (0);
seq__28317_28569 = G__28606;
chunk__28318_28570 = G__28607;
count__28319_28571 = G__28608;
i__28320_28572 = G__28609;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__28293,map__28293__$1,sources,compiled,warnings,map__28291,map__28291__$1,msg,info,reload_info){
return (function (p__28331){
var map__28332 = p__28331;
var map__28332__$1 = ((((!((map__28332 == null)))?(((((map__28332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28332):map__28332);
var src = map__28332__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28332__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28332__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__28293,map__28293__$1,sources,compiled,warnings,map__28291,map__28291__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__28293,map__28293__$1,sources,compiled,warnings,map__28291,map__28291__$1,msg,info,reload_info){
return (function (p__28334){
var map__28335 = p__28334;
var map__28335__$1 = ((((!((map__28335 == null)))?(((((map__28335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28335):map__28335);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__28293,map__28293__$1,sources,compiled,warnings,map__28291,map__28291__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__28293,map__28293__$1,sources,compiled,warnings,map__28291,map__28291__$1,msg,info,reload_info){
return (function (p__28337){
var map__28338 = p__28337;
var map__28338__$1 = ((((!((map__28338 == null)))?(((((map__28338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28338):map__28338);
var rc = map__28338__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28338__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__28293,map__28293__$1,sources,compiled,warnings,map__28291,map__28291__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__28293,map__28293__$1,sources,compiled,warnings,map__28291,map__28291__$1,msg,info,reload_info){
return (function (p1__28288_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__28288_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__28293,map__28293__$1,sources,compiled,warnings,map__28291,map__28291__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__3938__auto__){
return rel_new;
} else {
return and__3938__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__3938__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__3938__auto____$1){
return new$;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__28361){
var map__28362 = p__28361;
var map__28362__$1 = ((((!((map__28362 == null)))?(((((map__28362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28362):map__28362);
var msg = map__28362__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28362__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__28365 = cljs.core.seq(updates);
var chunk__28367 = null;
var count__28368 = (0);
var i__28369 = (0);
while(true){
if((i__28369 < count__28368)){
var path = chunk__28367.cljs$core$IIndexed$_nth$arity$2(null,i__28369);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28371_28658 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28374_28659 = null;
var count__28375_28660 = (0);
var i__28376_28661 = (0);
while(true){
if((i__28376_28661 < count__28375_28660)){
var node_28666 = chunk__28374_28659.cljs$core$IIndexed$_nth$arity$2(null,i__28376_28661);
var path_match_28667 = shadow.cljs.devtools.client.browser.match_paths(node_28666.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28667)){
var new_link_28669 = (function (){var G__28380 = node_28666.cloneNode(true);
G__28380.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28667),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28380;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28667], 0));

goog.dom.insertSiblingAfter(new_link_28669,node_28666);

goog.dom.removeNode(node_28666);


var G__28675 = seq__28371_28658;
var G__28676 = chunk__28374_28659;
var G__28677 = count__28375_28660;
var G__28678 = (i__28376_28661 + (1));
seq__28371_28658 = G__28675;
chunk__28374_28659 = G__28676;
count__28375_28660 = G__28677;
i__28376_28661 = G__28678;
continue;
} else {
var G__28680 = seq__28371_28658;
var G__28681 = chunk__28374_28659;
var G__28682 = count__28375_28660;
var G__28683 = (i__28376_28661 + (1));
seq__28371_28658 = G__28680;
chunk__28374_28659 = G__28681;
count__28375_28660 = G__28682;
i__28376_28661 = G__28683;
continue;
}
} else {
var temp__5457__auto___28692 = cljs.core.seq(seq__28371_28658);
if(temp__5457__auto___28692){
var seq__28371_28693__$1 = temp__5457__auto___28692;
if(cljs.core.chunked_seq_QMARK_(seq__28371_28693__$1)){
var c__4351__auto___28694 = cljs.core.chunk_first(seq__28371_28693__$1);
var G__28695 = cljs.core.chunk_rest(seq__28371_28693__$1);
var G__28696 = c__4351__auto___28694;
var G__28697 = cljs.core.count(c__4351__auto___28694);
var G__28698 = (0);
seq__28371_28658 = G__28695;
chunk__28374_28659 = G__28696;
count__28375_28660 = G__28697;
i__28376_28661 = G__28698;
continue;
} else {
var node_28700 = cljs.core.first(seq__28371_28693__$1);
var path_match_28705 = shadow.cljs.devtools.client.browser.match_paths(node_28700.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28705)){
var new_link_28706 = (function (){var G__28382 = node_28700.cloneNode(true);
G__28382.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28705),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28382;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28705], 0));

goog.dom.insertSiblingAfter(new_link_28706,node_28700);

goog.dom.removeNode(node_28700);


var G__28707 = cljs.core.next(seq__28371_28693__$1);
var G__28708 = null;
var G__28709 = (0);
var G__28710 = (0);
seq__28371_28658 = G__28707;
chunk__28374_28659 = G__28708;
count__28375_28660 = G__28709;
i__28376_28661 = G__28710;
continue;
} else {
var G__28711 = cljs.core.next(seq__28371_28693__$1);
var G__28712 = null;
var G__28713 = (0);
var G__28714 = (0);
seq__28371_28658 = G__28711;
chunk__28374_28659 = G__28712;
count__28375_28660 = G__28713;
i__28376_28661 = G__28714;
continue;
}
}
} else {
}
}
break;
}


var G__28715 = seq__28365;
var G__28716 = chunk__28367;
var G__28717 = count__28368;
var G__28718 = (i__28369 + (1));
seq__28365 = G__28715;
chunk__28367 = G__28716;
count__28368 = G__28717;
i__28369 = G__28718;
continue;
} else {
var G__28719 = seq__28365;
var G__28720 = chunk__28367;
var G__28721 = count__28368;
var G__28722 = (i__28369 + (1));
seq__28365 = G__28719;
chunk__28367 = G__28720;
count__28368 = G__28721;
i__28369 = G__28722;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28365);
if(temp__5457__auto__){
var seq__28365__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28365__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__28365__$1);
var G__28723 = cljs.core.chunk_rest(seq__28365__$1);
var G__28724 = c__4351__auto__;
var G__28725 = cljs.core.count(c__4351__auto__);
var G__28726 = (0);
seq__28365 = G__28723;
chunk__28367 = G__28724;
count__28368 = G__28725;
i__28369 = G__28726;
continue;
} else {
var path = cljs.core.first(seq__28365__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__28383_28727 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__28386_28728 = null;
var count__28387_28729 = (0);
var i__28388_28730 = (0);
while(true){
if((i__28388_28730 < count__28387_28729)){
var node_28731 = chunk__28386_28728.cljs$core$IIndexed$_nth$arity$2(null,i__28388_28730);
var path_match_28732 = shadow.cljs.devtools.client.browser.match_paths(node_28731.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28732)){
var new_link_28733 = (function (){var G__28393 = node_28731.cloneNode(true);
G__28393.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28732),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28393;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28732], 0));

goog.dom.insertSiblingAfter(new_link_28733,node_28731);

goog.dom.removeNode(node_28731);


var G__28734 = seq__28383_28727;
var G__28735 = chunk__28386_28728;
var G__28736 = count__28387_28729;
var G__28737 = (i__28388_28730 + (1));
seq__28383_28727 = G__28734;
chunk__28386_28728 = G__28735;
count__28387_28729 = G__28736;
i__28388_28730 = G__28737;
continue;
} else {
var G__28739 = seq__28383_28727;
var G__28740 = chunk__28386_28728;
var G__28741 = count__28387_28729;
var G__28742 = (i__28388_28730 + (1));
seq__28383_28727 = G__28739;
chunk__28386_28728 = G__28740;
count__28387_28729 = G__28741;
i__28388_28730 = G__28742;
continue;
}
} else {
var temp__5457__auto___28743__$1 = cljs.core.seq(seq__28383_28727);
if(temp__5457__auto___28743__$1){
var seq__28383_28744__$1 = temp__5457__auto___28743__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28383_28744__$1)){
var c__4351__auto___28745 = cljs.core.chunk_first(seq__28383_28744__$1);
var G__28746 = cljs.core.chunk_rest(seq__28383_28744__$1);
var G__28747 = c__4351__auto___28745;
var G__28748 = cljs.core.count(c__4351__auto___28745);
var G__28749 = (0);
seq__28383_28727 = G__28746;
chunk__28386_28728 = G__28747;
count__28387_28729 = G__28748;
i__28388_28730 = G__28749;
continue;
} else {
var node_28750 = cljs.core.first(seq__28383_28744__$1);
var path_match_28752 = shadow.cljs.devtools.client.browser.match_paths(node_28750.getAttribute("href"),path);
if(cljs.core.truth_(path_match_28752)){
var new_link_28756 = (function (){var G__28395 = node_28750.cloneNode(true);
G__28395.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_28752),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__28395;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_28752], 0));

goog.dom.insertSiblingAfter(new_link_28756,node_28750);

goog.dom.removeNode(node_28750);


var G__28757 = cljs.core.next(seq__28383_28744__$1);
var G__28758 = null;
var G__28759 = (0);
var G__28760 = (0);
seq__28383_28727 = G__28757;
chunk__28386_28728 = G__28758;
count__28387_28729 = G__28759;
i__28388_28730 = G__28760;
continue;
} else {
var G__28762 = cljs.core.next(seq__28383_28744__$1);
var G__28763 = null;
var G__28764 = (0);
var G__28765 = (0);
seq__28383_28727 = G__28762;
chunk__28386_28728 = G__28763;
count__28387_28729 = G__28764;
i__28388_28730 = G__28765;
continue;
}
}
} else {
}
}
break;
}


var G__28766 = cljs.core.next(seq__28365__$1);
var G__28767 = null;
var G__28768 = (0);
var G__28769 = (0);
seq__28365 = G__28766;
chunk__28367 = G__28767;
count__28368 = G__28768;
i__28369 = G__28769;
continue;
} else {
var G__28770 = cljs.core.next(seq__28365__$1);
var G__28771 = null;
var G__28772 = (0);
var G__28773 = (0);
seq__28365 = G__28770;
chunk__28367 = G__28771;
count__28368 = G__28772;
i__28369 = G__28773;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__28404){
var map__28405 = p__28404;
var map__28405__$1 = ((((!((map__28405 == null)))?(((((map__28405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28405):map__28405);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__28405,map__28405__$1,id,js){
return (function (){
return eval(js);
});})(map__28405,map__28405__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__28413){
var map__28414 = p__28413;
var map__28414__$1 = ((((!((map__28414 == null)))?(((((map__28414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28414):map__28414);
var msg = map__28414__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28414__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28414__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28414__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28414__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__28414,map__28414__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__28419){
var map__28420 = p__28419;
var map__28420__$1 = ((((!((map__28420 == null)))?(((((map__28420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28420):map__28420);
var src = map__28420__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28420__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__28414,map__28414__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__28414,map__28414__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__28414,map__28414__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__28442){
var map__28443 = p__28442;
var map__28443__$1 = ((((!((map__28443 == null)))?(((((map__28443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28443):map__28443);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28443__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__28443,map__28443__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__28443,map__28443__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__28451){
var map__28454 = p__28451;
var map__28454__$1 = ((((!((map__28454 == null)))?(((((map__28454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28454):map__28454);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__28465){
var map__28466 = p__28465;
var map__28466__$1 = ((((!((map__28466 == null)))?(((((map__28466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28466):map__28466);
var msg = map__28466__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28466__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__28468 = type;
var G__28468__$1 = (((G__28468 instanceof cljs.core.Keyword))?G__28468.fqn:null);
switch (G__28468__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__28472 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__28473 = ((function (G__28472){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__28472))
;
var G__28474 = "POST";
var G__28475 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__28476 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__28472,G__28473,G__28474,G__28475,G__28476);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e28478){var e = e28478;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___28798 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___28798)){
var s_28799 = temp__5457__auto___28798;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_28799.onclose = ((function (s_28799,temp__5457__auto___28798){
return (function (e){
return null;
});})(s_28799,temp__5457__auto___28798))
;

s_28799.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
