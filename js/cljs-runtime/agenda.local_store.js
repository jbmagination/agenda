goog.provide('agenda.local_store');
goog.require('cljs.core');
goog.require('cljs.reader');
agenda.local_store.write_key = (function agenda$local_store$write_key(ls_key,data){
return localStorage.setItem(ls_key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''));
});
agenda.local_store.load_key = (function agenda$local_store$load_key(ls_key){
var G__34634 = localStorage.getItem(ls_key);
if((G__34634 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__34634);
}
});
agenda.local_store.write = (function agenda$local_store$write(data_kv){
var seq__34635 = cljs.core.seq(data_kv);
var chunk__34636 = null;
var count__34637 = (0);
var i__34638 = (0);
while(true){
if((i__34638 < count__34637)){
var vec__34639 = chunk__34636.cljs$core$IIndexed$_nth$arity$2(null,i__34638);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34639,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34639,(1),null);
agenda.local_store.write_key(k,v);


var G__34647 = seq__34635;
var G__34648 = chunk__34636;
var G__34649 = count__34637;
var G__34650 = (i__34638 + (1));
seq__34635 = G__34647;
chunk__34636 = G__34648;
count__34637 = G__34649;
i__34638 = G__34650;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__34635);
if(temp__5457__auto__){
var seq__34635__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34635__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__34635__$1);
var G__34651 = cljs.core.chunk_rest(seq__34635__$1);
var G__34652 = c__4351__auto__;
var G__34653 = cljs.core.count(c__4351__auto__);
var G__34654 = (0);
seq__34635 = G__34651;
chunk__34636 = G__34652;
count__34637 = G__34653;
i__34638 = G__34654;
continue;
} else {
var vec__34642 = cljs.core.first(seq__34635__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34642,(1),null);
agenda.local_store.write_key(k,v);


var G__34655 = cljs.core.next(seq__34635__$1);
var G__34656 = null;
var G__34657 = (0);
var G__34658 = (0);
seq__34635 = G__34655;
chunk__34636 = G__34656;
count__34637 = G__34657;
i__34638 = G__34658;
continue;
}
} else {
return null;
}
}
break;
}
});
agenda.local_store.load = (function agenda$local_store$load(ls_keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34645_SHARP_,p2__34646_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34645_SHARP_,p2__34646_SHARP_,agenda.local_store.load_key(p2__34646_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,ls_keys);
});

//# sourceMappingURL=agenda.local_store.js.map
