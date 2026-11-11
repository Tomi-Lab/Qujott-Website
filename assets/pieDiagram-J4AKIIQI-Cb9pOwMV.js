import{n as s}from"./chunk-Y2CYZVJY-CBNR835G.js";import{n as H}from"./d3-selection-Cnc6IvH5.js";import{C as et,H as at,U as rt,_ as it,a as nt,b as ot,c as st,f as lt,q as ct,v as dt}from"./chunk-BG4553SI-DY09p9mN.js";import{r as pt}from"./d3-scale-BPM3SGks.js";import{n as B,x as gt}from"./dist-_V4sOGbj.js";import{t as ht}from"./chunk-OHR5NZHT-BQbzp--X.js";import{t as ft}from"./chunk-JWPE2WC7-Cx-rr9nl.js";import{n as mt}from"./mermaid-parser.core-8Df4uYlT.js";import{i as ut,m as vt}from"./chunk-6MUBBAK2-6_1rkoIr.js";var U=lt.pie,L={sections:new Map,showData:!1,config:U},T=L.sections,z=L.showData,St=structuredClone(U),q={getConfig:s(()=>structuredClone(St),"getConfig"),clear:s(()=>{T=new Map,z=L.showData,nt()},"clear"),setDiagramTitle:ct,getDiagramTitle:et,setAccTitle:rt,getAccTitle:dt,setAccDescription:at,getAccDescription:it,addSection:s(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),H.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),getSections:s(()=>T,"getSections"),setShowData:s(t=>{z=t},"setShowData"),getShowData:s(()=>z,"getShowData")},xt=s((t,a)=>{ft(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),wt={parse:s(async t=>{const a=await mt("pie",t);H.debug(a),xt(a,q)},"parse")},Ct=s(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),$t=s(t=>{const a=[...t.values()].reduce((c,p)=>c+p,0),W=[...t.entries()].map(([c,p])=>({label:c,value:p})).filter(c=>c.value/a*100>=1);return gt().value(c=>c.value).sort(null)(W)},"createPieArcs"),Ht={parser:wt,db:q,renderer:{draw:s((t,a,W,c)=>{H.debug(`rendering pie chart
`+t);const p=c.db,F=ot(),g=ut(p.getConfig(),F.pie),M=40,i=18,l=4,S=450,x=S,b=ht(a),$=b.append("g");$.attr("transform","translate("+x/2+","+S/2+")");const{themeVariables:n}=F;let[O]=vt(n.pieOuterStrokeWidth);O??=2;const V=g.legendPosition,P=g.textPosition,X=g.donutHole>0&&g.donutHole<=.9?g.donutHole:0,h=Math.min(x,S)/2-M,Z=B().innerRadius(X*h).outerRadius(h),j=B().innerRadius(h*P).outerRadius(h*P),w=$.append("g");w.append("circle").attr("cx",0).attr("cy",0).attr("r",h+O/2).attr("class","pieOuterCircle");const D=p.getSections(),J=$t(D),K=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let A=0;D.forEach(e=>{A+=e});const R=J.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),_=pt(K).domain([...D.keys()]);w.selectAll("mySlices").data(R).enter().append("path").attr("d",Z).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return g.highlightSlice==="hover"?r+=" highlightedOnHover":g.highlightSlice===e.data.label&&(r+=" highlighted"),r}),w.selectAll("mySlices").data(R).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+j.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const Q=$.append("text").text(p.getDiagramTitle()).attr("x",0).attr("y",-(S-50)/2).attr("class","pieTitleText"),C=[...D.entries()].map(([e,r])=>({label:e,value:r})),f=$.selectAll(".legend").data(C).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),f.append("text").attr("x",i+l).attr("y",i-l).text(e=>p.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...f.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));let y=S,k=x+M;const o=i+l,E=C.length*o;switch(V){case"center":f.attr("transform",(e,r)=>{const d=o*C.length/2,m=-v/2-(i+l),u=r*o-d;return"translate("+m+","+u+")"});break;case"top":y+=E,f.attr("transform",(e,r)=>{const d=h;return`translate(${-v/2-(i+l)}, ${r*o-d})`}),w.attr("transform",()=>`translate(0, ${E+o})`);break;case"bottom":y+=E,f.attr("transform",(e,r)=>{const d=-h-o,m=-v/2-(i+l),u=r*o-d;return"translate("+m+","+u+")"});break;case"left":k+=i+l+v,f.attr("transform",(e,r)=>{const d=o*C.length/2,m=-h-(i+l),u=r*o-d;return"translate("+m+","+u+")"}),w.attr("transform",()=>`translate(${v+i+l}, 0)`);break;default:k+=i+l+v,f.attr("transform",(e,r)=>{const d=o*C.length/2,m=12*i,u=r*o-d;return"translate("+m+","+u+")"});break}const G=Q.node()?.getBoundingClientRect().width??0,Y=x/2-G/2,tt=x/2+G/2,N=Math.min(0,Y),I=Math.max(k,tt)-N;b.attr("viewBox",`${N} 0 ${I} ${y}`),st(b,y,I,g.useMaxWidth)},"draw")},styles:Ct};export{Ht as diagram};
