"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[6651],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,v=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?t.createElement(v,u(u({ref:n},s),{},{components:r})):t.createElement(v,u({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=r[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(7294);function o(e){var n=e.children,r=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:o},n)}},9877:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(7462),o=r(7294),a=r(2389),u=r(3725),l=r(6010),i="tabItem_LplD";function c(e){var n,r,a,c=e.lazy,s=e.block,d=e.defaultValue,p=e.values,f=e.groupId,v=e.className,m=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:m.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(r=m.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(a=m[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.UB)(),O=g.tabGroupChoices,w=g.setTabGroupChoices,E=(0,o.useState)(y),k=E[0],T=E[1],j=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=O[f];null!=_&&_!==k&&b.some((function(e){return e.value===_}))&&T(_)}var P=function(e){var n=e.currentTarget,r=j.indexOf(n),t=b[r].value;t!==k&&(x(n),T(t),null!=f&&w(f,t))},D=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=j.indexOf(e.currentTarget)+1;r=j[t]||j[0];break;case"ArrowLeft":var o=j.indexOf(e.currentTarget)-1;r=j[o]||j[j.length-1]}null==(n=r)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},b.map((function(e){var n=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:function(e){return j.push(e)},onKeyDown:D,onFocus:P,onClick:P},a,{className:(0,l.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":k===n})}),null!=r?r:n)}))),c?(0,o.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}function s(e){var n=(0,a.Z)();return o.createElement(c,(0,t.Z)({key:String(n)},e))}},386:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return s},toc:function(){return d},default:function(){return f}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),u=(r(9877),r(8215),["components"]),l={sidebar_position:8},i="\u7834\u89e3-\u89e3\u51b3\u95ee\u9898",c={unversionedId:"one-hundred/p7_solver",id:"one-hundred/p7_solver",title:"\u7834\u89e3-\u89e3\u51b3\u95ee\u9898",description:"",source:"@site/docs/one-hundred/p7_solver.md",sourceDirName:"one-hundred",slug:"/one-hundred/p7_solver",permalink:"/docusaurus/docs/one-hundred/p7_solver",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u8d28\u91cf-\u4ee3\u7801\u827a\u672f",permalink:"/docusaurus/docs/one-hundred/p6_code-quality"},next:{title:"\u8bbe\u8ba1-\u9879\u76ee\u5927\u54e5",permalink:"/docusaurus/docs/one-hundred/p8_designer"}},s={},d=[],p={toc:d};function f(e){var n=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7834\u89e3-\u89e3\u51b3\u95ee\u9898"},"\u7834\u89e3-\u89e3\u51b3\u95ee\u9898"))}f.isMDXComponent=!0}}]);