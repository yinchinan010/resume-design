import{d as e,bx as o,a4 as s,o as a,c as l,a as r,_ as t,B as i,C as n,e as c,u as d,p as u,Y as p,X as m,F as f,t as v,W as g,j as b,Q as j}from"./@vue.2f07ec52.js";import{_ as h,P as _}from"./PreviewImage.301fb2e3.js";import{_ as w,d as x,g as k}from"./index.27d4d60a.js";import{b as C}from"./vue-router.1fa85672.js";import{l as N}from"./lodash.9a4b4219.js";import"./pinia.144cc524.js";import"./element-plus.bc463900.js";import"./lodash-es.032e1c7e.js";import"./@vueuse.7ecd16a9.js";import"./@element-plus.21c32065.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./dayjs.0371a6c7.js";import"./c-scrollbar.409fc4e1.js";import"./vue.c7f6a9e2.js";import"./async-validator.ed4c92a2.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./@floating-ui.1ef3caef.js";import"./vue-uuid.5db441ec.js";import"./moment.17f8281e.js";import"./colorpicker-v3.9786f840.js";import"./vue3-pdfjs.21d748aa.js";import"./pdfjs-dist.207706dd.js";import"./dommatrix.4ee1d507.js";import"./web-streams-polyfill.e202f7fa.js";const y={class:"nav-bar-box"},D=(e=>(i("data-v-228f7796"),e=e(),n(),e))((()=>r("div",{class:"logo"},[r("img",{src:h,alt:"logo",srcset:""}),r("span",null,"化简")],-1))),I={class:"right"},z={href:"https://gitee.com/sharemore52/resume-design",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/Hacker233/resume-design",target:"_blank",rel:"noopener noreferrer"};var E=w(e({props:{bgColor:{default:""},fontColor:{default:""},iconColor:{default:"#fff"}},setup:e=>(o((o=>({"0b6a96c6":e.bgColor,"0b7d8713":e.fontColor}))),(o,i)=>{const n=s("svg-icon");return a(),l("div",y,[D,r("div",I,[r("a",z,[t(n,{iconName:"icon-gitee-fill-round",color:e.iconColor,size:"32px"},null,8,["color"])]),r("a",M,[t(n,{iconName:"icon-github-fill",color:e.iconColor,size:"35px"},null,8,["color"])])])])})}),[["__scopeId","data-v-228f7796"]]);const F=e=>(i("data-v-12d697a1"),e=e(),n(),e),P={class:"project-introduce-box"},R=F((()=>r("h1",null,"一款开源的、免费的简历设计神器",-1))),T=F((()=>r("p",null,"快速设计、无后台、确保数据不会泄露，支持一键导出PDF、JSON数据。",-1))),V=F((()=>r("div",{class:"right"},[r("img",{class:"bgc-img",src:x,alt:""})],-1)));var q=w(e({emits:["freeMake"],setup(e,{emit:o}){const s=()=>{o("freeMake")};return(e,o)=>(a(),l("div",P,[r("div",{class:"left"},[R,T,r("div",{class:"see-more-box"},[r("div",{class:"button",onClick:s}," 免费制作 ")])]),V]))}}),[["__scopeId","data-v-12d697a1"]]);const L=[{id:"1",name:"template1",preview:"template1.png"},{id:"2",name:"template2",preview:"template2.png"}];const S=["src"],B={class:"mask-layer"},H=["src"];var J=w(e({props:{cardData:null},emits:["toDesign"],setup(e,{emit:o}){const i=e;let n=c(!1);const v=()=>{n.value=!0},g=()=>{n.value=!1},b=()=>{o("toDesign",i.cardData)},j=c(!1),h=()=>{j.value=!0},w=()=>{j.value=!1};return(o,i)=>{const c=s("svg-icon");return a(),l(f,null,[r("div",{class:"template-card-box",onMouseover:v,onMouseleave:g},[r("img",{src:d(k)(e.cardData.preview),alt:"",srcset:""},null,8,S),u(r("div",B,[r("div",{class:"preview-icon",title:"预览",onClick:h},[t(c,{iconName:"icon-yulan",className:"yulan"})]),r("div",{class:"design-button",onClick:b},"立即免费制作")],512),[[p,d(n)]])],32),u(t(_,{onClose:w},{default:m((()=>[r("img",{class:"previewImg",src:d(k)(e.cardData.preview),alt:"",srcset:""},null,8,H)])),_:1},512),[[p,j.value]])],64)}}}),[["__scopeId","data-v-42f130d2"]]);const O=r("div",{class:"title"},[r("h1",null,"免费模板 + 用心设计"),r("p",null,"用心设计每一套模板，适合各行各业从业者")],-1),Q={class:"card-list"},W=e({setup(e,{expose:o}){const s=C(),t=e=>{s.push({path:"/designer",query:{id:e.id,name:e.name}})},i=c(null);return o({scrollIntoView:()=>{i.value.scrollIntoView({behavior:"smooth"})}}),(e,o)=>(a(),l("div",{class:"template-select-box",ref_key:"templateRef",ref:i},[O,r("div",Q,[(a(!0),l(f,null,v(d(L),((e,o)=>(a(),g(J,{cardData:e,onToDesign:t},null,8,["cardData"])))),256))])],512))}});const X={},Y=e=>(i("data-v-60ed557d"),e=e(),n(),e),A={class:"footer-box"},G=Y((()=>r("a",{href:"https://space.bilibili.com/493520625?spm_id_from=333.1007.0.0",target:"_blank",rel:"noopener noreferrer"},"小猪课堂",-1))),K=Y((()=>r("div",{class:"lines"},null,-1))),U=Y((()=>r("a",{href:"https://juejin.cn/user/3034307822112798",target:"_blank",rel:"noopener noreferrer"},"掘金",-1))),Z=Y((()=>r("div",{class:"lines"},null,-1))),$=Y((()=>r("a",{href:"https://www.zhihu.com/people/luhongquan",target:"_blank",rel:"noopener noreferrer"},"会飞的猪",-1))),ee=Y((()=>r("div",{class:"visit"},null,-1)));var oe=w(X,[["render",function(e,o){const i=s("svg-icon");return a(),l("div",A,[r("ul",null,[r("li",null,[t(i,{iconName:"icon-bilibili-copy",className:"bilibili"}),G]),K,r("li",null,[t(i,{iconName:"icon-juejin-logo",className:"juejin"}),U]),Z,r("li",null,[t(i,{iconName:"icon-shejiaotubiao-10",className:"zhihu"}),$])]),ee])}],["__scopeId","data-v-60ed557d"]]);const se={ref:"introduceRef"};var ae=w(e({setup(e){b((()=>{window.addEventListener("scroll",o)})),j((()=>{window.removeEventListener("scroll",o)}));const o=N.exports.throttle((()=>{d()}),300),s=c(""),i=c("#fff"),n=c("#fff"),d=()=>{document.documentElement.scrollTop>0?(s.value="#fff",i.value="green",n.value="green"):(s.value="",n.value="#fff",i.value="#fff")},u=c(null),p=()=>{u.value.scrollIntoView()};return(e,o)=>(a(),l("div",{class:"index-box",ref:"indexRef",onScroll:d},[t(E,{bgColor:s.value,fontColor:i.value,"icon-color":n.value},null,8,["bgColor","fontColor","icon-color"]),r("div",se,[t(q,{onFreeMake:p})],512),t(W,{ref_key:"templeTef",ref:u},null,512),t(oe)],544))}}),[["__scopeId","data-v-22f0ffc8"]]);export{ae as default};