"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[2120],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2955:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:2},c="\u5468\u8fb9\u5de5\u5177",u={unversionedId:"interview-framework/react/more",id:"interview-framework/react/more",title:"\u5468\u8fb9\u5de5\u5177",description:"redux",source:"@site/docs/interview-framework/react/more.md",sourceDirName:"interview-framework/react",slug:"/interview-framework/react/more",permalink:"/docusaurus/docs/interview-framework/react/more",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7\u7279\u60272",permalink:"/docusaurus/docs/interview-framework/react/app/advanced2"},next:{title:"React \u539f\u7406",permalink:"/docusaurus/docs/interview-framework/react/principle"}},p={},s=[{value:"redux",id:"redux",level:2},{value:"react-redux \u9700\u6848\u4f8b",id:"react-redux-\u9700\u6848\u4f8b",level:2},{value:"react-router",id:"router",level:2}],m={toc:s};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5468\u8fb9\u5de5\u5177"},"\u5468\u8fb9\u5de5\u5177"),(0,i.kt)("h2",{id:"redux"},"redux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"store ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u7684\u6570\u636e state\u5173\u8054\u89c6\u56fe\u6e32\u67d3"))),(0,i.kt)("li",{parentName:"ul"},"action ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u884c\u52a8 \u7c7b\u578b\u548c\u53c2\u6570\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u5f02\u6b65action \u4e2d\u95f4\u4ef6 redux-thunk / redux-saga"))),(0,i.kt)("li",{parentName:"ul"},"dispatch ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5206\u914d \u67d0\u4e2a\u884c\u52a8"))),(0,i.kt)("li",{parentName:"ul"},"reducer ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6839\u636e\u884c\u52a8\u7c7b\u578b \u8fd4\u56denewState"))),(0,i.kt)("li",{parentName:"ul"},"\u5355\u5411\u6570\u636e\u6d41\u6982\u8ff0",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"dispatch(action)"),(0,i.kt)("li",{parentName:"ol"},"reducer -> return newState"),(0,i.kt)("li",{parentName:"ol"},"subscribe \u89e6\u53d1\u901a\u77e5"))),(0,i.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5bf9dispatch\u8fdb\u884c\u6269\u5c55 redux-thunk")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const next = store.dispatch\nstore.dispatch = function exDispatch(action){\n    // \u8865\u5145\u903b\u8f91\n    next(action)\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"\u56fe\u89e3",src:r(4778).Z,width:"804",height:"827"})),(0,i.kt)("h2",{id:"react-redux-\u9700\u6848\u4f8b"},"react-redux \u9700\u6848\u4f8b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"provider"),(0,i.kt)("li",{parentName:"ul"},"connect"),(0,i.kt)("li",{parentName:"ul"},"mapStateToProps"),(0,i.kt)("li",{parentName:"ul"},"mapDispatchToProps")),(0,i.kt)("h2",{id:"router"},"react-router"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8def\u7531\u6a21\u5f0f",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"HashRouter http://localhost:3000/#/user  "),(0,i.kt)("li",{parentName:"ol"},"BrowerRouter \u6a21\u5f0f  http://localhost:3000/user \u9700server\u7aef\u652f\u6301"))),(0,i.kt)("li",{parentName:"ul"},"\u8def\u7531\u914d\u7f6e ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u52a8\u6001\u8def\u7531 path\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},":id")," \u83b7\u53d6\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"li"},"useParams()")," "),(0,i.kt)("li",{parentName:"ol"},"\u8df3\u8f6c",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u94fe\u63a5",(0,i.kt)("inlineCode",{parentName:"li"},"<Link to='path'>\u9996\u9875</Link>")),(0,i.kt)("li",{parentName:"ol"},"Js ",(0,i.kt)("inlineCode",{parentName:"li"},"const history = userHistory()")," ",(0,i.kt)("inlineCode",{parentName:"li"},"history.push('path')"))))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u61d2\u52a0\u8f7d\u8def\u7531")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import {BrowserRouter, Route, Switch} form "react-router-dom"\nimport React, { Suspense, lazy } from "react";\n\nconst Home = lazy(() => import("./routes/Home"));\nconst Detail = lazy(() => import("./routes/Detail"));\n\nconst App = ()=>{\n  <BrowserRouter>\n    <Suspense fallback={<div>Loading...</div>}>\n      <Switch>\n        <Route exact path="/" component={Home} />\n        <Route path="/detail/:id" component={Detail} />\n      </Switch>\n    </Suspense>\n  </BrowserRouter>\n}\n')))))}d.isMDXComponent=!0},4778:function(e,t,r){t.Z=r.p+"assets/images/react-redux-1905b69358752e8a0f11a43ccc352a94.png"}}]);