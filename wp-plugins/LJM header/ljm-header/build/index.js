(()=>{"use strict";var e,l={165:()=>{const e=window.wp.blocks;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}const t=window.wp.element,r=(window.wp.components,window.wp.i18n),o=window.wp.blockEditor,{PanelBody:n}=wp.components,{Fragment:c}=wp.element,{Button:a}=wp.components,{MediaUpload:i,MediaUploadCheck:s}=wp.blockEditor,m=JSON.parse('{"u2":"create-block/ljm-header"}');(0,e.registerBlockType)(m.u2,{edit:function(e){let{attributes:n,isSelected:a,setAttributes:s}=e;const m=(0,o.useBlockProps)(),{title:u,align:g,text_color:d,glitch_color_1:v,glitch_color_2:p,flickering_color:b,image1:h,image2:k}=n,E=document.createElement("style");return E.innerHTML=`:root { --title-color: ${d}; --text-glitch-color-0: ${v}; --text-glitch-color-1:  ${p}; --flicker-color:  ${b};}`,document.head.appendChild(E),(0,t.createElement)(c,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(o.PanelColorSettings,{title:(0,r.__)("Color settings","ka-example-block"),initialOpen:!1,colorSettings:[{value:d,onChange:e=>{s({text_color:e})},label:(0,r.__)("Text color","ka-example-block")},{value:v,onChange:e=>{s({glitch_color_1:e})},label:(0,r.__)("Glitch color 1","ka-example-block")},{value:p,onChange:e=>{s({glitch_color_2:e})},label:(0,r.__)("Glitch color 2","ka-example-block")},{value:b,onChange:e=>{s({flickering_color:e})},label:(0,r.__)("Flickering color","ka-example-block")}]})),(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(o.AlignmentControl,{value:g,onChange:e=>{s({align:void 0===e?"none":e})}})),(0,t.createElement)("div",l({class:"feature-icon-container"},m),a?(0,t.createElement)("div",{class:"img-preview"},(0,t.createElement)("div",{class:"bg-img-1",style:{backgroundImage:"url("+h.url+")"}}),(0,t.createElement)("div",{class:"bg-img-2",style:{backgroundImage:"url("+k.url+")"}}),(0,t.createElement)("div",{class:"toolbox"},(0,t.createElement)("div",{class:"flex"},(0,t.createElement)("div",{class:"flex-inside"},(0,t.createElement)("div",null,"background image 1"),(0,t.createElement)(i,{onSelect:function(e){s({image1:e})},type:"image",value:h.id,render:e=>{let{open:l}=e;return(0,t.createElement)("button",{onClick:l},"Replace Image")}})),(0,t.createElement)("div",{class:"flex-inside"},(0,t.createElement)("div",null,"background image 2"),(0,t.createElement)(i,{onSelect:function(e){s({image2:e})},type:"image",value:k.id,render:e=>{let{open:l}=e;return(0,t.createElement)("button",{onClick:l},"Replace Image")}}))),(0,t.createElement)("div",{class:"spacer"}),(0,t.createElement)(o.RichText,{tagName:"p",onChange:e=>{s({title:e})},allowedFormats:["core/bold","core/italic"],value:u,style:{textAlign:g,color:d}}))):(0,t.createElement)("div",null,(0,t.createElement)("div",{class:"crt no-cursor preview"},(0,t.createElement)("div",{class:"bg-cover-monochrome",style:{backgroundImage:"url("+h.url+")"}}),(0,t.createElement)("div",{class:"bg-cover",style:{backgroundImage:"url("+k.url+")"}}),(0,t.createElement)("div",{class:"title",style:{color:d}},u)))))},save:function(e){let{attributes:l}=e;o.useBlockProps.save();const{title:r,align:n,text_color:c,glitch_color_1:a,glitch_color_2:i,flickering_color:s,image1:m,image2:u}=l;return(0,t.createElement)("div",null,(0,t.createElement)("div",null,(0,t.createElement)("div",{id:"crt-dom",class:"crt no-cursor"},(0,t.createElement)("div",{class:"bg-cover-monochrome",style:{backgroundImage:"url("+m.url+")"}}),(0,t.createElement)("div",{class:"bg-cover",style:{backgroundImage:"url("+u.url+")"}}),(0,t.createElement)("div",{class:"title",style:{color:c,textAlign:n}},r))))}})}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var n=t[e]={exports:{}};return l[e](n,n.exports,r),n.exports}r.m=l,e=[],r.O=(l,t,o,n)=>{if(!t){var c=1/0;for(m=0;m<e.length;m++){for(var[t,o,n]=e[m],a=!0,i=0;i<t.length;i++)(!1&n||c>=n)&&Object.keys(r.O).every((e=>r.O[e](t[i])))?t.splice(i--,1):(a=!1,n<c&&(c=n));if(a){e.splice(m--,1);var s=o();void 0!==s&&(l=s)}}return l}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[t,o,n]},r.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={826:0,431:0};r.O.j=l=>0===e[l];var l=(l,t)=>{var o,n,[c,a,i]=t,s=0;if(c.some((l=>0!==e[l]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(i)var m=i(r)}for(l&&l(t);s<c.length;s++)n=c[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(m)},t=globalThis.webpackChunkljm_header=globalThis.webpackChunkljm_header||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var o=r.O(void 0,[431],(()=>r(165)));o=r.O(o)})();