(()=>{"use strict";var e,t={165:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t.apply(this,arguments)}const o=window.wp.element,n=(window.wp.components,window.wp.i18n),r=window.wp.blockEditor,{PanelBody:l}=wp.components,{Fragment:a}=wp.element,{Button:c}=wp.components,{MediaUpload:i,MediaUploadCheck:s}=wp.blockEditor,p=JSON.parse('{"u2":"create-block/ljm-header"}');(0,e.registerBlockType)(p.u2,{edit:function(e){let{attributes:l,isSelected:c,setAttributes:i}=e;const s=(0,r.useBlockProps)(),{content:p,align:u,backgroundColor:d,textColor:v}=l;return(0,o.createElement)(a,null,(0,o.createElement)(r.InspectorControls,null,(0,o.createElement)(r.PanelColorSettings,{title:(0,n.__)("Color settings","ka-example-block"),initialOpen:!1,colorSettings:[{value:v,onChange:e=>{i({textColor:e})},label:(0,n.__)("Text color","ka-example-block")},{value:d,onChange:e=>{i({backgroundColor:e})},label:(0,n.__)("Background color","ka-example-block")}]})),(0,o.createElement)(r.BlockControls,null,(0,o.createElement)(r.AlignmentControl,{value:u,onChange:e=>{i({align:void 0===e?"none":e})}})),(0,o.createElement)(r.RichText,t({},s,{tagName:"p",onChange:e=>{i({content:e})},allowedFormats:["core/bold","core/italic"],value:p,placeholder:(0,n.__)("Write your text..."),style:{textAlign:u,backgroundColor:d,color:v}})))},save:function(e){let{attributes:t}=e;const n=r.useBlockProps.save();return(0,o.createElement)("div",n,(0,o.createElement)("div",null,(0,o.createElement)("div",{class:"crt no-cursor"},(0,o.createElement)("div",{class:"bg-cover-monochrome"}),(0,o.createElement)("div",{class:"bg-cover"}),(0,o.createElement)("div",{class:"title"},t.title))))}})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,o,r,l)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,r,l]=e[p],c=!0,i=0;i<o.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((e=>n.O[e](o[i])))?o.splice(i--,1):(c=!1,l<a&&(a=l));if(c){e.splice(p--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[o,r,l]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,[a,c,i]=o,s=0;if(a.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(i)var p=i(n)}for(t&&t(o);s<a.length;s++)l=a[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},o=globalThis.webpackChunkljm_header=globalThis.webpackChunkljm_header||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[431],(()=>n(165)));r=n.O(r)})();