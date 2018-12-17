goog.provide('mranderson047.garden.v1v3v3.garden.selectors');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.selectors.ICSSSelector = function(){};

mranderson047.garden.v1v3v3.garden.selectors.css_selector = (function mranderson047$garden$v1v3v3$garden$selectors$css_selector(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1 == null))))){
return this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mranderson047.garden.v1v3v3.garden.selectors.css_selector[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (mranderson047.garden.v1v3v3.garden.selectors.css_selector["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICSSSelector.css-selector",this$);
}
}
}
});

mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_ = (function mranderson047$garden$v1v3v3$garden$selectors$selector_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(mranderson047.garden.v1v3v3.garden.selectors.ICSSSelector,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(mranderson047.garden.v1v3v3.garden.selectors.ICSSSelector,x);
}
});
goog.object.set(mranderson047.garden.v1v3v3.garden.selectors.ICSSSelector,"string",true);

var G__16181_16630 = mranderson047.garden.v1v3v3.garden.selectors.css_selector;
var G__16182_16631 = "string";
var G__16183_16632 = ((function (G__16181_16630,G__16182_16631){
return (function (this$){
return this$;
});})(G__16181_16630,G__16182_16631))
;
goog.object.set(G__16181_16630,G__16182_16631,G__16183_16632);

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

cljs.core.Symbol.prototype.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {mranderson047.garden.v1v3v3.garden.selectors.ICSSSelector}
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
mranderson047.garden.v1v3v3.garden.selectors.CSSSelector = (function (selector,__meta,__extmap,__hash){
this.selector = selector;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k16211,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__16232 = k16211;
var G__16232__$1 = (((G__16232 instanceof cljs.core.Keyword))?G__16232.fqn:null);
switch (G__16232__$1) {
case "selector":
return self__.selector;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16211,else__4206__auto__);

}
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mranderson047.garden.v1v3v3.garden.selectors.CSSSelector{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16210){
var self__ = this;
var G__16210__$1 = this;
return (new cljs.core.RecordIter((0),G__16210__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selector","selector",762528866)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector(self__.selector,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__16250 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1545788293 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__16250(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16213,other16214){
var self__ = this;
var this16213__$1 = this;
return ((!((other16214 == null))) && ((this16213__$1.constructor === other16214.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16213__$1.selector,other16214.selector)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16213__$1.__extmap,other16214.__extmap)));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.selectors.css_selector(new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selector","selector",762528866),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__16210){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__16254 = cljs.core.keyword_identical_QMARK_;
var expr__16255 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__16257 = new cljs.core.Keyword(null,"selector","selector",762528866);
var G__16258 = expr__16255;
return (pred__16254.cljs$core$IFn$_invoke$arity$2 ? pred__16254.cljs$core$IFn$_invoke$arity$2(G__16257,G__16258) : pred__16254.call(null,G__16257,G__16258));
})())){
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector(G__16210,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__16210),null));
}
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector,null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__16210){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector(self__.selector,G__16210,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.call = (function() {
var G__16658 = null;
var G__16658__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__16658__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a))].join(''),null,null,null));
});
var G__16658__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b))].join(''),null,null,null));
});
var G__16658__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c))].join(''),null,null,null));
});
var G__16658__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d))].join(''),null,null,null));
});
var G__16658__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e))].join(''),null,null,null));
});
var G__16658__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f))].join(''),null,null,null));
});
var G__16658__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g))].join(''),null,null,null));
});
var G__16658__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h))].join(''),null,null,null));
});
var G__16658__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i))].join(''),null,null,null));
});
var G__16658__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j))].join(''),null,null,null));
});
var G__16658__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k))].join(''),null,null,null));
});
var G__16658__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l))].join(''),null,null,null));
});
var G__16658__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m))].join(''),null,null,null));
});
var G__16658__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n))].join(''),null,null,null));
});
var G__16658__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o))].join(''),null,null,null));
});
var G__16658__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p))].join(''),null,null,null));
});
var G__16658__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(q))].join(''),null,null,null));
});
var G__16658__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(r))].join(''),null,null,null));
});
var G__16658__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(s))].join(''),null,null,null));
});
var G__16658__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(t))].join(''),null,null,null));
});
G__16658 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
switch(arguments.length){
case 1:
return G__16658__1.call(this,self__);
case 2:
return G__16658__2.call(this,self__,a);
case 3:
return G__16658__3.call(this,self__,a,b);
case 4:
return G__16658__4.call(this,self__,a,b,c);
case 5:
return G__16658__5.call(this,self__,a,b,c,d);
case 6:
return G__16658__6.call(this,self__,a,b,c,d,e);
case 7:
return G__16658__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__16658__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__16658__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__16658__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__16658__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__16658__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__16658__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__16658__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__16658__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__16658__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__16658__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__16658__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__16658__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__16658__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__16658__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__16658.cljs$core$IFn$_invoke$arity$1 = G__16658__1;
G__16658.cljs$core$IFn$_invoke$arity$2 = G__16658__2;
G__16658.cljs$core$IFn$_invoke$arity$3 = G__16658__3;
G__16658.cljs$core$IFn$_invoke$arity$4 = G__16658__4;
G__16658.cljs$core$IFn$_invoke$arity$5 = G__16658__5;
G__16658.cljs$core$IFn$_invoke$arity$6 = G__16658__6;
G__16658.cljs$core$IFn$_invoke$arity$7 = G__16658__7;
G__16658.cljs$core$IFn$_invoke$arity$8 = G__16658__8;
G__16658.cljs$core$IFn$_invoke$arity$9 = G__16658__9;
G__16658.cljs$core$IFn$_invoke$arity$10 = G__16658__10;
G__16658.cljs$core$IFn$_invoke$arity$11 = G__16658__11;
G__16658.cljs$core$IFn$_invoke$arity$12 = G__16658__12;
G__16658.cljs$core$IFn$_invoke$arity$13 = G__16658__13;
G__16658.cljs$core$IFn$_invoke$arity$14 = G__16658__14;
G__16658.cljs$core$IFn$_invoke$arity$15 = G__16658__15;
G__16658.cljs$core$IFn$_invoke$arity$16 = G__16658__16;
G__16658.cljs$core$IFn$_invoke$arity$17 = G__16658__17;
G__16658.cljs$core$IFn$_invoke$arity$18 = G__16658__18;
G__16658.cljs$core$IFn$_invoke$arity$19 = G__16658__19;
G__16658.cljs$core$IFn$_invoke$arity$20 = G__16658__20;
G__16658.cljs$core$IFn$_invoke$arity$21 = G__16658__21;
return G__16658;
})()
;

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.apply = (function (self__,args16224){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16224)));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(q))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(r))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(s))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(t))].join(''),null,null,null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null)], null);
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.selectors/CSSSelector",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.selectors.CSSSelector.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mranderson047.garden.v1v3v3.garden.selectors/CSSSelector");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.selectors/CSSSelector.
 */
mranderson047.garden.v1v3v3.garden.selectors.__GT_CSSSelector = (function mranderson047$garden$v1v3v3$garden$selectors$__GT_CSSSelector(selector){
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector(selector,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.selectors/CSSSelector, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.selectors.map__GT_CSSSelector = (function mranderson047$garden$v1v3v3$garden$selectors$map__GT_CSSSelector(G__16219){
var extmap__4236__auto__ = (function (){var G__16407 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16219,new cljs.core.Keyword(null,"selector","selector",762528866));
if(cljs.core.record_QMARK_(G__16219)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16407);
} else {
return G__16407;
}
})();
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector(new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__16219),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

mranderson047.garden.v1v3v3.garden.selectors.selector = (function mranderson047$garden$v1v3v3$garden$selectors$selector(x){
return (new mranderson047.garden.v1v3v3.garden.selectors.CSSSelector(x,null,null,null));
});
mranderson047.garden.v1v3v3.garden.selectors.html_tags = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"abbr","abbr",-565843885,null),new cljs.core.Symbol(null,"address","address",-2094936343,null),new cljs.core.Symbol(null,"area","area",2112538783,null),new cljs.core.Symbol(null,"article","article",1618846482,null),new cljs.core.Symbol(null,"aside","aside",-1240038232,null),new cljs.core.Symbol(null,"audio","audio",-835308448,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"bdi","bdi",317505641,null),new cljs.core.Symbol(null,"bdo","bdo",-490616675,null),new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"br","br",-1720330977,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.Symbol(null,"caption","caption",785147625,null),new cljs.core.Symbol(null,"cite","cite",-744995773,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"colgroup","colgroup",-2003317124,null),new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"datalist","datalist",405488053,null),new cljs.core.Symbol(null,"dd","dd",300093898,null),new cljs.core.Symbol(null,"del","del",-2079460185,null),new cljs.core.Symbol(null,"details","details",-697640358,null),new cljs.core.Symbol(null,"dfn","dfn",1882439694,null),new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.Symbol(null,"dl","dl",-499620186,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null),new cljs.core.Symbol(null,"em","em",-1946622734,null),new cljs.core.Symbol(null,"embed","embed",285618178,null),new cljs.core.Symbol(null,"fieldset","fieldset",-309239289,null),new cljs.core.Symbol(null,"figcaption","figcaption",-149590520,null),new cljs.core.Symbol(null,"figure","figure",1079137448,null),new cljs.core.Symbol(null,"footer","footer",-1047990379,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"h1","h1",-256355935,null),new cljs.core.Symbol(null,"h2","h2",1267868799,null),new cljs.core.Symbol(null,"h3","h3",-586824606,null),new cljs.core.Symbol(null,"h4","h4",-649572776,null),new cljs.core.Symbol(null,"h5","h5",-188625098,null),new cljs.core.Symbol(null,"h6","h6",-2097141989,null),new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"hgroup","hgroup",-1525585280,null),new cljs.core.Symbol(null,"hr","hr",-1276695702,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"iframe","iframe",-1770013743,null),new cljs.core.Symbol(null,"img","img",-1211748411,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"ins","ins",618547957,null),new cljs.core.Symbol(null,"kbd","kbd",1956688402,null),new cljs.core.Symbol(null,"keygen","keygen",1068838274,null),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"legend","legend",613339282,null),new cljs.core.Symbol(null,"li","li",-1930876848,null),new cljs.core.Symbol(null,"link","link",-128631941,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"mark","mark",1266715182,null),new cljs.core.Symbol(null,"math","math",-386381276,null),new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"meter","meter",1452889916,null),new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.Symbol(null,"noscript","noscript",935754238,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol(null,"ol","ol",-1721911718,null),new cljs.core.Symbol(null,"optgroup","optgroup",-916153551,null),new cljs.core.Symbol(null,"option","option",1705663799,null),new cljs.core.Symbol(null,"output","output",534662484,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"param","param",-640803946,null),new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"progress","progress",1884855074,null),new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.Symbol(null,"rp","rp",-647737686,null),new cljs.core.Symbol(null,"rt","rt",-2030955077,null),new cljs.core.Symbol(null,"ruby","ruby",-653698108,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"samp","samp",-1148294633,null),new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"select","select",-1506602266,null),new cljs.core.Symbol(null,"small","small",-520957065,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.Symbol(null,"strong","strong",1910060527,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"sub","sub",-453228498,null),new cljs.core.Symbol(null,"summary","summary",2021379479,null),new cljs.core.Symbol(null,"sup","sup",-398960819,null),new cljs.core.Symbol(null,"svg","svg",-1797646627,null),new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.Symbol(null,"tbody","tbody",1559853227,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Symbol(null,"textarea","textarea",990155703,null),new cljs.core.Symbol(null,"tfoot","tfoot",938931637,null),new cljs.core.Symbol(null,"th","th",1094922961,null),new cljs.core.Symbol(null,"thead","thead",1348656231,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"tr","tr",215756881,null),new cljs.core.Symbol(null,"track","track",1836319014,null),new cljs.core.Symbol(null,"u","u",483896742,null),new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"video","video",1797419657,null),new cljs.core.Symbol(null,"wbr","wbr",1869193327,null)], true);
/**
 * CSS a type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.a = mranderson047.garden.v1v3v3.garden.selectors.selector("a");

/**
 * CSS abbr type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.abbr = mranderson047.garden.v1v3v3.garden.selectors.selector("abbr");

/**
 * CSS address type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.address = mranderson047.garden.v1v3v3.garden.selectors.selector("address");

/**
 * CSS area type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.area = mranderson047.garden.v1v3v3.garden.selectors.selector("area");

/**
 * CSS article type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.article = mranderson047.garden.v1v3v3.garden.selectors.selector("article");

/**
 * CSS aside type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.aside = mranderson047.garden.v1v3v3.garden.selectors.selector("aside");

/**
 * CSS audio type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.audio = mranderson047.garden.v1v3v3.garden.selectors.selector("audio");

/**
 * CSS b type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.b = mranderson047.garden.v1v3v3.garden.selectors.selector("b");

/**
 * CSS base type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.base = mranderson047.garden.v1v3v3.garden.selectors.selector("base");

/**
 * CSS bdi type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.bdi = mranderson047.garden.v1v3v3.garden.selectors.selector("bdi");

/**
 * CSS bdo type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.bdo = mranderson047.garden.v1v3v3.garden.selectors.selector("bdo");

/**
 * CSS blockquote type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.blockquote = mranderson047.garden.v1v3v3.garden.selectors.selector("blockquote");

/**
 * CSS body type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.body = mranderson047.garden.v1v3v3.garden.selectors.selector("body");

/**
 * CSS br type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.br = mranderson047.garden.v1v3v3.garden.selectors.selector("br");

/**
 * CSS button type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.button = mranderson047.garden.v1v3v3.garden.selectors.selector("button");

/**
 * CSS canvas type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.canvas = mranderson047.garden.v1v3v3.garden.selectors.selector("canvas");

/**
 * CSS caption type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.caption = mranderson047.garden.v1v3v3.garden.selectors.selector("caption");

/**
 * CSS cite type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.cite = mranderson047.garden.v1v3v3.garden.selectors.selector("cite");

/**
 * CSS code type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.code = mranderson047.garden.v1v3v3.garden.selectors.selector("code");

/**
 * CSS col type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.col = mranderson047.garden.v1v3v3.garden.selectors.selector("col");

/**
 * CSS colgroup type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.colgroup = mranderson047.garden.v1v3v3.garden.selectors.selector("colgroup");

/**
 * CSS command type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.command = mranderson047.garden.v1v3v3.garden.selectors.selector("command");

/**
 * CSS datalist type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.datalist = mranderson047.garden.v1v3v3.garden.selectors.selector("datalist");

/**
 * CSS dd type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.dd = mranderson047.garden.v1v3v3.garden.selectors.selector("dd");

/**
 * CSS del type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.del = mranderson047.garden.v1v3v3.garden.selectors.selector("del");

/**
 * CSS details type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.details = mranderson047.garden.v1v3v3.garden.selectors.selector("details");

/**
 * CSS dfn type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.dfn = mranderson047.garden.v1v3v3.garden.selectors.selector("dfn");

/**
 * CSS div type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.div = mranderson047.garden.v1v3v3.garden.selectors.selector("div");

/**
 * CSS dl type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.dl = mranderson047.garden.v1v3v3.garden.selectors.selector("dl");

/**
 * CSS dt type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.dt = mranderson047.garden.v1v3v3.garden.selectors.selector("dt");

/**
 * CSS em type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.em = mranderson047.garden.v1v3v3.garden.selectors.selector("em");

/**
 * CSS embed type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.embed = mranderson047.garden.v1v3v3.garden.selectors.selector("embed");

/**
 * CSS fieldset type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.fieldset = mranderson047.garden.v1v3v3.garden.selectors.selector("fieldset");

/**
 * CSS figcaption type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.figcaption = mranderson047.garden.v1v3v3.garden.selectors.selector("figcaption");

/**
 * CSS figure type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.figure = mranderson047.garden.v1v3v3.garden.selectors.selector("figure");

/**
 * CSS footer type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.footer = mranderson047.garden.v1v3v3.garden.selectors.selector("footer");

/**
 * CSS form type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.form = mranderson047.garden.v1v3v3.garden.selectors.selector("form");

/**
 * CSS h1 type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.h1 = mranderson047.garden.v1v3v3.garden.selectors.selector("h1");

/**
 * CSS h2 type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.h2 = mranderson047.garden.v1v3v3.garden.selectors.selector("h2");

/**
 * CSS h3 type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.h3 = mranderson047.garden.v1v3v3.garden.selectors.selector("h3");

/**
 * CSS h4 type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.h4 = mranderson047.garden.v1v3v3.garden.selectors.selector("h4");

/**
 * CSS h5 type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.h5 = mranderson047.garden.v1v3v3.garden.selectors.selector("h5");

/**
 * CSS h6 type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.h6 = mranderson047.garden.v1v3v3.garden.selectors.selector("h6");

/**
 * CSS head type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.head = mranderson047.garden.v1v3v3.garden.selectors.selector("head");

/**
 * CSS header type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.header = mranderson047.garden.v1v3v3.garden.selectors.selector("header");

/**
 * CSS hgroup type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.hgroup = mranderson047.garden.v1v3v3.garden.selectors.selector("hgroup");

/**
 * CSS hr type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.hr = mranderson047.garden.v1v3v3.garden.selectors.selector("hr");

/**
 * CSS html type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.html = mranderson047.garden.v1v3v3.garden.selectors.selector("html");

/**
 * CSS i type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.i = mranderson047.garden.v1v3v3.garden.selectors.selector("i");

/**
 * CSS iframe type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.iframe = mranderson047.garden.v1v3v3.garden.selectors.selector("iframe");

/**
 * CSS img type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.img = mranderson047.garden.v1v3v3.garden.selectors.selector("img");

/**
 * CSS input type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.input = mranderson047.garden.v1v3v3.garden.selectors.selector("input");

/**
 * CSS ins type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.ins = mranderson047.garden.v1v3v3.garden.selectors.selector("ins");

/**
 * CSS kbd type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.kbd = mranderson047.garden.v1v3v3.garden.selectors.selector("kbd");

/**
 * CSS keygen type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.keygen = mranderson047.garden.v1v3v3.garden.selectors.selector("keygen");

/**
 * CSS label type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.label = mranderson047.garden.v1v3v3.garden.selectors.selector("label");

/**
 * CSS legend type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.legend = mranderson047.garden.v1v3v3.garden.selectors.selector("legend");

/**
 * CSS li type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.li = mranderson047.garden.v1v3v3.garden.selectors.selector("li");

/**
 * CSS link type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.link = mranderson047.garden.v1v3v3.garden.selectors.selector("link");

/**
 * CSS map type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.map = mranderson047.garden.v1v3v3.garden.selectors.selector("map");

/**
 * CSS mark type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.mark = mranderson047.garden.v1v3v3.garden.selectors.selector("mark");

/**
 * CSS math type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.math = mranderson047.garden.v1v3v3.garden.selectors.selector("math");

/**
 * CSS menu type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.menu = mranderson047.garden.v1v3v3.garden.selectors.selector("menu");

/**
 * CSS meta type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.meta = mranderson047.garden.v1v3v3.garden.selectors.selector("meta");

/**
 * CSS meter type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.meter = mranderson047.garden.v1v3v3.garden.selectors.selector("meter");

/**
 * CSS nav type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.nav = mranderson047.garden.v1v3v3.garden.selectors.selector("nav");

/**
 * CSS noscript type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.noscript = mranderson047.garden.v1v3v3.garden.selectors.selector("noscript");

/**
 * CSS object type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.object = mranderson047.garden.v1v3v3.garden.selectors.selector("object");

/**
 * CSS ol type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.ol = mranderson047.garden.v1v3v3.garden.selectors.selector("ol");

/**
 * CSS optgroup type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.optgroup = mranderson047.garden.v1v3v3.garden.selectors.selector("optgroup");

/**
 * CSS option type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.option = mranderson047.garden.v1v3v3.garden.selectors.selector("option");

/**
 * CSS output type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.output = mranderson047.garden.v1v3v3.garden.selectors.selector("output");

/**
 * CSS p type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.p = mranderson047.garden.v1v3v3.garden.selectors.selector("p");

/**
 * CSS param type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.param = mranderson047.garden.v1v3v3.garden.selectors.selector("param");

/**
 * CSS pre type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.pre = mranderson047.garden.v1v3v3.garden.selectors.selector("pre");

/**
 * CSS progress type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.progress = mranderson047.garden.v1v3v3.garden.selectors.selector("progress");

/**
 * CSS q type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.q = mranderson047.garden.v1v3v3.garden.selectors.selector("q");

/**
 * CSS rp type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.rp = mranderson047.garden.v1v3v3.garden.selectors.selector("rp");

/**
 * CSS rt type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.rt = mranderson047.garden.v1v3v3.garden.selectors.selector("rt");

/**
 * CSS ruby type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.ruby = mranderson047.garden.v1v3v3.garden.selectors.selector("ruby");

/**
 * CSS s type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.s = mranderson047.garden.v1v3v3.garden.selectors.selector("s");

/**
 * CSS samp type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.samp = mranderson047.garden.v1v3v3.garden.selectors.selector("samp");

/**
 * CSS script type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.script = mranderson047.garden.v1v3v3.garden.selectors.selector("script");

/**
 * CSS section type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.section = mranderson047.garden.v1v3v3.garden.selectors.selector("section");

/**
 * CSS select type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.select = mranderson047.garden.v1v3v3.garden.selectors.selector("select");

/**
 * CSS small type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.small = mranderson047.garden.v1v3v3.garden.selectors.selector("small");

/**
 * CSS source type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.source = mranderson047.garden.v1v3v3.garden.selectors.selector("source");

/**
 * CSS span type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.span = mranderson047.garden.v1v3v3.garden.selectors.selector("span");

/**
 * CSS strong type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.strong = mranderson047.garden.v1v3v3.garden.selectors.selector("strong");

/**
 * CSS style type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.style = mranderson047.garden.v1v3v3.garden.selectors.selector("style");

/**
 * CSS sub type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.sub = mranderson047.garden.v1v3v3.garden.selectors.selector("sub");

/**
 * CSS summary type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.summary = mranderson047.garden.v1v3v3.garden.selectors.selector("summary");

/**
 * CSS sup type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.sup = mranderson047.garden.v1v3v3.garden.selectors.selector("sup");

/**
 * CSS svg type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.svg = mranderson047.garden.v1v3v3.garden.selectors.selector("svg");

/**
 * CSS table type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.table = mranderson047.garden.v1v3v3.garden.selectors.selector("table");

/**
 * CSS tbody type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.tbody = mranderson047.garden.v1v3v3.garden.selectors.selector("tbody");

/**
 * CSS td type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.td = mranderson047.garden.v1v3v3.garden.selectors.selector("td");

/**
 * CSS textarea type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.textarea = mranderson047.garden.v1v3v3.garden.selectors.selector("textarea");

/**
 * CSS tfoot type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.tfoot = mranderson047.garden.v1v3v3.garden.selectors.selector("tfoot");

/**
 * CSS th type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.th = mranderson047.garden.v1v3v3.garden.selectors.selector("th");

/**
 * CSS thead type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.thead = mranderson047.garden.v1v3v3.garden.selectors.selector("thead");

/**
 * CSS time type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.time = mranderson047.garden.v1v3v3.garden.selectors.selector("time");

/**
 * CSS title type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.title = mranderson047.garden.v1v3v3.garden.selectors.selector("title");

/**
 * CSS tr type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.tr = mranderson047.garden.v1v3v3.garden.selectors.selector("tr");

/**
 * CSS track type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.track = mranderson047.garden.v1v3v3.garden.selectors.selector("track");

/**
 * CSS u type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.u = mranderson047.garden.v1v3v3.garden.selectors.selector("u");

/**
 * CSS ul type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.ul = mranderson047.garden.v1v3v3.garden.selectors.selector("ul");

/**
 * CSS var type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.var$ = mranderson047.garden.v1v3v3.garden.selectors.selector("var");

/**
 * CSS video type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.video = mranderson047.garden.v1v3v3.garden.selectors.selector("video");

/**
 * CSS wbr type selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.wbr = mranderson047.garden.v1v3v3.garden.selectors.selector("wbr");
mranderson047.garden.v1v3v3.garden.selectors.pseudo_classes = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"checked","checked",1589575708,null),new cljs.core.Symbol(null,"default","default",-347290801,null),new cljs.core.Symbol(null,"disabled","disabled",110747309,null),new cljs.core.Symbol(null,"empty","empty",-1886564811,null),new cljs.core.Symbol(null,"enabled","enabled",-1458526013,null),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"first-child","first-child",-540335927,null),new cljs.core.Symbol(null,"first-of-type","first-of-type",900311874,null),new cljs.core.Symbol(null,"fullscreen","fullscreen",1636160473,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.Symbol(null,"hover","hover",1299389816,null),new cljs.core.Symbol(null,"indeterminate","indeterminate",1127490551,null),new cljs.core.Symbol(null,"in-range","in-range",-1297863944,null),new cljs.core.Symbol(null,"invalid","invalid",2053401043,null),new cljs.core.Symbol(null,"last-child","last-child",-1323765444,null),new cljs.core.Symbol(null,"last-of-type","last-of-type",986453331,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"only-child","only-child",220029032,null),new cljs.core.Symbol(null,"only-of-type","only-of-type",-1960460626,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null),new cljs.core.Symbol(null,"out-of-range","out-of-range",-1962117180,null),new cljs.core.Symbol(null,"read-only","read-only",1448824641,null),new cljs.core.Symbol(null,"read-write","read-write",1818554410,null),new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"scope","scope",1201173109,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"valid","valid",1796145767,null),new cljs.core.Symbol(null,"visited","visited",29677652,null)], true);
/**
 * CSS :active pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.active = mranderson047.garden.v1v3v3.garden.selectors.selector(":active");

/**
 * CSS :checked pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.checked = mranderson047.garden.v1v3v3.garden.selectors.selector(":checked");

/**
 * CSS :default pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.default$ = mranderson047.garden.v1v3v3.garden.selectors.selector(":default");

/**
 * CSS :disabled pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.disabled = mranderson047.garden.v1v3v3.garden.selectors.selector(":disabled");

/**
 * CSS :empty pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.empty = mranderson047.garden.v1v3v3.garden.selectors.selector(":empty");

/**
 * CSS :enabled pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.enabled = mranderson047.garden.v1v3v3.garden.selectors.selector(":enabled");

/**
 * CSS :first pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.first = mranderson047.garden.v1v3v3.garden.selectors.selector(":first");

/**
 * CSS :first-child pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.first_child = mranderson047.garden.v1v3v3.garden.selectors.selector(":first-child");

/**
 * CSS :first-of-type pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.first_of_type = mranderson047.garden.v1v3v3.garden.selectors.selector(":first-of-type");

/**
 * CSS :fullscreen pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.fullscreen = mranderson047.garden.v1v3v3.garden.selectors.selector(":fullscreen");

/**
 * CSS :focus pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.focus = mranderson047.garden.v1v3v3.garden.selectors.selector(":focus");

/**
 * CSS :hover pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.hover = mranderson047.garden.v1v3v3.garden.selectors.selector(":hover");

/**
 * CSS :indeterminate pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.indeterminate = mranderson047.garden.v1v3v3.garden.selectors.selector(":indeterminate");

/**
 * CSS :in-range pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.in_range = mranderson047.garden.v1v3v3.garden.selectors.selector(":in-range");

/**
 * CSS :invalid pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.invalid = mranderson047.garden.v1v3v3.garden.selectors.selector(":invalid");

/**
 * CSS :last-child pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.last_child = mranderson047.garden.v1v3v3.garden.selectors.selector(":last-child");

/**
 * CSS :last-of-type pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.last_of_type = mranderson047.garden.v1v3v3.garden.selectors.selector(":last-of-type");

/**
 * CSS :left pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.left = mranderson047.garden.v1v3v3.garden.selectors.selector(":left");

/**
 * CSS :links pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.links = mranderson047.garden.v1v3v3.garden.selectors.selector(":links");

/**
 * CSS :only-child pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.only_child = mranderson047.garden.v1v3v3.garden.selectors.selector(":only-child");

/**
 * CSS :only-of-type pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.only_of_type = mranderson047.garden.v1v3v3.garden.selectors.selector(":only-of-type");

/**
 * CSS :optional pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.optional = mranderson047.garden.v1v3v3.garden.selectors.selector(":optional");

/**
 * CSS :out-of-range pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.out_of_range = mranderson047.garden.v1v3v3.garden.selectors.selector(":out-of-range");

/**
 * CSS :read-only pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.read_only = mranderson047.garden.v1v3v3.garden.selectors.selector(":read-only");

/**
 * CSS :read-write pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.read_write = mranderson047.garden.v1v3v3.garden.selectors.selector(":read-write");

/**
 * CSS :required pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.required = mranderson047.garden.v1v3v3.garden.selectors.selector(":required");

/**
 * CSS :right pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.right = mranderson047.garden.v1v3v3.garden.selectors.selector(":right");

/**
 * CSS :root pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.root = mranderson047.garden.v1v3v3.garden.selectors.selector(":root");

/**
 * CSS :scope pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.scope = mranderson047.garden.v1v3v3.garden.selectors.selector(":scope");

/**
 * CSS :target pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.target = mranderson047.garden.v1v3v3.garden.selectors.selector(":target");

/**
 * CSS :valid pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.valid = mranderson047.garden.v1v3v3.garden.selectors.selector(":valid");

/**
 * CSS :visited pseudo-class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.visited = mranderson047.garden.v1v3v3.garden.selectors.selector(":visited");
mranderson047.garden.v1v3v3.garden.selectors.lang = cljs.core.with_meta((function() { 
var mranderson047$garden$v1v3v3$garden$selectors$lang__delegate = function (args__15868__auto__){
var v__15869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (language){
return cljs.core.name(language);
}),args__15868__auto__);
var v__15869__auto____$1 = (cljs.core.truth_(mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_(v__15869__auto__))?mranderson047.garden.v1v3v3.garden.selectors.css_selector(v__15869__auto__):v__15869__auto__);
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),"lang","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__15869__auto____$1),")"].join(''));
};
var mranderson047$garden$v1v3v3$garden$selectors$lang = function (var_args){
var args__15868__auto__ = null;
if (arguments.length > 0) {
var G__16883__i = 0, G__16883__a = new Array(arguments.length -  0);
while (G__16883__i < G__16883__a.length) {G__16883__a[G__16883__i] = arguments[G__16883__i + 0]; ++G__16883__i;}
  args__15868__auto__ = new cljs.core.IndexedSeq(G__16883__a,0,null);
} 
return mranderson047$garden$v1v3v3$garden$selectors$lang__delegate.call(this,args__15868__auto__);};
mranderson047$garden$v1v3v3$garden$selectors$lang.cljs$lang$maxFixedArity = 0;
mranderson047$garden$v1v3v3$garden$selectors$lang.cljs$lang$applyTo = (function (arglist__16884){
var args__15868__auto__ = cljs.core.seq(arglist__16884);
return mranderson047$garden$v1v3v3$garden$selectors$lang__delegate(args__15868__auto__);
});
mranderson047$garden$v1v3v3$garden$selectors$lang.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$selectors$lang__delegate;
return mranderson047$garden$v1v3v3$garden$selectors$lang;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
mranderson047.garden.v1v3v3.garden.selectors.not = cljs.core.with_meta((function() { 
var mranderson047$garden$v1v3v3$garden$selectors$not__delegate = function (args__15868__auto__){
var v__15869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (selector){
return mranderson047.garden.v1v3v3.garden.selectors.css_selector(selector);
}),args__15868__auto__);
var v__15869__auto____$1 = (cljs.core.truth_(mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_(v__15869__auto__))?mranderson047.garden.v1v3v3.garden.selectors.css_selector(v__15869__auto__):v__15869__auto__);
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),"not","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__15869__auto____$1),")"].join(''));
};
var mranderson047$garden$v1v3v3$garden$selectors$not = function (var_args){
var args__15868__auto__ = null;
if (arguments.length > 0) {
var G__16885__i = 0, G__16885__a = new Array(arguments.length -  0);
while (G__16885__i < G__16885__a.length) {G__16885__a[G__16885__i] = arguments[G__16885__i + 0]; ++G__16885__i;}
  args__15868__auto__ = new cljs.core.IndexedSeq(G__16885__a,0,null);
} 
return mranderson047$garden$v1v3v3$garden$selectors$not__delegate.call(this,args__15868__auto__);};
mranderson047$garden$v1v3v3$garden$selectors$not.cljs$lang$maxFixedArity = 0;
mranderson047$garden$v1v3v3$garden$selectors$not.cljs$lang$applyTo = (function (arglist__16886){
var args__15868__auto__ = cljs.core.seq(arglist__16886);
return mranderson047$garden$v1v3v3$garden$selectors$not__delegate(args__15868__auto__);
});
mranderson047$garden$v1v3v3$garden$selectors$not.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$selectors$not__delegate;
return mranderson047$garden$v1v3v3$garden$selectors$not;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
mranderson047.garden.v1v3v3.garden.selectors.nth_child_re = (new RegExp("\\s*(?:[-+]?\\d+n\\s*(?:[-+]\\s*\\d+)?|[-+]?\\d+|odd|even)\\s*","i"));
/**
 * nth-child helper.
 */
mranderson047.garden.v1v3v3.garden.selectors.nth_x = (function mranderson047$garden$v1v3v3$garden$selectors$nth_x(x){
if(((typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Agument must be a string, keyword, or symbol","\n","(or (string? x) (keyword? x) (symbol? x))"].join('')));
}

var s = cljs.core.name(x);
var temp__5455__auto__ = cljs.core.re_matches(mranderson047.garden.v1v3v3.garden.selectors.nth_child_re,s);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return m;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",["Invalid value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)))].join(''));
}
});
/**
 * CSS :nth-child pseudo class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.nth_child = cljs.core.with_meta((function() { 
var mranderson047$garden$v1v3v3$garden$selectors$nth_child__delegate = function (args__15868__auto__){
var v__15869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'number'){
return mranderson047.garden.v1v3v3.garden.selectors.nth_x([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"n"].join(''));
} else {
return mranderson047.garden.v1v3v3.garden.selectors.nth_x(x);
}
}),args__15868__auto__);
var v__15869__auto____$1 = (cljs.core.truth_(mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_(v__15869__auto__))?mranderson047.garden.v1v3v3.garden.selectors.css_selector(v__15869__auto__):v__15869__auto__);
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),"nth-child","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__15869__auto____$1),")"].join(''));
};
var mranderson047$garden$v1v3v3$garden$selectors$nth_child = function (var_args){
var args__15868__auto__ = null;
if (arguments.length > 0) {
var G__16889__i = 0, G__16889__a = new Array(arguments.length -  0);
while (G__16889__i < G__16889__a.length) {G__16889__a[G__16889__i] = arguments[G__16889__i + 0]; ++G__16889__i;}
  args__15868__auto__ = new cljs.core.IndexedSeq(G__16889__a,0,null);
} 
return mranderson047$garden$v1v3v3$garden$selectors$nth_child__delegate.call(this,args__15868__auto__);};
mranderson047$garden$v1v3v3$garden$selectors$nth_child.cljs$lang$maxFixedArity = 0;
mranderson047$garden$v1v3v3$garden$selectors$nth_child.cljs$lang$applyTo = (function (arglist__16890){
var args__15868__auto__ = cljs.core.seq(arglist__16890);
return mranderson047$garden$v1v3v3$garden$selectors$nth_child__delegate(args__15868__auto__);
});
mranderson047$garden$v1v3v3$garden$selectors$nth_child.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$selectors$nth_child__delegate;
return mranderson047$garden$v1v3v3$garden$selectors$nth_child;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-last-child pseudo class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.nth_last_child = cljs.core.with_meta((function() { 
var mranderson047$garden$v1v3v3$garden$selectors$nth_last_child__delegate = function (args__15868__auto__){
var v__15869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return mranderson047.garden.v1v3v3.garden.selectors.nth_x(x);
}),args__15868__auto__);
var v__15869__auto____$1 = (cljs.core.truth_(mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_(v__15869__auto__))?mranderson047.garden.v1v3v3.garden.selectors.css_selector(v__15869__auto__):v__15869__auto__);
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),"nth-last-child","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__15869__auto____$1),")"].join(''));
};
var mranderson047$garden$v1v3v3$garden$selectors$nth_last_child = function (var_args){
var args__15868__auto__ = null;
if (arguments.length > 0) {
var G__16891__i = 0, G__16891__a = new Array(arguments.length -  0);
while (G__16891__i < G__16891__a.length) {G__16891__a[G__16891__i] = arguments[G__16891__i + 0]; ++G__16891__i;}
  args__15868__auto__ = new cljs.core.IndexedSeq(G__16891__a,0,null);
} 
return mranderson047$garden$v1v3v3$garden$selectors$nth_last_child__delegate.call(this,args__15868__auto__);};
mranderson047$garden$v1v3v3$garden$selectors$nth_last_child.cljs$lang$maxFixedArity = 0;
mranderson047$garden$v1v3v3$garden$selectors$nth_last_child.cljs$lang$applyTo = (function (arglist__16892){
var args__15868__auto__ = cljs.core.seq(arglist__16892);
return mranderson047$garden$v1v3v3$garden$selectors$nth_last_child__delegate(args__15868__auto__);
});
mranderson047$garden$v1v3v3$garden$selectors$nth_last_child.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$selectors$nth_last_child__delegate;
return mranderson047$garden$v1v3v3$garden$selectors$nth_last_child;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-of-type pseudo class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.nth_of_type = cljs.core.with_meta((function() { 
var mranderson047$garden$v1v3v3$garden$selectors$nth_of_type__delegate = function (args__15868__auto__){
var v__15869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return mranderson047.garden.v1v3v3.garden.selectors.nth_x(x);
}),args__15868__auto__);
var v__15869__auto____$1 = (cljs.core.truth_(mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_(v__15869__auto__))?mranderson047.garden.v1v3v3.garden.selectors.css_selector(v__15869__auto__):v__15869__auto__);
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),"nth-of-type","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__15869__auto____$1),")"].join(''));
};
var mranderson047$garden$v1v3v3$garden$selectors$nth_of_type = function (var_args){
var args__15868__auto__ = null;
if (arguments.length > 0) {
var G__16893__i = 0, G__16893__a = new Array(arguments.length -  0);
while (G__16893__i < G__16893__a.length) {G__16893__a[G__16893__i] = arguments[G__16893__i + 0]; ++G__16893__i;}
  args__15868__auto__ = new cljs.core.IndexedSeq(G__16893__a,0,null);
} 
return mranderson047$garden$v1v3v3$garden$selectors$nth_of_type__delegate.call(this,args__15868__auto__);};
mranderson047$garden$v1v3v3$garden$selectors$nth_of_type.cljs$lang$maxFixedArity = 0;
mranderson047$garden$v1v3v3$garden$selectors$nth_of_type.cljs$lang$applyTo = (function (arglist__16894){
var args__15868__auto__ = cljs.core.seq(arglist__16894);
return mranderson047$garden$v1v3v3$garden$selectors$nth_of_type__delegate(args__15868__auto__);
});
mranderson047$garden$v1v3v3$garden$selectors$nth_of_type.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$selectors$nth_of_type__delegate;
return mranderson047$garden$v1v3v3$garden$selectors$nth_of_type;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-last-of-type pseudo class selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.nth_last_of_type = cljs.core.with_meta((function() { 
var mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type__delegate = function (args__15868__auto__){
var v__15869__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (x){
return mranderson047.garden.v1v3v3.garden.selectors.nth_x(x);
}),args__15868__auto__);
var v__15869__auto____$1 = (cljs.core.truth_(mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_(v__15869__auto__))?mranderson047.garden.v1v3v3.garden.selectors.css_selector(v__15869__auto__):v__15869__auto__);
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),"nth-last-of-type","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__15869__auto____$1),")"].join(''));
};
var mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type = function (var_args){
var args__15868__auto__ = null;
if (arguments.length > 0) {
var G__16907__i = 0, G__16907__a = new Array(arguments.length -  0);
while (G__16907__i < G__16907__a.length) {G__16907__a[G__16907__i] = arguments[G__16907__i + 0]; ++G__16907__i;}
  args__15868__auto__ = new cljs.core.IndexedSeq(G__16907__a,0,null);
} 
return mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type__delegate.call(this,args__15868__auto__);};
mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type.cljs$lang$maxFixedArity = 0;
mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type.cljs$lang$applyTo = (function (arglist__16908){
var args__15868__auto__ = cljs.core.seq(arglist__16908);
return mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type__delegate(args__15868__auto__);
});
mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type__delegate;
return mranderson047$garden$v1v3v3$garden$selectors$nth_last_of_type;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS ::after pseudo element selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.after = mranderson047.garden.v1v3v3.garden.selectors.selector("::after");
/**
 * CSS ::before pseudo element selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.before = mranderson047.garden.v1v3v3.garden.selectors.selector("::before");
/**
 * CSS ::first-letter pseudo element selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.first_letter = mranderson047.garden.v1v3v3.garden.selectors.selector("::first-letter");
/**
 * CSS ::first-line pseudo element selector.
 */
mranderson047.garden.v1v3v3.garden.selectors.first_line = mranderson047.garden.v1v3v3.garden.selectors.selector("::first-line");
mranderson047.garden.v1v3v3.garden.selectors.attr = (function mranderson047$garden$v1v3v3$garden$selectors$attr(var_args){
var G__16536 = arguments.length;
switch (G__16536) {
case 1:
return mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$1 = (function (attr_name){
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr_name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''));
});

mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3 = (function (attr_name,op,attr_value){
var v = cljs.core.name(attr_value);
var v__$1 = (cljs.core.truth_(cljs.core.re_matches(/\"(\\|[^\"])*\"|'(\\|[^\'])*'/,v))?v:cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr_name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(op)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''));
});

mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$lang$maxFixedArity = 3;

mranderson047.garden.v1v3v3.garden.selectors.attr_EQ_ = (function mranderson047$garden$v1v3v3$garden$selectors$attr_EQ_(attr_name,attr_value){
return mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"=",attr_value);
});
mranderson047.garden.v1v3v3.garden.selectors.attr_contains = (function mranderson047$garden$v1v3v3$garden$selectors$attr_contains(attr_name,attr_value){
return mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"~=",attr_value);
});
mranderson047.garden.v1v3v3.garden.selectors.attr_starts_with = (function mranderson047$garden$v1v3v3$garden$selectors$attr_starts_with(attr_name,attr_value){
return mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"^=",attr_value);
});
mranderson047.garden.v1v3v3.garden.selectors.attr_starts_with_STAR_ = (function mranderson047$garden$v1v3v3$garden$selectors$attr_starts_with_STAR_(attr_name,attr_value){
return mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"|=",attr_value);
});
mranderson047.garden.v1v3v3.garden.selectors.attr_ends_with = (function mranderson047$garden$v1v3v3$garden$selectors$attr_ends_with(attr_name,attr_value){
return mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"$=",attr_value);
});
mranderson047.garden.v1v3v3.garden.selectors.attr_matches = (function mranderson047$garden$v1v3v3$garden$selectors$attr_matches(attr_name,attr_value){
return mranderson047.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3(attr_name,"*=",attr_value);
});
/**
 * Descendant combinator.
 */
mranderson047.garden.v1v3v3.garden.selectors.descendant = (function mranderson047$garden$v1v3v3$garden$selectors$descendant(var_args){
var G__16546 = arguments.length;
switch (G__16546) {
case 2:
return mranderson047.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___16926 = arguments.length;
var i__4532__auto___16927 = (0);
while(true){
if((i__4532__auto___16927 < len__4531__auto___16926)){
args_arr__4546__auto__.push((arguments[i__4532__auto___16927]));

var G__16928 = (i__4532__auto___16927 + (1));
i__4532__auto___16927 = G__16928;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mranderson047.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mranderson047.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b))].join(''));
});

mranderson047.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return mranderson047.garden.v1v3v3.garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.selectors.css_selector,cljs.core.cons(mranderson047.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2(a,b),more))));
});

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.selectors.descendant.cljs$lang$applyTo = (function (seq16543){
var G__16544 = cljs.core.first(seq16543);
var seq16543__$1 = cljs.core.next(seq16543);
var G__16545 = cljs.core.first(seq16543__$1);
var seq16543__$2 = cljs.core.next(seq16543__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16544,G__16545,seq16543__$2);
});

mranderson047.garden.v1v3v3.garden.selectors.descendant.cljs$lang$maxFixedArity = (2);

/**
 * Adjacent sibling combinator.
 */
mranderson047.garden.v1v3v3.garden.selectors._PLUS_ = (function mranderson047$garden$v1v3v3$garden$selectors$_PLUS_(a,b){
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a))," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b))].join(''));
});
/**
 * General sibling combinator.
 */
mranderson047.garden.v1v3v3.garden.selectors._ = (function mranderson047$garden$v1v3v3$garden$selectors$_(a,b){
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a))," ~ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b))].join(''));
});
/**
 * Child combinator.
 */
mranderson047.garden.v1v3v3.garden.selectors._GT_ = (function mranderson047$garden$v1v3v3$garden$selectors$_GT_(var_args){
var G__16568 = arguments.length;
switch (G__16568) {
case 1:
return mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___16930 = arguments.length;
var i__4532__auto___16931 = (0);
while(true){
if((i__4532__auto___16931 < len__4531__auto___16930)){
args_arr__4546__auto__.push((arguments[i__4532__auto___16931]));

var G__16933 = (i__4532__auto___16931 + (1));
i__4532__auto___16931 = G__16933;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return mranderson047.garden.v1v3v3.garden.selectors.selector(a);
});

mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return mranderson047.garden.v1v3v3.garden.selectors.selector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(a))," > ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.selectors.css_selector(b))].join(''));
});

mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return mranderson047.garden.v1v3v3.garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.selectors.css_selector,cljs.core.cons(mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(a,b),more))));
});

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$lang$applyTo = (function (seq16564){
var G__16565 = cljs.core.first(seq16564);
var seq16564__$1 = cljs.core.next(seq16564);
var G__16566 = cljs.core.first(seq16564__$1);
var seq16564__$2 = cljs.core.next(seq16564__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16565,G__16566,seq16564__$2);
});

mranderson047.garden.v1v3v3.garden.selectors._GT_.cljs$lang$maxFixedArity = (2);

/**
 * Parent selector.
 */
mranderson047.garden.v1v3v3.garden.selectors._AMPERSAND_ = mranderson047.garden.v1v3v3.garden.selectors.selector("&");
mranderson047.garden.v1v3v3.garden.selectors.lex_specificity = (function mranderson047$garden$v1v3v3$garden$selectors$lex_specificity(s){
var id_selector_re = /^\#[a-zA-Z][\w-]*/;
var class_selector_re = /^\.[a-zA-Z][\w-]*/;
var attribute_selector_re = /^\[[^\]]*\]/;
var type_selector_re = /^[a-zA-Z][\w-]/;
var pseudo_class_re = /^:[a-zA-Z][\w-]*(?:\([^\)]+\))?/;
var pseudo_element_re = /^::[a-zA-Z][\w-]*/;
return cljs.core.some(((function (id_selector_re,class_selector_re,attribute_selector_re,type_selector_re,pseudo_class_re,pseudo_element_re){
return (function (p__16585){
var vec__16586 = p__16585;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16586,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16586,(1),null);
var temp__5455__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,k], null);
} else {
return null;
}
});})(id_selector_re,class_selector_re,attribute_selector_re,type_selector_re,pseudo_class_re,pseudo_element_re))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_selector_re,new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute_selector_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_class_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_selector_re,new cljs.core.Keyword(null,"c","c",-1763192079)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_element_re,new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null));
});
mranderson047.garden.v1v3v3.garden.selectors.specificity_STAR_ = (function mranderson047$garden$v1v3v3$garden$selectors$specificity_STAR_(selector){
var s = mranderson047.garden.v1v3v3.garden.selectors.css_selector(selector);
var score = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"c","c",-1763192079),(0)], null);
var s__$1 = s;
var score__$1 = score;
while(true){
if(cljs.core.empty_QMARK_(s__$1)){
return score__$1;
} else {
var temp__5455__auto__ = mranderson047.garden.v1v3v3.garden.selectors.lex_specificity(s__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__16595 = temp__5455__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16595,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16595,(1),null);
var temp__5455__auto____$1 = cljs.core.re_find(/^:not\(([^\)]*)\)/,m);
if(cljs.core.truth_(temp__5455__auto____$1)){
var vec__16598 = temp__5455__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16598,(0),null);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16598,(1),null);
var G__16949 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.count(m));
var G__16950 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([score__$1,(mranderson047.garden.v1v3v3.garden.selectors.specificity_STAR_.cljs$core$IFn$_invoke$arity$1 ? mranderson047.garden.v1v3v3.garden.selectors.specificity_STAR_.cljs$core$IFn$_invoke$arity$1(inner) : mranderson047.garden.v1v3v3.garden.selectors.specificity_STAR_.call(null,inner))], 0));
s__$1 = G__16949;
score__$1 = G__16950;
continue;
} else {
var G__16953 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.count(m));
var G__16954 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(score__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.inc);
s__$1 = G__16953;
score__$1 = G__16954;
continue;
}
} else {
var G__16956 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1));
var G__16957 = score__$1;
s__$1 = G__16956;
score__$1 = G__16957;
continue;
}
}
break;
}
});
/**
 * Calculate a CSS3 selector's specificity.
 *   
 *   Example:
 * 
 *  (specificity "#s12:not(FOO)")
 *  ;; => 101
 *  (specificity (a hover))
 *  ;; => 10
 *   
 */
mranderson047.garden.v1v3v3.garden.selectors.specificity = (function mranderson047$garden$v1v3v3$garden$selectors$specificity(selector){
if(((!((selector == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === selector.mranderson047$garden$v1v3v3$garden$selectors$ICSSSelector$))))?true:(((!selector.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(mranderson047.garden.v1v3v3.garden.selectors.ICSSSelector,selector):false)):cljs.core.native_satisfies_QMARK_(mranderson047.garden.v1v3v3.garden.selectors.ICSSSelector,selector))){
} else {
throw (new Error("Assert failed: (satisfies? ICSSSelector selector)"));
}

var map__16609 = mranderson047.garden.v1v3v3.garden.selectors.specificity_STAR_(selector);
var map__16609__$1 = ((((!((map__16609 == null)))?(((((map__16609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16609):map__16609);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16609__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16609__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16609__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var sv = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),/^0*/,"");
if(cljs.core.empty_QMARK_(sv)){
return (0);
} else {
return parseInt(sv);
}
});

//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.selectors.js.map
