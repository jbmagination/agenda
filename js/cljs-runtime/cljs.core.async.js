goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23750 = arguments.length;
switch (G__23750) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23766 = (function (f,blockable,meta23767){
this.f = f;
this.blockable = blockable;
this.meta23767 = meta23767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23768,meta23767__$1){
var self__ = this;
var _23768__$1 = this;
return (new cljs.core.async.t_cljs$core$async23766(self__.f,self__.blockable,meta23767__$1));
});

cljs.core.async.t_cljs$core$async23766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23768){
var self__ = this;
var _23768__$1 = this;
return self__.meta23767;
});

cljs.core.async.t_cljs$core$async23766.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23766.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23767","meta23767",-1863459955,null)], null);
});

cljs.core.async.t_cljs$core$async23766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23766";

cljs.core.async.t_cljs$core$async23766.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async23766");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23766.
 */
cljs.core.async.__GT_t_cljs$core$async23766 = (function cljs$core$async$__GT_t_cljs$core$async23766(f__$1,blockable__$1,meta23767){
return (new cljs.core.async.t_cljs$core$async23766(f__$1,blockable__$1,meta23767));
});

}

return (new cljs.core.async.t_cljs$core$async23766(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23833 = arguments.length;
switch (G__23833) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23847 = arguments.length;
switch (G__23847) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23869 = arguments.length;
switch (G__23869) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25800 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25800) : fn1.call(null,val_25800));
} else {
cljs.core.async.impl.dispatch.run(((function (val_25800,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25800) : fn1.call(null,val_25800));
});})(val_25800,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23891 = arguments.length;
switch (G__23891) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___25811 = n;
var x_25812 = (0);
while(true){
if((x_25812 < n__4408__auto___25811)){
(a[x_25812] = (0));

var G__25813 = (x_25812 + (1));
x_25812 = G__25813;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__25815 = (i + (1));
i = G__25815;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23913 = (function (flag,meta23914){
this.flag = flag;
this.meta23914 = meta23914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23915,meta23914__$1){
var self__ = this;
var _23915__$1 = this;
return (new cljs.core.async.t_cljs$core$async23913(self__.flag,meta23914__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23915){
var self__ = this;
var _23915__$1 = this;
return self__.meta23914;
});})(flag))
;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23913.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23914","meta23914",963823751,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23913";

cljs.core.async.t_cljs$core$async23913.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async23913");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23913.
 */
cljs.core.async.__GT_t_cljs$core$async23913 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23913(flag__$1,meta23914){
return (new cljs.core.async.t_cljs$core$async23913(flag__$1,meta23914));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23913(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23935 = (function (flag,cb,meta23936){
this.flag = flag;
this.cb = cb;
this.meta23936 = meta23936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23937,meta23936__$1){
var self__ = this;
var _23937__$1 = this;
return (new cljs.core.async.t_cljs$core$async23935(self__.flag,self__.cb,meta23936__$1));
});

cljs.core.async.t_cljs$core$async23935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23937){
var self__ = this;
var _23937__$1 = this;
return self__.meta23936;
});

cljs.core.async.t_cljs$core$async23935.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async23935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23936","meta23936",-1183880523,null)], null);
});

cljs.core.async.t_cljs$core$async23935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23935";

cljs.core.async.t_cljs$core$async23935.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async23935");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23935.
 */
cljs.core.async.__GT_t_cljs$core$async23935 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23935(flag__$1,cb__$1,meta23936){
return (new cljs.core.async.t_cljs$core$async23935(flag__$1,cb__$1,meta23936));
});

}

return (new cljs.core.async.t_cljs$core$async23935(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23957_SHARP_){
var G__23959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23957_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23959) : fret.call(null,G__23959));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23958_SHARP_){
var G__23960 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23958_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23960) : fret.call(null,G__23960));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25834 = (i + (1));
i = G__25834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25837 = arguments.length;
var i__4532__auto___25838 = (0);
while(true){
if((i__4532__auto___25838 < len__4531__auto___25837)){
args__4534__auto__.push((arguments[i__4532__auto___25838]));

var G__25839 = (i__4532__auto___25838 + (1));
i__4532__auto___25838 = G__25839;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23964){
var map__23965 = p__23964;
var map__23965__$1 = ((((!((map__23965 == null)))?(((((map__23965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23965):map__23965);
var opts = map__23965__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23961){
var G__23962 = cljs.core.first(seq23961);
var seq23961__$1 = cljs.core.next(seq23961);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23962,seq23961__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23969 = arguments.length;
switch (G__23969) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23565__auto___25854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___25854){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___25854){
return (function (state_23995){
var state_val_23997 = (state_23995[(1)]);
if((state_val_23997 === (7))){
var inst_23991 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_24006_25855 = state_23995__$1;
(statearr_24006_25855[(2)] = inst_23991);

(statearr_24006_25855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (1))){
var state_23995__$1 = state_23995;
var statearr_24007_25857 = state_23995__$1;
(statearr_24007_25857[(2)] = null);

(statearr_24007_25857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (4))){
var inst_23973 = (state_23995[(7)]);
var inst_23973__$1 = (state_23995[(2)]);
var inst_23975 = (inst_23973__$1 == null);
var state_23995__$1 = (function (){var statearr_24008 = state_23995;
(statearr_24008[(7)] = inst_23973__$1);

return statearr_24008;
})();
if(cljs.core.truth_(inst_23975)){
var statearr_24009_25859 = state_23995__$1;
(statearr_24009_25859[(1)] = (5));

} else {
var statearr_24010_25860 = state_23995__$1;
(statearr_24010_25860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (13))){
var state_23995__$1 = state_23995;
var statearr_24011_25861 = state_23995__$1;
(statearr_24011_25861[(2)] = null);

(statearr_24011_25861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (6))){
var inst_23973 = (state_23995[(7)]);
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23995__$1,(11),to,inst_23973);
} else {
if((state_val_23997 === (3))){
var inst_23993 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23995__$1,inst_23993);
} else {
if((state_val_23997 === (12))){
var state_23995__$1 = state_23995;
var statearr_24020_25866 = state_23995__$1;
(statearr_24020_25866[(2)] = null);

(statearr_24020_25866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (2))){
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23995__$1,(4),from);
} else {
if((state_val_23997 === (11))){
var inst_23984 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
if(cljs.core.truth_(inst_23984)){
var statearr_24027_25870 = state_23995__$1;
(statearr_24027_25870[(1)] = (12));

} else {
var statearr_24028_25871 = state_23995__$1;
(statearr_24028_25871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (9))){
var state_23995__$1 = state_23995;
var statearr_24035_25872 = state_23995__$1;
(statearr_24035_25872[(2)] = null);

(statearr_24035_25872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (5))){
var state_23995__$1 = state_23995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24036_25874 = state_23995__$1;
(statearr_24036_25874[(1)] = (8));

} else {
var statearr_24037_25875 = state_23995__$1;
(statearr_24037_25875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (14))){
var inst_23989 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_24044_25879 = state_23995__$1;
(statearr_24044_25879[(2)] = inst_23989);

(statearr_24044_25879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (10))){
var inst_23981 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_24045_25880 = state_23995__$1;
(statearr_24045_25880[(2)] = inst_23981);

(statearr_24045_25880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23997 === (8))){
var inst_23978 = cljs.core.async.close_BANG_(to);
var state_23995__$1 = state_23995;
var statearr_24050_25882 = state_23995__$1;
(statearr_24050_25882[(2)] = inst_23978);

(statearr_24050_25882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___25854))
;
return ((function (switch__23463__auto__,c__23565__auto___25854){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_24055 = [null,null,null,null,null,null,null,null];
(statearr_24055[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_24055[(1)] = (1));

return statearr_24055;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_23995){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_23995);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24056){if((e24056 instanceof Object)){
var ex__23467__auto__ = e24056;
var statearr_24057_25887 = state_23995;
(statearr_24057_25887[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25888 = state_23995;
state_23995 = G__25888;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_23995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_23995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___25854))
})();
var state__23567__auto__ = (function (){var statearr_24062 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24062[(6)] = c__23565__auto___25854);

return statearr_24062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___25854))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__24075){
var vec__24080 = p__24075;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24080,(1),null);
var job = vec__24080;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23565__auto___25897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___25897,res,vec__24080,v,p,job,jobs,results){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___25897,res,vec__24080,v,p,job,jobs,results){
return (function (state_24087){
var state_val_24088 = (state_24087[(1)]);
if((state_val_24088 === (1))){
var state_24087__$1 = state_24087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24087__$1,(2),res,v);
} else {
if((state_val_24088 === (2))){
var inst_24084 = (state_24087[(2)]);
var inst_24085 = cljs.core.async.close_BANG_(res);
var state_24087__$1 = (function (){var statearr_24097 = state_24087;
(statearr_24097[(7)] = inst_24084);

return statearr_24097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24087__$1,inst_24085);
} else {
return null;
}
}
});})(c__23565__auto___25897,res,vec__24080,v,p,job,jobs,results))
;
return ((function (switch__23463__auto__,c__23565__auto___25897,res,vec__24080,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0 = (function (){
var statearr_24100 = [null,null,null,null,null,null,null,null];
(statearr_24100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__);

(statearr_24100[(1)] = (1));

return statearr_24100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1 = (function (state_24087){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24087);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24101){if((e24101 instanceof Object)){
var ex__23467__auto__ = e24101;
var statearr_24102_25903 = state_24087;
(statearr_24102_25903[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25905 = state_24087;
state_24087 = G__25905;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = function(state_24087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1.call(this,state_24087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___25897,res,vec__24080,v,p,job,jobs,results))
})();
var state__23567__auto__ = (function (){var statearr_24107 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24107[(6)] = c__23565__auto___25897);

return statearr_24107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___25897,res,vec__24080,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24112){
var vec__24113 = p__24112;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24113,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24113,(1),null);
var job = vec__24113;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___25907 = n;
var __25909 = (0);
while(true){
if((__25909 < n__4408__auto___25907)){
var G__24120_25910 = type;
var G__24120_25911__$1 = (((G__24120_25910 instanceof cljs.core.Keyword))?G__24120_25910.fqn:null);
switch (G__24120_25911__$1) {
case "compute":
var c__23565__auto___25913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25909,c__23565__auto___25913,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (__25909,c__23565__auto___25913,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async){
return (function (state_24137){
var state_val_24138 = (state_24137[(1)]);
if((state_val_24138 === (1))){
var state_24137__$1 = state_24137;
var statearr_24143_25915 = state_24137__$1;
(statearr_24143_25915[(2)] = null);

(statearr_24143_25915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (2))){
var state_24137__$1 = state_24137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24137__$1,(4),jobs);
} else {
if((state_val_24138 === (3))){
var inst_24135 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24137__$1,inst_24135);
} else {
if((state_val_24138 === (4))){
var inst_24127 = (state_24137[(2)]);
var inst_24128 = process(inst_24127);
var state_24137__$1 = state_24137;
if(cljs.core.truth_(inst_24128)){
var statearr_24148_25917 = state_24137__$1;
(statearr_24148_25917[(1)] = (5));

} else {
var statearr_24149_25920 = state_24137__$1;
(statearr_24149_25920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (5))){
var state_24137__$1 = state_24137;
var statearr_24154_25921 = state_24137__$1;
(statearr_24154_25921[(2)] = null);

(statearr_24154_25921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (6))){
var state_24137__$1 = state_24137;
var statearr_24155_25922 = state_24137__$1;
(statearr_24155_25922[(2)] = null);

(statearr_24155_25922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (7))){
var inst_24133 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
var statearr_24156_25925 = state_24137__$1;
(statearr_24156_25925[(2)] = inst_24133);

(statearr_24156_25925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25909,c__23565__auto___25913,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async))
;
return ((function (__25909,switch__23463__auto__,c__23565__auto___25913,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0 = (function (){
var statearr_24161 = [null,null,null,null,null,null,null];
(statearr_24161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__);

(statearr_24161[(1)] = (1));

return statearr_24161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1 = (function (state_24137){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24137);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24166){if((e24166 instanceof Object)){
var ex__23467__auto__ = e24166;
var statearr_24167_25928 = state_24137;
(statearr_24167_25928[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25931 = state_24137;
state_24137 = G__25931;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = function(state_24137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1.call(this,state_24137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__;
})()
;})(__25909,switch__23463__auto__,c__23565__auto___25913,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async))
})();
var state__23567__auto__ = (function (){var statearr_24174 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24174[(6)] = c__23565__auto___25913);

return statearr_24174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(__25909,c__23565__auto___25913,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async))
);


break;
case "async":
var c__23565__auto___25934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25909,c__23565__auto___25934,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (__25909,c__23565__auto___25934,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async){
return (function (state_24191){
var state_val_24192 = (state_24191[(1)]);
if((state_val_24192 === (1))){
var state_24191__$1 = state_24191;
var statearr_24198_25944 = state_24191__$1;
(statearr_24198_25944[(2)] = null);

(statearr_24198_25944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (2))){
var state_24191__$1 = state_24191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24191__$1,(4),jobs);
} else {
if((state_val_24192 === (3))){
var inst_24189 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24191__$1,inst_24189);
} else {
if((state_val_24192 === (4))){
var inst_24181 = (state_24191[(2)]);
var inst_24182 = async(inst_24181);
var state_24191__$1 = state_24191;
if(cljs.core.truth_(inst_24182)){
var statearr_24205_25947 = state_24191__$1;
(statearr_24205_25947[(1)] = (5));

} else {
var statearr_24210_25948 = state_24191__$1;
(statearr_24210_25948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (5))){
var state_24191__$1 = state_24191;
var statearr_24211_25949 = state_24191__$1;
(statearr_24211_25949[(2)] = null);

(statearr_24211_25949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (6))){
var state_24191__$1 = state_24191;
var statearr_24217_25950 = state_24191__$1;
(statearr_24217_25950[(2)] = null);

(statearr_24217_25950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24192 === (7))){
var inst_24187 = (state_24191[(2)]);
var state_24191__$1 = state_24191;
var statearr_24218_25951 = state_24191__$1;
(statearr_24218_25951[(2)] = inst_24187);

(statearr_24218_25951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25909,c__23565__auto___25934,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async))
;
return ((function (__25909,switch__23463__auto__,c__23565__auto___25934,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0 = (function (){
var statearr_24223 = [null,null,null,null,null,null,null];
(statearr_24223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__);

(statearr_24223[(1)] = (1));

return statearr_24223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1 = (function (state_24191){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24191);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24225){if((e24225 instanceof Object)){
var ex__23467__auto__ = e24225;
var statearr_24226_25952 = state_24191;
(statearr_24226_25952[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25954 = state_24191;
state_24191 = G__25954;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = function(state_24191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1.call(this,state_24191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__;
})()
;})(__25909,switch__23463__auto__,c__23565__auto___25934,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async))
})();
var state__23567__auto__ = (function (){var statearr_24231 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24231[(6)] = c__23565__auto___25934);

return statearr_24231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(__25909,c__23565__auto___25934,G__24120_25910,G__24120_25911__$1,n__4408__auto___25907,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24120_25911__$1)].join('')));

}

var G__25955 = (__25909 + (1));
__25909 = G__25955;
continue;
} else {
}
break;
}

var c__23565__auto___25956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___25956,jobs,results,process,async){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___25956,jobs,results,process,async){
return (function (state_24268){
var state_val_24269 = (state_24268[(1)]);
if((state_val_24269 === (1))){
var state_24268__$1 = state_24268;
var statearr_24281_25957 = state_24268__$1;
(statearr_24281_25957[(2)] = null);

(statearr_24281_25957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (2))){
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24268__$1,(4),from);
} else {
if((state_val_24269 === (3))){
var inst_24262 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24268__$1,inst_24262);
} else {
if((state_val_24269 === (4))){
var inst_24239 = (state_24268[(7)]);
var inst_24239__$1 = (state_24268[(2)]);
var inst_24240 = (inst_24239__$1 == null);
var state_24268__$1 = (function (){var statearr_24288 = state_24268;
(statearr_24288[(7)] = inst_24239__$1);

return statearr_24288;
})();
if(cljs.core.truth_(inst_24240)){
var statearr_24292_25958 = state_24268__$1;
(statearr_24292_25958[(1)] = (5));

} else {
var statearr_24293_25959 = state_24268__$1;
(statearr_24293_25959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (5))){
var inst_24242 = cljs.core.async.close_BANG_(jobs);
var state_24268__$1 = state_24268;
var statearr_24300_25960 = state_24268__$1;
(statearr_24300_25960[(2)] = inst_24242);

(statearr_24300_25960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (6))){
var inst_24239 = (state_24268[(7)]);
var inst_24244 = (state_24268[(8)]);
var inst_24244__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24252 = [inst_24239,inst_24244__$1];
var inst_24253 = (new cljs.core.PersistentVector(null,2,(5),inst_24247,inst_24252,null));
var state_24268__$1 = (function (){var statearr_24307 = state_24268;
(statearr_24307[(8)] = inst_24244__$1);

return statearr_24307;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24268__$1,(8),jobs,inst_24253);
} else {
if((state_val_24269 === (7))){
var inst_24260 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24312_25968 = state_24268__$1;
(statearr_24312_25968[(2)] = inst_24260);

(statearr_24312_25968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (8))){
var inst_24244 = (state_24268[(8)]);
var inst_24255 = (state_24268[(2)]);
var state_24268__$1 = (function (){var statearr_24315 = state_24268;
(statearr_24315[(9)] = inst_24255);

return statearr_24315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24268__$1,(9),results,inst_24244);
} else {
if((state_val_24269 === (9))){
var inst_24257 = (state_24268[(2)]);
var state_24268__$1 = (function (){var statearr_24318 = state_24268;
(statearr_24318[(10)] = inst_24257);

return statearr_24318;
})();
var statearr_24319_25969 = state_24268__$1;
(statearr_24319_25969[(2)] = null);

(statearr_24319_25969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___25956,jobs,results,process,async))
;
return ((function (switch__23463__auto__,c__23565__auto___25956,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0 = (function (){
var statearr_24325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__);

(statearr_24325[(1)] = (1));

return statearr_24325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1 = (function (state_24268){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24268);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24328){if((e24328 instanceof Object)){
var ex__23467__auto__ = e24328;
var statearr_24334_25977 = state_24268;
(statearr_24334_25977[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25978 = state_24268;
state_24268 = G__25978;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = function(state_24268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1.call(this,state_24268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___25956,jobs,results,process,async))
})();
var state__23567__auto__ = (function (){var statearr_24337 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24337[(6)] = c__23565__auto___25956);

return statearr_24337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___25956,jobs,results,process,async))
);


var c__23565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto__,jobs,results,process,async){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto__,jobs,results,process,async){
return (function (state_24390){
var state_val_24391 = (state_24390[(1)]);
if((state_val_24391 === (7))){
var inst_24386 = (state_24390[(2)]);
var state_24390__$1 = state_24390;
var statearr_24401_25982 = state_24390__$1;
(statearr_24401_25982[(2)] = inst_24386);

(statearr_24401_25982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (20))){
var state_24390__$1 = state_24390;
var statearr_24403_25984 = state_24390__$1;
(statearr_24403_25984[(2)] = null);

(statearr_24403_25984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (1))){
var state_24390__$1 = state_24390;
var statearr_24408_25985 = state_24390__$1;
(statearr_24408_25985[(2)] = null);

(statearr_24408_25985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (4))){
var inst_24340 = (state_24390[(7)]);
var inst_24340__$1 = (state_24390[(2)]);
var inst_24342 = (inst_24340__$1 == null);
var state_24390__$1 = (function (){var statearr_24413 = state_24390;
(statearr_24413[(7)] = inst_24340__$1);

return statearr_24413;
})();
if(cljs.core.truth_(inst_24342)){
var statearr_24415_25987 = state_24390__$1;
(statearr_24415_25987[(1)] = (5));

} else {
var statearr_24416_25988 = state_24390__$1;
(statearr_24416_25988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (15))){
var inst_24359 = (state_24390[(8)]);
var state_24390__$1 = state_24390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24390__$1,(18),to,inst_24359);
} else {
if((state_val_24391 === (21))){
var inst_24377 = (state_24390[(2)]);
var state_24390__$1 = state_24390;
var statearr_24421_25992 = state_24390__$1;
(statearr_24421_25992[(2)] = inst_24377);

(statearr_24421_25992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (13))){
var inst_24379 = (state_24390[(2)]);
var state_24390__$1 = (function (){var statearr_24426 = state_24390;
(statearr_24426[(9)] = inst_24379);

return statearr_24426;
})();
var statearr_24427_25993 = state_24390__$1;
(statearr_24427_25993[(2)] = null);

(statearr_24427_25993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (6))){
var inst_24340 = (state_24390[(7)]);
var state_24390__$1 = state_24390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24390__$1,(11),inst_24340);
} else {
if((state_val_24391 === (17))){
var inst_24372 = (state_24390[(2)]);
var state_24390__$1 = state_24390;
if(cljs.core.truth_(inst_24372)){
var statearr_24434_25997 = state_24390__$1;
(statearr_24434_25997[(1)] = (19));

} else {
var statearr_24435_25998 = state_24390__$1;
(statearr_24435_25998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (3))){
var inst_24388 = (state_24390[(2)]);
var state_24390__$1 = state_24390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24390__$1,inst_24388);
} else {
if((state_val_24391 === (12))){
var inst_24356 = (state_24390[(10)]);
var state_24390__$1 = state_24390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24390__$1,(14),inst_24356);
} else {
if((state_val_24391 === (2))){
var state_24390__$1 = state_24390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24390__$1,(4),results);
} else {
if((state_val_24391 === (19))){
var state_24390__$1 = state_24390;
var statearr_24442_26006 = state_24390__$1;
(statearr_24442_26006[(2)] = null);

(statearr_24442_26006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (11))){
var inst_24356 = (state_24390[(2)]);
var state_24390__$1 = (function (){var statearr_24443 = state_24390;
(statearr_24443[(10)] = inst_24356);

return statearr_24443;
})();
var statearr_24444_26010 = state_24390__$1;
(statearr_24444_26010[(2)] = null);

(statearr_24444_26010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (9))){
var state_24390__$1 = state_24390;
var statearr_24449_26011 = state_24390__$1;
(statearr_24449_26011[(2)] = null);

(statearr_24449_26011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (5))){
var state_24390__$1 = state_24390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24452_26012 = state_24390__$1;
(statearr_24452_26012[(1)] = (8));

} else {
var statearr_24454_26013 = state_24390__$1;
(statearr_24454_26013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (14))){
var inst_24365 = (state_24390[(11)]);
var inst_24359 = (state_24390[(8)]);
var inst_24359__$1 = (state_24390[(2)]);
var inst_24364 = (inst_24359__$1 == null);
var inst_24365__$1 = cljs.core.not(inst_24364);
var state_24390__$1 = (function (){var statearr_24459 = state_24390;
(statearr_24459[(11)] = inst_24365__$1);

(statearr_24459[(8)] = inst_24359__$1);

return statearr_24459;
})();
if(inst_24365__$1){
var statearr_24460_26018 = state_24390__$1;
(statearr_24460_26018[(1)] = (15));

} else {
var statearr_24461_26019 = state_24390__$1;
(statearr_24461_26019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (16))){
var inst_24365 = (state_24390[(11)]);
var state_24390__$1 = state_24390;
var statearr_24466_26020 = state_24390__$1;
(statearr_24466_26020[(2)] = inst_24365);

(statearr_24466_26020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (10))){
var inst_24353 = (state_24390[(2)]);
var state_24390__$1 = state_24390;
var statearr_24467_26021 = state_24390__$1;
(statearr_24467_26021[(2)] = inst_24353);

(statearr_24467_26021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (18))){
var inst_24369 = (state_24390[(2)]);
var state_24390__$1 = state_24390;
var statearr_24473_26024 = state_24390__$1;
(statearr_24473_26024[(2)] = inst_24369);

(statearr_24473_26024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (8))){
var inst_24350 = cljs.core.async.close_BANG_(to);
var state_24390__$1 = state_24390;
var statearr_24474_26030 = state_24390__$1;
(statearr_24474_26030[(2)] = inst_24350);

(statearr_24474_26030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto__,jobs,results,process,async))
;
return ((function (switch__23463__auto__,c__23565__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0 = (function (){
var statearr_24476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__);

(statearr_24476[(1)] = (1));

return statearr_24476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1 = (function (state_24390){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24390);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24481){if((e24481 instanceof Object)){
var ex__23467__auto__ = e24481;
var statearr_24482_26037 = state_24390;
(statearr_24482_26037[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26044 = state_24390;
state_24390 = G__26044;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__ = function(state_24390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1.call(this,state_24390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto__,jobs,results,process,async))
})();
var state__23567__auto__ = (function (){var statearr_24487 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24487[(6)] = c__23565__auto__);

return statearr_24487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto__,jobs,results,process,async))
);

return c__23565__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24495 = arguments.length;
switch (G__24495) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24514 = arguments.length;
switch (G__24514) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24516 = arguments.length;
switch (G__24516) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__23565__auto___26049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26049,tc,fc){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26049,tc,fc){
return (function (state_24543){
var state_val_24544 = (state_24543[(1)]);
if((state_val_24544 === (7))){
var inst_24539 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24547_26050 = state_24543__$1;
(statearr_24547_26050[(2)] = inst_24539);

(statearr_24547_26050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (1))){
var state_24543__$1 = state_24543;
var statearr_24549_26053 = state_24543__$1;
(statearr_24549_26053[(2)] = null);

(statearr_24549_26053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (4))){
var inst_24520 = (state_24543[(7)]);
var inst_24520__$1 = (state_24543[(2)]);
var inst_24521 = (inst_24520__$1 == null);
var state_24543__$1 = (function (){var statearr_24550 = state_24543;
(statearr_24550[(7)] = inst_24520__$1);

return statearr_24550;
})();
if(cljs.core.truth_(inst_24521)){
var statearr_24551_26054 = state_24543__$1;
(statearr_24551_26054[(1)] = (5));

} else {
var statearr_24552_26055 = state_24543__$1;
(statearr_24552_26055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (13))){
var state_24543__$1 = state_24543;
var statearr_24553_26056 = state_24543__$1;
(statearr_24553_26056[(2)] = null);

(statearr_24553_26056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (6))){
var inst_24520 = (state_24543[(7)]);
var inst_24526 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24520) : p.call(null,inst_24520));
var state_24543__$1 = state_24543;
if(cljs.core.truth_(inst_24526)){
var statearr_24555_26057 = state_24543__$1;
(statearr_24555_26057[(1)] = (9));

} else {
var statearr_24556_26058 = state_24543__$1;
(statearr_24556_26058[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (3))){
var inst_24541 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24543__$1,inst_24541);
} else {
if((state_val_24544 === (12))){
var state_24543__$1 = state_24543;
var statearr_24560_26059 = state_24543__$1;
(statearr_24560_26059[(2)] = null);

(statearr_24560_26059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (2))){
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24543__$1,(4),ch);
} else {
if((state_val_24544 === (11))){
var inst_24520 = (state_24543[(7)]);
var inst_24530 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24543__$1,(8),inst_24530,inst_24520);
} else {
if((state_val_24544 === (9))){
var state_24543__$1 = state_24543;
var statearr_24564_26060 = state_24543__$1;
(statearr_24564_26060[(2)] = tc);

(statearr_24564_26060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (5))){
var inst_24523 = cljs.core.async.close_BANG_(tc);
var inst_24524 = cljs.core.async.close_BANG_(fc);
var state_24543__$1 = (function (){var statearr_24567 = state_24543;
(statearr_24567[(8)] = inst_24523);

return statearr_24567;
})();
var statearr_24568_26061 = state_24543__$1;
(statearr_24568_26061[(2)] = inst_24524);

(statearr_24568_26061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (14))){
var inst_24537 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24569_26062 = state_24543__$1;
(statearr_24569_26062[(2)] = inst_24537);

(statearr_24569_26062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (10))){
var state_24543__$1 = state_24543;
var statearr_24570_26063 = state_24543__$1;
(statearr_24570_26063[(2)] = fc);

(statearr_24570_26063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (8))){
var inst_24532 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
if(cljs.core.truth_(inst_24532)){
var statearr_24571_26064 = state_24543__$1;
(statearr_24571_26064[(1)] = (12));

} else {
var statearr_24572_26065 = state_24543__$1;
(statearr_24572_26065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26049,tc,fc))
;
return ((function (switch__23463__auto__,c__23565__auto___26049,tc,fc){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_24576 = [null,null,null,null,null,null,null,null,null];
(statearr_24576[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_24576[(1)] = (1));

return statearr_24576;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_24543){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24543);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24577){if((e24577 instanceof Object)){
var ex__23467__auto__ = e24577;
var statearr_24578_26069 = state_24543;
(statearr_24578_26069[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26070 = state_24543;
state_24543 = G__26070;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_24543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_24543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26049,tc,fc))
})();
var state__23567__auto__ = (function (){var statearr_24585 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24585[(6)] = c__23565__auto___26049);

return statearr_24585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26049,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto__){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto__){
return (function (state_24635){
var state_val_24640 = (state_24635[(1)]);
if((state_val_24640 === (7))){
var inst_24631 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24645_26075 = state_24635__$1;
(statearr_24645_26075[(2)] = inst_24631);

(statearr_24645_26075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (1))){
var inst_24601 = init;
var state_24635__$1 = (function (){var statearr_24650 = state_24635;
(statearr_24650[(7)] = inst_24601);

return statearr_24650;
})();
var statearr_24651_26076 = state_24635__$1;
(statearr_24651_26076[(2)] = null);

(statearr_24651_26076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (4))){
var inst_24604 = (state_24635[(8)]);
var inst_24604__$1 = (state_24635[(2)]);
var inst_24611 = (inst_24604__$1 == null);
var state_24635__$1 = (function (){var statearr_24652 = state_24635;
(statearr_24652[(8)] = inst_24604__$1);

return statearr_24652;
})();
if(cljs.core.truth_(inst_24611)){
var statearr_24657_26078 = state_24635__$1;
(statearr_24657_26078[(1)] = (5));

} else {
var statearr_24658_26079 = state_24635__$1;
(statearr_24658_26079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (6))){
var inst_24601 = (state_24635[(7)]);
var inst_24604 = (state_24635[(8)]);
var inst_24616 = (state_24635[(9)]);
var inst_24616__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24601,inst_24604) : f.call(null,inst_24601,inst_24604));
var inst_24617 = cljs.core.reduced_QMARK_(inst_24616__$1);
var state_24635__$1 = (function (){var statearr_24660 = state_24635;
(statearr_24660[(9)] = inst_24616__$1);

return statearr_24660;
})();
if(inst_24617){
var statearr_24665_26081 = state_24635__$1;
(statearr_24665_26081[(1)] = (8));

} else {
var statearr_24666_26082 = state_24635__$1;
(statearr_24666_26082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (3))){
var inst_24633 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24635__$1,inst_24633);
} else {
if((state_val_24640 === (2))){
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24635__$1,(4),ch);
} else {
if((state_val_24640 === (9))){
var inst_24616 = (state_24635[(9)]);
var inst_24601 = inst_24616;
var state_24635__$1 = (function (){var statearr_24672 = state_24635;
(statearr_24672[(7)] = inst_24601);

return statearr_24672;
})();
var statearr_24673_26083 = state_24635__$1;
(statearr_24673_26083[(2)] = null);

(statearr_24673_26083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (5))){
var inst_24601 = (state_24635[(7)]);
var state_24635__$1 = state_24635;
var statearr_24678_26084 = state_24635__$1;
(statearr_24678_26084[(2)] = inst_24601);

(statearr_24678_26084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (10))){
var inst_24629 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24683_26085 = state_24635__$1;
(statearr_24683_26085[(2)] = inst_24629);

(statearr_24683_26085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24640 === (8))){
var inst_24616 = (state_24635[(9)]);
var inst_24625 = cljs.core.deref(inst_24616);
var state_24635__$1 = state_24635;
var statearr_24684_26086 = state_24635__$1;
(statearr_24684_26086[(2)] = inst_24625);

(statearr_24684_26086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto__))
;
return ((function (switch__23463__auto__,c__23565__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23464__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23464__auto____0 = (function (){
var statearr_24685 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24685[(0)] = cljs$core$async$reduce_$_state_machine__23464__auto__);

(statearr_24685[(1)] = (1));

return statearr_24685;
});
var cljs$core$async$reduce_$_state_machine__23464__auto____1 = (function (state_24635){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24635);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24686){if((e24686 instanceof Object)){
var ex__23467__auto__ = e24686;
var statearr_24687_26088 = state_24635;
(statearr_24687_26088[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26092 = state_24635;
state_24635 = G__26092;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23464__auto__ = function(state_24635){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23464__auto____1.call(this,state_24635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23464__auto____0;
cljs$core$async$reduce_$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23464__auto____1;
return cljs$core$async$reduce_$_state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto__))
})();
var state__23567__auto__ = (function (){var statearr_24688 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24688[(6)] = c__23565__auto__);

return statearr_24688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto__))
);

return c__23565__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto__,f__$1){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto__,f__$1){
return (function (state_24694){
var state_val_24695 = (state_24694[(1)]);
if((state_val_24695 === (1))){
var inst_24689 = cljs.core.async.reduce(f__$1,init,ch);
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24694__$1,(2),inst_24689);
} else {
if((state_val_24695 === (2))){
var inst_24691 = (state_24694[(2)]);
var inst_24692 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24691) : f__$1.call(null,inst_24691));
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24694__$1,inst_24692);
} else {
return null;
}
}
});})(c__23565__auto__,f__$1))
;
return ((function (switch__23463__auto__,c__23565__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23464__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23464__auto____0 = (function (){
var statearr_24696 = [null,null,null,null,null,null,null];
(statearr_24696[(0)] = cljs$core$async$transduce_$_state_machine__23464__auto__);

(statearr_24696[(1)] = (1));

return statearr_24696;
});
var cljs$core$async$transduce_$_state_machine__23464__auto____1 = (function (state_24694){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24694);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24697){if((e24697 instanceof Object)){
var ex__23467__auto__ = e24697;
var statearr_24698_26111 = state_24694;
(statearr_24698_26111[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26115 = state_24694;
state_24694 = G__26115;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23464__auto__ = function(state_24694){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23464__auto____1.call(this,state_24694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23464__auto____0;
cljs$core$async$transduce_$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23464__auto____1;
return cljs$core$async$transduce_$_state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto__,f__$1))
})();
var state__23567__auto__ = (function (){var statearr_24699 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24699[(6)] = c__23565__auto__);

return statearr_24699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto__,f__$1))
);

return c__23565__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24701 = arguments.length;
switch (G__24701) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto__){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto__){
return (function (state_24726){
var state_val_24727 = (state_24726[(1)]);
if((state_val_24727 === (7))){
var inst_24708 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
var statearr_24728_26123 = state_24726__$1;
(statearr_24728_26123[(2)] = inst_24708);

(statearr_24728_26123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (1))){
var inst_24702 = cljs.core.seq(coll);
var inst_24703 = inst_24702;
var state_24726__$1 = (function (){var statearr_24729 = state_24726;
(statearr_24729[(7)] = inst_24703);

return statearr_24729;
})();
var statearr_24730_26124 = state_24726__$1;
(statearr_24730_26124[(2)] = null);

(statearr_24730_26124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (4))){
var inst_24703 = (state_24726[(7)]);
var inst_24706 = cljs.core.first(inst_24703);
var state_24726__$1 = state_24726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24726__$1,(7),ch,inst_24706);
} else {
if((state_val_24727 === (13))){
var inst_24720 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
var statearr_24731_26125 = state_24726__$1;
(statearr_24731_26125[(2)] = inst_24720);

(statearr_24731_26125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (6))){
var inst_24711 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
if(cljs.core.truth_(inst_24711)){
var statearr_24732_26126 = state_24726__$1;
(statearr_24732_26126[(1)] = (8));

} else {
var statearr_24733_26127 = state_24726__$1;
(statearr_24733_26127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (3))){
var inst_24724 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24726__$1,inst_24724);
} else {
if((state_val_24727 === (12))){
var state_24726__$1 = state_24726;
var statearr_24734_26128 = state_24726__$1;
(statearr_24734_26128[(2)] = null);

(statearr_24734_26128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (2))){
var inst_24703 = (state_24726[(7)]);
var state_24726__$1 = state_24726;
if(cljs.core.truth_(inst_24703)){
var statearr_24735_26129 = state_24726__$1;
(statearr_24735_26129[(1)] = (4));

} else {
var statearr_24736_26130 = state_24726__$1;
(statearr_24736_26130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (11))){
var inst_24717 = cljs.core.async.close_BANG_(ch);
var state_24726__$1 = state_24726;
var statearr_24737_26131 = state_24726__$1;
(statearr_24737_26131[(2)] = inst_24717);

(statearr_24737_26131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (9))){
var state_24726__$1 = state_24726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24738_26132 = state_24726__$1;
(statearr_24738_26132[(1)] = (11));

} else {
var statearr_24739_26133 = state_24726__$1;
(statearr_24739_26133[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (5))){
var inst_24703 = (state_24726[(7)]);
var state_24726__$1 = state_24726;
var statearr_24740_26134 = state_24726__$1;
(statearr_24740_26134[(2)] = inst_24703);

(statearr_24740_26134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (10))){
var inst_24722 = (state_24726[(2)]);
var state_24726__$1 = state_24726;
var statearr_24741_26135 = state_24726__$1;
(statearr_24741_26135[(2)] = inst_24722);

(statearr_24741_26135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24727 === (8))){
var inst_24703 = (state_24726[(7)]);
var inst_24713 = cljs.core.next(inst_24703);
var inst_24703__$1 = inst_24713;
var state_24726__$1 = (function (){var statearr_24742 = state_24726;
(statearr_24742[(7)] = inst_24703__$1);

return statearr_24742;
})();
var statearr_24743_26136 = state_24726__$1;
(statearr_24743_26136[(2)] = null);

(statearr_24743_26136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto__))
;
return ((function (switch__23463__auto__,c__23565__auto__){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_24744 = [null,null,null,null,null,null,null,null];
(statearr_24744[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_24744[(1)] = (1));

return statearr_24744;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_24726){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24726);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24745){if((e24745 instanceof Object)){
var ex__23467__auto__ = e24745;
var statearr_24746_26137 = state_24726;
(statearr_24746_26137[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26138 = state_24726;
state_24726 = G__26138;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_24726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_24726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto__))
})();
var state__23567__auto__ = (function (){var statearr_24747 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24747[(6)] = c__23565__auto__);

return statearr_24747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto__))
);

return c__23565__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24748 = (function (ch,cs,meta24749){
this.ch = ch;
this.cs = cs;
this.meta24749 = meta24749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24750,meta24749__$1){
var self__ = this;
var _24750__$1 = this;
return (new cljs.core.async.t_cljs$core$async24748(self__.ch,self__.cs,meta24749__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24750){
var self__ = this;
var _24750__$1 = this;
return self__.meta24749;
});})(cs))
;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24748.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24749","meta24749",-951873875,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24748";

cljs.core.async.t_cljs$core$async24748.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async24748");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24748.
 */
cljs.core.async.__GT_t_cljs$core$async24748 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24748(ch__$1,cs__$1,meta24749){
return (new cljs.core.async.t_cljs$core$async24748(ch__$1,cs__$1,meta24749));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24748(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23565__auto___26157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26157,cs,m,dchan,dctr,done){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26157,cs,m,dchan,dctr,done){
return (function (state_24885){
var state_val_24886 = (state_24885[(1)]);
if((state_val_24886 === (7))){
var inst_24881 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24887_26158 = state_24885__$1;
(statearr_24887_26158[(2)] = inst_24881);

(statearr_24887_26158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (20))){
var inst_24784 = (state_24885[(7)]);
var inst_24796 = cljs.core.first(inst_24784);
var inst_24797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24796,(0),null);
var inst_24798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24796,(1),null);
var state_24885__$1 = (function (){var statearr_24888 = state_24885;
(statearr_24888[(8)] = inst_24797);

return statearr_24888;
})();
if(cljs.core.truth_(inst_24798)){
var statearr_24889_26160 = state_24885__$1;
(statearr_24889_26160[(1)] = (22));

} else {
var statearr_24890_26161 = state_24885__$1;
(statearr_24890_26161[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (27))){
var inst_24826 = (state_24885[(9)]);
var inst_24833 = (state_24885[(10)]);
var inst_24753 = (state_24885[(11)]);
var inst_24828 = (state_24885[(12)]);
var inst_24833__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24826,inst_24828);
var inst_24834 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24833__$1,inst_24753,done);
var state_24885__$1 = (function (){var statearr_24891 = state_24885;
(statearr_24891[(10)] = inst_24833__$1);

return statearr_24891;
})();
if(cljs.core.truth_(inst_24834)){
var statearr_24892_26162 = state_24885__$1;
(statearr_24892_26162[(1)] = (30));

} else {
var statearr_24893_26163 = state_24885__$1;
(statearr_24893_26163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (1))){
var state_24885__$1 = state_24885;
var statearr_24894_26164 = state_24885__$1;
(statearr_24894_26164[(2)] = null);

(statearr_24894_26164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (24))){
var inst_24784 = (state_24885[(7)]);
var inst_24803 = (state_24885[(2)]);
var inst_24804 = cljs.core.next(inst_24784);
var inst_24762 = inst_24804;
var inst_24763 = null;
var inst_24764 = (0);
var inst_24765 = (0);
var state_24885__$1 = (function (){var statearr_24895 = state_24885;
(statearr_24895[(13)] = inst_24762);

(statearr_24895[(14)] = inst_24763);

(statearr_24895[(15)] = inst_24764);

(statearr_24895[(16)] = inst_24765);

(statearr_24895[(17)] = inst_24803);

return statearr_24895;
})();
var statearr_24896_26165 = state_24885__$1;
(statearr_24896_26165[(2)] = null);

(statearr_24896_26165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (39))){
var state_24885__$1 = state_24885;
var statearr_24900_26166 = state_24885__$1;
(statearr_24900_26166[(2)] = null);

(statearr_24900_26166[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (4))){
var inst_24753 = (state_24885[(11)]);
var inst_24753__$1 = (state_24885[(2)]);
var inst_24754 = (inst_24753__$1 == null);
var state_24885__$1 = (function (){var statearr_24901 = state_24885;
(statearr_24901[(11)] = inst_24753__$1);

return statearr_24901;
})();
if(cljs.core.truth_(inst_24754)){
var statearr_24902_26168 = state_24885__$1;
(statearr_24902_26168[(1)] = (5));

} else {
var statearr_24903_26169 = state_24885__$1;
(statearr_24903_26169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (15))){
var inst_24762 = (state_24885[(13)]);
var inst_24763 = (state_24885[(14)]);
var inst_24764 = (state_24885[(15)]);
var inst_24765 = (state_24885[(16)]);
var inst_24780 = (state_24885[(2)]);
var inst_24781 = (inst_24765 + (1));
var tmp24897 = inst_24762;
var tmp24898 = inst_24763;
var tmp24899 = inst_24764;
var inst_24762__$1 = tmp24897;
var inst_24763__$1 = tmp24898;
var inst_24764__$1 = tmp24899;
var inst_24765__$1 = inst_24781;
var state_24885__$1 = (function (){var statearr_24904 = state_24885;
(statearr_24904[(13)] = inst_24762__$1);

(statearr_24904[(14)] = inst_24763__$1);

(statearr_24904[(15)] = inst_24764__$1);

(statearr_24904[(18)] = inst_24780);

(statearr_24904[(16)] = inst_24765__$1);

return statearr_24904;
})();
var statearr_24905_26171 = state_24885__$1;
(statearr_24905_26171[(2)] = null);

(statearr_24905_26171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (21))){
var inst_24807 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24909_26172 = state_24885__$1;
(statearr_24909_26172[(2)] = inst_24807);

(statearr_24909_26172[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (31))){
var inst_24833 = (state_24885[(10)]);
var inst_24837 = done(null);
var inst_24838 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24833);
var state_24885__$1 = (function (){var statearr_24910 = state_24885;
(statearr_24910[(19)] = inst_24837);

return statearr_24910;
})();
var statearr_24911_26177 = state_24885__$1;
(statearr_24911_26177[(2)] = inst_24838);

(statearr_24911_26177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (32))){
var inst_24827 = (state_24885[(20)]);
var inst_24825 = (state_24885[(21)]);
var inst_24826 = (state_24885[(9)]);
var inst_24828 = (state_24885[(12)]);
var inst_24840 = (state_24885[(2)]);
var inst_24841 = (inst_24828 + (1));
var tmp24906 = inst_24827;
var tmp24907 = inst_24825;
var tmp24908 = inst_24826;
var inst_24825__$1 = tmp24907;
var inst_24826__$1 = tmp24908;
var inst_24827__$1 = tmp24906;
var inst_24828__$1 = inst_24841;
var state_24885__$1 = (function (){var statearr_24912 = state_24885;
(statearr_24912[(20)] = inst_24827__$1);

(statearr_24912[(22)] = inst_24840);

(statearr_24912[(21)] = inst_24825__$1);

(statearr_24912[(9)] = inst_24826__$1);

(statearr_24912[(12)] = inst_24828__$1);

return statearr_24912;
})();
var statearr_24913_26178 = state_24885__$1;
(statearr_24913_26178[(2)] = null);

(statearr_24913_26178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (40))){
var inst_24853 = (state_24885[(23)]);
var inst_24857 = done(null);
var inst_24858 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24853);
var state_24885__$1 = (function (){var statearr_24914 = state_24885;
(statearr_24914[(24)] = inst_24857);

return statearr_24914;
})();
var statearr_24915_26183 = state_24885__$1;
(statearr_24915_26183[(2)] = inst_24858);

(statearr_24915_26183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (33))){
var inst_24844 = (state_24885[(25)]);
var inst_24846 = cljs.core.chunked_seq_QMARK_(inst_24844);
var state_24885__$1 = state_24885;
if(inst_24846){
var statearr_24916_26187 = state_24885__$1;
(statearr_24916_26187[(1)] = (36));

} else {
var statearr_24917_26188 = state_24885__$1;
(statearr_24917_26188[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (13))){
var inst_24774 = (state_24885[(26)]);
var inst_24777 = cljs.core.async.close_BANG_(inst_24774);
var state_24885__$1 = state_24885;
var statearr_24918_26192 = state_24885__$1;
(statearr_24918_26192[(2)] = inst_24777);

(statearr_24918_26192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (22))){
var inst_24797 = (state_24885[(8)]);
var inst_24800 = cljs.core.async.close_BANG_(inst_24797);
var state_24885__$1 = state_24885;
var statearr_24919_26194 = state_24885__$1;
(statearr_24919_26194[(2)] = inst_24800);

(statearr_24919_26194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (36))){
var inst_24844 = (state_24885[(25)]);
var inst_24848 = cljs.core.chunk_first(inst_24844);
var inst_24849 = cljs.core.chunk_rest(inst_24844);
var inst_24850 = cljs.core.count(inst_24848);
var inst_24825 = inst_24849;
var inst_24826 = inst_24848;
var inst_24827 = inst_24850;
var inst_24828 = (0);
var state_24885__$1 = (function (){var statearr_24920 = state_24885;
(statearr_24920[(20)] = inst_24827);

(statearr_24920[(21)] = inst_24825);

(statearr_24920[(9)] = inst_24826);

(statearr_24920[(12)] = inst_24828);

return statearr_24920;
})();
var statearr_24921_26198 = state_24885__$1;
(statearr_24921_26198[(2)] = null);

(statearr_24921_26198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (41))){
var inst_24844 = (state_24885[(25)]);
var inst_24860 = (state_24885[(2)]);
var inst_24861 = cljs.core.next(inst_24844);
var inst_24825 = inst_24861;
var inst_24826 = null;
var inst_24827 = (0);
var inst_24828 = (0);
var state_24885__$1 = (function (){var statearr_24922 = state_24885;
(statearr_24922[(20)] = inst_24827);

(statearr_24922[(21)] = inst_24825);

(statearr_24922[(9)] = inst_24826);

(statearr_24922[(27)] = inst_24860);

(statearr_24922[(12)] = inst_24828);

return statearr_24922;
})();
var statearr_24923_26199 = state_24885__$1;
(statearr_24923_26199[(2)] = null);

(statearr_24923_26199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (43))){
var state_24885__$1 = state_24885;
var statearr_24924_26200 = state_24885__$1;
(statearr_24924_26200[(2)] = null);

(statearr_24924_26200[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (29))){
var inst_24869 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24925_26203 = state_24885__$1;
(statearr_24925_26203[(2)] = inst_24869);

(statearr_24925_26203[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (44))){
var inst_24878 = (state_24885[(2)]);
var state_24885__$1 = (function (){var statearr_24926 = state_24885;
(statearr_24926[(28)] = inst_24878);

return statearr_24926;
})();
var statearr_24927_26205 = state_24885__$1;
(statearr_24927_26205[(2)] = null);

(statearr_24927_26205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (6))){
var inst_24817 = (state_24885[(29)]);
var inst_24816 = cljs.core.deref(cs);
var inst_24817__$1 = cljs.core.keys(inst_24816);
var inst_24818 = cljs.core.count(inst_24817__$1);
var inst_24819 = cljs.core.reset_BANG_(dctr,inst_24818);
var inst_24824 = cljs.core.seq(inst_24817__$1);
var inst_24825 = inst_24824;
var inst_24826 = null;
var inst_24827 = (0);
var inst_24828 = (0);
var state_24885__$1 = (function (){var statearr_24928 = state_24885;
(statearr_24928[(20)] = inst_24827);

(statearr_24928[(30)] = inst_24819);

(statearr_24928[(21)] = inst_24825);

(statearr_24928[(9)] = inst_24826);

(statearr_24928[(29)] = inst_24817__$1);

(statearr_24928[(12)] = inst_24828);

return statearr_24928;
})();
var statearr_24929_26209 = state_24885__$1;
(statearr_24929_26209[(2)] = null);

(statearr_24929_26209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (28))){
var inst_24825 = (state_24885[(21)]);
var inst_24844 = (state_24885[(25)]);
var inst_24844__$1 = cljs.core.seq(inst_24825);
var state_24885__$1 = (function (){var statearr_24930 = state_24885;
(statearr_24930[(25)] = inst_24844__$1);

return statearr_24930;
})();
if(inst_24844__$1){
var statearr_24931_26213 = state_24885__$1;
(statearr_24931_26213[(1)] = (33));

} else {
var statearr_24932_26214 = state_24885__$1;
(statearr_24932_26214[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (25))){
var inst_24827 = (state_24885[(20)]);
var inst_24828 = (state_24885[(12)]);
var inst_24830 = (inst_24828 < inst_24827);
var inst_24831 = inst_24830;
var state_24885__$1 = state_24885;
if(cljs.core.truth_(inst_24831)){
var statearr_24933_26216 = state_24885__$1;
(statearr_24933_26216[(1)] = (27));

} else {
var statearr_24934_26217 = state_24885__$1;
(statearr_24934_26217[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (34))){
var state_24885__$1 = state_24885;
var statearr_24935_26218 = state_24885__$1;
(statearr_24935_26218[(2)] = null);

(statearr_24935_26218[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (17))){
var state_24885__$1 = state_24885;
var statearr_24936_26221 = state_24885__$1;
(statearr_24936_26221[(2)] = null);

(statearr_24936_26221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (3))){
var inst_24883 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24885__$1,inst_24883);
} else {
if((state_val_24886 === (12))){
var inst_24812 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24937_26222 = state_24885__$1;
(statearr_24937_26222[(2)] = inst_24812);

(statearr_24937_26222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (2))){
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24885__$1,(4),ch);
} else {
if((state_val_24886 === (23))){
var state_24885__$1 = state_24885;
var statearr_24938_26223 = state_24885__$1;
(statearr_24938_26223[(2)] = null);

(statearr_24938_26223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (35))){
var inst_24867 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24939_26224 = state_24885__$1;
(statearr_24939_26224[(2)] = inst_24867);

(statearr_24939_26224[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (19))){
var inst_24784 = (state_24885[(7)]);
var inst_24788 = cljs.core.chunk_first(inst_24784);
var inst_24789 = cljs.core.chunk_rest(inst_24784);
var inst_24790 = cljs.core.count(inst_24788);
var inst_24762 = inst_24789;
var inst_24763 = inst_24788;
var inst_24764 = inst_24790;
var inst_24765 = (0);
var state_24885__$1 = (function (){var statearr_24940 = state_24885;
(statearr_24940[(13)] = inst_24762);

(statearr_24940[(14)] = inst_24763);

(statearr_24940[(15)] = inst_24764);

(statearr_24940[(16)] = inst_24765);

return statearr_24940;
})();
var statearr_24941_26225 = state_24885__$1;
(statearr_24941_26225[(2)] = null);

(statearr_24941_26225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (11))){
var inst_24762 = (state_24885[(13)]);
var inst_24784 = (state_24885[(7)]);
var inst_24784__$1 = cljs.core.seq(inst_24762);
var state_24885__$1 = (function (){var statearr_24942 = state_24885;
(statearr_24942[(7)] = inst_24784__$1);

return statearr_24942;
})();
if(inst_24784__$1){
var statearr_24943_26230 = state_24885__$1;
(statearr_24943_26230[(1)] = (16));

} else {
var statearr_24944_26231 = state_24885__$1;
(statearr_24944_26231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (9))){
var inst_24814 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24945_26232 = state_24885__$1;
(statearr_24945_26232[(2)] = inst_24814);

(statearr_24945_26232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (5))){
var inst_24760 = cljs.core.deref(cs);
var inst_24761 = cljs.core.seq(inst_24760);
var inst_24762 = inst_24761;
var inst_24763 = null;
var inst_24764 = (0);
var inst_24765 = (0);
var state_24885__$1 = (function (){var statearr_24946 = state_24885;
(statearr_24946[(13)] = inst_24762);

(statearr_24946[(14)] = inst_24763);

(statearr_24946[(15)] = inst_24764);

(statearr_24946[(16)] = inst_24765);

return statearr_24946;
})();
var statearr_24947_26233 = state_24885__$1;
(statearr_24947_26233[(2)] = null);

(statearr_24947_26233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (14))){
var state_24885__$1 = state_24885;
var statearr_24948_26238 = state_24885__$1;
(statearr_24948_26238[(2)] = null);

(statearr_24948_26238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (45))){
var inst_24875 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24949_26239 = state_24885__$1;
(statearr_24949_26239[(2)] = inst_24875);

(statearr_24949_26239[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (26))){
var inst_24817 = (state_24885[(29)]);
var inst_24871 = (state_24885[(2)]);
var inst_24872 = cljs.core.seq(inst_24817);
var state_24885__$1 = (function (){var statearr_24950 = state_24885;
(statearr_24950[(31)] = inst_24871);

return statearr_24950;
})();
if(inst_24872){
var statearr_24951_26242 = state_24885__$1;
(statearr_24951_26242[(1)] = (42));

} else {
var statearr_24952_26243 = state_24885__$1;
(statearr_24952_26243[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (16))){
var inst_24784 = (state_24885[(7)]);
var inst_24786 = cljs.core.chunked_seq_QMARK_(inst_24784);
var state_24885__$1 = state_24885;
if(inst_24786){
var statearr_24953_26244 = state_24885__$1;
(statearr_24953_26244[(1)] = (19));

} else {
var statearr_24954_26245 = state_24885__$1;
(statearr_24954_26245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (38))){
var inst_24864 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24955_26246 = state_24885__$1;
(statearr_24955_26246[(2)] = inst_24864);

(statearr_24955_26246[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (30))){
var state_24885__$1 = state_24885;
var statearr_24956_26247 = state_24885__$1;
(statearr_24956_26247[(2)] = null);

(statearr_24956_26247[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (10))){
var inst_24763 = (state_24885[(14)]);
var inst_24765 = (state_24885[(16)]);
var inst_24773 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24763,inst_24765);
var inst_24774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24773,(0),null);
var inst_24775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24773,(1),null);
var state_24885__$1 = (function (){var statearr_24957 = state_24885;
(statearr_24957[(26)] = inst_24774);

return statearr_24957;
})();
if(cljs.core.truth_(inst_24775)){
var statearr_24958_26252 = state_24885__$1;
(statearr_24958_26252[(1)] = (13));

} else {
var statearr_24959_26253 = state_24885__$1;
(statearr_24959_26253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (18))){
var inst_24810 = (state_24885[(2)]);
var state_24885__$1 = state_24885;
var statearr_24960_26254 = state_24885__$1;
(statearr_24960_26254[(2)] = inst_24810);

(statearr_24960_26254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (42))){
var state_24885__$1 = state_24885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24885__$1,(45),dchan);
} else {
if((state_val_24886 === (37))){
var inst_24844 = (state_24885[(25)]);
var inst_24853 = (state_24885[(23)]);
var inst_24753 = (state_24885[(11)]);
var inst_24853__$1 = cljs.core.first(inst_24844);
var inst_24854 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24853__$1,inst_24753,done);
var state_24885__$1 = (function (){var statearr_24961 = state_24885;
(statearr_24961[(23)] = inst_24853__$1);

return statearr_24961;
})();
if(cljs.core.truth_(inst_24854)){
var statearr_24962_26255 = state_24885__$1;
(statearr_24962_26255[(1)] = (39));

} else {
var statearr_24963_26256 = state_24885__$1;
(statearr_24963_26256[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24886 === (8))){
var inst_24764 = (state_24885[(15)]);
var inst_24765 = (state_24885[(16)]);
var inst_24767 = (inst_24765 < inst_24764);
var inst_24768 = inst_24767;
var state_24885__$1 = state_24885;
if(cljs.core.truth_(inst_24768)){
var statearr_24964_26257 = state_24885__$1;
(statearr_24964_26257[(1)] = (10));

} else {
var statearr_24965_26258 = state_24885__$1;
(statearr_24965_26258[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26157,cs,m,dchan,dctr,done))
;
return ((function (switch__23463__auto__,c__23565__auto___26157,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23464__auto__ = null;
var cljs$core$async$mult_$_state_machine__23464__auto____0 = (function (){
var statearr_24966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24966[(0)] = cljs$core$async$mult_$_state_machine__23464__auto__);

(statearr_24966[(1)] = (1));

return statearr_24966;
});
var cljs$core$async$mult_$_state_machine__23464__auto____1 = (function (state_24885){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_24885);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e24967){if((e24967 instanceof Object)){
var ex__23467__auto__ = e24967;
var statearr_24968_26262 = state_24885;
(statearr_24968_26262[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26263 = state_24885;
state_24885 = G__26263;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23464__auto__ = function(state_24885){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23464__auto____1.call(this,state_24885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23464__auto____0;
cljs$core$async$mult_$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23464__auto____1;
return cljs$core$async$mult_$_state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26157,cs,m,dchan,dctr,done))
})();
var state__23567__auto__ = (function (){var statearr_24969 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_24969[(6)] = c__23565__auto___26157);

return statearr_24969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26157,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24971 = arguments.length;
switch (G__24971) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26282 = arguments.length;
var i__4532__auto___26283 = (0);
while(true){
if((i__4532__auto___26283 < len__4531__auto___26282)){
args__4534__auto__.push((arguments[i__4532__auto___26283]));

var G__26288 = (i__4532__auto___26283 + (1));
i__4532__auto___26283 = G__26288;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24976){
var map__24977 = p__24976;
var map__24977__$1 = ((((!((map__24977 == null)))?(((((map__24977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24977):map__24977);
var opts = map__24977__$1;
var statearr_24979_26290 = state;
(statearr_24979_26290[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__24977,map__24977__$1,opts){
return (function (val){
var statearr_24980_26291 = state;
(statearr_24980_26291[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24977,map__24977__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24981_26292 = state;
(statearr_24981_26292[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24972){
var G__24973 = cljs.core.first(seq24972);
var seq24972__$1 = cljs.core.next(seq24972);
var G__24974 = cljs.core.first(seq24972__$1);
var seq24972__$2 = cljs.core.next(seq24972__$1);
var G__24975 = cljs.core.first(seq24972__$2);
var seq24972__$3 = cljs.core.next(seq24972__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24973,G__24974,G__24975,seq24972__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24982 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24983){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24983 = meta24983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24984,meta24983__$1){
var self__ = this;
var _24984__$1 = this;
return (new cljs.core.async.t_cljs$core$async24982(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24983__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24984){
var self__ = this;
var _24984__$1 = this;
return self__.meta24983;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24983","meta24983",783440242,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24982";

cljs.core.async.t_cljs$core$async24982.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async24982");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24982.
 */
cljs.core.async.__GT_t_cljs$core$async24982 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24982(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24983){
return (new cljs.core.async.t_cljs$core$async24982(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24983));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24982(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23565__auto___26309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25086){
var state_val_25087 = (state_25086[(1)]);
if((state_val_25087 === (7))){
var inst_25001 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25088_26312 = state_25086__$1;
(statearr_25088_26312[(2)] = inst_25001);

(statearr_25088_26312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (20))){
var inst_25013 = (state_25086[(7)]);
var state_25086__$1 = state_25086;
var statearr_25089_26313 = state_25086__$1;
(statearr_25089_26313[(2)] = inst_25013);

(statearr_25089_26313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (27))){
var state_25086__$1 = state_25086;
var statearr_25090_26315 = state_25086__$1;
(statearr_25090_26315[(2)] = null);

(statearr_25090_26315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (1))){
var inst_24988 = (state_25086[(8)]);
var inst_24988__$1 = calc_state();
var inst_24990 = (inst_24988__$1 == null);
var inst_24991 = cljs.core.not(inst_24990);
var state_25086__$1 = (function (){var statearr_25091 = state_25086;
(statearr_25091[(8)] = inst_24988__$1);

return statearr_25091;
})();
if(inst_24991){
var statearr_25092_26316 = state_25086__$1;
(statearr_25092_26316[(1)] = (2));

} else {
var statearr_25093_26317 = state_25086__$1;
(statearr_25093_26317[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (24))){
var inst_25037 = (state_25086[(9)]);
var inst_25060 = (state_25086[(10)]);
var inst_25046 = (state_25086[(11)]);
var inst_25060__$1 = (inst_25037.cljs$core$IFn$_invoke$arity$1 ? inst_25037.cljs$core$IFn$_invoke$arity$1(inst_25046) : inst_25037.call(null,inst_25046));
var state_25086__$1 = (function (){var statearr_25094 = state_25086;
(statearr_25094[(10)] = inst_25060__$1);

return statearr_25094;
})();
if(cljs.core.truth_(inst_25060__$1)){
var statearr_25095_26319 = state_25086__$1;
(statearr_25095_26319[(1)] = (29));

} else {
var statearr_25096_26320 = state_25086__$1;
(statearr_25096_26320[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (4))){
var inst_25004 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25004)){
var statearr_25097_26321 = state_25086__$1;
(statearr_25097_26321[(1)] = (8));

} else {
var statearr_25098_26322 = state_25086__$1;
(statearr_25098_26322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (15))){
var inst_25031 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25031)){
var statearr_25099_26323 = state_25086__$1;
(statearr_25099_26323[(1)] = (19));

} else {
var statearr_25100_26324 = state_25086__$1;
(statearr_25100_26324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (21))){
var inst_25036 = (state_25086[(12)]);
var inst_25036__$1 = (state_25086[(2)]);
var inst_25037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25036__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25036__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25036__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25086__$1 = (function (){var statearr_25101 = state_25086;
(statearr_25101[(9)] = inst_25037);

(statearr_25101[(12)] = inst_25036__$1);

(statearr_25101[(13)] = inst_25038);

return statearr_25101;
})();
return cljs.core.async.ioc_alts_BANG_(state_25086__$1,(22),inst_25039);
} else {
if((state_val_25087 === (31))){
var inst_25068 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25068)){
var statearr_25102_26334 = state_25086__$1;
(statearr_25102_26334[(1)] = (32));

} else {
var statearr_25103_26335 = state_25086__$1;
(statearr_25103_26335[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (32))){
var inst_25045 = (state_25086[(14)]);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25086__$1,(35),out,inst_25045);
} else {
if((state_val_25087 === (33))){
var inst_25036 = (state_25086[(12)]);
var inst_25013 = inst_25036;
var state_25086__$1 = (function (){var statearr_25104 = state_25086;
(statearr_25104[(7)] = inst_25013);

return statearr_25104;
})();
var statearr_25105_26336 = state_25086__$1;
(statearr_25105_26336[(2)] = null);

(statearr_25105_26336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (13))){
var inst_25013 = (state_25086[(7)]);
var inst_25020 = inst_25013.cljs$lang$protocol_mask$partition0$;
var inst_25021 = (inst_25020 & (64));
var inst_25022 = inst_25013.cljs$core$ISeq$;
var inst_25023 = (cljs.core.PROTOCOL_SENTINEL === inst_25022);
var inst_25024 = ((inst_25021) || (inst_25023));
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25024)){
var statearr_25106_26337 = state_25086__$1;
(statearr_25106_26337[(1)] = (16));

} else {
var statearr_25107_26338 = state_25086__$1;
(statearr_25107_26338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (22))){
var inst_25046 = (state_25086[(11)]);
var inst_25045 = (state_25086[(14)]);
var inst_25044 = (state_25086[(2)]);
var inst_25045__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25044,(0),null);
var inst_25046__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25044,(1),null);
var inst_25047 = (inst_25045__$1 == null);
var inst_25048 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25046__$1,change);
var inst_25049 = ((inst_25047) || (inst_25048));
var state_25086__$1 = (function (){var statearr_25108 = state_25086;
(statearr_25108[(11)] = inst_25046__$1);

(statearr_25108[(14)] = inst_25045__$1);

return statearr_25108;
})();
if(cljs.core.truth_(inst_25049)){
var statearr_25109_26340 = state_25086__$1;
(statearr_25109_26340[(1)] = (23));

} else {
var statearr_25110_26341 = state_25086__$1;
(statearr_25110_26341[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (36))){
var inst_25036 = (state_25086[(12)]);
var inst_25013 = inst_25036;
var state_25086__$1 = (function (){var statearr_25111 = state_25086;
(statearr_25111[(7)] = inst_25013);

return statearr_25111;
})();
var statearr_25112_26345 = state_25086__$1;
(statearr_25112_26345[(2)] = null);

(statearr_25112_26345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (29))){
var inst_25060 = (state_25086[(10)]);
var state_25086__$1 = state_25086;
var statearr_25113_26346 = state_25086__$1;
(statearr_25113_26346[(2)] = inst_25060);

(statearr_25113_26346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (6))){
var state_25086__$1 = state_25086;
var statearr_25114_26349 = state_25086__$1;
(statearr_25114_26349[(2)] = false);

(statearr_25114_26349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (28))){
var inst_25056 = (state_25086[(2)]);
var inst_25057 = calc_state();
var inst_25013 = inst_25057;
var state_25086__$1 = (function (){var statearr_25115 = state_25086;
(statearr_25115[(7)] = inst_25013);

(statearr_25115[(15)] = inst_25056);

return statearr_25115;
})();
var statearr_25116_26350 = state_25086__$1;
(statearr_25116_26350[(2)] = null);

(statearr_25116_26350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (25))){
var inst_25082 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25117_26352 = state_25086__$1;
(statearr_25117_26352[(2)] = inst_25082);

(statearr_25117_26352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (34))){
var inst_25080 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25118_26353 = state_25086__$1;
(statearr_25118_26353[(2)] = inst_25080);

(statearr_25118_26353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (17))){
var state_25086__$1 = state_25086;
var statearr_25119_26354 = state_25086__$1;
(statearr_25119_26354[(2)] = false);

(statearr_25119_26354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (3))){
var state_25086__$1 = state_25086;
var statearr_25120_26355 = state_25086__$1;
(statearr_25120_26355[(2)] = false);

(statearr_25120_26355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (12))){
var inst_25084 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25086__$1,inst_25084);
} else {
if((state_val_25087 === (2))){
var inst_24988 = (state_25086[(8)]);
var inst_24993 = inst_24988.cljs$lang$protocol_mask$partition0$;
var inst_24994 = (inst_24993 & (64));
var inst_24995 = inst_24988.cljs$core$ISeq$;
var inst_24996 = (cljs.core.PROTOCOL_SENTINEL === inst_24995);
var inst_24997 = ((inst_24994) || (inst_24996));
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_24997)){
var statearr_25121_26357 = state_25086__$1;
(statearr_25121_26357[(1)] = (5));

} else {
var statearr_25122_26358 = state_25086__$1;
(statearr_25122_26358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (23))){
var inst_25045 = (state_25086[(14)]);
var inst_25051 = (inst_25045 == null);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25051)){
var statearr_25123_26359 = state_25086__$1;
(statearr_25123_26359[(1)] = (26));

} else {
var statearr_25124_26360 = state_25086__$1;
(statearr_25124_26360[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (35))){
var inst_25071 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
if(cljs.core.truth_(inst_25071)){
var statearr_25125_26361 = state_25086__$1;
(statearr_25125_26361[(1)] = (36));

} else {
var statearr_25126_26362 = state_25086__$1;
(statearr_25126_26362[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (19))){
var inst_25013 = (state_25086[(7)]);
var inst_25033 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25013);
var state_25086__$1 = state_25086;
var statearr_25127_26364 = state_25086__$1;
(statearr_25127_26364[(2)] = inst_25033);

(statearr_25127_26364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (11))){
var inst_25013 = (state_25086[(7)]);
var inst_25017 = (inst_25013 == null);
var inst_25018 = cljs.core.not(inst_25017);
var state_25086__$1 = state_25086;
if(inst_25018){
var statearr_25128_26365 = state_25086__$1;
(statearr_25128_26365[(1)] = (13));

} else {
var statearr_25129_26366 = state_25086__$1;
(statearr_25129_26366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (9))){
var inst_24988 = (state_25086[(8)]);
var state_25086__$1 = state_25086;
var statearr_25130_26368 = state_25086__$1;
(statearr_25130_26368[(2)] = inst_24988);

(statearr_25130_26368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (5))){
var state_25086__$1 = state_25086;
var statearr_25131_26369 = state_25086__$1;
(statearr_25131_26369[(2)] = true);

(statearr_25131_26369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (14))){
var state_25086__$1 = state_25086;
var statearr_25132_26370 = state_25086__$1;
(statearr_25132_26370[(2)] = false);

(statearr_25132_26370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (26))){
var inst_25046 = (state_25086[(11)]);
var inst_25053 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25046);
var state_25086__$1 = state_25086;
var statearr_25133_26374 = state_25086__$1;
(statearr_25133_26374[(2)] = inst_25053);

(statearr_25133_26374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (16))){
var state_25086__$1 = state_25086;
var statearr_25134_26375 = state_25086__$1;
(statearr_25134_26375[(2)] = true);

(statearr_25134_26375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (38))){
var inst_25076 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25135_26380 = state_25086__$1;
(statearr_25135_26380[(2)] = inst_25076);

(statearr_25135_26380[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (30))){
var inst_25037 = (state_25086[(9)]);
var inst_25046 = (state_25086[(11)]);
var inst_25038 = (state_25086[(13)]);
var inst_25063 = cljs.core.empty_QMARK_(inst_25037);
var inst_25064 = (inst_25038.cljs$core$IFn$_invoke$arity$1 ? inst_25038.cljs$core$IFn$_invoke$arity$1(inst_25046) : inst_25038.call(null,inst_25046));
var inst_25065 = cljs.core.not(inst_25064);
var inst_25066 = ((inst_25063) && (inst_25065));
var state_25086__$1 = state_25086;
var statearr_25136_26384 = state_25086__$1;
(statearr_25136_26384[(2)] = inst_25066);

(statearr_25136_26384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (10))){
var inst_24988 = (state_25086[(8)]);
var inst_25009 = (state_25086[(2)]);
var inst_25010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25009,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25009,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25009,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25013 = inst_24988;
var state_25086__$1 = (function (){var statearr_25137 = state_25086;
(statearr_25137[(7)] = inst_25013);

(statearr_25137[(16)] = inst_25010);

(statearr_25137[(17)] = inst_25011);

(statearr_25137[(18)] = inst_25012);

return statearr_25137;
})();
var statearr_25138_26388 = state_25086__$1;
(statearr_25138_26388[(2)] = null);

(statearr_25138_26388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (18))){
var inst_25028 = (state_25086[(2)]);
var state_25086__$1 = state_25086;
var statearr_25139_26389 = state_25086__$1;
(statearr_25139_26389[(2)] = inst_25028);

(statearr_25139_26389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (37))){
var state_25086__$1 = state_25086;
var statearr_25140_26390 = state_25086__$1;
(statearr_25140_26390[(2)] = null);

(statearr_25140_26390[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25087 === (8))){
var inst_24988 = (state_25086[(8)]);
var inst_25006 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24988);
var state_25086__$1 = state_25086;
var statearr_25141_26392 = state_25086__$1;
(statearr_25141_26392[(2)] = inst_25006);

(statearr_25141_26392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23463__auto__,c__23565__auto___26309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23464__auto__ = null;
var cljs$core$async$mix_$_state_machine__23464__auto____0 = (function (){
var statearr_25142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25142[(0)] = cljs$core$async$mix_$_state_machine__23464__auto__);

(statearr_25142[(1)] = (1));

return statearr_25142;
});
var cljs$core$async$mix_$_state_machine__23464__auto____1 = (function (state_25086){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25086);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25143){if((e25143 instanceof Object)){
var ex__23467__auto__ = e25143;
var statearr_25144_26402 = state_25086;
(statearr_25144_26402[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26403 = state_25086;
state_25086 = G__26403;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23464__auto__ = function(state_25086){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23464__auto____1.call(this,state_25086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23464__auto____0;
cljs$core$async$mix_$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23464__auto____1;
return cljs$core$async$mix_$_state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23567__auto__ = (function (){var statearr_25145 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25145[(6)] = c__23565__auto___26309);

return statearr_25145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25147 = arguments.length;
switch (G__25147) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25150 = arguments.length;
switch (G__25150) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__25148_SHARP_){
if(cljs.core.truth_((p1__25148_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25148_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25148_SHARP_.call(null,topic)))){
return p1__25148_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25148_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25151 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25152){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25152 = meta25152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25153,meta25152__$1){
var self__ = this;
var _25153__$1 = this;
return (new cljs.core.async.t_cljs$core$async25151(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25152__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25153){
var self__ = this;
var _25153__$1 = this;
return self__.meta25152;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25151.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25152","meta25152",967044714,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25151";

cljs.core.async.t_cljs$core$async25151.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async25151");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25151.
 */
cljs.core.async.__GT_t_cljs$core$async25151 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25151(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25152){
return (new cljs.core.async.t_cljs$core$async25151(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25152));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25151(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23565__auto___26440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26440,mults,ensure_mult,p){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26440,mults,ensure_mult,p){
return (function (state_25225){
var state_val_25226 = (state_25225[(1)]);
if((state_val_25226 === (7))){
var inst_25221 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
var statearr_25227_26443 = state_25225__$1;
(statearr_25227_26443[(2)] = inst_25221);

(statearr_25227_26443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (20))){
var state_25225__$1 = state_25225;
var statearr_25228_26445 = state_25225__$1;
(statearr_25228_26445[(2)] = null);

(statearr_25228_26445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (1))){
var state_25225__$1 = state_25225;
var statearr_25229_26447 = state_25225__$1;
(statearr_25229_26447[(2)] = null);

(statearr_25229_26447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (24))){
var inst_25204 = (state_25225[(7)]);
var inst_25213 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25204);
var state_25225__$1 = state_25225;
var statearr_25230_26451 = state_25225__$1;
(statearr_25230_26451[(2)] = inst_25213);

(statearr_25230_26451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (4))){
var inst_25156 = (state_25225[(8)]);
var inst_25156__$1 = (state_25225[(2)]);
var inst_25157 = (inst_25156__$1 == null);
var state_25225__$1 = (function (){var statearr_25231 = state_25225;
(statearr_25231[(8)] = inst_25156__$1);

return statearr_25231;
})();
if(cljs.core.truth_(inst_25157)){
var statearr_25232_26452 = state_25225__$1;
(statearr_25232_26452[(1)] = (5));

} else {
var statearr_25233_26453 = state_25225__$1;
(statearr_25233_26453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (15))){
var inst_25198 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
var statearr_25234_26454 = state_25225__$1;
(statearr_25234_26454[(2)] = inst_25198);

(statearr_25234_26454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (21))){
var inst_25218 = (state_25225[(2)]);
var state_25225__$1 = (function (){var statearr_25235 = state_25225;
(statearr_25235[(9)] = inst_25218);

return statearr_25235;
})();
var statearr_25236_26455 = state_25225__$1;
(statearr_25236_26455[(2)] = null);

(statearr_25236_26455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (13))){
var inst_25180 = (state_25225[(10)]);
var inst_25182 = cljs.core.chunked_seq_QMARK_(inst_25180);
var state_25225__$1 = state_25225;
if(inst_25182){
var statearr_25237_26457 = state_25225__$1;
(statearr_25237_26457[(1)] = (16));

} else {
var statearr_25238_26458 = state_25225__$1;
(statearr_25238_26458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (22))){
var inst_25210 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
if(cljs.core.truth_(inst_25210)){
var statearr_25239_26459 = state_25225__$1;
(statearr_25239_26459[(1)] = (23));

} else {
var statearr_25240_26460 = state_25225__$1;
(statearr_25240_26460[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (6))){
var inst_25156 = (state_25225[(8)]);
var inst_25204 = (state_25225[(7)]);
var inst_25206 = (state_25225[(11)]);
var inst_25204__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25156) : topic_fn.call(null,inst_25156));
var inst_25205 = cljs.core.deref(mults);
var inst_25206__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25205,inst_25204__$1);
var state_25225__$1 = (function (){var statearr_25241 = state_25225;
(statearr_25241[(7)] = inst_25204__$1);

(statearr_25241[(11)] = inst_25206__$1);

return statearr_25241;
})();
if(cljs.core.truth_(inst_25206__$1)){
var statearr_25242_26464 = state_25225__$1;
(statearr_25242_26464[(1)] = (19));

} else {
var statearr_25243_26465 = state_25225__$1;
(statearr_25243_26465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (25))){
var inst_25215 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
var statearr_25244_26466 = state_25225__$1;
(statearr_25244_26466[(2)] = inst_25215);

(statearr_25244_26466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (17))){
var inst_25180 = (state_25225[(10)]);
var inst_25189 = cljs.core.first(inst_25180);
var inst_25190 = cljs.core.async.muxch_STAR_(inst_25189);
var inst_25191 = cljs.core.async.close_BANG_(inst_25190);
var inst_25192 = cljs.core.next(inst_25180);
var inst_25166 = inst_25192;
var inst_25167 = null;
var inst_25168 = (0);
var inst_25169 = (0);
var state_25225__$1 = (function (){var statearr_25245 = state_25225;
(statearr_25245[(12)] = inst_25168);

(statearr_25245[(13)] = inst_25166);

(statearr_25245[(14)] = inst_25191);

(statearr_25245[(15)] = inst_25167);

(statearr_25245[(16)] = inst_25169);

return statearr_25245;
})();
var statearr_25246_26469 = state_25225__$1;
(statearr_25246_26469[(2)] = null);

(statearr_25246_26469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (3))){
var inst_25223 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25225__$1,inst_25223);
} else {
if((state_val_25226 === (12))){
var inst_25200 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
var statearr_25247_26470 = state_25225__$1;
(statearr_25247_26470[(2)] = inst_25200);

(statearr_25247_26470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (2))){
var state_25225__$1 = state_25225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25225__$1,(4),ch);
} else {
if((state_val_25226 === (23))){
var state_25225__$1 = state_25225;
var statearr_25248_26471 = state_25225__$1;
(statearr_25248_26471[(2)] = null);

(statearr_25248_26471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (19))){
var inst_25156 = (state_25225[(8)]);
var inst_25206 = (state_25225[(11)]);
var inst_25208 = cljs.core.async.muxch_STAR_(inst_25206);
var state_25225__$1 = state_25225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25225__$1,(22),inst_25208,inst_25156);
} else {
if((state_val_25226 === (11))){
var inst_25166 = (state_25225[(13)]);
var inst_25180 = (state_25225[(10)]);
var inst_25180__$1 = cljs.core.seq(inst_25166);
var state_25225__$1 = (function (){var statearr_25249 = state_25225;
(statearr_25249[(10)] = inst_25180__$1);

return statearr_25249;
})();
if(inst_25180__$1){
var statearr_25250_26473 = state_25225__$1;
(statearr_25250_26473[(1)] = (13));

} else {
var statearr_25251_26475 = state_25225__$1;
(statearr_25251_26475[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (9))){
var inst_25202 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
var statearr_25252_26476 = state_25225__$1;
(statearr_25252_26476[(2)] = inst_25202);

(statearr_25252_26476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (5))){
var inst_25163 = cljs.core.deref(mults);
var inst_25164 = cljs.core.vals(inst_25163);
var inst_25165 = cljs.core.seq(inst_25164);
var inst_25166 = inst_25165;
var inst_25167 = null;
var inst_25168 = (0);
var inst_25169 = (0);
var state_25225__$1 = (function (){var statearr_25253 = state_25225;
(statearr_25253[(12)] = inst_25168);

(statearr_25253[(13)] = inst_25166);

(statearr_25253[(15)] = inst_25167);

(statearr_25253[(16)] = inst_25169);

return statearr_25253;
})();
var statearr_25254_26478 = state_25225__$1;
(statearr_25254_26478[(2)] = null);

(statearr_25254_26478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (14))){
var state_25225__$1 = state_25225;
var statearr_25258_26479 = state_25225__$1;
(statearr_25258_26479[(2)] = null);

(statearr_25258_26479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (16))){
var inst_25180 = (state_25225[(10)]);
var inst_25184 = cljs.core.chunk_first(inst_25180);
var inst_25185 = cljs.core.chunk_rest(inst_25180);
var inst_25186 = cljs.core.count(inst_25184);
var inst_25166 = inst_25185;
var inst_25167 = inst_25184;
var inst_25168 = inst_25186;
var inst_25169 = (0);
var state_25225__$1 = (function (){var statearr_25259 = state_25225;
(statearr_25259[(12)] = inst_25168);

(statearr_25259[(13)] = inst_25166);

(statearr_25259[(15)] = inst_25167);

(statearr_25259[(16)] = inst_25169);

return statearr_25259;
})();
var statearr_25260_26481 = state_25225__$1;
(statearr_25260_26481[(2)] = null);

(statearr_25260_26481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (10))){
var inst_25168 = (state_25225[(12)]);
var inst_25166 = (state_25225[(13)]);
var inst_25167 = (state_25225[(15)]);
var inst_25169 = (state_25225[(16)]);
var inst_25174 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25167,inst_25169);
var inst_25175 = cljs.core.async.muxch_STAR_(inst_25174);
var inst_25176 = cljs.core.async.close_BANG_(inst_25175);
var inst_25177 = (inst_25169 + (1));
var tmp25255 = inst_25168;
var tmp25256 = inst_25166;
var tmp25257 = inst_25167;
var inst_25166__$1 = tmp25256;
var inst_25167__$1 = tmp25257;
var inst_25168__$1 = tmp25255;
var inst_25169__$1 = inst_25177;
var state_25225__$1 = (function (){var statearr_25261 = state_25225;
(statearr_25261[(12)] = inst_25168__$1);

(statearr_25261[(13)] = inst_25166__$1);

(statearr_25261[(15)] = inst_25167__$1);

(statearr_25261[(16)] = inst_25169__$1);

(statearr_25261[(17)] = inst_25176);

return statearr_25261;
})();
var statearr_25262_26483 = state_25225__$1;
(statearr_25262_26483[(2)] = null);

(statearr_25262_26483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (18))){
var inst_25195 = (state_25225[(2)]);
var state_25225__$1 = state_25225;
var statearr_25263_26484 = state_25225__$1;
(statearr_25263_26484[(2)] = inst_25195);

(statearr_25263_26484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25226 === (8))){
var inst_25168 = (state_25225[(12)]);
var inst_25169 = (state_25225[(16)]);
var inst_25171 = (inst_25169 < inst_25168);
var inst_25172 = inst_25171;
var state_25225__$1 = state_25225;
if(cljs.core.truth_(inst_25172)){
var statearr_25264_26485 = state_25225__$1;
(statearr_25264_26485[(1)] = (10));

} else {
var statearr_25265_26487 = state_25225__$1;
(statearr_25265_26487[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26440,mults,ensure_mult,p))
;
return ((function (switch__23463__auto__,c__23565__auto___26440,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_25266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25266[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_25266[(1)] = (1));

return statearr_25266;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_25225){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25225);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25267){if((e25267 instanceof Object)){
var ex__23467__auto__ = e25267;
var statearr_25268_26488 = state_25225;
(statearr_25268_26488[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26489 = state_25225;
state_25225 = G__26489;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_25225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_25225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26440,mults,ensure_mult,p))
})();
var state__23567__auto__ = (function (){var statearr_25269 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25269[(6)] = c__23565__auto___26440);

return statearr_25269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26440,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25271 = arguments.length;
switch (G__25271) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25273 = arguments.length;
switch (G__25273) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25275 = arguments.length;
switch (G__25275) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__23565__auto___26513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25314){
var state_val_25315 = (state_25314[(1)]);
if((state_val_25315 === (7))){
var state_25314__$1 = state_25314;
var statearr_25316_26515 = state_25314__$1;
(statearr_25316_26515[(2)] = null);

(statearr_25316_26515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (1))){
var state_25314__$1 = state_25314;
var statearr_25317_26516 = state_25314__$1;
(statearr_25317_26516[(2)] = null);

(statearr_25317_26516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (4))){
var inst_25278 = (state_25314[(7)]);
var inst_25280 = (inst_25278 < cnt);
var state_25314__$1 = state_25314;
if(cljs.core.truth_(inst_25280)){
var statearr_25318_26517 = state_25314__$1;
(statearr_25318_26517[(1)] = (6));

} else {
var statearr_25319_26518 = state_25314__$1;
(statearr_25319_26518[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (15))){
var inst_25310 = (state_25314[(2)]);
var state_25314__$1 = state_25314;
var statearr_25320_26519 = state_25314__$1;
(statearr_25320_26519[(2)] = inst_25310);

(statearr_25320_26519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (13))){
var inst_25303 = cljs.core.async.close_BANG_(out);
var state_25314__$1 = state_25314;
var statearr_25321_26520 = state_25314__$1;
(statearr_25321_26520[(2)] = inst_25303);

(statearr_25321_26520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (6))){
var state_25314__$1 = state_25314;
var statearr_25322_26521 = state_25314__$1;
(statearr_25322_26521[(2)] = null);

(statearr_25322_26521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (3))){
var inst_25312 = (state_25314[(2)]);
var state_25314__$1 = state_25314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25314__$1,inst_25312);
} else {
if((state_val_25315 === (12))){
var inst_25300 = (state_25314[(8)]);
var inst_25300__$1 = (state_25314[(2)]);
var inst_25301 = cljs.core.some(cljs.core.nil_QMARK_,inst_25300__$1);
var state_25314__$1 = (function (){var statearr_25323 = state_25314;
(statearr_25323[(8)] = inst_25300__$1);

return statearr_25323;
})();
if(cljs.core.truth_(inst_25301)){
var statearr_25324_26522 = state_25314__$1;
(statearr_25324_26522[(1)] = (13));

} else {
var statearr_25325_26527 = state_25314__$1;
(statearr_25325_26527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (2))){
var inst_25277 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25278 = (0);
var state_25314__$1 = (function (){var statearr_25326 = state_25314;
(statearr_25326[(7)] = inst_25278);

(statearr_25326[(9)] = inst_25277);

return statearr_25326;
})();
var statearr_25327_26535 = state_25314__$1;
(statearr_25327_26535[(2)] = null);

(statearr_25327_26535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (11))){
var inst_25278 = (state_25314[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25314,(10),Object,null,(9));
var inst_25287 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25278) : chs__$1.call(null,inst_25278));
var inst_25288 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25278) : done.call(null,inst_25278));
var inst_25289 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25287,inst_25288);
var state_25314__$1 = state_25314;
var statearr_25328_26544 = state_25314__$1;
(statearr_25328_26544[(2)] = inst_25289);


cljs.core.async.impl.ioc_helpers.process_exception(state_25314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (9))){
var inst_25278 = (state_25314[(7)]);
var inst_25291 = (state_25314[(2)]);
var inst_25292 = (inst_25278 + (1));
var inst_25278__$1 = inst_25292;
var state_25314__$1 = (function (){var statearr_25329 = state_25314;
(statearr_25329[(10)] = inst_25291);

(statearr_25329[(7)] = inst_25278__$1);

return statearr_25329;
})();
var statearr_25330_26548 = state_25314__$1;
(statearr_25330_26548[(2)] = null);

(statearr_25330_26548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (5))){
var inst_25298 = (state_25314[(2)]);
var state_25314__$1 = (function (){var statearr_25331 = state_25314;
(statearr_25331[(11)] = inst_25298);

return statearr_25331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25314__$1,(12),dchan);
} else {
if((state_val_25315 === (14))){
var inst_25300 = (state_25314[(8)]);
var inst_25305 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25300);
var state_25314__$1 = state_25314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25314__$1,(16),out,inst_25305);
} else {
if((state_val_25315 === (16))){
var inst_25307 = (state_25314[(2)]);
var state_25314__$1 = (function (){var statearr_25332 = state_25314;
(statearr_25332[(12)] = inst_25307);

return statearr_25332;
})();
var statearr_25333_26560 = state_25314__$1;
(statearr_25333_26560[(2)] = null);

(statearr_25333_26560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (10))){
var inst_25282 = (state_25314[(2)]);
var inst_25283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25314__$1 = (function (){var statearr_25334 = state_25314;
(statearr_25334[(13)] = inst_25282);

return statearr_25334;
})();
var statearr_25335_26566 = state_25314__$1;
(statearr_25335_26566[(2)] = inst_25283);


cljs.core.async.impl.ioc_helpers.process_exception(state_25314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25315 === (8))){
var inst_25296 = (state_25314[(2)]);
var state_25314__$1 = state_25314;
var statearr_25336_26571 = state_25314__$1;
(statearr_25336_26571[(2)] = inst_25296);

(statearr_25336_26571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23463__auto__,c__23565__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_25337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25337[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_25337[(1)] = (1));

return statearr_25337;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_25314){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25314);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25338){if((e25338 instanceof Object)){
var ex__23467__auto__ = e25338;
var statearr_25339_26576 = state_25314;
(statearr_25339_26576[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26577 = state_25314;
state_25314 = G__26577;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_25314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_25314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23567__auto__ = (function (){var statearr_25340 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25340[(6)] = c__23565__auto___26513);

return statearr_25340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25343 = arguments.length;
switch (G__25343) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23565__auto___26580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26580,out){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26580,out){
return (function (state_25375){
var state_val_25376 = (state_25375[(1)]);
if((state_val_25376 === (7))){
var inst_25355 = (state_25375[(7)]);
var inst_25354 = (state_25375[(8)]);
var inst_25354__$1 = (state_25375[(2)]);
var inst_25355__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25354__$1,(0),null);
var inst_25356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25354__$1,(1),null);
var inst_25357 = (inst_25355__$1 == null);
var state_25375__$1 = (function (){var statearr_25377 = state_25375;
(statearr_25377[(9)] = inst_25356);

(statearr_25377[(7)] = inst_25355__$1);

(statearr_25377[(8)] = inst_25354__$1);

return statearr_25377;
})();
if(cljs.core.truth_(inst_25357)){
var statearr_25378_26582 = state_25375__$1;
(statearr_25378_26582[(1)] = (8));

} else {
var statearr_25379_26583 = state_25375__$1;
(statearr_25379_26583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25376 === (1))){
var inst_25344 = cljs.core.vec(chs);
var inst_25345 = inst_25344;
var state_25375__$1 = (function (){var statearr_25380 = state_25375;
(statearr_25380[(10)] = inst_25345);

return statearr_25380;
})();
var statearr_25381_26585 = state_25375__$1;
(statearr_25381_26585[(2)] = null);

(statearr_25381_26585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25376 === (4))){
var inst_25345 = (state_25375[(10)]);
var state_25375__$1 = state_25375;
return cljs.core.async.ioc_alts_BANG_(state_25375__$1,(7),inst_25345);
} else {
if((state_val_25376 === (6))){
var inst_25371 = (state_25375[(2)]);
var state_25375__$1 = state_25375;
var statearr_25382_26587 = state_25375__$1;
(statearr_25382_26587[(2)] = inst_25371);

(statearr_25382_26587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25376 === (3))){
var inst_25373 = (state_25375[(2)]);
var state_25375__$1 = state_25375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25375__$1,inst_25373);
} else {
if((state_val_25376 === (2))){
var inst_25345 = (state_25375[(10)]);
var inst_25347 = cljs.core.count(inst_25345);
var inst_25348 = (inst_25347 > (0));
var state_25375__$1 = state_25375;
if(cljs.core.truth_(inst_25348)){
var statearr_25384_26589 = state_25375__$1;
(statearr_25384_26589[(1)] = (4));

} else {
var statearr_25385_26590 = state_25375__$1;
(statearr_25385_26590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25376 === (11))){
var inst_25345 = (state_25375[(10)]);
var inst_25364 = (state_25375[(2)]);
var tmp25383 = inst_25345;
var inst_25345__$1 = tmp25383;
var state_25375__$1 = (function (){var statearr_25386 = state_25375;
(statearr_25386[(11)] = inst_25364);

(statearr_25386[(10)] = inst_25345__$1);

return statearr_25386;
})();
var statearr_25387_26592 = state_25375__$1;
(statearr_25387_26592[(2)] = null);

(statearr_25387_26592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25376 === (9))){
var inst_25355 = (state_25375[(7)]);
var state_25375__$1 = state_25375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25375__$1,(11),out,inst_25355);
} else {
if((state_val_25376 === (5))){
var inst_25369 = cljs.core.async.close_BANG_(out);
var state_25375__$1 = state_25375;
var statearr_25388_26595 = state_25375__$1;
(statearr_25388_26595[(2)] = inst_25369);

(statearr_25388_26595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25376 === (10))){
var inst_25367 = (state_25375[(2)]);
var state_25375__$1 = state_25375;
var statearr_25389_26598 = state_25375__$1;
(statearr_25389_26598[(2)] = inst_25367);

(statearr_25389_26598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25376 === (8))){
var inst_25356 = (state_25375[(9)]);
var inst_25345 = (state_25375[(10)]);
var inst_25355 = (state_25375[(7)]);
var inst_25354 = (state_25375[(8)]);
var inst_25359 = (function (){var cs = inst_25345;
var vec__25350 = inst_25354;
var v = inst_25355;
var c = inst_25356;
return ((function (cs,vec__25350,v,c,inst_25356,inst_25345,inst_25355,inst_25354,state_val_25376,c__23565__auto___26580,out){
return (function (p1__25341_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25341_SHARP_);
});
;})(cs,vec__25350,v,c,inst_25356,inst_25345,inst_25355,inst_25354,state_val_25376,c__23565__auto___26580,out))
})();
var inst_25360 = cljs.core.filterv(inst_25359,inst_25345);
var inst_25345__$1 = inst_25360;
var state_25375__$1 = (function (){var statearr_25390 = state_25375;
(statearr_25390[(10)] = inst_25345__$1);

return statearr_25390;
})();
var statearr_25391_26600 = state_25375__$1;
(statearr_25391_26600[(2)] = null);

(statearr_25391_26600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26580,out))
;
return ((function (switch__23463__auto__,c__23565__auto___26580,out){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_25392 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25392[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_25392[(1)] = (1));

return statearr_25392;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_25375){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25375);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25393){if((e25393 instanceof Object)){
var ex__23467__auto__ = e25393;
var statearr_25394_26605 = state_25375;
(statearr_25394_26605[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26608 = state_25375;
state_25375 = G__26608;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_25375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_25375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26580,out))
})();
var state__23567__auto__ = (function (){var statearr_25395 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25395[(6)] = c__23565__auto___26580);

return statearr_25395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26580,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25397 = arguments.length;
switch (G__25397) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23565__auto___26637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26637,out){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26637,out){
return (function (state_25421){
var state_val_25422 = (state_25421[(1)]);
if((state_val_25422 === (7))){
var inst_25403 = (state_25421[(7)]);
var inst_25403__$1 = (state_25421[(2)]);
var inst_25404 = (inst_25403__$1 == null);
var inst_25405 = cljs.core.not(inst_25404);
var state_25421__$1 = (function (){var statearr_25423 = state_25421;
(statearr_25423[(7)] = inst_25403__$1);

return statearr_25423;
})();
if(inst_25405){
var statearr_25424_26650 = state_25421__$1;
(statearr_25424_26650[(1)] = (8));

} else {
var statearr_25425_26655 = state_25421__$1;
(statearr_25425_26655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (1))){
var inst_25398 = (0);
var state_25421__$1 = (function (){var statearr_25426 = state_25421;
(statearr_25426[(8)] = inst_25398);

return statearr_25426;
})();
var statearr_25427_26662 = state_25421__$1;
(statearr_25427_26662[(2)] = null);

(statearr_25427_26662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (4))){
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25421__$1,(7),ch);
} else {
if((state_val_25422 === (6))){
var inst_25416 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
var statearr_25428_26664 = state_25421__$1;
(statearr_25428_26664[(2)] = inst_25416);

(statearr_25428_26664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (3))){
var inst_25418 = (state_25421[(2)]);
var inst_25419 = cljs.core.async.close_BANG_(out);
var state_25421__$1 = (function (){var statearr_25429 = state_25421;
(statearr_25429[(9)] = inst_25418);

return statearr_25429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25421__$1,inst_25419);
} else {
if((state_val_25422 === (2))){
var inst_25398 = (state_25421[(8)]);
var inst_25400 = (inst_25398 < n);
var state_25421__$1 = state_25421;
if(cljs.core.truth_(inst_25400)){
var statearr_25430_26682 = state_25421__$1;
(statearr_25430_26682[(1)] = (4));

} else {
var statearr_25431_26684 = state_25421__$1;
(statearr_25431_26684[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (11))){
var inst_25398 = (state_25421[(8)]);
var inst_25408 = (state_25421[(2)]);
var inst_25409 = (inst_25398 + (1));
var inst_25398__$1 = inst_25409;
var state_25421__$1 = (function (){var statearr_25432 = state_25421;
(statearr_25432[(10)] = inst_25408);

(statearr_25432[(8)] = inst_25398__$1);

return statearr_25432;
})();
var statearr_25433_26697 = state_25421__$1;
(statearr_25433_26697[(2)] = null);

(statearr_25433_26697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (9))){
var state_25421__$1 = state_25421;
var statearr_25434_26698 = state_25421__$1;
(statearr_25434_26698[(2)] = null);

(statearr_25434_26698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (5))){
var state_25421__$1 = state_25421;
var statearr_25435_26701 = state_25421__$1;
(statearr_25435_26701[(2)] = null);

(statearr_25435_26701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (10))){
var inst_25413 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
var statearr_25436_26703 = state_25421__$1;
(statearr_25436_26703[(2)] = inst_25413);

(statearr_25436_26703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25422 === (8))){
var inst_25403 = (state_25421[(7)]);
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25421__$1,(11),out,inst_25403);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26637,out))
;
return ((function (switch__23463__auto__,c__23565__auto___26637,out){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_25437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25437[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_25437[(1)] = (1));

return statearr_25437;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_25421){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25421);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25438){if((e25438 instanceof Object)){
var ex__23467__auto__ = e25438;
var statearr_25439_26706 = state_25421;
(statearr_25439_26706[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26708 = state_25421;
state_25421 = G__26708;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_25421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_25421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26637,out))
})();
var state__23567__auto__ = (function (){var statearr_25440 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25440[(6)] = c__23565__auto___26637);

return statearr_25440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26637,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25442 = (function (f,ch,meta25443){
this.f = f;
this.ch = ch;
this.meta25443 = meta25443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25444,meta25443__$1){
var self__ = this;
var _25444__$1 = this;
return (new cljs.core.async.t_cljs$core$async25442(self__.f,self__.ch,meta25443__$1));
});

cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25444){
var self__ = this;
var _25444__$1 = this;
return self__.meta25443;
});

cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25445 = (function (f,ch,meta25443,_,fn1,meta25446){
this.f = f;
this.ch = ch;
this.meta25443 = meta25443;
this._ = _;
this.fn1 = fn1;
this.meta25446 = meta25446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25447,meta25446__$1){
var self__ = this;
var _25447__$1 = this;
return (new cljs.core.async.t_cljs$core$async25445(self__.f,self__.ch,self__.meta25443,self__._,self__.fn1,meta25446__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25447){
var self__ = this;
var _25447__$1 = this;
return self__.meta25446;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25445.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25441_SHARP_){
var G__25448 = (((p1__25441_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25441_SHARP_) : self__.f.call(null,p1__25441_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25448) : f1.call(null,G__25448));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25445.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25443","meta25443",-465763000,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25442","cljs.core.async/t_cljs$core$async25442",30168752,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25446","meta25446",95983966,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25445";

cljs.core.async.t_cljs$core$async25445.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async25445");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25445.
 */
cljs.core.async.__GT_t_cljs$core$async25445 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25445(f__$1,ch__$1,meta25443__$1,___$2,fn1__$1,meta25446){
return (new cljs.core.async.t_cljs$core$async25445(f__$1,ch__$1,meta25443__$1,___$2,fn1__$1,meta25446));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25445(self__.f,self__.ch,self__.meta25443,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25449 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25449) : self__.f.call(null,G__25449));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25443","meta25443",-465763000,null)], null);
});

cljs.core.async.t_cljs$core$async25442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25442";

cljs.core.async.t_cljs$core$async25442.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async25442");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25442.
 */
cljs.core.async.__GT_t_cljs$core$async25442 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25442(f__$1,ch__$1,meta25443){
return (new cljs.core.async.t_cljs$core$async25442(f__$1,ch__$1,meta25443));
});

}

return (new cljs.core.async.t_cljs$core$async25442(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25450 = (function (f,ch,meta25451){
this.f = f;
this.ch = ch;
this.meta25451 = meta25451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25452,meta25451__$1){
var self__ = this;
var _25452__$1 = this;
return (new cljs.core.async.t_cljs$core$async25450(self__.f,self__.ch,meta25451__$1));
});

cljs.core.async.t_cljs$core$async25450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25452){
var self__ = this;
var _25452__$1 = this;
return self__.meta25451;
});

cljs.core.async.t_cljs$core$async25450.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25450.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25450.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async25450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25451","meta25451",1167554147,null)], null);
});

cljs.core.async.t_cljs$core$async25450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25450";

cljs.core.async.t_cljs$core$async25450.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async25450");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25450.
 */
cljs.core.async.__GT_t_cljs$core$async25450 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25450(f__$1,ch__$1,meta25451){
return (new cljs.core.async.t_cljs$core$async25450(f__$1,ch__$1,meta25451));
});

}

return (new cljs.core.async.t_cljs$core$async25450(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25453 = (function (p,ch,meta25454){
this.p = p;
this.ch = ch;
this.meta25454 = meta25454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25455,meta25454__$1){
var self__ = this;
var _25455__$1 = this;
return (new cljs.core.async.t_cljs$core$async25453(self__.p,self__.ch,meta25454__$1));
});

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25455){
var self__ = this;
var _25455__$1 = this;
return self__.meta25454;
});

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25454","meta25454",625888105,null)], null);
});

cljs.core.async.t_cljs$core$async25453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25453";

cljs.core.async.t_cljs$core$async25453.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async25453");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25453.
 */
cljs.core.async.__GT_t_cljs$core$async25453 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25453(p__$1,ch__$1,meta25454){
return (new cljs.core.async.t_cljs$core$async25453(p__$1,ch__$1,meta25454));
});

}

return (new cljs.core.async.t_cljs$core$async25453(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25457 = arguments.length;
switch (G__25457) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23565__auto___26801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26801,out){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26801,out){
return (function (state_25478){
var state_val_25479 = (state_25478[(1)]);
if((state_val_25479 === (7))){
var inst_25474 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25480_26802 = state_25478__$1;
(statearr_25480_26802[(2)] = inst_25474);

(statearr_25480_26802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (1))){
var state_25478__$1 = state_25478;
var statearr_25481_26804 = state_25478__$1;
(statearr_25481_26804[(2)] = null);

(statearr_25481_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (4))){
var inst_25460 = (state_25478[(7)]);
var inst_25460__$1 = (state_25478[(2)]);
var inst_25461 = (inst_25460__$1 == null);
var state_25478__$1 = (function (){var statearr_25482 = state_25478;
(statearr_25482[(7)] = inst_25460__$1);

return statearr_25482;
})();
if(cljs.core.truth_(inst_25461)){
var statearr_25483_26816 = state_25478__$1;
(statearr_25483_26816[(1)] = (5));

} else {
var statearr_25484_26817 = state_25478__$1;
(statearr_25484_26817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (6))){
var inst_25460 = (state_25478[(7)]);
var inst_25465 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25460) : p.call(null,inst_25460));
var state_25478__$1 = state_25478;
if(cljs.core.truth_(inst_25465)){
var statearr_25485_26825 = state_25478__$1;
(statearr_25485_26825[(1)] = (8));

} else {
var statearr_25486_26826 = state_25478__$1;
(statearr_25486_26826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (3))){
var inst_25476 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25478__$1,inst_25476);
} else {
if((state_val_25479 === (2))){
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25478__$1,(4),ch);
} else {
if((state_val_25479 === (11))){
var inst_25468 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25487_26827 = state_25478__$1;
(statearr_25487_26827[(2)] = inst_25468);

(statearr_25487_26827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (9))){
var state_25478__$1 = state_25478;
var statearr_25488_26829 = state_25478__$1;
(statearr_25488_26829[(2)] = null);

(statearr_25488_26829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (5))){
var inst_25463 = cljs.core.async.close_BANG_(out);
var state_25478__$1 = state_25478;
var statearr_25489_26830 = state_25478__$1;
(statearr_25489_26830[(2)] = inst_25463);

(statearr_25489_26830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (10))){
var inst_25471 = (state_25478[(2)]);
var state_25478__$1 = (function (){var statearr_25490 = state_25478;
(statearr_25490[(8)] = inst_25471);

return statearr_25490;
})();
var statearr_25491_26831 = state_25478__$1;
(statearr_25491_26831[(2)] = null);

(statearr_25491_26831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (8))){
var inst_25460 = (state_25478[(7)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25478__$1,(11),out,inst_25460);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26801,out))
;
return ((function (switch__23463__auto__,c__23565__auto___26801,out){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_25492 = [null,null,null,null,null,null,null,null,null];
(statearr_25492[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_25492[(1)] = (1));

return statearr_25492;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_25478){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25478);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25493){if((e25493 instanceof Object)){
var ex__23467__auto__ = e25493;
var statearr_25494_26836 = state_25478;
(statearr_25494_26836[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26837 = state_25478;
state_25478 = G__26837;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_25478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_25478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26801,out))
})();
var state__23567__auto__ = (function (){var statearr_25495 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25495[(6)] = c__23565__auto___26801);

return statearr_25495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26801,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25497 = arguments.length;
switch (G__25497) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto__){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto__){
return (function (state_25559){
var state_val_25560 = (state_25559[(1)]);
if((state_val_25560 === (7))){
var inst_25555 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25561_26843 = state_25559__$1;
(statearr_25561_26843[(2)] = inst_25555);

(statearr_25561_26843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (20))){
var inst_25525 = (state_25559[(7)]);
var inst_25536 = (state_25559[(2)]);
var inst_25537 = cljs.core.next(inst_25525);
var inst_25511 = inst_25537;
var inst_25512 = null;
var inst_25513 = (0);
var inst_25514 = (0);
var state_25559__$1 = (function (){var statearr_25562 = state_25559;
(statearr_25562[(8)] = inst_25513);

(statearr_25562[(9)] = inst_25512);

(statearr_25562[(10)] = inst_25536);

(statearr_25562[(11)] = inst_25514);

(statearr_25562[(12)] = inst_25511);

return statearr_25562;
})();
var statearr_25563_26845 = state_25559__$1;
(statearr_25563_26845[(2)] = null);

(statearr_25563_26845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (1))){
var state_25559__$1 = state_25559;
var statearr_25564_26846 = state_25559__$1;
(statearr_25564_26846[(2)] = null);

(statearr_25564_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (4))){
var inst_25500 = (state_25559[(13)]);
var inst_25500__$1 = (state_25559[(2)]);
var inst_25501 = (inst_25500__$1 == null);
var state_25559__$1 = (function (){var statearr_25565 = state_25559;
(statearr_25565[(13)] = inst_25500__$1);

return statearr_25565;
})();
if(cljs.core.truth_(inst_25501)){
var statearr_25566_26850 = state_25559__$1;
(statearr_25566_26850[(1)] = (5));

} else {
var statearr_25567_26851 = state_25559__$1;
(statearr_25567_26851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (15))){
var state_25559__$1 = state_25559;
var statearr_25571_26852 = state_25559__$1;
(statearr_25571_26852[(2)] = null);

(statearr_25571_26852[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (21))){
var state_25559__$1 = state_25559;
var statearr_25572_26856 = state_25559__$1;
(statearr_25572_26856[(2)] = null);

(statearr_25572_26856[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (13))){
var inst_25513 = (state_25559[(8)]);
var inst_25512 = (state_25559[(9)]);
var inst_25514 = (state_25559[(11)]);
var inst_25511 = (state_25559[(12)]);
var inst_25521 = (state_25559[(2)]);
var inst_25522 = (inst_25514 + (1));
var tmp25568 = inst_25513;
var tmp25569 = inst_25512;
var tmp25570 = inst_25511;
var inst_25511__$1 = tmp25570;
var inst_25512__$1 = tmp25569;
var inst_25513__$1 = tmp25568;
var inst_25514__$1 = inst_25522;
var state_25559__$1 = (function (){var statearr_25573 = state_25559;
(statearr_25573[(8)] = inst_25513__$1);

(statearr_25573[(9)] = inst_25512__$1);

(statearr_25573[(14)] = inst_25521);

(statearr_25573[(11)] = inst_25514__$1);

(statearr_25573[(12)] = inst_25511__$1);

return statearr_25573;
})();
var statearr_25574_26859 = state_25559__$1;
(statearr_25574_26859[(2)] = null);

(statearr_25574_26859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (22))){
var state_25559__$1 = state_25559;
var statearr_25575_26860 = state_25559__$1;
(statearr_25575_26860[(2)] = null);

(statearr_25575_26860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (6))){
var inst_25500 = (state_25559[(13)]);
var inst_25509 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25500) : f.call(null,inst_25500));
var inst_25510 = cljs.core.seq(inst_25509);
var inst_25511 = inst_25510;
var inst_25512 = null;
var inst_25513 = (0);
var inst_25514 = (0);
var state_25559__$1 = (function (){var statearr_25576 = state_25559;
(statearr_25576[(8)] = inst_25513);

(statearr_25576[(9)] = inst_25512);

(statearr_25576[(11)] = inst_25514);

(statearr_25576[(12)] = inst_25511);

return statearr_25576;
})();
var statearr_25577_26863 = state_25559__$1;
(statearr_25577_26863[(2)] = null);

(statearr_25577_26863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (17))){
var inst_25525 = (state_25559[(7)]);
var inst_25529 = cljs.core.chunk_first(inst_25525);
var inst_25530 = cljs.core.chunk_rest(inst_25525);
var inst_25531 = cljs.core.count(inst_25529);
var inst_25511 = inst_25530;
var inst_25512 = inst_25529;
var inst_25513 = inst_25531;
var inst_25514 = (0);
var state_25559__$1 = (function (){var statearr_25578 = state_25559;
(statearr_25578[(8)] = inst_25513);

(statearr_25578[(9)] = inst_25512);

(statearr_25578[(11)] = inst_25514);

(statearr_25578[(12)] = inst_25511);

return statearr_25578;
})();
var statearr_25579_26872 = state_25559__$1;
(statearr_25579_26872[(2)] = null);

(statearr_25579_26872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (3))){
var inst_25557 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25559__$1,inst_25557);
} else {
if((state_val_25560 === (12))){
var inst_25545 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25580_26878 = state_25559__$1;
(statearr_25580_26878[(2)] = inst_25545);

(statearr_25580_26878[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (2))){
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25559__$1,(4),in$);
} else {
if((state_val_25560 === (23))){
var inst_25553 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25581_26885 = state_25559__$1;
(statearr_25581_26885[(2)] = inst_25553);

(statearr_25581_26885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (19))){
var inst_25540 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25582_26889 = state_25559__$1;
(statearr_25582_26889[(2)] = inst_25540);

(statearr_25582_26889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (11))){
var inst_25525 = (state_25559[(7)]);
var inst_25511 = (state_25559[(12)]);
var inst_25525__$1 = cljs.core.seq(inst_25511);
var state_25559__$1 = (function (){var statearr_25583 = state_25559;
(statearr_25583[(7)] = inst_25525__$1);

return statearr_25583;
})();
if(inst_25525__$1){
var statearr_25584_26898 = state_25559__$1;
(statearr_25584_26898[(1)] = (14));

} else {
var statearr_25585_26902 = state_25559__$1;
(statearr_25585_26902[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (9))){
var inst_25547 = (state_25559[(2)]);
var inst_25548 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25559__$1 = (function (){var statearr_25586 = state_25559;
(statearr_25586[(15)] = inst_25547);

return statearr_25586;
})();
if(cljs.core.truth_(inst_25548)){
var statearr_25587_26903 = state_25559__$1;
(statearr_25587_26903[(1)] = (21));

} else {
var statearr_25588_26904 = state_25559__$1;
(statearr_25588_26904[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (5))){
var inst_25503 = cljs.core.async.close_BANG_(out);
var state_25559__$1 = state_25559;
var statearr_25589_26905 = state_25559__$1;
(statearr_25589_26905[(2)] = inst_25503);

(statearr_25589_26905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (14))){
var inst_25525 = (state_25559[(7)]);
var inst_25527 = cljs.core.chunked_seq_QMARK_(inst_25525);
var state_25559__$1 = state_25559;
if(inst_25527){
var statearr_25590_26906 = state_25559__$1;
(statearr_25590_26906[(1)] = (17));

} else {
var statearr_25591_26907 = state_25559__$1;
(statearr_25591_26907[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (16))){
var inst_25543 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25592_26908 = state_25559__$1;
(statearr_25592_26908[(2)] = inst_25543);

(statearr_25592_26908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (10))){
var inst_25512 = (state_25559[(9)]);
var inst_25514 = (state_25559[(11)]);
var inst_25519 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25512,inst_25514);
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25559__$1,(13),out,inst_25519);
} else {
if((state_val_25560 === (18))){
var inst_25525 = (state_25559[(7)]);
var inst_25534 = cljs.core.first(inst_25525);
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25559__$1,(20),out,inst_25534);
} else {
if((state_val_25560 === (8))){
var inst_25513 = (state_25559[(8)]);
var inst_25514 = (state_25559[(11)]);
var inst_25516 = (inst_25514 < inst_25513);
var inst_25517 = inst_25516;
var state_25559__$1 = state_25559;
if(cljs.core.truth_(inst_25517)){
var statearr_25593_26914 = state_25559__$1;
(statearr_25593_26914[(1)] = (10));

} else {
var statearr_25594_26915 = state_25559__$1;
(statearr_25594_26915[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto__))
;
return ((function (switch__23463__auto__,c__23565__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23464__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23464__auto____0 = (function (){
var statearr_25595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25595[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23464__auto__);

(statearr_25595[(1)] = (1));

return statearr_25595;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23464__auto____1 = (function (state_25559){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25559);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25596){if((e25596 instanceof Object)){
var ex__23467__auto__ = e25596;
var statearr_25597_26916 = state_25559;
(statearr_25597_26916[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26917 = state_25559;
state_25559 = G__26917;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23464__auto__ = function(state_25559){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23464__auto____1.call(this,state_25559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23464__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23464__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto__))
})();
var state__23567__auto__ = (function (){var statearr_25598 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25598[(6)] = c__23565__auto__);

return statearr_25598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto__))
);

return c__23565__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25600 = arguments.length;
switch (G__25600) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25602 = arguments.length;
switch (G__25602) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25604 = arguments.length;
switch (G__25604) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23565__auto___26928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26928,out){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26928,out){
return (function (state_25628){
var state_val_25629 = (state_25628[(1)]);
if((state_val_25629 === (7))){
var inst_25623 = (state_25628[(2)]);
var state_25628__$1 = state_25628;
var statearr_25630_26929 = state_25628__$1;
(statearr_25630_26929[(2)] = inst_25623);

(statearr_25630_26929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25629 === (1))){
var inst_25605 = null;
var state_25628__$1 = (function (){var statearr_25631 = state_25628;
(statearr_25631[(7)] = inst_25605);

return statearr_25631;
})();
var statearr_25632_26932 = state_25628__$1;
(statearr_25632_26932[(2)] = null);

(statearr_25632_26932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25629 === (4))){
var inst_25608 = (state_25628[(8)]);
var inst_25608__$1 = (state_25628[(2)]);
var inst_25609 = (inst_25608__$1 == null);
var inst_25610 = cljs.core.not(inst_25609);
var state_25628__$1 = (function (){var statearr_25633 = state_25628;
(statearr_25633[(8)] = inst_25608__$1);

return statearr_25633;
})();
if(inst_25610){
var statearr_25634_26934 = state_25628__$1;
(statearr_25634_26934[(1)] = (5));

} else {
var statearr_25635_26935 = state_25628__$1;
(statearr_25635_26935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25629 === (6))){
var state_25628__$1 = state_25628;
var statearr_25636_26936 = state_25628__$1;
(statearr_25636_26936[(2)] = null);

(statearr_25636_26936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25629 === (3))){
var inst_25625 = (state_25628[(2)]);
var inst_25626 = cljs.core.async.close_BANG_(out);
var state_25628__$1 = (function (){var statearr_25637 = state_25628;
(statearr_25637[(9)] = inst_25625);

return statearr_25637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25628__$1,inst_25626);
} else {
if((state_val_25629 === (2))){
var state_25628__$1 = state_25628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25628__$1,(4),ch);
} else {
if((state_val_25629 === (11))){
var inst_25608 = (state_25628[(8)]);
var inst_25617 = (state_25628[(2)]);
var inst_25605 = inst_25608;
var state_25628__$1 = (function (){var statearr_25638 = state_25628;
(statearr_25638[(7)] = inst_25605);

(statearr_25638[(10)] = inst_25617);

return statearr_25638;
})();
var statearr_25639_26939 = state_25628__$1;
(statearr_25639_26939[(2)] = null);

(statearr_25639_26939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25629 === (9))){
var inst_25608 = (state_25628[(8)]);
var state_25628__$1 = state_25628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25628__$1,(11),out,inst_25608);
} else {
if((state_val_25629 === (5))){
var inst_25608 = (state_25628[(8)]);
var inst_25605 = (state_25628[(7)]);
var inst_25612 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25608,inst_25605);
var state_25628__$1 = state_25628;
if(inst_25612){
var statearr_25641_26943 = state_25628__$1;
(statearr_25641_26943[(1)] = (8));

} else {
var statearr_25642_26944 = state_25628__$1;
(statearr_25642_26944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25629 === (10))){
var inst_25620 = (state_25628[(2)]);
var state_25628__$1 = state_25628;
var statearr_25643_26945 = state_25628__$1;
(statearr_25643_26945[(2)] = inst_25620);

(statearr_25643_26945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25629 === (8))){
var inst_25605 = (state_25628[(7)]);
var tmp25640 = inst_25605;
var inst_25605__$1 = tmp25640;
var state_25628__$1 = (function (){var statearr_25644 = state_25628;
(statearr_25644[(7)] = inst_25605__$1);

return statearr_25644;
})();
var statearr_25645_26948 = state_25628__$1;
(statearr_25645_26948[(2)] = null);

(statearr_25645_26948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26928,out))
;
return ((function (switch__23463__auto__,c__23565__auto___26928,out){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_25646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25646[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_25646[(1)] = (1));

return statearr_25646;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_25628){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25628);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25647){if((e25647 instanceof Object)){
var ex__23467__auto__ = e25647;
var statearr_25648_26953 = state_25628;
(statearr_25648_26953[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26958 = state_25628;
state_25628 = G__26958;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_25628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_25628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26928,out))
})();
var state__23567__auto__ = (function (){var statearr_25649 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25649[(6)] = c__23565__auto___26928);

return statearr_25649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26928,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25651 = arguments.length;
switch (G__25651) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23565__auto___26961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___26961,out){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___26961,out){
return (function (state_25689){
var state_val_25690 = (state_25689[(1)]);
if((state_val_25690 === (7))){
var inst_25685 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25691_26963 = state_25689__$1;
(statearr_25691_26963[(2)] = inst_25685);

(statearr_25691_26963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (1))){
var inst_25652 = (new Array(n));
var inst_25653 = inst_25652;
var inst_25654 = (0);
var state_25689__$1 = (function (){var statearr_25692 = state_25689;
(statearr_25692[(7)] = inst_25653);

(statearr_25692[(8)] = inst_25654);

return statearr_25692;
})();
var statearr_25693_26971 = state_25689__$1;
(statearr_25693_26971[(2)] = null);

(statearr_25693_26971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (4))){
var inst_25657 = (state_25689[(9)]);
var inst_25657__$1 = (state_25689[(2)]);
var inst_25658 = (inst_25657__$1 == null);
var inst_25659 = cljs.core.not(inst_25658);
var state_25689__$1 = (function (){var statearr_25694 = state_25689;
(statearr_25694[(9)] = inst_25657__$1);

return statearr_25694;
})();
if(inst_25659){
var statearr_25695_26977 = state_25689__$1;
(statearr_25695_26977[(1)] = (5));

} else {
var statearr_25696_26979 = state_25689__$1;
(statearr_25696_26979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (15))){
var inst_25679 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25697_26986 = state_25689__$1;
(statearr_25697_26986[(2)] = inst_25679);

(statearr_25697_26986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (13))){
var state_25689__$1 = state_25689;
var statearr_25698_26991 = state_25689__$1;
(statearr_25698_26991[(2)] = null);

(statearr_25698_26991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (6))){
var inst_25654 = (state_25689[(8)]);
var inst_25675 = (inst_25654 > (0));
var state_25689__$1 = state_25689;
if(cljs.core.truth_(inst_25675)){
var statearr_25699_26993 = state_25689__$1;
(statearr_25699_26993[(1)] = (12));

} else {
var statearr_25700_26998 = state_25689__$1;
(statearr_25700_26998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (3))){
var inst_25687 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25689__$1,inst_25687);
} else {
if((state_val_25690 === (12))){
var inst_25653 = (state_25689[(7)]);
var inst_25677 = cljs.core.vec(inst_25653);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25689__$1,(15),out,inst_25677);
} else {
if((state_val_25690 === (2))){
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25689__$1,(4),ch);
} else {
if((state_val_25690 === (11))){
var inst_25669 = (state_25689[(2)]);
var inst_25670 = (new Array(n));
var inst_25653 = inst_25670;
var inst_25654 = (0);
var state_25689__$1 = (function (){var statearr_25701 = state_25689;
(statearr_25701[(7)] = inst_25653);

(statearr_25701[(10)] = inst_25669);

(statearr_25701[(8)] = inst_25654);

return statearr_25701;
})();
var statearr_25702_27004 = state_25689__$1;
(statearr_25702_27004[(2)] = null);

(statearr_25702_27004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (9))){
var inst_25653 = (state_25689[(7)]);
var inst_25667 = cljs.core.vec(inst_25653);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25689__$1,(11),out,inst_25667);
} else {
if((state_val_25690 === (5))){
var inst_25662 = (state_25689[(11)]);
var inst_25653 = (state_25689[(7)]);
var inst_25657 = (state_25689[(9)]);
var inst_25654 = (state_25689[(8)]);
var inst_25661 = (inst_25653[inst_25654] = inst_25657);
var inst_25662__$1 = (inst_25654 + (1));
var inst_25663 = (inst_25662__$1 < n);
var state_25689__$1 = (function (){var statearr_25703 = state_25689;
(statearr_25703[(11)] = inst_25662__$1);

(statearr_25703[(12)] = inst_25661);

return statearr_25703;
})();
if(cljs.core.truth_(inst_25663)){
var statearr_25704_27024 = state_25689__$1;
(statearr_25704_27024[(1)] = (8));

} else {
var statearr_25705_27026 = state_25689__$1;
(statearr_25705_27026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (14))){
var inst_25682 = (state_25689[(2)]);
var inst_25683 = cljs.core.async.close_BANG_(out);
var state_25689__$1 = (function (){var statearr_25707 = state_25689;
(statearr_25707[(13)] = inst_25682);

return statearr_25707;
})();
var statearr_25708_27039 = state_25689__$1;
(statearr_25708_27039[(2)] = inst_25683);

(statearr_25708_27039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (10))){
var inst_25673 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25709_27048 = state_25689__$1;
(statearr_25709_27048[(2)] = inst_25673);

(statearr_25709_27048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (8))){
var inst_25662 = (state_25689[(11)]);
var inst_25653 = (state_25689[(7)]);
var tmp25706 = inst_25653;
var inst_25653__$1 = tmp25706;
var inst_25654 = inst_25662;
var state_25689__$1 = (function (){var statearr_25710 = state_25689;
(statearr_25710[(7)] = inst_25653__$1);

(statearr_25710[(8)] = inst_25654);

return statearr_25710;
})();
var statearr_25711_27059 = state_25689__$1;
(statearr_25711_27059[(2)] = null);

(statearr_25711_27059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___26961,out))
;
return ((function (switch__23463__auto__,c__23565__auto___26961,out){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_25712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25712[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_25712[(1)] = (1));

return statearr_25712;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_25689){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25689);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25713){if((e25713 instanceof Object)){
var ex__23467__auto__ = e25713;
var statearr_25714_27073 = state_25689;
(statearr_25714_27073[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27079 = state_25689;
state_25689 = G__27079;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_25689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_25689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___26961,out))
})();
var state__23567__auto__ = (function (){var statearr_25715 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25715[(6)] = c__23565__auto___26961);

return statearr_25715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___26961,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25717 = arguments.length;
switch (G__25717) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23565__auto___27109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23565__auto___27109,out){
return (function (){
var f__23566__auto__ = (function (){var switch__23463__auto__ = ((function (c__23565__auto___27109,out){
return (function (state_25759){
var state_val_25760 = (state_25759[(1)]);
if((state_val_25760 === (7))){
var inst_25755 = (state_25759[(2)]);
var state_25759__$1 = state_25759;
var statearr_25761_27117 = state_25759__$1;
(statearr_25761_27117[(2)] = inst_25755);

(statearr_25761_27117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (1))){
var inst_25718 = [];
var inst_25719 = inst_25718;
var inst_25720 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25759__$1 = (function (){var statearr_25762 = state_25759;
(statearr_25762[(7)] = inst_25720);

(statearr_25762[(8)] = inst_25719);

return statearr_25762;
})();
var statearr_25763_27118 = state_25759__$1;
(statearr_25763_27118[(2)] = null);

(statearr_25763_27118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (4))){
var inst_25723 = (state_25759[(9)]);
var inst_25723__$1 = (state_25759[(2)]);
var inst_25724 = (inst_25723__$1 == null);
var inst_25725 = cljs.core.not(inst_25724);
var state_25759__$1 = (function (){var statearr_25764 = state_25759;
(statearr_25764[(9)] = inst_25723__$1);

return statearr_25764;
})();
if(inst_25725){
var statearr_25765_27120 = state_25759__$1;
(statearr_25765_27120[(1)] = (5));

} else {
var statearr_25766_27121 = state_25759__$1;
(statearr_25766_27121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (15))){
var inst_25749 = (state_25759[(2)]);
var state_25759__$1 = state_25759;
var statearr_25767_27125 = state_25759__$1;
(statearr_25767_27125[(2)] = inst_25749);

(statearr_25767_27125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (13))){
var state_25759__$1 = state_25759;
var statearr_25768_27127 = state_25759__$1;
(statearr_25768_27127[(2)] = null);

(statearr_25768_27127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (6))){
var inst_25719 = (state_25759[(8)]);
var inst_25744 = inst_25719.length;
var inst_25745 = (inst_25744 > (0));
var state_25759__$1 = state_25759;
if(cljs.core.truth_(inst_25745)){
var statearr_25769_27132 = state_25759__$1;
(statearr_25769_27132[(1)] = (12));

} else {
var statearr_25770_27134 = state_25759__$1;
(statearr_25770_27134[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (3))){
var inst_25757 = (state_25759[(2)]);
var state_25759__$1 = state_25759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25759__$1,inst_25757);
} else {
if((state_val_25760 === (12))){
var inst_25719 = (state_25759[(8)]);
var inst_25747 = cljs.core.vec(inst_25719);
var state_25759__$1 = state_25759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25759__$1,(15),out,inst_25747);
} else {
if((state_val_25760 === (2))){
var state_25759__$1 = state_25759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25759__$1,(4),ch);
} else {
if((state_val_25760 === (11))){
var inst_25727 = (state_25759[(10)]);
var inst_25723 = (state_25759[(9)]);
var inst_25737 = (state_25759[(2)]);
var inst_25738 = [];
var inst_25739 = inst_25738.push(inst_25723);
var inst_25719 = inst_25738;
var inst_25720 = inst_25727;
var state_25759__$1 = (function (){var statearr_25771 = state_25759;
(statearr_25771[(7)] = inst_25720);

(statearr_25771[(8)] = inst_25719);

(statearr_25771[(11)] = inst_25737);

(statearr_25771[(12)] = inst_25739);

return statearr_25771;
})();
var statearr_25772_27137 = state_25759__$1;
(statearr_25772_27137[(2)] = null);

(statearr_25772_27137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (9))){
var inst_25719 = (state_25759[(8)]);
var inst_25735 = cljs.core.vec(inst_25719);
var state_25759__$1 = state_25759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25759__$1,(11),out,inst_25735);
} else {
if((state_val_25760 === (5))){
var inst_25720 = (state_25759[(7)]);
var inst_25727 = (state_25759[(10)]);
var inst_25723 = (state_25759[(9)]);
var inst_25727__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25723) : f.call(null,inst_25723));
var inst_25728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25727__$1,inst_25720);
var inst_25729 = cljs.core.keyword_identical_QMARK_(inst_25720,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25730 = ((inst_25728) || (inst_25729));
var state_25759__$1 = (function (){var statearr_25773 = state_25759;
(statearr_25773[(10)] = inst_25727__$1);

return statearr_25773;
})();
if(cljs.core.truth_(inst_25730)){
var statearr_25774_27141 = state_25759__$1;
(statearr_25774_27141[(1)] = (8));

} else {
var statearr_25775_27142 = state_25759__$1;
(statearr_25775_27142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (14))){
var inst_25752 = (state_25759[(2)]);
var inst_25753 = cljs.core.async.close_BANG_(out);
var state_25759__$1 = (function (){var statearr_25777 = state_25759;
(statearr_25777[(13)] = inst_25752);

return statearr_25777;
})();
var statearr_25778_27144 = state_25759__$1;
(statearr_25778_27144[(2)] = inst_25753);

(statearr_25778_27144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (10))){
var inst_25742 = (state_25759[(2)]);
var state_25759__$1 = state_25759;
var statearr_25779_27148 = state_25759__$1;
(statearr_25779_27148[(2)] = inst_25742);

(statearr_25779_27148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25760 === (8))){
var inst_25719 = (state_25759[(8)]);
var inst_25727 = (state_25759[(10)]);
var inst_25723 = (state_25759[(9)]);
var inst_25732 = inst_25719.push(inst_25723);
var tmp25776 = inst_25719;
var inst_25719__$1 = tmp25776;
var inst_25720 = inst_25727;
var state_25759__$1 = (function (){var statearr_25780 = state_25759;
(statearr_25780[(7)] = inst_25720);

(statearr_25780[(8)] = inst_25719__$1);

(statearr_25780[(14)] = inst_25732);

return statearr_25780;
})();
var statearr_25781_27153 = state_25759__$1;
(statearr_25781_27153[(2)] = null);

(statearr_25781_27153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23565__auto___27109,out))
;
return ((function (switch__23463__auto__,c__23565__auto___27109,out){
return (function() {
var cljs$core$async$state_machine__23464__auto__ = null;
var cljs$core$async$state_machine__23464__auto____0 = (function (){
var statearr_25782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25782[(0)] = cljs$core$async$state_machine__23464__auto__);

(statearr_25782[(1)] = (1));

return statearr_25782;
});
var cljs$core$async$state_machine__23464__auto____1 = (function (state_25759){
while(true){
var ret_value__23465__auto__ = (function (){try{while(true){
var result__23466__auto__ = switch__23463__auto__(state_25759);
if(cljs.core.keyword_identical_QMARK_(result__23466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23466__auto__;
}
break;
}
}catch (e25783){if((e25783 instanceof Object)){
var ex__23467__auto__ = e25783;
var statearr_25784_27156 = state_25759;
(statearr_25784_27156[(5)] = ex__23467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27157 = state_25759;
state_25759 = G__27157;
continue;
} else {
return ret_value__23465__auto__;
}
break;
}
});
cljs$core$async$state_machine__23464__auto__ = function(state_25759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23464__auto____1.call(this,state_25759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23464__auto____0;
cljs$core$async$state_machine__23464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23464__auto____1;
return cljs$core$async$state_machine__23464__auto__;
})()
;})(switch__23463__auto__,c__23565__auto___27109,out))
})();
var state__23567__auto__ = (function (){var statearr_25785 = (f__23566__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23566__auto__.cljs$core$IFn$_invoke$arity$0() : f__23566__auto__.call(null));
(statearr_25785[(6)] = c__23565__auto___27109);

return statearr_25785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23567__auto__);
});})(c__23565__auto___27109,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
