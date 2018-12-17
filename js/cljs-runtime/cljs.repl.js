goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23526){
var map__23531 = p__23526;
var map__23531__$1 = ((((!((map__23531 == null)))?(((((map__23531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23531):map__23531);
var m = map__23531__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23545_23679 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23546_23680 = null;
var count__23547_23681 = (0);
var i__23548_23682 = (0);
while(true){
if((i__23548_23682 < count__23547_23681)){
var f_23685 = chunk__23546_23680.cljs$core$IIndexed$_nth$arity$2(null,i__23548_23682);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23685], 0));


var G__23686 = seq__23545_23679;
var G__23687 = chunk__23546_23680;
var G__23688 = count__23547_23681;
var G__23689 = (i__23548_23682 + (1));
seq__23545_23679 = G__23686;
chunk__23546_23680 = G__23687;
count__23547_23681 = G__23688;
i__23548_23682 = G__23689;
continue;
} else {
var temp__5457__auto___23692 = cljs.core.seq(seq__23545_23679);
if(temp__5457__auto___23692){
var seq__23545_23694__$1 = temp__5457__auto___23692;
if(cljs.core.chunked_seq_QMARK_(seq__23545_23694__$1)){
var c__4351__auto___23695 = cljs.core.chunk_first(seq__23545_23694__$1);
var G__23696 = cljs.core.chunk_rest(seq__23545_23694__$1);
var G__23697 = c__4351__auto___23695;
var G__23698 = cljs.core.count(c__4351__auto___23695);
var G__23699 = (0);
seq__23545_23679 = G__23696;
chunk__23546_23680 = G__23697;
count__23547_23681 = G__23698;
i__23548_23682 = G__23699;
continue;
} else {
var f_23704 = cljs.core.first(seq__23545_23694__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23704], 0));


var G__23705 = cljs.core.next(seq__23545_23694__$1);
var G__23706 = null;
var G__23707 = (0);
var G__23708 = (0);
seq__23545_23679 = G__23705;
chunk__23546_23680 = G__23706;
count__23547_23681 = G__23707;
i__23548_23682 = G__23708;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23713 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23713], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23713)))?cljs.core.second(arglists_23713):arglists_23713)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23572_23733 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23574_23734 = null;
var count__23575_23735 = (0);
var i__23576_23736 = (0);
while(true){
if((i__23576_23736 < count__23575_23735)){
var vec__23577_23739 = chunk__23574_23734.cljs$core$IIndexed$_nth$arity$2(null,i__23576_23736);
var name_23740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23577_23739,(0),null);
var map__23580_23741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23577_23739,(1),null);
var map__23580_23742__$1 = ((((!((map__23580_23741 == null)))?(((((map__23580_23741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23580_23741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23580_23741):map__23580_23741);
var doc_23743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23580_23742__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23580_23742__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23740], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23744], 0));

if(cljs.core.truth_(doc_23743)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23743], 0));
} else {
}


var G__23751 = seq__23572_23733;
var G__23752 = chunk__23574_23734;
var G__23753 = count__23575_23735;
var G__23754 = (i__23576_23736 + (1));
seq__23572_23733 = G__23751;
chunk__23574_23734 = G__23752;
count__23575_23735 = G__23753;
i__23576_23736 = G__23754;
continue;
} else {
var temp__5457__auto___23759 = cljs.core.seq(seq__23572_23733);
if(temp__5457__auto___23759){
var seq__23572_23760__$1 = temp__5457__auto___23759;
if(cljs.core.chunked_seq_QMARK_(seq__23572_23760__$1)){
var c__4351__auto___23761 = cljs.core.chunk_first(seq__23572_23760__$1);
var G__23762 = cljs.core.chunk_rest(seq__23572_23760__$1);
var G__23763 = c__4351__auto___23761;
var G__23764 = cljs.core.count(c__4351__auto___23761);
var G__23765 = (0);
seq__23572_23733 = G__23762;
chunk__23574_23734 = G__23763;
count__23575_23735 = G__23764;
i__23576_23736 = G__23765;
continue;
} else {
var vec__23598_23769 = cljs.core.first(seq__23572_23760__$1);
var name_23770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23598_23769,(0),null);
var map__23601_23771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23598_23769,(1),null);
var map__23601_23772__$1 = ((((!((map__23601_23771 == null)))?(((((map__23601_23771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23601_23771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23601_23771):map__23601_23771);
var doc_23773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23601_23772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23601_23772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23770], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23774], 0));

if(cljs.core.truth_(doc_23773)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23773], 0));
} else {
}


var G__23787 = cljs.core.next(seq__23572_23760__$1);
var G__23788 = null;
var G__23789 = (0);
var G__23790 = (0);
seq__23572_23733 = G__23787;
chunk__23574_23734 = G__23788;
count__23575_23735 = G__23789;
i__23576_23736 = G__23790;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__23633 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23634 = null;
var count__23635 = (0);
var i__23636 = (0);
while(true){
if((i__23636 < count__23635)){
var role = chunk__23634.cljs$core$IIndexed$_nth$arity$2(null,i__23636);
var temp__5457__auto___23797__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23797__$1)){
var spec_23800 = temp__5457__auto___23797__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_23800)], 0));
} else {
}


var G__23801 = seq__23633;
var G__23802 = chunk__23634;
var G__23803 = count__23635;
var G__23804 = (i__23636 + (1));
seq__23633 = G__23801;
chunk__23634 = G__23802;
count__23635 = G__23803;
i__23636 = G__23804;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__23633);
if(temp__5457__auto____$1){
var seq__23633__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23633__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23633__$1);
var G__23809 = cljs.core.chunk_rest(seq__23633__$1);
var G__23810 = c__4351__auto__;
var G__23811 = cljs.core.count(c__4351__auto__);
var G__23812 = (0);
seq__23633 = G__23809;
chunk__23634 = G__23810;
count__23635 = G__23811;
i__23636 = G__23812;
continue;
} else {
var role = cljs.core.first(seq__23633__$1);
var temp__5457__auto___23815__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23815__$2)){
var spec_23816 = temp__5457__auto___23815__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_23816)], 0));
} else {
}


var G__23817 = cljs.core.next(seq__23633__$1);
var G__23818 = null;
var G__23819 = (0);
var G__23820 = (0);
seq__23633 = G__23817;
chunk__23634 = G__23818;
count__23635 = G__23819;
i__23636 = G__23820;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
