goog.provide('day8.re_frame.trace.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame.trace.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame.trace.utils.localstorage.safe_prefix = "day8.re-frame.trace.";
day8.re_frame.trace.utils.localstorage.safe_key = (function day8$re_frame$trace$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.trace.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-trace value from local storage.
 */
day8.re_frame.trace.utils.localstorage.get = (function day8$re_frame$trace$utils$localstorage$get(var_args){
var G__20832 = arguments.length;
switch (G__20832) {
case 1:
return day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame.trace.utils.localstorage.storage.get(day8.re_frame.trace.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame.trace.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-trace value to local storage.
 */
day8.re_frame.trace.utils.localstorage.save_BANG_ = (function day8$re_frame$trace$utils$localstorage$save_BANG_(key,value){
return day8.re_frame.trace.utils.localstorage.storage.set(day8.re_frame.trace.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-trace config keys
 */
day8.re_frame.trace.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame$trace$utils$localstorage$delete_all_keys_BANG_(){
var seq__20833 = cljs.core.seq(Object.keys(localStorage));
var chunk__20834 = null;
var count__20835 = (0);
var i__20836 = (0);
while(true){
if((i__20836 < count__20835)){
var k = chunk__20834.cljs$core$IIndexed$_nth$arity$2(null,i__20836);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame.trace.utils.localstorage.safe_prefix)){
day8.re_frame.trace.utils.localstorage.storage.remove(k);
} else {
}


var G__20857 = seq__20833;
var G__20858 = chunk__20834;
var G__20859 = count__20835;
var G__20860 = (i__20836 + (1));
seq__20833 = G__20857;
chunk__20834 = G__20858;
count__20835 = G__20859;
i__20836 = G__20860;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20833);
if(temp__5457__auto__){
var seq__20833__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20833__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20833__$1);
var G__20864 = cljs.core.chunk_rest(seq__20833__$1);
var G__20865 = c__4351__auto__;
var G__20866 = cljs.core.count(c__4351__auto__);
var G__20867 = (0);
seq__20833 = G__20864;
chunk__20834 = G__20865;
count__20835 = G__20866;
i__20836 = G__20867;
continue;
} else {
var k = cljs.core.first(seq__20833__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame.trace.utils.localstorage.safe_prefix)){
day8.re_frame.trace.utils.localstorage.storage.remove(k);
} else {
}


var G__20868 = cljs.core.next(seq__20833__$1);
var G__20869 = null;
var G__20870 = (0);
var G__20871 = (0);
seq__20833 = G__20868;
chunk__20834 = G__20869;
count__20835 = G__20870;
i__20836 = G__20871;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame.trace.utils.localstorage.js.map
