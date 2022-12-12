"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[4296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,v=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:6,sidebar_label:"\u6dfb\u52a0Hive"},a=void 0,c={unversionedId:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Hive",id:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Hive",title:"\u6dfb\u52a0Hive",description:"\u6dfb\u52a0Hive",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Hive.md",sourceDirName:"\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1",slug:"/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Hive",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Hive",draft:!1,editUrl:"https://github.com/gaodayu168/datasophon-website/docs/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Hive.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"\u6dfb\u52a0Hive"},sidebar:"docSidebar",previous:{title:"\u6dfb\u52a0Flink",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Flink"},next:{title:"\u6dfb\u52a0Kafka",permalink:"/datasophon-website/docs/current/\u4f7f\u7528\u624b\u518c/\u6dfb\u52a0\u670d\u52a1/\u6dfb\u52a0Kafka"}},l={},s=[{value:"\u6dfb\u52a0Hive",id:"\u6dfb\u52a0hive",level:2}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6dfb\u52a0hive"},"\u6dfb\u52a0Hive"),(0,i.kt)("p",null,"\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efaHive\u6570\u636e\u5e93\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE DATABASE IF NOT EXISTS hive DEFAULT CHARACTER SET utf8;\ngrant all privileges on *.* to hive@\"%\" identified by 'hive' with grant option;\nGRANT ALL PRIVILEGES ON *.* TO 'hive'@'%';\nFLUSH PRIVILEGES;\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20221108211816745",src:r(1303).Z,width:"3191",height:"1537"})),(0,i.kt)("p",null,"\u5b89\u88c5HiveServer2\u65f6\u4f1a\u6267\u884csql\u521b\u5efaHive\u7684\u8868\uff0c\u5728\u4e2a\u522b\u60c5\u51b5\u4e0b\u4f1a\u56e0mysql\u914d\u7f6e\u5bfc\u81f4sql\u6267\u884c\u5931\u8d25\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u5931\u8d25\u539f\u56e0\u4fee\u6539mysql\u914d\u7f6e\u3002"))}u.isMDXComponent=!0},1303:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20221108211816745-cdca2eecd8c80fb387a98bb1f3822c31.png"}}]);