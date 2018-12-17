goog.provide('mranderson047.reagent.v0v8v0_alpha2.reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.ratom');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.debug');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.interop');
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2 !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.dom !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.dom.imported !== 'undefined')){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.dom.imported = null;
}
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2 !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.dom !== 'undefined') && (typeof mranderson047.reagent.v0v8v0_alpha2.reagent.dom.roots !== 'undefined')){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
mranderson047.reagent.v0v8v0_alpha2.reagent.dom.unmount_comp = (function mranderson047$reagent$v0v8v0_alpha2$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson047.reagent.v0v8v0_alpha2.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render_comp = (function mranderson047$reagent$v0v8v0_alpha2$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_18868 = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util._STAR_always_update_STAR_ = true;

try{var G__18869 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__18870 = container;
var G__18871 = ((function (G__18869,G__18870,_STAR_always_update_STAR_18868){
return (function (){
var _STAR_always_update_STAR_18872 = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson047.reagent.v0v8v0_alpha2.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18872;
}});})(G__18869,G__18870,_STAR_always_update_STAR_18868))
;
return module$node_modules$react_dom$index.render(G__18869,G__18870,G__18871);
}finally {mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18868;
}});
mranderson047.reagent.v0v8v0_alpha2.reagent.dom.re_render_component = (function mranderson047$reagent$v0v8v0_alpha2$reagent$dom$re_render_component(comp,container){
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render = (function mranderson047$reagent$v0v8v0_alpha2$reagent$dom$render(var_args){
var G__18876 = arguments.length;
switch (G__18876) {
case 2:
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.flush_BANG_();

var f = (function (){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render_comp(f,container,callback);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson047.reagent.v0v8v0_alpha2.reagent.dom.unmount_component_at_node = (function mranderson047$reagent$v0v8v0_alpha2$reagent$dom$unmount_component_at_node(container){
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.dom.dom_node = (function mranderson047$reagent$v0v8v0_alpha2$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.find_dom_node = mranderson047.reagent.v0v8v0_alpha2.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.dom.force_update_all = (function mranderson047$reagent$v0v8v0_alpha2$reagent$dom$force_update_all(){
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.flush_BANG_();

var seq__18891_18913 = cljs.core.seq(cljs.core.vals(cljs.core.deref(mranderson047.reagent.v0v8v0_alpha2.reagent.dom.roots)));
var chunk__18892_18914 = null;
var count__18893_18915 = (0);
var i__18894_18916 = (0);
while(true){
if((i__18894_18916 < count__18893_18915)){
var v_18919 = chunk__18892_18914.cljs$core$IIndexed$_nth$arity$2(null,i__18894_18916);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson047.reagent.v0v8v0_alpha2.reagent.dom.re_render_component,v_18919);


var G__18920 = seq__18891_18913;
var G__18921 = chunk__18892_18914;
var G__18922 = count__18893_18915;
var G__18923 = (i__18894_18916 + (1));
seq__18891_18913 = G__18920;
chunk__18892_18914 = G__18921;
count__18893_18915 = G__18922;
i__18894_18916 = G__18923;
continue;
} else {
var temp__5457__auto___18924 = cljs.core.seq(seq__18891_18913);
if(temp__5457__auto___18924){
var seq__18891_18926__$1 = temp__5457__auto___18924;
if(cljs.core.chunked_seq_QMARK_(seq__18891_18926__$1)){
var c__4351__auto___18927 = cljs.core.chunk_first(seq__18891_18926__$1);
var G__18928 = cljs.core.chunk_rest(seq__18891_18926__$1);
var G__18929 = c__4351__auto___18927;
var G__18930 = cljs.core.count(c__4351__auto___18927);
var G__18931 = (0);
seq__18891_18913 = G__18928;
chunk__18892_18914 = G__18929;
count__18893_18915 = G__18930;
i__18894_18916 = G__18931;
continue;
} else {
var v_18933 = cljs.core.first(seq__18891_18926__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson047.reagent.v0v8v0_alpha2.reagent.dom.re_render_component,v_18933);


var G__18935 = cljs.core.next(seq__18891_18926__$1);
var G__18936 = null;
var G__18937 = (0);
var G__18938 = (0);
seq__18891_18913 = G__18935;
chunk__18892_18914 = G__18936;
count__18893_18915 = G__18937;
i__18894_18916 = G__18938;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=mranderson047.reagent.v0v8v0_alpha2.reagent.dom.js.map
