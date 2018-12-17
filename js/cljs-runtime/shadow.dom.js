goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__25825 = coll;
var G__25826 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__25825,G__25826) : shadow.dom.lazy_native_coll_seq.call(null,G__25825,G__25826));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__25869 = arguments.length;
switch (G__25869) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__25884 = arguments.length;
switch (G__25884) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__25895 = arguments.length;
switch (G__25895) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__25904 = arguments.length;
switch (G__25904) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__25916 = arguments.length;
switch (G__25916) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__25918 = document;
var G__25919 = shadow.dom.dom_node(el);
return goog.dom.contains(G__25918,G__25919);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__25923 = shadow.dom.dom_node(parent);
var G__25924 = shadow.dom.dom_node(el);
return goog.dom.contains(G__25923,G__25924);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__25926 = shadow.dom.dom_node(el);
var G__25927 = cls;
return goog.dom.classlist.add(G__25926,G__25927);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__25929 = shadow.dom.dom_node(el);
var G__25930 = cls;
return goog.dom.classlist.remove(G__25929,G__25930);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__25943 = arguments.length;
switch (G__25943) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__25945 = shadow.dom.dom_node(el);
var G__25946 = cls;
return goog.dom.classlist.toggle(G__25945,G__25946);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e25953){if((e25953 instanceof Object)){
var e = e25953;
return console.log("didnt support attachEvent",el,e);
} else {
throw e25953;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__25961 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__25962 = null;
var count__25963 = (0);
var i__25964 = (0);
while(true){
if((i__25964 < count__25963)){
var el = chunk__25962.cljs$core$IIndexed$_nth$arity$2(null,i__25964);
var handler_26491__$1 = ((function (seq__25961,chunk__25962,count__25963,i__25964,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__25961,chunk__25962,count__25963,i__25964,el))
;
var G__25965_26493 = el;
var G__25966_26494 = cljs.core.name(ev);
var G__25967_26495 = handler_26491__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__25965_26493,G__25966_26494,G__25967_26495) : shadow.dom.dom_listen.call(null,G__25965_26493,G__25966_26494,G__25967_26495));


var G__26496 = seq__25961;
var G__26497 = chunk__25962;
var G__26498 = count__25963;
var G__26499 = (i__25964 + (1));
seq__25961 = G__26496;
chunk__25962 = G__26497;
count__25963 = G__26498;
i__25964 = G__26499;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25961);
if(temp__5457__auto__){
var seq__25961__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25961__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__25961__$1);
var G__26501 = cljs.core.chunk_rest(seq__25961__$1);
var G__26502 = c__4351__auto__;
var G__26503 = cljs.core.count(c__4351__auto__);
var G__26504 = (0);
seq__25961 = G__26501;
chunk__25962 = G__26502;
count__25963 = G__26503;
i__25964 = G__26504;
continue;
} else {
var el = cljs.core.first(seq__25961__$1);
var handler_26505__$1 = ((function (seq__25961,chunk__25962,count__25963,i__25964,el,seq__25961__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__25961,chunk__25962,count__25963,i__25964,el,seq__25961__$1,temp__5457__auto__))
;
var G__25970_26506 = el;
var G__25971_26507 = cljs.core.name(ev);
var G__25972_26508 = handler_26505__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__25970_26506,G__25971_26507,G__25972_26508) : shadow.dom.dom_listen.call(null,G__25970_26506,G__25971_26507,G__25972_26508));


var G__26509 = cljs.core.next(seq__25961__$1);
var G__26510 = null;
var G__26511 = (0);
var G__26512 = (0);
seq__25961 = G__26509;
chunk__25962 = G__26510;
count__25963 = G__26511;
i__25964 = G__26512;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__25980 = arguments.length;
switch (G__25980) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__25989 = shadow.dom.dom_node(el);
var G__25990 = cljs.core.name(ev);
var G__25991 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__25989,G__25990,G__25991) : shadow.dom.dom_listen.call(null,G__25989,G__25990,G__25991));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__25994 = shadow.dom.dom_node(el);
var G__25995 = cljs.core.name(ev);
var G__25996 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__25994,G__25995,G__25996) : shadow.dom.dom_listen_remove.call(null,G__25994,G__25995,G__25996));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__26002 = cljs.core.seq(events);
var chunk__26003 = null;
var count__26004 = (0);
var i__26005 = (0);
while(true){
if((i__26005 < count__26004)){
var vec__26007 = chunk__26003.cljs$core$IIndexed$_nth$arity$2(null,i__26005);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26007,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__26528 = seq__26002;
var G__26529 = chunk__26003;
var G__26530 = count__26004;
var G__26531 = (i__26005 + (1));
seq__26002 = G__26528;
chunk__26003 = G__26529;
count__26004 = G__26530;
i__26005 = G__26531;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__26002);
if(temp__5457__auto__){
var seq__26002__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26002__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__26002__$1);
var G__26536 = cljs.core.chunk_rest(seq__26002__$1);
var G__26537 = c__4351__auto__;
var G__26538 = cljs.core.count(c__4351__auto__);
var G__26539 = (0);
seq__26002 = G__26536;
chunk__26003 = G__26537;
count__26004 = G__26538;
i__26005 = G__26539;
continue;
} else {
var vec__26015 = cljs.core.first(seq__26002__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26015,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__26540 = cljs.core.next(seq__26002__$1);
var G__26541 = null;
var G__26542 = (0);
var G__26543 = (0);
seq__26002 = G__26540;
chunk__26003 = G__26541;
count__26004 = G__26542;
i__26005 = G__26543;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__26025 = cljs.core.seq(styles);
var chunk__26026 = null;
var count__26027 = (0);
var i__26028 = (0);
while(true){
if((i__26028 < count__26027)){
var vec__26031 = chunk__26026.cljs$core$IIndexed$_nth$arity$2(null,i__26028);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26031,(1),null);
var G__26034_26549 = dom;
var G__26035_26550 = cljs.core.name(k);
var G__26036_26551 = (((v == null))?"":v);
goog.style.setStyle(G__26034_26549,G__26035_26550,G__26036_26551);


var G__26552 = seq__26025;
var G__26553 = chunk__26026;
var G__26554 = count__26027;
var G__26555 = (i__26028 + (1));
seq__26025 = G__26552;
chunk__26026 = G__26553;
count__26027 = G__26554;
i__26028 = G__26555;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__26025);
if(temp__5457__auto__){
var seq__26025__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26025__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__26025__$1);
var G__26556 = cljs.core.chunk_rest(seq__26025__$1);
var G__26557 = c__4351__auto__;
var G__26558 = cljs.core.count(c__4351__auto__);
var G__26559 = (0);
seq__26025 = G__26556;
chunk__26026 = G__26557;
count__26027 = G__26558;
i__26028 = G__26559;
continue;
} else {
var vec__26038 = cljs.core.first(seq__26025__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038,(1),null);
var G__26041_26562 = dom;
var G__26042_26563 = cljs.core.name(k);
var G__26043_26564 = (((v == null))?"":v);
goog.style.setStyle(G__26041_26562,G__26042_26563,G__26043_26564);


var G__26567 = cljs.core.next(seq__26025__$1);
var G__26568 = null;
var G__26569 = (0);
var G__26570 = (0);
seq__26025 = G__26567;
chunk__26026 = G__26568;
count__26027 = G__26569;
i__26028 = G__26570;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__26046_26572 = key;
var G__26046_26573__$1 = (((G__26046_26572 instanceof cljs.core.Keyword))?G__26046_26572.fqn:null);
switch (G__26046_26573__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_26578 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_26578,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_26578,"aria-");
}
})())){
el.setAttribute(ks_26578,value);
} else {
(el[ks_26578] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__26051 = shadow.dom.dom_node(el);
var G__26052 = cls;
return goog.dom.classlist.contains(G__26051,G__26052);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__26066){
var map__26067 = p__26066;
var map__26067__$1 = ((((!((map__26067 == null)))?(((((map__26067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26067):map__26067);
var props = map__26067__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26067__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__26071 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26071,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26071,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26071,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__26074 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__26074,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__26074;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__26080 = arguments.length;
switch (G__26080) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__26087){
var vec__26089 = p__26087;
var seq__26090 = cljs.core.seq(vec__26089);
var first__26091 = cljs.core.first(seq__26090);
var seq__26090__$1 = cljs.core.next(seq__26090);
var nn = first__26091;
var first__26091__$1 = cljs.core.first(seq__26090__$1);
var seq__26090__$2 = cljs.core.next(seq__26090__$1);
var np = first__26091__$1;
var nc = seq__26090__$2;
var node = vec__26089;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26093 = nn;
var G__26094 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26093,G__26094) : create_fn.call(null,G__26093,G__26094));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26095 = nn;
var G__26096 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26095,G__26096) : create_fn.call(null,G__26095,G__26096));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__26097 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26097,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26097,(1),null);
var seq__26100_26601 = cljs.core.seq(node_children);
var chunk__26101_26602 = null;
var count__26102_26603 = (0);
var i__26103_26604 = (0);
while(true){
if((i__26103_26604 < count__26102_26603)){
var child_struct_26606 = chunk__26101_26602.cljs$core$IIndexed$_nth$arity$2(null,i__26103_26604);
var children_26607 = shadow.dom.dom_node(child_struct_26606);
if(cljs.core.seq_QMARK_(children_26607)){
var seq__26104_26609 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_26607));
var chunk__26106_26610 = null;
var count__26107_26611 = (0);
var i__26108_26612 = (0);
while(true){
if((i__26108_26612 < count__26107_26611)){
var child_26614 = chunk__26106_26610.cljs$core$IIndexed$_nth$arity$2(null,i__26108_26612);
if(cljs.core.truth_(child_26614)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_26614);


var G__26615 = seq__26104_26609;
var G__26616 = chunk__26106_26610;
var G__26617 = count__26107_26611;
var G__26618 = (i__26108_26612 + (1));
seq__26104_26609 = G__26615;
chunk__26106_26610 = G__26616;
count__26107_26611 = G__26617;
i__26108_26612 = G__26618;
continue;
} else {
var G__26619 = seq__26104_26609;
var G__26620 = chunk__26106_26610;
var G__26621 = count__26107_26611;
var G__26622 = (i__26108_26612 + (1));
seq__26104_26609 = G__26619;
chunk__26106_26610 = G__26620;
count__26107_26611 = G__26621;
i__26108_26612 = G__26622;
continue;
}
} else {
var temp__5457__auto___26623 = cljs.core.seq(seq__26104_26609);
if(temp__5457__auto___26623){
var seq__26104_26625__$1 = temp__5457__auto___26623;
if(cljs.core.chunked_seq_QMARK_(seq__26104_26625__$1)){
var c__4351__auto___26626 = cljs.core.chunk_first(seq__26104_26625__$1);
var G__26627 = cljs.core.chunk_rest(seq__26104_26625__$1);
var G__26628 = c__4351__auto___26626;
var G__26629 = cljs.core.count(c__4351__auto___26626);
var G__26630 = (0);
seq__26104_26609 = G__26627;
chunk__26106_26610 = G__26628;
count__26107_26611 = G__26629;
i__26108_26612 = G__26630;
continue;
} else {
var child_26631 = cljs.core.first(seq__26104_26625__$1);
if(cljs.core.truth_(child_26631)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_26631);


var G__26632 = cljs.core.next(seq__26104_26625__$1);
var G__26633 = null;
var G__26634 = (0);
var G__26635 = (0);
seq__26104_26609 = G__26632;
chunk__26106_26610 = G__26633;
count__26107_26611 = G__26634;
i__26108_26612 = G__26635;
continue;
} else {
var G__26638 = cljs.core.next(seq__26104_26625__$1);
var G__26639 = null;
var G__26640 = (0);
var G__26641 = (0);
seq__26104_26609 = G__26638;
chunk__26106_26610 = G__26639;
count__26107_26611 = G__26640;
i__26108_26612 = G__26641;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_26607);
}


var G__26643 = seq__26100_26601;
var G__26644 = chunk__26101_26602;
var G__26645 = count__26102_26603;
var G__26646 = (i__26103_26604 + (1));
seq__26100_26601 = G__26643;
chunk__26101_26602 = G__26644;
count__26102_26603 = G__26645;
i__26103_26604 = G__26646;
continue;
} else {
var temp__5457__auto___26647 = cljs.core.seq(seq__26100_26601);
if(temp__5457__auto___26647){
var seq__26100_26648__$1 = temp__5457__auto___26647;
if(cljs.core.chunked_seq_QMARK_(seq__26100_26648__$1)){
var c__4351__auto___26649 = cljs.core.chunk_first(seq__26100_26648__$1);
var G__26651 = cljs.core.chunk_rest(seq__26100_26648__$1);
var G__26652 = c__4351__auto___26649;
var G__26653 = cljs.core.count(c__4351__auto___26649);
var G__26654 = (0);
seq__26100_26601 = G__26651;
chunk__26101_26602 = G__26652;
count__26102_26603 = G__26653;
i__26103_26604 = G__26654;
continue;
} else {
var child_struct_26656 = cljs.core.first(seq__26100_26648__$1);
var children_26657 = shadow.dom.dom_node(child_struct_26656);
if(cljs.core.seq_QMARK_(children_26657)){
var seq__26117_26658 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_26657));
var chunk__26119_26659 = null;
var count__26120_26660 = (0);
var i__26121_26661 = (0);
while(true){
if((i__26121_26661 < count__26120_26660)){
var child_26663 = chunk__26119_26659.cljs$core$IIndexed$_nth$arity$2(null,i__26121_26661);
if(cljs.core.truth_(child_26663)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_26663);


var G__26665 = seq__26117_26658;
var G__26666 = chunk__26119_26659;
var G__26667 = count__26120_26660;
var G__26668 = (i__26121_26661 + (1));
seq__26117_26658 = G__26665;
chunk__26119_26659 = G__26666;
count__26120_26660 = G__26667;
i__26121_26661 = G__26668;
continue;
} else {
var G__26670 = seq__26117_26658;
var G__26671 = chunk__26119_26659;
var G__26672 = count__26120_26660;
var G__26673 = (i__26121_26661 + (1));
seq__26117_26658 = G__26670;
chunk__26119_26659 = G__26671;
count__26120_26660 = G__26672;
i__26121_26661 = G__26673;
continue;
}
} else {
var temp__5457__auto___26675__$1 = cljs.core.seq(seq__26117_26658);
if(temp__5457__auto___26675__$1){
var seq__26117_26676__$1 = temp__5457__auto___26675__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26117_26676__$1)){
var c__4351__auto___26677 = cljs.core.chunk_first(seq__26117_26676__$1);
var G__26678 = cljs.core.chunk_rest(seq__26117_26676__$1);
var G__26679 = c__4351__auto___26677;
var G__26680 = cljs.core.count(c__4351__auto___26677);
var G__26681 = (0);
seq__26117_26658 = G__26678;
chunk__26119_26659 = G__26679;
count__26120_26660 = G__26680;
i__26121_26661 = G__26681;
continue;
} else {
var child_26683 = cljs.core.first(seq__26117_26676__$1);
if(cljs.core.truth_(child_26683)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_26683);


var G__26685 = cljs.core.next(seq__26117_26676__$1);
var G__26686 = null;
var G__26687 = (0);
var G__26688 = (0);
seq__26117_26658 = G__26685;
chunk__26119_26659 = G__26686;
count__26120_26660 = G__26687;
i__26121_26661 = G__26688;
continue;
} else {
var G__26689 = cljs.core.next(seq__26117_26676__$1);
var G__26690 = null;
var G__26691 = (0);
var G__26692 = (0);
seq__26117_26658 = G__26689;
chunk__26119_26659 = G__26690;
count__26120_26660 = G__26691;
i__26121_26661 = G__26692;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_26657);
}


var G__26693 = cljs.core.next(seq__26100_26648__$1);
var G__26694 = null;
var G__26695 = (0);
var G__26696 = (0);
seq__26100_26601 = G__26693;
chunk__26101_26602 = G__26694;
count__26102_26603 = G__26695;
i__26103_26604 = G__26696;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__26139 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__26139);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__26141 = cljs.core.seq(node);
var chunk__26142 = null;
var count__26143 = (0);
var i__26144 = (0);
while(true){
if((i__26144 < count__26143)){
var n = chunk__26142.cljs$core$IIndexed$_nth$arity$2(null,i__26144);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__26709 = seq__26141;
var G__26710 = chunk__26142;
var G__26711 = count__26143;
var G__26712 = (i__26144 + (1));
seq__26141 = G__26709;
chunk__26142 = G__26710;
count__26143 = G__26711;
i__26144 = G__26712;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__26141);
if(temp__5457__auto__){
var seq__26141__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26141__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__26141__$1);
var G__26716 = cljs.core.chunk_rest(seq__26141__$1);
var G__26717 = c__4351__auto__;
var G__26718 = cljs.core.count(c__4351__auto__);
var G__26719 = (0);
seq__26141 = G__26716;
chunk__26142 = G__26717;
count__26143 = G__26718;
i__26144 = G__26719;
continue;
} else {
var n = cljs.core.first(seq__26141__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__26720 = cljs.core.next(seq__26141__$1);
var G__26721 = null;
var G__26722 = (0);
var G__26723 = (0);
seq__26141 = G__26720;
chunk__26142 = G__26721;
count__26143 = G__26722;
i__26144 = G__26723;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__26147 = shadow.dom.dom_node(new$);
var G__26148 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__26147,G__26148);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__26150 = arguments.length;
switch (G__26150) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__26152 = arguments.length;
switch (G__26152) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__26156 = arguments.length;
switch (G__26156) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26733 = arguments.length;
var i__4532__auto___26734 = (0);
while(true){
if((i__4532__auto___26734 < len__4531__auto___26733)){
args__4534__auto__.push((arguments[i__4532__auto___26734]));

var G__26739 = (i__4532__auto___26734 + (1));
i__4532__auto___26734 = G__26739;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__26173_26744 = cljs.core.seq(nodes);
var chunk__26174_26745 = null;
var count__26175_26746 = (0);
var i__26176_26747 = (0);
while(true){
if((i__26176_26747 < count__26175_26746)){
var node_26748 = chunk__26174_26745.cljs$core$IIndexed$_nth$arity$2(null,i__26176_26747);
fragment.appendChild(shadow.dom._to_dom(node_26748));


var G__26749 = seq__26173_26744;
var G__26750 = chunk__26174_26745;
var G__26751 = count__26175_26746;
var G__26752 = (i__26176_26747 + (1));
seq__26173_26744 = G__26749;
chunk__26174_26745 = G__26750;
count__26175_26746 = G__26751;
i__26176_26747 = G__26752;
continue;
} else {
var temp__5457__auto___26753 = cljs.core.seq(seq__26173_26744);
if(temp__5457__auto___26753){
var seq__26173_26754__$1 = temp__5457__auto___26753;
if(cljs.core.chunked_seq_QMARK_(seq__26173_26754__$1)){
var c__4351__auto___26755 = cljs.core.chunk_first(seq__26173_26754__$1);
var G__26756 = cljs.core.chunk_rest(seq__26173_26754__$1);
var G__26757 = c__4351__auto___26755;
var G__26758 = cljs.core.count(c__4351__auto___26755);
var G__26759 = (0);
seq__26173_26744 = G__26756;
chunk__26174_26745 = G__26757;
count__26175_26746 = G__26758;
i__26176_26747 = G__26759;
continue;
} else {
var node_26760 = cljs.core.first(seq__26173_26754__$1);
fragment.appendChild(shadow.dom._to_dom(node_26760));


var G__26761 = cljs.core.next(seq__26173_26754__$1);
var G__26762 = null;
var G__26763 = (0);
var G__26764 = (0);
seq__26173_26744 = G__26761;
chunk__26174_26745 = G__26762;
count__26175_26746 = G__26763;
i__26176_26747 = G__26764;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq26170){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26170));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__26179_26765 = cljs.core.seq(scripts);
var chunk__26180_26766 = null;
var count__26181_26767 = (0);
var i__26182_26768 = (0);
while(true){
if((i__26182_26768 < count__26181_26767)){
var vec__26184_26769 = chunk__26180_26766.cljs$core$IIndexed$_nth$arity$2(null,i__26182_26768);
var script_tag_26770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26184_26769,(0),null);
var script_body_26771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26184_26769,(1),null);
eval(script_body_26771);


var G__26772 = seq__26179_26765;
var G__26773 = chunk__26180_26766;
var G__26774 = count__26181_26767;
var G__26775 = (i__26182_26768 + (1));
seq__26179_26765 = G__26772;
chunk__26180_26766 = G__26773;
count__26181_26767 = G__26774;
i__26182_26768 = G__26775;
continue;
} else {
var temp__5457__auto___26780 = cljs.core.seq(seq__26179_26765);
if(temp__5457__auto___26780){
var seq__26179_26781__$1 = temp__5457__auto___26780;
if(cljs.core.chunked_seq_QMARK_(seq__26179_26781__$1)){
var c__4351__auto___26782 = cljs.core.chunk_first(seq__26179_26781__$1);
var G__26783 = cljs.core.chunk_rest(seq__26179_26781__$1);
var G__26784 = c__4351__auto___26782;
var G__26785 = cljs.core.count(c__4351__auto___26782);
var G__26786 = (0);
seq__26179_26765 = G__26783;
chunk__26180_26766 = G__26784;
count__26181_26767 = G__26785;
i__26182_26768 = G__26786;
continue;
} else {
var vec__26189_26787 = cljs.core.first(seq__26179_26781__$1);
var script_tag_26788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26189_26787,(0),null);
var script_body_26789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26189_26787,(1),null);
eval(script_body_26789);


var G__26790 = cljs.core.next(seq__26179_26781__$1);
var G__26791 = null;
var G__26792 = (0);
var G__26793 = (0);
seq__26179_26765 = G__26790;
chunk__26180_26766 = G__26791;
count__26181_26767 = G__26792;
i__26182_26768 = G__26793;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__26193){
var vec__26195 = p__26193;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26195,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26195,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__26201 = shadow.dom.dom_node(el);
var G__26202 = cls;
return goog.dom.getAncestorByClass(G__26201,G__26202);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__26206 = arguments.length;
switch (G__26206) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__26207 = shadow.dom.dom_node(el);
var G__26208 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__26207,G__26208);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__26210 = shadow.dom.dom_node(el);
var G__26211 = cljs.core.name(tag);
var G__26212 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__26210,G__26211,G__26212);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__26215 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__26215);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__26219 = shadow.dom.dom_node(dom);
var G__26220 = value;
return goog.dom.forms.setValue(G__26219,G__26220);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__26226 = cljs.core.seq(style_keys);
var chunk__26227 = null;
var count__26228 = (0);
var i__26229 = (0);
while(true){
if((i__26229 < count__26228)){
var it = chunk__26227.cljs$core$IIndexed$_nth$arity$2(null,i__26229);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__26805 = seq__26226;
var G__26806 = chunk__26227;
var G__26807 = count__26228;
var G__26808 = (i__26229 + (1));
seq__26226 = G__26805;
chunk__26227 = G__26806;
count__26228 = G__26807;
i__26229 = G__26808;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__26226);
if(temp__5457__auto__){
var seq__26226__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26226__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__26226__$1);
var G__26812 = cljs.core.chunk_rest(seq__26226__$1);
var G__26813 = c__4351__auto__;
var G__26814 = cljs.core.count(c__4351__auto__);
var G__26815 = (0);
seq__26226 = G__26812;
chunk__26227 = G__26813;
count__26228 = G__26814;
i__26229 = G__26815;
continue;
} else {
var it = cljs.core.first(seq__26226__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__26818 = cljs.core.next(seq__26226__$1);
var G__26819 = null;
var G__26820 = (0);
var G__26821 = (0);
seq__26226 = G__26818;
chunk__26227 = G__26819;
count__26228 = G__26820;
i__26229 = G__26821;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k26235,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__26250 = k26235;
var G__26250__$1 = (((G__26250 instanceof cljs.core.Keyword))?G__26250.fqn:null);
switch (G__26250__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26235,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26234){
var self__ = this;
var G__26234__$1 = this;
return (new cljs.core.RecordIter((0),G__26234__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__26260 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__26260(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26236,other26237){
var self__ = this;
var this26236__$1 = this;
return ((!((other26237 == null))) && ((this26236__$1.constructor === other26237.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26236__$1.x,other26237.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26236__$1.y,other26237.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26236__$1.__extmap,other26237.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__26234){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__26265 = cljs.core.keyword_identical_QMARK_;
var expr__26266 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__26268 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__26269 = expr__26266;
return (pred__26265.cljs$core$IFn$_invoke$arity$2 ? pred__26265.cljs$core$IFn$_invoke$arity$2(G__26268,G__26269) : pred__26265.call(null,G__26268,G__26269));
})())){
return (new shadow.dom.Coordinate(G__26234,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26270 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__26271 = expr__26266;
return (pred__26265.cljs$core$IFn$_invoke$arity$2 ? pred__26265.cljs$core$IFn$_invoke$arity$2(G__26270,G__26271) : pred__26265.call(null,G__26270,G__26271));
})())){
return (new shadow.dom.Coordinate(self__.x,G__26234,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__26234),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__26234){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__26234,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__26240){
var extmap__4236__auto__ = (function (){var G__26274 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26240,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__26240)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26274);
} else {
return G__26274;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__26240),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__26240),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__26275 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__26275);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__26280 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__26280);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__26281 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__26281);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k26285,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__26293 = k26285;
var G__26293__$1 = (((G__26293 instanceof cljs.core.Keyword))?G__26293.fqn:null);
switch (G__26293__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26285,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26284){
var self__ = this;
var G__26284__$1 = this;
return (new cljs.core.RecordIter((0),G__26284__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__26294 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__26294(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26286,other26287){
var self__ = this;
var this26286__$1 = this;
return ((!((other26287 == null))) && ((this26286__$1.constructor === other26287.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26286__$1.w,other26287.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26286__$1.h,other26287.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26286__$1.__extmap,other26287.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__26284){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__26297 = cljs.core.keyword_identical_QMARK_;
var expr__26298 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__26300 = new cljs.core.Keyword(null,"w","w",354169001);
var G__26301 = expr__26298;
return (pred__26297.cljs$core$IFn$_invoke$arity$2 ? pred__26297.cljs$core$IFn$_invoke$arity$2(G__26300,G__26301) : pred__26297.call(null,G__26300,G__26301));
})())){
return (new shadow.dom.Size(G__26284,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26302 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__26303 = expr__26298;
return (pred__26297.cljs$core$IFn$_invoke$arity$2 ? pred__26297.cljs$core$IFn$_invoke$arity$2(G__26302,G__26303) : pred__26297.call(null,G__26302,G__26303));
})())){
return (new shadow.dom.Size(self__.w,G__26284,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__26284),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__26284){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__26284,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__26289){
var extmap__4236__auto__ = (function (){var G__26307 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26289,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__26289)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26307);
} else {
return G__26307;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__26289),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__26289),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__26311 = shadow.dom.dom_node(el);
return goog.style.getSize(G__26311);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__26930 = (i + (1));
var G__26931 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__26930;
ret = G__26931;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26325){
var vec__26326 = p__26325;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26326,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__26333 = arguments.length;
switch (G__26333) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__26342_26946 = new_node;
var G__26343_26947 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__26342_26946,G__26343_26947);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__26347_26949 = new_node;
var G__26348_26950 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__26347_26949,G__26348_26950);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__26956 = ps;
var G__26957 = (i + (1));
el__$1 = G__26956;
i = G__26957;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__26356 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__26356);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__26363 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__26363);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__26367 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__26367);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__26371 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26371,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26371,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26371,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__26376_26964 = cljs.core.seq(props);
var chunk__26377_26965 = null;
var count__26378_26966 = (0);
var i__26379_26967 = (0);
while(true){
if((i__26379_26967 < count__26378_26966)){
var vec__26381_26968 = chunk__26377_26965.cljs$core$IIndexed$_nth$arity$2(null,i__26379_26967);
var k_26969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26381_26968,(0),null);
var v_26970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26381_26968,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_26969);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_26969),v_26970);


var G__26972 = seq__26376_26964;
var G__26973 = chunk__26377_26965;
var G__26974 = count__26378_26966;
var G__26975 = (i__26379_26967 + (1));
seq__26376_26964 = G__26972;
chunk__26377_26965 = G__26973;
count__26378_26966 = G__26974;
i__26379_26967 = G__26975;
continue;
} else {
var temp__5457__auto___26976 = cljs.core.seq(seq__26376_26964);
if(temp__5457__auto___26976){
var seq__26376_26978__$1 = temp__5457__auto___26976;
if(cljs.core.chunked_seq_QMARK_(seq__26376_26978__$1)){
var c__4351__auto___26980 = cljs.core.chunk_first(seq__26376_26978__$1);
var G__26981 = cljs.core.chunk_rest(seq__26376_26978__$1);
var G__26982 = c__4351__auto___26980;
var G__26983 = cljs.core.count(c__4351__auto___26980);
var G__26984 = (0);
seq__26376_26964 = G__26981;
chunk__26377_26965 = G__26982;
count__26378_26966 = G__26983;
i__26379_26967 = G__26984;
continue;
} else {
var vec__26385_26987 = cljs.core.first(seq__26376_26978__$1);
var k_26988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26385_26987,(0),null);
var v_26989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26385_26987,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_26988);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_26988),v_26989);


var G__26994 = cljs.core.next(seq__26376_26978__$1);
var G__26995 = null;
var G__26996 = (0);
var G__26997 = (0);
seq__26376_26964 = G__26994;
chunk__26377_26965 = G__26995;
count__26378_26966 = G__26996;
i__26379_26967 = G__26997;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__26393 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26393,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26393,(1),null);
var seq__26396_26999 = cljs.core.seq(node_children);
var chunk__26398_27000 = null;
var count__26399_27001 = (0);
var i__26400_27002 = (0);
while(true){
if((i__26400_27002 < count__26399_27001)){
var child_struct_27003 = chunk__26398_27000.cljs$core$IIndexed$_nth$arity$2(null,i__26400_27002);
if(!((child_struct_27003 == null))){
if(typeof child_struct_27003 === 'string'){
var text_27006 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27006),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_27003)].join(''));
} else {
var children_27008 = shadow.dom.svg_node(child_struct_27003);
if(cljs.core.seq_QMARK_(children_27008)){
var seq__26404_27009 = cljs.core.seq(children_27008);
var chunk__26406_27010 = null;
var count__26407_27011 = (0);
var i__26408_27012 = (0);
while(true){
if((i__26408_27012 < count__26407_27011)){
var child_27013 = chunk__26406_27010.cljs$core$IIndexed$_nth$arity$2(null,i__26408_27012);
if(cljs.core.truth_(child_27013)){
node.appendChild(child_27013);


var G__27014 = seq__26404_27009;
var G__27015 = chunk__26406_27010;
var G__27016 = count__26407_27011;
var G__27017 = (i__26408_27012 + (1));
seq__26404_27009 = G__27014;
chunk__26406_27010 = G__27015;
count__26407_27011 = G__27016;
i__26408_27012 = G__27017;
continue;
} else {
var G__27019 = seq__26404_27009;
var G__27020 = chunk__26406_27010;
var G__27021 = count__26407_27011;
var G__27022 = (i__26408_27012 + (1));
seq__26404_27009 = G__27019;
chunk__26406_27010 = G__27020;
count__26407_27011 = G__27021;
i__26408_27012 = G__27022;
continue;
}
} else {
var temp__5457__auto___27023 = cljs.core.seq(seq__26404_27009);
if(temp__5457__auto___27023){
var seq__26404_27027__$1 = temp__5457__auto___27023;
if(cljs.core.chunked_seq_QMARK_(seq__26404_27027__$1)){
var c__4351__auto___27028 = cljs.core.chunk_first(seq__26404_27027__$1);
var G__27029 = cljs.core.chunk_rest(seq__26404_27027__$1);
var G__27030 = c__4351__auto___27028;
var G__27031 = cljs.core.count(c__4351__auto___27028);
var G__27032 = (0);
seq__26404_27009 = G__27029;
chunk__26406_27010 = G__27030;
count__26407_27011 = G__27031;
i__26408_27012 = G__27032;
continue;
} else {
var child_27038 = cljs.core.first(seq__26404_27027__$1);
if(cljs.core.truth_(child_27038)){
node.appendChild(child_27038);


var G__27040 = cljs.core.next(seq__26404_27027__$1);
var G__27041 = null;
var G__27042 = (0);
var G__27043 = (0);
seq__26404_27009 = G__27040;
chunk__26406_27010 = G__27041;
count__26407_27011 = G__27042;
i__26408_27012 = G__27043;
continue;
} else {
var G__27044 = cljs.core.next(seq__26404_27027__$1);
var G__27045 = null;
var G__27046 = (0);
var G__27047 = (0);
seq__26404_27009 = G__27044;
chunk__26406_27010 = G__27045;
count__26407_27011 = G__27046;
i__26408_27012 = G__27047;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_27008);
}
}


var G__27049 = seq__26396_26999;
var G__27050 = chunk__26398_27000;
var G__27051 = count__26399_27001;
var G__27052 = (i__26400_27002 + (1));
seq__26396_26999 = G__27049;
chunk__26398_27000 = G__27050;
count__26399_27001 = G__27051;
i__26400_27002 = G__27052;
continue;
} else {
var G__27054 = seq__26396_26999;
var G__27055 = chunk__26398_27000;
var G__27056 = count__26399_27001;
var G__27057 = (i__26400_27002 + (1));
seq__26396_26999 = G__27054;
chunk__26398_27000 = G__27055;
count__26399_27001 = G__27056;
i__26400_27002 = G__27057;
continue;
}
} else {
var temp__5457__auto___27058 = cljs.core.seq(seq__26396_26999);
if(temp__5457__auto___27058){
var seq__26396_27060__$1 = temp__5457__auto___27058;
if(cljs.core.chunked_seq_QMARK_(seq__26396_27060__$1)){
var c__4351__auto___27061 = cljs.core.chunk_first(seq__26396_27060__$1);
var G__27062 = cljs.core.chunk_rest(seq__26396_27060__$1);
var G__27063 = c__4351__auto___27061;
var G__27064 = cljs.core.count(c__4351__auto___27061);
var G__27065 = (0);
seq__26396_26999 = G__27062;
chunk__26398_27000 = G__27063;
count__26399_27001 = G__27064;
i__26400_27002 = G__27065;
continue;
} else {
var child_struct_27066 = cljs.core.first(seq__26396_27060__$1);
if(!((child_struct_27066 == null))){
if(typeof child_struct_27066 === 'string'){
var text_27067 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27067),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_27066)].join(''));
} else {
var children_27068 = shadow.dom.svg_node(child_struct_27066);
if(cljs.core.seq_QMARK_(children_27068)){
var seq__26410_27069 = cljs.core.seq(children_27068);
var chunk__26412_27070 = null;
var count__26413_27071 = (0);
var i__26414_27072 = (0);
while(true){
if((i__26414_27072 < count__26413_27071)){
var child_27074 = chunk__26412_27070.cljs$core$IIndexed$_nth$arity$2(null,i__26414_27072);
if(cljs.core.truth_(child_27074)){
node.appendChild(child_27074);


var G__27075 = seq__26410_27069;
var G__27076 = chunk__26412_27070;
var G__27077 = count__26413_27071;
var G__27078 = (i__26414_27072 + (1));
seq__26410_27069 = G__27075;
chunk__26412_27070 = G__27076;
count__26413_27071 = G__27077;
i__26414_27072 = G__27078;
continue;
} else {
var G__27080 = seq__26410_27069;
var G__27081 = chunk__26412_27070;
var G__27082 = count__26413_27071;
var G__27083 = (i__26414_27072 + (1));
seq__26410_27069 = G__27080;
chunk__26412_27070 = G__27081;
count__26413_27071 = G__27082;
i__26414_27072 = G__27083;
continue;
}
} else {
var temp__5457__auto___27087__$1 = cljs.core.seq(seq__26410_27069);
if(temp__5457__auto___27087__$1){
var seq__26410_27088__$1 = temp__5457__auto___27087__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26410_27088__$1)){
var c__4351__auto___27089 = cljs.core.chunk_first(seq__26410_27088__$1);
var G__27090 = cljs.core.chunk_rest(seq__26410_27088__$1);
var G__27091 = c__4351__auto___27089;
var G__27092 = cljs.core.count(c__4351__auto___27089);
var G__27093 = (0);
seq__26410_27069 = G__27090;
chunk__26412_27070 = G__27091;
count__26413_27071 = G__27092;
i__26414_27072 = G__27093;
continue;
} else {
var child_27095 = cljs.core.first(seq__26410_27088__$1);
if(cljs.core.truth_(child_27095)){
node.appendChild(child_27095);


var G__27096 = cljs.core.next(seq__26410_27088__$1);
var G__27097 = null;
var G__27098 = (0);
var G__27099 = (0);
seq__26410_27069 = G__27096;
chunk__26412_27070 = G__27097;
count__26413_27071 = G__27098;
i__26414_27072 = G__27099;
continue;
} else {
var G__27101 = cljs.core.next(seq__26410_27088__$1);
var G__27102 = null;
var G__27103 = (0);
var G__27104 = (0);
seq__26410_27069 = G__27101;
chunk__26412_27070 = G__27102;
count__26413_27071 = G__27103;
i__26414_27072 = G__27104;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_27068);
}
}


var G__27105 = cljs.core.next(seq__26396_27060__$1);
var G__27106 = null;
var G__27107 = (0);
var G__27108 = (0);
seq__26396_26999 = G__27105;
chunk__26398_27000 = G__27106;
count__26399_27001 = G__27107;
i__26400_27002 = G__27108;
continue;
} else {
var G__27110 = cljs.core.next(seq__26396_27060__$1);
var G__27111 = null;
var G__27112 = (0);
var G__27113 = (0);
seq__26396_26999 = G__27110;
chunk__26398_27000 = G__27111;
count__26399_27001 = G__27112;
i__26400_27002 = G__27113;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__26416_27114 = shadow.dom._to_svg;
var G__26417_27115 = "string";
var G__26418_27116 = ((function (G__26416_27114,G__26417_27115){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__26416_27114,G__26417_27115))
;
goog.object.set(G__26416_27114,G__26417_27115,G__26418_27116);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__26420_27122 = shadow.dom._to_svg;
var G__26421_27123 = "null";
var G__26422_27124 = ((function (G__26420_27122,G__26421_27123){
return (function (_){
return null;
});})(G__26420_27122,G__26421_27123))
;
goog.object.set(G__26420_27122,G__26421_27123,G__26422_27124);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27128 = arguments.length;
var i__4532__auto___27130 = (0);
while(true){
if((i__4532__auto___27130 < len__4531__auto___27128)){
args__4534__auto__.push((arguments[i__4532__auto___27130]));

var G__27131 = (i__4532__auto___27130 + (1));
i__4532__auto___27130 = G__27131;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq26424){
var G__26425 = cljs.core.first(seq26424);
var seq26424__$1 = cljs.core.next(seq26424);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26425,seq26424__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__26428 = arguments.length;
switch (G__26428) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__26431_27138 = shadow.dom.dom_node(el);
var G__26432_27139 = cljs.core.name(event);
var G__26433_27140 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__26431_27138,G__26432_27139,G__26433_27140) : shadow.dom.dom_listen.call(null,G__26431_27138,G__26432_27139,G__26433_27140));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__23565__auto___27143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___27143,buf,chan,event_fn){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___27143,buf,chan,event_fn){
return (function (state_26438){
var state_val_26439 = (state_26438[(1)]);
if((state_val_26439 === (1))){
var state_26438__$1 = state_26438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26438__$1,(2),once_or_cleanup);
} else {
if((state_val_26439 === (2))){
var inst_26435 = (state_26438[(2)]);
var inst_26436 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_26438__$1 = (function (){var statearr_26441 = state_26438;
(statearr_26441[(7)] = inst_26435);

return statearr_26441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26438__$1,inst_26436);
} else {
return null;
}
}
});})(c__23565__auto___27143,buf,chan,event_fn))
;
return ((function (switch__23463__auto__,c__23565__auto___27143,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__23464__auto__ = null;
var shadow$dom$state_machine__23464__auto____0 = (function (){
var statearr_26442 = [null,null,null,null,null,null,null,null];
(statearr_26442[(0)] = shadow$dom$state_machine__23464__auto__);

(statearr_26442[(1)] = (1));

return statearr_26442;
});
var shadow$dom$state_machine__23464__auto____1 = (function (state_26438){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_26438);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e26444){if((e26444 instanceof Object)){
var ex__23467__auto__ = e26444;
var statearr_26446_27154 = state_26438;
(statearr_26446_27154[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27155 = state_26438;
state_26438 = G__27155;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
shadow$dom$state_machine__23464__auto__ = function(state_26438){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__23464__auto____0.call(this);
case 1:
return shadow$dom$state_machine__23464__auto____1.call(this,state_26438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__23464__auto____0;
shadow$dom$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__23464__auto____1;
return shadow$dom$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___27143,buf,chan,event_fn))
})();
var state__23567__auto__ = (function (){var statearr_26450 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_26450[(6)] = c__23565__auto___27143);

return statearr_26450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___27143,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
