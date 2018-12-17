goog.provide('day8.re_frame.trace.utils.utils');
goog.require('cljs.core');
day8.re_frame.trace.utils.utils.diff_link = "https://github.com/Day8/re-frame-trace/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector
 */
day8.re_frame.trace.utils.utils.last_in_vec = (function day8$re_frame$trace$utils$utils$last_in_vec(v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(cljs.core.count(v) - (1)));
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame.trace.utils.utils.find_all_indexes_in_vec = (function day8$re_frame$trace$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__18295_SHARP_,p2__18294_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__18294_SHARP_) : pred.call(null,p2__18294_SHARP_)))){
return p1__18295_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame.trace.utils.utils.find_index_in_vec = (function day8$re_frame$trace$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first(day8.re_frame.trace.utils.utils.find_all_indexes_in_vec(pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame.trace.utils.utils.id_between_xf = (function day8$re_frame$trace$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__18296_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18296_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18296_SHARP_) <= ending)));
}));
});
day8.re_frame.trace.utils.utils.spy = (function day8$re_frame$trace$utils$utils$spy(var_args){
var G__18298 = arguments.length;
switch (G__18298) {
case 1:
return day8.re_frame.trace.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame.trace.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame.trace.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
});

day8.re_frame.trace.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
});

day8.re_frame.trace.utils.utils.spy.cljs$lang$maxFixedArity = 2;

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame.trace.utils.utils.pluralize = (function day8$re_frame$trace$utils$utils$pluralize(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18327 = arguments.length;
var i__4532__auto___18328 = (0);
while(true){
if((i__4532__auto___18328 < len__4531__auto___18327)){
args__4534__auto__.push((arguments[i__4532__auto___18328]));

var G__18329 = (i__4532__auto___18328 + (1));
i__4532__auto___18328 = G__18329;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame.trace.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame.trace.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__18304){
var vec__18305 = p__18304;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18305,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__3949__auto__ = plural;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
});

day8.re_frame.trace.utils.utils.pluralize.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.trace.utils.utils.pluralize.cljs$lang$applyTo = (function (seq18300){
var G__18301 = cljs.core.first(seq18300);
var seq18300__$1 = cljs.core.next(seq18300);
var G__18302 = cljs.core.first(seq18300__$1);
var seq18300__$2 = cljs.core.next(seq18300__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18301,G__18302,seq18300__$2);
});

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame.trace.utils.utils.pluralize_ = (function day8$re_frame$trace$utils$utils$pluralize_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18330 = arguments.length;
var i__4532__auto___18331 = (0);
while(true){
if((i__4532__auto___18331 < len__4531__auto___18330)){
args__4534__auto__.push((arguments[i__4532__auto___18331]));

var G__18338 = (i__4532__auto___18331 + (1));
i__4532__auto___18331 = G__18338;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame.trace.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame.trace.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__18315){
var vec__18319 = p__18315;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18319,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__3949__auto__ = plural;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
});

day8.re_frame.trace.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.trace.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq18309){
var G__18310 = cljs.core.first(seq18309);
var seq18309__$1 = cljs.core.next(seq18309);
var G__18311 = cljs.core.first(seq18309__$1);
var seq18309__$2 = cljs.core.next(seq18309__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18310,G__18311,seq18309__$2);
});


//# sourceMappingURL=day8.re_frame.trace.utils.utils.js.map
