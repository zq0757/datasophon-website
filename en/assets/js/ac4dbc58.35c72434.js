"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[2726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,sidebar_label:"concept"},l=void 0,i={unversionedId:"\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5",id:"\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5",title:"\u6982\u5ff5",description:"* Cluster",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5.md",sourceDirName:"\u5feb\u901f\u5f00\u59cb",slug:"/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5",permalink:"/datasophon-website/en/docs/current/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5",draft:!1,editUrl:"https://github.com/gaodayu168/datasophon-website/docs/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"concept"},sidebar:"docSidebar",previous:{title:"Quick Start",permalink:"/datasophon-website/en/docs/current/category/quick-start"},next:{title:"Prepare the environment",permalink:"/datasophon-website/en/docs/current/\u5feb\u901f\u5f00\u59cb/\u51c6\u5907\u73af\u5883"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cluster")),(0,o.kt)("p",null,"A large data storage and computing system composed of a group of services and hosts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service")),(0,o.kt)("p",null,"A software system deployed on a cluster, such as distributed storage HDFS and distributed computing SPARK."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service role")),(0,o.kt)("p",null,"The components of a service. for example HDFS have NameNode\uff0cDataNode\uff0cSecondryNameNode service role and so on."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service Role Instance")),(0,o.kt)("p",null,"A service role instance is a stably running instance process."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Role Category")),(0,o.kt)("p",null,"There are three types of service roles: Master roles,Worker roles,Client roles."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Management Node")),(0,o.kt)("p",null,"Deploy DataSophon a group of hosts on the management end."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Worker Nodes")),(0,o.kt)("p",null,"Deploy DataSophon a group of hosts at the working end."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataSophon platform management end")),(0,o.kt)("p",null,"DataSophon Platform management end\uff0cprovide Web Ui\uff0cResponsible for communication with the working end of DataSophon platform\uff0cSend service management operation instructions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataSophon platform working end")),(0,o.kt)("p",null,"A service for which the DataSophon platform executes instructions\uff0cExecute the operation instructions sent by the management end."))}p.isMDXComponent=!0}}]);