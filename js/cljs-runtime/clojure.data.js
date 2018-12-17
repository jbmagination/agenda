goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12045){
var vec__12046 = p__12045;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12046,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__12057 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12057,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12057,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12057,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__12086 = arguments.length;
switch (G__12086) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__12171_12294 = clojure.data.equality_partition;
var G__12172_12295 = "null";
var G__12173_12296 = ((function (G__12171_12294,G__12172_12295){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12171_12294,G__12172_12295))
;
goog.object.set(G__12171_12294,G__12172_12295,G__12173_12296);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__12177_12299 = clojure.data.equality_partition;
var G__12178_12300 = "string";
var G__12179_12301 = ((function (G__12177_12299,G__12178_12300){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12177_12299,G__12178_12300))
;
goog.object.set(G__12177_12299,G__12178_12300,G__12179_12301);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__12183_12302 = clojure.data.equality_partition;
var G__12184_12303 = "number";
var G__12185_12304 = ((function (G__12183_12302,G__12184_12303){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12183_12302,G__12184_12303))
;
goog.object.set(G__12183_12302,G__12184_12303,G__12185_12304);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__12186_12305 = clojure.data.equality_partition;
var G__12187_12306 = "array";
var G__12188_12307 = ((function (G__12186_12305,G__12187_12306){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__12186_12305,G__12187_12306))
;
goog.object.set(G__12186_12305,G__12187_12306,G__12188_12307);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__12191_12313 = clojure.data.equality_partition;
var G__12192_12314 = "function";
var G__12193_12315 = ((function (G__12191_12313,G__12192_12314){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12191_12313,G__12192_12314))
;
goog.object.set(G__12191_12313,G__12192_12314,G__12193_12315);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__12196_12317 = clojure.data.equality_partition;
var G__12197_12318 = "boolean";
var G__12198_12319 = ((function (G__12196_12317,G__12197_12318){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12196_12317,G__12197_12318))
;
goog.object.set(G__12196_12317,G__12197_12318,G__12198_12319);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__12199_12322 = clojure.data.equality_partition;
var G__12200_12323 = "_";
var G__12201_12324 = ((function (G__12199_12322,G__12200_12323){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__12199_12322,G__12200_12323))
;
goog.object.set(G__12199_12322,G__12200_12323,G__12201_12324);
goog.object.set(clojure.data.Diff,"null",true);

var G__12223_12334 = clojure.data.diff_similar;
var G__12224_12335 = "null";
var G__12225_12336 = ((function (G__12223_12334,G__12224_12335){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12223_12334,G__12224_12335))
;
goog.object.set(G__12223_12334,G__12224_12335,G__12225_12336);

goog.object.set(clojure.data.Diff,"string",true);

var G__12229_12339 = clojure.data.diff_similar;
var G__12230_12340 = "string";
var G__12231_12341 = ((function (G__12229_12339,G__12230_12340){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12229_12339,G__12230_12340))
;
goog.object.set(G__12229_12339,G__12230_12340,G__12231_12341);

goog.object.set(clojure.data.Diff,"number",true);

var G__12235_12345 = clojure.data.diff_similar;
var G__12236_12346 = "number";
var G__12237_12347 = ((function (G__12235_12345,G__12236_12346){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12235_12345,G__12236_12346))
;
goog.object.set(G__12235_12345,G__12236_12346,G__12237_12347);

goog.object.set(clojure.data.Diff,"array",true);

var G__12238_12349 = clojure.data.diff_similar;
var G__12239_12350 = "array";
var G__12240_12351 = ((function (G__12238_12349,G__12239_12350){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__12238_12349,G__12239_12350))
;
goog.object.set(G__12238_12349,G__12239_12350,G__12240_12351);

goog.object.set(clojure.data.Diff,"function",true);

var G__12242_12354 = clojure.data.diff_similar;
var G__12243_12355 = "function";
var G__12244_12356 = ((function (G__12242_12354,G__12243_12355){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12242_12354,G__12243_12355))
;
goog.object.set(G__12242_12354,G__12243_12355,G__12244_12356);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__12246_12359 = clojure.data.diff_similar;
var G__12247_12360 = "boolean";
var G__12248_12361 = ((function (G__12246_12359,G__12247_12360){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12246_12359,G__12247_12360))
;
goog.object.set(G__12246_12359,G__12247_12360,G__12248_12361);

goog.object.set(clojure.data.Diff,"_",true);

var G__12250_12365 = clojure.data.diff_similar;
var G__12251_12366 = "_";
var G__12252_12367 = ((function (G__12250_12365,G__12251_12366){
return (function (a,b){
var fexpr__12261 = (function (){var G__12262 = clojure.data.equality_partition(a);
var G__12262__$1 = (((G__12262 instanceof cljs.core.Keyword))?G__12262.fqn:null);
switch (G__12262__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12262__$1)].join('')));

}
})();
return (fexpr__12261.cljs$core$IFn$_invoke$arity$2 ? fexpr__12261.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12261.call(null,a,b));
});})(G__12250_12365,G__12251_12366))
;
goog.object.set(G__12250_12365,G__12251_12366,G__12252_12367);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
