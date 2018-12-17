goog.provide('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.ratom');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.interop');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.NativeWrapper = (function (){
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.NativeWrapper.cljs$lang$type = true;

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "mranderson047.reagent.v0v8v0-alpha2.reagent.impl.template/NativeWrapper";

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"mranderson047.reagent.v0v8v0-alpha2.reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for mranderson047.reagent.v0v8v0-alpha2.reagent.impl.template/NativeWrapper.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.__GT_NativeWrapper = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$__GT_NativeWrapper(){
return (new mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.NativeWrapper());
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.named_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_tag_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string'));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.valid_tag_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$valid_tag_QMARK_(x){
return ((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.NativeWrapper)));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.cache_get = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.cached_prop_name = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$cached_prop_name(k){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.named_QMARK_(k)){
var temp__5459__auto__ = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.cache_get(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5459__auto__ == null)){
return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.prop_name_cache[cljs.core.name(k)] = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5459__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.js_val_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.kv_conv = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$kv_conv(o,k,v){
var G__18752 = o;
(G__18752[mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.cached_prop_name(k)] = (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.convert_prop_value.call(null,v)));

return G__18752;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.convert_prop_value = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$convert_prop_value(x){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__18860__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__18860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18862__i = 0, G__18862__a = new Array(arguments.length -  0);
while (G__18862__i < G__18862__a.length) {G__18862__a[G__18862__i] = arguments[G__18862__i + 0]; ++G__18862__i;}
  args = new cljs.core.IndexedSeq(G__18862__a,0,null);
} 
return G__18860__delegate.call(this,args);};
G__18860.cljs$lang$maxFixedArity = 0;
G__18860.cljs$lang$applyTo = (function (arglist__18863){
var args = cljs.core.seq(arglist__18863);
return G__18860__delegate(args);
});
G__18860.cljs$core$IFn$_invoke$arity$variadic = G__18860__delegate;
return G__18860;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.oset = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$oset(o,k,v){
var G__18757 = (((o == null))?({}):o);
(G__18757[k] = v);

return G__18757;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.oget = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.set_id_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = ((((!((id == null))) && ((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.oget(p,"id") == null))))?mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.oset(p,"id",id):p);
var temp__5459__auto__ = (id_class["className"]);
if((temp__5459__auto__ == null)){
return p__$1;
} else {
var class$ = temp__5459__auto__;
var old = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.oget(p__$1,"className");
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.oset(p__$1,"className",(((old == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old)].join('')));
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.stringify_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$stringify_class(p__18779){
var map__18780 = p__18779;
var map__18780__$1 = ((((!((map__18780 == null)))?(((((map__18780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18780):map__18780);
var props = map__18780__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18780__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,class$)));
} else {
return props;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.convert_props = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$convert_props(props,id_class){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.set_id_class(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.convert_prop_value(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.stringify_class(props)),id_class);
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2 !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.impl !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.find_dom_node !== 'undefined')){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.find_dom_node = null;
}
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.has_selection_api_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_node_set_value = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__18785){
var map__18786 = p__18785;
var map__18786__$1 = ((((!((map__18786 == null)))?(((((map__18786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18786):map__18786);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18786__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if(!((((node === (document["activeElement"]))) && (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.has_selection_api_QMARK_((node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string')))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.do_after_render(((function (node_value,map__18786,map__18786__$1,on_write){
return (function (){
return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_set_value.call(null,component));
});})(node_value,map__18786,map__18786__$1,on_write))
);
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_set_value = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.find_dom_node.call(null,this$));
var synthetic_on_update = (this$["cljsSyntheticOnUpdate"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
if(cljs.core.fn_QMARK_(synthetic_on_update)){
return (synthetic_on_update.cljs$core$IFn$_invoke$arity$5 ? synthetic_on_update.cljs$core$IFn$_invoke$arity$5(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_node_set_value,node,rendered_value,dom_value,this$) : synthetic_on_update.call(null,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_node_set_value,node,rendered_value,dom_value,this$));
} else {
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return null;
}
} else {
return null;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_handle_change = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.do_after_render((function (){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$input_render_setup(var_args){
var G__18798 = arguments.length;
switch (G__18798) {
case 3:
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3 = (function (this$,jsprops,p__18799){
var map__18800 = p__18799;
var map__18800__$1 = ((((!((map__18800 == null)))?(((((map__18800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18800):map__18800);
var synthetic_on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18800__$1,new cljs.core.Keyword(null,"synthetic-on-update","synthetic-on-update",1615571932));
var synthetic_on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18800__$1,new cljs.core.Keyword(null,"synthetic-on-change","synthetic-on-change",-2073813537));
if(cljs.core.truth_((function (){var and__3938__auto__ = !((jsprops == null));
if(and__3938__auto__){
var and__3938__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__3938__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
if(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

if(cljs.core.truth_(synthetic_on_update)){
(this$["cljsSyntheticOnUpdate"] = synthetic_on_update);
} else {
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
var on_change__$1 = (cljs.core.truth_(synthetic_on_change)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(synthetic_on_change,on_change):on_change);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__18805 = jsprops;
(G__18805["defaultValue"] = value);

(G__18805["onChange"] = ((function (G__18805,v,value,on_change,on_change__$1,map__18800,map__18800__$1,synthetic_on_update,synthetic_on_change){
return (function (p1__18796_SHARP_){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_handle_change(this$,on_change__$1,p1__18796_SHARP_);
});})(G__18805,v,value,on_change,on_change__$1,map__18800,map__18800__$1,synthetic_on_update,synthetic_on_change))
);

return G__18805;
} else {
return null;
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2 = (function (this$,jsprops){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3(this$,jsprops,cljs.core.PersistentArrayMap.EMPTY);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup.cljs$lang$maxFixedArity = 3;

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_unmount = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$input_component_QMARK_(x){
var G__18807 = x;
switch (G__18807) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_input_class = null;
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_synthetic_input_class = null;
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component._STAR_current_component_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2(this$,jsprops);

return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.synthetic_input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentSyntheticInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (on_update,on_change,argv,comp,jsprops,first_child){
var this$ = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component._STAR_current_component_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3(this$,jsprops,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"synthetic-on-update","synthetic-on-update",1615571932),on_update,new cljs.core.Keyword(null,"synthetic-on-change","synthetic-on-change",-2073813537),on_change], null));

return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_input = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$reagent_input(){
if((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_input_class == null)){
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_input_class = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.create_class(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_spec);
} else {
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_input_class;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_synthetic_input = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$reagent_synthetic_input(){
if((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_synthetic_input_class == null)){
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_synthetic_input_class = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.create_class(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.synthetic_input_spec);
} else {
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_synthetic_input_class;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.parse_tag = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$parse_tag(hiccup_tag){
var vec__18811 = cljs.core.next(cljs.core.re_matches(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18811,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18811,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18811,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace(class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.comp_name())].join('')),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "className": class$__$1});
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.try_get_key = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e18817){var e = e18817;
return null;
}});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.get_key = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.key_from_vec = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$key_from_vec(v){
var temp__5459__auto__ = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5459__auto__;
return k;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reag_element = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$reag_element(tag,v){
var c = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_class(tag);
var jsprops = ({"argv": v});
var temp__5461__auto___18904 = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.key_from_vec(v);
if((temp__5461__auto___18904 == null)){
} else {
var key_18907 = temp__5461__auto___18904;
(jsprops["key"] = key_18907);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.adapt_react_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$adapt_react_class(var_args){
var G__18820 = arguments.length;
switch (G__18820) {
case 2:
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,p__18822){
var map__18824 = p__18822;
var map__18824__$1 = ((((!((map__18824 == null)))?(((((map__18824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18824):map__18824);
var synthetic_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,new cljs.core.Keyword(null,"synthetic-input","synthetic-input",-135147697));
var on_update = new cljs.core.Keyword(null,"on-update","on-update",1680216496).cljs$core$IFn$_invoke$arity$1(synthetic_input);
var on_change = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(synthetic_input);
if(cljs.core.truth_(synthetic_input)){
if(cljs.core.fn_QMARK_(on_update)){
} else {
throw (new Error("Assert failed: (fn? on-update)"));
}

if(cljs.core.fn_QMARK_(on_change)){
} else {
throw (new Error("Assert failed: (fn? on-change)"));
}
} else {
}

var wrapped = (function (){var G__18828 = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.__GT_NativeWrapper();
(G__18828["name"] = c);

(G__18828["id"] = null);

(G__18828["class"] = null);

return G__18828;
})();
var wrapped__$1 = (cljs.core.truth_(synthetic_input)?(function (){var G__18829 = wrapped;
(G__18829["syntheticInput"] = true);

return G__18829;
})():wrapped);
var wrapped__$2 = (cljs.core.truth_(synthetic_input)?(function (){var G__18830 = wrapped__$1;
(G__18830["syntheticOnChange"] = on_change);

return G__18830;
})():wrapped__$1);
var wrapped__$3 = (cljs.core.truth_(synthetic_input)?(function (){var G__18831 = wrapped__$2;
(G__18831["syntheticOnUpdate"] = on_update);

return G__18831;
})():wrapped__$2);
return wrapped__$3;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.adapt_react_class.cljs$lang$maxFixedArity = 2;

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.tag_name_cache = ({});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.cached_parse = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$cached_parse(x){
var temp__5459__auto__ = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.cache_get(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.tag_name_cache,x);
if((temp__5459__auto__ == null)){
return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.tag_name_cache[x] = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.parse_tag(x));
} else {
var s = temp__5459__auto__;
return s;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.native_element = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var synthetic_input = (parsed["syntheticInput"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(cljs.core.truth_((function (){var or__3949__auto__ = synthetic_input;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.input_component_QMARK_(comp);
}
})())){
var G__18835 = cljs.core.with_meta((cljs.core.truth_(synthetic_input)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_synthetic_input(),(parsed["syntheticOnUpdate"]),(parsed["syntheticOnChange"]),argv,comp,jsprops,first_child], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reagent_input(),argv,comp,jsprops,first_child], null)),cljs.core.meta(argv));
return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__18835) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element.call(null,G__18835));
} else {
var key = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.get_key(cljs.core.meta(argv));
var p = (((key == null))?jsprops:mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.oset(jsprops,"key",key));
return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element.call(null,argv,comp,p,first_child));
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.str_coll = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$str_coll(coll){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.fun_name(x);
var G__18836 = n;
switch (G__18836) {
case "":
return x;

break;
default:
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
} else {
return x;
}
}),coll))].join('');

});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$hiccup_err(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18947 = arguments.length;
var i__4532__auto___18948 = (0);
while(true){
if((i__4532__auto___18948 < len__4531__auto___18947)){
args__4534__auto__.push((arguments[i__4532__auto___18948]));

var G__18949 = (i__4532__auto___18948 + (1));
i__4532__auto___18948 = G__18949;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.str_coll(v)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.comp_name())].join('');
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq18837){
var G__18838 = cljs.core.first(seq18837);
var seq18837__$1 = cljs.core.next(seq18837);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18838,seq18837__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.vec_to_elem = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0))),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0))),"\n","(valid-tag? tag)"].join('')));
}

if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__18842 = pos;
switch (G__18842) {
case (-1):
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.native_element(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0))),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_(comp)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected React component in"], 0))),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.native_element(({"name": comp}),v,(2));

break;
default:
var G__18956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null);
v = G__18956;
continue;

}
} else {
if((tag instanceof mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.NativeWrapper)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.native_element(tag,v,(1));
} else {
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.reag_element(tag,v);

}
}
break;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$as_element(x){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element;
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.expand_seq = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4408__auto___18962 = a.length;
var i_18963 = (0);
while(true){
if((i_18963 < n__4408__auto___18962)){
(a[i_18963] = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element((a[i_18963])));

var G__18967 = (i_18963 + (1));
i_18963 = G__18967;
continue;
} else {
}
break;
}

return a;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.expand_seq_dev = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4408__auto___18968 = a.length;
var i_18969 = (0);
while(true){
if((i_18969 < n__4408__auto___18968)){
var val_18970 = (a[i_18969]);
if(((cljs.core.vector_QMARK_(val_18970)) && ((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.key_from_vec(val_18970) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_18969] = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element(val_18970));

var G__18971 = (i_18969 + (1));
i_18969 = G__18971;
continue;
} else {
}
break;
}

return a;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.expand_seq_check = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__18848 = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.check_derefs(((function (ctx){
return (function (){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking)?mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0)))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking)?mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0)))].join(''));
} else {
}
} else {
}

return res;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.make_element = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__18851 = (cljs.core.count(argv) - first_child);
switch (G__18851) {
case (0):
return module$node_modules$react$index.createElement(comp,jsprops);

break;
case (1):
var G__18852 = comp;
var G__18853 = jsprops;
var G__18854 = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null));
return module$node_modules$react$index.createElement(G__18852,G__18853,G__18854);

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv(((function (G__18851){
return (function (a,k,v){
if((k >= first_child)){
a.push(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element(v));
} else {
}

return a;
});})(G__18851))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.js.map
