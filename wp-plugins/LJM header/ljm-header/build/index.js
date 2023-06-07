(()=>{"use strict";var e,l={165:()=>{const e=window.wp.blocks;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l.apply(this,arguments)}const t=window.wp.element,o=(window.wp.components,window.wp.i18n),r=window.wp.blockEditor,{PanelBody:c}=wp.components,{Fragment:n}=wp.element,{Button:a}=wp.components,{MediaUpload:i,MediaUploadCheck:s}=wp.blockEditor,m=JSON.parse('{"u2":"create-block/ljm-header"}');(0,e.registerBlockType)(m.u2,{edit:function(e){let{attributes:c,isSelected:a,setAttributes:s}=e;const m=(0,r.useBlockProps)(),{title:g,align:u,text_color:d,glitch_color_1:v,glitch_color_2:p,flickering_color:b,image1:h,image2:k}=c,E=document.createElement("style");return E.innerHTML=`:root { --title-color: ${d}; --text-glitch-color-0: ${v}; --text-glitch-color-1:  ${p}; --flicker-color:  ${b};}`,document.head.appendChild(E),(0,t.createElement)(n,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(r.PanelColorSettings,{title:(0,o.__)("Color settings","ka-example-block"),initialOpen:!1,colorSettings:[{value:d,onChange:e=>{s({text_color:e})},label:(0,o.__)("Text color","ka-example-block")},{value:v,onChange:e=>{s({glitch_color_1:e})},label:(0,o.__)("Glitch color 1","ka-example-block")},{value:p,onChange:e=>{s({glitch_color_2:e})},label:(0,o.__)("Glitch color 2","ka-example-block")},{value:b,onChange:e=>{s({flickering_color:e})},label:(0,o.__)("Flickering color","ka-example-block")}]})),(0,t.createElement)(r.BlockControls,null,(0,t.createElement)(r.AlignmentControl,{value:u,onChange:e=>{s({align:void 0===e?"none":e})}})),(0,t.createElement)("div",l({class:"feature-icon-container"},m),a?(0,t.createElement)("div",{class:"img-preview"},(0,t.createElement)("div",{class:"bg-img-1",style:{backgroundImage:"url("+h.url+")"}}),(0,t.createElement)("div",{class:"bg-img-2",style:{backgroundImage:"url("+k.url+")"}}),(0,t.createElement)("div",{class:"toolbox"},(0,t.createElement)("div",{class:"flex"},(0,t.createElement)("div",{class:"flex-inside"},(0,t.createElement)("div",null,"background image 1"),(0,t.createElement)(i,{onSelect:function(e){s({image1:e})},type:"image",value:h.id,render:e=>{let{open:l}=e;return(0,t.createElement)("button",{onClick:l},"Replace Image")}})),(0,t.createElement)("div",{class:"flex-inside"},(0,t.createElement)("div",null,"background image 2"),(0,t.createElement)(i,{onSelect:function(e){s({image2:e})},type:"image",value:k.id,render:e=>{let{open:l}=e;return(0,t.createElement)("button",{onClick:l},"Replace Image")}}))),(0,t.createElement)("div",{class:"spacer"}),(0,t.createElement)(r.RichText,{tagName:"p",onChange:e=>{s({title:e})},allowedFormats:["core/bold","core/italic"],value:g,style:{textAlign:u,color:d}}))):(0,t.createElement)("div",null,(0,t.createElement)("div",{class:"crt no-cursor preview"},(0,t.createElement)("div",{class:"bg-cover-monochrome",style:{backgroundImage:"url("+h.url+")"}}),(0,t.createElement)("div",{class:"bg-cover",style:{backgroundImage:"url("+k.url+")"}}),(0,t.createElement)("div",{class:"title",style:{color:d}},g)))))},save:function(e){let{attributes:l}=e;r.useBlockProps.save();const{title:o,align:c,text_color:n,glitch_color_1:a,glitch_color_2:i,flickering_color:s,image1:m,image2:g}=l,u=document.createElement("style");return u.innerHTML=`:root { --title-color: ${n}; --text-glitch-color-0: ${a}; --text-glitch-color-1:  ${i}; --flicker-color:  ${s};}`,document.head.appendChild(u),(0,t.createElement)("div",null,(0,t.createElement)("div",{style:{"--title-color":n,"--text-glitch-color-0":a,"--text-glitch-color-1":i,"--flicker-color":s}},(0,t.createElement)("div",{id:"crt-dom",class:"crt no-cursor"},(0,t.createElement)("div",{class:"bg-cover-monochrome",style:{backgroundImage:"url("+m.url+")"}}),(0,t.createElement)("div",{class:"bg-cover",style:{backgroundImage:"url("+g.url+")"}}),(0,t.createElement)("div",{class:"title",style:{color:n,textAlign:c}},o))))}})}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var c=t[e]={exports:{}};return l[e](c,c.exports,o),c.exports}o.m=l,e=[],o.O=(l,t,r,c)=>{if(!t){var n=1/0;for(m=0;m<e.length;m++){for(var[t,r,c]=e[m],a=!0,i=0;i<t.length;i++)(!1&c||n>=c)&&Object.keys(o.O).every((e=>o.O[e](t[i])))?t.splice(i--,1):(a=!1,c<n&&(n=c));if(a){e.splice(m--,1);var s=r();void 0!==s&&(l=s)}}return l}c=c||0;for(var m=e.length;m>0&&e[m-1][2]>c;m--)e[m]=e[m-1];e[m]=[t,r,c]},o.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={826:0,431:0};o.O.j=l=>0===e[l];var l=(l,t)=>{var r,c,[n,a,i]=t,s=0;if(n.some((l=>0!==e[l]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(i)var m=i(o)}for(l&&l(t);s<n.length;s++)c=n[s],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(m)},t=globalThis.webpackChunkljm_header=globalThis.webpackChunkljm_header||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var r=o.O(void 0,[431],(()=>o(165)));r=o.O(r)})();