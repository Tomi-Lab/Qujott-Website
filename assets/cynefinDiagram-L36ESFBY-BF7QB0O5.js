import{n as i}from"./chunk-Y2CYZVJY-CBNR835G.js";import{n as X}from"./d3-selection-Cnc6IvH5.js";import{C as ut,E as at,H as ht,U as gt,_ as $t,a as bt,c as wt,f as Ct,q as Dt,v as vt,y as V}from"./chunk-BG4553SI-DY09p9mN.js";import{t as kt}from"./chunk-OHR5NZHT-BQbzp--X.js";import{t as At}from"./chunk-JWPE2WC7-Cx-rr9nl.js";import{n as Tt}from"./mermaid-parser.core-8Df4uYlT.js";import{i as Q}from"./chunk-6MUBBAK2-6_1rkoIr.js";var rt=i(()=>({domains:new Map,transitions:[]}),"createDefaultData"),_=rt(),O={getDomains:i(()=>_.domains,"getDomains"),getTransitions:i(()=>_.transitions,"getTransitions"),setDomains:i(t=>{if(t)for(const e of t){const n=e.domain,o=(e.items??[]).map(c=>({label:c.label}));_.domains.set(n,{name:n,items:o})}},"setDomains"),setTransitions:i(t=>{t&&(_.transitions=t.filter(e=>e.from===e.to?(X.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`),!1):!0).map(e=>({from:e.from,to:e.to,label:e.label||void 0})))},"setTransitions"),getConfig:i(()=>Q({...Ct.cynefin,...V().cynefin}),"getConfig"),clear:i(()=>{bt(),_=rt()},"clear"),setAccTitle:gt,getAccTitle:vt,setDiagramTitle:Dt,getDiagramTitle:ut,getAccDescription:$t,setAccDescription:ht},Bt=i(t=>{At(t,O),O.setDomains(t.domains),O.setTransitions(t.transitions)},"populate"),St={parse:i(async t=>{const e=await Tt("cynefin",t);X.debug(e),Bt(e)},"parse")};function G(t){let e=t+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}i(G,"seededRandom");function it(t){let e=0;for(let n=0;n<t.length;n++){const o=t.charCodeAt(n);e=(e<<5)-e+o,e|=0}return e}i(it,"hashString");function st(t,e){return typeof t=="number"&&Number.isFinite(t)&&t!==0?t:it(e)}i(st,"resolveSeed");function ct(t,e,n,o){const c=t/2,m=o??t*.015,D=7,I=e/D,d=[];for(let a=0;a<=D;a++){const p=G(n+a*17)*m*2-m;d.push({x:c+p,y:a*I})}let v=`M${d[0].x},${d[0].y}`;for(let a=0;a<d.length-1;a++){const p=d[a],s=d[a+1],f=(p.y+s.y)/2,b=a%2===0?1:-1,u=m*1.5*b*G(n+a*31+7),W=p.x+u,R=f,E=s.x-u;v+=` C${W},${R} ${E},${f} ${s.x},${s.y}`}return v}i(ct,"generateFoldPath");function lt(t,e,n,o){const c=e/2,m=o??e*.015,D=7,I=t/D,d=[];for(let a=0;a<=D;a++){const p=G(n+a*23)*m*2-m;d.push({x:a*I,y:c+p})}let v=`M${d[0].x},${d[0].y}`;for(let a=0;a<d.length-1;a++){const p=d[a],s=d[a+1],f=(p.x+s.x)/2,b=a%2===0?1:-1,u=m*1.5*b*G(n+a*37+11),W=f,R=p.y+u,E=f,F=s.y-u;v+=` C${W},${R} ${E},${F} ${s.x},${s.y}`}return v}i(lt,"generateHorizontalBoundary");function dt(t,e){const n=t/2,o=e*.5,c=e,m=t*.03;return[`M${n},${o}`,`C${n+m},${o+(c-o)*.2}`,`${n-m*1.5},${o+(c-o)*.55}`,`${n+m*.5},${o+(c-o)*.75}`,`C${n-m},${o+(c-o)*.85}`,`${n+m*.3},${o+(c-o)*.95}`,`${n},${c}`].join(" ")}i(dt,"generateCliffPath");function ft(t,e,n,o){return[`M${t-n},${e}`,`A${n},${o} 0 1,1 ${t+n},${e}`,`A${n},${o} 0 1,1 ${t-n},${e}`,"Z"].join(" ")}i(ft,"generateConfusionPath");var ot={complex:{model:"Probe → Sense → Respond",practice:"Emergent Practices"},complicated:{model:"Sense → Analyse → Respond",practice:"Good Practices"},clear:{model:"Sense → Categorise → Respond",practice:"Best Practices"},chaotic:{model:"Act → Sense → Respond",practice:"Novel Practices"},confusion:{model:"",practice:"Disorder"}},Mt=i((t,e)=>{const n=t/2,o=e/2;return{complex:{cx:n/2,cy:o/2,x:0,y:0,w:n,h:o},complicated:{cx:n+n/2,cy:o/2,x:n,y:0,w:n,h:o},chaotic:{cx:n/2,cy:o+o/2,x:0,y:o,w:n,h:o},clear:{cx:n+n/2,cy:o+o/2,x:n,y:o,w:n,h:o},confusion:{cx:n,cy:o,x:n*.7,y:o*.7,w:n*.6,h:o*.6}}},"getDomainLayouts"),zt=i(()=>Q(at(),V().themeVariables).cynefin,"getCynefinDomainColors"),U=3,Lt={draw:i((t,e,n,o)=>{const c=o.db,m=c.getDomains(),D=c.getTransitions(),I=c.getDiagramTitle(),d=c.getAccTitle(),v=c.getAccDescription(),a=c.getConfig(),p=zt();X.debug("Rendering Cynefin diagram");const s=a.width,f=a.height,b=a.padding,u=a.showDomainDescriptions,W=a.boundaryAmplitude,R=s+b*2,E=f+b*2,F={complex:p.complexBg,complicated:p.complicatedBg,clear:p.clearBg,chaotic:p.chaoticBg,confusion:p.confusionBg},k=kt(e);wt(k,E,R,a.useMaxWidth??!0),k.attr("viewBox",`0 0 ${R} ${E}`),d&&k.append("title").text(d),v&&k.append("desc").text(v);const A=k.append("g").attr("transform",`translate(${b}, ${b})`),H=Mt(s,f),Z=st(a.seed,e),mt=A.append("g").attr("class","cynefin-backgrounds"),j=["complex","complicated","chaotic","clear"];for(const l of j){const r=H[l];mt.append("rect").attr("class","cynefinDomain").attr("x",r.x).attr("y",r.y).attr("width",r.w).attr("height",r.h).attr("fill",F[l]).attr("fill-opacity",.4).attr("stroke","none")}const q=A.append("g").attr("class","cynefin-boundaries");q.append("path").attr("class","cynefinBoundary").attr("d",ct(s,f,Z,W)).attr("fill","none"),q.append("path").attr("class","cynefinBoundary").attr("d",lt(s,f,Z+100,W)).attr("fill","none"),q.append("path").attr("class","cynefinCliff").attr("d",dt(s,f)).attr("fill","none");const pt=s*.15,yt=f*.15;A.append("path").attr("class","cynefinConfusion").attr("d",ft(s/2,f/2,pt,yt)).attr("fill",F.confusion).attr("fill-opacity",.5);const J=A.append("g").attr("class","cynefin-labels");for(const l of j){const r=H[l];J.append("text").attr("class","cynefinDomainLabel").attr("x",r.cx).attr("y",u?r.cy-30:r.cy).attr("text-anchor","middle").attr("dominant-baseline","middle").text(l.charAt(0).toUpperCase()+l.slice(1))}if(J.append("text").attr("class","cynefinDomainLabel").attr("x",s/2).attr("y",u?f/2-10:f/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text("Confusion"),u){const l=A.append("g").attr("class","cynefin-subtitles");for(const r of j){const x=H[r],y=ot[r];l.append("text").attr("class","cynefinSubtitle").attr("x",x.cx).attr("y",x.cy-10).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.model),l.append("text").attr("class","cynefinSubtitle").attr("x",x.cx).attr("y",x.cy+5).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.practice)}l.append("text").attr("class","cynefinSubtitle").attr("x",s/2).attr("y",f/2+8).attr("text-anchor","middle").attr("dominant-baseline","middle").text(ot.confusion.practice)}const K=A.append("g").attr("class","cynefin-items"),T=26,tt=10;for(const l of["complex","complicated","chaotic","clear","confusion"]){const r=m.get(l);if(!r||r.items.length===0)continue;const x=H[l],y=l==="confusion";let z=r.items,L=0;y&&r.items.length>U&&(L=r.items.length-U,z=r.items.slice(0,U));let B;if(y){const g=u?22:14;B=x.cy+g}else B=x.cy+(u?25:15);if([...z].forEach((g,S)=>{const w=B+S*(T+4),M=K.append("g"),N=M.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",T/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(g.label);let $=g.label.length*7;const h=N.node();if(h&&typeof h.getBBox=="function"){const Y=h.getBBox();Y.width>0&&($=Y.width)}const C=$+tt*2,P=x.cx-C/2;M.attr("transform",`translate(${P}, ${w})`),M.insert("rect","text").attr("class","cynefinItem").attr("x",0).attr("y",0).attr("width",C).attr("height",T).attr("rx",4).attr("ry",4).attr("fill",F[l]).attr("fill-opacity",.95),N.attr("x",C/2).attr("y",T/2)}),L>0){const g=B+z.length*(T+4),S=`+${L} more`,w=K.append("g"),M=w.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",T/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(S);let N=S.length*7;const $=M.node();if($&&typeof $.getBBox=="function"){const P=$.getBBox();P.width>0&&(N=P.width)}const h=N+tt*2,C=x.cx-h/2;w.attr("transform",`translate(${C}, ${g})`),w.insert("rect","text").attr("class","cynefinItemOverflow").attr("x",0).attr("y",0).attr("width",h).attr("height",T).attr("rx",4).attr("ry",4).attr("fill",F[l]).attr("fill-opacity",.6),M.attr("x",h/2).attr("y",T/2)}}if(D.length>0){const l=k.select("defs").empty()?k.append("defs"):k.select("defs"),r=`cynefin-arrow-${e}`;l.append("marker").attr("id",r).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","cynefinArrowHead");const x=A.append("g").attr("class","cynefin-arrows");D.forEach(y=>{const z=H[y.from],L=H[y.to];if(!z||!L)return;if(y.from===y.to){X.warn(`Cynefin renderer: skipping self-loop on domain "${y.from}"`);return}const B=z.cx,g=z.cy,S=L.cx,w=L.cy,M=(B+S)/2,N=(g+w)/2,$=S-B,h=w-g,C=Math.sqrt($*$+h*h),P=C*.15,Y=-h/C,xt=$/C,et=M+Y*P,nt=N+xt*P;x.append("path").attr("class","cynefinArrowLine").attr("d",`M${B},${g} Q${et},${nt} ${S},${w}`).attr("fill","none").attr("marker-end",`url(#${r})`),y.label&&x.append("text").attr("class","cynefinArrowLabel").attr("x",et).attr("y",nt-6).attr("text-anchor","middle").attr("dominant-baseline","auto").text(y.label)})}I&&A.append("text").attr("class","cynefinTitle").attr("x",s/2).attr("y",-b/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text(I)},"draw")},Nt=i(()=>Q(at(),V().themeVariables).cynefin,"getCynefinTheme"),_t={parser:St,db:O,renderer:Lt,styles:i(()=>{const t=Nt();return`
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${t.domainFontSize}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${t.itemFontSize}px;
		fill: ${t.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${t.boundaryColor};
		stroke-width: ${t.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${t.cliffColor};
		stroke-width: ${t.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${t.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${t.arrowColor};
		stroke-width: ${t.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${t.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
	}
	.cynefinTitle {
		font-size: ${t.domainFontSize+2}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	`},"styles")};export{_t as diagram};
