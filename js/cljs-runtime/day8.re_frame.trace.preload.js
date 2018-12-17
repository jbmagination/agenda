goog.provide('day8.re_frame.trace.preload');
goog.require('cljs.core');
goog.require('day8.re_frame.trace');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
(mranderson047.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? mranderson047.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : mranderson047.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_.call(null));
day8.re_frame.trace.init_db_BANG_();
if((typeof day8 !== 'undefined') && (typeof day8.re_frame !== 'undefined') && (typeof day8.re_frame.trace !== 'undefined') && (typeof day8.re_frame.trace.preload !== 'undefined') && (typeof day8.re_frame.trace.preload._ !== 'undefined')){
} else {
day8.re_frame.trace.preload._ = day8.re_frame.trace.init_tracing_BANG_();
}
day8.re_frame.trace.inject_devtools_BANG_();

//# sourceMappingURL=day8.re_frame.trace.preload.js.map
