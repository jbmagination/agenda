goog.provide('day8.re_frame.trace.view.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.utils.re_com');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.core');
day8.re_frame.trace.view.components.search_input = (function day8$re_frame$trace$view$components$search_input(p__19896){
var map__19897 = p__19896;
var map__19897__$1 = ((((!((map__19897 == null)))?(((((map__19897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19897):map__19897);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(title);
var save = ((function (val,map__19897,map__19897__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
var v = clojure.string.trim([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val))].join(''));
if((cljs.core.count(v) > (0))){
return (on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(v) : on_save.call(null,v));
} else {
return null;
}
});})(val,map__19897,map__19897__$1,title,placeholder,on_save,on_change,on_stop))
;
return ((function (val,save,map__19897,map__19897__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val))].join(''))))?(25):cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val))].join(''))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save,map__19897,map__19897__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__19891_SHARP_){
cljs.core.reset_BANG_(val,p1__19891_SHARP_.target.value);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(p1__19891_SHARP_) : on_change.call(null,p1__19891_SHARP_));
});})(val,save,map__19897,map__19897__$1,title,placeholder,on_save,on_change,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save,map__19897,map__19897__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__19892_SHARP_){
var G__19904 = p1__19892_SHARP_.which;
switch (G__19904) {
case (13):
save();

return cljs.core.reset_BANG_(val,"");

break;
default:
return null;

}
});})(val,save,map__19897,map__19897__$1,title,placeholder,on_save,on_change,on_stop))
], null)], null);
});
;})(val,save,map__19897,map__19897__$1,title,placeholder,on_save,on_change,on_stop))
});
day8.re_frame.trace.view.components.scroll_BANG_ = (function day8$re_frame$trace$view$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js(start),cljs.core.clj__GT_js(end),time)).play();
});
day8.re_frame.trace.view.components.scrolled_to_end_QMARK_ = (function day8$re_frame$trace$view$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame.trace.view.components.autoscroll_list = (function day8$re_frame$trace$view$components$autoscroll_list(p__19912,child){
var map__19913 = p__19912;
var map__19913__$1 = ((((!((map__19913 == null)))?(((((map__19913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19913):map__19913);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19913__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scroll_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19913__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));

var node = mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var should_scroll = mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"autoscroll-list",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_){
return (function (_){
return day8.re_frame.trace.view.components.scroll_BANG_(cljs.core.deref(node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref(node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref(node).scrollHeight], null),(0));
});})(node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_){
return (function (_){
return cljs.core.reset_BANG_(should_scroll,day8.re_frame.trace.view.components.scrolled_to_end_QMARK_(cljs.core.deref(node),(100)));
});})(node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_){
return (function (_){
if(cljs.core.truth_((function (){var and__3938__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.deref(should_scroll);
} else {
return and__3938__auto__;
}
})())){
return day8.re_frame.trace.view.components.scroll_BANG_(cljs.core.deref(node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref(node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref(node).scrollHeight], null),(500));
} else {
return null;
}
});})(node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_){
return (function (p__19931,child__$1){
var map__19932 = p__19931;
var map__19932__$1 = ((((!((map__19932 == null)))?(((((map__19932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19932):map__19932);
var class$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19932__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__19932,map__19932__$1,class$__$1,node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_){
return (function (dom_node){
return cljs.core.reset_BANG_(node,dom_node);
});})(map__19932,map__19932__$1,class$__$1,node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_))
], null),child__$1], null);
});})(node,should_scroll,map__19913,map__19913__$1,class$,scroll_QMARK_))
], null));
});
day8.re_frame.trace.view.components.string__GT_css = (function day8$re_frame$trace$view$components$string__GT_css(css_string){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__19945){
var vec__19946 = p__19945;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19946,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19946,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19941_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__19941_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(css_string,/;/)));
});
day8.re_frame.trace.view.components.default_cljs_devtools_prefs = cljs.core.deref(devtools.prefs.default_config);
day8.re_frame.trace.view.components.reset_wrapping = (function day8$re_frame$trace$view$components$reset_wrapping(css_string){
return clojure.string.replace(css_string,/white-space:nowrap;/,"");
});
day8.re_frame.trace.view.components.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),(3),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame.trace.view.components.effective_cljs_devtools_prefs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.trace.view.components.default_cljs_devtools_prefs,day8.re_frame.trace.view.components.customized_cljs_devtools_prefs], 0));
day8.re_frame.trace.view.components.make_devtools_api_call = (function day8$re_frame$trace$view$components$make_devtools_api_call(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20099 = arguments.length;
var i__4532__auto___20100 = (0);
while(true){
if((i__4532__auto___20100 < len__4531__auto___20099)){
args__4534__auto__.push((arguments[i__4532__auto___20100]));

var G__20101 = (i__4532__auto___20100 + (1));
i__4532__auto___20100 = G__20101;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame.trace.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__19874__auto__ = devtools.prefs.get_prefs();
var prefs__19875__auto__ = day8.re_frame.trace.view.components.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_(prefs__19875__auto__);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_fn,args);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__19875__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__19875__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__19874__auto__);
}});

day8.re_frame.trace.view.components.make_devtools_api_call.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame.trace.view.components.make_devtools_api_call.cljs$lang$applyTo = (function (seq19955){
var G__19956 = cljs.core.first(seq19955);
var seq19955__$1 = cljs.core.next(seq19955);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19956,seq19955__$1);
});

day8.re_frame.trace.view.components.cljs_devtools_header = (function day8$re_frame$trace$view$components$cljs_devtools_header(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20107 = arguments.length;
var i__4532__auto___20108 = (0);
while(true){
if((i__4532__auto___20108 < len__4531__auto___20107)){
args__4534__auto__.push((arguments[i__4532__auto___20108]));

var G__20109 = (i__4532__auto___20108 + (1));
i__4532__auto___20108 = G__20109;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame.trace.view.components.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
});

day8.re_frame.trace.view.components.cljs_devtools_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame.trace.view.components.cljs_devtools_header.cljs$lang$applyTo = (function (seq19966){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19966));
});

day8.re_frame.trace.view.components.cljs_devtools_body = (function day8$re_frame$trace$view$components$cljs_devtools_body(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20112 = arguments.length;
var i__4532__auto___20113 = (0);
while(true){
if((i__4532__auto___20113 < len__4531__auto___20112)){
args__4534__auto__.push((arguments[i__4532__auto___20113]));

var G__20115 = (i__4532__auto___20113 + (1));
i__4532__auto___20113 = G__20115;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame.trace.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame.trace.view.components.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
});

day8.re_frame.trace.view.components.cljs_devtools_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame.trace.view.components.cljs_devtools_body.cljs$lang$applyTo = (function (seq19972){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19972));
});

day8.re_frame.trace.view.components.cljs_devtools_has_body = (function day8$re_frame$trace$view$components$cljs_devtools_has_body(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20117 = arguments.length;
var i__4532__auto___20118 = (0);
while(true){
if((i__4532__auto___20118 < len__4531__auto___20117)){
args__4534__auto__.push((arguments[i__4532__auto___20118]));

var G__20119 = (i__4532__auto___20118 + (1));
i__4532__auto___20118 = G__20119;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame.trace.view.components.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
});

day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq19978){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19978));
});

day8.re_frame.trace.view.components.get_object = (function day8$re_frame$trace$view$components$get_object(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).object;
});
day8.re_frame.trace.view.components.get_config = (function day8$re_frame$trace$view$components$get_config(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).config;
});
day8.re_frame.trace.view.components.data_structure = (function day8$re_frame$trace$view$components$data_structure(jsonml,path){
var expanded_QMARK_ = (function (){var G__19995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19995) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__19995));
})();
return ((function (expanded_QMARK_){
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-trace--object",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?" expanded":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
var G__19999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19999) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__19999));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.trace.view.components.get_object(jsonml__$1),day8.re_frame.trace.view.components.get_config(jsonml__$1)], 0));
} else {
return and__3938__auto__;
}
})())?(function (){var G__20004 = day8.re_frame.trace.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.trace.view.components.get_object(jsonml__$1),day8.re_frame.trace.view.components.get_config(jsonml__$1)], 0));
var G__20005 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (day8.re_frame.trace.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.trace.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__20004,G__20005) : day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,G__20004,G__20005));
})():(function (){var G__20006 = day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame.trace.view.components.get_object(jsonml__$1),day8.re_frame.trace.view.components.get_config(jsonml__$1)], 0));
var G__20007 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"header","header",119441134));
return (day8.re_frame.trace.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.trace.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__20006,G__20007) : day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,G__20006,G__20007));
})())], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame.trace.view.components.jsonml__GT_hiccup = (function day8$re_frame$trace$view$components$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__20014 = jsonml;
var seq__20015 = cljs.core.seq(vec__20014);
var first__20016 = cljs.core.first(seq__20015);
var seq__20015__$1 = cljs.core.next(seq__20015);
var tag_name = first__20016;
var first__20016__$1 = cljs.core.first(seq__20015__$1);
var seq__20015__$2 = cljs.core.next(seq__20015__$1);
var attributes = first__20016__$1;
var children = seq__20015__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame.trace.view.components.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (vec__20014,seq__20015,first__20016,seq__20015__$1,tag_name,first__20016__$1,seq__20015__$2,attributes,children,tagnames){
return (function (i,child){
var G__20018 = child;
var G__20019 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame.trace.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame.trace.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__20018,G__20019) : day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,G__20018,G__20019));
});})(vec__20014,seq__20015,first__20016,seq__20015__$1,tag_name,first__20016__$1,seq__20015__$2,attributes,children,tagnames))
),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame.trace.view.components.subtree = (function day8$re_frame$trace$view$components$subtree(data,title,path){
var expanded_QMARK_ = (function (){var G__20025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20025) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__20025));
})();
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
var G__20030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20030) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__20030));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__3949__auto__ = title;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "data";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame.trace.view.components.jsonml__GT_hiccup(day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null)], null)], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame.trace.view.components.subscription_render = (function day8$re_frame$trace$view$components$subscription_render(data,title,path){
var expanded_QMARK_ = mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null)], null))], null),(function (){var or__3949__auto__ = title;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame.trace.view.components.jsonml__GT_hiccup(day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame.trace.view.components.simple_render = (function day8$re_frame$trace$view$components$simple_render(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20136 = arguments.length;
var i__4532__auto___20137 = (0);
while(true){
if((i__4532__auto___20137 < len__4531__auto___20136)){
args__4534__auto__.push((arguments[i__4532__auto___20137]));

var G__20138 = (i__4532__auto___20137 + (1));
i__4532__auto___20137 = G__20138;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame.trace.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame.trace.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__20066){
var vec__20067 = p__20066;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20067,(0),null);
var expanded_QMARK_ = mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (expanded_QMARK_,vec__20067,class$){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null),class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame.trace.view.components.jsonml__GT_hiccup(day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null);
});
;})(expanded_QMARK_,vec__20067,class$))
});

day8.re_frame.trace.view.components.simple_render.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.trace.view.components.simple_render.cljs$lang$applyTo = (function (seq20046){
var G__20047 = cljs.core.first(seq20046);
var seq20046__$1 = cljs.core.next(seq20046);
var G__20048 = cljs.core.first(seq20046__$1);
var seq20046__$2 = cljs.core.next(seq20046__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20047,G__20048,seq20046__$2);
});

day8.re_frame.trace.view.components.tag = (function day8$re_frame$trace$view$components$tag(class$,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),["rft-tag noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),label], null)], null);
});

//# sourceMappingURL=day8.re_frame.trace.view.components.js.map
