import{i as pt,t as Ct}from"./chunk-VqNkXRZH.js";import{n as u}from"./chunk-Y2CYZVJY-CBNR835G.js";import{i as ye,n as it,t as xt}from"./d3-selection-Cnc6IvH5.js";import{C as ge,H as pe,U as ve,_ as Te,a as xe,b as ut,c as be,q as we,s as _e,v as De}from"./chunk-BG4553SI-DY09p9mN.js";import{E as Se,T as Me,_ as Ce,a as Ut,c as Xt,d as Zt,f as Ee,g as Ie,h as Ye,i as $e,l as Ae,m as Le,n as Fe,o as Qt,p as Jt,s as Kt,u as te,v as Oe,x as We}from"./d3-scale-BPM3SGks.js";import{t as Ve}from"./dist-_V4sOGbj.js";import{_ as ze}from"./chunk-6MUBBAK2-6_1rkoIr.js";function Pe(t){return t}var wt=1,It=2,$t=3,bt=4,ee=1e-6;function Ne(t){return"translate("+t+",0)"}function Re(t){return"translate(0,"+t+")"}function He(t){return e=>+t(e)}function Be(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function je(){return!this.__axis}function re(t,e){var n=[],i=null,r=null,h=6,v=6,M=3,$=typeof window<"u"&&window.devicePixelRatio>1?0:.5,_=t===wt||t===bt?-1:1,S=t===bt||t===It?"x":"y",z=t===wt||t===$t?Ne:Re;function x(b){var N=i??(e.ticks?e.ticks.apply(e,n):e.domain()),R=r??(e.tickFormat?e.tickFormat.apply(e,n):Pe),g=Math.max(h,0)+M,E=e.range(),V=+E[0]+$,F=+E[E.length-1]+$,H=(e.bandwidth?Be:He)(e.copy(),$),P=b.selection?b.selection():b,Y=P.selectAll(".domain").data([null]),T=P.selectAll(".tick").data(N,e).order(),k=T.exit(),I=T.enter().append("g").attr("class","tick"),m=T.select("line"),p=T.select("text");Y=Y.merge(Y.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(I),m=m.merge(I.append("line").attr("stroke","currentColor").attr(S+"2",_*h)),p=p.merge(I.append("text").attr("fill","currentColor").attr(S,_*g).attr("dy",t===wt?"0em":t===$t?"0.71em":"0.32em")),b!==P&&(Y=Y.transition(b),T=T.transition(b),m=m.transition(b),p=p.transition(b),k=k.transition(b).attr("opacity",ee).attr("transform",function(s){return isFinite(s=H(s))?z(s+$):this.getAttribute("transform")}),I.attr("opacity",ee).attr("transform",function(s){var o=this.parentNode.__axis;return z((o&&isFinite(o=o(s))?o:H(s))+$)})),k.remove(),Y.attr("d",t===bt||t===It?v?"M"+_*v+","+V+"H"+$+"V"+F+"H"+_*v:"M"+$+","+V+"V"+F:v?"M"+V+","+_*v+"V"+$+"H"+F+"V"+_*v:"M"+V+","+$+"H"+F),T.attr("opacity",1).attr("transform",function(s){return z(H(s)+$)}),m.attr(S+"2",_*h),p.attr(S,_*g).text(R),P.filter(je).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===It?"start":t===bt?"end":"middle"),P.each(function(){this.__axis=H})}return x.scale=function(b){return arguments.length?(e=b,x):e},x.ticks=function(){return n=Array.from(arguments),x},x.tickArguments=function(b){return arguments.length?(n=b==null?[]:Array.from(b),x):n.slice()},x.tickValues=function(b){return arguments.length?(i=b==null?null:Array.from(b),x):i&&i.slice()},x.tickFormat=function(b){return arguments.length?(r=b,x):r},x.tickSize=function(b){return arguments.length?(h=v=+b,x):h},x.tickSizeInner=function(b){return arguments.length?(h=+b,x):h},x.tickSizeOuter=function(b){return arguments.length?(v=+b,x):v},x.tickPadding=function(b){return arguments.length?(M=+b,x):M},x.offset=function(b){return arguments.length?($=+b,x):$},x}function Ge(t){return re(wt,t)}function qe(t){return re($t,t)}var Ue=Ct(((t,e)=>{(function(n,i){typeof t=="object"&&typeof e<"u"?e.exports=i():typeof define=="function"&&define.amd?define(i):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_isoWeek=i()})(t,(function(){"use strict";var n="day";return function(i,r,h){var v=function(_){return _.add(4-_.isoWeekday(),n)},M=r.prototype;M.isoWeekYear=function(){return v(this).year()},M.isoWeek=function(_){if(!this.$utils().u(_))return this.add(7*(_-this.isoWeek()),n);var S,z,x,b,N=v(this),R=(S=this.isoWeekYear(),z=this.$u,x=(z?h.utc:h)().year(S).startOf("year"),b=4-x.isoWeekday(),x.isoWeekday()>4&&(b+=7),x.add(b,n));return N.diff(R,"week")+1},M.isoWeekday=function(_){return this.$utils().u(_)?this.day()||7:this.day(this.day()%7?_:_-7)};var $=M.startOf;M.startOf=function(_,S){var z=this.$utils(),x=!!z.u(S)||S;return z.p(_)==="isoweek"?x?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):$.bind(this)(_,S)}}}))})),Xe=Ct(((t,e)=>{(function(n,i){typeof t=="object"&&typeof e<"u"?e.exports=i():typeof define=="function"&&define.amd?define(i):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_customParseFormat=i()})(t,(function(){"use strict";var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,h=/\d\d/,v=/\d\d?/,M=/\d*[^-_:/,()\s\d]+/,$={},_=function(g){return(g=+g)+(g>68?1900:2e3)},S=function(g){return function(E){this[g]=+E}},z=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=(function(E){if(!E||E==="Z")return 0;var V=E.match(/([+-]|\d\d)/g),F=60*V[1]+(+V[2]||0);return F===0?0:V[0]==="+"?-F:F})(g)}],x=function(g){var E=$[g];return E&&(E.indexOf?E:E.s.concat(E.f))},b=function(g,E){var V,F=$.meridiem;if(F){for(var H=1;H<=24;H+=1)if(g.indexOf(F(H,0,E))>-1){V=H>12;break}}else V=g===(E?"pm":"PM");return V},N={A:[M,function(g){this.afternoon=b(g,!1)}],a:[M,function(g){this.afternoon=b(g,!0)}],Q:[r,function(g){this.month=3*(g-1)+1}],S:[r,function(g){this.milliseconds=100*+g}],SS:[h,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[v,S("seconds")],ss:[v,S("seconds")],m:[v,S("minutes")],mm:[v,S("minutes")],H:[v,S("hours")],h:[v,S("hours")],HH:[v,S("hours")],hh:[v,S("hours")],D:[v,S("day")],DD:[h,S("day")],Do:[M,function(g){var E=$.ordinal,V=g.match(/\d+/);if(this.day=V[0],E)for(var F=1;F<=31;F+=1)E(F).replace(/\[|\]/g,"")===g&&(this.day=F)}],w:[v,S("week")],ww:[h,S("week")],M:[v,S("month")],MM:[h,S("month")],MMM:[M,function(g){var E=x("months"),V=(x("monthsShort")||E.map((function(F){return F.slice(0,3)}))).indexOf(g)+1;if(V<1)throw new Error;this.month=V%12||V}],MMMM:[M,function(g){var E=x("months").indexOf(g)+1;if(E<1)throw new Error;this.month=E%12||E}],Y:[/[+-]?\d+/,S("year")],YY:[h,function(g){this.year=_(g)}],YYYY:[/\d{4}/,S("year")],Z:z,ZZ:z};function R(g){for(var E=g,V=$&&$.formats,F=(g=E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(m,p,s){var o=s&&s.toUpperCase();return p||V[s]||n[s]||V[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(d,y,f){return y||f.slice(1)}))}))).match(i),H=F.length,P=0;P<H;P+=1){var Y=F[P],T=N[Y],k=T&&T[0],I=T&&T[1];F[P]=I?{regex:k,parser:I}:Y.replace(/^\[|\]$/g,"")}return function(m){for(var p={},s=0,o=0;s<H;s+=1){var d=F[s];if(typeof d=="string")o+=d.length;else{var y=d.regex,f=d.parser,w=m.slice(o),a=y.exec(w)[0];f.call(p,a),m=m.replace(a,"")}}return(function(C){var l=C.afternoon;if(l!==void 0){var c=C.hours;l?c<12&&(C.hours+=12):c===12&&(C.hours=0),delete C.afternoon}})(p),p}}return function(g,E,V){V.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(_=g.parseTwoDigitYear);var F=E.prototype,H=F.parse;F.parse=function(P){var Y=P.date,T=P.utc,k=P.args;this.$u=T;var I=k[1];if(typeof I=="string"){var m=k[2]===!0,p=k[3]===!0,s=m||p,o=k[2];p&&(o=k[2]),$=this.$locale(),!m&&o&&($=V.Ls[o]),this.$d=(function(w,a,C,l){try{if(["x","X"].indexOf(a)>-1)return new Date((a==="X"?1e3:1)*w);var c=R(a)(w),D=c.year,L=c.month,W=c.day,O=c.hours,G=c.minutes,A=c.seconds,Z=c.milliseconds,nt=c.zone,ot=c.week,kt=new Date,yt=W||(D||L?1:kt.getDate()),ct=D||kt.getFullYear(),B=0;D&&!L||(B=L>0?L-1:kt.getMonth());var st,Q=O||0,U=G||0,rt=A||0,J=Z||0;return nt?new Date(Date.UTC(ct,B,yt,Q,U,rt,J+60*nt.offset*1e3)):C?new Date(Date.UTC(ct,B,yt,Q,U,rt,J)):(st=new Date(ct,B,yt,Q,U,rt,J),ot&&(st=l(st).week(ot).toDate()),st)}catch{return new Date("")}})(Y,I,T,V),this.init(),o&&o!==!0&&(this.$L=this.locale(o).$L),s&&Y!=this.format(I)&&(this.$d=new Date("")),$={}}else if(I instanceof Array)for(var d=I.length,y=1;y<=d;y+=1){k[1]=I[y-1];var f=V.apply(this,k);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}y===d&&(this.$d=new Date(""))}else H.call(this,P)}}}))})),Ze=Ct(((t,e)=>{(function(n,i){typeof t=="object"&&typeof e<"u"?e.exports=i():typeof define=="function"&&define.amd?define(i):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_advancedFormat=i()})(t,(function(){"use strict";return function(n,i){var r=i.prototype,h=r.format;r.format=function(v){var M=this,$=this.$locale();if(!this.isValid())return h.bind(this)(v);var _=this.$utils(),S=(v||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(z){switch(z){case"Q":return Math.ceil((M.$M+1)/3);case"Do":return $.ordinal(M.$D);case"gggg":return M.weekYear();case"GGGG":return M.isoWeekYear();case"wo":return $.ordinal(M.week(),"W");case"w":case"ww":return _.s(M.week(),z==="w"?1:2,"0");case"W":case"WW":return _.s(M.isoWeek(),z==="W"?1:2,"0");case"k":case"kk":return _.s(String(M.$H===0?24:M.$H),z==="k"?1:2,"0");case"X":return Math.floor(M.$d.getTime()/1e3);case"x":return M.$d.getTime();case"z":return"["+M.offsetName()+"]";case"zzz":return"["+M.offsetName("long")+"]";default:return z}}));return h.bind(this)(S)}}}))})),Qe=Ct(((t,e)=>{(function(n,i){typeof t=="object"&&typeof e<"u"?e.exports=i():typeof define=="function"&&define.amd?define(i):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_duration=i()})(t,(function(){"use strict";var n,i,r=1e3,h=6e4,v=36e5,M=864e5,$=31536e6,_=2628e6,S=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,z=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,x={years:$,months:_,days:M,hours:v,minutes:h,seconds:r,milliseconds:1,weeks:6048e5},b=function(Y){return Y instanceof H},N=function(Y,T,k){return new H(Y,k,T.$l)},R=function(Y){return i.p(Y)+"s"},g=function(Y){return Y<0},E=function(Y){return g(Y)?Math.ceil(Y):Math.floor(Y)},V=function(Y){return Math.abs(Y)},F=function(Y,T){return Y?g(Y)?{negative:!0,format:""+V(Y)+T}:{negative:!1,format:""+Y+T}:{negative:!1,format:""}},H=(function(){function Y(k,I,m){var p=this;if(this.$d={},this.$l=m,k===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return N(k*x[R(I)],this);if(typeof k=="number")return this.$ms=k,this.parseFromMilliseconds(),this;if(typeof k=="object")return Object.keys(k).forEach((function(d){p.$d[R(d)]=k[d]})),this.calMilliseconds(),this;if(typeof k=="string"){var s=k.match(S);if(s){var o=s.slice(2).map((function(d){return d!=null?Number(d):0}));return this.$d.years=o[0],this.$d.months=o[1],this.$d.weeks=o[2],this.$d.days=o[3],this.$d.hours=o[4],this.$d.minutes=o[5],this.$d.seconds=o[6],this.calMilliseconds(),this}}return this}var T=Y.prototype;return T.calMilliseconds=function(){var k=this;this.$ms=Object.keys(this.$d).reduce((function(I,m){return I+(k.$d[m]||0)*x[m]}),0)},T.parseFromMilliseconds=function(){var k=this.$ms;this.$d.years=E(k/$),k%=$,this.$d.months=E(k/_),k%=_,this.$d.days=E(k/M),k%=M,this.$d.hours=E(k/v),k%=v,this.$d.minutes=E(k/h),k%=h,this.$d.seconds=E(k/r),k%=r,this.$d.milliseconds=k},T.toISOString=function(){var k=F(this.$d.years,"Y"),I=F(this.$d.months,"M"),m=+this.$d.days||0;this.$d.weeks&&(m+=7*this.$d.weeks);var p=F(m,"D"),s=F(this.$d.hours,"H"),o=F(this.$d.minutes,"M"),d=this.$d.seconds||0;this.$d.milliseconds&&(d+=this.$d.milliseconds/1e3,d=Math.round(1e3*d)/1e3);var y=F(d,"S"),f=k.negative||I.negative||p.negative||s.negative||o.negative||y.negative,w=s.format||o.format||y.format?"T":"",a=(f?"-":"")+"P"+k.format+I.format+p.format+w+s.format+o.format+y.format;return a==="P"||a==="-P"?"P0D":a},T.toJSON=function(){return this.toISOString()},T.format=function(k){var I=k||"YYYY-MM-DDTHH:mm:ss",m={Y:this.$d.years,YY:i.s(this.$d.years,2,"0"),YYYY:i.s(this.$d.years,4,"0"),M:this.$d.months,MM:i.s(this.$d.months,2,"0"),D:this.$d.days,DD:i.s(this.$d.days,2,"0"),H:this.$d.hours,HH:i.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:i.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:i.s(this.$d.seconds,2,"0"),SSS:i.s(this.$d.milliseconds,3,"0")};return I.replace(z,(function(p,s){return s||String(m[p])}))},T.as=function(k){return this.$ms/x[R(k)]},T.get=function(k){var I=this.$ms,m=R(k);return m==="milliseconds"?I%=1e3:I=m==="weeks"?E(I/x[m]):this.$d[m],I||0},T.add=function(k,I,m){var p;return p=I?k*x[R(I)]:b(k)?k.$ms:N(k,this).$ms,N(this.$ms+p*(m?-1:1),this)},T.subtract=function(k,I){return this.add(k,I,!0)},T.locale=function(k){var I=this.clone();return I.$l=k,I},T.clone=function(){return N(this.$ms,this)},T.humanize=function(k){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!k)},T.valueOf=function(){return this.asMilliseconds()},T.milliseconds=function(){return this.get("milliseconds")},T.asMilliseconds=function(){return this.as("milliseconds")},T.seconds=function(){return this.get("seconds")},T.asSeconds=function(){return this.as("seconds")},T.minutes=function(){return this.get("minutes")},T.asMinutes=function(){return this.as("minutes")},T.hours=function(){return this.get("hours")},T.asHours=function(){return this.as("hours")},T.days=function(){return this.get("days")},T.asDays=function(){return this.as("days")},T.weeks=function(){return this.get("weeks")},T.asWeeks=function(){return this.as("weeks")},T.months=function(){return this.get("months")},T.asMonths=function(){return this.as("months")},T.years=function(){return this.get("years")},T.asYears=function(){return this.as("years")},Y})(),P=function(Y,T,k){return Y.add(T.years()*k,"y").add(T.months()*k,"M").add(T.days()*k,"d").add(T.hours()*k,"h").add(T.minutes()*k,"m").add(T.seconds()*k,"s").add(T.milliseconds()*k,"ms")};return function(Y,T,k){n=k,i=k().$utils(),k.duration=function(p,s){return N(p,{$l:k.locale()},s)},k.isDuration=b;var I=T.prototype.add,m=T.prototype.subtract;T.prototype.add=function(p,s){return b(p)?P(this,p,1):I.bind(this)(p,s)},T.prototype.subtract=function(p,s){return b(p)?P(this,p,-1):m.bind(this)(p,s)}}}))})),Je=Ve(),q=pt(ye(),1),Ke=pt(Ue(),1),ti=pt(Xe(),1),ei=pt(Ze(),1),ii=pt(Qe(),1),At=(function(){var t=u(function(s,o,d,y){for(d=d||{},y=s.length;y--;d[s[y]]=o);return d},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],i=[1,27],r=[1,28],h=[1,29],v=[1,30],M=[1,31],$=[1,32],_=[1,33],S=[1,34],z=[1,9],x=[1,10],b=[1,11],N=[1,12],R=[1,13],g=[1,14],E=[1,15],V=[1,16],F=[1,19],H=[1,20],P=[1,21],Y=[1,22],T=[1,23],k=[1,25],I=[1,35],m={trace:u(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:u(function(o,d,y,f,w,a,C){var l=a.length-1;switch(w){case 1:return a[l-1];case 2:this.$=[];break;case 3:a[l-1].push(a[l]),this.$=a[l-1];break;case 4:case 5:this.$=a[l];break;case 6:case 7:this.$=[];break;case 8:f.setWeekday("monday");break;case 9:f.setWeekday("tuesday");break;case 10:f.setWeekday("wednesday");break;case 11:f.setWeekday("thursday");break;case 12:f.setWeekday("friday");break;case 13:f.setWeekday("saturday");break;case 14:f.setWeekday("sunday");break;case 15:f.setWeekend("friday");break;case 16:f.setWeekend("saturday");break;case 17:f.setDateFormat(a[l].substr(11)),this.$=a[l].substr(11);break;case 18:f.enableInclusiveEndDates(),this.$=a[l].substr(18);break;case 19:f.TopAxis(),this.$=a[l].substr(8);break;case 20:f.setAxisFormat(a[l].substr(11)),this.$=a[l].substr(11);break;case 21:f.setTickInterval(a[l].substr(13)),this.$=a[l].substr(13);break;case 22:f.setExcludes(a[l].substr(9)),this.$=a[l].substr(9);break;case 23:f.setIncludes(a[l].substr(9)),this.$=a[l].substr(9);break;case 24:f.setTodayMarker(a[l].substr(12)),this.$=a[l].substr(12);break;case 27:f.setDiagramTitle(a[l].substr(6)),this.$=a[l].substr(6);break;case 28:this.$=a[l].trim(),f.setAccTitle(this.$);break;case 29:case 30:this.$=a[l].trim(),f.setAccDescription(this.$);break;case 31:f.addSection(a[l].substr(8)),this.$=a[l].substr(8);break;case 33:f.addTask(a[l-1],a[l]),this.$="task";break;case 34:this.$=a[l-1],f.setClickEvent(a[l-1],a[l],null);break;case 35:this.$=a[l-2],f.setClickEvent(a[l-2],a[l-1],a[l]);break;case 36:this.$=a[l-2],f.setClickEvent(a[l-2],a[l-1],null),f.setLink(a[l-2],a[l]);break;case 37:this.$=a[l-3],f.setClickEvent(a[l-3],a[l-2],a[l-1]),f.setLink(a[l-3],a[l]);break;case 38:this.$=a[l-2],f.setClickEvent(a[l-2],a[l],null),f.setLink(a[l-2],a[l-1]);break;case 39:this.$=a[l-3],f.setClickEvent(a[l-3],a[l-1],a[l]),f.setLink(a[l-3],a[l-2]);break;case 40:this.$=a[l-1],f.setLink(a[l-1],a[l]);break;case 41:case 47:this.$=a[l-1]+" "+a[l];break;case 42:case 43:case 45:this.$=a[l-2]+" "+a[l-1]+" "+a[l];break;case 44:case 46:this.$=a[l-3]+" "+a[l-2]+" "+a[l-1]+" "+a[l];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:i,14:r,15:h,16:v,17:M,18:$,19:18,20:_,21:S,22:z,23:x,24:b,25:N,26:R,27:g,28:E,29:V,30:F,31:H,33:P,35:Y,36:T,37:24,38:k,40:I},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:n,13:i,14:r,15:h,16:v,17:M,18:$,19:18,20:_,21:S,22:z,23:x,24:b,25:N,26:R,27:g,28:E,29:V,30:F,31:H,33:P,35:Y,36:T,37:24,38:k,40:I},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:u(function(o,d){if(d.recoverable)this.trace(o);else{var y=new Error(o);throw y.hash=d,y}},"parseError"),parse:u(function(o){var d=this,y=[0],f=[],w=[null],a=[],C=this.table,l="",c=0,D=0,L=0,W=2,O=1,G=a.slice.call(arguments,1),A=Object.create(this.lexer),Z={yy:{}};for(var nt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,nt)&&(Z.yy[nt]=this.yy[nt]);A.setInput(o,Z.yy),Z.yy.lexer=A,Z.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var ot=A.yylloc;a.push(ot);var kt=A.options&&A.options.ranges;typeof Z.yy.parseError=="function"?this.parseError=Z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function yt(X){y.length=y.length-2*X,w.length=w.length-X,a.length=a.length-X}u(yt,"popStack");function ct(){var X=f.pop()||A.lex()||O;return typeof X!="number"&&(X instanceof Array&&(f=X,X=f.pop()),X=d.symbols_[X]||X),X}u(ct,"lex");for(var B,st,Q,U,rt,J={},gt,tt,qt,Tt;;){if(Q=y[y.length-1],this.defaultActions[Q]?U=this.defaultActions[Q]:((B===null||typeof B>"u")&&(B=ct()),U=C[Q]&&C[Q][B]),typeof U>"u"||!U.length||!U[0]){var Et="";Tt=[];for(gt in C[Q])this.terminals_[gt]&&gt>W&&Tt.push("'"+this.terminals_[gt]+"'");A.showPosition?Et="Parse error on line "+(c+1)+`:
`+A.showPosition()+`
Expecting `+Tt.join(", ")+", got '"+(this.terminals_[B]||B)+"'":Et="Parse error on line "+(c+1)+": Unexpected "+(B==O?"end of input":"'"+(this.terminals_[B]||B)+"'"),this.parseError(Et,{text:A.match,token:this.terminals_[B]||B,line:A.yylineno,loc:ot,expected:Tt})}if(U[0]instanceof Array&&U.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Q+", token: "+B);switch(U[0]){case 1:y.push(B),w.push(A.yytext),a.push(A.yylloc),y.push(U[1]),B=null,st?(B=st,st=null):(D=A.yyleng,l=A.yytext,c=A.yylineno,ot=A.yylloc,L>0&&L--);break;case 2:if(tt=this.productions_[U[1]][1],J.$=w[w.length-tt],J._$={first_line:a[a.length-(tt||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(tt||1)].first_column,last_column:a[a.length-1].last_column},kt&&(J._$.range=[a[a.length-(tt||1)].range[0],a[a.length-1].range[1]]),rt=this.performAction.apply(J,[l,D,c,Z.yy,U[1],w,a].concat(G)),typeof rt<"u")return rt;tt&&(y=y.slice(0,-1*tt*2),w=w.slice(0,-1*tt),a=a.slice(0,-1*tt)),y.push(this.productions_[U[1]][0]),w.push(J.$),a.push(J._$),qt=C[y[y.length-2]][y[y.length-1]],y.push(qt);break;case 3:return!0}}return!0},"parse")};m.lexer=(function(){return{EOF:1,parseError:u(function(o,d){if(this.yy.parser)this.yy.parser.parseError(o,d);else throw new Error(o)},"parseError"),setInput:u(function(s,o){return this.yy=o||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:u(function(){var s=this._input[0];return this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s,s.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},"input"),unput:u(function(s){var o=s.length,d=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===y.length?this.yylloc.first_column:0)+y[y.length-d.length].length-d[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},"unput"),more:u(function(){return this._more=!0,this},"more"),reject:u(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:u(function(s){this.unput(this.match.slice(s))},"less"),pastInput:u(function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:u(function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:u(function(){var s=this.pastInput(),o=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+o+"^"},"showPosition"),test_match:u(function(s,o){var d,y,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),y=s[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],d=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var w in f)this[w]=f[w];return!1}return!1},"test_match"),next:u(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,o,d,y;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),w=0;w<f.length;w++)if(d=this._input.match(this.rules[f[w]]),d&&(!o||d[0].length>o[0].length)){if(o=d,y=w,this.options.backtrack_lexer){if(s=this.test_match(d,f[w]),s!==!1)return s;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(s=this.test_match(o,f[y]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:u(function(){var o=this.next();return o||this.lex()},"lex"),begin:u(function(o){this.conditionStack.push(o)},"begin"),popState:u(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:u(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:u(function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},"topState"),pushState:u(function(o){this.begin(o)},"pushState"),stateStackSize:u(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:u(function(o,d,y,f){switch(y){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}}})();function p(){this.yy={}}return u(p,"Parser"),p.prototype=m,m.Parser=p,new p})();At.parser=At;var ni=At;q.default.extend(Ke.default);q.default.extend(ti.default);q.default.extend(ei.default);var ie={friday:5,saturday:6},K="",Wt="",Vt=void 0,zt="",ft=[],ht=[],Pt=new Map,Nt=[],St=[],mt="",Rt="",ae=["active","done","crit","milestone","vert"],Ht=[],lt="",vt=!1,Bt=!1,jt="sunday",Mt="saturday",Lt=0,si=u(function(){Nt=[],St=[],mt="",Ht=[],_t=0,Ot=void 0,Dt=void 0,j=[],K="",Wt="",Rt="",Vt=void 0,zt="",ft=[],ht=[],vt=!1,Bt=!1,Lt=0,Pt=new Map,lt="",xe(),jt="sunday",Mt="saturday"},"clear"),ri=u(function(t){lt=t},"setDiagramId"),ai=u(function(t){Wt=t},"setAxisFormat"),oi=u(function(){return Wt},"getAxisFormat"),ci=u(function(t){Vt=t},"setTickInterval"),li=u(function(){return Vt},"getTickInterval"),ui=u(function(t){zt=t},"setTodayMarker"),di=u(function(){return zt},"getTodayMarker"),fi=u(function(t){K=t},"setDateFormat"),hi=u(function(){vt=!0},"enableInclusiveEndDates"),mi=u(function(){return vt},"endDatesAreInclusive"),ki=u(function(){Bt=!0},"enableTopAxis"),yi=u(function(){return Bt},"topAxisEnabled"),gi=u(function(t){Rt=t},"setDisplayMode"),pi=u(function(){return Rt},"getDisplayMode"),vi=u(function(){return K},"getDateFormat"),oe=u((t,e)=>{const n=e.toLowerCase().split(/[\s,]+/).filter(i=>i!=="");return[...new Set([...t,...n])]},"mergeTokens"),Ti=u(function(t){ft=oe(ft,t)},"setIncludes"),xi=u(function(){return ft},"getIncludes"),bi=u(function(t){ht=oe(ht,t)},"setExcludes"),wi=u(function(){return ht},"getExcludes"),_i=u(function(){return Pt},"getLinks"),Di=u(function(t){mt=t,Nt.push(t)},"addSection"),Si=u(function(){return Nt},"getSections"),Mi=u(function(){let t=ne();const e=10;let n=0;for(;!t&&n<e;)t=ne(),n++;return St=j,St},"getTasks"),ce=u(function(t,e,n,i){const r=t.format(e.trim()),h=t.format("YYYY-MM-DD");return i.includes(r)||i.includes(h)?!1:n.includes("weekends")&&(t.isoWeekday()===ie[Mt]||t.isoWeekday()===ie[Mt]+1)||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(r)||n.includes(h)},"isInvalidDate"),Ci=u(function(t){jt=t},"setWeekday"),Ei=u(function(){return jt},"getWeekday"),Ii=u(function(t){Mt=t},"setWeekend"),le=u(function(t,e,n,i){if(!n.length||t.manualEndTime)return;let r;t.startTime instanceof Date?r=(0,q.default)(t.startTime):r=(0,q.default)(t.startTime,e,!0),r=r.add(1,"d");let h;t.endTime instanceof Date?h=(0,q.default)(t.endTime):h=(0,q.default)(t.endTime,e,!0);const[v,M]=Yi(r,h,e,n,i);t.endTime=v.toDate(),t.renderEndTime=M},"checkTaskDates"),Yi=u(function(t,e,n,i,r){let h=!1,v=null;const M=e.add(1e4,"d");for(;t<=e;){if(h||(v=e.toDate()),h=ce(t,n,i,r),h&&(e=e.add(1,"d"),e>M))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,v]},"fixTaskDates"),ue=u(function(t,e){it.warn(`Gantt: the "${t}" statement references unknown task id(s): ${e.join(", ")}. Make sure the referenced tasks exist and declare an id. Milestones need both an id and a duration, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`)},"warnAboutUnknownTaskIds"),Ft=u(function(t,e,n){if(n=n.trim(),u(h=>{const v=h.trim();return v==="x"||v==="X"},"isTimestampFormat")(e)&&/^\d+$/.test(n))return new Date(Number(n));const i=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let h=null;const v=[],M=i.groups.ids.split(" ").filter(_=>_!=="");for(const _ of M){const S=at(_);if(S===void 0){v.push(_);continue}(!h||S.endTime>h.endTime)&&(h=S)}if(v.length>0&&ue("after",v),h)return h.endTime;const $=new Date;return $.setHours(0,0,0,0),$}let r=(0,q.default)(n,e.trim(),!0);if(r.isValid())return r.toDate();{it.debug("Invalid date:"+n),it.debug("With date format:"+e.trim());const h=new Date(n);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+n);return h}},"getStartDate"),de=u(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),fe=u(function(t,e,n,i=!1){n=n.trim();const r=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(r!==null){let _=null;const S=[],z=r.groups.ids.split(" ").filter(b=>b!=="");for(const b of z){const N=at(b);if(N===void 0){S.push(b);continue}(!_||N.startTime<_.startTime)&&(_=N)}if(S.length>0&&ue("until",S),_)return _.startTime;const x=new Date;return x.setHours(0,0,0,0),x}let h=(0,q.default)(n,e.trim(),!0);if(h.isValid())return i&&(h=h.add(1,"d")),h.toDate();let v=(0,q.default)(t);const[M,$]=de(n);if(Number.isNaN(M))it.warn(`Gantt: "${n}" is neither a valid date for the "${e.trim()}" date format nor a valid duration (e.g. "3d"), so it is ignored and the task gets a zero duration. Milestones need a duration too, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`);else{const _=v.add(M,$);_.isValid()&&(v=_)}return v.toDate()},"getEndDate"),_t=0,dt=u(function(t){return t===void 0?(_t=_t+1,"task"+_t):t},"parseId"),$i=u(function(t,e){let n;e.substr(0,1)===":"?n=e.substr(1,e.length):n=e;const i=n.split(","),r={};Gt(i,r,ae);for(let v=0;v<i.length;v++)i[v]=i[v].trim();let h="";switch(i.length){case 1:r.id=dt(),r.startTime=t.endTime,h=i[0];break;case 2:r.id=dt(),r.startTime=Ft(void 0,K,i[0]),h=i[1];break;case 3:r.id=dt(i[0]),r.startTime=Ft(void 0,K,i[1]),h=i[2];break;default:}return h&&(r.endTime=fe(r.startTime,K,h,vt),r.manualEndTime=(0,q.default)(h,"YYYY-MM-DD",!0).isValid(),le(r,K,ht,ft)),r},"compileData"),Ai=u(function(t,e){let n;e.substr(0,1)===":"?n=e.substr(1,e.length):n=e;const i=n.split(","),r={};Gt(i,r,ae);for(let h=0;h<i.length;h++)i[h]=i[h].trim();switch(i.length){case 1:r.id=dt(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=dt(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=dt(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]};break;default:}return r},"parseData"),Ot,Dt,j=[],he={},Li=u(function(t,e){const n={section:mt,type:mt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=Ai(Dt,e);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=Dt,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.vert=i.vert,n.vert?n.order=-1:(n.order=Lt,Lt++);const r=j.push(n);Dt=n.id,he[n.id]=r-1},"addTask"),at=u(function(t){const e=he[t];return j[e]},"findTaskById"),Fi=u(function(t,e){const n={section:mt,type:mt,description:t,task:t,classes:[]},i=$i(Ot,e);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.vert=i.vert,Ot=n,St.push(n)},"addTaskOrg"),ne=u(function(){const t=u(function(n){const i=j[n];let r="";switch(j[n].raw.startTime.type){case"prevTaskEnd":i.startTime=at(i.prevTaskId).endTime;break;case"getStartDate":r=Ft(void 0,K,j[n].raw.startTime.startData),r&&(j[n].startTime=r);break}return j[n].startTime&&(j[n].endTime=fe(j[n].startTime,K,j[n].raw.endTime.data,vt),j[n].endTime&&(j[n].processed=!0,j[n].manualEndTime=(0,q.default)(j[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),le(j[n],K,ht,ft))),j[n].processed},"compileTask");let e=!0;for(const[n,i]of j.entries())t(n),e=e&&i.processed;return e},"compileTasks"),Oi=u(function(t,e){let n=e;ut().securityLevel!=="loose"&&(n=(0,Je.sanitizeUrl)(e)),t.split(",").forEach(function(i){at(i)!==void 0&&(ke(i,()=>{window.open(n,"_self")}),Pt.set(i,n))}),me(t,"clickable")},"setLink"),me=u(function(t,e){t.split(",").forEach(function(n){let i=at(n);i!==void 0&&i.classes.push(e)})},"setClass"),Wi=u(function(t,e,n){if(ut().securityLevel!=="loose"||e===void 0)return;let i=[];if(typeof n=="string"){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let r=0;r<i.length;r++){let h=i[r].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),i[r]=h}}i.length===0&&i.push(t),at(t)!==void 0&&ke(t,()=>{ze.runFunc(e,...i)})},"setClickFun"),ke=u(function(t,e){Ht.push(function(){const n=lt?`${lt}-${t}`:t,i=document.querySelector(`[id="${n}"]`);i!==null&&i.addEventListener("click",function(){e()})},function(){const n=lt?`${lt}-${t}`:t,i=document.querySelector(`[id="${n}-text"]`);i!==null&&i.addEventListener("click",function(){e()})})},"pushFun"),Vi={getConfig:u(()=>ut().gantt,"getConfig"),clear:si,setDateFormat:fi,getDateFormat:vi,enableInclusiveEndDates:hi,endDatesAreInclusive:mi,enableTopAxis:ki,topAxisEnabled:yi,setAxisFormat:ai,getAxisFormat:oi,setTickInterval:ci,getTickInterval:li,setTodayMarker:ui,getTodayMarker:di,setAccTitle:ve,getAccTitle:De,setDiagramTitle:we,getDiagramTitle:ge,setDiagramId:ri,setDisplayMode:gi,getDisplayMode:pi,setAccDescription:pe,getAccDescription:Te,addSection:Di,getSections:Si,getTasks:Mi,addTask:Li,findTaskById:at,addTaskOrg:Fi,setIncludes:Ti,getIncludes:xi,setExcludes:bi,getExcludes:wi,setClickEvent:u(function(t,e,n){t.split(",").forEach(function(i){Wi(i,e,n)}),me(t,"clickable")},"setClickEvent"),setLink:Oi,getLinks:_i,bindFunctions:u(function(t){Ht.forEach(function(e){e(t)})},"bindFunctions"),parseDuration:de,isInvalidDate:ce,setWeekday:Ci,getWeekday:Ei,setWeekend:Ii};function Gt(t,e,n){let i=!0;for(;i;)i=!1,n.forEach(function(r){const h="^\\s*"+r+"\\s*$",v=new RegExp(h);t[0].match(v)&&(e[r]=!0,t.shift(1),i=!0)})}u(Gt,"getTaskTags");q.default.extend(ii.default);var zi=u(function(){it.debug("Something is calling, setConf, remove the call")},"setConf"),se={monday:Ee,tuesday:Ce,wednesday:Oe,thursday:Ie,friday:Ae,saturday:Le,sunday:Ye},Pi=u((t,e)=>{let n=[...t].map(()=>-1/0),i=[...t].sort((h,v)=>h.startTime-v.startTime||h.order-v.order),r=0;for(const h of i)for(let v=0;v<n.length;v++)if(h.startTime>=n[v]){n[v]=h.endTime,h.order=v+e,v>r&&(r=v);break}return r},"getMaxIntersections"),et,Yt=1e4,Ui={parser:ni,db:Vi,renderer:{setConf:zi,draw:u(function(t,e,n,i){const r=ut().gantt;i.db.setDiagramId(e);const h=ut().securityLevel;let v;h==="sandbox"&&(v=xt("#i"+e));const M=h==="sandbox"?xt(v.nodes()[0].contentDocument.body):xt("body"),$=h==="sandbox"?v.nodes()[0].contentDocument:document,_=$.getElementById(e);et=_.parentElement.offsetWidth,et===void 0&&(et=1200),r.useWidth!==void 0&&(et=r.useWidth);const S=i.db.getTasks(),z=S.filter(m=>!m.vert);let x=[];for(const m of z)x.push(m.type);x=I(x);const b={};let N=2*r.topPadding;if(i.db.getDisplayMode()==="compact"||r.displayMode==="compact"){const m={};for(const s of z)m[s.section]===void 0?m[s.section]=[s]:m[s.section].push(s);let p=0;for(const s of Object.keys(m)){const o=Pi(m[s],p)+1;p+=o,N+=o*(r.barHeight+r.barGap),b[s]=o}}else{N+=z.length*(r.barHeight+r.barGap);for(const m of x)b[m]=z.filter(p=>p.type===m).length}_.setAttribute("viewBox","0 0 "+et+" "+N);const R=M.select(`[id="${e}"]`),g=$e().domain([Se(S,function(m){return m.startTime}),Me(S,function(m){return m.endTime})]).rangeRound([0,et-r.leftPadding-r.rightPadding]);function E(m,p){const s=m.startTime,o=p.startTime;let d=0;return s>o?d=1:s<o&&(d=-1),d}u(E,"taskCompare"),S.sort(E),V(S,et,N),be(R,N,et,r.useMaxWidth),R.append("text").text(i.db.getDiagramTitle()).attr("x",et/2).attr("y",r.titleTopMargin).attr("class","titleText");function V(m,p,s){const o=r.barHeight,d=o+r.barGap,y=r.topPadding,f=r.leftPadding,w=Fe().domain([0,x.length]).range(["#00B9FA","#F95002"]).interpolate(We);H(d,y,f,p,s,m,i.db.getExcludes(),i.db.getIncludes()),Y(f,y,p,s),F(m,d,y,f,o,w,p,s),T(d,y,f,o,w),k(f,y,p,s)}u(V,"makeGantt");function F(m,p,s,o,d,y,f){m.sort((c,D)=>c.vert===D.vert?0:c.vert?1:-1);const w=m.filter(c=>!c.vert),a=[...new Set(w.map(c=>c.order))].map(c=>w.find(D=>D.order===c));R.append("g").selectAll("rect").data(a).enter().append("rect").attr("x",0).attr("y",function(c,D){return D=c.order,D*p+s-2}).attr("width",function(){return f-r.rightPadding/2}).attr("height",p).attr("class",function(c){for(const[D,L]of x.entries())if(c.type===L)return"section section"+D%r.numberSectionStyles;return"section section0"}).enter();const C=R.append("g").selectAll("rect").data(m).enter(),l=i.db.getLinks();if(C.append("rect").attr("id",function(c){return e+"-"+c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?g(c.startTime)+o+.5*(g(c.endTime)-g(c.startTime))-.5*d:g(c.startTime)+o}).attr("y",function(c,D){return D=c.order,c.vert?r.gridLineStartPadding:D*p+s}).attr("width",function(c){return c.milestone?d:c.vert?.08*d:g(c.renderEndTime||c.endTime)-g(c.startTime)}).attr("height",function(c){return c.vert?w.length*(r.barHeight+r.barGap)+r.barHeight*2:d}).attr("transform-origin",function(c,D){return D=c.order,(g(c.startTime)+o+.5*(g(c.endTime)-g(c.startTime))).toString()+"px "+(D*p+s+.5*d).toString()+"px"}).attr("class",function(c){const D="task";let L="";c.classes.length>0&&(L=c.classes.join(" "));let W=0;for(const[G,A]of x.entries())c.type===A&&(W=G%r.numberSectionStyles);let O="";return c.active?c.crit?O+=" activeCrit":O=" active":c.done?c.crit?O=" doneCrit":O=" done":c.crit&&(O+=" crit"),O.length===0&&(O=" task"),c.milestone&&(O=" milestone "+O),c.vert&&(O=" vert "+O),O+=W,O+=" "+L,D+O}),C.append("text").attr("id",function(c){return e+"-"+c.id+"-text"}).text(function(c){return c.task}).attr("font-size",r.fontSize).attr("x",function(c){let D=g(c.startTime),L=g(c.renderEndTime||c.endTime);if(c.milestone&&(D+=.5*(g(c.endTime)-g(c.startTime))-.5*d,L=D+d),c.vert)return g(c.startTime)+o;const W=this.getBBox().width;return W>L-D?L+W+1.5*r.leftPadding>f?D+o-5:L+o+5:(L-D)/2+D+o}).attr("y",function(c,D){return c.vert?r.gridLineStartPadding+w.length*(r.barHeight+r.barGap)+60:(D=c.order,D*p+r.barHeight/2+(r.fontSize/2-2)+s)}).attr("text-height",d).attr("class",function(c){const D=g(c.startTime);let L=g(c.endTime);c.milestone&&(L=D+d);const W=this.getBBox().width;let O="";c.classes.length>0&&(O=c.classes.join(" "));let G=0;for(const[Z,nt]of x.entries())c.type===nt&&(G=Z%r.numberSectionStyles);let A="";return c.active&&(c.crit?A="activeCritText"+G:A="activeText"+G),c.done?c.crit?A=A+" doneCritText"+G:A=A+" doneText"+G:c.crit&&(A=A+" critText"+G),c.milestone&&(A+=" milestoneText"),c.vert&&(A+=" vertText"),W>L-D?L+W+1.5*r.leftPadding>f?O+" taskTextOutsideLeft taskTextOutside"+G+" "+A:O+" taskTextOutsideRight taskTextOutside"+G+" "+A+" width-"+W:O+" taskText taskText"+G+" "+A+" width-"+W}),ut().securityLevel==="sandbox"){let c;c=xt("#i"+e);const D=c.nodes()[0].contentDocument;C.filter(function(L){return l.has(L.id)}).each(function(L){var W=D.querySelector("#"+CSS.escape(e+"-"+L.id)),O=D.querySelector("#"+CSS.escape(e+"-"+L.id+"-text"));const G=W.parentNode;var A=D.createElement("a");A.setAttribute("xlink:href",l.get(L.id)),A.setAttribute("target","_top"),G.appendChild(A),A.appendChild(W),A.appendChild(O)})}}u(F,"drawRects");function H(m,p,s,o,d,y,f,w){if(f.length===0&&w.length===0)return;let a,C;for(const{startTime:W,endTime:O}of y)(a===void 0||W<a)&&(a=W),(C===void 0||O>C)&&(C=O);if(!a||!C)return;if((0,q.default)(C).diff((0,q.default)(a),"year")>5){it.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const l=i.db.getDateFormat(),c=[];let D=null,L=(0,q.default)(a);for(;L.valueOf()<=C;)i.db.isInvalidDate(L,l,f,w)?D?D.end=L:D={start:L,end:L}:D&&(c.push(D),D=null),L=L.add(1,"d");R.append("g").selectAll("rect").data(c).enter().append("rect").attr("id",W=>e+"-exclude-"+W.start.format("YYYY-MM-DD")).attr("x",W=>g(W.start.startOf("day"))+s).attr("y",r.gridLineStartPadding).attr("width",W=>g(W.end.endOf("day"))-g(W.start.startOf("day"))).attr("height",d-p-r.gridLineStartPadding).attr("transform-origin",function(W,O){return(g(W.start)+s+.5*(g(W.end)-g(W.start))).toString()+"px "+(O*m+.5*d).toString()+"px"}).attr("class","exclude-range")}u(H,"drawExcludeDays");function P(m,p,s,o){if(s<=0||m>p)return 1/0;const d=p-m,y=q.default.duration({[o??"day"]:s}).asMilliseconds();return y<=0?1/0:Math.ceil(d/y)}u(P,"getEstimatedTickCount");function Y(m,p,s,o){const d=i.db.getDateFormat(),y=i.db.getAxisFormat();let f;y?f=y:d==="D"?f="%d":f=r.axisFormat??"%Y-%m-%d";let w=qe(g).tickSize(-o+p+r.gridLineStartPadding).tickFormat(Ut(f));const a=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(a!==null){const C=parseInt(a[1],10);if(isNaN(C)||C<=0)it.warn(`Invalid tick interval value: "${a[1]}". Skipping custom tick interval.`);else{const l=a[2],c=i.db.getWeekday()||r.weekday,D=g.domain(),L=D[0],W=D[1],O=P(L,W,C,l);if(O>Yt)it.warn(`The tick interval "${C}${l}" would generate ${O} ticks, which exceeds the maximum allowed (${Yt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(l){case"millisecond":w.ticks(Qt.every(C));break;case"second":w.ticks(Kt.every(C));break;case"minute":w.ticks(Zt.every(C));break;case"hour":w.ticks(te.every(C));break;case"day":w.ticks(Xt.every(C));break;case"week":w.ticks(se[c].every(C));break;case"month":w.ticks(Jt.every(C));break}}}if(R.append("g").attr("class","grid").attr("transform","translate("+m+", "+(o-50)+")").call(w).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let C=Ge(g).tickSize(-o+p+r.gridLineStartPadding).tickFormat(Ut(f));if(a!==null){const l=parseInt(a[1],10);if(isNaN(l)||l<=0)it.warn(`Invalid tick interval value: "${a[1]}". Skipping custom tick interval.`);else{const c=a[2],D=i.db.getWeekday()||r.weekday,L=g.domain(),W=L[0],O=L[1];if(P(W,O,l,c)<=Yt)switch(c){case"millisecond":C.ticks(Qt.every(l));break;case"second":C.ticks(Kt.every(l));break;case"minute":C.ticks(Zt.every(l));break;case"hour":C.ticks(te.every(l));break;case"day":C.ticks(Xt.every(l));break;case"week":C.ticks(se[D].every(l));break;case"month":C.ticks(Jt.every(l));break}}}R.append("g").attr("class","grid").attr("transform","translate("+m+", "+p+")").call(C).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}u(Y,"makeGrid");function T(m,p){let s=0;const o=Object.keys(b).map(d=>[d,b[d]]);R.append("g").selectAll("text").data(o).enter().append(function(d){const y=d[0].split(_e.lineBreakRegex),f=-(y.length-1)/2,w=$.createElementNS("http://www.w3.org/2000/svg","text");w.setAttribute("dy",f+"em");for(const[a,C]of y.entries()){const l=$.createElementNS("http://www.w3.org/2000/svg","tspan");l.setAttribute("alignment-baseline","central"),l.setAttribute("x","10"),a>0&&l.setAttribute("dy","1em"),l.textContent=C,w.appendChild(l)}return w}).attr("x",10).attr("y",function(d,y){if(y>0)for(let f=0;f<y;f++)return s+=o[y-1][1],d[1]*m/2+s*m+p;else return d[1]*m/2+p}).attr("font-size",r.sectionFontSize).attr("class",function(d){for(const[y,f]of x.entries())if(d[0]===f)return"sectionTitle sectionTitle"+y%r.numberSectionStyles;return"sectionTitle"})}u(T,"vertLabels");function k(m,p,s,o){const d=i.db.getTodayMarker();if(d==="off")return;const y=R.append("g").attr("class","today"),f=new Date,w=y.append("line");w.attr("x1",g(f)+m).attr("x2",g(f)+m).attr("y1",r.titleTopMargin).attr("y2",o-r.titleTopMargin).attr("class","today"),d!==""&&w.attr("style",d.replace(/,/g,";"))}u(k,"drawToday");function I(m){const p={},s=[];for(let o=0,d=m.length;o<d;++o)Object.prototype.hasOwnProperty.call(p,m[o])||(p[m[o]]=!0,s.push(m[o]));return s}u(I,"checkUnique")},"draw")},styles:u(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles")};export{Ui as diagram};
