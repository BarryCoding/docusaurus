"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[5519],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4270:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:4},s="Ajax",p={unversionedId:"interview-basic/js-web-api/ajax",id:"interview-basic/js-web-api/ajax",title:"Ajax",description:"\u9898\u76ee",source:"@site/docs/interview-basic/js-web-api/ajax.md",sourceDirName:"interview-basic/js-web-api",slug:"/interview-basic/js-web-api/ajax",permalink:"/docusaurus/docs/interview-basic/js-web-api/ajax",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6",permalink:"/docusaurus/docs/interview-basic/js-web-api/event"},next:{title:"\u5b58\u50a8",permalink:"/docusaurus/docs/interview-basic/js-web-api/storage"}},c={},u=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u6838\u5fc3API XMLHttpRequest",id:"ajax",level:2},{value:"\u72b6\u6001\u7801",id:"\u72b6\u6001\u7801",level:2},{value:"readyState \u51c6\u5907\u6001",id:"readystate-\u51c6\u5907\u6001",level:3},{value:"status \u8fd4\u56de\u72b6\u6001",id:"status-\u8fd4\u56de\u72b6\u6001",level:3},{value:"\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565",id:"\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565",level:2},{value:"\u524d\u7aef \u65e0\u89c6\u540c\u6e90\u7b56\u7565",id:"\u524d\u7aef-\u65e0\u89c6\u540c\u6e90\u7b56\u7565",level:3},{value:"\u8de8\u57df\u65b9\u5f0f",id:"\u8de8\u57df\u65b9\u5f0f",level:2},{value:"JSONP",id:"jsonp",level:3},{value:"ajax\u63d2\u4ef6",id:"ajax\u63d2\u4ef6",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ajax"},"Ajax"),(0,i.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u624b\u5199\u7b80\u6613 ajax"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E8%B7%A8%E5%9F%9F%E6%96%B9%E5%BC%8F"},"\u8de8\u57df\u7684\u5e38\u7528\u65b9\u5f0f"))),(0,i.kt)("h2",{id:"ajax"},"\u6838\u5fc3API XMLHttpRequest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='ajax.js'",title:"'ajax.js'"},"function ajax(url){\n    // 0 \u8fd4\u56de promise\n    return new Promise((resolve,reject)=>{\n        const xhr = new XMLHttpRequest() // 1 \u521b\u5efaxhr\n        xhr.open('GET',url,true) // 2 open \u8fde\u63a5\n        xhr.onreadystatechange = function(){ // 3 onreadystatechange \u4e8b\u4ef6\u7ed1\u5b9a\n            if(xhr.readyState === 4){\n                if(xhr.status === 200){\n                    resolve(JSON.parse(xhr.responseText))\n                } else if(xhr.status === 404){\n                    reject(new Error('page is not found'))\n                }\n            }\n        }\n        xhr.send(null) // 4 \u53d1\u9001\u8bf7\u6c42\n    })\n}\n")),(0,i.kt)("h2",{id:"\u72b6\u6001\u7801"},"\u72b6\u6001\u7801"),(0,i.kt)("h3",{id:"readystate-\u51c6\u5907\u6001"},"readyState \u51c6\u5907\u6001"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 \u672a\u521d\u59cb\u5316 \u8fd8\u6ca1\u8c03\u7528send()"),(0,i.kt)("li",{parentName:"ul"},"1 \u8f7d\u5165 \u5df2\u8c03\u7528send() \u6b63\u5728\u53d1\u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"2 \u8f7d\u5165\u5b8c\u6210 send()\u6267\u884c\u5b8c\u6210 \u5df2\u63a5\u6536\u5230response"),(0,i.kt)("li",{parentName:"ul"},"3 \u4ea4\u4e92 \u89e3\u6790response"),(0,i.kt)("li",{parentName:"ul"},"4 \u89e3\u6790\u5b8c\u6210 \u5ba2\u6237\u7aef\u53ef\u8c03\u7528\u89e3\u6790\u540e\u7684\u54cd\u5e94\u5185\u5bb9")),(0,i.kt)("h3",{id:"status-\u8fd4\u56de\u72b6\u6001"},"status \u8fd4\u56de\u72b6\u6001"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2xx \u6210\u529f\u5904\u7406\u8bf7\u6c42 200"),(0,i.kt)("li",{parentName:"ul"},"3xx \u91cd\u5b9a\u5411 301(\u6c38\u4e45) 302(\u4e34\u65f6) 304(\u8d44\u6e90\u672a\u6539\u53d8)"),(0,i.kt)("li",{parentName:"ul"},"4xx \u5ba2\u6237\u7aef\u9519\u8bef 404(\u9875\u9762\u627e\u4e0d\u5230) 403(\u65e0\u6743\u9650)"),(0,i.kt)("li",{parentName:"ul"},"5xx \u670d\u52a1\u7aef\u9519\u8bef")),(0,i.kt)("h2",{id:"\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565"},"\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ajax\u8bf7\u6c42\u65f6 ",(0,i.kt)("strong",{parentName:"li"},"\u6d4f\u89c8\u5668\u8981\u6c42")," \u5f53\u524d\u7f51\u9875\u548cserver\u540c\u6e90\uff08\u5b89\u5168\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6e90\u8981\u6c42: 1\u534f\u8bae 2\u57df\u540d 3\u7aef\u53e3 \u4e09\u8005\u5fc5\u987b\u90fd\u4e00\u81f4")),(0,i.kt)("h3",{id:"\u524d\u7aef-\u65e0\u89c6\u540c\u6e90\u7b56\u7565"},"\u524d\u7aef \u65e0\u89c6\u540c\u6e90\u7b56\u7565"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"<img src='xxx.gif'>")," img\u6587\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u6253\u70b9"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"<link href='xxx.css'>")," css\u6587\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CDN"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"<script src='xxx.js'>")," js\u6587\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CDN"),(0,i.kt)("li",{parentName:"ul"},"JSONP")))),(0,i.kt)("h2",{id:"\u8de8\u57df\u65b9\u5f0f"},"\u8de8\u57df\u65b9\u5f0f"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u8de8\u57df\u524d\u63d0")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u7ecf\u8fc7 server\u7aef \u5141\u8bb8\u548c\u914d\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u672a\u7ecf\u8fc7server\u7aef\u5b9e\u73b0\u8de8\u57df \u8bf4\u660e\u6d4f\u89c8\u5668\u6709\u6f0f\u6d1e")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8de8\u57df\u65b9\u5f0f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"JSONP \u524d\u7aef\u8de8\u57df\u5904\u7406"),(0,i.kt)("li",{parentName:"ol"},"CORS \u670d\u52a1\u7aef\u8de8\u57df\u5904\u7406 http header\u914d\u7f6e")))),(0,i.kt)("h3",{id:"jsonp"},"JSONP"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"<script src='xxx.js'>")," \u53ef\u7ed5\u8fc7\u8de8\u57df"),(0,i.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u53ef\u4efb\u610f\u52a8\u6001\u62fc\u63a5\u6570\u636e\u8fd4\u56de"),(0,i.kt)("li",{parentName:"ol"},"\u82e5\u670d\u52a1\u7aef\u914d\u5408 script\u6807\u7b7e\u53ef\u83b7\u53d6\u8de8\u57df\u6570\u636e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title='index.html'",title:"'index.html'"},'\x3c!-- \u5148\u5b9a\u4e49\u597d\u51fd\u6570 --\x3e\n<script>\n    window.abc = function (data) {\n        console.log(data)\n    }\n<\/script>\n\x3c!-- \u4e5f\u53ef\u4ee5\u72b6\u6001\u521b\u5efascript\u6807\u7b7e jsonp\u8de8\u57df\u8fd4\u56de\u51fd\u6570\u7684\u6267\u884c \u53ef\u4f20\u53c2\u6570 --\x3e\n<script src="http://localhost:8002/jsonp.js?username=xxx&callback=abc"><\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='jsonp.js'",title:"'jsonp.js'"},"// \u6839\u636e\u53c2\u6570 \u52a8\u6001\u8fd4\u56de \u6267\u884c\u7684\u51fd\u6570 \nabc({ name: 'xxx' })\n")),(0,i.kt)("h2",{id:"ajax\u63d2\u4ef6"},"ajax\u63d2\u4ef6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"jquery \u6ca1\u7528promise"),(0,i.kt)("li",{parentName:"ol"},"fetch \u8fd4\u56depromise"),(0,i.kt)("li",{parentName:"ol"},"axios \u5bf9 XMLHttpRequest\u5c01\u88c5\u8fd4\u56depromise")))}d.isMDXComponent=!0}}]);