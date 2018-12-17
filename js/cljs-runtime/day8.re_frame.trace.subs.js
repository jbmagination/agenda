goog.provide('day8.re_frame.trace.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.metamorphic');
goog.require('day8.re_frame.trace.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
var G__23522_24098 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__23523_24099 = ((function (G__23522_24098){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__23522_24098))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23522_24098,G__23523_24099) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23522_24098,G__23523_24099));
var G__23527_24103 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__23528_24104 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23529_24105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23530_24106 = ((function (G__23527_24103,G__23528_24104,G__23529_24105){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__23527_24103,G__23528_24104,G__23529_24105))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23527_24103,G__23528_24104,G__23529_24105,G__23530_24106) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23527_24103,G__23528_24104,G__23529_24105,G__23530_24106));
var G__23536_24108 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23537_24109 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23538_24110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23539_24111 = ((function (G__23536_24108,G__23537_24109,G__23538_24110){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23536_24108,G__23537_24109,G__23538_24110))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23536_24108,G__23537_24109,G__23538_24110,G__23539_24111) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23536_24108,G__23537_24109,G__23538_24110,G__23539_24111));
var G__23541_24116 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23542_24117 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23543_24118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23544_24119 = ((function (G__23541_24116,G__23542_24117,G__23543_24118){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23541_24116,G__23542_24117,G__23543_24118))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23541_24116,G__23542_24117,G__23543_24118,G__23544_24119) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23541_24116,G__23542_24117,G__23543_24118,G__23544_24119));
var G__23549_24122 = new cljs.core.Keyword("settings","paused?","settings/paused?",611315548);
var G__23550_24123 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23551_24124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23552_24125 = ((function (G__23549_24122,G__23550_24123,G__23551_24124){
return (function (settings,_){
return new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23549_24122,G__23550_24123,G__23551_24124))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23549_24122,G__23550_24123,G__23551_24124,G__23552_24125) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23549_24122,G__23550_24123,G__23551_24124,G__23552_24125));
var G__23556_24139 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23557_24140 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23558_24141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23559_24142 = ((function (G__23556_24139,G__23557_24140,G__23558_24141){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23556_24139,G__23557_24140,G__23558_24141))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23556_24139,G__23557_24140,G__23558_24141,G__23559_24142) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23556_24139,G__23557_24140,G__23558_24141,G__23559_24142));
var G__23561_24144 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23562_24145 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23563_24146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23564_24147 = ((function (G__23561_24144,G__23562_24145,G__23563_24146){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23561_24144,G__23562_24145,G__23563_24146))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23561_24144,G__23562_24145,G__23563_24146,G__23564_24147) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23561_24144,G__23562_24145,G__23563_24146,G__23564_24147));
var G__23568_24150 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23569_24151 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23570_24152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23571_24153 = ((function (G__23568_24150,G__23569_24151,G__23570_24152){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23568_24150,G__23569_24151,G__23570_24152))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23568_24150,G__23569_24151,G__23570_24152,G__23571_24153) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23568_24150,G__23569_24151,G__23570_24152,G__23571_24153));
var G__23581_24157 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23582_24158 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23583_24159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23584_24160 = ((function (G__23581_24157,G__23582_24158,G__23583_24159){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23581_24157,G__23582_24158,G__23583_24159))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23581_24157,G__23582_24158,G__23583_24159,G__23584_24160) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23581_24157,G__23582_24158,G__23583_24159,G__23584_24160));
var G__23586_24162 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23587_24163 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23588_24164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23589_24165 = ((function (G__23586_24162,G__23587_24163,G__23588_24164){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23586_24162,G__23587_24163,G__23588_24164))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23586_24162,G__23587_24163,G__23588_24164,G__23589_24165) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23586_24162,G__23587_24163,G__23588_24164,G__23589_24165));
var G__23594_24168 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23595_24169 = ((function (G__23594_24168){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23594_24168))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23594_24168,G__23595_24169) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23594_24168,G__23595_24169));
var G__23602_24170 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23603_24171 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23604_24172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23605_24173 = ((function (G__23602_24170,G__23603_24171,G__23604_24172){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23602_24170,G__23603_24171,G__23604_24172))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23602_24170,G__23603_24171,G__23604_24172,G__23605_24173) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23602_24170,G__23603_24171,G__23604_24172,G__23605_24173));
var G__23612_24176 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23613_24177 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23614_24178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23615_24179 = ((function (G__23612_24176,G__23613_24177,G__23614_24178){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23612_24176,G__23613_24177,G__23614_24178))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23612_24176,G__23613_24177,G__23614_24178,G__23615_24179) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23612_24176,G__23613_24177,G__23614_24178,G__23615_24179));
var G__23626_24193 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23627_24194 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23628_24195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23629_24196 = ((function (G__23626_24193,G__23627_24194,G__23628_24195){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23626_24193,G__23627_24194,G__23628_24195){
return (function (p1__23619_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23619_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23619_SHARP_));
});})(G__23626_24193,G__23627_24194,G__23628_24195))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23626_24193,G__23627_24194,G__23628_24195))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23626_24193,G__23627_24194,G__23628_24195,G__23629_24196) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23626_24193,G__23627_24194,G__23628_24195,G__23629_24196));
var G__23645_24201 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23646_24202 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23647_24203 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23648_24204 = ((function (G__23645_24201,G__23646_24202,G__23647_24203){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23645_24201,G__23646_24202,G__23647_24203))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23645_24201,G__23646_24202,G__23647_24203,G__23648_24204) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23645_24201,G__23646_24202,G__23647_24203,G__23648_24204));
var G__23651_24206 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23652_24207 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23653_24208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23654_24209 = ((function (G__23651_24206,G__23652_24207,G__23653_24208){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23651_24206,G__23652_24207,G__23653_24208))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23651_24206,G__23652_24207,G__23653_24208,G__23654_24209) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23651_24206,G__23652_24207,G__23653_24208,G__23654_24209));
var G__23660_24213 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23661_24214 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23662_24215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23663_24216 = ((function (G__23660_24213,G__23661_24214,G__23662_24215){
return (function (expansions,p__23666){
var vec__23669 = p__23666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23669,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23669,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23660_24213,G__23661_24214,G__23662_24215))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23660_24213,G__23661_24214,G__23662_24215,G__23663_24216) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23660_24213,G__23661_24214,G__23662_24215,G__23663_24216));
var G__23673_24219 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23674_24220 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23675_24221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23676_24222 = ((function (G__23673_24219,G__23674_24220,G__23675_24221){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23673_24219,G__23674_24220,G__23675_24221))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23673_24219,G__23674_24220,G__23675_24221,G__23676_24222) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23673_24219,G__23674_24220,G__23675_24221,G__23676_24222));
var G__23677_24227 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23678_24228 = ((function (G__23677_24227){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23677_24227))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23677_24227,G__23678_24228) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23677_24227,G__23678_24228));
var G__23683_24229 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__23684_24230 = ((function (G__23683_24229){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23683_24229))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23683_24229,G__23684_24230) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23683_24229,G__23684_24230));
var G__23690_24232 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__23691_24233 = ((function (G__23690_24232){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__23690_24232))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23690_24232,G__23691_24233) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23690_24232,G__23691_24233));
var G__23700_24235 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__23701_24236 = ((function (G__23700_24235){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__23700_24235))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23700_24235,G__23701_24236) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23700_24235,G__23701_24236));
var G__23711_24245 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__23712_24246 = ((function (G__23711_24245){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__23711_24245))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23711_24245,G__23712_24246) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23711_24245,G__23712_24246));
var G__23714_24248 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__23715_24249 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23716_24250 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__23717_24251 = ((function (G__23714_24248,G__23715_24249,G__23716_24250){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__23714_24248,G__23715_24249,G__23716_24250))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23714_24248,G__23715_24249,G__23716_24250,G__23717_24251) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23714_24248,G__23715_24249,G__23716_24250,G__23717_24251));
var G__23719_24264 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__23720_24265 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23721_24266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23722_24267 = ((function (G__23719_24264,G__23720_24265,G__23721_24266){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__23719_24264,G__23720_24265,G__23721_24266))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23719_24264,G__23720_24265,G__23721_24266,G__23722_24267) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23719_24264,G__23720_24265,G__23721_24266,G__23722_24267));
var G__23723_24270 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__23724_24271 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23725_24272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23726_24273 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23727_24274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__23728_24275 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23729_24276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__23730_24277 = ((function (G__23723_24270,G__23724_24271,G__23725_24272,G__23726_24273,G__23727_24274,G__23728_24275,G__23729_24276){
return (function (p__23745,_){
var vec__23746 = p__23745;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23746,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23746,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23746,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame.trace.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__23723_24270,G__23724_24271,G__23725_24272,G__23726_24273,G__23727_24274,G__23728_24275,G__23729_24276))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__23723_24270,G__23724_24271,G__23725_24272,G__23726_24273,G__23727_24274,G__23728_24275,G__23729_24276,G__23730_24277) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23723_24270,G__23724_24271,G__23725_24272,G__23726_24273,G__23727_24274,G__23728_24275,G__23729_24276,G__23730_24277));
day8.re_frame.trace.subs.filter_ignored_views = (function day8$re_frame$trace$subs$filter_ignored_views(p__23755,_){
var vec__23756 = p__23755;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23756,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23756,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__23756,traces,filtered_views){
return (function (trace){
var and__3938__auto__ = day8.re_frame.trace.metamorphic.render_QMARK_(trace);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")));
} else {
return and__3938__auto__;
}
});})(munged_ns,vec__23756,traces,filtered_views))
),traces);
});
var G__23775_24294 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__23776_24295 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23777_24296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23778_24297 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23779_24298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23780_24299 = day8.re_frame.trace.subs.filter_ignored_views;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23775_24294,G__23776_24295,G__23777_24296,G__23778_24297,G__23779_24298,G__23780_24299) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23775_24294,G__23776_24295,G__23777_24296,G__23778_24297,G__23779_24298,G__23780_24299));
var G__23781_24301 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__23782_24302 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23783_24303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23784_24304 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23785_24305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23786_24306 = day8.re_frame.trace.subs.filter_ignored_views;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23781_24301,G__23782_24302,G__23783_24303,G__23784_24304,G__23785_24305,G__23786_24306) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23781_24301,G__23782_24302,G__23783_24303,G__23784_24304,G__23785_24305,G__23786_24306));
var G__23791_24308 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__23792_24309 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23793_24310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__23794_24311 = ((function (G__23791_24308,G__23792_24309,G__23793_24310){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__23791_24308,G__23792_24309,G__23793_24310))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23791_24308,G__23792_24309,G__23793_24310,G__23794_24311) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23791_24308,G__23792_24309,G__23793_24310,G__23794_24311));
var G__23795_24313 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__23796_24314 = ((function (G__23795_24313){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__23795_24313))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23795_24313,G__23796_24314) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23795_24313,G__23796_24314));
var G__23798_24316 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__23799_24317 = ((function (G__23798_24316){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23798_24316))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23798_24316,G__23799_24317) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23798_24316,G__23799_24317));
var G__23805_24320 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__23806_24321 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23807_24322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__23808_24323 = ((function (G__23805_24320,G__23806_24321,G__23807_24322){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__23805_24320,G__23806_24321,G__23807_24322))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23805_24320,G__23806_24321,G__23807_24322,G__23808_24323) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23805_24320,G__23806_24321,G__23807_24322,G__23808_24323));
var G__23813_24326 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__23814_24327 = ((function (G__23813_24326){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23813_24326))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23813_24326,G__23814_24327) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23813_24326,G__23814_24327));
var G__23822_24330 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__23823_24331 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23824_24332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23825_24333 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23826_24335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23827_24336 = ((function (G__23822_24330,G__23823_24331,G__23824_24332,G__23825_24333,G__23826_24335){
return (function (p__23828,_){
var vec__23829 = p__23828;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23829,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23829,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__23822_24330,G__23823_24331,G__23824_24332,G__23825_24333,G__23826_24335))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23822_24330,G__23823_24331,G__23824_24332,G__23825_24333,G__23826_24335,G__23827_24336) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23822_24330,G__23823_24331,G__23824_24332,G__23825_24333,G__23826_24335,G__23827_24336));
var G__23834_24346 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__23835_24347 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23836_24348 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23837_24349 = ((function (G__23834_24346,G__23835_24347,G__23836_24348){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23834_24346,G__23835_24347,G__23836_24348))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23834_24346,G__23835_24347,G__23836_24348,G__23837_24349) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23834_24346,G__23835_24347,G__23836_24348,G__23837_24349));
var G__23838_24360 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__23839_24361 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23840_24362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23841_24363 = ((function (G__23838_24360,G__23839_24361,G__23840_24362){
return (function (match,_){
return day8.re_frame.trace.metamorphic.matched_event(match);
});})(G__23838_24360,G__23839_24361,G__23840_24362))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23838_24360,G__23839_24361,G__23840_24362,G__23841_24363) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23838_24360,G__23839_24361,G__23840_24362,G__23841_24363));
var G__23842_24382 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__23843_24383 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23844_24384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23845_24385 = ((function (G__23842_24382,G__23843_24383,G__23844_24384){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__23842_24382,G__23843_24383,G__23844_24384))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23842_24382,G__23843_24383,G__23844_24384,G__23845_24385) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23842_24382,G__23843_24383,G__23844_24384,G__23845_24385));
var G__23848_24392 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__23849_24393 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23850_24394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23851_24395 = ((function (G__23848_24392,G__23849_24393,G__23850_24394){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__23848_24392,G__23849_24393,G__23850_24394))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23848_24392,G__23849_24393,G__23850_24394,G__23851_24395) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23848_24392,G__23849_24393,G__23850_24394,G__23851_24395));
var G__23852_24397 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__23853_24398 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23854_24399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23855_24400 = ((function (G__23852_24397,G__23853_24398,G__23854_24399){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23852_24397,G__23853_24398,G__23854_24399))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23852_24397,G__23853_24398,G__23854_24399,G__23855_24400) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23852_24397,G__23853_24398,G__23854_24399,G__23855_24400));
var G__23856_24404 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__23857_24405 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23858_24406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23859_24407 = ((function (G__23856_24404,G__23857_24405,G__23858_24406){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23856_24404,G__23857_24405,G__23858_24406))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23856_24404,G__23857_24405,G__23858_24406,G__23859_24407) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23856_24404,G__23857_24405,G__23858_24406,G__23859_24407));
var G__23860_24409 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__23861_24410 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23862_24411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23863_24412 = ((function (G__23860_24409,G__23861_24410,G__23862_24411){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23860_24409,G__23861_24410,G__23862_24411))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23860_24409,G__23861_24410,G__23862_24411,G__23863_24412) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23860_24409,G__23861_24410,G__23862_24411,G__23863_24412));
var G__23865_24417 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__23866_24418 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23867_24419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23868_24420 = ((function (G__23865_24417,G__23866_24418,G__23867_24419){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__23865_24417,G__23866_24418,G__23867_24419))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23865_24417,G__23866_24418,G__23867_24419,G__23868_24420) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23865_24417,G__23866_24418,G__23867_24419,G__23868_24420));
var G__23870_24422 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__23871_24423 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23872_24424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23873_24425 = ((function (G__23870_24422,G__23871_24423,G__23872_24424){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__23870_24422,G__23871_24423,G__23872_24424))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23870_24422,G__23871_24423,G__23872_24424,G__23873_24425) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23870_24422,G__23871_24423,G__23872_24424,G__23873_24425));
var G__23874_24428 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__23875_24429 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23876_24430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23877_24431 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23878_24432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23879_24433 = ((function (G__23874_24428,G__23875_24429,G__23876_24430,G__23877_24431,G__23878_24432){
return (function (p__23880){
var vec__23881 = p__23880;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23881,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23881,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__23874_24428,G__23875_24429,G__23876_24430,G__23877_24431,G__23878_24432))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23874_24428,G__23875_24429,G__23876_24430,G__23877_24431,G__23878_24432,G__23879_24433) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23874_24428,G__23875_24429,G__23876_24430,G__23877_24431,G__23878_24432,G__23879_24433));
var G__23885_24436 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__23886_24437 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23887_24438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23888_24439 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23889_24440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23890_24441 = ((function (G__23885_24436,G__23886_24437,G__23887_24438,G__23888_24439,G__23889_24440){
return (function (p__23892){
var vec__23893 = p__23892;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23893,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23893,(1),null);
return ((((1) < cljs.core.count(ids))) && (!((current == null))) && ((current < day8.re_frame.trace.utils.utils.last_in_vec(ids))));
});})(G__23885_24436,G__23886_24437,G__23887_24438,G__23888_24439,G__23889_24440))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23885_24436,G__23886_24437,G__23887_24438,G__23888_24439,G__23889_24440,G__23890_24441) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23885_24436,G__23886_24437,G__23887_24438,G__23888_24439,G__23889_24440,G__23890_24441));
var G__23896_24445 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__23897_24446 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23898_24447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23899_24448 = ((function (G__23896_24445,G__23897_24446,G__23898_24447){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame.trace.utils.utils.last_in_vec(traces);
return day8.re_frame.trace.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__23896_24445,G__23897_24446,G__23898_24447))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23896_24445,G__23897_24446,G__23898_24447,G__23899_24448) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23896_24445,G__23897_24446,G__23898_24447,G__23899_24448));
var G__23901_24455 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__23902_24456 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23903_24457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23904_24458 = ((function (G__23901_24455,G__23902_24456,G__23903_24457){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23901_24455,G__23902_24456,G__23903_24457){
return (function (p1__23900_SHARP_){
var or__3949__auto__ = day8.re_frame.trace.metamorphic.request_animation_frame_QMARK_(p1__23900_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return day8.re_frame.trace.metamorphic.request_animation_frame_end_QMARK_(p1__23900_SHARP_);
}
});})(G__23901_24455,G__23902_24456,G__23903_24457))
,traces);
});})(G__23901_24455,G__23902_24456,G__23903_24457))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23901_24455,G__23902_24456,G__23903_24457,G__23904_24458) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23901_24455,G__23902_24456,G__23903_24457,G__23904_24458));
var G__23905_24462 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__23906_24463 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23907_24464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23908_24465 = ((function (G__23905_24462,G__23906_24463,G__23907_24464){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame.trace.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__23905_24462,G__23906_24463,G__23907_24464))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23905_24462,G__23906_24463,G__23907_24464,G__23908_24465) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23905_24462,G__23906_24463,G__23907_24464,G__23908_24465));
var G__23909_24469 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__23910_24470 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23911_24471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23912_24472 = ((function (G__23909_24469,G__23910_24470,G__23911_24471){
return (function (frame_traces,p__23916){
var vec__23917 = p__23916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(1),null);
var frames = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),frame_traces);
var vec__23920 = cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((frame_number - (1)),frames));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23920,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23920,(1),null);
return day8.re_frame.trace.metamorphic.elapsed_time(start,end);
});})(G__23909_24469,G__23910_24470,G__23911_24471))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23909_24469,G__23910_24470,G__23911_24471,G__23912_24472) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23909_24469,G__23910_24470,G__23911_24471,G__23912_24472));
var G__23923_24477 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__23924_24478 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23925_24479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23926_24480 = ((function (G__23923_24477,G__23924_24478,G__23925_24479){
return (function (match){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188)], null));
});})(G__23923_24477,G__23924_24478,G__23925_24479))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23923_24477,G__23924_24478,G__23925_24479,G__23926_24480) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23923_24477,G__23924_24478,G__23925_24479,G__23926_24480));
var G__23927_24483 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__23928_24484 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23929_24485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23930_24486 = ((function (G__23927_24483,G__23928_24484,G__23929_24485){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame.trace.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame.trace.utils.utils.last_in_vec(traces);
return day8.re_frame.trace.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__23927_24483,G__23928_24484,G__23929_24485))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23927_24483,G__23928_24484,G__23929_24485,G__23930_24486) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23927_24483,G__23928_24484,G__23929_24485,G__23930_24486));
var G__23931_24488 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__23932_24489 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23933_24490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23934_24491 = ((function (G__23931_24488,G__23932_24489,G__23933_24490){
return (function (traces){
return !(cljs.core.empty_QMARK_(traces));
});})(G__23931_24488,G__23932_24489,G__23933_24490))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23931_24488,G__23932_24489,G__23933_24490,G__23934_24491) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23931_24488,G__23932_24489,G__23933_24490,G__23934_24491));
var G__23938_24493 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__23939_24494 = ((function (G__23938_24493){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23938_24493))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23938_24493,G__23939_24494) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23938_24493,G__23939_24494));
var G__23940_24496 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__23941_24497 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23942_24498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23943_24499 = ((function (G__23940_24496,G__23941_24497,G__23942_24498){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame.trace.metamorphic.subscription_QMARK_,traces);
});})(G__23940_24496,G__23941_24497,G__23942_24498))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23940_24496,G__23941_24497,G__23942_24498,G__23943_24499) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23940_24496,G__23941_24497,G__23942_24498,G__23943_24499));
var G__23944_24500 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__23945_24501 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23946_24502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23947_24503 = ((function (G__23944_24500,G__23945_24501,G__23946_24502){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__23944_24500,G__23945_24501,G__23946_24502))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23944_24500,G__23945_24501,G__23946_24502,G__23947_24503) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23944_24500,G__23945_24501,G__23946_24502,G__23947_24503));
var G__23948_24504 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__23949_24505 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23950_24506 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23951_24507 = ((function (G__23948_24504,G__23949_24505,G__23950_24506){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23948_24504,G__23949_24505,G__23950_24506))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23948_24504,G__23949_24505,G__23950_24506,G__23951_24507) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23948_24504,G__23949_24505,G__23950_24506,G__23951_24507));
var G__23952_24508 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__23953_24509 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23954_24510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23955_24511 = ((function (G__23952_24508,G__23953_24509,G__23954_24510){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23952_24508,G__23953_24509,G__23954_24510))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23952_24508,G__23953_24509,G__23954_24510,G__23955_24511) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__23952_24508,G__23953_24509,G__23954_24510,G__23955_24511));
day8.re_frame.trace.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23956_SHARP_){
return !(cljs.core.empty_QMARK_(p1__23956_SHARP_));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame.trace.subs","string!","day8.re-frame.trace.subs/string!",-452564170,null),day8.re_frame.trace.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame.trace.subs","string!","day8.re-frame.trace.subs/string!",-452564170,null),day8.re_frame.trace.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23963){
return cljs.core.coll_QMARK_(G__23963);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame.trace.subs","string!","day8.re-frame.trace.subs/string!",-452564170,null),day8.re_frame.trace.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23967){
return cljs.core.map_QMARK_(G__23967);
}),(function (G__23967){
return cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__23967){
return cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__23967){
return cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__23967){
return cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__23967){
return cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__23967){
return cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__23967){
return ((cljs.core.map_QMARK_(G__23967)) && (cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__23967,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23971){
return cljs.core.coll_QMARK_(G__23971);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame.trace.subs.sub_type_value = (function day8$re_frame$trace$subs$sub_type_value(sub_type){
var G__23974 = sub_type;
var G__23974__$1 = (((G__23974 instanceof cljs.core.Keyword))?G__23974.fqn:null);
switch (G__23974__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame.trace.subs.accumulate_sub_value = (function day8$re_frame$trace$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5455__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var sub_type = temp__5455__auto__;
var G__24557 = (exp - (1));
var G__24558 = (total + (day8.re_frame.trace.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__24559 = cljs.core.rest(order__$1);
exp = G__24557;
total = G__24558;
order__$1 = G__24559;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame.trace.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame.trace.subs.accumulate_sub_value);
day8.re_frame.trace.subs.sub_sort_val = (function day8$re_frame$trace$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame.trace.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame.trace.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame.trace.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame.trace.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame.trace.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame.trace.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame.trace.subs.sub_op_type__GT_type = (function day8$re_frame$trace$subs$sub_op_type__GT_type(t){
var G__23996 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__23996__$1 = (((G__23996 instanceof cljs.core.Keyword))?G__23996.fqn:null);
switch (G__23996__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame.trace.subs.prepare_pod_info = (function day8$re_frame$trace$subs$prepare_pod_info(p__23998,p__23999){
var vec__24000 = p__23998;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24000,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24000,(1),null);
var vec__24003 = p__23999;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24003,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","inter-epoch-subs","subs/inter-epoch-subs",-83233716)))?((function (vec__24000,sub_info,sub_state,vec__24003,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__24000,sub_info,sub_state,vec__24003,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame.trace.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__24000,sub_info,sub_state,vec__24003,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__24000,sub_info,sub_state,vec__24003,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__24012_24581 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__24013_24582 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24014_24583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__24015_24584 = ((function (G__24012_24581,G__24013_24582,G__24014_24583){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__24012_24581,G__24013_24582,G__24014_24583))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24012_24581,G__24013_24582,G__24014_24583,G__24015_24584) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24012_24581,G__24013_24582,G__24014_24583,G__24015_24584));
var G__24016_24588 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__24017_24589 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24018_24590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__24019_24591 = ((function (G__24016_24588,G__24017_24589,G__24018_24590){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__24016_24588,G__24017_24589,G__24018_24590))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24016_24588,G__24017_24589,G__24018_24590,G__24019_24591) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24016_24588,G__24017_24589,G__24018_24590,G__24019_24591));
var G__24021_24595 = new cljs.core.Keyword("subs","inter-epoch-subs","subs/inter-epoch-subs",-83233716);
var G__24022_24596 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24023_24597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__24024_24598 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24025_24599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__24026_24600 = day8.re_frame.trace.subs.prepare_pod_info;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24021_24595,G__24022_24596,G__24023_24597,G__24024_24598,G__24025_24599,G__24026_24600) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24021_24595,G__24022_24596,G__24023_24597,G__24024_24598,G__24025_24599,G__24026_24600));
var G__24029_24605 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__24030_24606 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24031_24607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__24032_24608 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24033_24609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__24034_24610 = day8.re_frame.trace.subs.prepare_pod_info;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24029_24605,G__24030_24606,G__24031_24607,G__24032_24608,G__24033_24609,G__24034_24610) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24029_24605,G__24030_24606,G__24031_24607,G__24032_24608,G__24033_24609,G__24034_24610));
var G__24038_24619 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__24039_24620 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24040_24621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__24041_24622 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24042_24623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__24043_24624 = ((function (G__24038_24619,G__24039_24620,G__24040_24621,G__24041_24622,G__24042_24623){
return (function (p__24046){
var vec__24047 = p__24046;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24047,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24047,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame.trace.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__24038_24619,G__24039_24620,G__24040_24621,G__24041_24622,G__24042_24623))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24038_24619,G__24039_24620,G__24040_24621,G__24041_24622,G__24042_24623,G__24043_24624) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24038_24619,G__24039_24620,G__24040_24621,G__24041_24622,G__24042_24623,G__24043_24624));
var G__24051_24636 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__24052_24637 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24053_24638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__24054_24639 = ((function (G__24051_24636,G__24052_24637,G__24053_24638){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__24051_24636,G__24052_24637,G__24053_24638))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24051_24636,G__24052_24637,G__24053_24638,G__24054_24639) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24051_24636,G__24052_24637,G__24053_24638,G__24054_24639));
var G__24058_24641 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__24059_24642 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24060_24643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__24061_24644 = ((function (G__24058_24641,G__24059_24642,G__24060_24643){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__24058_24641,G__24059_24642,G__24060_24643))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24058_24641,G__24059_24642,G__24060_24643,G__24061_24644) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24058_24641,G__24059_24642,G__24060_24643,G__24061_24644));
var G__24063_24646 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__24064_24647 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24065_24648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__24066_24649 = ((function (G__24063_24646,G__24064_24647,G__24065_24648){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__24063_24646,G__24064_24647,G__24065_24648))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24063_24646,G__24064_24647,G__24065_24648,G__24066_24649) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24063_24646,G__24064_24647,G__24065_24648,G__24066_24649));
var G__24067_24653 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__24068_24654 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24069_24655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__24070_24656 = ((function (G__24067_24653,G__24068_24654,G__24069_24655){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__24067_24653,G__24068_24654,G__24069_24655))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24067_24653,G__24068_24654,G__24069_24655,G__24070_24656) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24067_24653,G__24068_24654,G__24069_24655,G__24070_24656));
var G__24071_24661 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__24072_24662 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24073_24663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__24074_24664 = ((function (G__24071_24661,G__24072_24662,G__24073_24663){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__24071_24661,G__24072_24662,G__24073_24663))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24071_24661,G__24072_24662,G__24073_24663,G__24074_24664) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24071_24661,G__24072_24662,G__24073_24663,G__24074_24664));
var G__24076_24668 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__24077_24669 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24078_24670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__24079_24671 = ((function (G__24076_24668,G__24077_24669,G__24078_24670){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame.trace.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__24076_24668,G__24077_24669,G__24078_24670))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24076_24668,G__24077_24669,G__24078_24670,G__24079_24671) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24076_24668,G__24077_24669,G__24078_24670,G__24079_24671));
var G__24089_24674 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__24090_24675 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24091_24676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__24092_24677 = ((function (G__24089_24674,G__24090_24675,G__24091_24676){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__24089_24674,G__24090_24675,G__24091_24676))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24089_24674,G__24090_24675,G__24091_24676,G__24092_24677) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24089_24674,G__24090_24675,G__24091_24676,G__24092_24677));
var G__24093_24679 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__24094_24680 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24095_24681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__24096_24682 = ((function (G__24093_24679,G__24094_24680,G__24095_24681){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__24093_24679,G__24094_24680,G__24095_24681))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24093_24679,G__24094_24680,G__24095_24681,G__24096_24682) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__24093_24679,G__24094_24680,G__24095_24681,G__24096_24682));

//# sourceMappingURL=day8.re_frame.trace.subs.js.map
