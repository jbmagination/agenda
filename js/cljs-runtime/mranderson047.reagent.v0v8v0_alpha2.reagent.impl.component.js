goog.provide('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component');
goog.require('cljs.core');
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.ratom');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.interop');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.debug');
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.shallow_obj_to_map = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__18725 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k]));
var G__18726 = (i + (1));
m = G__18725;
i = G__18726;
continue;
} else {
return m;
}
break;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.extract_props = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.extract_children = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.props_argv = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$props_argv(c,p){
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.shallow_obj_to_map(p)], null);
} else {
var a = temp__5459__auto__;
return a;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_argv = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$get_argv(c){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.props_argv(c,(c["props"]));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_props = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.shallow_obj_to_map(p);
} else {
var v = temp__5459__auto__;
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.extract_props(v);
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_children = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__18609 = (p["children"]);
return module$node_modules$react$index.Children.toArray(G__18609);
})());
} else {
var v = temp__5459__auto__;
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.extract_children(v);
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_class_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && (!(((function (){var G__18620 = c;
var G__18620__$1 = (((G__18620 == null))?null:G__18620.prototype);
if((G__18620__$1 == null)){
return null;
} else {
return (G__18620__$1["reagentRender"]);
}
})() == null))));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.react_class_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && (!(((function (){var G__18623 = c;
var G__18623__$1 = (((G__18623 == null))?null:G__18623.prototype);
if((G__18623__$1 == null)){
return null;
} else {
return (G__18623__$1["render"]);
}
})() == null))));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_component_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$reagent_component_QMARK_(c){
return !(((c["reagentRender"]) == null));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.cached_react_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.cache_react_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.state_atom = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2 !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.impl !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element !== 'undefined')){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element = null;
}
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.wrap_render = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))].join('')),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__18625 = n;
switch (G__18625) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(res) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element.call(null,res));
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,res){
return (function() { 
var G__18731__delegate = function (args){
var G__18629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(G__18629) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_element.call(null,G__18629));
};
var G__18731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18733__i = 0, G__18733__a = new Array(arguments.length -  0);
while (G__18733__i < G__18733__a.length) {G__18733__a[G__18733__i] = arguments[G__18733__i + 0]; ++G__18733__i;}
  args = new cljs.core.IndexedSeq(G__18733__a,0,null);
} 
return G__18731__delegate.call(this,args);};
G__18731.cljs$lang$maxFixedArity = 0;
G__18731.cljs$lang$applyTo = (function (arglist__18734){
var args = cljs.core.seq(arglist__18734);
return G__18731__delegate(args);
});
G__18731.cljs$core$IFn$_invoke$arity$variadic = G__18731__delegate;
return G__18731;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__18735 = c;
c = G__18735;
continue;
} else {
return res;

}
}
break;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.do_render = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_18647 = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component._STAR_current_component_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component._STAR_current_component_STAR_ = c;

try{var ok = [false];
try{var res = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.wrap_render(c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking)?mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0() : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.comp_name.call(null)))].join(''))].join(''));
} else {
}
}
}
}finally {mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_18647;
}});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$render(){
var c = this;
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util._STAR_non_reactive_STAR_){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.run_in_reaction(((function (rat,c){
return (function (){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.do_render(c);
});})(rat,c))
,c,"cljsRatom",mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.queue_render,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.custom_wrapper = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper(key,f){
var G__18666 = key;
var G__18666__$1 = (((G__18666 instanceof cljs.core.Keyword))?G__18666.fqn:null);
switch (G__18666__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.state_atom(c),f.call(c,c));
});
;})(G__18666,G__18666__$1))

break;
case "componentWillReceiveProps":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.props_argv(c,nextprops));
});
;})(G__18666,G__18666__$1))

break;
case "shouldComponentUpdate":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__3949__auto__ = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util._STAR_always_update_STAR_;
if(or__3949__auto__){
return or__3949__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
return ((noargv) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv)));
} else {
if(noargv){
return f.call(c,c,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_argv(c),mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__18666,G__18666__$1))

break;
case "componentWillUpdate":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.props_argv(c,nextprops));
});
;})(G__18666,G__18666__$1))

break;
case "componentDidUpdate":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.props_argv(c,oldprops));
});
;})(G__18666,G__18666__$1))

break;
case "componentWillMount":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__18666,G__18666__$1))

break;
case "componentDidMount":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__18666,G__18666__$1))

break;
case "componentWillUnmount":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__18694_18744 = (c["cljsRatom"]);
if((G__18694_18744 == null)){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.dispose_BANG_(G__18694_18744);
}

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__18666,G__18666__$1))

break;
case "componentDidCatch":
return ((function (G__18666,G__18666__$1){
return (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});
;})(G__18666,G__18666__$1))

break;
default:
return null;

}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_wrapper = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$get_wrapper(key,f,name){
var wrap = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3938__auto__ = wrap;
if(cljs.core.truth_(and__3938__auto__)){
return f;
} else {
return and__3938__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))].join('')),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__3949__auto__ = wrap;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return f;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.dash_to_camel = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.memoize_1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.dash_to_camel);
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.camelify_map_keys = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.add_obligatory = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.obligatory,fun_map], 0));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.wrap_funs = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$wrap_funs(fmap){
var renders_18746 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_18747 = cljs.core.first(cljs.core.vals(renders_18746));
if((cljs.core.count(renders_18746) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_18746))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_18747)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_18747], 0)))].join('')),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__3949__auto__ = render_fun;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.fun_name(render_fun__$1);
}
})())].join('');
var name__$1 = (function (){var G__18703 = name;
switch (G__18703) {
case "":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join('');

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv(((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_wrapper(k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.static_fns)], 0));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.map_to_js = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__18704 = o;
(G__18704[cljs.core.name(k)] = v);

return G__18704;
}),({}),m);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.cljsify = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$cljsify(body){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.map_to_js(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.wrap_funs(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.add_obligatory(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.camelify_map_keys(body))));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.create_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var G__18708 = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.cljsify(body);
return module$node_modules$create_react_class$index(G__18708);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.fiber_component_path = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__18710 = fiber;
var G__18710__$1 = (((G__18710 == null))?null:(G__18710["type"]));
if((G__18710__$1 == null)){
return null;
} else {
return (G__18710__$1["displayName"]);
}
})();
var parent = (function (){var G__18711 = fiber;
if((G__18711 == null)){
return null;
} else {
return (G__18711["return"]);
}
})();
var path = (function (){var G__18712 = parent;
var G__18712__$1 = (((G__18712 == null))?null:(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1(G__18712) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.fiber_component_path.call(null,G__18712)));
if((G__18712__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18712__$1)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.component_path = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$component_path(c){
var temp__5455__auto__ = (function (){var G__18715 = c;
if((G__18715 == null)){
return null;
} else {
return (G__18715["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var fiber = temp__5455__auto__;
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.fiber_component_path(fiber);
} else {
var elem = (function (){var G__18717 = (function (){var or__3949__auto__ = (function (){var G__18719 = c;
if((G__18719 == null)){
return null;
} else {
return (G__18719["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return c;
}
})();
if((G__18717 == null)){
return null;
} else {
return (G__18717["_currentElement"]);
}
})();
var name = (function (){var G__18720 = elem;
var G__18720__$1 = (((G__18720 == null))?null:(G__18720["type"]));
if((G__18720__$1 == null)){
return null;
} else {
return (G__18720__$1["displayName"]);
}
})();
var path = (function (){var G__18721 = elem;
var G__18721__$1 = (((G__18721 == null))?null:(G__18721["_owner"]));
var G__18721__$2 = (((G__18721__$1 == null))?null:(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1(G__18721__$1) : mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.component_path.call(null,G__18721__$1)));
if((G__18721__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18721__$2)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.comp_name = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$comp_name(){
var c = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__3949__auto__ = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.component_path(c);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__18722 = c;
var G__18722__$1 = (((G__18722 == null))?null:G__18722.constructor);
if((G__18722__$1 == null)){
return null;
} else {
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.fun_name(G__18722__$1);
}
}
})();
if(!(cljs.core.empty_QMARK_(n))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.fn_to_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))].join('')),"\n","(clojure.core/ifn? f)"].join('')));
}

if(!(!(((mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.react_class_QMARK_(f)) && (!(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_class_QMARK_(f))))))){
if(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking)?mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.fun_name(f);
if(cljs.core.empty_QMARK_(n)){
return f;
} else {
return n;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.comp_name())].join(''));
} else {
}
} else {
}

if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_class_QMARK_(f)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.cache_react_class(f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.create_class(withrender);
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.cache_react_class(f,res);
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$as_class(tag){
var temp__5459__auto__ = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.cached_react_class(tag);
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.fn_to_class(tag);
} else {
var cached_class = temp__5459__auto__;
return cached_class;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reactify_component = (function mranderson047$reagent$v0v8v0_alpha2$reagent$impl$component$reactify_component(comp){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.as_class(comp);
}
});

//# sourceMappingURL=mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.js.map
