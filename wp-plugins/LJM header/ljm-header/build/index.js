(()=>{"use strict";var e,t={259:()=>{const e=window.wp.blocks,t=window.wp.element,l=window.wp.components,r=(window.wp.i18n,window.wp.blockEditor),{InspectorControls:o}=wp.blockEditor,{PanelBody:n}=wp.components,{Fragment:a}=wp.element,{Button:c}=wp.components,{MediaUpload:i,MediaUploadCheck:s}=wp.blockEditor,m=JSON.parse('{"u2":"create-block/ljm-header"}');(0,e.registerBlockType)(m.u2,{edit:function(e){let{attributes:o,isSelected:n,setAttributes:a}=e;return(0,t.createElement)("div",(0,r.useBlockProps)(),o.title&&!n?(0,t.createElement)("div",null,(0,t.createElement)("div",{class:"crt no-cursor"},(0,t.createElement)("div",{class:"bg-cover-monochrome"}),(0,t.createElement)("div",{class:"bg-cover"}),(0,t.createElement)("div",{class:"title"},o.title))):(0,t.createElement)(l.Placeholder,{label:"LJM header",instructions:"Custom LJM hedaer - lidl solution but it works"},(0,t.createElement)("span",null,"title"),(0,t.createElement)(l.TextControl,{value:o.title,onChange:e=>a({title:e})}),(0,t.createElement)("span",null,"bg img url 1"),(0,t.createElement)(l.TextControl,{value:o.bg_image_1,onChange:e=>a({bg_image_1:e})}),(0,t.createElement)("span",null,"bg img url 2"),(0,t.createElement)(l.TextControl,{value:o.bg_image_2,onChange:e=>a({bg_image_2:e})}),(0,t.createElement)("span",null,"title color"),(0,t.createElement)(l.TextControl,{value:o.text_color,onChange:e=>a({text_color:e})}),(0,t.createElement)("span",null,"--text-glitch-color-1"),(0,t.createElement)(l.TextControl,{value:o.glitch_color_1,onChange:e=>a({glitch_color_1:e})}),(0,t.createElement)("span",null,"--text-glitch-color-2"),(0,t.createElement)(l.TextControl,{value:o.glitch_color_1,onChange:e=>a({glitch_color_1:e})})))},save:function(e){let{attributes:l}=e;const o=r.useBlockProps.save();return(0,t.createElement)("div",o,(0,t.createElement)("div",null,(0,t.createElement)("div",{class:"crt no-cursor"},(0,t.createElement)("div",{class:"bg-cover-monochrome"}),(0,t.createElement)("div",{class:"bg-cover"}),(0,t.createElement)("div",{class:"title"},l.title))))}})}},l={};function r(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,l,o,n)=>{if(!l){var a=1/0;for(m=0;m<e.length;m++){for(var[l,o,n]=e[m],c=!0,i=0;i<l.length;i++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](l[i])))?l.splice(i--,1):(c=!1,n<a&&(a=n));if(c){e.splice(m--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[l,o,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var o,n,[a,c,i]=l,s=0;if(a.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var m=i(r)}for(t&&t(l);s<a.length;s++)n=a[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(m)},l=globalThis.webpackChunkljm_header=globalThis.webpackChunkljm_header||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=r.O(void 0,[431],(()=>r(259)));o=r.O(o)})();