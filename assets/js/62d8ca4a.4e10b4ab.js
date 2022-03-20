"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[6863],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,v=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(v,i(i({ref:t},s),{},{components:a})):n.createElement(v,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),r=a(7294),l=a(2389),i=a(3725),u=a(6010),o="tabItem_LplD";function c(e){var t,a,l,c=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,g=b.setTabGroupChoices,w=(0,r.useState)(h),O=w[0],x=w[1],M=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=y[d];null!=E&&E!==O&&f.some((function(e){return e.value===E}))&&x(E)}var C=function(e){var t=e.currentTarget,a=M.indexOf(t),n=f[a].value;n!==O&&(T(t),x(n),null!=d&&g(d,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=M.indexOf(e.currentTarget)+1;a=M[n]||M[0];break;case"ArrowLeft":var r=M.indexOf(e.currentTarget)-1;a=M[r]||M[M.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},v)},f.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return M.push(e)},onKeyDown:j,onFocus:C,onClick:C},l,{className:(0,u.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},755:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(9877),u=a(8215),o=["components"],c={sidebar_position:999},s="\u5b66\u4e60\u8bb0\u5f55",p={unversionedId:"review-sys",id:"review-sys",title:"\u5b66\u4e60\u8bb0\u5f55",description:"\u7a0b\u5e8f\u5458\u9886\u57df\u65f6\u4e16\u754c\u4e0a\u6700\u516c\u5e73\u7684\u804c\u4e1a\u9886\u57df",source:"@site/docs/review-sys.md",sourceDirName:".",slug:"/review-sys",permalink:"/docusaurus/docs/review-sys",tags:[],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999},sidebar:"tutorialSidebar",previous:{title:"\u7279\u6b8a \u5e03\u5c40",permalink:"/docusaurus/docs/layout-system/special"}},m={},d=[{value:"\u6bcf\u65e5\u65b0\u8fdb\u5ea6",id:"\u6bcf\u65e5\u65b0\u8fdb\u5ea6",level:2},{value:"\u9762\u8bd5",id:"\u9762\u8bd5",level:2},{value:"\u524d\u7aef\u57fa\u7840",id:"\u524d\u7aef\u57fa\u7840",level:3},{value:"\u524d\u7aef\u6846\u67b6",id:"\u524d\u7aef\u6846\u67b6",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u5e03\u5c40\u7cfb\u7edf",id:"\u5e03\u5c40\u7cfb\u7edf",level:3}],v={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b66\u4e60\u8bb0\u5f55"},"\u5b66\u4e60\u8bb0\u5f55"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u540d\u8a00")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("blockquote",{parentName:"div"},(0,l.kt)("p",{parentName:"blockquote"},"\u7a0b\u5e8f\u5458\u9886\u57df\u65f6\u4e16\u754c\u4e0a\u6700\u516c\u5e73\u7684\u804c\u4e1a\u9886\u57df")),(0,l.kt)("blockquote",{parentName:"div"},(0,l.kt)("p",{parentName:"blockquote"},"\u6280\u80fd\u6708\u5f3a\uff0c\u6280\u672f\u8d8a\u597d\uff0c\u5de5\u8d44\u8d8a\u9ad8")),(0,l.kt)("blockquote",{parentName:"div"},(0,l.kt)("p",{parentName:"blockquote"},"\u638c\u63e1\u9762\u8bd5\u6280\u5de7\uff0c\u4e13\u4e1a\u6280\u80fd\uff0c\u5c31\u4e00\u5b9a\u80fd\u88ab\u516c\u53f8\u5e94\u8058")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u590d\u4e60\u89c4\u5219")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u590d\u4e60\u65f6\u95f4\u4ee530-45\u5206\u949f\u4e3a1\u8282"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5176\u4ed6\u7684\u5de5\u5177\u5e2e\u52a9")))),(0,l.kt)("h2",{id:"\u6bcf\u65e5\u65b0\u8fdb\u5ea6"},"\u6bcf\u65e5\u65b0\u8fdb\u5ea6"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"2022\u5e74")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"mar",label:"3\u6708",mdxType:"TabItem"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"March 10 Jupiter",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9762\u8bd5\u6846\u67b6 \u521d\u6b65\u5b8c\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf \u5c3a\u5bf8\u4e0e\u4f4d\u7f6e \u76d2\u6a21\u578b \u6d6e\u52a8 \u5b9a\u4f4d"))),(0,l.kt)("li",{parentName:"ul"},"March 11 Venus",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf \u5c3a\u5bf8\u4e0e\u4f4d\u7f6e \u6269\u5c55"))),(0,l.kt)("li",{parentName:"ul"},"March 12 Saturn",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"new \u6e29\u6545\u800c\u77e5\u65b0 \u6587\u6863"))),(0,l.kt)("li",{parentName:"ul"},"March 13 Sun",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf flex\u5e03\u5c40 \u5b50\u9879\u5c5e\u6027\u548c\u5e03\u5c40"))),(0,l.kt)("li",{parentName:"ul"},"March 14 Moon",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf flex\u5e03\u5c40 \u7efc\u5408\u6848\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf grid\u5e03\u5c40 \u5bb9\u5668\u5c5e\u6027"))),(0,l.kt)("li",{parentName:"ul"},"March 15 Mars",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf grid\u5e03\u5c40 \u5b50\u9879\u5c5e\u6027 + \u9ad8\u7ea7\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf grid\u5e03\u5c40 \u9ad8\u6548\u5e03\u5c40\u5e94\u7528"))),(0,l.kt)("li",{parentName:"ul"},"March 16 Mercury",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf grid\u5e03\u5c40 \u7efc\u5408\u6848\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf \u79fb\u52a8\u7aef \u9002\u914d\u5e03\u5c40"))),(0,l.kt)("li",{parentName:"ul"},"March 17 Jupitor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf \u54cd\u5e94\u5f0f\u5e03\u5c40"))),(0,l.kt)("li",{parentName:"ul"},"March 18 Venus",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf ",(0,l.kt)("inlineCode",{parentName:"li"},"\u590d\u4e60")," 1.\u5bfc\u5b66 2.\u8fd8\u539fUI 3.\u5c3a\u5bf8\u4f4d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf \u7279\u6b8a\u5e03\u5c40 (\u521d\u6b65\u5b8c\u6210)"))),(0,l.kt)("li",{parentName:"ul"},"March 19 Saturn",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u7cfb\u7edf ",(0,l.kt)("inlineCode",{parentName:"li"},"\u590d\u4e60")," 4.flex 5.\u79fb\u52a8\u7aef\u9002\u914d 6.\u54cd\u5e94\u5f0f 7.\u7279\u6b8a 8.grid "),(0,l.kt)("li",{parentName:"ul"},"\u590d\u4e60\u65f6 \u56f0\u6b7b\u6211\u4e86 \u4f46\u590d\u4e60\u5b8c\u4e86 \u5e03\u5c40\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863\u590d\u4e60\u89c4\u52191 \u4eca\u5929\u590d\u4e60\u6628\u5929 Mac\u67e5\u770b \u8bfb\u5199\u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Venus \u5f53\u5929\u590d\u4e60 \u4e0d\u62d6\u5230 SaturnDay"))),(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863\u590d\u4e60\u89c4\u52192 SaturnDay Ipad\u67e5\u770b \u53ea\u8bfb\u6a21\u5f0f"))),(0,l.kt)("li",{parentName:"ul"},"March 20 Sun",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb \u6210\u771f100",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d \u6e90\u7801\u4e0e\u8f85\u52a9 \u8d44\u6599"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa \u6210\u771f100 \u6587\u6863\u7ed3\u6784"))))))),(0,l.kt)(u.Z,{value:"apr",label:"4\u6708",mdxType:"TabItem"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"April 01 Venus")))))),(0,l.kt)("h2",{id:"\u9762\u8bd5"},"\u9762\u8bd5"),(0,l.kt)("h3",{id:"\u524d\u7aef\u57fa\u7840"},"\u524d\u7aef\u57fa\u7840"),(0,l.kt)("h3",{id:"\u524d\u7aef\u6846\u67b6"},"\u524d\u7aef\u6846\u67b6"),(0,l.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,l.kt)("h3",{id:"\u5e03\u5c40\u7cfb\u7edf"},"\u5e03\u5c40\u7cfb\u7edf"))}k.isMDXComponent=!0}}]);