(()=>{"use strict";var e,t={259:()=>{const e=window.wp.blocks,t=window.wp.element,l=window.wp.components,o=window.wp.i18n,r=window.wp.blockEditor,{InspectorControls:n}=wp.blockEditor,{PanelBody:c}=wp.components,{Fragment:a}=wp.element,{Button:i}=wp.components,{MediaUpload:s,MediaUploadCheck:d}=wp.blockEditor,m=JSON.parse('{"u2":"create-block/ljm-header"}');(0,e.registerBlockType)(m.u2,{edit:function(e){let{attributes:c,isSelected:i,setAttributes:s}=e;return(0,t.createElement)(a,null,(0,t.createElement)(n,{key:"setting"},(0,t.createElement)("div",{id:"gutenpride-controls"},(0,t.createElement)("fieldset",null,(0,t.createElement)("legend",{className:"blocks-base-control__label"},(0,o.__)("Glitch color 1","gutenpride")),(0,t.createElement)(ColorPalette,{onChange:e=>{s({glitch_color_1:e})}})),(0,t.createElement)("fieldset",null,(0,t.createElement)("legend",{className:"blocks-base-control__label"},(0,o.__)("Glitch color 2","gutenpride")),(0,t.createElement)(ColorPalette,{onChange:e=>{s({glitch_color_2:e})}})),(0,t.createElement)("fieldset",null,(0,t.createElement)("legend",{className:"blocks-base-control__label"},(0,o.__)("Text color","gutenpride")),(0,t.createElement)(ColorPalette,{onChange:e=>{s({text_color:e})}})))),(0,t.createElement)("div",(0,r.useBlockProps)(),c.title&&c.mediaUrl&&!i?(0,t.createElement)("div",{style:"--title-color:"+c.text_color+";--text-glitch-color-1:"+c.glitch_color_1+";--text-glitch-color-2:"+c.glitch_color_2},(0,t.createElement)("div",{class:"crt no-cursor"},(0,t.createElement)("div",{class:"bg-cover-monochrome"}),(0,t.createElement)("div",{class:"bg-cover"}),(0,t.createElement)("div",{style:"position: fixed; z-index: -99; width: 100%; height: 100%"}),(0,t.createElement)("div",{class:"title"},c.title))):(0,t.createElement)(l.Placeholder,{label:"Yellow Fusion section",instructions:"Add your message"},(0,t.createElement)(l.TextControl,{value:c.title,onChange:e=>s({title:e})}))))},save:function(){return(0,t.createElement)("p",r.useBlockProps.save(),"Ljm Header – hello from the saved content!")}})}},l={};function o(e){var r=l[e];if(void 0!==r)return r.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,l,r,n)=>{if(!l){var c=1/0;for(d=0;d<e.length;d++){for(var[l,r,n]=e[d],a=!0,i=0;i<l.length;i++)(!1&n||c>=n)&&Object.keys(o.O).every((e=>o.O[e](l[i])))?l.splice(i--,1):(a=!1,n<c&&(c=n));if(a){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,r,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var r,n,[c,a,i]=l,s=0;if(c.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(i)var d=i(o)}for(t&&t(l);s<c.length;s++)n=c[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},l=globalThis.webpackChunkljm_header=globalThis.webpackChunkljm_header||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=o.O(void 0,[431],(()=>o(259)));r=o.O(r)})();