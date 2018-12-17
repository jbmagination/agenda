goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__28857 = e.target.readyState;
var fexpr__28856 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__28856.cljs$core$IFn$_invoke$arity$1 ? fexpr__28856.cljs$core$IFn$_invoke$arity$1(G__28857) : fexpr__28856.call(null,G__28857));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28875,handler){
var map__28876 = p__28875;
var map__28876__$1 = ((((!((map__28876 == null)))?(((((map__28876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28876):map__28876);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28876__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28876__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28876__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28876__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28876__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28876__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28876__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28876,map__28876__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28867_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__28867_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__28876,map__28876__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___28904 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___28904)){
var response_type_28905 = temp__5457__auto___28904;
this$__$1.responseType = cljs.core.name(response_type_28905);
} else {
}

var seq__28883_28906 = cljs.core.seq(headers);
var chunk__28884_28907 = null;
var count__28885_28908 = (0);
var i__28886_28909 = (0);
while(true){
if((i__28886_28909 < count__28885_28908)){
var vec__28890_28910 = chunk__28884_28907.cljs$core$IIndexed$_nth$arity$2(null,i__28886_28909);
var k_28911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890_28910,(0),null);
var v_28912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890_28910,(1),null);
this$__$1.setRequestHeader(k_28911,v_28912);


var G__28914 = seq__28883_28906;
var G__28915 = chunk__28884_28907;
var G__28916 = count__28885_28908;
var G__28917 = (i__28886_28909 + (1));
seq__28883_28906 = G__28914;
chunk__28884_28907 = G__28915;
count__28885_28908 = G__28916;
i__28886_28909 = G__28917;
continue;
} else {
var temp__5457__auto___28918 = cljs.core.seq(seq__28883_28906);
if(temp__5457__auto___28918){
var seq__28883_28919__$1 = temp__5457__auto___28918;
if(cljs.core.chunked_seq_QMARK_(seq__28883_28919__$1)){
var c__4351__auto___28920 = cljs.core.chunk_first(seq__28883_28919__$1);
var G__28921 = cljs.core.chunk_rest(seq__28883_28919__$1);
var G__28922 = c__4351__auto___28920;
var G__28923 = cljs.core.count(c__4351__auto___28920);
var G__28924 = (0);
seq__28883_28906 = G__28921;
chunk__28884_28907 = G__28922;
count__28885_28908 = G__28923;
i__28886_28909 = G__28924;
continue;
} else {
var vec__28896_28925 = cljs.core.first(seq__28883_28919__$1);
var k_28926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28896_28925,(0),null);
var v_28927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28896_28925,(1),null);
this$__$1.setRequestHeader(k_28926,v_28927);


var G__28928 = cljs.core.next(seq__28883_28919__$1);
var G__28929 = null;
var G__28930 = (0);
var G__28931 = (0);
seq__28883_28906 = G__28928;
chunk__28884_28907 = G__28929;
count__28885_28908 = G__28930;
i__28886_28909 = G__28931;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
