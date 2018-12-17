goog.provide('mranderson047.garden.v1v3v3.garden.compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson047.garden.v1v3v3.garden.color');
goog.require('mranderson047.garden.v1v3v3.garden.compression');
goog.require('mranderson047.garden.v1v3v3.garden.selectors');
goog.require('mranderson047.garden.v1v3v3.garden.units');
goog.require('mranderson047.garden.v1v3v3.garden.util');
goog.require('mranderson047.garden.v1v3v3.garden.types');
/**
 * The current compiler flags.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
mranderson047.garden.v1v3v3.garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,expr], 0));
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = null;
/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
mranderson047.garden.v1v3v3.garden.compiler.vendors = (function mranderson047$garden$v1v3v3$garden$compiler$vendors(){
return cljs.core.seq(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
mranderson047.garden.v1v3v3.garden.compiler.auto_prefixed_properties = (function mranderson047$garden$v1v3v3$garden$compiler$auto_prefixed_properties(){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_)));
});
mranderson047.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_ = (function mranderson047$garden$v1v3v3$garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_(mranderson047.garden.v1v3v3.garden.compiler.auto_prefixed_properties(),property);
});
mranderson047.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_ = (function mranderson047$garden$v1v3v3$garden$compiler$top_level_expression_QMARK_(x){
var or__3949__auto__ = (mranderson047.garden.v1v3v3.garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1 ? mranderson047.garden.v1v3v3.garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : mranderson047.garden.v1v3v3.garden.util.rule_QMARK_.call(null,x));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = mranderson047.garden.v1v3v3.garden.util.at_import_QMARK_(x);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_(x);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_(x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
mranderson047.garden.v1v3v3.garden.compiler.divide_vec = (function mranderson047$garden$v1v3v3$garden$compiler$divide_vec(pred,coll){
var fexpr__18299 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove);
return (fexpr__18299.cljs$core$IFn$_invoke$arity$2 ? fexpr__18299.cljs$core$IFn$_invoke$arity$2(pred,coll) : fexpr__18299.call(null,pred,coll));
});

/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
mranderson047.garden.v1v3v3.garden.compiler.expand = (function mranderson047$garden$v1v3v3$garden$compiler$expand(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 == null))))){
return this$.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mranderson047.garden.v1v3v3.garden.compiler.expand[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (mranderson047.garden.v1v3v3.garden.compiler.expand["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
mranderson047.garden.v1v3v3.garden.compiler.expand_seqs = (function mranderson047$garden$v1v3v3$garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core.seq_QMARK_(x)){
return (mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1 ? mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1(x) : mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,x));
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});
mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1 = (function mranderson047$garden$v1v3v3$garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_(declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__18312_SHARP_,p2__18313_SHARP_){
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18312_SHARP_,"-",p2__18313_SHARP_], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (prefix){
return (function (m,p__18314){
var vec__18316 = p__18314;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(1),null);
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_(v))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__18316,k,v,prefix){
return (function (m1,p__18322){
var vec__18323 = p__18322;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18323,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18323,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m1,prefix(k,k1),v1);
});})(vec__18316,k,v,prefix))
,m,(mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1 ? mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1(v) : mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,mranderson047.garden.v1v3v3.garden.util.to_str(k),v);
}
});})(prefix))
,cljs.core.empty(declaration),declaration);
});
mranderson047.garden.v1v3v3.garden.compiler.expand_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_(declaration)){
return declaration;
} else {
return cljs.core.with_meta(mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1(declaration),cljs.core.meta(declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
mranderson047.garden.v1v3v3.garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
mranderson047.garden.v1v3v3.garden.compiler.extract_reference = (function mranderson047$garden$v1v3v3$garden$compiler$extract_reference(selector){
var temp__5457__auto__ = cljs.core.re_find(mranderson047.garden.v1v3v3.garden.compiler.parent_selector_re,mranderson047.garden.v1v3v3.garden.util.to_str(cljs.core.last(selector)));
if(cljs.core.truth_(temp__5457__auto__)){
var reference = temp__5457__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(reference));
} else {
return null;
}
});
mranderson047.garden.v1v3v3.garden.compiler.expand_selector_reference = (function mranderson047$garden$v1v3v3$garden$compiler$expand_selector_reference(selector){
var temp__5455__auto__ = mranderson047.garden.v1v3v3.garden.compiler.extract_reference(selector);
if(cljs.core.truth_(temp__5455__auto__)){
var reference = temp__5455__auto__;
var parent = cljs.core.butlast(selector);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parent),(new cljs.core.List(null,mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(parent),reference], 0)),null,(1),null)));
} else {
return selector;
}
});
mranderson047.garden.v1v3v3.garden.compiler.expand_selector = (function mranderson047$garden$v1v3v3$garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq(parent))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent,selector__$1], 0))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,selector__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.expand_selector_reference,selector__$2);
});
mranderson047.garden.v1v3v3.garden.compiler.expand_rule = (function mranderson047$garden$v1v3v3$garden$compiler$expand_rule(rule){
var vec__18332 = cljs.core.split_with(mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18332,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18332,(1),null);
var selector__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand_selector(selector,mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
var children__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand(children);
var vec__18335 = mranderson047.garden.v1v3v3.garden.compiler.divide_vec(mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18335,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18335,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_18339 = mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq(selector__$1))?selector__$1:mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mranderson047.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs], 0)));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_18339;
}})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ys,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mranderson047.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declarations], 0))));
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.garden !== 'undefined') && (typeof mranderson047.garden.v1v3v3 !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule !== 'undefined')){
} else {
mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("mranderson047.garden.v1v3v3.garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__18340){
var map__18341 = p__18340;
var map__18341__$1 = ((((!((map__18341 == null)))?(((((map__18341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18341):map__18341);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18341__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__18343 = value;
var map__18343__$1 = ((((!((map__18343 == null)))?(((((map__18343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18343):map__18343);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18343__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18343__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return (new cljs.core.List(null,(new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),mranderson047.garden.v1v3v3.garden.util.to_str(identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mranderson047.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frames], 0))], null),null,null,null)),null,(1),null));
}));
mranderson047.garden.v1v3v3.garden.compiler.expand_media_query_expression = (function mranderson047$garden$v1v3v3$garden$compiler$expand_media_query_expression(expression){
var temp__5455__auto__ = (function (){var G__18349 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null));
return (mranderson047.garden.v1v3v3.garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1 ? mranderson047.garden.v1v3v3.garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1(G__18349) : mranderson047.garden.v1v3v3.garden.compiler.media_expression_behavior.call(null,G__18349));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(expression,mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_) : f.call(null,expression,mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_));
} else {
return expression;
}
});
mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__18350){
var map__18352 = p__18350;
var map__18352__$1 = ((((!((map__18352 == null)))?(((((map__18352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18352):map__18352);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__18355 = value;
var map__18355__$1 = ((((!((map__18355 == null)))?(((((map__18355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18355):map__18355);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18355__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18355__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand_media_query_expression(media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_18360 = mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mranderson047.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson047.garden.v1v3v3.garden.compiler.expand(rules)], 0)));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_18360;
}})();
var vec__18356 = mranderson047.garden.v1v3v3.garden.compiler.divide_vec(mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18356,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18356,(1),null);
return cljs.core.cons((new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
mranderson047.garden.v1v3v3.garden.compiler.expand_stylesheet = (function mranderson047$garden$v1v3v3$garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.expand,mranderson047.garden.v1v3v3.garden.compiler.expand(xs)));
});
goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.IExpandable,"null",true);

var G__18367_18528 = mranderson047.garden.v1v3v3.garden.compiler.expand;
var G__18368_18529 = "null";
var G__18369_18530 = ((function (G__18367_18528,G__18368_18529){
return (function (this$){
return null;
});})(G__18367_18528,G__18368_18529))
;
goog.object.set(G__18367_18528,G__18368_18529,G__18369_18530);

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.IExpandable,"_",true);

var G__18381_18531 = mranderson047.garden.v1v3v3.garden.compiler.expand;
var G__18382_18532 = "_";
var G__18383_18533 = ((function (G__18381_18531,G__18382_18532){
return (function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
});})(G__18381_18531,G__18382_18532))
;
goog.object.set(G__18381_18531,G__18382_18532,G__18383_18533);

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1 ? mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule.call(null,this$__$1));
});

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_css = (function mranderson047$garden$v1v3v3$garden$compiler$render_css(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 == null))))){
return this$.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mranderson047.garden.v1v3v3.garden.compiler.render_css[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (mranderson047.garden.v1v3v3.garden.compiler.render_css["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSSRenderer.render-css",this$);
}
}
}
});

mranderson047.garden.v1v3v3.garden.compiler.comma = ", ";
mranderson047.garden.v1v3v3.garden.compiler.colon = ": ";
mranderson047.garden.v1v3v3.garden.compiler.semicolon = ";";
mranderson047.garden.v1v3v3.garden.compiler.l_brace = " {\n";
mranderson047.garden.v1v3v3.garden.compiler.r_brace = "\n}";
mranderson047.garden.v1v3v3.garden.compiler.l_brace_1 = " {\n\n";
mranderson047.garden.v1v3v3.garden.compiler.r_brace_1 = "\n\n}";
mranderson047.garden.v1v3v3.garden.compiler.rule_sep = "\n\n";
mranderson047.garden.v1v3v3.garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
mranderson047.garden.v1v3v3.garden.compiler.space_separated_list = (function mranderson047$garden$v1v3v3$garden$compiler$space_separated_list(var_args){
var G__18399 = arguments.length;
switch (G__18399) {
case 1:
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,xs);
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list = (function mranderson047$garden$v1v3v3$garden$compiler$comma_separated_list(var_args){
var G__18405 = arguments.length;
switch (G__18405) {
case 1:
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,xs);
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4324__auto__ = (function mranderson047$garden$v1v3v3$garden$compiler$iter__18406(s__18407){
return (new cljs.core.LazySeq(null,(function (){
var s__18407__$1 = s__18407;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18407__$1);
if(temp__5457__auto__){
var s__18407__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18407__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18407__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18409 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18408 = (0);
while(true){
if((i__18408 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18408);
cljs.core.chunk_append(b__18409,((cljs.core.sequential_QMARK_(x))?mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))));

var G__18537 = (i__18408 + (1));
i__18408 = G__18537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18409),mranderson047$garden$v1v3v3$garden$compiler$iter__18406(cljs.core.chunk_rest(s__18407__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18409),null);
}
} else {
var x = cljs.core.first(s__18407__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))),mranderson047$garden$v1v3v3$garden$compiler$iter__18406(cljs.core.rest(s__18407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.comma,ys);
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

mranderson047.garden.v1v3v3.garden.compiler.rule_join = (function mranderson047$garden$v1v3v3$garden$compiler$rule_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
mranderson047.garden.v1v3v3.garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
mranderson047.garden.v1v3v3.garden.compiler.indent_str = (function mranderson047$garden$v1v3v3$garden$compiler$indent_str(s){
return s.replace(mranderson047.garden.v1v3v3.garden.compiler.indent_loc_re,mranderson047.garden.v1v3v3.garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_value = (function mranderson047$garden$v1v3v3$garden$compiler$render_value(x){
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_(x))){
return mranderson047.garden.v1v3v3.garden.util.to_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return mranderson047.garden.v1v3v3.garden.compiler.render_css(x);
}
});
mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value = (function mranderson047$garden$v1v3v3$garden$compiler$render_property_and_value(p__18410){
var vec__18412 = p__18410;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18412,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18412,(1),null);
if(cljs.core.set_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_(val))?mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_value,val):mranderson047.garden.v1v3v3.garden.compiler.render_value(val));
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop,mranderson047.garden.v1v3v3.garden.compiler.colon,val__$1,mranderson047.garden.v1v3v3.garden.compiler.semicolon], 0));
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
mranderson047.garden.v1v3v3.garden.compiler.add_blocks = (function mranderson047$garden$v1v3v3$garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__18415_SHARP_){
return cljs.core.cons(p1__18415_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__18415_SHARP_) : f.call(null,p1__18415_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declaration], 0));
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks = (function mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks(vendors,p__18416){
var vec__18417 = p__18416;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18417,(1),null);
var iter__4324__auto__ = ((function (vec__18417,p,v){
return (function mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__18420(s__18421){
return (new cljs.core.LazySeq(null,((function (vec__18417,p,v){
return (function (){
var s__18421__$1 = s__18421;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18421__$1);
if(temp__5457__auto__){
var s__18421__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18421__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18421__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18423 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18422 = (0);
while(true){
if((i__18422 < size__4323__auto__)){
var vendor = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18422);
cljs.core.chunk_append(b__18423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null));

var G__18547 = (i__18422 + (1));
i__18422 = G__18547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18423),mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__18420(cljs.core.chunk_rest(s__18421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18423),null);
}
} else {
var vendor = cljs.core.first(s__18421__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null),mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__18420(cljs.core.rest(s__18421__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18417,p,v))
,null,null));
});})(vec__18417,p,v))
;
return iter__4324__auto__(vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_all_properties = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_all_properties(vendors,declaration){
return mranderson047.garden.v1v3v3.garden.compiler.add_blocks(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_auto_properties = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_auto_properties(vendors,declaration){
return mranderson047.garden.v1v3v3.garden.compiler.add_blocks((function (block){
var vec__18424 = block;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(1),null);
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_(cljs.core.name(p)))){
return mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks(vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return mranderson047.garden.v1v3v3.garden.compiler.vendors();
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration)))?mranderson047.garden.v1v3v3.garden.compiler.prefix_all_properties:mranderson047.garden.v1v3v3.garden.compiler.prefix_auto_properties);
return (prefix_fn.cljs$core$IFn$_invoke$arity$2 ? prefix_fn.cljs$core$IFn$_invoke$arity$2(vendors,declaration) : prefix_fn.call(null,vendors,declaration));
});
mranderson047.garden.v1v3v3.garden.compiler.render_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$render_declaration(declaration){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value,mranderson047.garden.v1v3v3.garden.compiler.prefix_declaration(declaration)));
});
mranderson047.garden.v1v3v3.garden.compiler.render_selector = (function mranderson047$garden$v1v3v3$garden$compiler$render_selector(selector){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_rule = (function mranderson047$garden$v1v3v3$garden$compiler$render_rule(p__18431){
var vec__18432 = p__18431;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18432,(0),null);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18432,(1),null);
var rule = vec__18432;
if(((cljs.core.seq(rule)) && (cljs.core.every_QMARK_(cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.render_selector(selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_media_expr_part = (function mranderson047$garden$v1v3v3$garden$compiler$render_media_expr_part(p__18436){
var vec__18437 = p__18436;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18437,(1),null);
var vec__18440 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18440,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18440,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.seq(sv);
} else {
return and__3938__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
mranderson047.garden.v1v3v3.garden.compiler.render_media_expr = (function mranderson047$garden$v1v3v3$garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_unit = (function mranderson047$garden$v1v3v3$garden$compiler$render_unit(css_unit){
var map__18443 = css_unit;
var map__18443__$1 = ((((!((map__18443 == null)))?(((((map__18443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18443):map__18443);
var magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18443__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18443__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(unit))].join('');
});
/**
 * Render a CSS function.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_function = (function mranderson047$garden$v1v3v3$garden$compiler$render_function(css_function){
var map__18445 = css_function;
var map__18445__$1 = ((((!((map__18445 == null)))?(((((map__18445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18445):map__18445);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18445__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18445__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_(args))?mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(args):mranderson047.garden.v1v3v3.garden.util.to_str(args));
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%s(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson047.garden.v1v3v3.garden.util.to_str(function$),args__$1], 0));
});
mranderson047.garden.v1v3v3.garden.compiler.render_color = (function mranderson047$garden$v1v3v3$garden$compiler$render_color(c){
var temp__5455__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5455__auto__)){
var a = temp__5455__auto__;
var map__18447 = mranderson047.garden.v1v3v3.garden.color.as_hsl(c);
var map__18447__$1 = ((((!((map__18447 == null)))?(((((map__18447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18447):map__18447);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18447__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18447__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18447__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__18448 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18448,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18448,(1),null);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("hsla(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null))], 0));
} else {
return mranderson047.garden.v1v3v3.garden.color.as_hex(c);
}
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.garden !== 'undefined') && (typeof mranderson047.garden.v1v3v3 !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden.compiler.render_at_rule !== 'undefined')){
} else {
/**
 * Render a CSS at-rule
 */
mranderson047.garden.v1v3v3.garden.compiler.render_at_rule = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("mranderson047.garden.v1v3v3.garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__18452){
var map__18453 = p__18452;
var map__18453__$1 = ((((!((map__18453 == null)))?(((((map__18453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18453):map__18453);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18453__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__18455 = value;
var map__18455__$1 = ((((!((map__18455 == null)))?(((((map__18455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18455):map__18455);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18455__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18455__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?mranderson047.garden.v1v3v3.garden.util.wrap_quotes(url):mranderson047.garden.v1v3v3.garden.compiler.render_css(url));
var queries = (cljs.core.truth_(media_queries)?mranderson047.garden.v1v3v3.garden.compiler.render_media_expr(media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.semicolon)].join('');
}));
mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__18458){
var map__18459 = p__18458;
var map__18459__$1 = ((((!((map__18459 == null)))?(((((map__18459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18459):map__18459);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18459__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__18461 = value;
var map__18461__$1 = ((((!((map__18461 == null)))?(((((map__18461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18461):map__18461);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18461__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18461__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq(frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.util.to_str(identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str(mranderson047.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__18461,map__18461__$1,identifier,frames,map__18459,map__18459__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.util.vendor_prefix(vendor,"keyframes "))].join('');
});})(body,map__18461,map__18461__$1,identifier,frames,map__18459,map__18459__$1,value))
;
return mranderson047.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (body,prefix,map__18461,map__18461__$1,identifier,frames,map__18459,map__18459__$1,value){
return (function (p1__18457_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18457_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__18461,map__18461__$1,identifier,frames,map__18459,map__18459__$1,value))
,cljs.core.cons("@keyframes ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(prefix,mranderson047.garden.v1v3v3.garden.compiler.vendors()))));
} else {
return null;
}
}));
mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__18463){
var map__18464 = p__18463;
var map__18464__$1 = ((((!((map__18464 == null)))?(((((map__18464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18464):map__18464);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18464__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__18466 = value;
var map__18466__$1 = ((((!((map__18466 == null)))?(((((map__18466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18466):map__18466);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18466__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18466__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq(rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.render_media_expr(media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str(mranderson047.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"null",true);

var G__18472_18567 = mranderson047.garden.v1v3v3.garden.compiler.render_css;
var G__18473_18568 = "null";
var G__18474_18569 = ((function (G__18472_18567,G__18473_18568){
return (function (this$){
return "";
});})(G__18472_18567,G__18473_18568))
;
goog.object.set(G__18472_18567,G__18473_18568,G__18474_18569);

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_color(this$__$1);
});

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_unit(this$__$1);
});

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"number",true);

var G__18478_18572 = mranderson047.garden.v1v3v3.garden.compiler.render_css;
var G__18479_18573 = "number";
var G__18480_18574 = ((function (G__18478_18572,G__18479_18573){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__18478_18572,G__18479_18573))
;
goog.object.set(G__18478_18572,G__18479_18573,G__18480_18574);

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_function(this$__$1);
});

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"_",true);

var G__18484_18575 = mranderson047.garden.v1v3v3.garden.compiler.render_css;
var G__18485_18576 = "_";
var G__18486_18577 = ((function (G__18484_18575,G__18485_18576){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__18484_18575,G__18485_18576))
;
goog.object.set(G__18484_18575,G__18485_18576,G__18486_18577);

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
});

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return (mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1 ? mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.call(null,this$__$1));
});

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
});

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
});

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
});

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
mranderson047.garden.v1v3v3.garden.compiler.compile_style = (function mranderson047$garden$v1v3v3$garden$compiler$compile_style(ms){
return cljs.core.first(mranderson047.garden.v1v3v3.garden.compiler.render_css(mranderson047.garden.v1v3v3.garden.compiler.expand(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_compile = (function mranderson047$garden$v1v3v3$garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_18487 = mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = flags;

try{return mranderson047.garden.v1v3v3.garden.compiler.rule_join(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.render_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_,mranderson047.garden.v1v3v3.garden.compiler.expand_stylesheet(rules)))));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_18487;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_preamble = (function mranderson047$garden$v1v3v3$garden$compiler$do_preamble(p__18488,stylesheet){
var map__18489 = p__18488;
var map__18489__$1 = ((((!((map__18489 == null)))?(((((map__18489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18489):map__18489);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18489__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_compression = (function mranderson047$garden$v1v3v3$garden$compiler$do_compression(p__18496,stylesheet){
var map__18497 = p__18496;
var map__18497__$1 = ((((!((map__18497 == null)))?(((((map__18497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18497):map__18497);
var pretty_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__3949__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return mranderson047.garden.v1v3v3.garden.compression.compress_stylesheet(stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_output_to = (function mranderson047$garden$v1v3v3$garden$compiler$do_output_to(p__18499,stylesheet){
var map__18500 = p__18499;
var map__18500__$1 = ((((!((map__18500 == null)))?(((((map__18500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18500):map__18500);
var output_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18500__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.compile_css = (function mranderson047$garden$v1v3v3$garden$compiler$compile_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18578 = arguments.length;
var i__4532__auto___18579 = (0);
while(true){
if((i__4532__auto___18579 < len__4531__auto___18578)){
args__4534__auto__.push((arguments[i__4532__auto___18579]));

var G__18580 = (i__4532__auto___18579 + (1));
i__4532__auto___18579 = G__18580;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__18506 = (cljs.core.truth_((function (){var and__3938__auto__ = mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_(flags);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.some(cljs.core.set(cljs.core.keys(flags)),cljs.core.keys(mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,flags], 0)),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,cljs.core.cons(flags,rules)], null));
var flags__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18506,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18506,(1),null);
return mranderson047.garden.v1v3v3.garden.compiler.do_output_to(flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_compression(flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_preamble(flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_compile(flags__$1,rules__$1))));
});

mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$applyTo = (function (seq18504){
var G__18505 = cljs.core.first(seq18504);
var seq18504__$1 = cljs.core.next(seq18504);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18505,seq18504__$1);
});


//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.compiler.js.map
