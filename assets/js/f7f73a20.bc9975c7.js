"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[8343],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:10,sidebar_label:"\u6dfb\u52a0Ranger"},o="\u6dfb\u52a0Ranger",s={unversionedId:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Ranger",id:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Ranger",title:"\u6dfb\u52a0Ranger",description:"\u521b\u5efaRanger\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Ranger.md",sourceDirName:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1",slug:"/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Ranger",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Ranger",draft:!1,editUrl:"https://github.com/gaodayu168/datasophon-website/docs/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Ranger.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"\u6dfb\u52a0Ranger"},sidebar:"docSidebar",previous:{title:"\u6dfb\u52a0Trino",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Trino"},next:{title:"\u6dfb\u52a0DolphinScheduler",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0DolphinScheduler"}},l={},c=[],p={toc:c};function g(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6dfb\u52a0ranger"},"\u6dfb\u52a0Ranger"),(0,a.kt)("p",null,"\u521b\u5efaRanger\u6570\u636e\u5e93\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE DATABASE IF NOT EXISTS ranger DEFAULT CHARACTER SET utf8;\ngrant all privileges on *.* to ranger@\"%\" identified by 'ranger' with grant option;\nGRANT ALL PRIVILEGES ON *.* TO 'ranger'@'%';\nFLUSH PRIVILEGES;\n")),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u6dfb\u52a0\u670d\u52a1\u3011\uff0c\u9009\u62e9Ranger\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221106215738313",src:r(471).Z,width:"3200",height:"1627"})),(0,a.kt)("p",null,"\u9009\u62e9RangerAdmin\u90e8\u7f72\u8282\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221119155422545",src:r(7e3).Z,width:"3178",height:"1692"})),(0,a.kt)("p",null,"\u8f93\u5165\u6570\u636e\u5e93root\u7528\u6237\u5bc6\u7801\uff0c\u6570\u636e\u5e93\u5730\u5740\uff0cRanger\u6570\u636e\u7528\u6237\u5bc6\u7801\u7b49\u914d\u7f6e\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221119155539287",src:r(2142).Z,width:"3140",height:"1647"})),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u4e0b\u4e00\u6b65\u3011\uff0c\u5f00\u59cb\u5b89\u88c5Ranger\uff0cRanger\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4f1a\u6267\u884csql\u8bed\u53e5\uff0c\u53ef\u80fd\u56e0mysql\u914d\u7f6e\u95ee\u9898\u5bfc\u81f4sql\u6267\u884c\u5931\u8d25\uff0c\u4ece\u800c\u5bfc\u81f4Ranger\u5b89\u88c5\u5931\u8d25\uff0c\u53ef\u67e5\u770b\u65e5\u5fd7\u67e5\u627esql\u6267\u884c\u5931\u8d25\u539f\u56e0\uff0c\u89e3\u51b3\u540e\u91cd\u65b0\u6dfb\u52a0\u5b9e\u4f8b\u5b89\u88c5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221119155902639",src:r(9856).Z,width:"3114",height:"1687"})),(0,a.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\u53ef\u67e5\u770bRanger\u603b\u89c8\u9875\u9762\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221122162748841",src:r(9523).Z,width:"3200",height:"1527"})))}g.isMDXComponent=!0},471:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221106215738313-e42fe548ae8f1aa63d9db257b4058daa.png"},7e3:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221119155422545-b0de6e4ee6f9f68f2cdac15c281f55df.png"},2142:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221119155539287-15ff303b002b8f06e3c24077c0748695.png"},9856:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221119155902639-399e8a83a456875787006d0dfadb8a4b.png"},9523:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221122162748841-d101a604e741460f18e61ca763e583c9.png"}}]);