"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[4832],{3905:function(e,t,a){a.d(t,{Zo:function(){return v},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},v=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,v=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,s=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(s,l(l({ref:t},v),{},{components:a})):r.createElement(s,l({ref:t},v))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3170:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return v},toc:function(){return d},default:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:9},u="\u771f\u9898",p={unversionedId:"interview-framework/vue/real",id:"interview-framework/vue/real",title:"\u771f\u9898",description:"v-show / v-if \u533a\u522b",source:"@site/docs/interview-framework/vue/real.md",sourceDirName:"interview-framework/vue",slug:"/interview-framework/vue/real",permalink:"/docusaurus/docs/interview-framework/vue/real",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u539f\u7406",permalink:"/docusaurus/docs/interview-framework/vue/principle"},next:{title:"\u65b0\u529f\u80fd",permalink:"/docusaurus/docs/interview-framework/vue/vue3/basic"}},v={},d=[{value:"v-show / v-if \u533a\u522b",id:"v-show--v-if-\u533a\u522b",level:2},{value:"\u4e3a\u4f55 v-for \u4e2d\u8981\u7528key",id:"key",level:2},{value:"\u63cf\u8ff0 Vue\u7ec4\u4ef6 \u751f\u547d\u5468\u671f",id:"\u63cf\u8ff0-vue\u7ec4\u4ef6-\u751f\u547d\u5468\u671f",level:2},{value:"Vue\u7ec4\u4ef6 \u5982\u4f55\u901a\u8baf",id:"vue\u7ec4\u4ef6-\u5982\u4f55\u901a\u8baf",level:2},{value:"\u63cf\u8ff0\u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b",id:"\u63cf\u8ff0\u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b",level:2},{value:"\u53cc\u5411\u6570\u636e\u7ed1\u5b9a v-model \u7684\u5b9e\u73b0\u539f\u7406",id:"\u53cc\u5411\u6570\u636e\u7ed1\u5b9a-v-model-\u7684\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u5bf9 MVVM \u7684\u7406\u89e3",id:"\u5bf9-mvvm-\u7684\u7406\u89e3",level:2},{value:"computed \u7279\u70b9",id:"computed-\u7279\u70b9",level:2},{value:"\u4e3a\u4f55\u7ec4\u4ef6 data \u5fc5\u987b\u662f\u51fd\u6570 \u5e76\u8fd4\u56destate\u5bf9\u8c61",id:"\u4e3a\u4f55\u7ec4\u4ef6-data-\u5fc5\u987b\u662f\u51fd\u6570-\u5e76\u8fd4\u56destate\u5bf9\u8c61",level:2},{value:"ajax\u8bf7\u6c42\u5e94\u8be5\u653e\u5728\u54ea\u4e2a\u751f\u547d\u5468\u671f",id:"ajax",level:2},{value:"\u5982\u4f55\u5c06\u7ec4\u4ef6\u6240\u6709props\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6",id:"\u5982\u4f55\u5c06\u7ec4\u4ef6\u6240\u6709props\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6",level:2},{value:"\u624b\u52a8\u5b9e\u73b0v-model",id:"\u624b\u52a8\u5b9e\u73b0v-model",level:2},{value:"\u591a\u4e2a\u7ec4\u4ef6\u516c\u5171\u903b\u8f91 \u5982\u4f55\u62bd\u79bb",id:"\u591a\u4e2a\u7ec4\u4ef6\u516c\u5171\u903b\u8f91-\u5982\u4f55\u62bd\u79bb",level:2},{value:"\u4f55\u65f6\u4f7f\u7528 \u5f02\u6b65\u7ec4\u4ef6",id:"\u4f55\u65f6\u4f7f\u7528-\u5f02\u6b65\u7ec4\u4ef6",level:2},{value:"\u4f55\u65f6\u4f7f\u7528 keep-alive",id:"\u4f55\u65f6\u4f7f\u7528-keep-alive",level:2},{value:"\u4f55\u65f6\u4f7f\u7528 beforeDestroy",id:"\u4f55\u65f6\u4f7f\u7528-beforedestroy",level:2},{value:"\u4f5c\u7528\u57df\u63d2\u69fd",id:"\u4f5c\u7528\u57df\u63d2\u69fd",level:2},{value:"vuex \u4e2d action \u4e0e mutation \u533a\u522b",id:"vuex-\u4e2d-action-\u4e0e-mutation-\u533a\u522b",level:2},{value:"vue-router \u5e38\u7528\u7684\u8def\u7531\u6a21\u5f0f",id:"vue-router-\u5e38\u7528\u7684\u8def\u7531\u6a21\u5f0f",level:2},{value:"\u914d\u7f6e \u5f02\u6b65\u52a0\u8f7d/\u61d2\u52a0\u8f7d",id:"\u914d\u7f6e-\u5f02\u6b65\u52a0\u8f7d\u61d2\u52a0\u8f7d",level:3},{value:"\u7528 vnode \u63cf\u8ff0 DOM \u7ed3\u6784",id:"\u7528-vnode-\u63cf\u8ff0-dom-\u7ed3\u6784",level:2},{value:"\u76d1\u542c data \u7684\u6838\u5fc3 API",id:"\u76d1\u542c-data-\u7684\u6838\u5fc3-api",level:2},{value:"\u76d1\u542c \u6570\u7ec4\u53d8\u5316",id:"\u76d1\u542c-\u6570\u7ec4\u53d8\u5316",level:3},{value:"diff\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6",id:"diff\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6",level:2},{value:"diff\u7b97\u6cd5\u8fc7\u7a0b",id:"diff\u7b97\u6cd5\u8fc7\u7a0b",level:3},{value:"Vue\u4e3a\u4f55\u662f\u5f02\u6b65\u6e32\u67d3 $nextTick\u4f5c\u7528",id:"vue\u4e3a\u4f55\u662f\u5f02\u6b65\u6e32\u67d3-nexttick\u4f5c\u7528",level:2},{value:"Vue \u5e38\u89c1 \u6027\u80fd\u4f18\u5316",id:"vue-\u5e38\u89c1-\u6027\u80fd\u4f18\u5316",level:2}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u771f\u9898"},"\u771f\u9898"),(0,i.kt)("h2",{id:"v-show--v-if-\u533a\u522b"},"v-show / v-if \u533a\u522b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/app/basic/#if"},"\u89e3\u7b54")),(0,i.kt)("h2",{id:"key"},"\u4e3a\u4f55 v-for \u4e2d\u8981\u7528key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4f7f\u7528key\uff0c \u4e0d\u63a8\u8350\u4f7f\u7528index/random"),(0,i.kt)("li",{parentName:"ul"},"vdom\u6bd4\u8f83\u65f6 \u786e\u4fddvdom\u7684\u552f\u4e00\u6027 \u4f7f\u7528diff\u7b97\u6cd5\uff0c\u901a\u8fc7tag\u7c7b\u578b\u548ckey\u6765\u8fdb\u884c\u5bf9\u6bd4"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7diff\u7b97\u6cd5\u5f97\u51fa\u6700\u5c11\u6e32\u67d3\u5185\u5bb9 \u63d0\u5347\u6e32\u67d3\u6027\u80fd")),(0,i.kt)("h2",{id:"\u63cf\u8ff0-vue\u7ec4\u4ef6-\u751f\u547d\u5468\u671f"},"\u63cf\u8ff0 Vue\u7ec4\u4ef6 \u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/app/components/#lifecycle"},"\u56fe\u89e3")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5355\u7ec4\u4ef6\u751f\u547d\u5468\u671f"),(0,i.kt)("li",{parentName:"ol"},"\u7236\u5b50\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u5173\u7cfb")),(0,i.kt)("h2",{id:"vue\u7ec4\u4ef6-\u5982\u4f55\u901a\u8baf"},"Vue\u7ec4\u4ef6 \u5982\u4f55\u901a\u8baf"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7236\u5b50 props $emit"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/interview-framework/vue/app/components#communication"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6")),(0,i.kt)("li",{parentName:"ol"},"vuex \u9879\u76ee\u5168\u5c40\u5c5e\u6027")),(0,i.kt)("h2",{id:"\u63cf\u8ff0\u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b"},"\u63cf\u8ff0\u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/principle#render"},"\u56fe\u89e3")),(0,i.kt)("h2",{id:"\u53cc\u5411\u6570\u636e\u7ed1\u5b9a-v-model-\u7684\u5b9e\u73b0\u539f\u7406"},"\u53cc\u5411\u6570\u636e\u7ed1\u5b9a v-model \u7684\u5b9e\u73b0\u539f\u7406"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8f93\u5165\u6846")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"input\u5143\u7d20 value=this.name"),(0,i.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u7ed1\u5b9a\u4e86input\u4e8b\u4ef6 this.name = $event.target.value"),(0,i.kt)("li",{parentName:"ol"},"data \u66f4\u65b0\u540e\u89e6\u53d1 re-render")))),(0,i.kt)("h2",{id:"\u5bf9-mvvm-\u7684\u7406\u89e3"},"\u5bf9 MVVM \u7684\u7406\u89e3"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/principle#mvvm"},"\u56fe\u89e3")),(0,i.kt)("h2",{id:"computed-\u7279\u70b9"},"computed \u7279\u70b9"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/app/basic#computed"},"\u8df3\u8f6c")),(0,i.kt)("h2",{id:"\u4e3a\u4f55\u7ec4\u4ef6-data-\u5fc5\u987b\u662f\u51fd\u6570-\u5e76\u8fd4\u56destate\u5bf9\u8c61"},"\u4e3a\u4f55\u7ec4\u4ef6 data \u5fc5\u987b\u662f\u51fd\u6570 \u5e76\u8fd4\u56destate\u5bf9\u8c61"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"script \u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"export default {}")," \u7684\u662f\u4e00\u4e2a\u7c7b/\u7ec4\u4ef6\u7d2f"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5316\u540e\u7684\u7ec4\u4ef6\u5f7c\u6b64\u7684data\u6570\u636e\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd")),(0,i.kt)("h2",{id:"ajax"},"ajax\u8bf7\u6c42\u5e94\u8be5\u653e\u5728\u54ea\u4e2a\u751f\u547d\u5468\u671f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mounted"),(0,i.kt)("li",{parentName:"ul"},"JS\u662f\u5355\u7ebf\u7a0b\uff0cajax\u8bf7\u6c42\u662f\u5f02\u6b65\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u653e\u5728mounted\u524d \u65e0\u5375\u7528 \u4e14\u8ba9\u903b\u8f91\u6df7\u4e71")),(0,i.kt)("h2",{id:"\u5982\u4f55\u5c06\u7ec4\u4ef6\u6240\u6709props\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6"},"\u5982\u4f55\u5c06\u7ec4\u4ef6\u6240\u6709props\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7236\u7ec4\u4ef6\u7684 $props"),(0,i.kt)("li",{parentName:"ul"},"\u7ed9\u5b50\u7ec4\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"li"},'<User v-bind="$props">'))),(0,i.kt)("h2",{id:"\u624b\u52a8\u5b9e\u73b0v-model"},"\u624b\u52a8\u5b9e\u73b0v-model"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/app/advanced#cus-v"},"\u8df3\u8f6c")),(0,i.kt)("h2",{id:"\u591a\u4e2a\u7ec4\u4ef6\u516c\u5171\u903b\u8f91-\u5982\u4f55\u62bd\u79bb"},"\u591a\u4e2a\u7ec4\u4ef6\u516c\u5171\u903b\u8f91 \u5982\u4f55\u62bd\u79bb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/interview-framework/vue/app/advanced#mixin"},"mixin"))),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528-\u5f02\u6b65\u7ec4\u4ef6"},"\u4f55\u65f6\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"h2",href:"/docusaurus/docs/interview-framework/vue/app/advanced#async"},"\u5f02\u6b65\u7ec4\u4ef6")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u5927\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u8def\u7531\u5f02\u6b65\u52a0\u8f7d")),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528-keep-alive"},"\u4f55\u65f6\u4f7f\u7528 keep-alive"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/app/advanced#keep-alive"},"\u8df3\u8f6c")),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528-beforedestroy"},"\u4f55\u65f6\u4f7f\u7528 beforeDestroy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6e05\u9664 \u5b9a\u65f6\u5668 setInterval setTimeout"),(0,i.kt)("li",{parentName:"ul"},"\u89e3\u7ed1 \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e8b\u4ef6 event.$off"),(0,i.kt)("li",{parentName:"ul"},"\u89e3\u7ed1 \u81ea\u5b9a\u4e49DOM\u4e8b\u4ef6 scroll\u7b49")),(0,i.kt)("h2",{id:"\u4f5c\u7528\u57df\u63d2\u69fd"},"\u4f5c\u7528\u57df\u63d2\u69fd"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/app/advanced#slot"},"\u8df3\u8f6c")),(0,i.kt)("h2",{id:"vuex-\u4e2d-action-\u4e0e-mutation-\u533a\u522b"},"vuex \u4e2d action \u4e0e mutation \u533a\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mutation \u662f\u539f\u5b50\u7ea7\u64cd\u4f5c \u53ea\u505a\u4e00\u4e2a\u64cd\u4f5c \u4e14\u4e0d\u5904\u7406\u5f02\u6b65"),(0,i.kt)("li",{parentName:"ul"},"action \u4e2d\u5904\u7406\u5f02\u6b65 \u4e5f\u53ef\u4ee5\u5408\u5e76\u591a\u4e2amutation")),(0,i.kt)("h2",{id:"vue-router-\u5e38\u7528\u7684\u8def\u7531\u6a21\u5f0f"},"vue-router \u5e38\u7528\u7684\u8def\u7531\u6a21\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/principle#router"},"\u8df3\u8f6c")),(0,i.kt)("h3",{id:"\u914d\u7f6e-\u5f02\u6b65\u52a0\u8f7d\u61d2\u52a0\u8f7d"},"\u914d\u7f6e ",(0,i.kt)("a",{parentName:"h3",href:"/docusaurus/docs/interview-framework/vue/more#router"},"\u5f02\u6b65\u52a0\u8f7d/\u61d2\u52a0\u8f7d")),(0,i.kt)("h2",{id:"\u7528-vnode-\u63cf\u8ff0-dom-\u7ed3\u6784"},"\u7528 vnode \u63cf\u8ff0 DOM \u7ed3\u6784"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/principle#vdom"},"JS-Mock")),(0,i.kt)("h2",{id:"\u76d1\u542c-data-\u7684\u6838\u5fc3-api"},"\u76d1\u542c data \u7684\u6838\u5fc3 API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/principle#responsive"},"responsive")),(0,i.kt)("h3",{id:"\u76d1\u542c-\u6570\u7ec4\u53d8\u5316"},"\u76d1\u542c ",(0,i.kt)("a",{parentName:"h3",href:"/docusaurus/docs/interview-framework/vue/principle#watch-arr"},"\u6570\u7ec4\u53d8\u5316")),(0,i.kt)("h2",{id:"diff\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6"},"diff\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/principle#diff"},"3\u4e2a\u5c42\u7ea7")),(0,i.kt)("h3",{id:"diff\u7b97\u6cd5\u8fc7\u7a0b"},"diff\u7b97\u6cd5\u8fc7\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/interview-framework/vue/principle#snabbdom"},"\u6838\u5fc3\u51fd\u6570+3\u4e2a\u5c42\u7ea7")),(0,i.kt)("h2",{id:"vue\u4e3a\u4f55\u662f\u5f02\u6b65\u6e32\u67d3-nexttick\u4f5c\u7528"},"Vue\u4e3a\u4f55\u662f\u5f02\u6b65\u6e32\u67d3 $nextTick\u4f5c\u7528"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u6e32\u67d3 \u4fbf\u4e8e\u5c06data\u4fee\u6539\u5408\u5e76 \u63d0\u9ad8\u6e32\u67d3\u6027\u80fd"),(0,i.kt)("li",{parentName:"ol"},"$nextTick \u662f\u5728\u6e32\u67d3\u5b8c\u6210\u540e\u89e6\u53d1\u56de\u8c03 \u80fd\u83b7\u53d6\u6700\u65b0DOM\u8282\u70b9")),(0,i.kt)("h2",{id:"vue-\u5e38\u89c1-\u6027\u80fd\u4f18\u5316"},"Vue \u5e38\u89c1 \u6027\u80fd\u4f18\u5316"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"v-show / v-if"),(0,i.kt)("li",{parentName:"ol"},"computed \u7f13\u5b58"),(0,i.kt)("li",{parentName:"ol"},"v-for \u5c3d\u53ef\u80fd\u4fdd\u8bc1 key\u7684\u552f\u4e00\u6027 \u4e1a\u52a1id"),(0,i.kt)("li",{parentName:"ol"},"beforeDestroy \u907f\u514d\u5185\u5b58\u6cc4\u9732"),(0,i.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"keep-alive"),(0,i.kt)("li",{parentName:"ol"},"data\u5c42\u7ea7\u8bbe\u8ba1 \u6241\u5e73\u5316"),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e vue-loader \u5728\u5f00\u53d1\u73af\u5883\u7684\u6a21\u7248\u7f16\u8bd1\uff08\u9884\u7f16\u8bd1\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/interview-basic/env-prod#performance"},"\u524d\u7aef\u901a\u7528\u4f18\u5316")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/interview-framework/webpack/performance"},"webpack\u4f18\u5316"))))}m.isMDXComponent=!0}}]);