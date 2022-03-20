"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[3234],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return v}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),v=i,N=c["".concat(m,".").concat(v)]||c[v]||d[v]||l;return a?n.createElement(N,r(r({ref:t},s),{},{components:a})):n.createElement(N,r({ref:t},s))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1483:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},assets:function(){return s},toc:function(){return d},default:function(){return v}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={sidebar_position:4},m="HTTP",p={unversionedId:"interview-basic/http",id:"interview-basic/http",title:"HTTP",description:"\u9898\u76ee",source:"@site/docs/interview-basic/http.md",sourceDirName:"interview-basic",slug:"/interview-basic/http",permalink:"/docusaurus/docs/interview-basic/http",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5b58\u50a8",permalink:"/docusaurus/docs/interview-basic/js-web-api/storage"},next:{title:"\u5f00\u53d1\u73af\u5883",permalink:"/docusaurus/docs/interview-basic/env-dev"}},s={},d=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"http\u72b6\u6001\u7801",id:"http\u72b6\u6001\u7801",level:2},{value:"Restful API",id:"restful-api",level:2},{value:"\u5e38\u89c1 header",id:"\u5e38\u89c1-header",level:2},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",level:2},{value:"\u5f3a\u5236\u7f13\u5b58 cache-control",id:"\u5f3a\u5236\u7f13\u5b58-cache-control",level:3},{value:"\u534f\u5546\u7f13\u5b58 Etag / Last-Modified",id:"\u534f\u5546\u7f13\u5b58-etag--last-modified",level:3},{value:"\u5237\u65b0\u9875\u9762",id:"\u5237\u65b0\u9875\u9762",level:3},{value:"\u52a0\u5bc6\u65b9\u5f0f https\u8fc7\u7a0b\u89e3\u6790",id:"\u52a0\u5bc6\u65b9\u5f0f-https\u8fc7\u7a0b\u89e3\u6790",level:2}],c={toc:d};function v(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"http"},"HTTP"),(0,l.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5e38\u89c1\u72b6\u6001\u7801"),(0,l.kt)("li",{parentName:"ol"},"Restful API"),(0,l.kt)("li",{parentName:"ol"},"\u5e38\u89c1header"),(0,l.kt)("li",{parentName:"ol"},"http \u7f13\u5b58\u673a\u5236\uff08\u91cd\u8981\uff09"),(0,l.kt)("li",{parentName:"ol"},"https \u52a0\u5bc6\u4e0e\u89e3\u6790")),(0,l.kt)("h2",{id:"http\u72b6\u6001\u7801"},"http\u72b6\u6001\u7801"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u72b6\u6001\u7801\u5206\u7c7b")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"1xx \u670d\u52a1\u7aef\u6536\u5230\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"2xx \u8bf7\u6c42\u6210\u529f"),(0,l.kt)("li",{parentName:"ul"},"3xx \u91cd\u5b9a\u5411"),(0,l.kt)("li",{parentName:"ul"},"4xx \u5ba2\u6237\u7aef\u9519\u8bef"),(0,l.kt)("li",{parentName:"ul"},"5xx \u670d\u52a1\u7aef\u9519\u8bef")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5e38\u89c1\u72b6\u6001\u7801")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"200 \u6210\u529f"),(0,l.kt)("li",{parentName:"ul"},"301 \u6c38\u4e45\u91cd\u5b9a\u5411 "),(0,l.kt)("li",{parentName:"ul"},"302 \u4e34\u65f6\u91cd\u5b9a\u5411 "),(0,l.kt)("li",{parentName:"ul"},"304 \u8d44\u6e90\u672a\u88ab\u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},"404 \u8d44\u6e90\u672a\u627e\u5230"),(0,l.kt)("li",{parentName:"ul"},"403 \u65e0\u6743\u9650"),(0,l.kt)("li",{parentName:"ul"},"500 \u670d\u52a1\u5668\u9519\u8bef"),(0,l.kt)("li",{parentName:"ul"},"504 \u7f51\u5173\u8d85\u65f6")))),(0,l.kt)("h2",{id:"restful-api"},"Restful API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f20\u7edf http methods",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"get \u83b7\u53d6\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"post \u63d0\u4ea4\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},"\u73b0\u5728 http methods",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"get \u83b7\u53d6\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"post \u65b0\u5efa\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"patch/put \u66f4\u65b0\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"delete \u5220\u9664\u6570\u636e")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8fc7\u6e21\u5230 Restful API")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4f20\u7edfAPI\u8bbe\u8ba1 ",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u628a\u6bcf\u4e2aurl\u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"\u4e00\u4e2a\u529f\u80fd")," \u7528\u4e0d\u540c\u547d\u540d\u8868\u793a\u64cd\u4f5c\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528url\u53c2\u6570 /api/list?page=1"))),(0,l.kt)("li",{parentName:"ul"},"Restful API\u8bbe\u8ba1 ",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u628a\u6bcf\u4e2aurl\u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"\u4e00\u4e2a\u552f\u4e00\u8d44\u6e90\u6807\u8bc6")," "),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u4f7f\u7528url\u53c2\u6570 /api/list/1"),(0,l.kt)("li",{parentName:"ol"},"\u540c\u4e00\u4e2aurl \u7528method \u8868\u793a\u64cd\u4f5c\u7c7b\u578b get/post/put/delete")))))),(0,l.kt)("h2",{id:"\u5e38\u89c1-header"},"\u5e38\u89c1 header"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u524d\u7aef Request Headers")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"content-type \u53d1\u9001\u6570\u636e\u7684\u683c\u5f0f application/json"),(0,l.kt)("li",{parentName:"ul"},"connection:keep-alive \u4e00\u6b21TCP\u8fde\u63a5 \u91cd\u590d\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"cookie"),(0,l.kt)("li",{parentName:"ul"},"user-agent \u6d4f\u89c8\u5668\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"accept \u6d4f\u89c8\u5668\u53ef\u63a5\u6536 \u6570\u636e\u683c\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"accept-encoding \u6d4f\u89c8\u5668\u53ef\u63a5\u6536 \u538b\u7f29\u7b97\u6cd5 gzip"),(0,l.kt)("li",{parentName:"ul"},"accept-language \u6d4f\u89c8\u5668\u53ef\u63a5\u6536 \u8bed\u8a00 zh-cn"),(0,l.kt)("li",{parentName:"ul"},"host")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u540e\u7aef Response Headers")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"content-type \u8fd4\u56de\u6570\u636e \u683c\u5f0f application/json"),(0,l.kt)("li",{parentName:"ul"},"content-length \u8fd4\u56de\u6570\u636e \u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"content-encoding \u8fd4\u56de\u6570\u636e \u538b\u7f29\u7b97\u6cd5 gzip"),(0,l.kt)("li",{parentName:"ul"},"set-cookie")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7f13\u5b58\u76f8\u5173")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"cache-control expires"),(0,l.kt)("li",{parentName:"ul"},"last-modified if-modified-since"),(0,l.kt)("li",{parentName:"ul"},"etag if-none-match")))),(0,l.kt)("h2",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8bf7\u6c42\u7684\u4f18\u5316 \u51cf\u5c11\u8bf7\u6c42\u6570\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\uff08js/css/img\uff09 \u53ef\u4ee5\u88ab\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7webpack\u7ed9\u6587\u4ef6\u540d\u914d\u7f6e contenthash\u6765\u8ba1\u7b97\u6587\u4ef6\u662f\u5426\u6539\u53d8")),(0,l.kt)("h3",{id:"\u5f3a\u5236\u7f13\u5b58-cache-control"},"\u5f3a\u5236\u7f13\u5b58 cache-control"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6d41\u7a0b")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u5668\u53d1\u9001 \u521d\u6b21\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u8fd4\u56de\u8d44\u6e90\u548ccache-control"),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u6b21\u8bf7\u6c42\u5148\u5728 \u672c\u5730\u7f13\u5b58\u4e2d\u5bfb\u627e\u8d44\u6e90")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"response header")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u63a7\u5236\u7f13\u5b58\u903b\u8f91",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max-age: timestamp")," \u7f13\u5b58\u8fc7\u671f\u65f6\u95f4 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"no-cache")," \u4e0d\u4f7f\u7528 \u5f3a\u5236\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"no-store")," \u4e0d\u4f7f\u7528 \u5f3a\u5236\u7f13\u5b58\u548c\u534f\u5546\u7f13\u5b58"))),(0,l.kt)("li",{parentName:"ul"},"\u53d6\u4ee3\u7684\u8001\u65b9\u5f0f expires")))),(0,l.kt)("h3",{id:"\u534f\u5546\u7f13\u5b58-etag--last-modified"},"\u534f\u5546\u7f13\u5b58 Etag / Last-Modified"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6d41\u7a0b")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u5668\u53d1\u9001 \u521d\u6b21\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u8fd4\u56de\u8d44\u6e90 \u548c \u8d44\u6e90\u6807\u8bc6 \uff08last-modified \uff5c etag\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u518d\u6b21\u8bf7\u6c42\u5c06\u5e26\u4e0a\u8d44\u6e90\u6807\u8bc6\uff08if-modified-since \uff5c if-none-match\uff09 \u670d\u52a1\u5668\u5224\u65ad\u5ba2\u6237\u7aef\u8d44\u6e90\u662f\u5426\u4e0e\u670d\u52a1\u5668\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u81f4\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"304"),"\u53bb\u7f13\u5b58\u83b7\u53d6\u8d44\u6e90 \u82e5\u4e0d\u4e00\u81f4\u5219\u8fd4\u56de200\u548c\u6700\u65b0\u8d44\u6e90\u4e0e\u5176\u6807\u8bc6\uff08last-modified \uff5c etag\uff09")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"response header")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"last-modified \u8d44\u6e90\u6700\u540e\u4fee\u6539\u65f6\u95f4 ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u518d\u6b21\u8bf7\u6c42 request header \u5c06\u5e26\u4e0a if-modified-since \u4e0e\u670d\u52a1\u7aef\u6807\u8bc6\u5bf9\u6bd4"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u7cbe\u786e\u5230\u79d2\u7ea7"))),(0,l.kt)("li",{parentName:"ol"},"etag \u8d44\u6e90",(0,l.kt)("inlineCode",{parentName:"li"},"\u552f\u4e00\u6807\u8bc6"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u518d\u6b21\u8bf7\u6c42 request header \u5c06\u5e26\u4e0a if-none-match \u4e0e\u670d\u52a1\u7aef\u6807\u8bc6\u5bf9\u6bd4"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u4f7f\u7528etag\u4f5c \u8d44\u6e90\u6807\u8bc6"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u7cbe\u51c6")))))),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u5224\u65ad\u987a\u5e8f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5148\u8fdb\u884c\u5f3a\u5236\u7f13\u5b58\u5224\u65ad \u6709\u5219\u5728\u7f13\u5b58\u4e2d\u83b7\u53d6\u8d44\u6e90 \u65e0\u5219\u518d\u8fdb\u884c\u534f\u5546\u7f13\u5b58\u5224\u65ad"))),(0,l.kt)("h3",{id:"\u5237\u65b0\u9875\u9762"},"\u5237\u65b0\u9875\u9762"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"3\u79cd\u65b9\u5f0f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u5237\u65b0 \u8f93\u5165url\u56de\u8f66/\u8df3\u8f6c/\u524d\u8fdb\u540e\u9000",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u7f13\u5b58\u6709\u6548 \u534f\u5546\u7f13\u5b58\u6709\u6548"))),(0,l.kt)("li",{parentName:"ol"},"\u624b\u52a8\u5237\u65b0 F5 \u70b9\u51fb\u5237\u65b0\u6309\u94ae \u53f3\u952e\u83dc\u5355\u5237\u65b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u7f13\u5b58\u5931\u6548 \u534f\u5546\u7f13\u5b58\u6709\u6548"))),(0,l.kt)("li",{parentName:"ol"},"\u5f3a\u5236\u5237\u65b0 ctrl + F5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u7f13\u5b58\u5931\u6548 \u534f\u5546\u7f13\u5b58\u5931\u6548")))))),(0,l.kt)("h2",{id:"\u52a0\u5bc6\u65b9\u5f0f-https\u8fc7\u7a0b\u89e3\u6790"},"\u52a0\u5bc6\u65b9\u5f0f https\u8fc7\u7a0b\u89e3\u6790"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"http \u4e0e https")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"http \u662f\u660e\u6587\u4f20\u8f93 \u654f\u611f\u4fe1\u606f\u5bb9\u6613\u88ab\u52ab\u6301")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("img",{loading:"lazy",alt:"http",src:a(5477).Z,width:"1278",height:"580"})),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"https = http + \u52a0\u5bc6 \u4fe1\u606f\u52ab\u6301\u4e5f\u65e0\u6cd5\u89e3\u5bc6"),(0,l.kt)("li",{parentName:"ul"},"\u73b0\u4ee3\u6d4f\u89c8\u5668 \u5f00\u59cb\u5f3a\u5236 https")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u52a0\u5bc6\u65b9\u5f0f ")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u79f0\u52a0\u5bc6 \u4e00\u4e2akey\u8d1f\u8d23\u52a0\u5bc6\u548c\u89e3\u5bc6")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("img",{loading:"lazy",alt:"symmetric",src:a(439).Z,width:"1252",height:"922"}),"\n2. \u975e\u5bf9\u79f0\u52a0\u5bc6 \u4e00\u5bf9keys pucblic-key\u7528\u6765\u52a0\u5bc6 private-key\u7528\u6765\u89e3\u5bc6"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("img",{loading:"lazy",alt:"asymmetric",src:a(1887).Z,width:"1386",height:"948"})),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"https \u5148\u7528\u975e\u5bf9\u79f0\u52a0\u5bc6 \u7136\u540e\u7528\u5bf9\u79f0\u52a0\u5bc6\u51cf\u5c11\u5f00\u9500")))),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"https\u8bc1\u4e66\u4e0e\u52a0\u5bc6\u89e3\u6790\u8fc7\u7a0b")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898 \u4e2d\u95f4\u4eba\u653b\u51fb \u52ab\u6301\u8bf7\u6c42\u540e\u53d1\u9001\u81ea\u5df1\u7684\u4e00\u5bf9key"),(0,l.kt)("li",{parentName:"ul"},"\u89c4\u5219 \u4f7f\u7528\u5408\u6cd5\u7b2c\u4e09\u65b9\u8bc1\u4e66"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u6821\u9a8c\u8bc1\u4e66 \u5224\u65ad\u662f\u5426\u88ab\u52ab\u6301")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("img",{loading:"lazy",alt:"https",src:a(7337).Z,width:"1704",height:"1424"})))))}v.isMDXComponent=!0},1887:function(e,t,a){t.Z=a.p+"assets/images/encryption-asymmetric-ee890d71e6bf9cd280a792e1062caf17.png"},439:function(e,t,a){t.Z=a.p+"assets/images/encryption-symmetric-b35a1a28a21713a4d7abd8d0a2fac2e6.png"},5477:function(e,t,a){t.Z=a.p+"assets/images/http-96fea9f00172be69ac735b5d60d4baf2.png"},7337:function(e,t,a){t.Z=a.p+"assets/images/https-6f46974deaf6a9da691a39f886e54f4c.png"}}]);