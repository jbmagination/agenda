goog.provide('agenda.coeffects');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__28934_28937 = new cljs.core.Keyword("agenda.coeffects","dom-value-by-id","agenda.coeffects/dom-value-by-id",-1856512907);
var G__28935_28938 = ((function (G__28934_28937){
return (function (coeffects,element_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,element_id,document.getElementById(cljs.core.name(element_id)).value);
});})(G__28934_28937))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__28934_28937,G__28935_28938) : re_frame.core.reg_cofx.call(null,G__28934_28937,G__28935_28938));

//# sourceMappingURL=agenda.coeffects.js.map
