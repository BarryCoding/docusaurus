"use strict";(self.webpackChunkinterview_doc=self.webpackChunkinterview_doc||[]).push([[3521],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={sidebar_position:2},s="\u539f\u578b\u4e0e\u539f\u578b\u94fe",u={unversionedId:"interview-basic/js-basic/js-prototype",id:"interview-basic/js-basic/js-prototype",title:"\u539f\u578b\u4e0e\u539f\u578b\u94fe",description:"JS \u539f\u578b\u8003\u70b9",source:"@site/docs/interview-basic/js-basic/js-prototype.md",sourceDirName:"interview-basic/js-basic",slug:"/interview-basic/js-basic/js-prototype",permalink:"/docusaurus/docs/interview-basic/js-basic/js-prototype",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf",permalink:"/docusaurus/docs/interview-basic/js-basic/js-variables"},next:{title:"\u4f5c\u7528\u57df\u4e0e\u95ed\u5305",permalink:"/docusaurus/docs/interview-basic/js-basic/js-scope-closure"}},c={},p=[{value:"JS \u539f\u578b\u8003\u70b9",id:"js-\u539f\u578b\u8003\u70b9",level:2},{value:"\u7528 class \u5b9e\u73b0\u7ee7\u627f",id:"\u7528-class-\u5b9e\u73b0\u7ee7\u627f",level:2},{value:"\u7c7b\u4e0e\u5b9e\u4f8b",id:"\u7c7b\u4e0e\u5b9e\u4f8b",level:3},{value:"\u7c7b\u7684\u7ee7\u627f",id:"\u7c7b\u7684\u7ee7\u627f",level:3},{value:"\u7406\u89e3 JS \u539f\u578b",id:"\u7406\u89e3-js-\u539f\u578b",level:2},{value:"\u539f\u578b\u5173\u7cfb",id:"\u539f\u578b\u5173\u7cfb",level:3},{value:"\u539f\u578b\u7684\u6267\u884c\u89c4\u5219",id:"\u539f\u578b\u7684\u6267\u884c\u89c4\u5219",level:3},{value:"instanceof \u539f\u578b\u94fe",id:"instanceof-\u539f\u578b\u94fe",level:2},{value:"\u9762\u8bd5\u9898",id:"\u9762\u8bd5\u9898",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u539f\u578b\u4e0e\u539f\u578b\u94fe"},"\u539f\u578b\u4e0e\u539f\u578b\u94fe"),(0,o.kt)("h2",{id:"js-\u539f\u578b\u8003\u70b9"},"JS \u539f\u578b\u8003\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5224\u65ad\u53d8\u91cf\u662f\u5426\u662f\u6570\u7ec4"),(0,o.kt)("li",{parentName:"ul"},"\u624b\u5199\u7b80\u6613jQuery\uff0c\u8003\u8651\u63d2\u4ef6\u548c\u6269\u5f20\u6027"),(0,o.kt)("li",{parentName:"ul"},"class\u7684\u539f\u578b\u672c\u8d28")),(0,o.kt)("h2",{id:"\u7528-class-\u5b9e\u73b0\u7ee7\u627f"},"\u7528 class \u5b9e\u73b0\u7ee7\u627f"),(0,o.kt)("h3",{id:"\u7c7b\u4e0e\u5b9e\u4f8b"},"\u7c7b\u4e0e\u5b9e\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"class"),(0,o.kt)("li",{parentName:"ul"},"constructor"),(0,o.kt)("li",{parentName:"ul"},"property"),(0,o.kt)("li",{parentName:"ul"},"methods")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='student.js'",title:"'student.js'"},"    // highlight-start\nclass Student {\n    constructor(name, number) {\n        this.name = name\n        this.number = number\n    }\n    sayHi() {\n        // highlight-end\n        console.log(\n            `\u59d3\u540d ${this.name} \uff0c\u5b66\u53f7 ${this.number}`\n        )\n    }\n}\n// \u901a\u8fc7\u7c7b new \u5bf9\u8c61/\u5b9e\u4f8b\nconst xialuo = new Student('\u590f\u6d1b', 100)\n")),(0,o.kt)("h3",{id:"\u7c7b\u7684\u7ee7\u627f"},"\u7c7b\u7684\u7ee7\u627f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends"),(0,o.kt)("li",{parentName:"ul"},"super"),(0,o.kt)("li",{parentName:"ul"},"\u6269\u5f20\u6216\u91cd\u5199\u5c5e\u6027\u548c\u65b9\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='student2.js' {12,14,15,17}",title:"'student2.js'","{12,14,15,17}":!0},"// \u7236\u7c7b\nclass People {\n    constructor(name) {\n        this.name = name\n    }\n    eat() {\n        console.log(`${this.name} eat something`)\n    }\n}\n\n// \u5b50\u7c7b\nclass Student extends People {\n    constructor(name, number) {\n        super(name)\n        this.number = number\n    }\n    sayHi() {\n        console.log(`\u59d3\u540d ${this.name} \u5b66\u53f7 ${this.number}`)\n    }\n}\nconst xialuo = new Student('\u590f\u6d1b', 100)\n")),(0,o.kt)("h2",{id:"\u7406\u89e3-js-\u539f\u578b"},"\u7406\u89e3 JS \u539f\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='student2.js'",title:"'student2.js'"},"// class \u6784\u5efa\u51fd\u6570 \u4e5f\u662f \u51fd\u6570\ntypeof People // 'function'\n// \u9690\u5f0f\u539f\u578b \u4e0e \u663e\u5f0f\u539f\u578b\nconsole.log(xialuo.__proto__) // \u5b9e\u4f8b\u7684 \u9690\u5f0f\u539f\u578b\nconsole.log(Student.prototype) // \u7c7b\u7684 \u663e\u5f0f\u539f\u578b\nconsole.log(xialuo.__proto__ === Student.prototype) // true\n")),(0,o.kt)("h3",{id:"\u539f\u578b\u5173\u7cfb"},"\u539f\u578b\u5173\u7cfb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7c7b\u90fd\u6709\u663e\u5f0f\u539f\u578b ",(0,o.kt)("inlineCode",{parentName:"li"},"prototype")),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5b9e\u4f8b\u90fd\u6709\u9690\u5f0f\u539f\u578b ",(0,o.kt)("inlineCode",{parentName:"li"},"__proto__")),(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u7684\u9690\u5f0f\u539f\u578b \u6307\u5411 \u5176\u7c7b\u7684\u663e\u5f0f\u539f\u578b")),(0,o.kt)("h3",{id:"\u539f\u578b\u7684\u6267\u884c\u89c4\u5219"},"\u539f\u578b\u7684\u6267\u884c\u89c4\u5219"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5b9e\u4f8b\u5c5e\u6027\u6216\u6267\u884c\u65b9\u6cd5\u65f6"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u5148\u5bfb\u627e\u81ea\u8eab\u5c5e\u6027\u548c\u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ol"},"\u627e\u4e0d\u5230\u5219\u81ea\u52a8\u53bb\u539f\u578b\u4e2d\u5bfb\u627e")),(0,o.kt)("h2",{id:"instanceof-\u539f\u578b\u94fe"},"instanceof \u539f\u578b\u94fe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='student2.js'",title:"'student2.js'"},"// \u539f\u578b\u94fe \u5b50\u7c7b\u53ef\u7406\u89e3\u4e3a\u7236\u7c7b\u7684\u5b9e\u4f8b\nconsole.log(Student.prototype.__proto__) // \u5b50\u7c7b \u663e\u5f0f\u539f\u578b\u7684\u9690\u5f0f\u539f\u578b\nconsole.log(People.prototype) // \u7236\u7c7b \u663e\u5f0f\u539f\u578b\nconsole.log(Student.prototype.__proto__ === People.prototype) // true\nconsole.log(Object.prototype.__proto__ === null) // true\n// hasOwnProperty() \u5224\u65ad\u662f\u5426\u662f\u81ea\u8eab\u5c5e\u6027\n")),(0,o.kt)("h2",{id:"\u9762\u8bd5\u9898"},"\u9762\u8bd5\u9898"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5224\u65ad\u53d8\u91cf\u662f\u5426\u662f\u6570\u7ec4\n",(0,o.kt)("inlineCode",{parentName:"li"},"a instanceof Array")),(0,o.kt)("li",{parentName:"ol"},"class \u7684\u539f\u578b\u672c\u8d28",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u539f\u578b\u5173\u7cfb"),(0,o.kt)("li",{parentName:"ol"},"\u539f\u578b\u7684\u8f6c\u578b\u89c4\u5219"),(0,o.kt)("li",{parentName:"ol"},"\u539f\u578b\u94fe"))),(0,o.kt)("li",{parentName:"ol"},"\u624b\u5199jQuery")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='jQuery.js'",title:"'jQuery.js'"},"class jQuery {\n    constructor(selector) {\n        const result = document.querySelectorAll(selector)\n        const length = result.length\n        for (let i = 0; i < length; i++) {\n            this[i] = result[i]\n        }\n        this.length = length\n        this.selector = selector\n    }\n    get(index) {\n        return this[index]\n    }\n    each(fn) {\n        for (let i = 0; i < this.length; i++) {\n            const elem = this[i]\n            fn(elem)\n        }\n    }\n    on(type, fn) {\n        return this.each(elem => {\n            elem.addEventListener(type, fn, false)\n        })\n    }\n}\n\n// \u6269\u5c55\u65b9\u5f0f1 \u7c7b\u7684\u663e\u5f0f\u539f\u578b \u6269\u5f20\u529f\u80fd\njQuery.prototype.dialog = function (info) {\n    alert(info)\n}\n\n// \u6269\u5f20\u65b9\u5f0f2 \u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b \u6269\u5f20\u529f\u80fd\nclass myJQuery extends jQuery {\n    constructor(selector) {\n        super(selector)\n    }\n    // \u6269\u5c55\u81ea\u5df1\u7684\u65b9\u6cd5\n    addClass(className) {}\n}\n")))}d.isMDXComponent=!0}}]);