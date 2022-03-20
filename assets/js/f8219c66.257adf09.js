"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[5607],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,v=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),i=n(2389),o=n(3725),l=n(6010),s="tabItem_LplD";function m(e){var t,n,i,m=e.lazy,p=e.block,c=e.defaultValue,u=e.values,d=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.UB)(),b=N.tabGroupChoices,w=N.setTabGroupChoices,I=(0,r.useState)(g),x=I[0],y=I[1],C=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=b[d];null!=j&&j!==x&&k.some((function(e){return e.value===j}))&&y(j)}var L=function(e){var t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==x&&(T(t),y(a),null!=d&&w(d,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:L,onClick:L},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9841:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),l=n(8215),s=["components"],m={sidebar_position:2},p="\u4efb\u52a1\u6e05\u5355",c={unversionedId:"interview-framework/project/todolist",id:"interview-framework/project/todolist",title:"\u4efb\u52a1\u6e05\u5355",description:"- \u6280\u672f\u6808 React",source:"@site/docs/interview-framework/project/todolist.md",sourceDirName:"interview-framework/project",slug:"/interview-framework/project/todolist",permalink:"/docusaurus/docs/interview-framework/project/todolist",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee\u8bbe\u8ba1",permalink:"/docusaurus/docs/interview-framework/project/design"},next:{title:"\u8d2d\u7269\u8f66",permalink:"/docusaurus/docs/interview-framework/project/shoppingCart"}},u={},d=[{value:"\u72b6\u6001\u8bbe\u8ba1",id:"\u72b6\u6001\u8bbe\u8ba1",level:2},{value:"\u7ec4\u4ef6\u8bbe\u8ba1",id:"\u7ec4\u4ef6\u8bbe\u8ba1",level:2}],v={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4efb\u52a1\u6e05\u5355"},"\u4efb\u52a1\u6e05\u5355"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6280\u672f\u6808 React"),(0,i.kt)("li",{parentName:"ul"},"todo \u539f\u578b\u56fe \u4e0e \u62c6\u5206\u56fe")),(0,i.kt)("h2",{id:"\u72b6\u6001\u8bbe\u8ba1"},"\u72b6\u6001\u8bbe\u8ba1"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"state \u6570\u636e\u7ed3\u6784\u8bbe\u8ba1")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8bbe\u8ba1\u539f\u5219")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u7528\u6570\u636e\u63cf\u8ff0\u6240\u6709\u5185\u5bb9 ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5185\u5bb9\u5c55\u793a\u6570\u636e \u6838\u5fc3\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u9700\u8bbe\u8ba1\u903b\u8f91\u6570\u636e \u903b\u8f91\u6309\u7ec4\u4ef6\u529f\u80fd\u5206\u914d"))),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u7ed3\u6784\u5316 \u6613\u7528\u7a0b\u5e8f\u64cd\u4f5c\uff08\u67e5\u627e/\u904d\u5386\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6570\u7ec4 / \u5bf9\u8c61 "))),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u53ef\u6269\u5c55 \u4fbf\u4e8e\u8865\u5145\u65b0\u529f\u80fd ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4fee\u6539 / \u5220\u9664")))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6570\u636e\u7ed3\u6784")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"this.state = [\n  // \u6570\u7ec4\u7ed3\u6784 \u4fbf\u4e8e \u904d\u5386\u6570\u636e \u589e\u5220\u6570\u636e\n  list:[\n    // \u5bf9\u8c61\u7ed3\u6784 \u4fbf\u4e8e \u5c5e\u6027\u6269\u5c55\n    // \u6570\u636e\u904d\u5386 \u7559\u610f \u552f\u4e00key\u503c \u4fbf\u4e8ediff\n    {id:1, title:'topic1', isDone:false},\n    // more items\n  ]\n]\n")))),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u8bbe\u8ba1"},"\u7ec4\u4ef6\u8bbe\u8ba1"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8bbe\u8ba1\u539f\u5219")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u6309\u529f\u80fd\u62c6\u5206"),(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u539f\u5b50\u5316 ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ec4\u4ef6\u4e00\u4e2a\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tiny Habit")," Components"))),(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5206\u5de5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u7ec4\u4ef6 \u7edf\u4e00\u7ba1\u7406 \u6240\u6709\u6570\u636e\u4e0e\u903b\u8f91"),(0,i.kt)("li",{parentName:"ul"},"UI\u7ec4\u4ef6 \u53ea\u8d1f\u8d23\u89c6\u56fe\u4e0e\u4ea4\u4e92 \u8c03\u7528\u90e8\u5206\u6570\u636e\u4e0e\u903b\u8f91")))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7ec4\u4ef6\u62c6\u5206")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u6e05\u5355 TodoList \u5bb9\u5668\u7ec4\u4ef6 \u8d1f\u8d23\u6570\u636e\u548c\u903b\u8f91\uff08\u82e5\u4f7f\u7528redux \u6570\u636e\u548c\u903b\u8f91\u653eredux\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u7ec4\u4ef6 InputItem UI\u7ec4\u4ef6 \u8d1f\u8d23\u8f93\u5165 \u65b0\u589e\u6570\u636e\u7ed9 \u5bb9\u5668\u7ec4\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u539f\u5b50\u5316 Input"))),(0,i.kt)("li",{parentName:"ul"},"\u5217\u8868\u7ec4\u4ef6 List UI\u7ec4\u4ef6 \u8d1f\u8d23\u663e\u793a \u5bb9\u5668\u7ec4\u4ef6\u5217\u8868\u6570\u636e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5355\u5217\u7ec4\u4ef6 ListItem \u663e\u793a\u5355\u6761\u6570\u636e \u5207\u6362\u72b6\u6001 \u5220\u9664\u81ea\u8eab")))))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<TodoList>\n  <InputItem/>\n  <List/>\n</TodoList>\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4ee3\u7801")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"TodoList",label:"TodoList",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport List from "./List";\nimport InputItem from "./InputItem";\nexport default class TodoList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {list: [{id: 1,title: "\u6807\u98981",completed: false,}]};\n  }\n  render() {\n    return (\n      <div>\n        <InputItem addItem={this.addItem} />\n        <List list={this.state.list}\n          deleteItem={this.deleteItem}\n          toggleCompleted={this.toggleCompleted} />\n      </div>\n    );\n  }\n  // \u65b0\u589e\u4e00\u9879 \u4f7f\u7528 concat \u8fd4\u56de\u4e0d\u53ef\u53d8\u503c\n  addItem = (title) => {\n    const {list} = this.state;\n    this.setState({list: list.concat({id: list.length + 1,title,completed: false})});\n  };\n  // \u5220\u9664\u4e00\u9879 \u4f7f\u7528 filter \u8fd4\u56de\u4e0d\u53ef\u53d8\u503c\n  deleteItem = (id) => {\n    this.setState({list: this.state.list.filter((item) => item.id !== id)});\n  };\n  // \u5207\u6362\u5b8c\u6210\u72b6\u6001 \u4f7f\u7528 map \u8fd4\u56de\u4e0d\u53ef\u53d8\u503c \u4e14item\u8fd4\u56de\u65b0\u5bf9\u8c61\n  toggleCompleted = (id) => {\n    this.setState({\n      list: this.state.list.map((item) => {\n        const completed = item.id === id ? !item.completed : item.completed; // \u5207\u6362\u5b8c\u6210\u72b6\u6001\n        return {...item,completed};\n      }),\n    });\n  };\n}\n')),"  "),(0,i.kt)(l.Z,{value:"InputItem",label:"InputItem",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='InputItem.jsx'",title:"'InputItem.jsx'"},'import React from "react";\nimport Input from "./UI/Input";\nexport default class InputItem extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {title: "",};\n  }\n  render() {\n    return (\n      <div>\n        <Input value={this.state.title} onChange={this.changeHandler} />\n        <button onClick={this.clickHandler}>\u65b0\u589e</button>\n      </div>\n    );\n  }\n  changeHandler = (newTitle) => {\n    this.setState({title: newTitle});\n  };\n  clickHandler = () => {\n    const { addItem } = this.props;\n    addItem(this.state.title);\n    this.setState({title: ""});\n  };\n}\n')),"  "),(0,i.kt)(l.Z,{value:"Input",label:"Input",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='./UI/Input.jsx'",title:"'./UI/Input.jsx'"},'import React from "react";\nexport default class Input extends React.Component {\n  render() {\n    return <input value={this.props.value} onChange={this.onChange} />;\n  }\n  onChange = (e) => {\n    // \u4f20\u7ed9\u7236\u7ec4\u4ef6\n    const newVal = e.target.value;\n    this.props.onChange(newVal);\n  };\n}\n')),"  "),(0,i.kt)(l.Z,{value:"List",label:"List",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='List.js'",title:"'List.js'"},'import React from "react";\nimport ListItem from "./ListItem";\nexport default function List({ list = [], deleteItem, toggleCompleted }) {\n  return (\n    <div>\n      <h2>\u6e05\u5355</h2>\n      {list.map((item) => (\n        <ListItem item={item} key={item.id}\n          deleteItem={deleteItem} toggleCompleted={toggleCompleted}\n        />\n      ))}\n    </div>\n  );\n}\n')),"  "),(0,i.kt)(l.Z,{value:"ListItem",label:"ListItem",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='ListItem.js'",title:"'ListItem.js'"},'import React from "react";\nimport CheckBox from "./UI/CheckBox";\nexport default class ListItem extends React.Component {\n  render() {\n    const { item } = this.props;\n    return (\n      <div style={{ marginTop: "10px" }}>\n        <CheckBox onChange={this.completedChangeHandler} />\n        <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>\n          {item.title}\n        </span>\n        <button onClick={this.deleteHandler}>\u5220\u9664</button>\n      </div>\n    );\n  }\n  completedChangeHandler = (checked) => {\n    const { item, toggleCompleted } = this.props;\n    toggleCompleted(item.id);\n  };\n  deleteHandler = () => {\n    const { item, deleteItem } = this.props;\n    deleteItem(item.id);\n  };\n}\n')),"  "),(0,i.kt)(l.Z,{value:"CheckBox",label:"CheckBox",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='./UI/CheckBox.js'",title:"'./UI/CheckBox.js'"},'import React from "react";\nexport default class CheckBox extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {checked: false};\n  }\n  render() {\n    return (\n      <input type="checkbox" checked={this.state.checked}\n        onChange={this.onCheckboxChange}\n      />\n    );\n  }\n  onCheckboxChange = () => {\n    const newVal = !this.state.checked;\n    this.setState({checked: newVal});\n    // \u4f20\u7ed9\u7236\u7ec4\u4ef6\n    this.props.onChange(newVal);\n  };\n}\n')),"  ")))))}h.isMDXComponent=!0}}]);